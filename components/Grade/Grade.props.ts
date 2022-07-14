import { HTMLAttributes, DetailedHTMLProps } from "react";

export interface GradeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    value: 1 | 2 | 3;
}