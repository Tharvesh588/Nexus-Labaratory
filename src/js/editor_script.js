function runCode() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;

    const output = document.getElementById('output').contentWindow.document;
    output.open();
    output.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `);
    output.close();
}
function clearCode() {
    // Clear the textarea values
    document.getElementById('html-code').value = '';
    document.getElementById('css-code').value = '';
    document.getElementById('js-code').value = '';

    // Clear the content of the iframe
    const output = document.getElementById('output').contentWindow.document;
    output.open();
    output.write('');
    output.close();
}
