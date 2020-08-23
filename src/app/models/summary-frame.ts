export class SummaryFrame {
    descriptionSummary: string;
    total: number;
    rateCompareToLastMonth: number;
    classStyleSheet: string;


    public constructor(descriptionSummary: string, total: number,rateCompareToLastMonth: number) {
        this.descriptionSummary = descriptionSummary;
        this.total = total;
        this.rateCompareToLastMonth = rateCompareToLastMonth;
        if(rateCompareToLastMonth > 0){
            this.classStyleSheet="metric-label d-inline-block float-right text-success font-weight-bold";
        }else{
            this.classStyleSheet="metric-label d-inline-block float-right text-secondary font-weight-bold";
        }
    }

}
