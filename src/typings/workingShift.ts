import { IStation } from "./station";

export interface IWorkingShift {
    id?: number;
    time?: string;
    date?: string;
    occupiedStatus?: string;
    station?: IStation;
    comment?: string;
    absence?: string;
}
