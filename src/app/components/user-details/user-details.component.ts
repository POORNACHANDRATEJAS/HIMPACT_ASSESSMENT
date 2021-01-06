import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  displayUser:any=[];
  displayComponent : Boolean = false;
  userInfo: any;
  constructor(private api:ApiService, private route: ActivatedRoute,private _location: Location) { }

  ngOnInit(): void {
    this.userInfo = this.route.snapshot.paramMap.get("id")
    console.log(this.userInfo);
    this.displayData(this.userInfo);
  }

  displayData(id){
    this.api.displayUser(id).subscribe(displayuser => {
      if(displayuser.hasOwnProperty('data')){
        this.displayComponent = true;
        this.displayUser = displayuser;
      }
    });
  }
  back(){
    this._location.back();
  }
}
