import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display-list-languages',
  standalone: false,

  templateUrl: './display-list-languages.component.html',
  styleUrl: './display-list-languages.component.css'
})
export class DisplayListLanguagesComponent {
  @Input() listLanguages!: string[];
  @Input() selectedLanguage!: string;
  activeLanguages: string[] = [];
  @Output() sendLanguage = new EventEmitter<string>();

  selectLanguage = (param: string) =>{ this.selectedLanguage = param, this.sendLanguage.emit(param) };
}
