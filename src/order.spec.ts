import 'mocha';
import { Order } from './order';
import { Line } from './line';
import { Bike } from './bike';
import { expect } from 'chai';

const defy = new Bike("Giant", "Defy 1", Bike.OneThousand);
const elite = new Bike("Specialized", "Venge Elite", Bike.TwoThousand);
const duraAce = new Bike("Specialized", "S-Works Venge Dura-Ace", Bike.FiveThousand);
const bmx = new Bike("Dontknowbrand", "Model 1", Bike.TwoThousand);
const bmc = new Bike("BMC", "Thriatlon", Bike.SixThousand);


//My cases, first new order with a new bike with 20 units. So it has to be a discount
const resultStatement20Model = `Order Receipt for Anywhere Bike Shop
\t20 x Dontknowbrand Model 1 = $32,000.00
Sub-Total: $32,000.00
Tax: $2,320.00
Total: $34,320.00`;

describe('Receipt Dontknowbrand', () => {
    it('should print a receipt with 20 Model 1 without discount', () => {
        var order = new Order("Anywhere Bike Shop", "");
        order.AddLine(new Line(bmx, 20));
        expect(order.Receipt()).to.equal(resultStatement20Model);
    });
});

const resultStatement20ModelDis = `Order Receipt for Anywhere Bike Shop
\t20 x Dontknowbrand Model 1 = $27,200.00
Sub-Total: $27,200.00
Tax: $1,972.00
Total: $29,172.00`;

describe('Receipt Dontknowbrand', () => {
    it('should print a receipt with 20 Model 1 with discount', () => {
        var order = new Order("Anywhere Bike Shop", "15P");
        order.AddLine(new Line(bmx, 20));
        expect(order.Receipt()).to.equal(resultStatement20ModelDis);
    });
});

const resultStatement4BMC = `Order Receipt for Anywhere Bike Shop
\t4 x BMC Thriatlon = $18,000.00
Sub-Total: $18,000.00
Tax: $1,305.00
Total: $19,305.00`;

describe('Receipt Dontknowbrand', () => {
    it('should print a receipt with 4 Triathlon without discount', () => {
        var order = new Order("Anywhere Bike Shop", "");
        order.AddLine(new Line(bmc, 4));
        expect(order.Receipt()).to.equal(resultStatement4BMC);
    });
});

const resultStatement4BMCDis = `Order Receipt for Anywhere Bike Shop
\t4 x BMC Thriatlon = $18,000.00
Sub-Total: $18,000.00
Tax: $0.00
Total: $18,000.00`;

describe('Receipt Dontknowbrand', () => {
    it('should print a receipt with 4 Triathlon with no tax day', () => {
        var order = new Order("Anywhere Bike Shop", "NOTAXDAY");
        order.AddLine(new Line(bmc, 4));
        expect(order.Receipt()).to.equal(resultStatement4BMCDis);
    });
});

//Your cases
const resultStatementOneDefy = `Order Receipt for Anywhere Bike Shop
\t1 x Giant Defy 1 = $1,000.00
Sub-Total: $1,000.00
Tax: $72.50
Total: $1,072.50`;

describe('Receipt 1 Defy', () => {
    it('should print a receipt with 1 Defy 1', () => {
        var order = new Order("Anywhere Bike Shop", "");
        order.AddLine(new Line(defy, 1));
        expect(order.Receipt()).to.equal(resultStatementOneDefy);
    });
});


const resultStatementOneElite = `Order Receipt for Anywhere Bike Shop
\t1 x Specialized Venge Elite = $2,000.00
Sub-Total: $2,000.00
Tax: $145.00
Total: $2,145.00`;

describe('Receipt 1 Elite', () => {
    it('should print a receipt with 1 Venge Elite', () => {
        var order = new Order("Anywhere Bike Shop", "");
        order.AddLine(new Line(elite, 1));
        expect(order.Receipt()).to.equal(resultStatementOneElite);
    });
});

const resultStatementOneDuraAce = `Order Receipt for Anywhere Bike Shop
\t1 x Specialized S-Works Venge Dura-Ace = $5,000.00
Sub-Total: $5,000.00
Tax: $362.50
Total: $5,362.50`;

describe('Receipt 1 Dura-Ace', () => {
    it('should print a receipt with 1 Dura-Ace', () => {
        var order = new Order("Anywhere Bike Shop", "");
        order.AddLine(new Line(duraAce, 1));
        expect(order.Receipt()).to.equal(resultStatementOneDuraAce);
    });
});

const resultStatementAllBikes = `Order Receipt for Anywhere Bike Shop
\t1 x Giant Defy 1 = $1,000.00
\t1 x Specialized Venge Elite = $2,000.00
\t1 x Specialized S-Works Venge Dura-Ace = $5,000.00
Sub-Total: $8,000.00
Tax: $580.00
Total: $8,580.00`;

describe('Receipt 4 Bikes', () => {
    it('should print a receipt with 4 different bikes', () => {
        var order = new Order("Anywhere Bike Shop", "");
        order.AddLine(new Line(defy, 1));
        order.AddLine(new Line(elite, 1));
        order.AddLine(new Line(duraAce, 1));
        expect(order.Receipt()).to.equal(resultStatementAllBikes);
    });
});



//HTML receipts

//My cases
const htmlResultStatement20Model = '<html><body><h1>Order Receipt for Anywhere Bike Shop</h1><ul><li>20 x Dontknowbrand Model 1 = $32,000.00</li></ul><h3>Sub-Total: $32,000.00</h3><h3>Tax: $2,320.00</h3><h2>Total: $34,320.00</h2></body></html>';

describe('Receipt Dontknowbrand', () => {
    it('should print an html receipt with 20 Model 1 without discount', () => {
        var order = new Order("Anywhere Bike Shop", "");
        order.AddLine(new Line(bmx, 20));
        expect(order.HtmlReceipt()).to.equal(htmlResultStatement20Model);
    });
});

const htmlResultStatement20ModelDis = '<html><body><h1>Order Receipt for Anywhere Bike Shop</h1><ul><li>20 x Dontknowbrand Model 1 = $27,200.00</li></ul><h3>Sub-Total: $27,200.00</h3><h3>Tax: $1,972.00</h3><h2>Total: $29,172.00</h2></body></html>';

describe('Receipt Dontknowbrand', () => {
    it('should print an html receipt with 20 Model 1 with discount', () => {
        var order = new Order("Anywhere Bike Shop", "15P");
        order.AddLine(new Line(bmx, 20));
        expect(order.HtmlReceipt()).to.equal(htmlResultStatement20ModelDis);
    });
});

const htmlResultStatement4BMC = '<html><body><h1>Order Receipt for Anywhere Bike Shop</h1><ul><li>4 x BMC Thriatlon = $18,000.00</li></ul><h3>Sub-Total: $18,000.00</h3><h3>Tax: $1,305.00</h3><h2>Total: $19,305.00</h2></body></html>';

describe('Receipt Dontknowbrand', () => {
    it('should print an html receipt with 4 Triathlon without discount', () => {
        var order = new Order("Anywhere Bike Shop", "");
        order.AddLine(new Line(bmc, 4));
        expect(order.HtmlReceipt()).to.equal(htmlResultStatement4BMC);
    });
});

const htmlResultStatement4BMCDis = '<html><body><h1>Order Receipt for Anywhere Bike Shop</h1><ul><li>4 x BMC Thriatlon = $18,000.00</li></ul><h3>Sub-Total: $18,000.00</h3><h3>Tax: $0.00</h3><h2>Total: $18,000.00</h2></body></html>';


describe('Receipt Dontknowbrand', () => {
    it('should print an html receipt with 4 Triathlon with no tax day', () => {
        var order = new Order("Anywhere Bike Shop", "NOTAXDAY");
        order.AddLine(new Line(bmc, 4));
        expect(order.HtmlReceipt()).to.equal(htmlResultStatement4BMCDis);
    });
});

//Your cases
const htmlResultStatementOneDefy = '<html><body><h1>Order Receipt for Anywhere Bike Shop</h1><ul><li>1 x Giant Defy 1 = $1,000.00</li></ul><h3>Sub-Total: $1,000.00</h3><h3>Tax: $72.50</h3><h2>Total: $1,072.50</h2></body></html>';

describe('Html Receipt 1 Defy', () => {
    it('should print an html receipt with 1 Defy 1', () => {
        var order = new Order("Anywhere Bike Shop", "");
        order.AddLine(new Line(defy, 1));
        expect(order.HtmlReceipt()).to.equal(htmlResultStatementOneDefy);
    });
});


const htmlResultStatementOneElite = '<html><body><h1>Order Receipt for Anywhere Bike Shop</h1><ul><li>1 x Specialized Venge Elite = $2,000.00</li></ul><h3>Sub-Total: $2,000.00</h3><h3>Tax: $145.00</h3><h2>Total: $2,145.00</h2></body></html>';

describe('Html Receipt 1 Elite', () => {
    it('should print an html receipt with 1 Venge Elite', () => {
        var order = new Order("Anywhere Bike Shop", "");
        order.AddLine(new Line(elite, 1));
        expect(order.HtmlReceipt()).to.equal(htmlResultStatementOneElite);
    });
});

const htmlResultStatementOneDuraAce = '<html><body><h1>Order Receipt for Anywhere Bike Shop</h1><ul><li>1 x Specialized S-Works Venge Dura-Ace = $5,000.00</li></ul><h3>Sub-Total: $5,000.00</h3><h3>Tax: $362.50</h3><h2>Total: $5,362.50</h2></body></html>';

describe('Html Receipt 1 Dura-Ace', () => {
    it('should print an html receipt with 1 Dura-Ace', () => {
        var order = new Order("Anywhere Bike Shop", "");
        order.AddLine(new Line(duraAce, 1));
        expect(order.HtmlReceipt()).to.equal(htmlResultStatementOneDuraAce);
    });
});

const htmlResultStatementAllBikes = '<html><body><h1>Order Receipt for Anywhere Bike Shop</h1><ul><li>1 x Giant Defy 1 = $1,000.00</li><li>1 x Specialized Venge Elite = $2,000.00</li><li>1 x Specialized S-Works Venge Dura-Ace = $5,000.00</li></ul><h3>Sub-Total: $8,000.00</h3><h3>Tax: $580.00</h3><h2>Total: $8,580.00</h2></body></html>';

describe('Html Receipt 4 Bikes', () => {
    it('should print an html receipt with 4 different bikes', () => {
        var order = new Order("Anywhere Bike Shop", "");
        order.AddLine(new Line(defy, 1));
        order.AddLine(new Line(elite, 1));
        order.AddLine(new Line(duraAce, 1));
        expect(order.HtmlReceipt()).to.equal(htmlResultStatementAllBikes);
    });
});