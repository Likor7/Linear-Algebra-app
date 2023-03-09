const init = (rowsN, colsN) => {
    let tableA = document.getElementById("matrix-inputs-A");
    let tableB = document.getElementById("matrix-inputs-B");

    let rows = rowsN;
    let cols = colsN;

    for (let i = 0; i < rows; i++) {
        let mtr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let mtd = document.createElement('td');
            let mn = document.createElement('mn')
            let input = document.createElement('input');
            input.setAttribute('id', `a-${i}-${j}`);
            input.setAttribute('aria-label', `a ${i + 1} ${j + 1}`);
            input.setAttribute('type', 'text');
            input.setAttribute('role', 'textbox');
            input.setAttribute('placeholder', '0');
            input.setAttribute('pattern', '-?[0-9]+([\.,][0-9]+)?');
            input.setAttribute('style', 'min-width: 6.33333ch; max-width: 6.33333ch; margin:0.125rem');
            input.setAttribute('enterkeyhint', 'enter');
            input.setAttribute('tabindex', '0');
            input.setAttribute('name', `a_${i}_${j}`);
            input.setAttribute('required', '');
            mn.appendChild(input);
            mtd.appendChild(mn);
            mtr.appendChild(mtd);
        }
        tableA.appendChild(mtr);

        let clonedNode = mtr.cloneNode(true)
        let inputs = clonedNode.querySelectorAll('input');
        inputs.forEach(input_ => {
            let id = input_.getAttribute('id');
            let ariaLabel = input_.getAttribute('aria-label');
            let name = input_.getAttribute('name');

            id = 'b' + id.substr(1);
            ariaLabel = 'b' + ariaLabel.substr(1);
            name = 'b' + name.substr(1);

            input_.setAttribute('id', id);
            input_.setAttribute('aria-label', ariaLabel);
            input_.setAttribute('name', name);
        });

        tableB.appendChild(clonedNode);
    }
}

const init_matrix_A = (rowsA_, colsA_, data) => {
    let tableA = document.getElementById("matrix-inputs-A");

    let rowsA = rowsA_;
    let colsA = colsA_;
    for (let i = 0; i < rowsA; i++) {
        let mtr = document.createElement('tr');
        for (let j = 0; j < colsA; j++) {
            let mtd = document.createElement('td');
            let mn = document.createElement('mn');
            let input = document.createElement('input');
            input.setAttribute('id', `a-${i}-${j}`);
            input.setAttribute('aria-label', `a ${i + 1} ${j + 1}`);
            input.setAttribute('type', 'text');
            input.setAttribute('role', 'textbox');
            input.setAttribute('value', data[i][j]);
            input.setAttribute('pattern', '-?[0-9]+([\.][0-9]+)?');
            input.setAttribute('style', 'min-width: 6.33333ch; max-width: 6.33333ch; margin:0.125rem');
            input.setAttribute('enterkeyhint', 'enter');
            input.setAttribute('tabindex', '0');
            input.setAttribute('name', `a_${i}_${j}`);
            input.setAttribute('required', '');

            mn.appendChild(input);
            mtd.appendChild(mn);
            mtr.appendChild(mtd);
        }
        tableA.appendChild(mtr);
    }
}

const init_matrix_B = (rowsB_, colsB_, data) => {
    let tableA = document.getElementById("matrix-inputs-B");

    let rowsB = rowsB_;
    let colsB = colsB_;
    for (let i = 0; i < rowsB; i++) {
        let mtr = document.createElement('tr');
        for (let j = 0; j < colsB; j++) {
            let mtd = document.createElement('td');
            let mn = document.createElement('mn');
            let input = document.createElement('input');
            input.setAttribute('id', `b-${i}-${j}`);
            input.setAttribute('aria-label', `b ${i + 1} ${j + 1}`);
            input.setAttribute('type', 'text');
            input.setAttribute('role', 'textbox');
            input.setAttribute('value', data[i][j]);
            input.setAttribute('pattern', '-?[0-9]+([\.][0-9]+)?');
            input.setAttribute('style', 'min-width: 6.33333ch; max-width: 6.33333ch; margin:0.125rem');
            input.setAttribute('enterkeyhint', 'enter');
            input.setAttribute('tabindex', '0');
            input.setAttribute('name', `b_${i}_${j}`);
            input.setAttribute('required', '');

            mn.appendChild(input);
            mtd.appendChild(mn);
            mtr.appendChild(mtd);
        }
        tableA.appendChild(mtr);
    }
}