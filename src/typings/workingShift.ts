
export interface IWorkingShift {
    id?: number;
    time?: string;
    date?: string;
    occupiedStatus?: string;
    station?: string;
    comment?: string;
    absence?: string;
    noShift?: boolean;
}