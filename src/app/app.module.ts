import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { CompanyOverviewComponent } from './company-overview/company-overview.component';
import { CompanyOfficesComponent } from './company-offices/company-offices.component';
import { OfficesComponent } from './company-offices/offices/offices.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { NewOverviewComponent } from './new-overview/new-overview.component';
=======
import { KitUiTextEditComponent } from './kit-ui-text-edit/kit-ui-text-edit.component';

>>>>>>> bae23cd3153db51d8b8d06ccdf04cae2605c97aa

@NgModule({
  declarations: [
    AppComponent,
    CompanyOverviewComponent,
    CompanyOfficesComponent,
    OfficesComponent,
    NewEmployeeComponent,
<<<<<<< HEAD
    NewOverviewComponent,
=======
    KitUiTextEditComponent
>>>>>>> bae23cd3153db51d8b8d06ccdf04cae2605c97aa
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
