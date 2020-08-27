import { MatDialog } from '@angular/material/dialog';
import { ErrorHandler } from '@angular/core';
export class HandleError implements ErrorHandler {
    constructor(private dialog: MatDialog){}


    handleError(error) {
        // do something with the exception
        
    }
}
