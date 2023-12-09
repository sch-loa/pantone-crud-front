import { Injectable } from '@angular/core'
import { ColorCard, ColorCardJSON } from 'src/domain/ColorCard'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { REST_SERVER_URL } from '../config'
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ColorCardService {
  colorCards!: ColorCard[]

  constructor(private httpClient: HttpClient) {
    this.colorCards = [
      new ColorCard(1, 107, 'U', 'ffb6b3'),
      new ColorCard(2, 134, 'C', 'e67e22'),
      new ColorCard(3, 156, 'C', '8c564b'),
      new ColorCard(4, 161, 'U', 'c6913d'),
      new ColorCard(5, 179, 'C', 'a6522d'),
      new ColorCard(6, 192, 'C', 'd2b48c'),
      new ColorCard(7, 230, 'C', 'b87333'),
      new ColorCard(8, 241, 'C', '6d4c41'),
      new ColorCard(9, 294, 'C', '85987f'),
      new ColorCard(10, 330, 'C', '4c5c62'),
      new ColorCard(11, 349, 'C', '83DCB0'),
      new ColorCard(12, 572, 'C', 'eebbc6'),
      new ColorCard(13, 7558, 'C', 'e7b77f'),
      new ColorCard(14, 268, 'C', '663399'),
      new ColorCard(15, 518, 'C', '997D9B'),
      new ColorCard(16, 264, 'C', 'CD91EE'),
      new ColorCard(17, 186, 'C', 'C40233'),
      new ColorCard(18, 199, 'C', 'DC2628'),
      new ColorCard(19, 2304, 'U', '00AAEE'),
      new ColorCard(20, 521, 'U', '209'),
      new ColorCard(21, 286, 'C', '003366'),
      new ColorCard(22, 675, 'C', 'A8A8C0'),
      new ColorCard(23, 1224, 'C', '24F5'),
      new ColorCard(24, 1205, 'C', 'FFFA65'),
      new ColorCard(25, 117, 'U', '075'),
      new ColorCard(26, 116, 'C', 'FFF943')
    ]
    
  }

  async get(urlParams: string){
    const cards$ = this.httpClient.get<ColorCardJSON[]>(`${REST_SERVER_URL}/colorCards?${urlParams}`)
    return (await lastValueFrom(cards$)).map((cardJSON: ColorCardJSON) => ColorCard.fromJSON(cardJSON))
  }

  create(card: string){
    this.httpClient.post<ColorCardJSON[]>(`${REST_SERVER_URL}/colorCards/create`, card, {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    })
  }

  update(card: string){
    this.httpClient.put<ColorCardJSON[]>(`${REST_SERVER_URL}/colorCards/create`, card, {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    })
  }

  delete(card: ColorCard){
    this.httpClient.delete<ColorCardJSON[]>(`${REST_SERVER_URL}/colorCards/remove?${card}`)
  }
}
