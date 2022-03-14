import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = []
        this._colors = []
        this._products = []
        this._selectedType = {}
        this._selectedColor = {}
        makeAutoObservable(this)
    }

    logs(){
        console.log('hello')
    }
    set types(types) {
        this._types = types
    }
    set colors(colors) {
        this._colors = colors
    }
    set products(products) {
        this._products = products
    }
    set selectedType(type) {
        this._selectedType = type
    }
    set selectedColor(color) {
        this._selectedColor = color
    }

    get types() {
        return this._types
    }
    get colors() {
        return this._colors
    }
    get products() {
        return this._products
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedColor() {
        return this._selectedColor
    }
}

