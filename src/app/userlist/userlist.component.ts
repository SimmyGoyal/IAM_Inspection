import { Component, OnInit } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import{Router} from'@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
userdata:any=[];
  userdetail:any=[];
  
  
constructor( private http:HttpClient,private router:Router) { 

}

ngOnInit() {
  this.http.get('http://127.0.0.1:4000/viewUserlist')
  .subscribe(data =>{
    this.userdata=this.userdetail.concat(data);
    this.userdetail = this.userdata[0].result;
   console.log("sucessfully claimed",this.userdata[0].result)
 
  });
}
onClick(){
  this.router.navigate(['claim'])
}
}

