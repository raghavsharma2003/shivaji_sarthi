import { DashboardMetrics, DistrictData, Post, Question } from "./types";

export const mockPosts: Post[] = [
    {
        id: "p1",
        leaderId: "l1",
        category: "रोज़गार",
        contentHi:
            "युवाओं को मेरा नमस्कार 🙏 हमारी सरकार ने राज्य में 5 लाख नए रोज़गार सृजित करने का लक्ष्य 2026 तक रखा है। आप किस क्षेत्र में अवसर खोज रहे हैं?",
        date: "2 घंटे पहले",
        reactions: { agreed: 450, questions: 120, shares: 89 },
        reach: 12500,
        viralScore: 0.85,
    },
    {
        id: "p2",
        leaderId: "l1",
        category: "किसान",
        contentHi:
            "किसान भाई-बहनों, न्यूनतम समर्थन मूल्य पर नई नीति लागू हो गई है। हम सुनिश्चित कर रहे हैं कि आपका पैसा सीधे खाते में 48 घंटे के भीतर आए।",
        date: "कल",
        reactions: { agreed: 1200, questions: 89, shares: 340 },
        reach: 45000,
        viralScore: 0.62,
    },
    {
        id: "p3",
        leaderId: "l1",
        category: "बिजली",
        contentHi:
            "ग्रामीण क्षेत्रों में 24 घंटे बिजली आपूर्ति का वादा हमने पूरा किया है। अगर आपके गांव में अभी भी समस्या है, तो कृपया नीचे बताएं।",
        date: "3 दिन पहले",
        reactions: { agreed: 210, questions: 450, shares: 45 },
        reach: 8900,
        viralScore: 0.2,
    },
];

export const mockQuestions: Question[] = [
    {
        id: "q1",
        voterId: "v1",
        voterName: "राम कुमार",
        district: "लखनऊ",
        category: "रोज़गार",
        contentHi: "मैं ग्रेजुएट हूँ लेकिन 2 साल से नौकरी नहीं मिल रही। क्या राज्य सरकार के पास आईटी सेक्टर के लिए कोई विशेष योजना है?",
        priority: "Urgent",
        timestamp: "10 min ago",
        aiCategory: "Employment - IT Sector",
        status: "Received",
    },
    {
        id: "q2",
        voterId: "v2",
        voterName: "सुनीता देवी",
        district: "कानपुर",
        category: "बिजली",
        contentHi: "हमारे इलाके (बर्रा) में पिछले 3 दिन से लगातार बिजली कटौती हो रही है। कृपया संज्ञान लें।",
        priority: "Urgent",
        timestamp: "1 hour ago",
        aiCategory: "Infrastructure - Power Outage",
        status: "Under Review",
    },
    {
        id: "q3",
        voterId: "v3",
        voterName: "मोहम्मद आरिफ",
        district: "वाराणसी",
        category: "सड़क",
        contentHi: "मेन रोड का निर्माण पिछले 6 महीने से रुका हुआ है। धूल की वजह से अस्थमा के मरीजों को परेशानी हो रही है।",
        priority: "Medium",
        timestamp: "2 hours ago",
        aiCategory: "Infrastructure - Road Construction",
        status: "Received",
    },
    {
        id: "q4",
        voterId: "v4",
        voterName: "अंजलि सिंह",
        district: "आगरा",
        category: "शिक्षा",
        contentHi: "सरकारी स्कूल में शिक्षकों की भारी कमी है। नई भर्ती कब तक होगी?",
        priority: "Low",
        timestamp: "Yesterday",
        aiCategory: "Education - Teacher Shortage",
        status: "Answered",
    },
];

export const mockMetrics: DashboardMetrics = {
    totalVoters: 234891,
    engagementRate: 0.74,
    totalQuestions: 18234,
    viralCoefficient: 0.34,
    weeklyEngagement: [
        { day: "Mon", count: 12000 },
        { day: "Tue", count: 15000 },
        { day: "Wed", count: 18500 },
        { day: "Thu", count: 14200 },
        { day: "Fri", count: 21000 },
        { day: "Sat", count: 25000 },
        { day: "Sun", count: 28000 },
    ],
};

export const mockDistricts: DistrictData[] = [
    { id: "lucknow", nameHi: "लखनऊ", nameEn: "Lucknow", users: 45000, sentiment: 68, topConcern: "रोज़गार", questionsCount: 4200 },
    { id: "kanpur", nameHi: "कानपुर", nameEn: "Kanpur", users: 38000, sentiment: 42, topConcern: "बिजली", questionsCount: 5100 },
    { id: "varanasi", nameHi: "वाराणसी", nameEn: "Varanasi", users: 32000, sentiment: 75, topConcern: "सड़क", questionsCount: 2800 },
    { id: "agra", nameHi: "आगरा", nameEn: "Agra", users: 28000, sentiment: 55, topConcern: "शिक्षा", questionsCount: 3100 },
];
