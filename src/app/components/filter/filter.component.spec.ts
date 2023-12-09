import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DECLARATIONS, IMPORTS } from 'src/app/app.module'
import { FilterComponent } from './filter.component'

describe('FilterComponent', () => {
  let component: FilterComponent
  let fixture: ComponentFixture<FilterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent, DECLARATIONS],
      imports: [IMPORTS]
    })
    fixture = TestBed.createComponent(FilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
