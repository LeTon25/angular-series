import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { CardComponent } from "./components/card/card.component";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { AccordionItem } from './shared/models/accordion-item.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, CardComponent, AccordionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '100-angular-challenge';
  accordionItems:AccordionItem[] =[
    {
      title : 'Ví dụ 1',
      content  : ' Nội dung ví dụ 1',
      isExpended : false
    },
    {
      title : 'Ví dụ 2',
      content  : ' Nội dung ví dụ 2',
      isExpended : false
    },
  ]
}
