import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataGraphingModule } from './modules/data-graphing/data-graphing.module';
import { MaterialDesignModule } from './modules/material-design/material-design.module';
import { NavigationModule } from './modules/navigation/navigation.module';
import { PlanningModule } from './modules/planning/planning.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    PlanningModule,
    NavigationModule,
    DragDropModule,
    FormsModule,

    DataGraphingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
