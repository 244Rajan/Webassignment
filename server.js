/********************************************************************************
*  WEB322 – Assignment 03
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
*  Name: ______________________ Student ID: ______________ Date: ______________
*
*  Published URL: ___________________________________________________________
*
********************************************************************************/

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Add the static middleware
app.use(express.static('public'));

// Route for home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

// Route for about page
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

// Route for Lego sets
app.get('/lego/sets', (req, res) => {
    const theme = req.query.theme;
    if (theme) {
        // Filter Lego sets by theme
        // Assume legoSets is an array of Lego set objects
        const filteredSets = legoSets.filter(set => set.theme === theme);
        res.json(filteredSets);
    } else {
        // Return all Lego sets
        res.json(legoSets);
    }
});

// Route for a specific Lego set
app.get('/lego/sets/:set_num', (req, res) => {
    const setNum = req.params.set_num;
    const legoSet = legoSets.find(set => set.set_num === setNum);
    if (legoSet) {
        res.json(legoSet);
    } else {
        res.status(404).send('Lego set not found');
    }
});

// Custom 404 page
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Example Lego sets data
const legoSets = [
    { set_num: '001-1', name: 'Lego Set 1', theme: 'someTheme1', img_url: '/lego_images/lego_set_image1.jpg' },
    { set_num: '002-1', name: 'Lego Set 2', theme: 'someTheme2', img_url: '/lego_images/lego_set_image2.jpg' },
    { set_num: '003-1', name: 'Lego Set 3', theme: 'someTheme3', img_url: '/lego_images/lego_set_image3.jpg' },
];
