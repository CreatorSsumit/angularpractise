import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise';
  usernamelist: Array<string> = [];
  username:string;
  click(h):void{
    this.usernamelist.push(h)
    this.username = ''
  };
  write(event):void{
    this.title = event.target.value
  }
  
}
