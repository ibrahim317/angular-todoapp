import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass',
})
export class CardComponent {
  @Input() Content = {
    title: '',
    id: 0,
  };
  @Input() handleDelete = (id: number) => {};
}
