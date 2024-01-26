import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/constants/task.interface';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit{
  @Input() tasks: Task[] = []; //This property will receive the tasks array from the parent component (Task Form component).

  constructor(){ }

  ngOnInit(): void { }

  removeTask(task: Task){
    const taskIndex = this.tasks.indexOf(task);

    if(taskIndex !== 1){
      this.tasks.splice(taskIndex,1);
    }
  }

  toggleCompleted(task: Task){
    task.completed = !task.completed;
  }
}
