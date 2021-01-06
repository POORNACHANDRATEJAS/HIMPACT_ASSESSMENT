import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  userList:any=[];
  
  constructor(private api:ApiService, private router:Router ) { }

  ngOnInit(): void {
    this.userData();
  }

  userData(){
    this.api.getUser().subscribe(users => {
      if(users.hasOwnProperty('data')){
        console.log('Here');
        users['data'].sort((a, b) => a.first_name.localeCompare(b.first_name));
        this.userList = users;
        console.log(this.userList);
      }
    }); 
  }
  name(data){
    this.router.navigateByUrl(`/user-details/${data}`);
  }
}
