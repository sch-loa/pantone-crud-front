import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DECLARATIONS, IMPORTS } from 'src/app/app.module'
import { ColorChartComponent } from './color-chart.component'
import { ColorCard } from 'src/domain/ColorCard'

describe('ColorChartComponent', () => {
  let component: ColorChartComponent
  let fixture: ComponentFixture<ColorChartComponent>

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ColorChartComponent, DECLARATIONS],
      imports: [IMPORTS]
    })
    fixture = TestBed.createComponent(ColorChartComponent)
    component = fixture.componentInstance
    component.colorCards = [new ColorCard(1, 107, 'U', 'ffb6b3'),]
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render create form', () => {
    const addBtn = searchElement('add-button')
    addBtn.click()
    fixture.detectChanges()
    const modalForm = searchElement('modalForm')
    expect(modalForm).toBeTruthy()
  })

  it('should render update form', () => {
    searchElement('options-btn').click()
    fixture.detectChanges()
    searchElement('edit-btn').click()
    fixture.detectChanges()
    const modalForm = searchElement('modalForm')
    expect(modalForm).toBeTruthy()
  })

  function searchElement(testId: string) {
    const compiled = fixture.debugElement.nativeElement
    return compiled.querySelector(`[data-testid="${testId}"]`)
  }
})
