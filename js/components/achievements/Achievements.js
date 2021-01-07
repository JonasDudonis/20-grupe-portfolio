import { isValidAchievementItem} from './isValidAchievementItem.js'
    
    class Achievements {
        // uzrasyti default reiksmes tiesiai i params su {}
    constructor(params = {}) {
        this.selector = params.selector || '';
        this.limit = params.limit || this.defaultLimit;
        this.data = params.data || [];

        this.defaultLimit = 4;
        this.DOM = null;
        this.validUsedData = [];
        this.animationDuration = 5;
        this.fps = 30;
    }

    init() {
        if (!this.isValidSelector() || this.isValidData()) {
            return false;
        }


        this.limit = this.isValidLimit() ? this.limit : this.defaultLimit
    }

    isValidLimit() {
        if (typeof this.limit !== 'number' ||
        !isFinite(this.limit) ||
        this.limit < 1 ||
        this.limit % 1 !== 0) {
            return false;
        }
        return true;
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
        this.selector === '') {
        return false;
        }
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        return true;
    }

    isValidData() {
        if (!Array.isArray(this.data) ||
        this.data.length === 0) {
            return false;
        }
        return true;
    }

    isValidAchievementItem() {
        return true;
    }

            // logic
    render() {
        let HTML = `<div class"">
                    <i class="fa fa-${item.icon}"></i>
                    <div class="number">${item.number}"></div>
                    <div class="label">${item.label}"></div>
                </div>`

        let validItems = 0;
        for (const item of this.data) {
            if (validItems === this.limit) {
                break;
            }
            if (!this.isValidAchievementItem(item)) {
                continue;
            }    
            validItems++
            HTML += `<div class=${item.label}</div>`;
        }

        if (HTML === '') {
            return false;
        }


        this.DOM.innerHTML = HTML;
    }

    animateNumber(index, DOM) {
        const
    }
    
    addEvents() {
        addEventListener ('scroll', () => {

            const windowBottom = scrollY + innerHeight;

            const numberDOM = document.querySelector ('.achievements .item > .number');
            
            const numberDOM = numbersDOM[0];
            const numberBottom = numberDOM.offsetTop + numberDOM.offsetHeight;

            if (windowBotton > numberBottom) {
                // saugiklis, kuris animacija paleidzia tik viena karta
                if (this.validUsedData[index].animated) {
                    return false;
                }
                this.validUsedData[index].animated = true;

                // animacijos logika
                let step = 0;
                const increment = this.validUsedData[0].number / this.animationDuration / this.fps;

                const timer = setInterval(() => {
                    const value = Math.floor(increment * step);
                    step++
                    numberDOM.innerText = value;

                    if (value >= this.validUsedData[0].number) {
                        clearInterval(timer);
                    }

                // intervalo reiksme
                }, 1000/ this.fps);

            }
        })
    }

}

addEvents() {
    addEventListener ('scroll', () => {
        const numberDOM = document.querySelector ('.achievements .item > .number');
        for (let i  {

        this.animateNumber(index[0], numbersDOM[index]);

        }
    }
}
}
export { Achievements }

