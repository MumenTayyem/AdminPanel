import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from 'app/sidebar/sidebar.component';
import { GeneralService } from 'app/services/general.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {


  @ViewChild ('sidebar',{static:true}) sidebar;

  constructor(private generalService:GeneralService){}

  public shouldView=true;

  ngOnInit() {
    this.generalService.setSidebar(this);
   }
}
