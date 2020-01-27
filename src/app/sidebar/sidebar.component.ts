import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard' },
    { path: '/vendors',     title: 'Vendors' },
    { path: '/customers',     title: 'Customers'},
    { path: '/bookings',     title: 'Bookings'},
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    
    public menuItems: any[];


    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
