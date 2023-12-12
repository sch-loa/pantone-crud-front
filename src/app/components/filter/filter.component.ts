import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  range: Range = new Range()
  textureOptions: string[] = ['Uncoated', 'Coated']
  names: string[] = ['uncoated', 'coated']
  textures: string[] = ['U', 'C']

  constructor(private router: Router, private route: ActivatedRoute){}

  updateURL(param: string, value: string | boolean){
    const currentParams = { ...this.route.snapshot.queryParams }

    if(value){ currentParams[param] = value     
    } else { delete currentParams[param] }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: currentParams,
      replaceUrl: true,
    }) 
  }

  validateRange(){
    this.range.validate()
  }
}

class Range{
  min!: string
  max!: string
  
  validate(){
    if(this.notNull() && !this.isValid()){
      const temp = this.min
      this.min = this.max
      this.max = temp
    }
  }

  isValid(){ return parseInt(this.min, 16)  < parseInt(this.max, 16) }
  notNull(){ return this.min && this.max }
}