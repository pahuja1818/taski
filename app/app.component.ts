import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directb';
  check1=true;
  check2=false;
  h1color = '#a74ef0';
  h2color='#89858b';
  b1color='#ffffff';
  b2color='#ffffff';
 

  
  btn(){
    this.check2=false;
    this.check1=true;
    this.h1color = '#a74ef0';
    this.h2color='#89858b';
    }
  btnq(){
    this.check2=true;
    this.check1=false;
    this.h1color = "#89858b" ;
    this.h2color='#a74ef0';
    
    
}
trophy(){
  this.b1color='#c86dec';
  this.b2color='#ffffff';
}
prof(){
  this.b2color='#c86dec';
  this.b1color='#ffffff';
}

}
 
