import { Component } from '@angular/core'
import { Router, NavigationEnd, ActivatedRoute, ParamMap } from '@angular/router'
import { ColorCard } from 'src/domain/ColorCard'
import { ColorCardService } from 'src/app/services/color-card/color-card.service'


@Component({
  selector: 'app-color-chart',
  templateUrl: './color-chart.component.html',
  styleUrls: ['./color-chart.component.css']
})
export class ColorChartComponent {
  colorCards!: ColorCard[]

  constructor(
    public service: ColorCardService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('url changed:', event.url.slice(1))
        //this.colorCards = await this.service.get(event.url.slice(1))
      }
    })

    this.colorCards = this.service.colorCards
  }

  deleteColorCard(card: ColorCard){
    this.service.delete(card)
  }
}
