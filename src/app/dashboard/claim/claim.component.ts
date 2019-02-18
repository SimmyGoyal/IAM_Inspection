import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Router} from'@angular/router';
@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})


export class ClaimComponent implements OnInit {
 selectedFile:File= null;
userdata:any=[];
 checkdetail:any=[];
 
   constructor( private http:HttpClient, private router:Router) {}
    
  onFileSelected(event){
this.selectedFile = <File>event.target.files[0];
   
}
onUpload(){
  const fd= new FormData();
  fd.append('Images',this.selectedFile,this.selectedFile.name);

  this.http.post('http://127.0.0.1:4000/viewUser',fd)

}

  
    

  ngOnInit() {
    this.http.get('http://127.0.0.1:4000/viewUser')
    .subscribe(data =>{
      this.userdata=this.checkdetail.concat(data);
    this.checkdetail = this.userdata[0].result;
   console.log("sucessfully claimed",this.userdata[0].result)
 
    });

    

}

onSubmit(){
  alert('sucessfully submitted list')
}
onClick(){
  this.router.navigate(['edit'])
}
}


  