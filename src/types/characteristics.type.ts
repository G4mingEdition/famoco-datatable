// Types
import Ability from './ability.type';
import Sprites from './sprites.type';
import Stat from './stat.type';
import Type from './type.type';

export default interface Characteristics {
    name: string,
    order: number,
    abilities: Ability[],
    sprites: Sprites,
    stats: Stat[],
    types: Type[],
    weight: number,
    height: number
}