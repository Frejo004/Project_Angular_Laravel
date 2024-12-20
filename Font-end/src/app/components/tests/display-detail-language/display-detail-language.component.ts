import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-detail-language',
  standalone: false,

  templateUrl: './display-detail-language.component.html',
  styleUrl: './display-detail-language.component.css'
})
export class DisplayDetailLanguageComponent {
  @Input() selectedLanguage!: string;
}
