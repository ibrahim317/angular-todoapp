import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardComponent } from './card/card.component';
import { TasksFormComponent } from './form/tasks-form/tasks-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CardComponent,
    TasksFormComponent,
    CardsListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  TodoList = [
    {
      title: '',
      id: 0,
    },
  ];

  handleFormSubmit = (e: any) => {
    e.preventDefault();
    const id = Math.random() * 1000000;
    const newTodo = {
      title: e.target[0].value,
      id,
    };
    this.TodoList.push(newTodo);
    e.target[0].value = '';
  };
  handleTaskDelete = (id: number) => {
    this.TodoList = this.TodoList.filter((t) => t.id !== id);
    console.log('deleted: ', id);
  };
}
