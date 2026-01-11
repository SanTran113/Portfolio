import type { WorkType } from "./WorkType";

export type Project = {
    name: string;
    coverImg: string;
    skillsUsed: string;
    link: string;
    type: string;
    workType?: WorkType;
};