"use strict";

export async function pay(event) {
    console.log(event);
    console.log(process.env.TEST);
    return JSON.parse(event.body);
}
