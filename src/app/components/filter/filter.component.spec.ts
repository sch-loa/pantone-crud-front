import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { DECLARATIONS, IMPORTS } from 'src/app/app.module'
import { FilterComponent } from './filter.component'


describe('FilterComponent', () => {
  let component: FilterComponent
  let fixture: ComponentFixture<FilterComponent>
  let activatedRoute: ActivatedRoute

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent, DECLARATIONS],
      imports: [IMPORTS, RouterTestingModule]
    })
    fixture = TestBed.createComponent(FilterComponent)
    component = fixture.componentInstance
    activatedRoute = TestBed.inject(ActivatedRoute)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should update min value', () => {
    const value = '5'
    const minValue = searchElement('minValue')
    writeInput(minValue, value)

    expect(minValue.value).toBe(value)
    expect(component.range.min).toBe(+value)
  })

  it('should update max value', () => {
    const value = '5'
    const maxValue = searchElement('maxValue')
    writeInput(maxValue, value)

    expect(maxValue.value).toBe(value)
    expect(component.range.max).toBe(+value)
  })

  it('should exchange range values', () => {
    const minNum = '5'
    const maxNum = '10' 
    const minValue = searchElement('minValue')
    const maxValue = searchElement('maxValue')
    const event = new KeyboardEvent('keyup', { key: 'Enter' })

    writeInput(minValue, maxNum)
    minValue.dispatchEvent(event)
    writeInput(maxValue, minNum)
    maxValue.dispatchEvent(event)

    expect(component.range.min).toBe(+minNum)
    expect(component.range.max).toBe(+maxNum)
  })

  it('should update url min color value', () => {
    const num = '6'
    const minValue = searchElement('minValue')

    writeInput(minValue, num)
    minValue.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }))

    fixture.whenStable().then(() => {
      expect(activatedRoute.snapshot.queryParams['min_color']).toEqual(num)
    })
  })

  it('should update url max color valur', () => {
    const num = '6'
    const maxValue = searchElement('maxValue')

    writeInput(maxValue, num)
    maxValue.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }))

    fixture.whenStable().then(() => {
      expect(activatedRoute.snapshot.queryParams['max_color']).toEqual(num)
    })
  })

  it('should load the url uncoated texture value', () => {
    const uncoated = searchElement('checkbox__uncoated')
    uncoated.click()
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(activatedRoute.snapshot.queryParams['uncoated']).toEqual('true')
    })
  })

  it('should load the url coated texture value', () => {
    const coated = searchElement('checkbox__coated')
    coated.click()
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(activatedRoute.snapshot.queryParams['coated']).toEqual('true')
    })
  })

  function searchElement(testId: string) {
    const compiled = fixture.debugElement.nativeElement
    return compiled.querySelector(`[data-testid="${testId}"]`)
  }

  function writeInput(element: HTMLInputElement, value: string) {
    element.value = value
    element.dispatchEvent(new Event('input'))
    fixture.detectChanges()
  }
})
