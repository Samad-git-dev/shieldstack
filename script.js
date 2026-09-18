btn = document.getElementById('btn')
id = document.getElementById('darkmode')
let isDark = 'false'
function wakeUp(btn) {
    isDark = !isDark
    if (isDark) {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    } else {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }
}
