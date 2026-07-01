import { useState, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Linkedin, Github, Instagram, MessageSquare, Send, CheckCircle2, Sparkles } from "lucide-react";
import { PERSONAL_DETAILS } from "../data";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { socials } = PERSONAL_DETAILS;
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await emailjs.send(
        "service_pzgyand",
        "template_zmfw7zb",
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          subject: formData.subject || "New Portfolio Inquiry",
          message: formData.message,
          name: formData.name,
          email: formData.email,
        },
        "oaZHkwCLsGZfVuJ5-"
      );

      if (result.status === 200 || result.text === "OK") {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Auto clear success state after 8 seconds
        setTimeout(() => setSubmitSuccess(false), 8000);
      } else {
        throw new Error(result.text || "Failed to deliver email via EmailJS.");
      }
    } catch (error: any) {
      console.error("Transmission error:", error);
      setSubmitError(error?.text || "Failed to deliver your message. Please check your network or try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 md:py-32 bg-near-black/95 border-t border-white/5 overflow-hidden select-none"
    >
      {/* Dynamic light blur backing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-neon-lime/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Large Typography Headline inspired by the reference */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24 overflow-hidden">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-4">
            08 // GET IN TOUCH WITH OM
          </span>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="headline-giant text-4xl sm:text-6xl md:text-8xl font-accent font-black tracking-tighter text-white max-w-4xl leading-tight"
          >
            LET'S BUILD <span className="text-neon-lime">SOMETHING AMAZING</span>
          </motion.h2>
          <div className="h-1.5 w-32 bg-neon-lime mt-6 rounded-none" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct details */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <h3 className="text-xl md:text-2xl font-bold text-white font-display uppercase tracking-wide mb-6">
              Contact Channels
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 font-light">
              Have a startup concept, digital asset request, or software project collaboration? Reach out directly via these channels or submit the interactive form.
            </p>

            {/* List of details with quick hover interactions */}
            <div className="flex flex-col gap-5 mb-10">
              
              <a 
                href={`mailto:${socials.email}`}
                className="flex items-center gap-4 p-4 rounded-sm bg-white/5 border border-white/15 hover:border-neon-lime/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-sm bg-neon-lime/10 text-neon-lime">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Email</span>
                  <span className="text-white text-sm font-semibold group-hover:text-neon-lime transition-colors duration-200">{socials.email}</span>
                </div>
              </a>

              <a 
                href={`tel:${socials.phone}`}
                className="flex items-center gap-4 p-4 rounded-sm bg-white/5 border border-white/15 hover:border-neon-lime/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-sm bg-neon-lime/10 text-neon-lime">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Phone</span>
                  <span className="text-white text-sm font-semibold group-hover:text-neon-lime transition-colors duration-200">{socials.phone}</span>
                </div>
              </a>

              <div 
                className="flex items-center gap-4 p-4 rounded-sm bg-white/5 border border-white/15 hover:border-neon-lime/30 transition-all duration-300 group cursor-default"
              >
                <div className="p-3 rounded-sm bg-neon-lime/10 text-neon-lime">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Discord & IG</span>
                  <span className="text-white text-sm font-semibold">
                    Discord: <strong className="text-neon-lime">{socials.discord}</strong> | IG: <strong className="text-zinc-300">{socials.instagram.split("/").pop()}</strong>
                  </span>
                </div>
              </div>

            </div>

            {/* Quick social grids */}
            <div className="flex gap-4">
              <a 
                href={socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-3 bg-white/5 border border-white/10 hover:border-neon-lime hover:text-neon-lime text-zinc-300 font-mono text-xs rounded-sm flex items-center gap-2 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a 
                href={socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-3 bg-white/5 border border-white/10 hover:border-neon-lime hover:text-neon-lime text-zinc-300 font-mono text-xs rounded-sm flex items-center gap-2 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Form panel */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-sm glass-panel bg-near-black/50 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col items-start gap-2">
                        <label htmlFor="name" className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/15 focus:border-neon-lime focus:outline-none p-4 rounded-none text-white font-sans text-sm transition-colors duration-300"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="flex flex-col items-start gap-2">
                        <label htmlFor="email" className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/15 focus:border-neon-lime focus:outline-none p-4 rounded-none text-white font-sans text-sm transition-colors duration-300"
                          placeholder="johndoe@example.com"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <label htmlFor="subject" className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/15 focus:border-neon-lime focus:outline-none p-4 rounded-none text-white font-sans text-sm transition-colors duration-300"
                        placeholder="Collaboration proposal"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-2">
                      <label htmlFor="message" className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/15 focus:border-neon-lime focus:outline-none p-4 rounded-none text-white font-sans text-sm transition-colors duration-300 resize-none"
                        placeholder="Describe your idea or project scope here..."
                      />
                    </div>

                    {submitError && (
                      <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono rounded-sm text-left">
                        {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-neon-lime text-near-black font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-neon-lime/90 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2 self-start"
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center py-16 px-4"
                  >
                    <div className="p-4 bg-neon-lime/10 border border-neon-lime/30 text-neon-lime rounded-none mb-6">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h4 className="text-2xl font-bold font-display text-white mb-3">
                      TRANSMISSION SUCCESSFUL!
                    </h4>
                    <p className="text-zinc-400 text-sm max-w-md leading-relaxed mb-8">
                      Thank you for contacting Om Manoj Patil. Your message has been routed and we will get back to you shortly. Let's make an impact!
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 bg-white/5 border border-white/10 hover:border-neon-lime/30 text-xs font-mono text-zinc-300 hover:text-neon-lime rounded-sm transition-all duration-200"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
