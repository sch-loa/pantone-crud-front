import { Component } from '@angular/core'
import { ColorCard } from 'src/domain/ColorCard'
import { ColorCardService } from 'src/app/services/color-card/color-card.service'

@Component({
  selector: 'app-color-chart',
  templateUrl: './color-chart.component.html',
  styleUrls: ['./color-chart.component.css']
})
export class ColorChartComponent {
  colorCards!: ColorCard[]
  constructor(public service: ColorCardService){ this.service = new ColorCardService() }
  ngOnInit(): void { this.colorCards = this.service.colorCards }
}
