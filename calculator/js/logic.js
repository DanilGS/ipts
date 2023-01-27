import {print} from './utils/print.js'


const main = () => {
    let actions = ''
    let number1 = ''
    let number2 = ''
    return (state) => {
        if (state >= 0 || state == '.') {
            if (number2 == '' && actions == '') {
                number1 += state
                print(number1)
            }
            if (number1 !== '' && actions !== '') {
                number2 += state
                print(number2)
            }
        }
        if (state == '+' || state == '-' || state == 'x' || state == '/') {
            actions = state
        } else if (state == '=') {
            if (actions == '+') {
                print(parseFloat(number2) + parseFloat(number1))
                number1 = number2
            } else if (actions == '-') {
                print(parseFloat(number1) - parseFloat(number2))
                number1 = number2
            } else if (actions == 'x') {
                print(parseFloat(number2) * parseFloat(number1))
                number1 = number2
            } else if (actions == '/') {
                print(number1 / number2)
                number1 = number2
            }
        } else if (state == 'С') {
            number2 = ''
            print(0)
        } else if (state == 'АС') {
            number1 = '';
            number2 = '';
            actions = '';
            print(0)
        }

    }
}
export default main