import home from "@/assets/icons/home.png";
import journal from "@/assets/icons/journal.png";
import profile from "@/assets/icons/profile.png";
import progress from "@/assets/icons/progress.png";
import tools from "@/assets/icons/tools.png";

export const icons = {
    home,
    profile,
    journal,
    progress,
    tools,
} as const;

export type IconName = keyof typeof icons;