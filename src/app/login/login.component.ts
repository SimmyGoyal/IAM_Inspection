import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { async } from 'q';


@Component({
  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  // email_at:string="";
  // pass_at:string="";
  // data:any;
  // show_err:boolean=false;
 
  //  constructor(private http:HttpClient,private route : Router) { }
  constructor(){}

  ngOnInit() {
  }
}
  

//     onlogin(){
//     if(this.email_at=="admin"&& this.pass_at=="admin"){
//       this.route.navigate(['service']);
//     }
//     else{

    

//       var obj={
//         "email": this.email_at,
//         "pass": this.pass_at
//        }

//        this.http.post('http://127.0.0.1:3001/login',obj)
//        .subscribe(async (data) => {
//                       // console.log(" login POST Request is successful ", data[0]._id);

//                       console.log(" login POST Request is successful ", data[0]);

//                       if(data[0]!=null)
//                      {
//                       var objsend={
//                         "userId": data[0]._id
//                        }
//                       console.log("navigating to dashboard from login successfully");
//                      await this.route.navigate(['user',objsend]);
//                       }
//                       else
//                       {
//                         console.log("Error showssssssss");
//                           this.show_err=true;
//                       }
//                   },
//                   error => {
//                       console.log("error comming");
//                       //alert("Email or password is incorrect !");
//                   });  
                 

//     }
// }

// }

