import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';

import { FormGroup, FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 editForm: FormGroup;
  constructor( private http:HttpClient, private router:Router ,private formBuilder: FormBuilder,private route: ActivatedRoute) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({

  building_assests: ['' ],
  asset_type :[''],

  floor_no:[''],

   asset_no: ['' ],
 }
 )}
 get f() { return this.editForm.controls; }

 onSubmit(){

 alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.editForm.value))

 this.http.post('http://127.0.0.1:4000/postdata',this.editForm.value)
   


}


}


     
  
    