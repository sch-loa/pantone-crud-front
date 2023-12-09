import { Component, Input } from '@angular/core'
import { ColorCard } from 'src/domain/ColorCard'

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.css']
})
export class ColorCardComponent {
  @Input() colorCard!: ColorCard
}
