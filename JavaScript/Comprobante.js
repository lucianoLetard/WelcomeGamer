document.addEventListener('DOMContentLoaded', function() {
    const btnDescargar = document.getElementById('btnDescargar');
    btnDescargar.addEventListener('click', function() {
        // Simulamos la generación del contenido del PDF en el servidor
        const contenidoPDF = `
            Comprobante de compra finalizada:

            -Tu producto está en camino.

            Llega el Miércoles 24/07/24 entre las 10am y las 16hs.
        
            -TU NÚMERO DE COMPROBANTE ES: 000011228321291
        `;

        // Creamos un Blob con el contenido del PDF
        const blob = new Blob([contenidoPDF], { type: 'application/pdf' });

        // Creamos un objeto URL para el Blob
        const url = URL.createObjectURL(blob);

        // Creamos un enlace y lo hacemos clic automáticamente
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'comprobante.pdf';
        document.body.appendChild(a);
        a.click();

        // Liberamos el objeto URL
        URL.revokeObjectURL(url);
    });
});
