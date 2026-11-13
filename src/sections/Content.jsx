import * as I from 'lucide-react'
import Section from '../components/Section'
import {skills,project,jobs,edu,certs,soft,langs} from '../data'
export const About=()=>(<Section id="about" eyebrow="About Me" title="A data-driven mindset" alt><div className="grid md:grid-cols-3 gap-8">
<p className="md:col-span-2 text-lg leading-relaxed text-ink/80">I am a B.Tech Information Technology graduate with a strong interest in Business Analytics, Data Analysis and Data Visualization. I work with Python, SQL, Excel and Power BI, and apply statistical analysis to interpret data and support data-driven decision-making. I enjoy turning raw data into clear, meaningful insights.</p>
<div className="card"><I.GraduationCap className="text-gold mb-3"/><p className="font-semibold">B.Tech IT</p><p className="text-sm text-ink/70">Gnanamani College of Technology, 2022–2026</p></div></div></Section>)
export const Skills=()=>(<Section id="skills" eyebrow="Technical Skills" title="Tools & expertise"><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{skills.map(([t,l,ic])=>{const Ic=I[ic];return(<div key={t} className="card"><Ic className="text-forest mb-4"/><h3 className="font-serif text-xl mb-3">{t}</h3><div className="flex flex-wrap gap-2">{l.map(s=><span key={s} className="tag">{s}</span>)}</div></div>)})}</div>
<div className="grid md:grid-cols-2 gap-6 mt-6"><div className="card"><h3 className="font-serif text-xl mb-3">Soft Skills</h3><div className="flex flex-wrap gap-2">{soft.map(s=><span key={s} className="tag">{s}</span>)}</div></div>
<div className="card"><h3 className="font-serif text-xl mb-3">Languages</h3><div className="flex flex-wrap gap-2">{langs.map(s=><span key={s} className="tag">{s}</span>)}</div></div></div></Section>)
export const Projects=()=>(<Section id="projects" eyebrow="Featured Project" title="Selected work" alt><div className="card grid md:grid-cols-5 gap-8 hover:translate-y-0">
<div className="md:col-span-2 rounded-xl bg-forest text-cream p-8 flex flex-col justify-between min-h-[220px]"><I.HeartPulse size={44} className="text-gold"/><p className="font-serif text-2xl mt-8">Predictive analytics for neonatal care</p></div>
<div className="md:col-span-3"><h3 className="font-serif text-2xl mb-4">{project.title}</h3><div className="flex flex-wrap gap-2 mb-5">{project.tech.map(t=><span key={t} className="tag">{t}</span>)}</div>
<p className="text-xs tracking-widest text-gold font-semibold mb-2">KEY CONTRIBUTIONS</p><ul className="space-y-2">{project.points.map(p=><li key={p} className="flex gap-2 text-ink/80"><I.CheckCircle2 size={18} className="text-forest shrink-0 mt-1"/>{p}</li>)}</ul></div></div></Section>)
export const Experience=()=>(<Section id="experience" eyebrow="Internship Experience" title="Hands-on learning"><div className="border-l-2 border-gold ml-2 space-y-8">
{jobs.map(j=><div key={j.role} className="pl-8 relative"><i className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-forest border-4 border-cream"/><div className="card"><h3 className="font-serif text-xl">{j.role}</h3><p className="text-forest text-sm mb-3">{j.org}</p><ul className="list-disc ml-5 space-y-1 text-ink/80">{j.pts.map(p=><li key={p}>{p}</li>)}</ul></div></div>)}</div></Section>)
export const Education=()=>(<Section id="education" eyebrow="Education" title="Academic background" alt><div className="grid md:grid-cols-2 gap-6">
{edu.map(e=><div key={e.t} className="card"><I.GraduationCap className="text-gold mb-3"/><h3 className="font-serif text-xl">{e.t}</h3><p className="text-ink/75">{e.s}</p><p className="text-sm text-forest mt-2">{e.y}{e.x&&` · ${e.x}`}</p></div>)}</div></Section>)
export const Certs=()=>(<Section id="certifications" eyebrow="Certifications" title="Continuous learning"><div className="grid sm:grid-cols-3 gap-6">
{certs.map(c=><div key={c} className="card text-center"><I.Award className="text-gold mx-auto mb-3" size={32}/><h3 className="font-serif text-lg">{c}</h3></div>)}</div></Section>)
