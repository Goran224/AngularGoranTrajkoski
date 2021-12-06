import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PhotoModel } from '../Models/Photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(public httpClient: HttpClient) {}

  GetAllPhotos(): Observable<Array<PhotoModel>> {
    return this.httpClient.get<Array<PhotoModel>>(`${environment.coreApi}`);
  }

  AddPhoto(input: PhotoModel): Observable<PhotoModel> {
    return this.httpClient.post<PhotoModel>(`${environment.coreApi}`, input);
  }

  GetPhoto(id: number): Observable<PhotoModel> {
    return this.httpClient.get<PhotoModel>(`${environment.coreApi}/${id}`);
  }

  UpdatePhoto(id: number, input: PhotoModel): Observable<PhotoModel> {
    return this.httpClient.patch<PhotoModel>(
      `${environment.coreApi}/${id}`,
      input
    );
  }

  DeletePhoto(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.coreApi}/${id}`);
  }
}
