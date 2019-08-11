import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl('', [Validators.required, Validators.minLength(2)]),
      birthdate: new FormControl('', [Validators.required])
    });
  }

  public registerSubmit(registerFormGroup: FormGroup) {
    console.log(this.registerFormGroup.value, this.registerFormGroup.valid);
  }

}
