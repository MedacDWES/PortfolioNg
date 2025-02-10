import { Component } from '@angular/core';

@Component({
  selector: 'app-aptitudes2',
  standalone: false,
  templateUrl: './aptitudes2.component.html',
  styleUrl: './aptitudes2.component.css'
})
export class Aptitudes2Component {
  expandedSections: { [key:string]: boolean} = {};

  toggleSection(section:string):void {
    this.expandedSections[section] = !this.expandedSections[section];
  }
}
