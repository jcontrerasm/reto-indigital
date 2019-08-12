import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from '../../models/client.model';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerFormGroup: FormGroup;
  client: Client;

  constructor(
    private _clienteService: ClientService,
    private _router: Router
  ) {
    this.client = new Client();
  }

  ngOnInit() {
    this.registerFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl('', [Validators.required, Validators.minLength(2)]),
      birthdate: new FormControl('', [Validators.required])
    });
  }

  public registerSubmit(registerFormGroup: FormGroup) {
    if (registerFormGroup.valid) {
      this.setClient(registerFormGroup);
      this._clienteService.registerClient(this.client).subscribe();
      this._router.navigate(['/client/client-list']);
    }
  }

  private setClient(registerFormGroup: FormGroup) {
    this.client.firstName = registerFormGroup.value.firstName;
    this.client.surname = registerFormGroup.value.surname;
    this.client.age = registerFormGroup.value.age;
    this.client.birthdate = registerFormGroup.value.birthdate;
  }
}
