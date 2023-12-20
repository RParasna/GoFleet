import { Component, Input, OnInit} from '@angular/core';
import { TableModule } from 'primeng/table';
import { Tasks } from '../../../Models/tasks';
import { Cols } from '../../../Models/cols';
import { allTasks } from '../../../Service/tasks';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, GoogleMapsModule, MatIconModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  @Input() map: boolean;
  tasks!: Tasks[];
  mapTasks!: Tasks[];
  cols!: Cols[];

  constructor(private allAvailableTasks: allTasks) {}

  ngOnInit() {

    this.allAvailableTasks.getTasks().then((data) => {
      this.tasks = data;
      this.mapTasks=data.slice(0,4);
    });

    this.cols = [
        { field: 'task', header: 'Task' },
        { field: 'status', header: 'Status' },
        { field: 'from', header: 'From' },
        { field: 'to', header: 'To' },
        { field: 'address', header: 'Customer Address' },
        { field: 'tableDue', header: 'Due Date' },
    ];
}

}
