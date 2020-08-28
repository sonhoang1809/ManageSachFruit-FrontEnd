export interface DateTime{
    day: number;
    month: number;
    year: number;
    hour: number;
    minute: number;
    second: number;

    // public constructor(Day: number, Month: number, Year: number, Hour: number, Minute: number, Second: number) {
    //     this.day = Day;
    //     this.month = Month;
    //     this.year = Year;
    //     this.hour = Hour;
    //     this.minute = Minute;
    //     this.second = Second;
    // }

    // toString(): string{
    //     return this.day+'-'+this.month+'-'+this.year+' '+this.hour+':'+this.minute+':'+this.second;
    // }
}