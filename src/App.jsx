import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Search, 
  Globe as GlobeIcon, 
  Play, 
  FileText, 
  ExternalLink, 
  ArrowUpRight 
} from 'lucide-react';

// 라이브러리 에러 방지를 위한 인라인 SVG 아이콘 컴포넌트 정의
const Instagram = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Facebook = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const brandColor = "#EE7123";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'company', 'create', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { en: 'COMPANY', kr: '회사 소개', id: 'company' },
    { en: 'WHAT WE CREATE', kr: '포트폴리오', id: 'create' },
    { en: 'CONTACT US', kr: '문의하기', id: 'contact' },
  ];

  const projects = [
    { title: "2024 Tech Annual Report", category: "CATALOG", year: "2024", img: "https://images.unsplash.com/photo-1544476073-a2bc350172d6?auto=format&fit=crop&q=80" },
    { title: "Luxury Brand Lookbook", category: "BROCHURE", year: "2023", img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80" },
    { title: "Identity Motion Film", category: "VIDEO", year: "2024", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80" },
    { title: "Global Summit Leaflet", category: "LEAFLET", year: "2023", img: "https://images.unsplash.com/photo-1517618771529-c41f9960537c?auto=format&fit=crop&q=80" },
    { title: "Corporate Vision 2030", category: "VIDEO", year: "2023", img: "https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?auto=format&fit=crop&q=80" },
    { title: "Sustainability Report", category: "CATALOG", year: "2024", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-pretendard selection:bg-[#EE7123] selection:text-white scroll-smooth">
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white py-3 shadow-md border-b border-slate-100' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className={`text-2xl tracking-tight transition-colors duration-300 flex items-baseline gap-1 ${!isScrolled ? 'text-white' : 'text-slate-900'}`}>
              <span className="font-black" style={{ color: brandColor }}>ART</span>
              <span className="font-light" style={{ color: brandColor }}>DESIGN</span>
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-12 group/nav">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={`group relative h-7 overflow-hidden text-[15px] font-bold tracking-tight transition-all duration-300 group-hover/nav:opacity-40 hover:!opacity-100 ${!isScrolled ? 'text-white' : 'text-slate-700'} ${activeSection === link.id ? '!opacity-100' : ''}`} style={{ color: activeSection === link.id ? brandColor : '' }}>
                <div className="transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2 flex flex-col items-center">
                  <span className="h-7 flex items-center justify-center">{link.en}</span>
                  <span className="h-7 flex items-center justify-center font-black" style={{ color: brandColor }}>{link.kr}</span>
                </div>
              </a>
            ))}
          </div>
          <div className={`hidden lg:flex items-center space-x-6 ${!isScrolled ? 'text-white' : 'text-slate-900'}`}>
            <button className="transition-colors opacity-80 hover:opacity-100 group"><Search size={20} className="group-hover:text-[#EE7123] transition-colors" /></button>
            <div className="flex items-center space-x-1 cursor-pointer transition-colors text-[14px] font-bold opacity-80 hover:opacity-100 hover:text-[#EE7123]"><GlobeIcon size={18} /><span>KR</span></div>
          </div>
          <button className={`lg:hidden p-2 rounded-lg ${!isScrolled ? 'text-white' : 'text-slate-900'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
        <div className={`fixed inset-0 bg-white z-[90] flex flex-col pt-24 px-8 transition-transform duration-500 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="text-3xl font-black mb-8 tracking-tighter border-b border-slate-100 pb-4 flex flex-col group" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="text-slate-300 text-sm tracking-widest mb-1">{link.en}</span>
              <span className="flex justify-between items-center group-hover:text-[#EE7123] transition-colors">{link.kr}<ArrowUpRight size={24} /></span>
            </a>
          ))}
        </div>
      </nav>

      <section id="home" className="relative h-[90vh] md:h-screen flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-black/70 via-black/30 to-black/60 absolute z-10" />
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80')] bg-cover bg-center animate-subtle-zoom" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 w-full text-white">
          <div className="overflow-hidden mb-4"><span className="inline-block font-bold tracking-[0.4em] text-sm animate-in slide-in-from-bottom duration-700 uppercase italic" style={{ color: brandColor }}>Visual & Motion Studio</span></div>
          <h1 className="text-4xl md:text-5xl font-black mb-8 leading-[1.2] tracking-tighter animate-in fade-in slide-in-from-bottom-12 duration-1000">VISUALIZING<br />THE BRAND<br /><span className="text-transparent border-t-0 bg-clip-text bg-gradient-to-r from-white to-white/40 font-serif italic">EXPERIENCE.</span></h1>
          <p className="max-w-2xl text-slate-300 text-lg md:text-xl mb-12 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-200">시선을 사로잡는 시각 언어로 브랜드의 가치를 증명합니다. 카달로그, 브로슈어, 영상디자인까지 ArtDesign은 독보적인 크리에이티브를 지향합니다.</p>
          <div className="flex animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300"><a href="#create" className="text-white px-10 py-5 font-bold rounded-full hover:bg-white hover:text-slate-900 transition-all flex items-center group shadow-xl shadow-orange-950/40" style={{ backgroundColor: brandColor }}>PROJECTS <ArrowUpRight className="ml-2 group-hover:rotate-45 transition-transform" size={20} /></a></div>
        </div>
      </section>

      <section id="company" className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="sticky top-32">
              <span className="font-bold tracking-[0.3em] text-sm uppercase mb-6 block" style={{ color: brandColor }}>01 / COMPANY</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">기업의 본질을 꿰뚫는<br />디자인 전문 그룹.</h2>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-xl">ArtDesign은 단순한 미적 추구를 넘어 기업의 전략적 메시지를 시각화하는 파트너입니다. 창원 마산의 노하우를 가진 크리에이티브 팀이 비주얼 솔루션을 제공합니다.</p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex items-start space-x-4"><div className="p-3 bg-orange-50 rounded-xl" style={{ color: brandColor }}><FileText size={24}/></div><div><div className="font-bold font-pretendard">Print Media</div><div className="text-xs text-slate-400 font-pretendard">Catalogs & Leaflets</div></div></div>
                <div className="flex items-start space-x-4"><div className="p-3 bg-orange-50 rounded-xl" style={{ color: brandColor }}><Play size={24}/></div><div><div className="font-bold font-pretendard">Motion Film</div><div className="text-xs text-slate-400 font-pretendard">Video Design</div></div></div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="aspect-[16/10] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative border border-slate-100">
                <img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80" alt="Design Studio" className="w-full h-full object-cover" />
                <div className="absolute inset-0 opacity-5 mix-blend-multiply" style={{ backgroundColor: brandColor }} />
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div><div className="text-4xl font-black text-slate-900 mb-2 font-pretendard tracking-tight">3,500+</div><div className="text-sm font-bold text-slate-400 uppercase tracking-widest font-pretendard">Printed Works</div></div>
                <div><div className="text-4xl font-black text-slate-900 mb-2 font-pretendard tracking-tight">24Yrs</div><div className="text-sm font-bold text-slate-400 uppercase tracking-widest font-pretendard">Studio History</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="create" className="py-32 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div><span className="font-bold tracking-[0.3em] text-sm uppercase mb-4 block" style={{ color: brandColor }}>02 / WHAT WE CREATE</span><h2 className="text-4xl md:text-6xl font-black tracking-tighter italic font-pretendard">Portfolio</h2></div>
            <div className="flex flex-wrap gap-4 text-xs font-black tracking-widest font-pretendard">{['ALL', 'CATALOG', 'BROCHURE', 'LEAFLET', 'VIDEO'].map((cat) => (<button key={cat} className={`px-6 py-3 rounded-full border border-white/10 hover:bg-white hover:text-slate-950 transition-all ${cat === 'ALL' ? 'bg-white text-slate-950' : ''}`}>{cat}</button>))}</div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {projects.map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-slate-800 shadow-2xl">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: `${brandColor}CC` }}><div className="text-center px-8"><div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-900 mx-auto mb-4 transition-transform group-hover:scale-110">{project.category === 'VIDEO' ? <Play size={24} /> : <ArrowUpRight size={24} />}</div><p className="text-sm font-bold tracking-widest text-white uppercase font-pretendard">Project Detail</p></div></div>
                </div>
                <div><div className="flex items-center space-x-2 mb-2"><span className="text-[11px] font-bold tracking-widest uppercase font-pretendard" style={{ color: brandColor }}>{project.category}</span></div><h3 className="text-2xl font-bold mb-2 group-hover:text-[#EE7123] transition-colors tracking-tight font-pretendard">{project.title}</h3><p className="text-slate-500 font-medium text-sm font-pretendard">{project.year} | Visual Direction</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-1