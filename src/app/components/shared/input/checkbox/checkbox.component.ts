import { Component, Input, AfterViewInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements AfterViewInit{
  @Input() paramName!: string
  @Input() state!: boolean
  @Input() timeOut!: number

  constructor(private router: Router, private route: ActivatedRoute){}

  ngAfterViewInit(){
    setTimeout(() => {
      this.updateURL()
    }, 0/this.timeOut)
  }

  updateURL(){
    const currentParams = { ...this.route.snapshot.queryParams }
    if(this.state){
      currentParams[this.paramName] = this.state
    }
    else{
      delete currentParams[this.paramName]
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: currentParams,
      replaceUrl: true,
    })

  }
}
