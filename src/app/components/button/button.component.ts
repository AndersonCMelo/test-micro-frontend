import { Component, Input } from '@angular/core';
// @ts-ignore
import { colors } from 'custom_tokens/Colors';
// @ts-ignore
import { space } from 'custom_tokens/Space';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
  @Input() color: string = colors.primary;
  @Input() paddingY: string = space.xs;
  @Input() paddingX: string = space.s;

  buttonText: string = 'Angular Button';
}
