// Libraries
import { RouteComponentProps } from "react-router-dom";
// Types
import Characteristics from "../../types/characteristics.type";

export interface Props extends RouteComponentProps {
    characteristics: Characteristics | null,
    setCharacteristics: (characteristics: Characteristics | null) => object
}

export interface State { }