import kbTemplate from './kb.handlebars'
class Keyboard {
    constructor() {
        console.log(kbTemplate())
        document.body.innerHTML+=kbTemplate()
    }
}
export default Keyboard