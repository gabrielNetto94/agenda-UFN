import React, { useState, useEffect } from 'react';
import api from './api';

function App(props) {

    const [cpf, setCpf] = useState('');
    const [password, setPass] = useState('');

    const [nomeAluno, setNomeAluno] = useState('');
    const [matricula, setMatricula] = useState('');
    const [disciplina, setDisciplina] = useState('');
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');

    //const [scoreTable, setScoreTable] = useState({disciplina:'Nome disciplina',nota1:'9.4'});
    const [scoreTable, setScoreTable] = useState([]);

    async function handleLogin(event) {
        event.preventDefault(); // previnir ação padrao do HTML que é enviar o usuário para outra página

        const response = await api.post('/agenda', {
            cpf,
            password
        });

        setNomeAluno(response.data.aluno);
        setMatricula(response.data.matricula);
        setDisciplina(response.data.scoreTable[0].disciplina);
        setNota1(response.data.scoreTable[0].nota1);
        setNota2(response.data.scoreTable[0].nota2);
        setNota3(response.data.scoreTable[0].nota3);
        console.log(response.data);

    }

    useEffect(() => { //executar uma função quando a página for carregada
        var teste = ['9.8', '8.8', '4,4', '12312'];
        setScoreTable(teste);
    }, []);


    return (
        <>
            <form onSubmit={handleLogin}>
                <label>CPF:</label>
                <input
                    placeholder="Digite seu CPF"
                    type="number"
                    name="cpf"
                    required
                    onChange={event => setCpf(event.target.value)}
                />
                <br />
                <label>Senha:</label>
                <input
                    placeholder="Senha do Agenda UFN"
                    type="password"
                    name="password"
                    required
                    onChange={event => setPass(event.target.value)}
                />
                <br />
                <button >Buscar informações</button>
            </form>

            {scoreTable.map(n => (
                <h4 key={Math.random()}>{n}</h4>
            ))}
        </>
    );
}

/*
<table>
                <thead>
                    <tr>
                        <th>Nome Aluno(a):</th>
                        <th>Matrícula</th>
                        <th>Disciplina</th>
                        <th>Nota 1</th>
                        <th>Nota 2</th>
                        <th>Nota 3</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{nomeAluno}</td>
                        <td>{matricula}</td>
                        <td>{disciplina}</td>
                        <td>{nota1}</td>
                        <td>{nota2}</td>
                        <td>{nota3}</td>
                    </tr>
                </tbody>
            </table>
*/


export default App;
