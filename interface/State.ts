import { Country } from "./Country";

export class State implements Country{
    getInfo(): string {
        return "From State";
    }
    
}