import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { TasksService } from '../providers/tasks-service';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any = null;

  constructor(
    public platform: Platform,
    public tasksService: TasksService
  ) {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      tasksService.openDatabase()
      .then(() => this.tasksService.createTable())
      .then(()=>{
        this.rootPage = HomePage;
      })
    });
  }
}
