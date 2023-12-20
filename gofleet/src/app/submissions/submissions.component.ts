import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { TasksComponent } from './tasks/tasks.component';
import { CommonModule } from '@angular/common';


interface Forms {
  name: string;
}

interface Statuses {
  name: string;
}

@Component({
  selector: 'app-submissions',
  standalone: true,
  imports: [DropdownModule, CalendarModule, ButtonModule, TasksComponent, CommonModule], 
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.css'
})
export class SubmissionsComponent implements OnInit {
  form: Forms[] | undefined;
  selectedForm: Forms | undefined;
  status: Statuses[] | undefined;
  selectedStatus: Statuses | undefined;
  Map: boolean;

  ngOnInit() {
      this.form = [
          { name: 'abc'},
          { name: '123'},
          { name: '11011'},
          { name: 'xyz'},
          { name: '8910'}
      ];

      this.status = [
        { name: 'uncomplete'},
        { name: 'low risk'},
        { name: 'unassignd'},
      ];
      this.Map = true;
  }

  onMapClick() {
    this.Map=true;
  }

  onListClick() {
    this.Map=false;
  }
}
