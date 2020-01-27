import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VendorService } from 'app/services/vendor.service';
import { ToastrService } from 'ngx-toastr';
import { GeneralService } from 'app/services/general.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  submitted=false;

  form: FormGroup = new FormGroup({
    shop_name: new FormControl('', [Validators.required]),
    phone_number: new FormControl('', [Validators.required]),
    status: new FormControl('1', [Validators.required]),
    device_token: new FormControl(''),
    place: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required]),
    shop_description: new FormControl('', [Validators.required]),
    lat: new FormControl(0, [Validators.required]),
    long: new FormControl(0, [Validators.required]),
    type: new FormControl('point', [Validators.required]),
    car_tube: new FormControl('', [Validators.required]),
    bike_tube: new FormControl('', [Validators.required]),
    bus_tube: new FormControl('', [Validators.required]),
    car_tubeless: new FormControl('', [Validators.required]),
    bike_tubeless: new FormControl('', [Validators.required]),
    bus_tubeless: new FormControl('', [Validators.required]),
    car_rft: new FormControl('', [Validators.required]),
    bike_rft: new FormControl('', [Validators.required]),
    bus_rft: new FormControl('', [Validators.required]),
  });

  constructor(private vendorService:VendorService,
    private generalService: GeneralService,
    public dialogRef: MatDialogRef<VendorComponent>,) { }

  ngOnInit() {
  }

  submit() {
    this.submitted=true;
    if (this.form.valid){
      let form = this.fixForm();
      this.vendorService.insertVendor(form).subscribe((res:any)=>{
        if (res.success){
          this.generalService.showNotification('top','center',res.message,2);
          this.dialogRef.close();
        }else{
          this.generalService.showNotification('top','center',res.message,4);
        }
      });
    }
  }

  fixForm() {
    let form: any = {};

    form.shop_name = this.form.controls['shop_name'].value;
    form.phone_number = this.form.controls['phone_number'].value;
    form.device_token = this.form.controls['device_token'].value;
    form.status = this.form.controls['status'].value;
    form.place = this.form.controls['place'].value;
    form.pincode = this.form.controls['pincode'].value;
    form.shop_description = this.form.controls['shop_description'].value;
    form.location = {
      type: this.form.controls['type'].value,
      coordinates: [this.form.controls['lat'].value, this.form.controls['long'].value]
    };
    form.price = [
      {
      car: {
        tube: this.form.controls['car_tube'].value,
        tubeless: this.form.controls['car_tubeless'].value,
        rft: this.form.controls['car_rft'].value,
      }
    },
    {
      bike: {
        tube: this.form.controls['bike_tube'].value,
        tubeless: this.form.controls['bike_tubeless'].value,
        rft: this.form.controls['bike_rft'].value,
      }
    },
    {
      bus: {
        tube: this.form.controls['bus_tube'].value,
        tubeless: this.form.controls['bus_tubeless'].value,
        rft: this.form.controls['bus_rft'].value,
      }
    }
  ]

  return form;
  }
}
