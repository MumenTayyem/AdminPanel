import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VendorsComponent } from 'app/pages/vendors/venders.component';
import { HttpClientModule }    from '@angular/common/http';
import { VendorService } from 'app/services/vendor.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

import { BookingsComponent } from 'app/pages/bookings/bookings.component';
import { CustomersComponent } from 'app/pages/customers/customers.component';
import { CustomerService } from 'app/services/customer.service';
import { BookingService } from 'app/services/booking.service';
import { VendorComponent } from 'app/pages/vendors/vendor/vendor.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';

import { GeneralService } from 'app/services/general.service';
import { MatNativeDateModule } from '@angular/material/core';
import { EditComponent } from 'app/pages/vendors/edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  declarations: [
    DashboardComponent,
    VendorsComponent,
    BookingsComponent,
    CustomersComponent,VendorComponent,
    EditComponent
  ],
  providers:[VendorService,CustomerService,BookingService],
  entryComponents:[VendorComponent,EditComponent]
})

export class AdminLayoutModule {}
