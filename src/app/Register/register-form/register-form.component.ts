import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/services/authservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registrationForm: FormGroup;
  isLoading: boolean = false;

  constructor(private service: AuthserviceService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: [
        '',
        [Validators.required, Validators.minLength(8)],
      ],
    });
  }
  get formControls() {
    return this.registrationForm.controls;
  }
  onSubmit() {
    this.isLoading = true;
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;
      console.log(userData);
      this.service.register(userData).subscribe(
        (response) => {
          console.log('User registered successfully', response);
          this.isLoading = false
        },
        (error) => {
          this.isLoading = false
          console.error('Error during registration', error);
  
          // Log the entire error object to the console
          console.log('Full error object:', error);
  
          // Display error details in the user interface if needed
          // For example, assuming you have an error message property in your error response:
          const errorMessage = error.error && error.error.message ? error.error.message : 'An unknown error occurred';
          console.error('Error Message:', errorMessage);
        }
    
      );
    }
  }
}
