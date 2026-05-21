"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, Send, CheckCircle2, ArrowRight } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const roles = [
  "AI & Machine Learning",
  "Full Stack Development",
  "DevOps & Cloud",
  "QA Automation",
  "Data Science",
  "UI/UX Design",
  "Product Management",
  "Other",
];

export function InternshipModal({ open, onClose }: Props) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", college: "", role: "", description: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => { setSubmitted(false); setForm({ name:"",email:"",phone:"",college:"",role:"",description:"" }); }, 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="bd"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ type: "spring", damping: 26, stiffness: 340 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-lg rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg,rgba(13,22,41,0.99),rgba(5,10,20,1))",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(0,102,255,0.08)",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-7 py-5 border-b border-white/[0.06]"
                style={{ background: "linear-gradient(135deg,rgba(0,102,255,0.12),rgba(34,211,238,0.05))" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white">Apply for Internship</h2>
                    <p className="text-xs text-white/40">Meta Intelligo Technologies</p>
                  </div>
                </div>
                <button onClick={handleClose}
                  className="p-2 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/[0.06] transition-all">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-7">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Application Submitted!</h3>
                      <p className="text-white/50 text-sm mb-5">
                        Thanks for applying! Our team will review your application and reach out within 3 business days.
                      </p>
                      <button onClick={handleClose}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all">
                        Close <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                      {/* Perks banner */}
                      <div className="flex flex-wrap gap-2 mb-2">
                        {["3–6 Month Program","Paid Internship","Real Projects","Placement Assistance"].map(p => (
                          <span key={p} className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-300">{p}</span>
                        ))}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-1.5">Full Name *</label>
                          <input required value={form.name} onChange={set("name")} placeholder=""
                            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-1.5">Phone *</label>
                          <input required type="tel" value={form.phone} onChange={set("phone")} placeholder=""
                            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 transition-all" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-1.5">Email Address *</label>
                        <input required type="email" value={form.email} onChange={set("email")} placeholder=""
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 transition-all" />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-1.5">College / University *</label>
                        <input required value={form.college} onChange={set("college")} placeholder=""
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 transition-all" />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-1.5">Area of Interest *</label>
                        <select required value={form.role} onChange={set("role")}
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all">
                          <option value="" className="bg-[#0D1629]">Select a domain...</option>
                          {roles.map(r => <option key={r} value={r} className="bg-[#0D1629]">{r}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-1.5">Description *</label>
                        <textarea required rows={3} value={form.description} onChange={set("description")} placeholder=""
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 transition-all resize-none" />
                      </div>

                      <button type="submit" disabled={submitting}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg">
                        {submitting ? (
                          <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting...</>
                        ) : (
                          <>Submit Application <Send className="w-4 h-4" /></>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
