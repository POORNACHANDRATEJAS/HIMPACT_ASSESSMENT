import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  { path: '',   redirectTo: '/drop-down', pathMatch: 'full' },
  { path: 'drop-down', component: DropDownComponent },
  { path: 'user-details/:id', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
