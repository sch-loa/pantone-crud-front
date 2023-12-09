import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  search!: string

  constructor(private router: Router, private route: ActivatedRoute){}

  updateURL(){
    const currentParams = { ...this.route.snapshot.queryParams }

    if(this.search){ currentParams['search'] = this.search
    } else { delete currentParams['search'] }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: currentParams,
      replaceUrl: true,
    })
  }
}
