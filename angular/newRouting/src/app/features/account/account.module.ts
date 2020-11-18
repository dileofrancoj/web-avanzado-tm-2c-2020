import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// eSTE CAMPO ES INCORRECTO -> al mail le falta el @
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [AccountComponent, LoginComponent, RegistroComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent, RegistroComponent, AccountComponent],
})
export class AccountModule {}
