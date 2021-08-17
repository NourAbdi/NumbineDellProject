import { Release } from "./Release";

export class Product {
    // TODO add list of releases 
    public constructor(public id: number, public productName: string, public status: boolean, public releases: Release[]) {

    }

}