import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from 'app/services/customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: MatTableDataSource<any>;
  displayedColumns = ['customer_name', 'phone_number'];

  constructor(private customersService:CustomerService) { }

  ngOnInit() {
    this.customersService.getAllCustomers().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.message.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
