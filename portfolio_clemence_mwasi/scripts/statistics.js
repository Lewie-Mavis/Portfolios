  // Pie Chart
  new Chart(document.getElementById("campaignSuccessPie"), {
    type: 'pie',
    data: {
      labels: ["Conversions", "Client Retention", "Engagement Boost"],
      datasets: [{
        backgroundColor: ["#D9BF77", "#855132", "#FAD6A5"],
        data: [30, 25, 45]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: false }
      }
    }
  });

  // Bar Chart
  new Chart(document.getElementById("brandImpactBar"), {
    type: 'bar',
    data: {
      labels: ["Olive Tree Media", "Maybelline", "Beehive Media", "Paddy Micro", "Sarova Hotels"],
      datasets: [{
        label: 'Client Success (%)',
        backgroundColor: "#6B4226",
        data: [30, 15, 40, 20, 20]
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, ticks: { color: "#855132" } },
        x: { ticks: { color: "#855132" } }
      },
      plugins: {
        legend: { display: false },
        title: { display: false }
      }
    }
  });