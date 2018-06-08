//import statement....
import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//component declaration...
@Component({
   selector: 'app-root',
   templateUrl: './check.html',
   styleUrls: ['./check.css']
})

//class check declaration..
export class Check implements OnInit {
   title = 'Angular  Project';
   details = {};
   failedLogin = false;
   formdatacheck : FormGroup;

//constructor of check  class..
   constructor(private formBuilder: FormBuilder ) { }

//ngOnInit function declaration...
   ngOnInit() {

//validation on field..
     this.formdatacheck = new FormGroup({
     num : new FormControl("",   this.textValidation)


  })

  }


  // function to check validation (custom validation)

  textValidation(control){

    if ( (control.value.length < 3) ) {


      return { ' num' :true};


    }

  }




//submit button function call..
onSubmit =function(name){
{
  console.log(name);
}
}


}
