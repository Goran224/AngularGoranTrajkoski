import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModulesExport } from 'src/app/material-modules-export';
import { PhotoDetailsRouterModule } from './photo-details-router.module';
import { PhotoDetailsComponent } from './photo-details.component';

@NgModule({
  declarations: [PhotoDetailsComponent],
  imports: [
    FormsModule,
    CommonModule,
    PhotoDetailsRouterModule,
    ReactiveFormsModule,
    MaterialModulesExport,
  ],
})
export class PhotoDetailsModule {}
