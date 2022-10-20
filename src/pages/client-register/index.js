import React, {useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import api from '../../services/api';

import './styles.css';

export default function ClientRegister(){

    const [name, setName] = useState('');
    const [organizacao_id, setOrgId] = useState('');
    const [departamento_id, setDepId] = useState('');
    const [email, setEmail] = useState('');
    const [registerDate, setRegisterDate] = useState('');
    const [password, setPassword] = useState('');
    const [profileId, setProfileId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            departamento_id,
            organizacao_id,
            profileId,                        
            name,
            email,
            password,
            registerDate
        }

        try {
            //console.log(typeof(data))
            await api.post('/api/usuarios/CriarUsuario', 
            {
                departamento_id: data.departamento_id,
                organizacao_id: data.organizacao_id,
                profileId: data.profileId,                        
                name: data.name,
                email: data.email,
                password: data.password,
                registerDate: data.registerDate
            });
            //await api.post('/api/usuarios/CriarUsuario', data);
            alert('Cliente registrado.')
        }            
        catch (err) {
            console.log(err)
            alert('Erro ao registrar cliente.')
        }
    };

    return (
        <div className="new-cliente-container">
            <div className="content">
                <section className="form">
                    <h1> Cadastro de Usuário </h1>                    
                </section>

                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="ID Departamento"
                        value={departamento_id}
                        onChange={e => setDepId(e.target.value)}
                    />
                    <input 
                        placeholder="ID Organização"
                        value={organizacao_id}
                        onChange={e => setOrgId(e.target.value)}
                    />
                    &nbsp;                    
                    <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="profile-select">Perfil</InputLabel>
                        <Select
                        labelId="profile-select"
                        id="simple-select"
                        value={profileId}
                        label="Cargo"
                        onChange={e => setProfileId(e.target.value)}
                        >
                        <MenuItem value={1}>Administrador</MenuItem>
                        <MenuItem value={2}>Técnico</MenuItem>
                        <MenuItem value={3}>Cliente</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>                                                           
                    <input 
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        placeholder="E-mail"
                        
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />                           
                    <input 
                        placeholder="Data de cadastro"
                        value={registerDate}
                        onChange={e => setRegisterDate(e.target.value)}
                    />
                    <button className="button" type="submit"> Cadastrar </button>
                    <button className="button"> Cancelar </button>
                </form>
            </div>
        </div>
    );
}
