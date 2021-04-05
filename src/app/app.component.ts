import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aa';
  arr:any;
  constructor(private h:HttpClient){
// h.get("http://localhost:50047/api/friends").subscribe(t=>console.log(t));
// h.get("http://localhost:50047/api/friends").subscribe(t=>{
//   console.log(t);
//   this.arr=t;
// });
  }
}
