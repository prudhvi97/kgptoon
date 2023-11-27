import { Component, OnInit } from '@angular/core';
import { ImagefetchService } from '../imagefetch.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent implements OnInit {

  public text ="";
  email = localStorage.getItem('emailId');

  ngOnInit(): void {
    
  }

  startVoiceService() {
  }

  search(){
  }

  logout(){
    localStorage.clear();
  }

  images: any[] = [];
  formInput: string = '';

  constructor(private imageFetchService: ImagefetchService, private dom: DomSanitizer) {}

  fetchImage() {

    if(this.formInput == ""){
      this.text = "Image description cannot be Empty!!!";
    }
    else{
      this.text = "";
      this.imageFetchService.query({"inputs": this.formInput})
        .then(blob => {
          const url = this.dom.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
          this.images.push(url);
        });
      this.formInput = "";
    }
  }

  deleteImage(index: number) {
    this.images.splice(index, 1); 
  }
}
