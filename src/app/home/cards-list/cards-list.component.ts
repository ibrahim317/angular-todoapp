import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.sass',
})
export class CardsListComponent {
  @Input() tasks = [
    {
      title: '',
      id: 0,
    },
  ];
  @Input() handleDelete = (id: number) => {};
}
