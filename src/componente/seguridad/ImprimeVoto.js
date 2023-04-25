import React, { useState } from 'react';
import style from '../Tool/Style';
import { Avatar, Button, Container, Typography, Grid, Box, ListItemText, List } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';


    const ImprimeVoto = () => {

    const [usuario, setUsuario] = useState({
        PedroMiguel : '',
        MaríaBernar : '',
        EstebanRuiz : ''
        });

    //Navegacion entre paginas//
    
    const history = useHistory();
    const Siguiente = () => history.push('/auth/juego');
    const Atras = () => history.push('/auth/botonesradio');

    // Botones de Radio //

    const [selectedValue, setSelectedValue] = React.useState('a');
    
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        console.log(selectedValue)
        };

    // Tabla //
    
        const useStyles = makeStyles({
            table: {
            minWidth: 650,
            },
        });
        
        function createData(name, PresidenteLuis, PresidenteJuan, VotoBlanco) {
            return { name, PresidenteLuis, PresidenteJuan, VotoBlanco};
        }
        
        const rows = [
            createData('Pedro Miguel–Socio: 5546')
        ];
        
        const rows1 = [
            createData('Esteban Ruiz–Socio: 346')
        ];
        
        const rows2 = [
            createData('María Bernar–Socio: 798465')
        ];//, 'Esteban Ruiz–Socio: 346', 'María Bernar–Socio: 798465'//

    
        const classes = useStyles();

        // Alert //

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Desea imprimir su votacion ?',
            text: "Presione confirmar si esta deacuerdo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Confirmado!',
                'Su voto sera impreso.',
                'success'
            )
            } else if (
            
            result.dismiss === Swal.DismissReason.cancel
            ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'No se va imprimir su voto, pero lo puede ver en la web',
                'error'
            )
            }
        });

        // Enviar resultados //
        
        const BotonEnviar = e => {
            e.preventDefault();
            console.log("imprime los valores de memoria temporal de usuario", usuario);
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
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="right">CANDAIE23 (Presidente Luis Cobos)</TableCell>
                                    <TableCell align="right">CANDAIE23 (Presidente Juan Moroto)</TableCell>
                                    <TableCell align="right">VOTO BLANCO </TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.PedroMiguel}
                                    <Radio
                                        id="PresidenteLuis1"
                                        onChange={handleChange}
                                        checked={selectedValue === 'PresidenteLuis1'}
                                        value="PresidenteLuis1"
                                        name="PresidenteLuis1"
                                        inputProps={{ 'aria-label': 'PresidenteLuis1' }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">{row.PedroMiguel}
                                    <Radio
                                        id="PresidenteJuan2"
                                        onChange={handleChange}
                                        checked={selectedValue === 'PresidenteJuan2'}
                                        value="PresidenteJuan2"
                                        name="PresidenteJuan2"
                                        inputProps={{ 'aria-label': 'PresidenteJuan2' }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">{row.PedroMiguel}
                                    <Radio
                                        id="VotoBlanco3"
                                        onChange={handleChange}
                                        checked={selectedValue === 'VotoBlanco3'}
                                        value="VotoBlanco3"
                                        name="VotoBlanco3"
                                        inputProps={{ 'aria-label': 'VotoBlanco3' }}
                                        />
                                    </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                                <TableBody>
                                {rows1.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.EstebanRuiz}
                                    <Radio
                                        id="PresidenteLuis"
                                        onChange={handleChange}
                                        checked={selectedValue === 'PresidenteLuis4'}
                                        value="PresidenteLuis4"
                                        name="PresidenteLuis4"
                                        inputProps={{ 'aria-label': 'PresidenteLuis4' }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">{row.EstebanRuiz}
                                    <Radio
                                        id="PresidenteJuan5"
                                        onChange={handleChange}
                                        checked={selectedValue === 'PresidenteJuan5'}
                                        value="PresidenteJuan5"
                                        name="PresidenteJuan5"
                                        inputProps={{ 'aria-label': 'PresidenteJuan5' }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">{row.EstebanRuiz}
                                    <Radio
                                        id="VotoBlanco6"
                                        onChange={handleChange}
                                        checked={selectedValue === 'VotoBlanco6'}
                                        value="VotoBlanco6"
                                        name="VotoBlanco6"
                                        inputProps={{ 'aria-label': 'VotoBlanco6' }}
                                        />
                                    </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                                <TableBody>
                                {rows2.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.MaríaBernar}
                                    <Radio
                                        id="PresidenteLuis7"
                                        onChange={handleChange}
                                        checked={selectedValue === 'PresidenteLuis7'}
                                        value="PresidenteLuis7"
                                        name="PresidenteLuis7"
                                        inputProps={{ 'aria-label': 'PresidenteLuis7' }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">{row.MaríaBernar}
                                    <Radio
                                        id="PresidenteJuan8"
                                        onChange={handleChange}
                                        checked={selectedValue === 'PresidenteJuan8'}
                                        value="PresidenteJuan8"
                                        name="PresidenteJuan8"
                                        inputProps={{ 'aria-label': 'PresidenteJuan8' }}
                                        />
                                    </TableCell>
                                    <TableCell align="right">{row.MaríaBernar}
                                    <Radio
                                        id="VotoBlanco9"
                                        onChange={handleChange}
                                        checked={selectedValue === 'VotoBlanco9'}
                                        value="VotoBlanco9"
                                        name="VotoBlanco9"
                                        inputProps={{ 'aria-label': 'VotoBlanco9' }}
                                        />
                                    </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Box width="20%" margin="auto">
                                <Button onClick={()=>swalWithBootstrapButtons(BotonEnviar)} type="submit" variant="contained" color="primary" style={style.form} >
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

export default ImprimeVoto;  