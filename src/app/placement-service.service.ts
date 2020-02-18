import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlacementModel } from './placement-model';

@Injectable({
  providedIn: 'root'
})
export class PlacementServiceService {

  constructor(private http: HttpClient) { }

  getDetail() {
    return this.http.get<PlacementModel[]>('http://localhost/wwwcwp/read.php');
  }

  delete(id: number) {
    return this.http.delete<PlacementModel>('http://localhost/wwwcwp/delete.php?id=' + id);
  }

  addCompany(place: PlacementModel) {
    console.log(place);
    return this.http.post('http://localhost:122/cwp/insert.php', place);

  }
}
