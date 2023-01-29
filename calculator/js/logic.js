import {print} from './utils/print.js'

const main = () => {
    let result = 0
    let firstvariable = '';
    let sign = '';
    let secondvariable = '';
    return (state) => {
        if (state == '+' || state == '-' || state == 'x' || state == '/') {
            sign = state

        }
        if (sign !== '') {
            if (state !== '=' && state !== '+' && state !== '-' && state !== 'x' && state !== '/' && state !== 'С' && state !== 'АС') {
                secondvariable += state
            }
        }
        if (state !== '=' && state !== '+' && state !== '-' && state !== 'x' && state !== '/' && state !== 'С' && state !== 'АС' && secondvariable == 0) {
            firstvariable += state
        }
        if (state == '=') {
            if (sign == '+') {
                result = Number(firstvariable) + Number(secondvariable)
            } else if (sign == '-') {
                result = Number(firstvariable) - Number(secondvariable)
            } else if (sign == 'x') {
                result = Number(firstvariable) * Number(secondvariable)
            } else if (sign == '/') {
                result = Number(firstvariable) / Number(secondvariable)
            }

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

        console.log('firstvariable', firstvariable)
        console.log('sign', sign)
        console.log('secondvariable', secondvariable)
        console.log('result', result)
        print(result)
    }
}

export default main