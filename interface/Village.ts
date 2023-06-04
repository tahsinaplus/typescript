import { Country } from "./Country";

export class Village implements Country{
    getInfo(): string {
        return "From Village";
    }

}