import { HasFormatter } from '../interfaces/HasFormatter.js'

// classes
export class Invoice implements HasFormatter {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { } // same as above and the modifier must be in front to use this method

    format() {
        // this.client = "something else" // only readonly
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}