const salesForm = document.getElementById('salesForm');
const monthInput = document.getElementById('month');
const salesInput = document.getElementById('sales');
const ctx = document.getElementById('salesChart').getContext('2d');

// Arrays para almacenar los datos de las ventas
let months = [];
let salesData = [];

//configurar la libreria Chart.js para generar las ventas por mes
const salesChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: months,
    datasets: [{
      label: 'Ventas por Mes',
      data: salesData,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// aca aplicamos una Funcion para agregar datos al grafico
salesForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const month = monthInput.value;
  const sales = parseInt(salesInput.value);
  
  // Agregar mes y ventas a los datos
  months.push(month);
  salesData.push(sales);
  
  // Actualizar grafico
  salesChart.update();
  
  // Limpiar el formulario formulario
  monthInput.value = '';
  salesInput.value = '';
});

