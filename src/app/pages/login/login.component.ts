import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup!:FormGroup;
  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
    })
  }
  loginProces(){
    if (this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(res =>{
        if (res.success){
          alert(res.message);
        }else{
          alert(res.message);
        }
      })
    }
  }
}
