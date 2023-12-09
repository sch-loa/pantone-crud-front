import { ChangeDetectorRef, Component, OnChanges, SimpleChanges } from '@angular/core'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'
import { ColorCard } from 'src/domain/ColorCard'
import { ColorCardService } from 'src/app/services/color-card/color-card.service'


@Component({
  selector: 'app-color-chart',
  templateUrl: './color-chart.component.html',
  styleUrls: ['./color-chart.component.css']
})
export class ColorChartComponent implements OnChanges {
  colorCards!: ColorCard[]
  modalCardFormEnabled = true

  modalFormColorCard!: ColorCard | null
  hexaColorPreview = ''

  constructor(
    public service: ColorCardService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['hexaColorPreview']){
      this.cdr.detectChanges()
    }
  }

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

  showModalCardForm(card: ColorCard | void){
    this.modalCardFormEnabled = true

    if(card){
      console.log("edit")
      this.modalFormColorCard = card
      this.hexaColorPreview =  '#' + card.hexaColor
    }
    else{
      console.log("create")
    }
  }

  resetModalFormValues(){
    this.modalCardFormEnabled = false
    this.modalFormColorCard = null
    this.hexaColorPreview = ''
  }
}
