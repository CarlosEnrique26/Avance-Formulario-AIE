import React, { useState } from 'react';
import style from '../Tool/Style';
import { Container, TextField, Typography, Grid, Box, Button } from '@material-ui/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import { useHistory } from 'react-router-dom';



const Juego = () => {

    const [data, setData]=useState('');

    //Navegacion entre paginas//

    const history = useHistory();
    const Siguiente = () => history.push('/auth/acceso');
    const Atras = () => history.push('/auth/imprimevoto');

    //Funcion para los editores de textos

    const handleChange =(e,editor)=>{
        setData(editor.getData());
    }
    //Funcion para titulo y logo
    
    const [usuario, setUsuario] = useState({
        titulo :'',
        logo :''
        });

    const [ErrorTitulo, setErrorTitulo] = useState(0);
    
    const ValidateTitulo = e => {
        const{name, value} = e.target;
        setUsuario( anterior => ({
            ...anterior,
            [name] : value
        }))
        console.log(value);
        const minValue=value.length>4;
        const maxValue=value.length<16;
        const onliLet=/^[a-zA-Z0-9\_\-]{4,16}$/.test(value);

        console.log("min",minValue);
        console.log("maxValue",maxValue);
        console.log("onliLet",onliLet);

        if (onliLet === false) {
            setErrorTitulo(1);
        } else if (!minValue) {
            setErrorTitulo(2);
        } else {
            setErrorTitulo(3);
        }

        if (onliLet === true && minValue && maxValue) {
            setErrorTitulo(0);
        }
        setUsuario(value);
    };


    //Funcion para selectores

    const [age, setAge] = React.useState('');
    const Suppliers = ['Ten', 'Twenty', 'Thirty'];

    const handleChangeSelect = (event) => {
    setAge(event.target.value);
        console.log(age);
    };

    //Funcion para botones de radio

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChangeRadio = (event) => {
        setSelectedValue(event.target.value);
        console.log(selectedValue)
    };

    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <form style={style.form}>
                    <Box border={1} borderRadius={5}>
                        <Typography component="h1" variant="h6">
                                    Juego cerrado
                        </Typography>
                        <CKEditor
                            editor={ClassicEditor}
                            onChange={(e,editor)=>{handleChange(e,editor)}}/>
                    </Box>
                    <div>
                        {data}
                    </div>
                </form>
                <form style={style.form}>
                    <Box border={1} borderRadius={5}>
                        <Typography component="h1" variant="h6">
                                    Juego iniciado
                        </Typography>
                        <CKEditor
                            editor={ClassicEditor}
                            onChange={(e,editor)=>{handleChange(e,editor)}}/>
                    </Box>
                    <div>
                        {data}
                    </div>
                </form>
                <form style={style.form}>
                    <Box border={1} borderRadius={5}>
                        <Typography component="h1" variant="h6">
                                    Juego en espera
                        </Typography>
                        <CKEditor
                            editor={ClassicEditor}
                            onChange={(e,editor)=>{handleChange(e,editor)}}/>
                    </Box>
                    <div>
                        {data}
                    </div>
                </form>
                <form style={style.form}>
                    <Box border={1} borderRadius={5}>
                        <Typography component="h1" variant="h6">
                                    Juego finalizado
                        </Typography>
                        <CKEditor
                            editor={ClassicEditor}
                            onChange={(e,editor)=>{handleChange(e,editor)}}/>
                    </Box>
                    <div>
                        {data}
                    </div>
                </form>
                <form style={style.form}>
                    <Box border={1} borderRadius={5}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                    Titulo
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                    Logo
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    id="titulo"
                                    required
                                    name="titulo"
                                    onChange={usuario.titulo}
                                    value={ValidateTitulo}
                                    variant="outlined" 
                                    error={ErrorTitulo}
                                    type="text" 
                                    label="Ingrese su titulo" 
                                    helperText="Ingrese un titulo valido"
                                    fullWidth 
                                    />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                        id="logo"
                                        required
                                        name="logo"
                                        onChange={usuario.logo}
                                        value={ValidateTitulo}
                                        variant="outlined" 
                                        error={ErrorTitulo}
                                        type="text" 
                                        label="Ingrese su Logo" 
                                        helperText="Ingrese un logo valido"
                                        fullWidth 
                                        />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <CKEditor
                                    editor={ClassicEditor}
                                    onChange={(e,editor)=>{handleChange(e,editor)}}/>
                                <div>
                                    {data}
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                    Campo para Logo
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                    Video
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <TextField 
                                        id="Titulo"
                                        required
                                        name="Titulo"
                                        variant="outlined" 
                                        type="text" 
                                        label="Ingrese su titulo" 
                                        helperText="Ingrese un titulo valido"
                                        fullWidth 
                                        />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                        Respuesta Correcta
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                        Respuesta Incorrecta
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Select
                                    id="demo"
                                    value={age}
                                    onChange={handleChangeSelect}
                                    fullWidth
                                    >
                                    <MenuItem value="10">Ten</MenuItem>
                                    <MenuItem value="20">Twenty</MenuItem>
                                    <MenuItem value="30">Thirty</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Select
                                    id="demo"
                                    value={age}
                                    onChange={handleChangeSelect}
                                    fullWidth
                                    >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <Typography component="h1" variant="h6">
                                        Tipo ingreso
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                    Codigo y Login
                                </Typography>
                                <Radio
                                checked={selectedValue === 'Codigo'}
                                onChange={handleChangeRadio}
                                value="Codigo"
                                name="Codigo"
                                inputProps={{ 'aria-label': 'Codigo' }}
                                label="Codigo"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography component="h1" variant="h6">
                                    Codigo 
                                </Typography>
                                <Radio
                                checked={selectedValue === 'Codigo y Login'}
                                onChange={handleChangeRadio}
                                value="Codigo y Login"
                                name="Codigo y Login"
                                inputProps={{ 'aria-label': 'Codigo y Login' }}
                                label="Codigo y Login"
                                />
                            </Grid>
                        </Grid>
                        
                        <Grid item xs={12} sm={12}></Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <Box width="20%" margin="auto">
                                <Button onClick={Atras} type="submit" variant="contained" color="primary" style={style.form} >
                                    Atras
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box width="20%" margin="auto">
                                <Button onClick={Siguiente} type="submit" variant="contained" color="primary" style={style.form} >
                                    Siguiente
                                </Button>
                            </Box>
                        </Grid>
                    
                        <Grid item xs={12} sm={12}></Grid>
                    </Box>
                </form>
            </div>
    </Container>
    );
};

export default Juego; 

