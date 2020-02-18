import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PlacementServiceService } from '../placement-service.service';
import { PlacementModel } from '../placement-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-recruitment-form',
  templateUrl: './company-recruitment-form.component.html',
  styleUrls: ['./company-recruitment-form.component.css']
})
export class CompanyRecruitmentFormComponent implements OnInit {
  count = 0;
  con = false;
  @ViewChild('f', {static: true}) f: NgForm;
  addMore = [{
    id: 1,
    inputValue: '',
    selectValue: '',
    jobDesc: ''
  }];
  constructor(private http: HttpClient, private placeService: PlacementServiceService, private router: Router) { }

  ngOnInit() {
  }

  onAdd(s: HTMLSelectElement, i: HTMLInputElement, t: HTMLTextAreaElement) {
   this.con = true;
   this.count++;
   const temp = this.f.value;
   if (this.count === 1) { this.addMore.pop(); }
   this.addMore.push({id: this.count, inputValue: temp.employee, selectValue: temp.requirement, jobDesc: temp.jobdescripation});
   console.log(temp.jobdescripation);
   s.value = '';
   i.value = '';
   t.value = '';
  }

  onRemove(add) {
    const index = this.addMore.indexOf(add);
    this.addMore.splice(index, 1);
      }

      onSubmit() {
        console.log(this.f.value);
         this.placeService.addCompany(this.f.value)
         .subscribe(data => {
           this.router.navigate(['view']);
         });
       }
}
