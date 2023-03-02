const addRow = () => {
    let table = document.getElementById("matrix-inputs");
    let rows = table.querySelectorAll("tr").length;
    if(rows < 10){
        let cols = table.querySelector("tr").querySelectorAll("td").length;
        let mtr = document.createElement('tr');
        for(let j = 0; j < cols; j++){
            let mtd = document.createElement('td');
            let mn = document.createElement('mn')
            let input = document.createElement('input');
            input.setAttribute('id', `A-${rows}-${j}`);
            input.setAttribute('aria-label', `a ${rows+1} ${j+1}`);
            input.setAttribute('type', 'text');
            input.setAttribute('role', 'textbox');
            input.setAttribute('placeholder', '0');
            input.setAttribute('pattern', '[0-9]+([\.][0-9]+)?');
            input.setAttribute('style', 'min-width: 6.33333ch; max-width: 6.33333ch; margin:0.125rem');
            input.setAttribute('enterkeyhint', 'enter');
            input.setAttribute('tabindex', '0');
            input.setAttribute('name', `a_${rows}_${j}`);
            input.setAttribute('required', '');

            mn.appendChild(input);
            mtd.appendChild(mn);
            mtr.appendChild(mtd);
        }
        let vector = document.getElementById("vector-inputs");
        let vmtr = document.createElement('tr');
        let vmtd = document.createElement('td');
        let vmn = document.createElement('mn')
        let vinput = document.createElement('input');
        vinput.setAttribute('id', `B-${rows}`);
        vinput.setAttribute('aria-label', `b ${rows+1}`);
        vinput.setAttribute('type', 'text');
        vinput.setAttribute('role', 'textbox');
        vinput.setAttribute('placeholder', '0');
        vinput.setAttribute('pattern', '[0-9]+([\.][0-9]+)?');
        vinput.setAttribute('style', 'min-width: 6.33333ch; max-width: 6.33333ch; margin:0.125rem');
        vinput.setAttribute('enterkeyhint', 'enter');
        vinput.setAttribute('tabindex', '0');
        vinput.setAttribute('name', `b_${rows}`);
        vinput.setAttribute('required', '');
        vmn.appendChild(vinput);
        vmtd.appendChild(vmn);
        vmtr.appendChild(vmtd);
        vector.appendChild(vmtr);

        table.appendChild(mtr);
        let xvector = document.getElementById("xvector");
        let xmtr = document.createElement('tr');
        let xmtd = document.createElement('td');
        let xmsub = document.createElement('msub');
        let xmi = document.createElement('mi');
        let xmn = document.createElement('mn');
        const textNode = document.createTextNode('x');
        const numberNode = document.createTextNode((rows+1).toString());
        xmn.appendChild(numberNode);
        xmi.appendChild(textNode);
        xmsub.appendChild(xmi);
        xmsub.appendChild(xmn);
        xmtd.appendChild(xmsub);
        xmtr.appendChild(xmtd);
        xvector.appendChild(xmtr);
    }
}

const removeRow = () => {
    let table = document.getElementById("matrix-inputs");
    let rows = table.querySelectorAll("tr").length;
    if(rows > 1)
    {
        const lastRow = table.lastChild;
        if (lastRow) {
            table.removeChild(lastRow);
        }
        let vector = document.getElementById("vector-inputs");
        const lastV = vector.lastChild;
        if (lastV) {
            vector.removeChild(lastV);
        }
        let xvector = document.getElementById("xvector");
        const lastX = xvector.lastChild;
        if (lastX) {
            xvector.removeChild(lastX);
        }
    }
    else {
        addRow();
        addRow();
    }
}

const addColumn = () => {
    let table = document.getElementById("matrix-inputs");
    let cols = table.querySelector("tr").querySelectorAll("td").length;
    if(cols < 10){
        let rows = table.querySelectorAll("tr").length;
        let trs = table.querySelectorAll('tr');
        for(let i = 0; i < rows; i++){
            let mtd = document.createElement('td');
            let mn = document.createElement('mn')
            let input = document.createElement('input');
            input.setAttribute('id', `A-${i}-${cols}`);
            input.setAttribute('aria-label', `a ${i+1} ${cols+1}`);
            input.setAttribute('type', 'text');
            input.setAttribute('role', 'textbox');
            input.setAttribute('placeholder', '0');
            input.setAttribute('pattern', '[0-9]+([\.][0-9]+)?');
            input.setAttribute('style', 'min-width: 6.33333ch; max-width: 6.33333ch; margin:0.125rem');
            input.setAttribute('enterkeyhint', 'enter');
            input.setAttribute('tabindex', '0');
            input.setAttribute('name', `a_${i}_${cols}`);
            input.setAttribute('required', '');

            mn.appendChild(input);
            mtd.appendChild(mn);
            trs[i].appendChild(mtd);
        }
    }
}

const removeColumn = () => {
    let table = document.getElementById("matrix-inputs");
    let cols = table.querySelector("tr").querySelectorAll("td").length;
    if(cols > 1)
    {
        let rows = table.querySelectorAll("tr").length;
        let trs = table.querySelectorAll('tr');
        for(let i = 0; i < rows; i++){
        const lastElement = trs[i].lastChild;
            if (lastElement) {
                trs[i].removeChild(lastElement);
            }
        }
    }
    else {
        addColumn();
        addColumn();
    }
}