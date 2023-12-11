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
    const cards$ = this.httpClient.get<ColorCardJSON[]>(`${REST_SERVER_URL}/pantone/colorCards${urlParams}`)
    const cards = await lastValueFrom(cards$)
    return cards.map((cardJSON: ColorCardJSON) => ColorCard.fromJSON(cardJSON))
  }

  async create(card: string){
    await lastValueFrom(this.httpClient.post<string>(`${REST_SERVER_URL}/pantone/createColorCard`, card, {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    }))
  }

  async update(card: string){
    await lastValueFrom(this.httpClient.put<string>(`${REST_SERVER_URL}/pantone/updateColorCard`, card, {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    }))
  }

  async delete(card: ColorCard){
    await lastValueFrom(this.httpClient.delete(`${REST_SERVER_URL}/pantone/deleteCard?id=${card.id}`))
  }
}
