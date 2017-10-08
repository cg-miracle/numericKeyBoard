class eventEmitter {
    constructor() {
        this._events = {}
    }
    // 监听事件
    on(event, fn, context = this) {
        if (!this._events[event]) {
            this._events[event] = []
        }
        this._events[event].push([fn, context])
    }
    // 解除监听事件
    off(event, fn) {
        const _events = this._events[event]
        if (!_events) {
            return
        }
        let length = _events.length
        while (length--) {
            if (_events[count][0] === fn) {
                _events[count][0] = undefined
            }
        }
    }
    // 发射监听队列中的事件
    emit(event) {
        const events = this._events[event]
        let args = arguments
        if (!events) {
            return
        }
        let eventsClone = [...events]
        eventsClone.forEach(function (value) {
            let [fn, context] = value
            if (fn) {
                fn.apply(context, [].slice.call(args, 1))
            }
        })
    }
}

export default eventEmitter