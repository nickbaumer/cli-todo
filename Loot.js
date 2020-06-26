class Loot {
    constructor(name, price){
        this._name = name;
        this._price = price; //flea market
        this._lastUpdated = Date.now();
    }

    set (){
        this._lastUpdated = Date.now();
    }

    get lastUpdated() {
        return this._lastUpdated;
    }

    set price(data) {
        this._price = data;
        // this._lastUpdated = Date.now();
    }

    get price() {
        return this._price;
    }

    set traderName(data) {
        this._traderName = data;
        // this._lastUpdated = Date.now();
    }

    get traderName() {
        return this._traderName;
    }

    set traderSell(data) {
        this._traderSell = data;
        // this._lastUpdated = Date.now();
    }

    get traderSell() {
        return this._traderSell;
    }
}

module.exports = Loot;


// trader buy
// qty needed