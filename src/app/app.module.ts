import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule} from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RareComponent} from './rare/rare.component';
import { PurpleComponent} from './purple/purple.component';
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
  declarations: [AppComponent, RareComponent, PurpleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
