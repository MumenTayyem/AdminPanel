import { Component, OnInit, ViewChild } from '@angular/core';
import { VendorService } from 'app/services/vendor.service';
import { MatDialog } from '@angular/material/dialog';
import { VendorComponent } from './vendor/vendor.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GeneralService } from 'app/services/general.service';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-venders',
  templateUrl: './venders.component.html',
  styleUrls: ['./venders.component.scss']
})
export class VendorsComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: MatTableDataSource<any>;
  displayedColumns = ['shop_name', 'phone_number', 'place', 'pincode', 'total_orders', 'total_amount','action'];

  constructor(private vendorService: VendorService, public dialog: MatDialog, private generalService: GeneralService) { }

  ngOnInit() {

    this.vendorService.getAllVendors().subscribe((res: any) => {

      // let data = [];

      // for(let i=0;i<100;i++){
      //   let arr = res.message.data;
      //   for(let j=0;j<arr.length;j++){
      //     data.push(arr[j]);
      //   }
      // }

      // this.dataSource = new MatTableDataSource(data);
      this.dataSource = new MatTableDataSource(res.message.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  openDialog(action,id): void {
    console.log(action);
    this.generalService.hideSidebar();
    
    if (action=='add'){
      const dialogRef = this.dialog.open(VendorComponent, {
        width: '60%',
        height: '50%'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.generalService.showSidebar();
        this.vendorService.getAllVendors().subscribe((res: any) => {
          this.dataSource = new MatTableDataSource(res.message.data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
      });
    }else if (action=='edit'){
      const dialogRef = this.dialog.open(EditComponent, {
        width: '60%',
        height: '30%',
        data:{'id':id}
      });

      dialogRef.componentInstance.id=id;
  
      dialogRef.afterClosed().subscribe(result => {
        this.generalService.showSidebar();
        this.vendorService.getAllVendors().subscribe((res: any) => {
          this.dataSource = new MatTableDataSource(res.message.data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
      });
    }
  }

  deleteVendor(id){
    this.vendorService.deleteVendor(id).subscribe((res:any)=>{
      if (res.success) {
        this.generalService.showNotification('top', 'center', res.message, 2);
        this.vendorService.getAllVendors().subscribe((res: any) => {
          this.dataSource = new MatTableDataSource(res.message.data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
      } else {
        this.generalService.showNotification('top', 'center', res.message, 4);
      }
    });
  }

}
