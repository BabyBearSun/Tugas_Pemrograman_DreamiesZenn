document.addEventListener('DOMContentLoaded', () => {

    const quoteElement = document.querySelector('.quote');
    if (quoteElement) {
        const text = quoteElement.innerText;
        quoteElement.innerText = ''; 
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                quoteElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            }
        }
        typeWriter();
    }

    const tableRows = document.querySelectorAll('tr');
    tableRows.forEach((row, index) => {
        if (index === 0) return;
        row.addEventListener('click', () => {
            const name = row.cells[1].innerText;
            alert("Kamu baru saja memilih: " + name + "! 💚 NCT DREAM Forever!");
        });
        row.style.cursor = 'pointer';

        row.addEventListener('mouseenter', () => {
            row.style.fontSize = "1.1rem";
            row.style.transition = "0.2s";
            row.style.color = "#00838f";
        });
        row.addEventListener('mouseleave', () => {
            row.style.fontSize = "1rem";
            row.style.color = "#2c3e50";
        });
    });

    const foto = document.querySelector('.foto');
    if (foto) {
        foto.addEventListener('mouseover', () => {
            foto.style.filter = "brightness(1.1) contrast(1.1)";
        });
        foto.addEventListener('mouseout', () => {
            foto.style.filter = "brightness(1)";
        });
    }

    const tableHeader = document.querySelector('th');
    if (tableHeader) {
        tableHeader.addEventListener('click', () => {
            tableHeader.parentElement.style.backgroundColor = "#d3ee44"; 
            tableHeader.style.color = "#333"; 
            alert("Neo Pearl Champagne activated! 💚");
        });
    }

}); 