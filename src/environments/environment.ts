// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  getVendors:'http://api.tyrewala.in/vendors/all',
  getBookings:'http://api.tyrewala.in/booking',
  getCustomers:'http://api.tyrewala.in/otp',
  insertVendor:'http://api.tyrewala.in/vendors',
  updateVendor:'http://api.tyrewala.in/vendors/',
  deleteVendor:'http://api.tyrewala.in/vendors/',
  login:'http://api.tyrewala.in/admin/adminlogin',
  totalCustomers:'http://api.tyrewala.in/booking/totalCustomers',
  totalBookings:'http://api.tyrewala.in/booking/totalBooking',
  totalSales:'',
  totalComission:''
};
