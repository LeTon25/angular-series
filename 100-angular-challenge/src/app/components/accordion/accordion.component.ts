import { Component, Input } from '@angular/core';
import { AccordionItem } from '../../shared/models/accordion-item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() public items : AccordionItem[] = []

  public toggle(item:AccordionItem)
  {
    item.isExpended = !item.isExpended;
  }
}
