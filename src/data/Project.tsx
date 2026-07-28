import type { WorkType } from "./WorkType";
import type { SectionType} from "./SectionType"

export type ImageSrc = string;

export type Project = {
    name: string;
    coverImg: ImageSrc;
    skillsUsed: string;
    link: string;
    type: string;
    workType?: WorkType;
    sectionType?: SectionType[];
    startDate?: Date;
    endDate?: Date | "Current";
};