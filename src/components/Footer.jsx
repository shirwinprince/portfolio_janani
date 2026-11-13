import {nav,contact} from '../data'
export default function Footer(){return(<footer className="bg-ink text-cream/80 py-12"><div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-8 text-sm">
<div><p className="font-serif text-xl text-cream">JANANI R</p><p>Business Analytics | Data Analysis</p></div>
<div className="flex flex-wrap gap-x-4 gap-y-2">{nav.map(n=><a key={n} href={`#${n.toLowerCase()}`} className="hover:text-gold">{n}</a>)}</div>
<div><a href={`mailto:${contact.email}`} className="hover:text-gold break-all">{contact.email}</a><p className="mt-2">© {new Date().getFullYear()} Janani R. All rights reserved.</p></div></div></footer>)}
