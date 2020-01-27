import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'app/services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router,
    private generalService:GeneralService) { }

  form:FormGroup = new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  submitted = false;

  ngOnInit() {
    if (localStorage.getItem('loggedin')){
      this.router.navigate(['/vendors']);
    }
  }

  login(){
    this.submitted = true;

    if (this.form.valid){
      this.authService.login(this.form.controls['username'].value,this.form.controls['password'].value).subscribe((res:any)=>{
        if (res.code==200){
          localStorage.setItem('loggedin','true');
          this.router.navigate(['/vendors']);
          this.generalService.showNotification('top','center',res.message,2);
        }else{
          this.generalService.showNotification('top','center',res.message,4);
        }
      });
    }
  }

}
