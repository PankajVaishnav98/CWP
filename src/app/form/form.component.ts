import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormserviceService } from '../formservice.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('myform', {static: true}) f: NgForm;

  constructor(private http: HttpClient, private formService: FormserviceService, private router: Router){};
  ngOnInit(): void {
  }
  onSubmit() {
        console.log(this.f.value);
         this.formService.addEnquirey(this.f.value)
         .subscribe(data => {
           this.router.navigate(['formsuccess']);
         });
       }
}
