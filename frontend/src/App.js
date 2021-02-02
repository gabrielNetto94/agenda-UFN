import React, { useState } from 'react';
import api from './api';

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

        setNomeAluno(response.data.aluno);
        setMatricula(response.data.matricula);
        setDisciplinas(response.data.disciplinas);
        setNota1(response.data.nota1);
        setNota2(response.data.nota2);
        setNota3(response.data.nota3);

    }

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

            {/*     ALERTA DE GAMBIARRA!!!     */}
            <div class="container">
                
                <h5>Nome: {nomeAluno} - {matricula}</h5>

                <div class="row justify-content-start">

                    <div class="col-5">
                        <table>
                            <thead>
                                <tr>
                                    <th>Disciplina</th>
                                </tr>
                            </thead>
                            <tbody>
                                {disciplinas.map(d => (
                                    <tr key={Math.random}>{d}</tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div class="col-2">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nota 1</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nota1.map(d => (
                                    <tr key={Math.random}>{d}</tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div class="col-2">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nota 2</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nota2.map(d => (
                                    <tr key={Math.random}>{d}</tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div class="col-2">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nota 3</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nota3.map(d => (
                                    <tr key={Math.random}>{d}</tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    );
}
export default App;