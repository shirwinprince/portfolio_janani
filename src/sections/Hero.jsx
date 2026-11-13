import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
export default function Hero(){
const [err,setErr]=useState(false)
return(<section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28"><div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
<motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
<p className="text-xs tracking-[.25em] text-gold font-semibold mb-5">BUSINESS ANALYTICS | DATA ANALYSIS</p>
<h1 className="font-serif text-4xl md:text-6xl leading-tight mb-4">Turning Data Into Meaningful Insights.</h1>
<p className="font-serif text-2xl text-forest mb-5">JANANI R</p>
<p className="text-ink/75 leading-relaxed mb-8 max-w-lg">B.Tech Information Technology graduate with hands-on skills in Python, SQL, Excel and Power BI, focused on data analysis, visualization and data-driven decision-making.</p>
<div className="flex flex-wrap gap-4"><a href="#projects" className="btn btn-p">Explore My Work <ArrowRight size={16}/></a>
<a href="/resume.pdf" download="Janani_R_Resume.pdf" className="btn btn-o">Download Resume <Download size={16}/></a></div></motion.div>
<motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.8}} className="relative mx-auto w-full max-w-sm">
<div className="absolute -top-4 -right-4 w-full h-full rounded-[2rem] border-2 border-gold"/><div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-ivory"/>
<div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-ivory shadow-xl border border-line">
{err?<div className="w-full h-full grid place-items-center font-serif text-7xl text-forest">JR</div>:<img src="/images/profile.png" alt="Janani R" className="w-full h-full object-cover object-top" onError={()=>setErr(true)}/>}</div>
<span className="absolute bottom-4 right-[-8px] bg-card border border-line rounded-full px-4 py-2 text-xs font-medium shadow flex items-center gap-2"><i className="w-2 h-2 rounded-full bg-forest"/>Open to Opportunities</span></motion.div></div></section>)}
