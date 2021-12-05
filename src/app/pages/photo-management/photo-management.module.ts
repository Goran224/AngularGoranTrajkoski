import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhotoManagementRouterModule } from './photo-management-router.module';
import { PhotoManagementComponent } from './photo-management.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PhotoManagementComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PhotoManagementRouterModule,
    CommonModule,
    MatGridListModule,
    MatCardModule,
  ],
})
export class PhotoManagementModule {}
