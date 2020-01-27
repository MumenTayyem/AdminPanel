import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) {
  }

  getAllVendors() {
    return this.http.get(environment.getVendors);
  }

  insertVendor(vendor){
    return this.http.post(environment.insertVendor,vendor);
  }

  updateVendor(id,vendor){
    return this.http.put(environment.updateVendor+id,vendor);
  }

  deleteVendor(id){
    return this.http.delete(environment.deleteVendor+id);
  }

}
