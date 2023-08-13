import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent },
    { path: 'edit-trip', component: EditTripComponent },
    { path: 'login', component: LoginComponent },
    { path: 'list-trips', component: TripListingComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' }
]

@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        CommonModule,
        FormsModule
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}