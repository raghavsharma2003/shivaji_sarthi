export type Category = "रोज़गार" | "बिजली" | "किसान" | "सड़क" | "शिक्षा";
export type Priority = "Urgent" | "Medium" | "Low";
export type District = "लखनऊ" | "कानपुर" | "वाराणसी" | "आगरा";
export type QuestionStatus = "Received" | "Under Review" | "Answered";

export interface Post {
    id: string;
    leaderId: string;
    category: Category;
    contentHi: string;
    date: string;
    reactions: {
        agreed: number;
        questions: number;
        shares: number;
    };
    reach: number;
    viralScore: number;
}

export interface Question {
    id: string;
    voterId: string;
    voterName: string;
    district: District;
    category: Category;
    contentHi: string;
    priority: Priority;
    timestamp: string;
    aiCategory: string;
    status: QuestionStatus;
}

export interface DashboardMetrics {
    totalVoters: number;
    engagementRate: number;
    totalQuestions: number;
    viralCoefficient: number;
    weeklyEngagement: { day: string; count: number }[];
}

export interface DistrictData {
    id: string;
    nameHi: string;
    nameEn: string;
    users: number;
    sentiment: number;
    topConcern: Category;
    questionsCount: number;
}
