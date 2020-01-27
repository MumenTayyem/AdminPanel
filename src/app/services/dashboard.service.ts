import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getAllBookings() {
    return this.http.get(environment.getBookings);
  }

  getTotalCustomers(){
    return this.http.get(environment.totalCustomers);
  }

  getTotalBookings(){
    return this.http.get(environment.totalBookings);
  }

  getTotalComission(){
    return this.http.get(environment.totalComission);
  }

  getTotalSales(){
    return this.http.get(environment.totalSales);
  }
}
