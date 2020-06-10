interface Observer {
    update: (data: any) => void
}
interface Subject {
    subscribe: (observer: Observer) => void
    unsuscribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject {
    observers: Observer[] = []

    constructor() {
        const btn: HTMLInputElement = document.querySelector('#value')
        btn.addEventListener('input', () => {
            this.notify(btn.value)
        })
    }

    subscribe(observer: Observer) {
        this.observers.push(observer)
    }

    unsuscribe(observer: Observer) {
        const index = this.observers.findIndex(obs => {
            return obs === observer
        })


        this.observers.splice(index, 1)
    }

    notify(data: any) {
        this.observers.forEach(observer => observer.update(data))
    }
}

class PriceDisplay implements Observer {
    private display: HTMLElement
    constructor() {
        this.display = document.querySelector("#price")
    }

    update(data: any) {
        this.display.innerText = data
    }
}


const value = new BitcoinPrice()
const display = new PriceDisplay()

value.subscribe(display)

setTimeout(() => {
    value.unsuscribe(display)
}, 5000);
