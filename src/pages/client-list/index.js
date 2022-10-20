import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function ClientList(){
    
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
      api.get("/api/usuarios/GetAllUsuarios")
         .then((response) => {
           //console.log(response);
           setUsuarios(response.data);
           
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro : " + err);
        });
    }, [usuarios]);    

    return (
        <div className="cliente-container">
            <header>
                <Link className="button" to="/client-register">Adicionar novo Usuário</Link>
            </header>

            <h1>Usuários Registrados:</h1>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>
                        <strong>ID:</strong>
                        <p>{usuario.id}</p>
                        <strong>ID Departamento:</strong>
                        <p>{usuario.departamento_id}</p>
                        <strong>ID Organização:</strong>
                        <p>{usuario.organizacao_id}</p>
                        <strong>ID Perfil:</strong>
                        <p>{usuario.perfil_id}</p>
                        <strong>Nome:</strong>
                        <p>{usuario.nome}</p>
                        <strong>Email:</strong>
                        <p>{usuario.email}</p>
                        <strong>Data de cadastro:</strong>
                        <p>{usuario.data_cadastro}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}