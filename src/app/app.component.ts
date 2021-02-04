import { Component } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


title="todoangular"
todos=[];

todo=""


add(){
  
  this.todos.push(this.todo)
  console.log(this.todos)
}
  change(event:Event){
    this.todo =(event.target as HTMLInputElement).value
  }
}

