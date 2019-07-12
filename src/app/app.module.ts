import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule} from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BlueComponent} from './blue/blue.component';
import { IngredientService } from './ingredient.service';

@NgModule({
  imports: [BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    ReactiveFormsModule
    ],
  providers: [ IngredientService],
  declarations: [AppComponent, BlueComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
