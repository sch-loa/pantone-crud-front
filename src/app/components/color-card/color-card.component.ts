import { Component, Input } from '@angular/core'
import { ColorCard } from 'src/domain/ColorCard'

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.css']
})
export class ColorCardComponent {
  @Input() colorCard!: ColorCard
  enabled = false

  changeEnabled(value: boolean){ this.enabled = value }

  handleBlur(e: FocusEvent){
    const relatedTargetIds = ['color-card__options', 'color-card__remove', 'color-card__edit']
    const relatedTarget = (e.relatedTarget as HTMLElement)
    const relatedTargetId = relatedTarget? relatedTarget.id : 'noo'
    
    if (!e.relatedTarget || !relatedTargetIds.includes(relatedTargetId)) {
        this.enabled = false
        console.log("aaaaaaaa", relatedTargetId, relatedTargetId in relatedTargetIds)
    }
  }
}
