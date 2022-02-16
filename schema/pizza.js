import Realm from "realm";

export const PizzaSchema = {
    name: "Pizza",
    properties: {
        name: "string",
        price: "Decimal128",
        ingredients: "Ingredient[]",

    }

};

export const Ingredient = {
    name: "Ingredient",
    properties: {
        name: "string",
        price: "Decimal128"
    }
}