import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent implements OnInit {
  userform: any;
  

  constructor() { }

  ngOnInit(): void {
    Email: ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]];

    Zip: ['',[Validators.required,Validators.pattern,{"S":"^[0-9]{1,3}$"}]];
    Phone: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    //Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"
  }
  printPage(){
    console.log(print);
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }
 get f(){
  return this.userform.controls
}

  
  onKeyPress(event: any) {
    const regexpNumber = /[0-9\+\-\ ]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }
  
}
