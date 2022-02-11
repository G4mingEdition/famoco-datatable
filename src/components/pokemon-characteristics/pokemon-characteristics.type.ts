// Libraries
import { RouteComponentProps } from "react-router-dom";
import { CharacteristicsAction } from "../../redux/actions/pokemonsActions";
// Types
import Characteristics from "../../types/characteristics.type";

export interface Props extends RouteComponentProps {
    characteristics: Characteristics | null,
    setCharacteristics: (characteristics: Characteristics | null) => CharacteristicsAction
}

export interface State { }