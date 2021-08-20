import { PetSex } from './petSex';
import { PetType } from "./petType"

export type Pet = {
    type: PetType,
    image: string,
    name: string,
    color: string,
    sex: PetSex
}