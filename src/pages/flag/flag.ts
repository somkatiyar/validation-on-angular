//import srtatement..
import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//component declaration..
@Component({
   selector: 'app-root',
   templateUrl: './flag.html',
   styleUrls: ['./flag.css']
})
//class flag declaration..
export class Flag implements OnInit {
   title = 'Angular  Project';
   details = {};
   failedLogin = false;

   formdataflag : FormGroup;
   private formSubmitAttempt: boolean;
//constructor of the class...
   constructor(private formBuilder: FormBuilder)
  { }
// on init function...
   ngOnInit() {
//validation on the field...
     this.formdataflag = this.formBuilder.group({
      name: [null, Validators.required],
      email : [null, Validators.required],
      address : [null, Validators.required],
      city : [null, Validators.required]
      })


  }
// field validate function...
  isFieldValid(field: string) {
  return (!this.formdataflag.get(field).valid && this.formdataflag.get(field).touched) ||
    (this.formdataflag.get(field).untouched && this.formSubmitAttempt);
}
// submit button function call...
  onSubmit() {
    this.formSubmitAttempt = true;
    if (this.formdataflag.valid) {
      console.log('form submitted');
    }
  }
//validate all field function..
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
  //reset functionj declaration.....
  reset() {
    this.formdataflag.reset();
    this.formSubmitAttempt = false;
  }
}
