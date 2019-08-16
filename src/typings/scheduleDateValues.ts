import { IWorkingShift } from "./workingShift";

export interface IScheduleDateValues {
    id: number,
    date: string,
    occupiedStatus?: string,
    shifts: IWorkingShift[];
}