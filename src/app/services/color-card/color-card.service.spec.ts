import { TestBed } from '@angular/core/testing'

import { IMPORTS } from 'src/app/app.module'
import { ColorCardService } from './color-card.service'

describe('ColorCardService', () => {
  let service: ColorCardService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: IMPORTS
    })
    service = TestBed.inject(ColorCardService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
