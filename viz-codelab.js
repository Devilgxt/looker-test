function drawViz(data) {
  let container = document.getElementById('container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);
  }
  container.innerHTML = `
    <div style="font-size: 18px; padding: 20px;">
      Hello, Fra viz world! 🚀<br>
      (${data.tables.DEFAULT.rows.length} rows received)
    </div>`;
}

// Looker Studio già fornisce dscc → niente import!
dscc.subscribeToData(drawViz, { transform: dscc.tableTransform });
