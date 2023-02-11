import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Payment implements HasFormatter {
    constructor(
        readonly recipent: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.recipent} is owed £${this.amount} for ${this.details}`
    }
}