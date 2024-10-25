import { forEver } from '../Src/Cortes-liston/main.ts';

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(() => {
    document.getElementById('generarGrafico').addEventListener('click', drawChart);
    console.log('Event listener added');
});

function drawChart() {
    console.log('drawChart function called');
    const cortesInput = document.getElementById('cortesInput').value;
    console.log('Cortes input:', cortesInput);
    const cortes = cortesInput.split(' ').map(Number);
    console.log('Cortes array:', cortes);

    // Simular la respuesta de la API
    const mejorSolucion = cortes.map((corte, index) => ({ cortes: corte }));

    const dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Listón');
    dataTable.addColumn('number', 'Cortes');
    dataTable.addColumn({ type: 'string', role: 'annotation' });

    mejorSolucion.forEach((item, index) => {
        dataTable.addRow([`Listón ${index + 1}`, item.cortes, '']);
    });

    const options = {
        width: 600,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '30%' },
        isStacked: true,
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('graficoCortes'));
    chart.draw(dataTable, options);
    console.log('Chart drawn');
}
