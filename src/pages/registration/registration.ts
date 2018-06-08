//import statement..
import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//component declaration
@Component({
   selector: 'app-root',
   templateUrl: './registration.html',
   styleUrls: ['./registration.css']
})

//class registration declaration
export class Registration implements OnInit {
   title = 'Angular  Project';
   details = {};
   failedLogin = false;
   formdatareg : FormGroup;

//constructor declaration
   constructor(private formBuilder: FormBuilder ) { }

//init function...
   ngOnInit() {

//field validation declaration...
     this.formdatareg = this.formBuilder.group({
      name: [null, Validators.required],
      email : [null, Validators.required],
      address : [null, Validators.required],
      city : [null, Validators.required]
      })

  }

//field val function...
  isFieldValid(field: string) {
    return !this.formdatareg.get(field).valid && this.formdatareg.get(field).touched;
  }


//submit button call function...
onSubmit() {
    console.log(this.formdatareg);
    if ( this.formdatareg.valid ) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.formdatareg);
    }
  }

///validate all field function...
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);

      if ( control instanceof FormControl ) {
        control.markAsTouched({ onlySelf: true });
      } else if ( control instanceof FormGroup ) {
        this.validateAllFormFields(control);
      }
    });
  }
}
