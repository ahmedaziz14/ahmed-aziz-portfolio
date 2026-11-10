import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  BrainCircuit, Code2, Database, Cpu, Sparkles, ExternalLink, FileText,
  MapPin, GraduationCap, BriefcaseBusiness, ChevronRight, Terminal
} from 'lucide-react'

type Project = {
  name: string; category: 'AI / ML' | 'Deep Learning & NLP' | 'Software Engineering' | 'Creative'
  description: string; stack: string[]; url: string; featured?: boolean
}

const github = 'https://github.com/ahmedaziz14'
const projects: Project[] = [
  { name: 'Customer Response Prediction', category: 'AI / ML', description: 'Machine learning project focused on predicting customer responses from data.', stack: ['Python', 'Pandas', 'Scikit-learn'], url: `${github}/customer-response-prediction`, featured: true },
  { name: 'CarDekho Price Predictor', category: 'AI / ML', description: 'Vehicle price estimation through data preparation, feature engineering and regression models.', stack: ['Python', 'Pandas', 'Scikit-learn'], url: `${github}/CarDekho-Price-Predictor`, featured: true },
  { name: 'Kaggle House Prices', category: 'AI / ML', description: 'A predictive modelling project built around the Kaggle House Prices dataset.', stack: ['Python', 'Machine Learning', 'Kaggle'], url: `${github}/Kaggle-House-Prices`, featured: true },
  { name: 'Valorant ACS Predictor', category: 'AI / ML', description: 'A prediction project exploring player performance indicators in Valorant.', stack: ['Python', 'Machine Learning'], url: `${github}/Valorant-ACS-Predictor` },
  { name: 'ChatBot', category: 'Deep Learning & NLP', description: 'A conversational chatbot project exploring interactive language-based applications.', stack: ['Python', 'NLP'], url: `${github}/ChatBot`, featured: true },
  { name: 'Tactical Shooter 2D', category: 'Creative', description: 'A 2D tactical shooter game project combining gameplay logic and software development.', stack: ['Game Development'], url: `${github}/Tactical-Shooter-2D` },
  { name: 'Django React Library', category: 'Software Engineering', description: 'A full-stack library application combining a Django backend and a React frontend.', stack: ['Django', 'React'], url: `${github}/django-react-library` },
  { name: 'PyCTk Library', category: 'Software Engineering', description: 'A Python library project built around CustomTkinter.', stack: ['Python', 'CustomTkinter'], url: `${github}/PyCTk-Library` },
  { name: 'MiniStore', category: 'Software Engineering', description: 'A software project demonstrating application development and store-related workflows.', stack: ['Software Development'], url: `${github}/MiniStore` },
  { name: 'SOAP Project', category: 'Software Engineering', description: 'SOAP and RESTful web services connected to MongoDB, with CRUD operations and live synchronization.', stack: ['SOAP', 'REST API', 'MongoDB'], url: `${github}/SoapProject` },
]

const filters = ['All', 'AI / ML', 'Deep Learning & NLP', 'Software Engineering', 'Creative'] as const
type Filter = typeof filters[number]

const skills = [
  { icon: BrainCircuit, title: 'AI & Machine Learning', items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Regression', 'Random Forest', 'Feature Engineering'] },
  { icon: Sparkles, title: 'Deep Learning & NLP', items: ['TensorFlow', 'Keras', 'Neural Networks', 'LSTM', 'Transformers', 'Hugging Face', 'DistilBERT'] },
  { icon: Code2, title: 'Software Development', items: ['React', 'React Native', 'Expo', 'Node.js', 'Express.js', 'Flask', 'JavaScript', 'Java', 'PHP'] },
  { icon: Database, title: 'Data & Tools', items: ['PostgreSQL', 'Oracle', 'MongoDB', 'Supabase', 'SQL', 'Git', 'GitHub', 'Docker', 'Linux'] },
]

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: .6, ease: 'easeOut' as const } } }

function App() {
  const [filter, setFilter] = useState<Filter>('All')
  const [mobileOpen, setMobileOpen] = useState(false)
  const visibleProjects = useMemo(() => filter === 'All' ? projects : projects.filter(p => p.category === filter), [filter])

  const closeMenu = () => setMobileOpen(false)
  const nav = [['About', '#about'], ['Experience', '#experience'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']]

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>AA<span>.</span></a>
        <nav className="desktop-nav">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
        <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
      </header>
      <AnimatePresence>{mobileOpen && <motion.nav className="mobile-nav" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}>{nav.map(([label,href])=><a key={label} href={href} onClick={closeMenu}>{label}</a>)}</motion.nav>}</AnimatePresence>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
            <div className="eyebrow"><span className="status-dot" /> OPEN TO INTERNSHIP OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M AHMED AZIZ BRAHIM</p>
            <h1>Turning data into<br /><span className="gradient-text">intelligent impact.</span></h1>
            <p className="hero-description">Engineering student in <strong>Data Science & Artificial Intelligence</strong>, passionate about Machine Learning, Deep Learning and building useful technology.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="/Ahmed-Aziz-Brahim-CV.pdf" target="_blank" rel="noreferrer"><FileText size={16} /> View my CV</a>
            </div>
            <div className="social-row">
              <a href={github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <a href="mailto:ahmedazizbrahim2@gmail.com"><Mail size={17}/> Email</a>
            </div>
          </motion.div>
          <motion.div className="hero-visual" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}}>
            <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
            <div className="portrait-frame"><div className="portrait-glow" /><img className="hero-portrait" src="/public/ahmed-aziz.jpeg" alt="Ahmed Aziz Brahim" /><div className="portrait-label"><span className="status-dot" /> DATA SCIENCE & AI</div></div>
            <div className="float-card float-card-top"><span className="mini-icon"><Cpu size={16}/></span><div><b>Machine Learning</b><small>Predict · Learn · Improve</small></div></div>
            <div className="float-card float-card-bottom"><span className="mini-icon purple"><Terminal size={16}/></span><div><b>Engineering mindset</b><small>Build with purpose</small></div></div>
            <div className="visual-caption"><span>01 / PROFILE</span><span>MONASTIR · TUNISIA</span></div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        </section>

        <section className="section-wrap intro-section" id="about">
          <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{once:true}} variants={reveal}>
            <span className="section-index">01 — ABOUT</span><h2>Curiosity drives me.<br /><span className="muted-heading">Engineering makes it real.</span></h2>
          </motion.div>
          <div className="about-grid">
            <motion.div className="about-text" initial="hidden" whileInView="visible" viewport={{once:true}} variants={reveal}>
              <p>I'm <strong>Ahmed Aziz Brahim</strong>, an engineering student at the École Polytechnique de Sousse, specializing in Data Science and Artificial Intelligence.</p>
              <p>My interests lie at the intersection of data, intelligent systems and software engineering. I enjoy exploring datasets, experimenting with predictive models and transforming ideas into practical applications.</p>
              <p>During my R&D internship at AXIA Solutions, I worked on customer churn prediction and explored Machine Learning, Deep Learning and a DistilBERT-based transfer learning approach.</p>
              <div className="location-line"><MapPin size={16}/> Tunisia <span className="line-separator"/> Available for opportunities</div>
            </motion.div>
            <motion.div className="stats-grid" initial="hidden" whileInView="visible" viewport={{once:true}} variants={reveal}>
              <div className="stat-card"><b>AI<span>.</span></b><small>My main direction</small></div>
              <div className="stat-card"><b>ML<span>.</span></b><small>Learning from data</small></div>
              <div className="stat-card"><b>DL<span>.</span></b><small>Neural networks & NLP</small></div>
              <div className="stat-card"><b>Dev<span>.</span></b><small>From idea to product</small></div>
            </motion.div>
          </div>
        </section>

        <section className="section-wrap timeline-section" id="experience">
          <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{once:true}} variants={reveal}>
            <span className="section-index">02 — JOURNEY</span><h2>Experience & <span className="muted-heading">education.</span></h2>
          </motion.div>
          <div className="journey-grid">
            <div className="journey-column">
              <div className="column-label"><BriefcaseBusiness size={17}/> EXPERIENCE</div>
              <article className="journey-card">
                <div className="journey-meta"><span>JUNE — JULY 2026</span><span className="pill">R&D INTERNSHIP</span></div>
                <h3>Data Science & AI Intern</h3><h4>AXIA Solutions</h4>
                <p>Worked on customer churn prediction in telecommunications: data preparation, exploratory analysis, model experimentation and classification evaluation.</p>
                <ul><li>Compared Machine Learning models, including Random Forest, and Deep Learning MLP networks.</li><li>Explored a DistilBERT transfer learning approach using Data-to-Text representations.</li></ul>
                <div className="tag-row"><span>Python</span><span>Scikit-learn</span><span>TensorFlow</span><span>DistilBERT</span></div>
              </article>
            </div>
            <div className="journey-column">
              <div className="column-label"><GraduationCap size={18}/> EDUCATION</div>
              <article className="journey-card education-card">
                <div className="journey-meta"><span>2025 — 2028 · EXPECTED</span><span className="pill">CURRENT</span></div>
                <h3>Engineering Degree in Computer Science</h3><h4>École Polytechnique de Sousse</h4><p>Specialization in Data Science and Artificial Intelligence.</p>
              </article>
              <article className="journey-card education-card">
                <div className="journey-meta"><span>2021 — 2024</span></div>
                <h3>Bachelor's Degree in Computer Science</h3><h4>ISIMA Mahdia</h4><p>Software Engineering (Génie Logiciel).</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{once:true}} variants={reveal}>
            <span className="section-index">03 — TOOLKIT</span><h2>Technologies I <span className="muted-heading">work with.</span></h2>
            <p className="section-subtitle">A growing toolkit across intelligent systems, data and software development.</p>
          </motion.div>
          <div className="skills-grid">
            {skills.map((group,i)=>{const Icon=group.icon;return <motion.article className="skill-card" key={group.title} initial="hidden" whileInView="visible" viewport={{once:true}} variants={reveal} transition={{delay:i*.08}}>
              <div className="skill-icon"><Icon size={21}/></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item=><span key={item}>{item}</span>)}</div>
            </motion.article>})}
          </div>
          <p className="language-note"><span>LANGUAGES</span> Arabic — Native <i/> French — B1 <i/> English — B1</p>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap">
            <motion.div className="section-heading projects-heading" initial="hidden" whileInView="visible" viewport={{once:true}} variants={reveal}>
              <span className="section-index">04 — SELECTED WORK</span><h2>Ideas turned into <span className="muted-heading">projects.</span></h2>
              <p className="section-subtitle">A selection of experiments, applications and engineering projects. Explore the source code on GitHub.</p>
            </motion.div>
            <div className="project-toolbar">
              <div className="filter-list">{filters.map(f=><button key={f} className={filter===f?'filter active':'filter'} onClick={()=>setFilter(f)}>{f}</button>)}</div>
              <a className="all-github" href={`${github}?tab=repositories`} target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={15}/></a>
            </div>
            <motion.div layout className="projects-grid">
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((p,i)=><motion.article className="project-card" key={p.name} layout initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:10}} transition={{duration:.25,delay:i*.025}}>
                  <div className="project-top"><span className="project-number">PROJECT / {String(projects.indexOf(p)+1).padStart(2,'0')}</span><a href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} on GitHub`}><ArrowUpRight size={18}/></a></div>
                  <div className="project-symbol">{p.category==='AI / ML'?<BrainCircuit/>:p.category==='Deep Learning & NLP'?<Sparkles/>:p.category==='Creative'?<Cpu/>:<Code2/>}</div>
                  <span className="project-category">{p.category}</span><h3>{p.name}</h3><p>{p.description}</p>
                  <div className="project-bottom"><div className="tag-row">{p.stack.map(t=><span key={t}>{t}</span>)}</div><a href={p.url} target="_blank" rel="noreferrer" className="source-link">Source code <ExternalLink size={13}/></a></div>
                </motion.article>)}
              </AnimatePresence>
            </motion.div>
            <div className="github-banner"><div><Github size={23}/><div><b>More on GitHub</b><small>Explore repositories, experiments and contributions.</small></div></div><a href={github} target="_blank" rel="noreferrer" className="button button-primary">Visit my GitHub <ArrowUpRight size={16}/></a></div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <motion.div className="contact-panel" initial="hidden" whileInView="visible" viewport={{once:true}} variants={reveal}>
            <span className="section-index">05 — GET IN TOUCH</span><div className="contact-orb"><Mail size={26}/></div>
            <h2>Have a project or<br/><span className="gradient-text">an opportunity in mind?</span></h2>
            <p>I'm open to discussing internships, AI projects, research opportunities and collaborations. Let's connect.</p>
            <a className="button button-primary contact-button" href="mailto:ahmedazizbrahim2@gmail.com">Send me an email <ArrowUpRight size={17}/></a>
            <div className="contact-links"><a href="mailto:ahmedazizbrahim2@gmail.com"><Mail size={16}/> ahmedazizbrahim2@gmail.com</a><a href={github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a></div>
          </motion.div>
        </section>
      </main>
      <footer className="footer section-wrap"><a className="brand" href="#home">AA<span>.</span></a><span>Designed & built by Ahmed Aziz Brahim · © {new Date().getFullYear()}</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  )
}
export default App
