import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  wordcount = 0;
  inputValue = "";
  changeValue(){
    this.wordcount = this.inputValue.length;
  }
  clearValue(){
    this.wordcount = 0;
    this.inputValue = "";
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title  = 'The Will Will Web';
    }
  }
}
