"use client";

import { useState } from "react";
import { PhoneFrame } from "@/components/voter/PhoneFrame";
import { cn } from "@/lib/utils";
import { Newspaper, MessageSquare, Share2, ThumbsUp as TbUp, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Step = "Splash" | "Onboarding" | "Feed" | "Share";
type Tab = "Feed" | "Questions" | "Share";

export default function VoterAppPage() {
    const [currentStep, setCurrentStep] = useState<Step>("Splash");
    const [activeTab, setActiveTab] = useState<Tab>("Feed");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);

    const steps: Step[] = ["Splash", "Onboarding", "Feed", "Share"];

    return (
        <div className="flex flex-col items-center w-full min-h-[calc(100vh-140px)] animate-in fade-in duration-500 pb-20 md:pb-6 relative max-w-5xl mx-auto pt-4">

            {/* Radial glow background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-saffron-glow)] rounded-full blur-[120px] pointer-events-none" />

            {/* Step Navigator */}
            <div className="relative z-10 flex items-center justify-center gap-2 mb-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] p-2 shadow-sm flex-wrap">
                {steps.map((step, idx) => (
                    <div key={step} className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentStep(step)}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-xs font-semibold transition-all",
                                currentStep === step
                                    ? "bg-[var(--color-saffron)] text-white shadow-md shadow-[var(--color-saffron)]/20"
                                    : "bg-transparent text-[var(--color-text-soft)] hover:text-[var(--color-text-main)]"
                            )}
                        >
                            {step}
                        </button>
                        {idx < steps.length - 1 && (
                            <ChevronRight size={14} className="text-[var(--color-border)]" />
                        )}
                    </div>
                ))}
            </div>

            {/* Phone Simulator */}
            <div className="relative z-10">
                <PhoneFrame>
                    {currentStep === "Feed" && (
                        <div className="flex flex-col h-full bg-[#F5F5F8] relative">
                            {/* Header */}
                            <div className="px-5 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface)] sticky top-0 z-10">
                                <h1 className="text-xl font-bold font-hindi text-[var(--color-text-main)]">नमस्ते राम 🙏</h1>
                            </div>

                            {/* Feed Content */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar pb-[90px]">
                                <div className="rounded-[12px] bg-[var(--color-surface)] p-4 border border-[var(--color-border)] shadow-sm flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-saffron)] flex items-center justify-center font-hindi font-bold text-white shrink-0">
                                            स
                                        </div>
                                        <div>
                                            <h3 className="font-hindi font-bold text-sm text-[var(--color-text-main)]">राम मोहन (विधायक)</h3>
                                            <p className="text-[10px] text-[var(--color-text-soft)] font-hindi">2 घंटे पहले • रोज़गार</p>
                                        </div>
                                    </div>
                                    <p className="font-hindi text-sm leading-relaxed text-[var(--color-text-main)]">
                                        युवाओं को मेरा नमस्कार 🙏 हमारी सरकार ने राज्य में 5 लाख नए रोज़गार सृजित करने का लक्ष्य 2026 तक रखा है। आप किस क्षेत्र में अवसर खोज रहे हैं?
                                    </p>

                                    {/* Reaction Bar */}
                                    <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-3 mt-1">
                                        <button className="flex flex-1 items-center justify-center gap-1.5 text-xs font-hindi text-[var(--color-text-soft)] hover:text-[var(--color-saffron)] transition-colors">
                                            <TbUp size={16} /> सहमत
                                        </button>
                                        <button
                                            onClick={() => setIsQuestionModalOpen(true)}
                                            className="flex flex-1 items-center justify-center gap-1.5 text-xs font-hindi text-[var(--color-text-soft)] hover:text-[var(--color-text-main)] transition-colors"
                                        >
                                            <MessageSquare size={16} /> सवाल
                                        </button>
                                        <button onClick={() => setCurrentStep("Share")} className="flex flex-1 items-center justify-center gap-1.5 text-xs font-hindi text-[var(--color-text-soft)] hover:text-[var(--color-green)] transition-colors">
                                            <Share2 size={16} /> साझा
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Tabs inside phone */}
                            <div className="absolute bottom-0 left-0 right-0 flex h-[70px] pb-5 items-center justify-around border-t border-[var(--color-border)] bg-[var(--color-surface)] z-20">
                                <button
                                    onClick={() => setActiveTab("Feed")}
                                    className={cn("flex flex-col items-center gap-1", activeTab === "Feed" ? "text-[var(--color-saffron)]" : "text-[var(--color-text-soft)]")}
                                >
                                    <Newspaper size={20} />
                                    <span className="text-[10px] font-hindi">फ़ीड</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab("Questions")}
                                    className={cn("flex flex-col items-center gap-1", activeTab === "Questions" ? "text-[var(--color-saffron)]" : "text-[var(--color-text-soft)]")}
                                >
                                    <MessageSquare size={20} />
                                    <span className="text-[10px] font-hindi">मेरे सवाल</span>
                                </button>
                                <button
                                    onClick={() => {
                                        setActiveTab("Share");
                                        setCurrentStep("Share");
                                    }}
                                    className={cn("flex flex-col items-center gap-1", activeTab === "Share" ? "text-[var(--color-saffron)]" : "text-[var(--color-text-soft)]")}
                                >
                                    <Share2 size={20} />
                                    <span className="text-[10px] font-hindi">साझा</span>
                                </button>
                            </div>

                            {/* Question Modal (Bottom Sheet) */}
                            <AnimatePresence>
                                {isQuestionModalOpen && (
                                    <>
                                        <motion.div
                                            className="absolute inset-0 bg-black/60 z-30"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onClick={() => setIsQuestionModalOpen(false)}
                                        />
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 bg-[var(--color-surface)] rounded-t-[20px] p-5 z-40 border-t border-[var(--color-border)] flex flex-col gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            exit={{ y: "100%" }}
                                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                        >
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-[var(--color-text-main)] font-hindi font-bold">अपना सवाल पूछें</h3>
                                                <button onClick={() => setIsQuestionModalOpen(false)} className="text-[var(--color-text-soft)] hover:text-[var(--color-text-main)]">
                                                    <X size={20} />
                                                </button>
                                            </div>
                                            <textarea
                                                className="w-full h-32 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-3 text-[var(--color-text-main)] font-hindi resize-none focus:outline-none focus:border-[var(--color-saffron)] shadow-sm"
                                                placeholder="यहाँ अपना सवाल या सुझाव लिखें..."
                                            />
                                            <div className="flex justify-between items-center text-[var(--color-text-soft)] text-xs font-mono">
                                                <span>0/200</span>
                                            </div>
                                            <button
                                                onClick={() => setIsQuestionModalOpen(false)}
                                                className="w-full bg-[var(--color-saffron)] text-white font-hindi font-bold rounded-lg py-3 mt-2"
                                            >
                                                जमा करें
                                            </button>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    )}

                    {currentStep === "Share" && (
                        <div className="flex flex-col h-full bg-[#F5F5F8] justify-center items-center relative overflow-hidden">
                            <button onClick={() => setCurrentStep("Feed")} className="absolute top-5 right-5 text-[var(--color-text-soft)] hover:text-[var(--color-text-main)] z-20">
                                <X size={24} />
                            </button>

                            <div className="w-[85%] bg-white rounded-2xl p-6 flex flex-col items-center gap-4 text-center mt-6 border border-[var(--color-border)] shadow-[0_20px_40px_rgba(20,21,39,0.08)] relative z-10">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-saffron)] rounded-t-2xl" />
                                <h2 className="text-[var(--color-navy)] font-hindi font-bold text-xl mt-2 tracking-wide">PDA-Saathi</h2>
                                <div className="bg-[#F5F5F8] p-4 rounded-xl border border-[var(--color-border)] w-full text-left my-2">
                                    <p className="font-hindi text-[13px] text-[var(--color-text-main)] italic leading-relaxed">"युवाओं को मेरा नमस्कार... हमारी सरकार ने राज्य में 5 लाख नए रोज़गार..."</p>
                                </div>
                                <div className="w-32 h-32 bg-white rounded-lg p-2 my-2 relative">
                                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://pda-saathi.vercel.app" alt="QR" className="w-full h-full object-cover rounded" />
                                </div>
                                <p className="text-[var(--color-text-soft)] font-hindi font-medium text-sm">स्कैन करके ऐप डाउनलोड करें</p>
                            </div>

                            <div className="absolute bottom-10 left-0 right-0 px-6 z-20 space-y-3">
                                <button className="w-full bg-[#25D366] text-white rounded-xl py-3.5 font-semibold font-hindi flex items-center justify-center gap-2 shadow-lg hover:bg-[#20bd5a] transition-colors shadow-[#25D366]/20">
                                    <Share2 size={18} /> WhatsApp पर भेजें
                                </button>
                                <button className="w-full bg-white border border-[var(--color-border)] text-[var(--color-text-main)] rounded-xl py-3.5 font-semibold font-hindi flex items-center justify-center gap-2 hover:bg-[#F5F5F8] shadow-sm transition-colors">
                                    लिंक कॉपी करें
                                </button>
                            </div>
                        </div>
                    )}

                    {currentStep === "Splash" && (
                        <div className="flex flex-col h-full bg-[var(--color-saffron)] items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-white opacity-10 mix-blend-overlay"></div>
                            <div className="w-24 h-24 bg-white rounded-[24px] flex items-center justify-center shadow-[0_20px_40px_rgba(232,98,26,0.4)] mb-8 relative z-10">
                                <span className="text-5xl text-[var(--color-saffron)] font-hindi font-bold mt-1">स</span>
                            </div>
                            <h1 className="text-4xl font-bold text-white tracking-tight relative z-10">PDA-Saathi</h1>
                            <p className="text-white/90 font-hindi mt-3 text-lg font-medium tracking-wide relative z-10">जहाँ नेता सुनते हैं</p>
                        </div>
                    )}

                    {currentStep === "Onboarding" && (
                        <div className="flex flex-col h-full bg-[#F5F5F8] px-6 justify-center">
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold text-[var(--color-text-main)] font-hindi mb-2">लॉगिन करें</h2>
                                <p className="text-[var(--color-text-soft)] font-hindi text-[15px]">अपना मोबाइल नंबर दर्ज करें</p>
                            </div>

                            <div className="flex gap-2 mb-10 justify-between">
                                {otp.map((d, i) => (
                                    <input
                                        key={i}
                                        type="text"
                                        maxLength={1}
                                        className="w-[14%] aspect-square bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl text-center text-xl text-[var(--color-text-main)] font-mono focus:border-[var(--color-saffron)] focus:outline-none focus:ring-1 focus:ring-[var(--color-saffron)] shadow-sm transition-all"
                                        placeholder="0"
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => setCurrentStep("Feed")}
                                className="w-full bg-[var(--color-saffron)] text-white rounded-xl py-4 font-bold font-hindi text-lg shadow-lg hover:bg-[var(--color-saffron-2)] transition-colors"
                            >
                                सत्यापित करें
                            </button>
                        </div>
                    )}
                </PhoneFrame>
            </div>
        </div>
    );
}
