const myTextArea = document.getElementById('my-text')
const properCaseBtn = document.getElementById('proper-case')
const upperCaseBtn = document.getElementById('upper-case')
const lowerCaseBtn = document.getElementById('lower-case')
const sentenceCaseBtn = document.getElementById('sentence-case')
const saveButton = document.getElementById('save-text-file')

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

properCaseBtn.addEventListener('click', (e) => {
    let newTextVal = []
    for (let prop of myTextArea.value.split(' ')) {
        newTextVal.push(prop[0].toUpperCase() + prop.slice(1).toLowerCase())
    }
    myTextArea.value = newTextVal.join(" ")
})

upperCaseBtn.addEventListener('click', (e) => {
    let newTextVal = []
    for (let prop of myTextArea.value.split(' ')) {
        newTextVal.push(prop.toUpperCase())
    }
    myTextArea.value = newTextVal.join(" ")
})

lowerCaseBtn.addEventListener('click', (e) => {
    let newTextVal = []
    for (let prop of myTextArea.value.split(' ')) {
        newTextVal.push(prop.toLowerCase())
    }
    myTextArea.value = newTextVal.join(" ")
})

sentenceCaseBtn.addEventListener('click', (e) => {
    let newTextVal = []
    for (let prop of myTextArea.value.trim().split('. ')) {
        newTextVal.push(prop[0].toUpperCase() + prop.slice(1).toLowerCase())
    }
    myTextArea.value = newTextVal.join(". ")
})

saveButton.addEventListener('click', (e) => {
    download('text.txt', myTextArea.value)
})
