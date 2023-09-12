import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

name = "";
imageURL="https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg";
alternative="logo";

todos = [{title: 'Learn angular', done: false},{title: 'Create project angular', done: false}];

theme="Default";

change(){
this.todos.map(value => {
  value.done = true;
});
}

}
