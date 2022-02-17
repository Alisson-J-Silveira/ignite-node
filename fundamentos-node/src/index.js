const { request } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

/**
 * GET - Buscar uma informação dentro do servidor
 * POST - Inerir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação específica
 * DELETE - Deletar uma informação no servidor 
 */

/**
 * Tipos de parâmetros
 * 
 * Router Params => Parâmetros que aconpanham a URL. Identificam um recurso editar/deletar/buscar
 * Query Params => Paginação / Filtro
 * Body Params => Os objetos inserção/alteração (JSON)
 * 
 */

app.get('/courses', (request, response) => {
    const query = request.query;
    //console.log(query);
    return response.json(query);

    //return response.json(['Curso 1 ', 'Curso 2', 'curso 3']);
});

app.post('/courses', (request, response) => {
    const objBody = request.body;
    return response.json(objBody);

    //return response.json(['Curso 1 ', 'Curso 2', 'curso 3', 'Curso 4']);
});

app.put('/courses/:id', (request, response) => {
    const { id } = request.params;
    console.log(id);

    return response.json(['Curso 6 ', 'Curso 2', 'curso 3', 'Curso 4']);
});

app.patch('/courses/:id', (request, response) => {
    return response.json(['Curso 6', 'Curso 2', 'Curso 7', 'Curso 4']);
});

app.delete("/courses/:id", (request, response) => {
    return response.json(['Curso 6', 'Curso 2', 'Curso 4']);
})

app.listen(3333); 