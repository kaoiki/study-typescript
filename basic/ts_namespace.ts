namespace Zhou {
    export interface IFace {  
        name:string
        show() : void
    }
    export class Face implements IFace {  

        constructor(public name:string) {
            this.name = name
        }

        show() {
            console.log("hello " + this.name)
        }

    }
}

namespace Dao { 
    export namespace invoiceApp { 
       export class Invoice { 
          public calculateDiscount(price: number) { 
             return price * .40; 
          } 
       } 
    } 
 }

 var invoice = new Dao.invoiceApp.Invoice();
 console.log(invoice.calculateDiscount(100))