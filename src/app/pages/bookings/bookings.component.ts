import { Component, OnInit, ViewChild } from '@angular/core';
import { BookingService } from 'app/services/booking.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  constructor(private bookingService:BookingService) { }

  allBookings=[];

  filters={
    status:'',
    fromDate:'',
    toDate:''
  };

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: MatTableDataSource<any>;
  displayedColumns = [
    "customer_name",
    "category_vehicle",
    "final_price",
    "payment_status",
    "vendor_name",
    "booking_date",
    // "booking_time",
];

  ngOnInit() {
    this.bookingService.getAllBookings().subscribe((res: any) => {
      this.allBookings = res.message.data;
      this.dataSource = new MatTableDataSource(res.message.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(value,type){
      let filteredResults = this.allBookings.filter(b=>
        b.payment_status.indexOf(this.filters.status)>-1  &&
        ( this.filters['fromDate']? (new Date(b.booking_date))>= (new Date(this.filters['fromDate'])) : true) &&
        (this.filters['toDate'] ? (new Date(b.booking_date))<= (new Date(this.filters['toDate'])) : true )
        );

        this.dataSource = new MatTableDataSource(filteredResults);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
  }

  clearFilter(){
    this.filters={
      status:'',
      fromDate:'',
      toDate:''
    };
    this.dataSource = new MatTableDataSource(this.allBookings);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
  }
}
