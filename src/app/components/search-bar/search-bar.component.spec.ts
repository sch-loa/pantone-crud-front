import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { DECLARATIONS, IMPORTS } from 'src/app/app.module'
import { SearchBarComponent } from './search-bar.component'

describe('SearchBarComponent', () => {
  let component: SearchBarComponent
  let fixture: ComponentFixture<SearchBarComponent>
  let activatedRoute: ActivatedRoute

  const searchContent = "this is my search"

  beforeEach( async () => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent, DECLARATIONS],
      imports: [IMPORTS, RouterTestingModule]
    })
    fixture = TestBed.createComponent(SearchBarComponent)
    component = fixture.componentInstance
    activatedRoute = TestBed.inject(ActivatedRoute)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should update the search value', () => {
    const searchInput: HTMLInputElement = searchElement('searchInput')

    writeInput(searchInput, searchContent)

    expect(searchInput.value).toBe(searchContent)
    expect(component.search).toBe(searchContent)
  })

  it('should update the url', () => {
    const searchInput: HTMLInputElement = searchElement('searchInput')
    const searchButton = searchElement('searchButton')

    writeInput(searchInput, searchContent)
    searchButton.click()
    fixture.detectChanges()
    
    fixture.whenStable().then(() => {
      expect(activatedRoute.snapshot.queryParams['search']).toEqual(searchContent)
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
