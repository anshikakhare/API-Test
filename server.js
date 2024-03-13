const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

let data = [
    {
        id: "1",
        Name:
          "Turboject1",
          ManufactureDate: "01/21/1997",
          Type: "Gas"
      },
      {
          id: "2",
          Name:
            "Ramjet1",
            ManufactureDate: "07/06/2000",
            Type: "Air Breathing"
        },
        {
          id: "3",
          Name:
            "Scramjet1",
            ManufactureDate: "11/05/2001",
            Type: "Hydrogen"
        },
        {
          id: "4",
          Name:
            "Turboprop1",
            ManufactureDate: "06/19/2013",
            Type: "Gas"
        },
        {
          id: "5",
          Name:
            "Turbofan1",
            ManufactureDate: "05/13/2005",
            Type: "Gas"
        },
        {
          id: "6",
          Name:
            "Scramjet2",
            ManufactureDate: "08/13/1981",
            Type: "Hydrogen"
        },
        {
          id: "7",
          Name:
            "Turbofan2",
            ManufactureDate: "04/07/2019",
            Type: "Gas"
        },
        {
          id: "8",
          Name:
            "Turbojet2",
            ManufactureDate: "10/21/2020",
            Type: "Gas"
        },
        {
          id: "9",
          Name:
            "Turbojet3",
            ManufactureDate: "06/11/2015",
            Type: "Gas"
        },
        {
          id: "10",
          Name:
            "Scramjet3",
            ManufactureDate: "01/23/1973",
            Type: "Hydrogen"
        }
];

app.use(bodyParser.json());
app.use(cors());

app.get('/data', (req, res) => {
  res.json(data);
});

app.put('/data/:id', (req, res) => {
    const itemId = req.params.id;
    const newManufactureDate = req.body.date; 
  
    const itemToUpdate = data.find(item => item.id === itemId);
  
    if (itemToUpdate) {
      itemToUpdate.ManufactureDate = newManufactureDate;
      res.json({ message: 'Manufacture Date updated successfully', data: itemToUpdate });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});