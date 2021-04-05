import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.css']
})
export class VotersComponent implements OnInit {
frm1:FormGroup=new FormGroup({tz1:new FormControl("tz2",Validators.compose([Validators.required,Validators.maxLength(9)])),
                              dt1:new FormControl("dt2")});
  constructor(public h:HttpClient,private r:Router) { }

b(tz3,dt3){
// let tz3= this.frm1.controls["tz2"];
// let dt3= this.frm1.controls["dt2"];

this.h.get("http://localhost:51594/ggg/"+tz3+"/"+dt3).subscribe(g=>{console.log(g);
  if (g!=null) {
    this.r.navigate(['party']);
  }
});

//alert(tz3+" "+dt3);
}


  ngOnInit() {
  }

}
