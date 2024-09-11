import { Component, EventEmitter, Input,Output} from '@angular/core';
type Variants = "primary" | "secondary";
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input("text") text:string = "";
  @Input("loading") loading : boolean = false;
  @Input("disabled") disabled : boolean = false;
  @Input()variants : Variants = "primary";
  @Output("Onclick") onclick: EventEmitter<any> = new EventEmitter();
}
