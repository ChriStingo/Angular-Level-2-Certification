import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { ConfigurationDTO, ModelDTO } from '../../types/types'

@Injectable({
  providedIn: 'root'
})
export class ApiGateService {

  constructor(private http: HttpClient) { }

  getModels() {
    return this.http.get<ModelDTO[]>('/models')
  }

  getConfigurations(modelCode: string) {
    return this.http.get<ConfigurationDTO>(`/options/${modelCode}`)
  }
}
