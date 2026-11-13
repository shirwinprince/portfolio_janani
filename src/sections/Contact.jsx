import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Section from '../components/Section'
import {contact} from '../data'
export default function Contact(){
const [f,setF]=useState({name:'',email:'',message:''}),[er,setEr]=useState({}),[ok,setOk]=useState(false)
const submit=e=>{e.preventDefault();const x={}
if(f.name.trim().length<2)x.name='Please enter your name.'
if(!/^\S+@\S+\.\S+$/.test(f.email))x.email='Enter a valid email.'
if(f.message.trim().length<10)x.message='Message must be at least 10 characters.'
setEr(x);if(Object.keys(x).length)return
window.location.href=`mailto:${contact.email}?subject=${encodeURIComponent('Portfolio enquiry from '+f.name)}&body=${encodeURIComponent(f.message+'\n\n'+f.name+' ('+f.email+')')}`
setOk(true);setF({name:'',email:'',message:''})}
const inp="w-full rounded-xl border border-line bg-card px-4 py-3 focus:outline-none focus:border-forest"
return(<Section id="contact" eyebrow="Contact" title="Let's Turn Data Into Opportunities." alt><div className="grid md:grid-cols-2 gap-10">
<div className="space-y-4">{[[Mail,contact.email,`mailto:${contact.email}`],[Phone,contact.phone,`tel:${contact.phone.replace(/-/g,'')}`],[MapPin,contact.loc]].map(([Ic,t,h])=>
<div key={t} className="card flex items-center gap-4 !p-4"><Ic className="text-forest"/>{h?<a href={h} className="hover:text-forest break-all">{t}</a>:<span>{t}</span>}</div>)}</div>
<form onSubmit={submit} noValidate className="space-y-4">
{['name','email'].map(k=><div key={k}><input className={inp} placeholder={k==='name'?'Your name':'Your email'} value={f[k]} onChange={e=>setF({...f,[k]:e.target.value})}/>{er[k]&&<p className="text-red-700 text-sm mt-1">{er[k]}</p>}</div>)}
<div><textarea rows={5} className={inp} placeholder="Your message" value={f.message} onChange={e=>setF({...f,message:e.target.value})}/>{er.message&&<p className="text-red-700 text-sm mt-1">{er.message}</p>}</div>
<button className="btn btn-p">Send Message <Send size={16}/></button>
{ok&&<p className="text-forest text-sm">Thank you! Your email app has opened with your message ready to send.</p>}</form></div></Section>)}
