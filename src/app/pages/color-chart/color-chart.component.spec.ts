import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DECLARATIONS, IMPORTS } from 'src/app/app.module'
import { ColorChartComponent } from './color-chart.component'

describe('ColorChartComponent', () => {
  let component: ColorChartComponent
  let fixture: ComponentFixture<ColorChartComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorChartComponent, DECLARATIONS],
      imports: [IMPORTS]
    })
    fixture = TestBed.createComponent(ColorChartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
