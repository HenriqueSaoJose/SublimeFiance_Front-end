import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent,NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOptions: Array<String> = ["Benefits","About","Contact Us"]
  ButtonSing(){
    console.log("OI")
  }
}
