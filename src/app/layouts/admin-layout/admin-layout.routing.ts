import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { VendorsComponent } from 'app/pages/vendors/venders.component';
import { CustomersComponent } from 'app/pages/customers/customers.component';
import { BookingsComponent } from 'app/pages/bookings/bookings.component';
import { AuthGuardService } from 'app/services/guards/auth-guard.service';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'vendors',        component: VendorsComponent,canActivate:[] },
    { path: 'customers',        component: CustomersComponent,canActivate:[] },
    { path: 'bookings',        component: BookingsComponent,canActivate:[] }
];
