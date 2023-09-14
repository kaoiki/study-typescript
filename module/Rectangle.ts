import * as shape from "./IShape"
export class Rectangle implements shape.IShape {
    public draw() {
        console.log("i am Rectangle")
    }
}
