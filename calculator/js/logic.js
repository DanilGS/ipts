import {print} from './utils/print.js'

const main = () => {
    let result = 0
    let firstvariable = '';
    let sign = '';
    let secondvariable = '';
    return (state) => {
        if (state == '+' || state == '-' || state == 'x' || state == '/') {
            sign = state
            print(sign)
        }
        if (sign !== '') {
            if (state !== '=' && state !== '+' && state !== '-' && state !== 'x' && state !== '/' && state !== 'С' && state !== 'АС') {
                secondvariable += state
                print(secondvariable)
            }
        }
        if (state !== '=' && state !== '+' && state !== '-' && state !== 'x' && state !== '/' && state !== 'С' && state !== 'АС' && secondvariable == 0) {
            firstvariable += state
            print(firstvariable)
        }
        if (state == '=') {
            if (sign == '+') {
                result = eval(`${firstvariable}+${secondvariable}`)
            } else if (sign == '-') {
                result = eval(`${firstvariable}-${secondvariable}`)
            } else if (sign == 'x') {
                result = eval(`${firstvariable}*${secondvariable}`)
            } else if (sign == '/') {
                result = eval(`${firstvariable}/${secondvariable}`)
            }
            print(result)
        }
        if (state == 'АС') {
            firstvariable = ''
            secondvariable = ''
            sign = ''
            result = 0
        }
        if (state == 'С') {
            secondvariable = ''
            print(0)
        }
    }
}

export default main