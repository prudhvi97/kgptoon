import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../model/Medicine';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  email = localStorage.getItem('emailId');
  public medList: Medicine[] = [];
  public medicine: Medicine = new Medicine;
  public text: string ="";

  constructor( private router:Router) { 
  }
  

  startVoiceService() {
  }

  search(): void {
  }

  logout(): void{
    localStorage.clear();
    this.router.navigate(['landing']);
  }
}
