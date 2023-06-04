import { Country } from "./Country";

export class City implements Country{
    getInfo(): string {
        return "From City";
    }
    
}