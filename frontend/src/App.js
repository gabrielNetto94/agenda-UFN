import React, { useState } from 'react';
import api from './api';
import './App.css';

function App() {

    const [cpf, setCpf] = useState('');
    const [password, setPass] = useState('');

    const [nomeAluno, setNomeAluno] = useState('');
    const [matricula, setMatricula] = useState('');
    const [disciplinas, setDisciplinas] = useState([]);
    const [nota1, setNota1] = useState([]);
    const [nota2, setNota2] = useState([]);
    const [nota3, setNota3] = useState([]);

    async function handleLogin(event) {

        event.preventDefault(); // previnir ação padrao do HTML que é enviar o usuário para outra página

        const response = await api.post('/agenda', {
            cpf,
            password
        });

        const { aluno, matricula, disciplinas, nota1, nota2, nota3 } = response.data;
        setNomeAluno(aluno);
        setMatricula(matricula);
        setDisciplinas(disciplinas);
        setNota1(nota1);
        setNota2(nota2);
        setNota3(nota3);

    }

    function dataTable() {
        return (
            <>

                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-md-auto">
                            <h5>Nome: {nomeAluno}  -  Matrícula: {matricula}</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Disciplina</th>
                                        <th>Nota 1</th>
                                        <th>Nota 2</th>
                                        <th>Nota 3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {disciplinas.map((d, index) => (
                                        <tr key={index}>{d}
                                            <td>{nota1[index]}</td>
                                            <td>{nota2[index]}</td>
                                            <td>{nota3[index]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </>
        );
    }

    function loginAgenda() {
        return (
            <>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <div className="card" style={{ width: '100%' }}>
                                <div className="card-body">

                                    <h5 className="card-title">Login Agenda UFN</h5>

                                    <form onSubmit={handleLogin}>
                                        <div className="input-group input-group-sm mb-3">
                                            <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Digite seu CPF" type="number" name="cpf" required onChange={event => setCpf(event.target.value)} />
                                        </div>

                                        <div className="input-group input-group-sm mb-3">
                                            <input className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Senha do Agenda UFN" type="password" name="password" required onChange={event => setPass(event.target.value)} /><br />
                                        </div>

                                        <button type="submit" className="btn btn-outline-primary">Buscar informações</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>

            {loginAgenda()}
            {dataTable()}

        </>
    );
}

export default App;