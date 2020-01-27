import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VendorService } from 'app/services/vendor.service';
import { GeneralService } from 'app/services/general.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  submitted = false;

  id;

  form: FormGroup = new FormGroup({
    shop_name: new FormControl('', [Validators.required]),
    phone_number: new FormControl('', [Validators.required]),
    shop_description: new FormControl('', [Validators.required]),
  });

  constructor(private vendorService: VendorService,
    private generalService: GeneralService,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.id = data.id;
  }

  ngOnInit() {

  }

  submit() {
    this.submitted = true;
    if (this.form.valid) {
      this.vendorService.updateVendor(this.id, this.form.value).subscribe((res: any) => {
        if (res.success) {
          this.generalService.showNotification('top', 'center', res.message, 2);
          this.dialogRef.close();
        } else {
          this.generalService.showNotification('top', 'center', res.message, 4);
        }
      });
    }
  }

}
