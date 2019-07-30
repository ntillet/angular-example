import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatButtonModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
})
export class MaterialModule {}
