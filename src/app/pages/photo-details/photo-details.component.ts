import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoModel } from 'src/app/models/Photo.model';
import { PhotoService } from 'src/app/services/photo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css'],
})
export class PhotoDetailsComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup;
  input = {} as PhotoModel;
  photo = {} as PhotoModel;
  form: FormGroup;
  displayChangePassModal = false;
  attachedFile: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private photoService: PhotoService
  ) {
    this.form = this.fb.group({
      id: this.input.id,
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param.id) {
        this.get(param.id);
      }
    });
  }

  async get(id: number) {
    this.photoService.GetPhoto(id).subscribe((res) => {
      this.input = res;
      console.log(this.input);
    });
  }

  Delete(id: number): void {
    if (confirm('Are you sure you want to delete this Photo ?')) {
      this.photoService.DeletePhoto(id).subscribe((res) => {
        Swal.fire('Your Photo was successfully deleted', 'success');
        this.router.navigateByUrl('/photo-management');
      });
    }
  }

  async save(inputForm: NgForm) {
    if (inputForm.valid) {
      if (confirm('Are you sure you want to make this change ?')) {
        this.photoService
          .UpdatePhoto(this.input.id, this.input)
          .subscribe((res) => {
            if (res) {
              Swal.fire('Your Photo was successfully updated', 'success');
              this.router.navigateByUrl('/photo-management');
            }
          });
      }
    }
  }
}
