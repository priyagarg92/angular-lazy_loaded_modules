import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RightsComponent } from './pages/rights/rights.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    RightsComponent,
    UserComponent,
  ],
  imports: [AdminRoutingModule],
  providers: [],
})
export class AdminModule {}
