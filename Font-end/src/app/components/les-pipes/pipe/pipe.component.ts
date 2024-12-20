import {  Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: false,
  
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})

export class PipeComponent {
  price: number = 1000;
  brithday: Date = new Date();
  text: string = ""
}
