import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '../data'
export default function Navbar(){
const [open,setOpen]=useState(false),[active,setActive]=useState('Home')
useEffect(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setActive(nav.find(n=>n.toLowerCase()===e.target.id)||'Home')),{rootMargin:'-45% 0px -50% 0px'})
nav.forEach(n=>{const el=document.getElementById(n.toLowerCase());el&&o.observe(el)});return()=>o.disconnect()},[])
return(<header className="fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur border-b border-line"><div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
<a href="#home" className="font-serif text-xl font-semibold text-forest">JANANI R</a>
<nav className="hidden lg:flex gap-6 text-sm">{nav.map(n=><a key={n} href={`#${n.toLowerCase()}`} className={`transition hover:text-forest ${active===n?'text-forest font-semibold border-b-2 border-gold':'text-ink/70'}`}>{n}</a>)}</nav>
<a href="#contact" className="btn btn-p hidden lg:inline-flex !py-2">Let's Connect</a>
<button aria-label="Menu" className="lg:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
{open&&<div className="lg:hidden bg-cream border-t border-line px-5 py-4 flex flex-col gap-3">{nav.map(n=><a key={n} onClick={()=>setOpen(false)} href={`#${n.toLowerCase()}`}>{n}</a>)}
<a href="#contact" onClick={()=>setOpen(false)} className="btn btn-p justify-center">Let's Connect</a></div>}</header>)}
