import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TasksService } from '../../providers/tasks-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // public properties

  tasks: any[] = [];

  // private fields 

  constructor(
    public navCtrl: NavController,
    public tasksService: TasksService
  ) {}

  // Ionic's or Angular's triggers

  ionViewDidLoad(){

  }

  // public methods

  // private methods

}
