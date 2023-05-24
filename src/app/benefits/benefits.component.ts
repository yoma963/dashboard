import { Component } from '@angular/core';
import {  faGasPump, faIndustry, faTree } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {
  faGasPump = faGasPump;
  faIndustry = faIndustry;
  faTree = faTree;
}
