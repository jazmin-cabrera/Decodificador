function encryptText() {
    const inputText = document.getElementById('inputText').innerText;
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').innerText = encryptedText;
}

function decryptText() {
    const encryptedText = document.getElementById('outputText').innerText;
    let decryptedText = encryptedText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('inputText').innerText = decryptedText;
}

function copyText() {
    const outputText = document.getElementById('outputText');
    const range = document.createRange();
    range.selectNode(outputText);
    window.getSelection().removeAllRanges(); // Clear current selection
    window.getSelection().addRange(range); // Select the text
    document.execCommand('copy');
    window.getSelection().removeAllRanges(); // Deselect the text
    alert('Texto copiado: ' + outputText.innerText);
}
