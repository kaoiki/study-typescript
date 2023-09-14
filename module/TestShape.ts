import * as shape from "./IShape"
import * as circle from "./Circle"
import * as rectangele from "./Rectangle"

function drawAll(shapeDraw: shape.IShape){
    shapeDraw.draw();
}

drawAll(new circle.Circle)
drawAll(new rectangele.Rectangle)