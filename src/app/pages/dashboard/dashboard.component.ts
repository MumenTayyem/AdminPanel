import { Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from 'app/services/dashboard.service';
import { GeneralService } from 'app/services/general.service';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  totalCustomers;
  totalComission;
  totalBookings;
  totalSales;

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


  constructor(private dashboardServices: DashboardService, private generalService: GeneralService) { }

  ngOnInit() {

    this.dashboardServices.getTotalBookings().subscribe((res: any) => {
      this.totalBookings = res.message.booking_count;

      this.dashboardServices.getTotalCustomers().subscribe((res: any) => {
        this.totalCustomers = res.message.customers_count;

        this.dashboardServices.getTotalSales().subscribe((res:any)=>{
          this.totalSales = res[0].total;

          this.dashboardServices.getTotalComission().subscribe((res:any)=>{
            this.totalComission = res[0].total;

            this.dashboardServices.getAllBookings().subscribe((res: any) => {

              this.dataSource = new MatTableDataSource(res.message.data);
              this.dataSource.sort = this.sort;
              this.dataSource.paginator = this.paginator;
            });
          });
        });
      });
    });
  }

  update(type) {
    switch (type) {
      case 'sales':
        this.dashboardServices.getTotalSales().subscribe((res:any)=>{
          this.totalSales =res[0].total;
        });
        break;
      case 'bookings':
        this.dashboardServices.getTotalBookings().subscribe((res:any)=>{
          this.totalSales =res.message.booking_count;
        });
        break;
      case 'customers':
        this.dashboardServices.getTotalCustomers().subscribe((res:any)=>{
          this.totalSales =res.message.customers_count;
        });
        break;
      case 'comission':
        this.dashboardServices.getTotalComission().subscribe((res:any)=>{
          this.totalComission =res[0].total;
        });
        break;
    }
  }
}
