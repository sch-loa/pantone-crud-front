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

  constructor(private router: Router, private route: ActivatedRoute){}

  updateURL(param: string, value: string | number | boolean){
    const currentParams = { ...this.route.snapshot.queryParams }

    if(value){ currentParams[param] = value     
    } else { delete currentParams[param] }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: currentParams,
      replaceUrl: true,
    }) 
  }
}

class Range{
  min!: number
  max!: number
}