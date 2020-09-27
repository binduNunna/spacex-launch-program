import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

// component
import { SpacexProgramComponent } from './spacex-program/spacex-program.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: SpacexProgramComponent, pathMatch: 'full'},
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [SpacexProgramComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
