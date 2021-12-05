import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPhotoComponent } from './add-photo.component';

const routes: Routes = [
  {
    path: '',
    component: AddPhotoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPhotoRouterModule {}
