import { Component } from '@angular/core';
import { faPiggyBank, faSolarPanel, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent {
  faSun = faSun;
  faSolarPanel = faSolarPanel;
  faPiggyBank = faPiggyBank;
}
