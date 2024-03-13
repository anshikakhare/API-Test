async function fetchData() {
    try {
      const response = await fetch('http://localhost:3000/data');
      const data = await response.json();
  
      const dataContainer = document.getElementById('dataContainer');
      dataContainer.innerHTML = '';
  
      const table = document.createElement('table');
      table.classList.add('data-table');
  
      const headerRow = document.createElement('tr');
      const headers = ['Unique ID', 'Name', 'Manufacture Date', 'Type'];

      headers.forEach(headerText => {
        const headerCell =document.createElement('th');
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
      });
      table.appendChild(headerRow);

      data.forEach(item => {
        const row = document.createElement('tr');

        Object.values(item).forEach(value => {
          const cell = document.createElement('td');
          cell.textContent = value;
          row.appendChild(cell);
        });

        table.appendChild(row);
      });
      dataContainer.appendChild(table);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  window.onload = fetchData;
  
async function updateManufactureDate() {
    try {
      const id = document.getElementById('idInput').value;
      const date = document.getElementById('dateInput').value;
  
      const response = await fetch(`http://localhost:3000/data/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ date })
      });
      const responseData = await response.json();
      console.log(responseData); 

      fetchData();
    } catch (error) {
      console.error('Error updating Manufacture Date:', error);
    }
  }
  
  