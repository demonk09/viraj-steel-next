import { ArrowRight, ShieldCheck, Sparkles, Truck, MessageCircle, CheckCircle2 } from 'lucide-react';

const products = [
  { name: 'Viraj Supreme Locker', category: 'Household', tag: 'Best Seller' },
  { name: 'Classic Steel Locker', category: 'Household', tag: 'Popular' },
  { name: 'Dulhan Dressing Model', category: 'Dressing', tag: 'New' },
  { name: 'Vira-2G Office Storage', category: 'Office', tag: 'Professional' },
];

export default function Home() {
  return (
    <main>
      <nav className="nav"><div className="container nav-inner"><div className="logo"><span>V</span> VIRAJ STEEL</div><div className="links"><a href="#products">Products</a><a href="#why">Why Viraj</a><a href="#about">About</a><a href="#contact">Contact</a></div><a className="nav-cta" href="#contact">Get a Quote <ArrowRight size={16}/></a></div></nav>

      <section className="hero"><div className="container hero-grid"><div><div className="eyebrow"><Sparkles size={15}/> Built for Indian homes</div><h1>Steel that stays<br/><em>strong for years.</em></h1><p className="hero-copy">Premium steel furniture engineered for security, durability and everyday elegance. Designed to protect what matters most.</p><div className="actions"><a className="primary" href="#products">Explore Collection <ArrowRight size={18}/></a><a className="secondary" href="#contact"><MessageCircle size={18}/> Talk to us</a></div><div className="proof"><div><b>10+</b><span>Years rust protection</span></div><div><b>100%</b><span>Quality steel build</span></div><div><b>Pan India</b><span>Delivery available</span></div></div></div><div className="hero-art"><div className="glow"/><div className="cabinet"><div className="cab-top"/><div className="door"><div className="handle"/><div className="badge">V</div></div><div className="cab-base"/></div><div className="art-label"><span>01</span> Engineered protection</div></div></div></section>

      <section className="marquee"><div>PRECISION MANUFACTURING</div><div>BUILT TO LAST</div><div>SMART STORAGE</div><div>TRUSTED QUALITY</div><div>PRECISION MANUFACTURING</div></section>

      <section id="products" className="section"><div className="container"><div className="section-head"><div><div className="eyebrow">Our collection</div><h2>Storage, <em>reimagined.</em></h2></div><a href="#contact" className="text-link">Need help choosing? <ArrowRight size={16}/></a></div><div className="product-grid">{products.map((p, i)=><article className="product" key={p.name}><div className={'product-image p'+i}><div className="product-shape"><div className="product-handle"/></div><span className="tag">{p.tag}</span></div><div className="product-info"><div><span>{p.category}</span><h3>{p.name}</h3></div><ArrowRight size={20}/></div></article>)}</div></div></section>

      <section id="why" className="dark-section"><div className="container why-grid"><div><div className="eyebrow light">The Viraj difference</div><h2>Made for real life.<br/><em>Built for India.</em></h2><p>We combine robust steel construction with thoughtful design to create furniture that looks refined today and keeps performing tomorrow.</p><a className="secondary light-btn" href="#contact">Discover our story <ArrowRight size={17}/></a></div><div className="features"><div><ShieldCheck/><h3>10-year rust protection</h3><p>Durable finishes made for India's climate.</p></div><div><CheckCircle2/><h3>Quality checked</h3><p>Consistent workmanship at every stage.</p></div><div><Truck/><h3>Reliable delivery</h3><p>Get your furniture where you need it.</p></div><div><Sparkles/><h3>Thoughtful design</h3><p>Practical storage without compromising style.</p></div></div></div></section>

      <section id="about" className="story"><div className="container story-grid"><div className="story-number">V<span>01</span></div><div><div className="eyebrow">Our philosophy</div><h2>Furniture should be an investment, <em>not a replacement.</em></h2><p>From wardrobes and dressers to office storage, Viraj Steel creates dependable products that become part of your everyday life. Every detail is designed around strength, usability and long-term value.</p></div></div></section>

      <section id="contact" className="contact"><div className="container contact-box"><div><div className="eyebrow">Let's build together</div><h2>Looking for the<br/><em>right storage?</em></h2><p>Tell us what you need and our team will help you find the right Viraj product.</p></div><form><input placeholder="Your name"/><input placeholder="Phone number"/><select defaultValue=""><option value="" disabled>What are you looking for?</option><option>Household storage</option><option>Dressing</option><option>Office furniture</option></select><button className="primary" type="button">Send enquiry <ArrowRight size={17}/></button></form></div></section>

      <footer><div className="container footer-inner"><div className="logo"><span>V</span> VIRAJ STEEL</div><p>Premium steel furniture for modern living.</p><small>© {new Date().getFullYear()} Viraj Steel. All rights reserved.</small></div></footer>
    </main>
  );
}