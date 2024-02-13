const insert = document.getElementById('insert')
window.addEventListener('keydown',(e) => {  //keydown event is fired when a key is pressed.
    insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
        <th>key</th>
        <th>keyCode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key === ' ' ? 'Space': e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>
    </div>
    `
})