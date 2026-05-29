import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { PRACTICE_AREAS } from '../data';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPracticeArea?: string;
}

export default function ConsultationModal({ isOpen, onClose, initialPracticeArea = '' }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    caseType: initialPracticeArea,
    message: '',
    agreedToTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    
    // US Phone regex
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit US phone number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.caseType) {
      newErrors.caseType = 'Please select a practice area.';
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = 'You must agree to the legal disclaimer.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call to server
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Optional: Store consultation inquiry in localStorage to show user records
      const inquiries = JSON.parse(localStorage.getItem('rosmith_inquiries') || '[]');
      inquiries.push({
        id: Math.random().toString(36).substr(2, 9),
        ...formData,
        dateSubmitted: new Date().toISOString()
      });
      localStorage.setItem('rosmith_inquiries', JSON.stringify(inquiries));
    }, 1200);
  };

  const handleClose = () => {
    // Reset state
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      caseType: initialPracticeArea,
      message: '',
      agreedToTerms: false
    });
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-2xl"
            id="consultation-modal"
          >
            {/* Top Border Indicator */}
            <div className="h-1.5 w-full bg-[#C9A84C]" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-[#C9A84C] transition-colors"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X size={24} />
            </button>

            {!isSuccess ? (
              <div className="p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#C9A84C]/10 text-[#C9A84C]">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-neutral-100" id="modal-title">
                      Free Case Consultation
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Private, confidential assessment of your matter.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-neutral-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full rounded-md border bg-neutral-950 px-4 py-2.5 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 ${
                        errors.fullName ? 'border-red-500/50 focus:border-red-500' : 'border-neutral-800 focus:border-[#C9A84C]'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle size={12} /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Grid Contact (Phone + Email) */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
                          <Phone size={15} />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full rounded-md border bg-neutral-950 pl-9 pr-4 py-2.5 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 ${
                            errors.phone ? 'border-red-500/50 focus:border-red-500' : 'border-neutral-800 focus:border-[#C9A84C]'
                          }`}
                          placeholder="(917) 547-7563"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                          <AlertCircle size={12} /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
                          <Mail size={15} />
                        </div>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full rounded-md border bg-neutral-950 pl-9 pr-4 py-2.5 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 ${
                            errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-neutral-800 focus:border-[#C9A84C]'
                          }`}
                          placeholder="client@mail.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Practice Area Selector */}
                  <div>
                    <label htmlFor="caseType" className="block text-sm font-medium text-neutral-300 mb-1">
                      How Can We Help You? *
                    </label>
                    <select
                      id="caseType"
                      value={formData.caseType}
                      onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
                      className={`w-full rounded-md border bg-neutral-950 px-4 py-2.5 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50 ${
                        errors.caseType ? 'border-red-500/50 focus:border-red-500' : 'border-neutral-800 focus:border-[#C9A84C]'
                      }`}
                    >
                      <option value="">-- Choose a Practice Area --</option>
                      {PRACTICE_AREAS.map((area) => (
                        <option key={area.id} value={area.id}>
                          {area.title}
                        </option>
                      ))}
                      <option value="other">Other Legal Inquiry</option>
                    </select>
                    {errors.caseType && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle size={12} /> {errors.caseType}
                      </p>
                    )}
                  </div>

                  {/* Message Detail */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">
                      Case Outline & Details (Confidential)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-md border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-neutral-100 placeholder-neutral-600 focus:border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/50"
                      placeholder="Briefly explain the incident, charges, or transaction details..."
                    />
                  </div>

                  {/* Legal Disclaimer Consent */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreedToTerms}
                        onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-neutral-800 bg-neutral-950 text-[#C9A84C] focus:ring-[#C9A84C]"
                        id="agree-checkbox"
                      />
                      <span className="text-xs text-neutral-400 leading-normal" id="disclaimer-label">
                        I agree that submitting this form does not establish an attorney-client relationship. All communication is strictly confidential under NY law. *
                      </span>
                    </label>
                    {errors.agreedToTerms && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle size={12} /> {errors.agreedToTerms}
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 pt-4 sm:flex-row-reverse">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center rounded-md bg-[#C9A84C] px-6 py-3 font-semibold text-neutral-950 shadow-md hover:bg-[#d4b896] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A84C] active:scale-[0.98] transition-all disabled:opacity-50"
                      id="submit-consultation-btn"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-neutral-950 border-t-transparent" />
                      ) : (
                        'Request Free Consultation'
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-6 py-3 font-semibold text-neutral-300 hover:bg-neutral-800 hover:text-neutral-100 transition-colors"
                      id="cancel-modal-btn"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              // Success Screen Detail
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center"
                id="success-panel"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-neutral-100 mb-2">
                  Consultation Request Received
                </h3>
                <p className="text-neutral-400 mb-6">
                  Thank you, <strong className="text-neutral-200">{formData.fullName}</strong>. Attorney Randy O. Smith or our intake team will review your message immediately and contact you within the next hour.
                </p>
                <div className="rounded-lg border border-neutral-800 bg-neutral-950/50 p-4 mb-6 text-left space-y-2">
                  <p className="text-xs text-neutral-500 uppercase tracking-widest font-mono">MATTER DETAIL CONFIRMATION</p>
                  <p className="text-sm text-neutral-300">
                    <strong className="text-neutral-400">Case Category:</strong> {
                      PRACTICE_AREAS.find((a) => a.id === formData.caseType)?.title || 'General Legal Matter'
                    }
                  </p>
                  <p className="text-sm text-neutral-300">
                    <strong className="text-neutral-400">Your Number:</strong> {formData.phone}
                  </p>
                  <p className="text-sm text-neutral-300">
                    <strong className="text-neutral-400">Confidential ID:</strong> ROSMITH-{Math.floor(1000 + Math.random() * 9000)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full rounded-md bg-neutral-850 border border-neutral-800 px-6 py-3 font-semibold text-neutral-200 hover:bg-neutral-800 hover:text-white transition-colors"
                  id="success-dismiss-btn"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
