import { Component, OnInit } from '@angular/core';
import { PlacementServiceService } from '../placement-service.service';
import { PlacementModel } from '../placement-model';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  placement: PlacementModel[];
  constructor(private placementService: PlacementServiceService) { }

  ngOnInit() {
    this.placementService.getDetail()
    .subscribe( (data: PlacementModel[]) => {
    this.placement = data;
    console.log("this.placementModel");
    console.log( this.placement);
    }); 
  } 
  onDelete(place: PlacementModel): void {
  console.log(place.id);
  this.placementService.delete(place.id)
  .subscribe(data => {
    this.placement = this.placement.filter(u => u !== place);
  });
  }
  }
