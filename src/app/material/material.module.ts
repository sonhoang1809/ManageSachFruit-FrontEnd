import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

import { FormsModule } from '@angular/forms';


@NgModule({
  exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule]
})
export class MaterialModule { }
