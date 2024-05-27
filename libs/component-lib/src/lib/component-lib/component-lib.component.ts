import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-component-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-lib.component.html',
  styleUrl: './component-lib.component.css',
})
export class ComponentLibComponent {}
