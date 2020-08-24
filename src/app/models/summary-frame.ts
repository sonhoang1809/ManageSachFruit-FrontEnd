export class SummaryFrame {
    descriptionSummary: string;
    total: number;
    rateCompareToLastTime: number;
    classStyleSheet: string;


    public constructor(descriptionSummary: string, total: number,rateCompareToLastTime: number) {
        this.descriptionSummary = descriptionSummary;
        this.total = total;
        this.rateCompareToLastTime = rateCompareToLastTime;
        if(rateCompareToLastTime > 0){
            this.classStyleSheet="metric-label d-inline-block float-right text-success font-weight-bold";
        }else{
            this.classStyleSheet="metric-label d-inline-block float-right text-secondary font-weight-bold";
        }
    }

}
