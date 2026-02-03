// ====== Simple bilingual toggle (EN default) ======
const translations = {
  en: {
    brandTag: "Spanish for real life",
    navMembership: "Membership",
    navPrivate: "Private lessons",
    navFaq: "FAQ",
    navContact: "Contact",

    ctaFreeClass: "Book your free class",
    ctaJoin: "Join the Telegram membership",
    ctaPrivate: "Explore private lessons",
    trust1: "Weekly topic + materials",
    trust2: "Exercises + guidance",
    trust3: "30‑min live session each week",
    heroKicker: "Speak Spanish with confidence",
    heroTitle: "Learn Spanish the real way — practical, clear, and human.",
    heroSub: "Join our Telegram membership for weekly lessons, exercises, and a live Q&A — or choose private sessions tailored to your goals.",
    heroNote: "Tip: Save this page and come back anytime — everything is here in one place.",

    cardTitle: "Start in 3 steps",
    badgeFast: "Fast & simple",
    step1Title: "Pick your path",
    step1Desc: "Membership (community) or private sessions.",
    step2Title: "Get your weekly plan",
    step2Desc: "Simple lessons, practice, and support.",
    step3Title: "Speak with confidence",
    step3Desc: "Real Spanish for real conversations.",
    ctaJoinShort: "Join now — $20/mo",
    ctaFreeClassShort: "Free first class",
    cardTiny: "Secure checkout • Cancel anytime",

    howTitle: "How it works",
    howSub: "A simple system designed for consistency, clarity, and confidence.",
    how1Title: "Weekly topic",
    how1Desc: "Each week you receive a new topic explained clearly, with real examples.",
    how2Title: "Practice material",
    how2Desc: "PDF theory + exercises so you can practice at your own pace.",
    how3Title: "Live support",
    how3Desc: "Weekly 30‑minute live session for Q&A and reinforcement.",

    mTitle: "Telegram Membership",
    mSub: "A supportive space to learn, practice, and stay consistent — for just <strong>$20/month</strong>.",
    mWhatsInside: "What you get",
    mBullet1: "1 new topic every week (clear explanation)",
    mBullet2: "Theory PDF + practice exercises",
    mBullet3: "Weekly 30‑min live session (Q&A / reinforcement)",
    mBullet4: "Community support + accountability",
    mBullet5: "Practical Spanish for real life and travel",
    ctaTelegram: "Open Telegram",
    mTiny: "Replace the buttons with your Stripe and Telegram links (instructions included).",
    mPerfectFor: "Perfect for you if…",
    mFit1: "You want structure without overwhelm",
    mFit2: "You learn best with short weekly lessons",
    mFit3: "You want a safe space to ask questions",
    mFit4: "You want to improve confidence and fluency",
    mMiniTitle: "Pro tip",
    mMiniText: "Join the membership, then book a private session whenever you want extra personalization.",

    pTitle: "Private Lessons",
    pSub: "Personalized 1:1 sessions to accelerate your progress — focused on your goals and real communication.",
    p1Title: "Personal plan",
    p1Desc: "We build a plan around your level, goals, and schedule.",
    p2Title: "Real practice",
    p2Desc: "Conversation, corrections, and confidence-building.",
    p3Title: "Faster results",
    p3Desc: "Perfect if you want speed, clarity, and accountability.",
    ctaBookPrivate: "Book a private session",
    ctaMembershipInstead: "Prefer the membership?",
    noteTitle: "Want both?",
    noteText: "Many students join the Telegram membership for weekly consistency and add private sessions when they want extra personalization.",

    tTitle: "What students say",
    tSub: "Add your real testimonials here — even 3 short quotes boost conversion.",
    t1: "“I finally feel confident speaking. The weekly topics are clear and practical.”",
    t1who: "— Student, USA",
    t2: "“The live Q&A helped me fix my mistakes fast. I love the community!”",
    t2who: "— Student, Germany",
    t3: "“Simple explanations, real Spanish, and a kind teacher. Highly recommend.”",
    t3who: "— Student, Brazil",

    faqTitle: "FAQ",
    faqSub: "Quick answers to the most common questions.",
    faq1q: "Is the Telegram membership suitable for beginners?",
    faq1a: "Yes. Lessons are clear and practical. We focus on real-life Spanish and guide you step by step.",
    faq2q: "What do I get each week?",
    faq2a: "A new topic, a PDF with theory + exercises, and a 30-minute live session for Q&A or reinforcement.",
    faq3q: "Can I cancel anytime?",
    faq3a: "Yes. The membership is monthly and you can cancel at any time from your subscription.",
    faq4q: "Do you offer private lessons?",
    faq4a: "Yes. Private sessions are personalized and focused on your goals (travel, work, conversation, confidence).",
    ctaTalk: "Talk to us",

    cTitle: "Contact",
    cSub: "Book your free class or ask a question — we’ll reply as soon as possible.",
    cBookTitle: "Book your free class",
    cBookDesc: "Add your Calendly (or WhatsApp) link below. For now it points to a placeholder.",
    ctaEmail: "Email us",
    cTiny: "Tip: Use the same CTA everywhere to avoid confusion.",
    cLinksTitle: "Quick links",
    linkIG: "Instagram",
    linkTT: "TikTok",
    linkYT: "YouTube",
    linkTG: "Telegram",
    linkPay: "Payment (Stripe)",
    cMiniTitle: "One‑page funnel",
    cMiniText: "Short video content → this page → membership or private sessions. Simple, measurable, and scalable.",

    fText: "Where Spanish meets excellence. Online & worldwide.",
    fRights: "All rights reserved"
  },
  es: {
    brandTag: "Español para la vida real",
    navMembership: "Membresía",
    navPrivate: "Clases privadas",
    navFaq: "Preguntas",
    navContact: "Contacto",

    ctaFreeClass: "Reserva tu clase gratuita",
    ctaJoin: "Únete al grupo de Telegram",
    ctaPrivate: "Ver clases privadas",
    trust1: "Tema semanal + material",
    trust2: "Ejercicios + guía",
    trust3: "Sesión en vivo 30 min por semana",
    heroKicker: "Habla español con confianza",
    heroTitle: "Aprende español de verdad — práctico, claro y humano.",
    heroSub: "Únete a nuestra membresía en Telegram con lecciones semanales, ejercicios y un vivo de preguntas — o elige sesiones privadas según tus objetivos.",
    heroNote: "Tip: Guarda esta página — acá está todo en un solo lugar.",

    cardTitle: "Comenzá en 3 pasos",
    badgeFast: "Rápido y simple",
    step1Title: "Elegí tu camino",
    step1Desc: "Membresía (comunidad) o clases privadas.",
    step2Title: "Recibí tu plan semanal",
    step2Desc: "Lecciones simples, práctica y soporte.",
    step3Title: "Habla con confianza",
    step3Desc: "Español real para conversaciones reales.",
    ctaJoinShort: "Unirme — $20/mes",
    ctaFreeClassShort: "Primera clase gratis",
    cardTiny: "Pago seguro • Cancelá cuando quieras",

    howTitle: "Cómo funciona",
    howSub: "Un sistema simple para constancia, claridad y confianza.",
    how1Title: "Tema semanal",
    how1Desc: "Cada semana recibís un tema explicado de forma clara, con ejemplos reales.",
    how2Title: "Material de práctica",
    how2Desc: "PDF teórico + ejercicios para practicar a tu ritmo.",
    how3Title: "Soporte en vivo",
    how3Desc: "Sesión semanal de 30 minutos para preguntas y refuerzo.",

    mTitle: "Membresía en Telegram",
    mSub: "Un espacio de apoyo para aprender, practicar y mantener constancia — por solo <strong>$20/mes</strong>.",
    mWhatsInside: "Qué incluye",
    mBullet1: "1 tema nuevo por semana (explicación clara)",
    mBullet2: "PDF teórico + ejercicios",
    mBullet3: "Vivo semanal de 30 min (preguntas / refuerzo)",
    mBullet4: "Comunidad + acompañamiento",
    mBullet5: "Español práctico para vida real y viajes",
    ctaTelegram: "Abrir Telegram",
    mTiny: "Reemplazá los botones con tus links de Stripe y Telegram (instrucciones incluidas).",
    mPerfectFor: "Ideal para vos si…",
    mFit1: "Querés estructura sin abrumarte",
    mFit2: "Aprendés mejor con lecciones cortas semanales",
    mFit3: "Querés un espacio seguro para preguntar",
    mFit4: "Querés mejorar confianza y fluidez",
    mMiniTitle: "Tip pro",
    mMiniText: "Únete a la membresía y reservá una clase privada cuando quieras más personalización.",

    pTitle: "Clases privadas",
    pSub: "Sesiones 1:1 personalizadas para acelerar tu progreso — enfocadas en tus objetivos y comunicación real.",
    p1Title: "Plan personal",
    p1Desc: "Armamos un plan según tu nivel, objetivos y horarios.",
    p2Title: "Práctica real",
    p2Desc: "Conversación, correcciones y seguridad al hablar.",
    p3Title: "Resultados más rápidos",
    p3Desc: "Perfecto si querés velocidad, claridad y compromiso.",
    ctaBookPrivate: "Reservar clase privada",
    ctaMembershipInstead: "¿Preferís la membresía?",
    noteTitle: "¿Querés ambos?",
    noteText: "Muchos alumnos se unen a la membresía para mantener constancia y suman clases privadas cuando quieren más personalización.",

    tTitle: "Lo que dicen los alumnos",
    tSub: "Agregá tus testimonios reales acá — incluso 3 frases cortas aumentan conversiones.",
    t1: "“Por fin me siento segura hablando. Los temas semanales son claros y prácticos.”",
    t1who: "— Alumna, USA",
    t2: "“El vivo semanal me ayudó a corregir errores rápido. ¡Amo la comunidad!”",
    t2who: "— Alumna, Alemania",
    t3: "“Explicaciones simples, español real y una profe muy cálida. Súper recomendado.”",
    t3who: "— Alumna, Brasil",

    faqTitle: "Preguntas frecuentes",
    faqSub: "Respuestas rápidas a las dudas más comunes.",
    faq1q: "¿La membresía de Telegram sirve para principiantes?",
    faq1a: "Sí. Las lecciones son claras y prácticas. Nos enfocamos en español real y avanzamos paso a paso.",
    faq2q: "¿Qué recibo cada semana?",
    faq2a: "Un tema nuevo, un PDF con teoría + ejercicios, y un vivo de 30 minutos para preguntas o refuerzo.",
    faq3q: "¿Puedo cancelar cuando quiera?",
    faq3a: "Sí. La membresía es mensual y podés cancelar en cualquier momento desde tu suscripción.",
    faq4q: "¿Ofrecés clases privadas?",
    faq4a: "Sí. Las sesiones privadas son personalizadas y enfocadas en tus objetivos (viajes, trabajo, conversación, confianza).",
    ctaTalk: "Escribinos",

    cTitle: "Contacto",
    cSub: "Reservá tu clase gratis o consultanos — respondemos lo antes posible.",
    cBookTitle: "Reservá tu clase gratuita",
    cBookDesc: "Agregá tu link de Calendly (o WhatsApp). Por ahora apunta a un placeholder.",
    ctaEmail: "Enviar email",
    cTiny: "Tip: Usá el mismo CTA en todos lados para evitar confusión.",
    cLinksTitle: "Links rápidos",
    linkIG: "Instagram",
    linkTT: "TikTok",
    linkYT: "YouTube",
    linkTG: "Telegram",
    linkPay: "Pago (Stripe)",
    cMiniTitle: "Embudo en 1 página",
    cMiniText: "Videos cortos → esta página → membresía o clases privadas. Simple, medible y escalable.",

    fText: "Donde el español se encuentra con la excelencia. Online y para todo el mundo.",
    fRights: "Todos los derechos reservados"
  }
};

const state = {
  lang: "en",
  links: {
    stripe: "https://buy.stripe.com/3cI3cvdbR7tDgdD65Tgw007",
    calendly: "https://calendly.com/escoladeidiomasliberty/free-class",
    instagram: "https://www.instagram.com/libertyspanishschool/",
    tiktok: "https://tiktok.com/@libertyspanishschool",
    facebook: "https://www.facebook.com/profile.php?id=61578069895237"
  }
};

function applyLinks(){
  const $ = (id)=>document.getElementById(id);

  const setHref = (id, url) => { const el = $(id); if(el) el.href = url; };

  // Primary CTAs -> Stripe by default
  setHref("ctaJoinTop", state.links.stripe);
  setHref("ctaJoinCard", state.links.stripe);
  setHref("ctaStripeMid", state.links.stripe);
  setHref("ctaJoinBottom", state.links.stripe);
  setHref("linkStripe", state.links.stripe);

  // Telegram open
  setHref("ctaTelegramMid", state.links.telegram);
  setHref("linkTelegram", state.links.telegram);

  // Calendly / WhatsApp booking
  setHref("ctaCalendly", state.links.calendly);
  setHref("ctaFreeClassTop", state.links.calendly);
  setHref("ctaFreeClassCard", state.links.calendly);
  setHref("ctaPrivateBook", state.links.calendly);

  // Social
  setHref("linkInstagram", state.links.instagram);
  setHref("linkTikTok", state.links.tiktok);
  setHref("linkYouTube", state.links.youtube);
}

function setLanguage(lang){
  state.lang = lang;
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang === "es" ? "es" : "en";
  document.getElementById("langPill").textContent = lang.toUpperCase();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(!key) return;
    const val = dict[key];
    if(val === undefined) return;
    // some fields include <strong> tags; use innerHTML for those
    if(typeof val === "string" && val.includes("<")) el.innerHTML = val;
    else el.textContent = val;
  });

  // Store preference
  try{ localStorage.setItem("lss_lang", lang); } catch(e){}
}

function init(){
  // footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // restore language
  let saved = "en";
  try{ saved = localStorage.getItem("lss_lang") || "en"; } catch(e){}
  setLanguage(saved === "es" ? "es" : "en");

  // links
  applyLinks();

  // toggle
  const btn = document.getElementById("langToggle");
  btn.addEventListener("click", () => setLanguage(state.lang === "en" ? "es" : "en"));
}
init();
