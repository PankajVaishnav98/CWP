import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormModel } from './form-model';
@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor(private http: HttpClient) { }

  addEnquirey(data: FormModel) {
    console.log(data);
    return this.http.post('http://localhost:122/cwp/insertform.php', data);

  }
}
