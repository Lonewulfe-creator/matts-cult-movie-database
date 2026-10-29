import xlsx from "xlsx";
import fs from "fs";
import { createClient } from "@supabase/supabase-js";

const validateOnly=process.argv.includes('--validate-only');
const workbookPath=process.argv[2];
const supabase=createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.SUPABASE_SERVICE_ROLE_KEY!);

const slugify=(t,y)=>`${String(t).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}-${y||'unknown'}`;
const norm=v=>String(v||'').toLowerCase().replace(/[^a-z0-9]/g,'');

function detectSheet(wb){
 for(const s of wb.SheetNames){
  const rows=xlsx.utils.sheet_to_json(wb.Sheets[s],{header:1});
  const h=(rows[0]||[]).map(norm);
  if(h.includes('title')&&h.includes('year')) return s;
 }
 throw new Error('Film sheet not found');
}

const wb=xlsx.readFile(workbookPath);
const sheet=detectSheet(wb);
const rows=xlsx.utils.sheet_to_json(wb.Sheets[sheet],{defval:null});
const errors=[]; const seen=new Set();
const films=[];
rows.forEach((r,i)=>{
 const row=i+2;
 const title=r.Title||r.title;
 const year=Number(r.Year)||null;
 const genre=r.Genre||null;
 const synopsis=r.Synopsis||null;
 const cult=Number(r['Cult Score']);
 const coll=Number(r['Collection Score']);
 if(!title) errors.push(['ERROR',row,'Missing title']);
 if(year && (year<1888||year>2100)) errors.push(['ERROR',row,'Invalid year']);
 const key=`${title}|${year}`;
 if(title&&seen.has(key)) errors.push(['ERROR',row,'Duplicate Title+Year']);
 seen.add(key);
 if(!genre) errors.push(['WARN',row,'Missing Genre']);
 if(!synopsis) errors.push(['WARN',row,'Missing Synopsis']);
 if(!Number.isNaN(cult) && (cult<0||cult>10)) errors.push(['ERROR',row,'Cult Score out of range']);
 if(!Number.isNaN(coll) && (coll<0||coll>10)) errors.push(['ERROR',row,'Collection Score out of range']);
 films.push({title,year,genre,synopsis,slug:slugify(title,year)});
});

const csv=['severity,row,message',...errors.map(e=>e.join(','))].join('
');
fs.writeFileSync('validation-report.csv',csv);
fs.writeFileSync('films-seed.json',JSON.stringify(films,null,2));

if(validateOnly){console.log('Validation only complete'); process.exit(0);}
(async()=>{
 const {error}=await supabase.from('films').upsert(films,{onConflict:'title,year'});
 if(error) throw error;
 console.log(`Imported ${films.length} films`);
})();
