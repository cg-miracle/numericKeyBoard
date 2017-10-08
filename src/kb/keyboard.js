import kbTemplate from './kb.handlebars'
import EventEmitter from '../util/eventEmitter'
import {
    tplToDom,
    addEvent,
    addClass,
    removeClass,
    hasClass,
    log
} from '../util/util'

class Keyboard extends EventEmitter {
    constructor(options) {
        super()

        this.options = {
            maxDigit: 5, // 可点击的最大位数
        }
        this.options = Object.assign(this.options, options)
        this.numbers = []
        this._init()
    }
    _init() {
        this._createKB()
        this._bindEvents()
    }

    _createKB() {
        this.keyboard = tplToDom(kbTemplate())
        document.body.appendChild(this.keyboard)
    }

    _bindEvents() {
        const kbWrap = document.querySelector('.kb-wrap')
        addEvent(kbWrap, 'touchstart', (event) => {
            this._clickHandler(event)
        })
        addEvent(kbWrap, 'touchend', (event) => {
            const target = event.target
            removeClass(target, 'active')
        })
    }

    _clickHandler(event) {
        const target = event.target
        if (target.id === 'kb-del') {
            if (this.numbers.length) {
                this.numbers.pop()
                this.emit('kb.click', this.numbers)
            }
        } else if (target.id === 'kb-confirm') {
            this.hide()
            this.emit('kb.confirm', this.numbers)
        } else if (target.id === 'kb-hide') {
            this.hide()
            this.emit('kb.hide', this.numbers)
        } else {
            const max = this.options.maxDigit
            if (this.numbers.length >= max) {
                return
            }
            let value = target.innerHTML
            if (value === '.') {
                value = '.'
            } else {
                value = parseInt(value, 10)
            }
            this.numbers.push(value)
            this.emit('kb.click', this.numbers)
        }
        addClass(target, 'active')
        //log(this.numbers) 
    }

    show() {
        if (hasClass(this.keyboard, 'hide')) {
            removeClass(this.keyboard, 'hide')
            addClass(this.keyboard, 'show')
        }
    }

    hide() {
        if (hasClass(this.keyboard, 'show')) {
            removeClass(this.keyboard, 'show')
            addClass(this.keyboard, 'hide')
        }
    }
}

export default Keyboard