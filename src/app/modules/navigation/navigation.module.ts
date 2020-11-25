import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { PrimaryToolbarComponent } from './components/primary-toolbar/primary-toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [PrimaryToolbarComponent, SidenavComponent],
  imports: [CommonModule, MaterialDesignModule, RouterModule],
  exports: [PrimaryToolbarComponent, SidenavComponent]
})
export class NavigationModule {}
