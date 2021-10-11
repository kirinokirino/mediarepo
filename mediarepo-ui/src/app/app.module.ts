import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RepositoriesComponent } from './pages/repositories/repositories.component';
import { HomeComponent } from './pages/home/home.component';
import { RepositoryCardComponent } from './pages/repositories/repository-card/repository-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { RepoFormComponent } from './pages/repositories/repo-form/repo-form.component';
import { FileGridComponent } from './components/file-grid/file-grid.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatGridListModule} from "@angular/material/grid-list";
import { FileGridEntryComponent } from './components/file-grid/file-grid-entry/file-grid-entry.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    HomeComponent,
    RepositoryCardComponent,
    RepoFormComponent,
    FileGridComponent,
    FileGridEntryComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatGridListModule,
        MatProgressBarModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
