import { TestBed } from '@angular/core/testing'

import { ColorCardService } from './color-card.service'

describe('ColorCardService', () => {
  let service: ColorCardService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ColorCardService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
