import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';

@Injectable()
export class TasksService {

  // public properties

  db: SQLite = null;

  constructor() {
    this.db = new SQLite();
  }

  // public methods

  create(task: any){
    let sql = 'INSERT INTO tasks(title, completed) VALUES(?,?)';
    return this.db.executeSql(sql, [task.title, task.completed]);
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER)';
    return this.db.executeSql(sql, []);
  }

  delete(task: any){
    let sql = 'DELETE FROM tasks WHERE id=?';
    return this.db.executeSql(sql, [task.id]);
  }

  getAll(){
    let sql = 'SELECT * FROM tasks';
    return this.db.executeSql(sql, [])
    .then(response => {
      let tasks = [];
      for (let index = 0; index < response.rows.length; index++) {
        tasks.push( response.rows.item(index) );
      }
      return Promise.resolve( tasks );
    })
  }

  openDatabase(){
    return this.db.openDatabase({
      name: 'data.db',
      location: 'default' // the location field is required
    });
  }

  update(task: any){
    let sql = 'UPDATE tasks SET title=?, completed=? WHERE id=?';
    return this.db.executeSql(sql, [task.title, task.completed, task.id]);
  }

}