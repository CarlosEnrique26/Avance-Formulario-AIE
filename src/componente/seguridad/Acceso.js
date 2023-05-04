import React, { useState } from 'react';
import style from '../Tool/Style';
import { Avatar, Button, Container, TextField, Typography, Grid, Box } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { useHistory } from 'react-router-dom';



const Acceso = () => {

    const [usuario, setUsuario] = useState({
        password :''
        });

    //navegacion entre Paginas//

    const history = useHistory();
    const BotonSiguiente = () => history.push('/auth/votodelegado');

    //Validacion//

    const [ErrorPassword, setErrorPassword] = useState(0);
    
    const ValidatePassword = e => {
        const{name, value} = e.target;
        setUsuario( anterior => ({
            ...anterior,
            [name] : value
        }))
        console.log(value);
        const minValue=value.length>4;
        const maxValue=value.length<16;
        const onliLet=/^.{4,16}$/.test(value);

        console.log("min",minValue);
        console.log("maxValue",maxValue);
        console.log("onliLet",onliLet);

        if (onliLet === false) {
            setErrorPassword(1);
        } else if (!minValue) {
            setErrorPassword(2);
        } else {
            setErrorPassword(3);
        }

        if (onliLet === true && minValue && maxValue) {
            setErrorPassword(0);
        }
        setUsuario(value);
    }

    //Envio de resultados//

    const BotonAcceso = e => {
        e.preventDefault();
        console.log("Su usuario a sido registrado como: ", usuario);
    }
    
    return (
        <Container component="main" maxWidth="md" justify="center">
        <div style={style.paper}>
            <form style={style.form}>
                <Box border={1} borderRadius={5}>
                    <Grid container spacing={8}>
                        <Grid item xs={12} md={12}></Grid>
                        <Grid item xs={12} md={12}>
                            <Box width="38%" margin="auto">
                                <Typography component="h1" variant="h5" style={style.Typography}>
                                    Votacion AIE Asamblea General Extraordinaria Electoral
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box width="5%" margin="auto">
                                <Avatar style={style.avatar}>
                                    <LockIcon style={style.icon}/>
                                </Avatar>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box width="38%" margin="auto">
                                <Typography component="h1" variant="h6">
                                    CANDIDATURA ELECTORAL AIE PRESIDENTE Y DEMAS MIEMBROS DEL CONSEJO DE ADMINISTRACION
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box width="38%" margin="auto">
                                <Typography component="h1" variant="h5">
                                    Codigo de acceso a la votacion
                                </Typography>
                            </Box>
                        </Grid>
                       
                        <Grid item xs={12} md={3}></Grid>
                        <Grid item xs={12} md={6}>
                            <TextField 
                                id="codigo"
                                required
                                name="codigo"
                                error={ErrorPassword} 
                                value={usuario.password} 
                                onChange={ValidatePassword} 
                                variant="outlined" 
                                type="password" 
                                label="Ingrese su codigo de acceso" 
                                helperText="Ingrese un codigo de acceso valido"
                                fullWidth 
                                />
                        </Grid>
                        <Grid item xs={12} md={3}></Grid>
                        
                        <Grid item xs={12} md={12}>
                            <Box width="20%" margin="auto">
                                <Button onClick={BotonAcceso} type="submit" variant="contained" color="primary" style={style.form} >
                                    Enviar
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}></Grid>
                        <Grid item xs={12} md={12}>
                            <Box width="20%" margin="auto">
                                <Button onClick={BotonSiguiente} type="submit" variant="contained" color="primary" style={style.form} >
                                    Siguiente Pagina
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}></Grid>
                    </Grid>
                </Box>
            </form>
        </div>
    </Container>
    );
};

export default Acceso; 

