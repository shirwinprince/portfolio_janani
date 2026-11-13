import { motion } from 'framer-motion'
export default function Section({id,eyebrow,title,alt,children}){
return(<section id={id} className={`py-20 md:py-28 ${alt?'bg-ivory/60':''}`}><div className="max-w-6xl mx-auto px-5">
<motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.6}}>
<p className="text-xs tracking-[.25em] text-gold font-semibold uppercase mb-3">{eyebrow}</p>
<h2 className="font-serif text-3xl md:text-4xl mb-10">{title}</h2>{children}</motion.div></div></section>)}
