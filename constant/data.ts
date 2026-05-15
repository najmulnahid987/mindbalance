import { icons } from "./icons";

export const tabs = [
    {
        name: "index",
        title: "Home",
        icon: icons.home,
    },
    {
        name: "tools",
        title: "Tools",
        icon: icons.tools,
    },
    {
        name: "progress",
        title: "Progress",
        icon: icons.progress,
    },
    {
        name: "profile",
        title: "Profile",
        icon: icons.profile,
    }
];

export const calmTools = [
    {
        id: "breathing",
        name: "Breathing Exercise",
        icon: "leaf",
        color: "#0e6b51",
        description: "Calm your body in 3 minutes.",
        fullDescription: "A simple yet effective breathing exercise that helps calm your nervous system and reduce anxiety. Follow along with guided breathing patterns.",
        duration: "3 min",
        category: "calm"
    },
    {
        id: "grounding",
        name: "Grounding",
        icon: "anchor",
        color: "#0e6b51",
        description: "Use 5-4-3-2-1 to feel present.",
        fullDescription: "The 5-4-3-2-1 technique grounds you in the present moment by engaging your five senses. Perfect for managing anxiety and intrusive thoughts.",
        duration: "5 min",
        category: "calm"
    },
    {
        id: "cbt-reframe",
        name: "CBT Reframe",
        icon: "sync-alt",
        color: "#245cb4",
        description: "Challenge negative thoughts.",
        fullDescription: "Cognitive Behavioral Therapy technique to identify and reframe unhelpful thinking patterns. Build more balanced perspectives.",
        duration: "7 min",
        category: "reframe"
    },
    {
        id: "burnout-check",
        name: "Burnout Check",
        icon: "alert-circle",
        color: "#ba1a1a",
        description: "Assess your energy levels.",
        fullDescription: "Quick assessment to identify signs of burnout and get personalized recommendations for recovery and self-care.",
        duration: "2 min",
        category: "assessment"
    },
    {
        id: "journal",
        name: "Journal",
        icon: "book-outline",
        color: "#6750a4",
        description: "Reflect and express your thoughts.",
        fullDescription: "Express your thoughts and feelings through guided journaling prompts. Track your emotions and gain clarity on what matters to you.",
        duration: "10 min",
        category: "reflection"
    },
    {
        id: "check-in",
        name: "Check-in",
        icon: "clipboard-text",
        color: "#ed7014",
        description: "Daily mood and wellness check.",
        fullDescription: "Quick daily check-in to monitor your mood, energy levels, and overall wellness. Track patterns over time to understand your wellbeing better.",
        duration: "3 min",
        category: "assessment"
    }
];