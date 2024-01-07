import { Component, Input } from '@angular/core';
import { InputFieldComponent } from '../input-field/input-field.component';
import { AddButtonComponent } from '../add-button/add-button.component';

@Component({
  selector: 'app-tasks-form',
  standalone: true,
  imports: [InputFieldComponent, AddButtonComponent],
  templateUrl: './tasks-form.component.html',
  styleUrl: './tasks-form.component.sass',
})
export class TasksFormComponent {
  @Input() handleSubmit = (e: any) => {};
}
