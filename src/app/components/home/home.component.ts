import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../../custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule, ReversePipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Angular 18';
  subtitle = 'tutorial for beginners';
  date = new Date();
  salary = 10000;
  object = { name: 'Armin' };
  content = 'Ana voli Milovana';
  isDisabled = false;
  changeTitle() {
    this.title = 'Armin Angular 18 full curse';
  }
  changeTitleFromInput(event: any) {
    this.title = event.target.value;
  }
}
