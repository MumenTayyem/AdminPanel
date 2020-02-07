import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

    constructor(private router:Router){}

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    logout(){
        localStorage.removeItem('access_token');
        this.router.navigate(['/','login']);
    }
}
