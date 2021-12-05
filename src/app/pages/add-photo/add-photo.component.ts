import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoModel } from 'src/app/models/Photo.model';
import { PhotoService } from 'src/app/services/photo.service';
@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css'],
})
export class AddPhotoComponent implements OnInit {
  addInput = {} as PhotoModel;
  form: FormGroup;
  constructor(
    private photoService: PhotoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['Photos'],
      file: [null],
    });
  }

  ngOnInit(): void {}
  doSaveNew(form: NgForm) {
    if (form.valid) {
      const cnf = confirm('Are you sure you want to add this picture?');
      if (cnf) {
        this.photoService.AddPhoto(this.addInput).subscribe({
          next: (res) => {
            if (res) {
              form.resetForm({} as PhotoModel);
              this.router.navigateByUrl('/photo-management');
            }
          },
        });
      }
    }
  }
}
