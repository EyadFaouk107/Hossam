import { motion } from 'motion/react';
import { Instagram, Send, Mail, Phone, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../hooks/useLanguage';
import { useState, FormEvent, ChangeEvent } from 'react';

export const Contact = () => {
  const { lang, t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    age: '',
    experience: 'Intermediate',
    coachBefore: 'no',
    goals: [] as string[],
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const goalsText = formData.goals.length > 0 ? formData.goals.join(', ') : 'None specified';
    const message = `New Coaching Inquiry\n\nName: ${formData.name}\nEmail: ${formData.email}\nLocation: ${formData.location}\nAge: ${formData.age}\nExperience: ${formData.experience}\nWorked with Coach Before: ${formData.coachBefore}\nGoals: ${goalsText}\n\nMessage/Notes:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201116214309?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    
    setStatus('success');
    setFormData({
      name: '',
      email: '',
      location: '',
      age: '',
      experience: 'Intermediate',
      coachBefore: 'no',
      goals: [],
      message: ''
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const f = t.contact.fields;

  return (
    <section id="contact" className={`py-32 px-6 bg-background relative overflow-hidden ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          <motion.div
             initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className={`text-center ${lang === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}
          >
             <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">{t.contact.tag}</span>
             <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-tight mb-8 uppercase">
                {lang === 'ar' ? (
                  <>ابدأ رحلة <span className="gold-text-gradient">تحولك</span> البدني</>
                ) : (
                  <>Let's Build Your <span className="gold-text-gradient">Legacy</span></>
                )}
             </h2>
             <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-12 max-w-lg mx-auto lg:mx-0">
                {t.contact.subtitle}
             </p>

             <div className="space-y-6 sm:space-y-8 max-w-md mx-auto lg:mx-0">
                <div className={`flex items-center gap-4 sm:gap-6 group ${lang === 'ar' ? 'text-right flex-row-reverse' : 'text-left'}`}>
                   <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-background transition-all duration-300">
                      <Mail size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                   </div>
                    <div>
                       <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</div>
                       <div className="text-lg sm:text-xl font-bold break-all">hossam@gmail.com</div>
                    </div>
                </div>
                <div className={`flex items-center gap-4 sm:gap-6 group ${lang === 'ar' ? 'text-right flex-row-reverse' : 'text-left'}`}>
                   <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-background transition-all duration-300">
                      <Phone size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                   </div>
                   <div>
                      <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">{lang === 'ar' ? 'واتساب' : 'WhatsApp'}</div>
                      <div className="text-lg sm:text-xl font-bold">+20 111 621 4309</div>
                   </div>
                </div>
                <div className={`flex items-center gap-4 sm:gap-6 group ${lang === 'ar' ? 'text-right flex-row-reverse' : 'text-left'}`}>
                   <a 
                     href="https://www.instagram.com/j0e309?igsh=MWg4eHoxdmJxYW9qaA==" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-gold group-hover:text-background transition-all duration-300"
                   >
                      <Instagram size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                   </a>
                   <div>
                      <div className="text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">{lang === 'ar' ? 'انستجرام' : 'Instagram'}</div>
                      <a 
                         href="https://www.instagram.com/j0e309?igsh=MWg4eHoxdmJxYW9qaA==" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-lg sm:text-xl font-bold hover:text-gold transition-colors"
                      >
                        @hossamyousef_fit
                      </a>
                   </div>
                </div>
             </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: lang === 'ar' ? -30 : 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-white/5 border border-white/5"
          >
             {status === 'success' ? (
               <div className="h-full flex flex-col items-center justify-center text-center py-10">
                 <motion.div
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center text-gold mb-6"
                 >
                   <CheckCircle2 size={40} />
                 </motion.div>
                 <h3 className="text-2xl font-display font-black mb-4 uppercase tracking-tight">
                   {f.success}
                 </h3>
                 <p className="text-gray-400 mb-8 max-w-sm">
                   {f.successDesc}
                 </p>
                 <Button 
                   onClick={() => setStatus('idle')}
                   variant="outline"
                   className="px-10"
                 >
                   {lang === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another'}
                 </Button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className={`space-y-6 ${lang === 'ar' ? 'text-right' : ''}`}>
                  <div className="grid sm:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className={`text-[10px] uppercase font-bold tracking-widest text-gray-500 ${lang === 'ar' ? 'mr-2' : 'ml-2'}`}>
                          {f.name}
                        </label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={lang === 'ar' ? 'أحمد محمد' : 'John Doe'} 
                          className={`w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 focus:border-gold/50 outline-none transition-colors font-medium text-sm ${lang === 'ar' ? 'text-right' : ''}`}
                        />
                     </div>
                     <div className="space-y-2">
                        <label className={`text-[10px] uppercase font-bold tracking-widest text-gray-500 ${lang === 'ar' ? 'mr-2' : 'ml-2'}`}>
                          {f.email}
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com" 
                          className={`w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 focus:border-gold/50 outline-none transition-colors font-medium text-sm ${lang === 'ar' ? 'text-right' : ''}`}
                        />
                     </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className={`text-[10px] uppercase font-bold tracking-widest text-gray-500 ${lang === 'ar' ? 'mr-2' : 'ml-2'}`}>
                          {f.location}
                        </label>
                        <input 
                          type="text" 
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          placeholder={lang === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'} 
                          className={`w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 focus:border-gold/50 outline-none transition-colors font-medium text-sm ${lang === 'ar' ? 'text-right' : ''}`}
                        />
                     </div>
                     <div className="space-y-2">
                        <label className={`text-[10px] uppercase font-bold tracking-widest text-gray-500 ${lang === 'ar' ? 'mr-2' : 'ml-2'}`}>
                          {f.age}
                        </label>
                        <input 
                          type="number" 
                          name="age"
                          required
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="25" 
                          className={`w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 focus:border-gold/50 outline-none transition-colors font-medium text-sm ${lang === 'ar' ? 'text-right' : ''}`}
                        />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className={`text-[10px] uppercase font-bold tracking-widest text-gray-500 ${lang === 'ar' ? 'mr-2' : 'ml-2'}`}>
                      {f.experience.label}
                     </label>
                     <select 
                       name="experience"
                       required
                       value={formData.experience}
                       onChange={handleChange}
                       className={`w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 focus:border-gold/50 outline-none transition-colors font-medium text-sm text-gray-400 ${lang === 'ar' ? 'text-right' : ''}`}
                     >
                        <option value="Beginner">{f.experience.beginner}</option>
                        <option value="Intermediate">{f.experience.intermediate}</option>
                        <option value="Advanced">{f.experience.advanced}</option>
                     </select>
                  </div>

                  <div className="space-y-3">
                     <label className={`text-[10px] uppercase font-bold tracking-widest text-gray-500 ${lang === 'ar' ? 'mr-2' : 'ml-2'}`}>
                      {f.coachBefore.label}
                     </label>
                     <div className={`flex gap-6 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
                        {[
                          { id: 'yes', label: f.coachBefore.yes },
                          { id: 'no', label: f.coachBefore.no }
                        ].map((opt) => (
                          <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
                             <div className="relative flex items-center justify-center">
                                <input 
                                  type="radio" 
                                  name="coachBefore" 
                                  value={opt.id}
                                  checked={formData.coachBefore === opt.id}
                                  onChange={handleChange}
                                  className="peer sr-only"
                                />
                                <div className="w-5 h-5 rounded-full border border-white/20 peer-checked:border-gold transition-colors" />
                                <div className="absolute w-2.5 h-2.5 rounded-full bg-gold scale-0 peer-checked:scale-100 transition-transform" />
                             </div>
                             <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{opt.label}</span>
                          </label>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-3">
                     <label className={`text-[10px] uppercase font-bold tracking-widest text-gray-500 ${lang === 'ar' ? 'mr-2' : 'ml-2'}`}>
                      {f.goals.label}
                     </label>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { id: 'Muscle Gain', label: f.goals.muscle },
                          { id: 'Fat Loss', label: f.goals.fat },
                          { id: 'Fitness', label: f.goals.fitness },
                          { id: 'Competition Prep', label: f.goals.comp }
                        ].map((goal) => (
                          <label key={goal.id} className={`flex items-center gap-3 cursor-pointer group p-3 rounded-xl border border-white/5 hover:border-gold/30 transition-all ${formData.goals.includes(goal.id) ? 'bg-gold/5 border-gold/50' : 'bg-white/2'}`}>
                             <div className="relative flex items-center justify-center">
                                <input 
                                  type="checkbox" 
                                  checked={formData.goals.includes(goal.id)}
                                  onChange={() => handleGoalToggle(goal.id)}
                                  className="peer sr-only"
                                />
                                <div className="w-5 h-5 rounded-md border border-white/20 peer-checked:border-gold transition-colors" />
                                <CheckCircle2 size={12} className="absolute text-gold scale-0 peer-checked:scale-100 transition-transform" />
                             </div>
                             <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{goal.label}</span>
                          </label>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className={`text-[10px] uppercase font-bold tracking-widest text-gray-500 ${lang === 'ar' ? 'mr-2' : 'ml-2'}`}>
                      {f.notes}
                     </label>
                     <textarea 
                       rows={4}
                       name="message"
                       required
                       value={formData.message}
                       onChange={handleChange}
                       placeholder={lang === 'ar' ? 'أخبرني عن الصعوبات التي تواجهها حالياً...' : 'Tell me about your current struggle...'} 
                       className={`w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 focus:border-gold/50 outline-none transition-colors font-medium text-sm ${lang === 'ar' ? 'text-right' : ''}`}
                     />
                  </div>
                  <Button type="submit" disabled={status === 'sending'} className="w-full py-4 text-xs">
                     {status === 'sending' ? f.sending : f.submit} 
                     {status !== 'sending' && <Send size={16} className={lang === 'ar' ? 'mr-2 rotate-180' : 'ml-2'} />}
                  </Button>
               </form>
             )}
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export const Footer = () => {
  const { lang } = useLanguage();
  return (
    <footer className={`py-12 sm:py-20 px-4 sm:px-6 border-t border-white/5 bg-[#050505] ${lang === 'ar' ? 'font-arabic' : ''}`}>
       <div className={`max-w-7xl mx-auto flex flex-col items-center justify-between gap-10 lg:flex-row ${lang === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`${lang === 'ar' ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
             <a href="#" className="text-2xl font-display font-black tracking-tighter">
                {lang === 'ar' ? 'حسام' : 'HOSSAM'} <span className="text-gold">{lang === 'ar' ? 'يوسف' : 'YOUSEF'}</span>
             </a>
             <p className="text-gray-500 text-xs sm:text-sm mt-4 font-medium tracking-wide">
                &copy; 2026 {lang === 'ar' ? 'حسام يوسف فتنس. جميع الحقوق محفوظة.' : 'Hossam Yousef Fitness. All Rights Reserved.'}
             </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
             <a href="#" className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-gray-400 hover:text-gold transition-colors">{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
             <a href="#" className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-gray-400 hover:text-gold transition-colors">{lang === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}</a>
             <a href="#contact" className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-gray-400 hover:text-gold transition-colors">{lang === 'ar' ? 'اتصل بنا' : 'Contact'}</a>
          </div>
          
          <div className="flex items-center gap-4">
             {[
               { icon: <Instagram size={20} />, href: "https://www.instagram.com/j0e309?igsh=MWg4eHoxdmJxYW9qaA==" },
               { icon: <MessageCircle size={20} />, href: "https://wa.me/201116214309" },
               { icon: (
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                 </svg>
               ), href: "https://x.com" }
             ].map((social, i) => (
               <a 
                 key={i} 
                 href={social.href} 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-background transition-all duration-300"
               >
                 {social.icon}
               </a>
             ))}
          </div>
       </div>
    </footer>
  );
};
