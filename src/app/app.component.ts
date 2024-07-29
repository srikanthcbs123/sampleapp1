import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angTempForms';
  mycolor:string="green";
  mycolor1:string="";
  mycolor2:string="class3"
  country:string='';
  b:boolean=false;
  @ViewChild('f',{static:false}) signUpForm?:NgForm;

  genders=['Male','FeMale'];
  Cities:string[]=["newdelhi","newyork","newyear","chenni","vizag","Australia"];
  onSubmit(form:NgForm){
this.mycolor="yellow";
this.mycolor1="class2";
    debugger;
    console.log(form.value.username);
     console.log(form.value.email);
     console.log(form.value.secret);
     console.log(form.value.answer);
     console.log(form.value.gender);

  }
}
