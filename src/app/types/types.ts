export type ModelDTO = {
    code: string,
    description: string
    colors: ColorDTO[]
}

export type ColorDTO = {
    code: string
    description: string
    price: number
}

export type ConfigurationDTO = {
    configs: TypoDTO[]
    towHitch: boolean
    yoke: boolean
}

export type TypoDTO = {
    id: number
    description: string
    range: number
    speed: number
    price: number
}

export type Summary = {
    code?: string,
    description?: string
    color?: ColorDTO
    config?: TypoDTO
    towHitch?: boolean
    yoke?: boolean
}