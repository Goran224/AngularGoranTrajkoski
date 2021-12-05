import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPhotoRouterModule } from './add-photo-router.module';
import { AddPhotoComponent } from './add-photo.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [AddPhotoComponent],
  imports: [
    FormsModule,
    CommonModule,
    AddPhotoRouterModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
  ],
})
export class AddPhotoModule {}
