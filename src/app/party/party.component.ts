import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
arr;

  constructor(private h:HttpClient) { 
h.get("http://localhost:51594/api/party").subscribe(t=>this.arr=t);

  }

  ngOnInit() {
  }

}
