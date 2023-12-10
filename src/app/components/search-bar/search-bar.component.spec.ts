import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DECLARATIONS, IMPORTS } from 'src/app/app.module'
import { SearchBarComponent } from './search-bar.component'

describe('SearchBarComponent', () => {
  let component: SearchBarComponent
  let fixture: ComponentFixture<SearchBarComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent, DECLARATIONS],
      imports: IMPORTS
    })
    fixture = TestBed.createComponent(SearchBarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
