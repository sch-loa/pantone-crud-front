import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
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
  hexaMin: FormControl = new FormControl('')
  hexaMax: FormControl = new FormControl('')

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

  validateRange(control: FormControl, name: string){
    const newValue = parseInt(control.value, 16)
    if(isNaN(newValue) || newValue.toString(16) !== control.value.toLowerCase()){
      control.setErrors({ 'invalidHex': true })
    }
    else{
      this.range.validate()
      this.updateURL(name, control.value)
    }
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