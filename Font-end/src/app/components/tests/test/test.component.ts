import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: false,

  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  languages!: string[];
  showLanguages!: boolean;
  selectedLanguage!: string;
  textColor!: string;
  fontSize!: number;
  activeLanguages: string[] = ['TypeScript', 'JavaScript', 'Ruby'];

  ngOnInit(): void {
    this.languages = [
      "TypeScript",
      "Swift",
      "Kotlin",
      "Go (Golang)",
      "Ruby",
      "PHP",
      "C++",
      "Java",
      "Python",
      "JavaScript"
    ];
    this.showLanguages = true;
    // this.selectedLanguage = "Kotlin";
    this.textColor = "blue";
    this.fontSize = 32;
  }
  
}
