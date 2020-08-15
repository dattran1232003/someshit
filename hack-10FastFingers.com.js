/*
 * @ Make by dDattran, Email: dattran1232003@gmail.com
 *
 * Coppy and patse it into console of your browser in www.10fastfingers.com
 * Replace 'speed' variable's value by the speed value you want (WPM units) 
 * Hit Enter and enjoy It :3
 *
 * WPM wouldn't be one hundred percent correct, because JavaScript is a fucking stupid language for calculator.
 * But I love it :P.
 **/

function hack() {
        const highlightingWord = $('span.highlight')
        const textBox = $('#inputfield')
        
        if (highlightingWord.length === 0) return
        
        textBox.val(highlightingWord.text())
        const space = jQuery.Event('keyup')
        space.which = 32 // space code
        textBox.trigger(space)
}

const speed = 100 // WPM/Words Per Minute
const time = (60 / speed) * 1000 // ms

$(document).ready(() => {
        setInterval(hack, time)
})


