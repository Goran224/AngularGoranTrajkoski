import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoModel, PhotoModelPaged } from 'src/app/models/Photo.model';
import { PhotoService } from 'src/app/services/photo.service';
@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
  styleUrls: ['./photo-management.component.css'],
})
export class PhotoManagementComponent implements OnInit {
  photos = [] as PhotoModel[];
  toggleSpinner = true;
  imageUrl: any;
  emptyUI = true;
  errorMessage: HttpErrorResponse;
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllPhotos();
  }

  async getAllPhotos() {
    this.photoService.GetAllPhotos().subscribe(
      (res) => {
        this.photos = res;
        if (res.length > 0) {
          this.emptyUI = false;
        }
        this.toggleSpinner = false;
      },
      (err: any) => {
        this.errorMessage = err;
        this.toggleSpinner = false;
        console.log(this.errorMessage);
      }
    );
  }
}
