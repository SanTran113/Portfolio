import type { WorkType } from "./WorkType";
import type { SectionType} from "./SectionType"

export type Project = {
    name: string;
    coverImg: string;
    skillsUsed: string;
    link: string;
    type: string;
    workType?: WorkType;
    sectionType?: SectionType[];
    startDate?: Date;
    endDate?: Date | "Current";
};