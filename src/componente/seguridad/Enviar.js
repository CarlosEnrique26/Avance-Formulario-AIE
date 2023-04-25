import React, { useState } from 'react';
import style from '../Tool/Style';
import { Avatar, Button, Container, Typography, Grid, Box, ListItemText, List } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { useHistory } from 'react-router-dom';


const Enviar = () => {

    const [usuario, setUsuario] = useState({
        JuanManuel : 'Socio: 5461',
        Votosi : '45',
        Votose : '70',
        Votodelegado : '180'
        });

    //Navegacion entre paginas//

    const history = useHistory();
    const Siguiente = () => history.push('/auth/botonesradio');
    const Atras = () => history.push('/auth/votodelegado');

    //Enviar resultados//

    const BotonEnviar = e => {
        e.preventDefault();
        console.log("Los resultados de la votacion son: ", usuario);
    }

    return (
        <Container component="main" maxWidth="md" justify="center">
        <div style={style.paper}>
            <form style={style.form}>
                <Box border={1} borderRadius={5}>
                    <Grid container spacing={5}>
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
                            <Box width="45%" margin="auto">
                                <Typography component="h1" variant="h6">
                                    CANDAIJE23 (Presidente Luis Cobos)
                                </Typography>
                                <Typography component="h1" variant="h6">
                                    CANDAIJE 2023 (Presidente Juan Moroto)
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box width="25%" margin="auto">
                                <Typography component="h1" variant="h5">
                                    <List>
                                        <ListItemText primary="Juan Manuel - Socio: 5461" />
                                        <ListItemText primary="Votos i : 45" />
                                        <ListItemText primary="Votos e : 70" />
                                        <ListItemText primary="Voto delegado : 180" />                                   
                                    </List>
                                </Typography>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={12} md={12}>
                            <Box width="20%" margin="auto">
                                <Button onClick={BotonEnviar} type="submit" variant="contained" color="primary" style={style.form} >
                                    Enviar Voto
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12}></Grid>
                        
                        <Grid item xs={12} md={1}></Grid>
                        <Grid item xs={12} md={5}>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="CANDIDATO PRESIDENTE: LUIS COBOS PAVON (Luis Cobos)" />
                                    </List>
                                </Typography>
                            </Box>
                            <Typography component="h1" variant="h5">
                                    <List>
                                        <ListItemText primary="CANDIDATOS CONSEJEROS POR LA MODALIDAD DE INTERPRETES" />
                                    </List>
                            </Typography>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="LUZ CASAL PAZ (Luz)" />
                                        <ListItemText primary="NACHO GARCIA VEGA (Nacho Paz)" />
                                        <ListItemText primary="MARIA RODRIGUEZ DEL ALAMO (Maria Toledo)" />
                                        <ListItemText primary="CARLOS JAVIER CRESPO GOÑI (Revolver)" />
                                        <ListItemText primary="ANA Mº ALIAS VEGA (Pasion Vega)" />
                                        <ListItemText primary="BLAS CANTO MORENO (Blas Canto)"/>
                                        <ListItemText primary="GERARDO NUÑEZ DIAS" />
                                        <ListItemText primary="ALBA CARMONA GARCIA (Las Migas)" />
                                        <ListItemText primary="JUAN LUIS CALCETEIRO RUIZ (Canntores de Hispalis)" />
                                        <ListItemText primary="MONSERRAT PRATDESABA RIBAS (Big Mama)" />
                                        <ListItemText primary="JAVIER CAMPILLO REINO (Tam Tam Go)" />
                                    </List>
                                </Typography>
                            </Box>
                            <Typography component="h1" variant="h5">
                                    <List>
                                        <ListItemText primary="CANDIDATOS POR LA MODALIDAD DE EJECUTANTES" />
                                    </List>
                            </Typography>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="LUIS MENDO MUÑOZ (Suburbano)" />
                                        <ListItemText primary="JAVIER CUBEDO ALICART" />
                                        <ListItemText primary="MONICA RAMOS PALOMO (Monica Moss)" />
                                        <ListItemText primary="JOSE SANCHEZ LLANES (Pepe Sanchez)" />
                                        <ListItemText primary="LAURA SIMO FABREGAT (Laura Simo)" />
                                        <ListItemText primary="ANTONI MAS I BOU"/>
                                        <ListItemText primary="JOSE LUIS NIETO GARCIA" />
                                        <ListItemText primary="SALVADOR BARBERA JUANES" />
                                    </List>
                                </Typography>
                            </Box>
                            <Typography component="h1" variant="h5">
                                    <List>
                                        <ListItemText primary="CANDIDATOS SUPLENTES:" />
                                    </List>
                            </Typography>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="(INTERPRETES)" />
                                        <ListItemText primary="MONSERRAT TERUEL MIR(Mone)" />
                                        <ListItemText primary="XACOBE MARTINEZ ANTELO" />
                                        <ListItemText primary="ENRIQUE PERDOMO CASTRO (Kike Perdomo)" />
                                        <ListItemText primary="(EJECUTANTES)" />
                                        <ListItemText primary="DAVID JUAN MORALES MONTANES" />
                                        <ListItemText primary="CLAUDIO MIGUEL IANNI" />
                                    </List>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="CANDIDATO PRESIDENTE: LUIS COBOS PAVON (Luis Cobos)" />
                                    </List>
                                </Typography>
                            </Box>
                            <Typography component="h1" variant="h5">
                                    <List>
                                        <ListItemText primary="CANDIDATOS CONSEJEROS POR LA MODALIDAD DE INTERPRETES" />
                                    </List>
                            </Typography>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="LUZ CASAL PAZ (Luz)" />
                                        <ListItemText primary="NACHO GARCIA VEGA (Nacho Paz)" />
                                        <ListItemText primary="MARIA RODRIGUEZ DEL ALAMO (Maria Toledo)" />
                                        <ListItemText primary="CARLOS JAVIER CRESPO GOÑI (Revolver)" />
                                        <ListItemText primary="ANA Mº ALIAS VEGA (Pasion Vega)" />
                                        <ListItemText primary="BLAS CANTO MORENO (Blas Canto)"/>
                                        <ListItemText primary="GERARDO NUÑEZ DIAS" />
                                        <ListItemText primary="ALBA CARMONA GARCIA (Las Migas)" />
                                        <ListItemText primary="JUAN LUIS CALCETEIRO RUIZ (Canntores de Hispalis)" />
                                        <ListItemText primary="MONSERRAT PRATDESABA RIBAS (Big Mama)" />
                                        <ListItemText primary="JAVIER CAMPILLO REINO (Tam Tam Go)" />
                                    </List>
                                </Typography>
                            </Box>
                            <Typography component="h1" variant="h5">
                                <List>
                                    <ListItemText primary="CANDIDATOS POR LA MODALIDAD DE EJECUTANTES" />
                                </List>
                            </Typography>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="LUIS MENDO MUÑOZ (Suburbano)" />
                                        <ListItemText primary="JAVIER CUBEDO ALICART" />
                                        <ListItemText primary="MONICA RAMOS PALOMO (Monica Moss)" />
                                        <ListItemText primary="JOSE SANCHEZ LLANES (Pepe Sanchez)" />
                                        <ListItemText primary="LAURA SIMO FABREGAT (Laura Simo)" />
                                        <ListItemText primary="ANTONI MAS I BOU"/>
                                        <ListItemText primary="JOSE LUIS NIETO GARCIA" />
                                        <ListItemText primary="SALVADOR BARBERA JUANES" />
                                    </List>
                                </Typography>
                            </Box>
                            <Typography component="h1" variant="h5">
                                <List>
                                    <ListItemText primary="CANDIDATOS SUPLENTES:" />
                                </List>
                            </Typography>
                            <Box border={1}>
                                <Typography component="h5"  variant="h5">
                                    <List>
                                        <ListItemText primary="(INTERPRETES)" />
                                        <ListItemText primary="MONSERRAT TERUEL MIR(Mone)" />
                                        <ListItemText primary="XACOBE MARTINEZ ANTELO" />
                                        <ListItemText primary="ENRIQUE PERDOMO CASTRO (Kike Perdomo)" />
                                        <ListItemText primary="(EJECUTANTES)" />
                                        <ListItemText primary="DAVID JUAN MORALES MONTANES" />
                                        <ListItemText primary="CLAUDIO MIGUEL IANNI" />
                                    </List>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={1}></Grid>

                        <Grid item xs={12} md={12}></Grid>
                        <Grid item xs={12} md={6}>
                            <Box width="20%" margin="auto">
                                <Button onClick={Atras} type="submit" variant="contained" color="primary" style={style.form} >
                                    Atras
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box width="20%" margin="auto">
                                <Button onClick={Siguiente} type="submit" variant="contained" color="primary" style={style.form} >
                                    Siguiente
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

export default Enviar; 
