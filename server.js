const express = require('express');
const cors = require('cors');

const app = express()
app.get('/get-pokemon-by-name/:name', async(req, res) => {
    const {name} = req.params;
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.params['name']}`)
    if (!response.ok) {throw new Error ("Pokoemon not found")};
    const data = await response.json();
    res.json(data);
    } catch (error){
        res.status(404).json({error:error.message});
    }
});

app.listen(5000, () => console.log("Code Runs"))