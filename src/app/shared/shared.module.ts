import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule, MatInputModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatChipsModule, MatCardModule, MatRadioModule, MatButtonModule, MatGridListModule, MatSnackBarModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  exports: [
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatGridListModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
