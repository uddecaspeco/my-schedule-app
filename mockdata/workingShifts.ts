import { IWorkingShift } from "typings/workingShift";
import { IScheduleDateValues } from "typings/scheduleDateValues";

const baseShift: IWorkingShift = {
    station: "Bar",
    time: "10:00 - 19:00",
}

export const workingShiftsForWeek: IScheduleDateValues[] = [
    {   
        id: 0,
        date: "2019-08-12",
        shifts: [
            {
                ...baseShift,
                id: 10,
                time: "11:30 - 19:30"
            },
        ]
    },
    {   
        id: 1,
        date: "2019-08-13",
        occupiedStatus: "occupied",
        shifts: []
    },
    {   
        id: 2,
        date: "2019-08-14",
        occupiedStatus: "free",
        shifts: [
            {
                ...baseShift,
                id: 11,
                time: "07:30 - 10:30",
                station: "Servis"
            },
            {
                ...baseShift,
                id: 12,
                time: "17:00 - 22:00",
            },
        ]
    },
    {   
        id: 3,
        date: "2019-08-15",
        shifts: [
            {
                ...baseShift,
                id: 13,
                comment: "Städa baren"
            },
        ]
    },
    {   
        id: 4,
        date: "2019-08-16",
        shifts: [
            {
                ...baseShift,
                id: 14,
            },
        ]
    },
    {   
        id: 5,
        date: "2019-08-17",
        shifts: [
            {
                ...baseShift,
                id: 15,
            },
        ]
    },
    {   
        id: 6,
        date: "2019-08-18",
        shifts: []
    }
]
