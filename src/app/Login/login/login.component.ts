import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/services/authservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: boolean = false;
  isVisible: boolean = false;
  message: string = '';

  constructor(private authService: AuthserviceService, private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      
    });
  }
  get formControls() {
    return this.loginForm.controls;
  }
  onSubmit(){
    this.isLoading = true;
    if(this.loginForm.valid) {
      const userData = this.loginForm.value;
      console.log(userData);
      this.authService.login(userData).subscribe(
        (response)=>{
          console.log(response)
          this.isLoading = false
          this.router.navigate(['Home'])
        },
        (error)=>{ 
          console.log(error)
          this.isLoading = false
          this.isVisible=true;
          this.message = error.error.message
          console.log(error.error.message)
        }
      )
    }
  }

}
