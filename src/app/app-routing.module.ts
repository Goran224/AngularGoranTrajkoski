import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'add-photo',
    loadChildren: () =>
      import('src/app/pages/add-photo/add-photo.module').then(
        (m) => m.AddPhotoModule
      ),
  },
  {
    path: 'photo-management',
    loadChildren: () =>
      import('src/app/pages/photo-management/photo-management.module').then(
        (m) => m.PhotoManagementModule
      ),
  },
  {
    path: '**',
    redirectTo: '/photo-management',
    pathMatch: 'full',
  },

  {
    path: ' ',
    redirectTo: '/photo-management',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
