const init = (rowsN, colsN) => {
    let table = document.getElementById("matrix-inputs");
    let vector = document.getElementById("vector-inputs");

    let rows = rowsN;
    let cols = colsN;

    for(let i = 0; i < rows; i++){
        let mtr = document.createElement('tr');
        for(let j = 0; j < cols; j++){
            let mtd = document.createElement('td');
            let mn = document.createElement('mn')
            let input = document.createElement('input');
            input.setAttribute('id', `B-${i}-${j}`);
            input.setAttribute('aria-label', `a ${i+1} ${j+1}`);
            input.setAttribute('type', 'text');
            input.setAttribute('role', 'textbox');
            input.setAttribute('placeholder', '0');
            input.setAttribute('pattern', '[0-9]+([\.,][0-9]+)?');
            input.setAttribute('style', 'min-width: 6.33333ch; max-width: 6.33333ch; margin:0.125rem');
            input.setAttribute('enterkeyhint', 'enter');
            input.setAttribute('tabindex', '0');
            input.setAttribute('name', `a_${i}_${j}`);
            input.setAttribute('required', '');
            mn.appendChild(input);
            mtd.appendChild(mn);
            mtr.appendChild(mtd);
        }
        table.appendChild(mtr);

        let vmtr = document.createElement('tr');
        let vmtd = document.createElement('td');
        let vmn = document.createElement('mn')
        let input = document.createElement('input');
        input.setAttribute('id', `A-${i}`);
        input.setAttribute('aria-label', `b ${i+1}`);
        input.setAttribute('type', 'text');
        input.setAttribute('role', 'textbox');
        input.setAttribute('placeholder', '0');
        input.setAttribute('pattern', '[0-9]+([\.,][0-9]+)?');
        input.setAttribute('style', 'min-width: 6.33333ch; max-width: 6.33333ch; margin:0.125rem');
        input.setAttribute('enterkeyhint', 'enter');
        input.setAttribute('tabindex', '0');
        input.setAttribute('name', `b_${i}`);
        input.setAttribute('required', '');
        vmn.appendChild(input);
        vmtd.appendChild(vmn);
        vmtr.appendChild(vmtd);
        vector.appendChild(vmtr);
    }
    init_xvector(rows);
}

const init_matrix = (rowsN, colsN, data, data_b) => {
    let table = document.getElementById("matrix-inputs");
    let vector = document.getElementById("vector-inputs");

    let rows = rowsN;
    let cols = colsN;

    for (let i = 0; i < rows; i++) {
        let mtr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let mtd = document.createElement('td');
            let mn = document.createElement('mn');
            let input = document.createElement('input');
            input.setAttribute('id', `A-${i}-${j}`);
            input.setAttribute('aria-label', `a ${i + 1} ${j + 1}`);
            input.setAttribute('type', 'text');
            input.setAttribute('role', 'textbox');
            input.setAttribute('value', data[i][j]);
            input.setAttribute('pattern', '[0-9]+([\.][0-9]+)?');
            input.setAttribute('style', 'min-width: 6.33333ch; max-width: 6.33333ch; margin:0.125rem');
            input.setAttribute('enterkeyhint', 'enter');
            input.setAttribute('tabindex', '0');
            input.setAttribute('name', `a_${i}_${j}`);
            input.setAttribute('required', '');

            mn.appendChild(input);
            mtd.appendChild(mn);
            mtr.appendChild(mtd);
        }
        table.appendChild(mtr);

        let vmtr = document.createElement('tr');
        let vmtd = document.createElement('td');
        let vmn = document.createElement('mn')
        let input = document.createElement('input');
        input.setAttribute('id', `B-${i}`);
        input.setAttribute('aria-label', `b ${i+1}`);
        input.setAttribute('type', 'text');
        input.setAttribute('role', 'textbox');
        input.setAttribute('value', data_b[i]);
        input.setAttribute('pattern', '[0-9]+([\.][0-9]+)?');
        input.setAttribute('style', 'min-width: 6.33333ch; max-width: 6.33333ch; margin:0.125rem');
        input.setAttribute('enterkeyhint', 'enter');
        input.setAttribute('tabindex', '0');
        input.setAttribute('name', `b_${i}`);
        input.setAttribute('required', '');
        vmn.appendChild(input);
        vmtd.appendChild(vmn);
        vmtr.appendChild(vmtd);
        vector.appendChild(vmtr);
    }

    init_xvector(rows);
}

const init_xvector = (rows) => {
    let vector = document.getElementById("xvector");

    for(let i = 0; i < rows; i++){
        let mtr = document.createElement('tr');
        let mtd = document.createElement('td');
        let msub = document.createElement('msub');
        let mi = document.createElement('mi');
        let mn = document.createElement('mn');
        const textNode = document.createTextNode('x');
        const numberNode = document.createTextNode((i+1).toString());
        mn.appendChild(numberNode);
        mi.appendChild(textNode);
        msub.appendChild(mi);
        msub.appendChild(mn);
        mtd.appendChild(msub);
        mtr.appendChild(mtd);
        vector.appendChild(mtr);
    }
}