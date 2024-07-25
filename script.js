// script.js

function showDashboard(dashboardId) {
  const dashboards = document.querySelectorAll('.dashboard');
  dashboards.forEach(dashboard => {
      dashboard.classList.remove('active');
  });

  document.getElementById(dashboardId).classList.add('active');
}

// Initially show the Tempat Wisata dashboard
document.getElementById('tempat-wisata').classList.add('active');
