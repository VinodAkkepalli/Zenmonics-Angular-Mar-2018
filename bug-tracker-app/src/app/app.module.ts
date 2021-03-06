import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

import { BugOperationsService } from './bugTracker/services/BugOperations.service';
import { BugStorageService } from './bugTracker/services/BugStorage.service';
import { BugServerService } from './bugTracker/services/BugServer.service';

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';


import { BugStatsComponent } from './bugTracker/views/bugStats.component';
import { BugAddComponent } from './bugTracker/views/bugAdd.component';

@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , ClosedCountPipe
    , BugStatsComponent
    , BugAddComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , UtilsModule
    , HttpModule
  ],
  providers: [
  	BugOperationsService,
    BugStorageService,
    BugServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
