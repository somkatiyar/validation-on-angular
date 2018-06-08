//import statement..
import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//component declaration..
@Component({
   selector: 'app-root',
   templateUrl: './login.html',
   styleUrls: ['./login.css']
})

//login class declaration
export class Login implements OnInit {
   title = 'Angular  Project';
   details = {};
   failedLogin = false;

   formdata : FormGroup;

   constructor(private formBuilder: FormBuilder ) { }

   ngOnInit() {

     this.formdata = this.formBuilder.group({
      emailid: [null, Validators.required],
      password : [null, Validators.required]

      })

  }
//function to validate field..
  isFieldValid(field: string) {
    return !this.formdata.get(field).valid && this.formdata.get(field).touched;
  }

// function call on click of submitt button..
onSubmit() {
    console.log(this.formdata);

    if (this.formdata.valid) {
      console.log('form submitted');

    } else {
      this.validateAllFormFields(this.formdata);
    }
  }

//validate all form field of the form...
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
