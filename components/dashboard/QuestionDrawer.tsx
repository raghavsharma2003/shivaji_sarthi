"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Flag, Bot } from "lucide-react";
import { Question } from "@/lib/types";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface QuestionDrawerProps {
    question: Question | null;
    isOpen: boolean;
    onClose: () => void;
    t: any;
}

export function QuestionDrawer({ question, isOpen, onClose, t }: QuestionDrawerProps) {
    return (
        <AnimatePresence>
            {isOpen && question && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-md flex-col border-l border-[var(--color-border)] bg-[var(--color-ink-2)] shadow-[var(--shadow-modal)]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-[var(--color-border)] p-4">
                            <h2 className="text-lg font-semibold text-white tracking-tight">Question Details</h2>
                            <button
                                onClick={onClose}
                                className="rounded-full p-2 text-[var(--color-muted)] hover:bg-[var(--color-ink-3)] hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {/* Voter Info */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-ink-3)] text-sm font-bold text-white font-hindi border border-[var(--color-border)]">
                                    {question.voterName.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white font-hindi">{question.voterName}</h3>
                                    <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
                                        <span className="font-hindi">{question.district}</span>
                                        <span>•</span>
                                        <span>{question.timestamp}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="category">{question.category}</Badge>
                                <Badge variant="priority">{question.priority}</Badge>
                                <Badge variant="status">{question.status}</Badge>
                            </div>

                            {/* Question text */}
                            <div className="rounded-lg bg-[var(--color-ink-3)] p-4 border border-[var(--color-border)]">
                                <p className="text-lg font-medium leading-[1.6] text-white font-hindi">
                                    "{question.contentHi}"
                                </p>
                            </div>

                            {/* AI Details */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-sm font-semibold text-[#8B5CF6]">
                                    <Bot size={16} />
                                    <span>{t.questions.card.aiSentiment}</span>
                                </div>
                                <div className="rounded-lg bg-[#8B5CF6]/10 p-4 border border-[#8B5CF6]/20 space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-[var(--color-muted)]">Category:</span>
                                        <span className="text-white font-medium">{question.aiCategory}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[var(--color-muted)]">Tone:</span>
                                        <span className="text-[var(--color-danger)] font-medium">Frustrated</span>
                                    </div>
                                    <div className="pt-2 mt-2 border-t border-[#8B5CF6]/20">
                                        <span className="block text-[var(--color-muted)] mb-1">{t.questions.card.talkPoints}:</span>
                                        <ul className="list-disc pl-4 text-white space-y-1">
                                            <li>Acknowledge the delay in addressing {question.category.toLowerCase()} issues in {question.district}.</li>
                                            <li>Mention the upcoming project phase starting next month.</li>
                                            <li>Assure continuous monitoring.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="border-t border-[var(--color-border)] p-4 flex gap-3 bg-[var(--color-ink)]">
                            <Button variant="secondary" className="flex-1 gap-2">
                                <Flag size={16} />
                                {t.questions.card.flagTeam}
                            </Button>
                            <Button variant="primary" className="flex-1 gap-2">
                                <CheckCircle size={16} />
                                {t.questions.card.markAnswered}
                            </Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
