import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ColorCardComponent } from './color-card.component'
import { ColorCard } from 'src/domain/ColorCard'

describe('ColorCardComponent', () => {
  let component: ColorCardComponent
  let fixture: ComponentFixture<ColorCardComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorCardComponent]
    })
    fixture = TestBed.createComponent(ColorCardComponent)
    component = fixture.componentInstance
    component.colorCard = new ColorCard(1, 161, 'U', 'c6913d')
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render color code desc', () => {
    const colorCode = searchElement('colorCode').textContent
    expect(+colorCode).toBe(component.colorCard.code)
  })

  it('should render color type desc', () => {
    const colorType = searchElement('colorType').textContent
    expect(colorType).toBe(component.colorCard.type)
  })

  function searchElement(testId: string) {
    const compiled = fixture.debugElement.nativeElement
    return compiled.querySelector(`[data-testid="${testId}"]`)
  }
})
