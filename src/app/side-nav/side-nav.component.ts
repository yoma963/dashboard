import { Component } from '@angular/core';
import { 
  faDashboard,
  faAddressCard,
  faCircleInfo,
  faAddressBook
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faAddressCard = faAddressCard;
  faCircleInfo = faCircleInfo;
  faAddressBook = faAddressBook;
}
