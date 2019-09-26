import { IWorkingShift } from "typings/workingShift";
import { IScheduleDateValues } from "typings/scheduleDateValues";

const baseShift: IWorkingShift = {
    station: {
        name: "Bar",
        color: "rgb(212, 74, 127)"
    },
    time: "10:00 - 19:00",
}

export const scheduleShifts: IScheduleDateValues[] = [
    {
        id: 0,
        date: "2019-09-23",
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
        date: "2019-09-24",
        occupiedStatus: "occupied",
        shifts: []
    },
    {
        id: 2,
        date: "2019-09-25",
        occupiedStatus: "free",
        shifts: [
            {
                ...baseShift,
                id: 11,
                time: "07:30 - 10:30",
                station: {
                    name: "Servis",
                    color: "rgb(5, 156, 120)"
                }
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
        date: "2019-09-26",
        shifts: [
            {
                ...baseShift,
                id: 13,
                comment: "Städa baren efter passets slut."
            },
        ]
    },
    {
        id: 4,
        date: "2019-09-27",
        shifts: [
            {
                ...baseShift,
                id: 14,
                station: {
                    name: "Kök",
                    color: "rgb(77, 104, 148)"
                }
            },
        ]
    },
    {
        id: 5,
        date: "2019-09-28",
        shifts: [
            {
                ...baseShift,
                id: 15,
            },
        ]
    },
    {
        id: 6,
        date: "2019-09-29",
        shifts: []
    }
]
