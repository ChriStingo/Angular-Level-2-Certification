import { Injectable } from '@angular/core'

import { ColorDTO, Summary, TypoDTO } from '../../types/types'

@Injectable({
  providedIn: 'root'
})
export class StateService {
  yourCar: Summary = {}

  constructor() {}

  getSummary(): Summary {
    return this.yourCar
  }

  isStep1Completed(): boolean {
    return !!(this.yourCar.code && this.yourCar.description && this.yourCar.color)
  }

  isStep2Completed(): boolean {
    return !!(this.yourCar.config)
  }

  setConfig(config?: TypoDTO) {
    this.yourCar.config = config
  }

  setTowHitch(towHitch: boolean) {
    this.yourCar.towHitch = towHitch
  }

  setYoke(yoke: boolean) {
    this.yourCar.yoke = yoke
  }

  setModel(code: string, description: string, color: ColorDTO) {
    this.yourCar.code = code
    this.yourCar.description = description
    this.yourCar.color = color
  }

  resetModel() {
    this.yourCar.code = undefined
    this.yourCar.description = undefined
    this.yourCar.color = undefined
    this.yourCar.config = undefined
    this.yourCar.towHitch = false
    this.yourCar.yoke = false
  }

  resetConfig() {
    this.setConfig(undefined)
  }
}
