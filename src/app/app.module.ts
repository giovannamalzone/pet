import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PetButtonComponent } from './components/pet-button/pet-button.component';
import { BottombarComponent } from './components/bottombar/bottombar.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AdoptPageComponent } from './pages/adopt-page/adopt-page.component';
import { HelpUsPageComponent } from './pages/help-us-page/help-us-page.component';
import { PetModalComponent } from './components/pet-modal/pet-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SendSuggestionModalComponent } from './components/send-suggestion-modal/send-suggestion-modal.component';
import { FormsModule } from '@angular/forms';
import { ContinueButtonComponent } from './components/continue-button/continue-button.component';
import { PetInputComponent } from './components/pet-input/pet-input.component';
import { VolunteerDataModalComponent } from './components/volunteer-data-modal/volunteer-data-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ToolbarComponent,
    PetButtonComponent,
    BottombarComponent,
    AboutPageComponent,
    AdoptPageComponent,
    HelpUsPageComponent,
    PetModalComponent,
    SendSuggestionModalComponent,
    ContinueButtonComponent,
    PetInputComponent,
    VolunteerDataModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
