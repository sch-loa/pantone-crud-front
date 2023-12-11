import { Injectable } from '@angular/core'
import { ColorCard, ColorCardJSON } from 'src/domain/ColorCard'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { REST_SERVER_URL } from '../../configuration/config'
import { lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ColorCardService {
  constructor(private httpClient: HttpClient) {}

  async get(urlParams: string): Promise<ColorCard[]>{
    const cards$ = this.httpClient.get<ColorCardJSON[]>(`${REST_SERVER_URL}/colorCards?${urlParams}`)
    const cards = await lastValueFrom(cards$)
    console.log(cards)
    return cards.map((cardJSON: ColorCardJSON) => ColorCard.fromJSON(cardJSON))
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
