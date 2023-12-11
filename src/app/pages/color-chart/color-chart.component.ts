import { Component } from '@angular/core'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'
import { ColorCard } from 'src/domain/ColorCard'
import { ColorCardService } from 'src/app/services/color-card/color-card.service'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-color-chart',
  templateUrl: './color-chart.component.html',
  styleUrls: ['./color-chart.component.css']
})
export class ColorChartComponent {
  colorCards!: ColorCard[]
  currURL!: string
  modalCardFormEnabled = false
  defaultCard!: ColorCard | null
  modalFormValues = {preview: '', texture: ''}

  constructor(
    public service: ColorCardService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.router.events.subscribe(async event => {
      if (event instanceof NavigationEnd) {
        this.currURL = event.url.slice(1)
        console.log('url changed:', this.currURL)
        await this.getColorCards()
      }
    })
  }

  async deleteColorCard(card: ColorCard){
    this.service.delete(card)
    await this.getColorCards()
  }

  async getColorCards(){ this.colorCards = await this.service.get(this.currURL) }

  showModalCardForm(card: ColorCard | void){
    this.modalCardFormEnabled = true
    if(card){
      this.defaultCard = card
      this.modalFormValues.preview = '#' + card.hexaColor
      this.modalFormValues.texture = card.type
    }
  }

  resetModalFormValues(){
    this.modalCardFormEnabled = false
    this.defaultCard = null
    this.modalFormValues.preview = ''
    this.modalFormValues.texture = ''
  }

  handleModalFormSubmit(form: NgForm){

    if(!form.valid || form.pristine){
      Object.keys(form.controls).forEach(controlName => {
        form.controls[controlName].markAsDirty()
        form.controls[controlName].markAllAsTouched()
      })
    }
    else{
      const card = new ColorCard(
        this.defaultCard? this.defaultCard.id : 0,
        form.value.colorCode,
        form.value.colorTexture,
        form.value.hexaColor
        )
      console.log('aaaaaa', JSON.stringify(card))
      this.resetModalFormValues()
    }
  }
}
