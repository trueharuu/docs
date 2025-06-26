function table_of_contents() {
    let txt = '';
    txt += `<h2>Table of contents</h2>`
    const t = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    for (const el of t) {
        if (el.attributes.getNamedItem('no-tc')) {
            continue;
        }
        const ty = Number(el.nodeName.slice(1));
        const idt = '&emsp;&emsp;'.repeat(ty);
        // console.log(el.classList.toString());
        txt += `${idt}&ndash; <a href=#${el.id}>${el.innerHTML}</a><br>`
    }
    return txt;
}

document.getElementById('table-of-contents').innerHTML = table_of_contents();