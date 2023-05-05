import React, { useState, useRef } from 'react';
import style from '../Tool/Style';
import { Container, TextField, Typography, Grid, Box, Button } from '@material-ui/core';
import JoditEditor from "jodit-react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';


const Juego = () => {

    const [data, setData] = useState('');
    const [usuario, setUsuario] = useState({
        titulo: '',
        logo: '',
        video: ''
    });
    
    //Funcion para editor 

    const editor = useRef(null)
	const [content, setContent] = useState('')
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}

    //Funcion para titulo y logo

    const [error, setError] = useState('0');
    
    const ValidateEditor = e => {
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
            setError(1);
        } else if (!minValue) {
            setError(2);
        } else {
            setError(3);
        }

        if (onliLet === true && minValue && maxValue) {
            setError(0);
        }
        setUsuario(value);
    };

    //Funcion para selectores
    
    const [age, setAge] = React.useState('');
        console.log({age})
    const handleChangeSelect = (event) => {
        setAge(event.target.value)
    };

    //Funcion para botones de radio

    const [selectedValue, setSelectedValue] = React.useState('a');
        console.log({selectedValue})
    const handleChangeRadio = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleSubmit = (event) => {
        setData(event.target.value);
    };

    return (
        <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
                <form style={style.form}>
                    <Box border={1} borderRadius={5}>
                        <Typography component="h1" variant="h6">
                                    Juego cerrado
                        </Typography>
                        <JoditEditor
            	            ref={editor}
                            value={content}
                            config={config}
		                    tabIndex={1} // tabIndex of textarea
		                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => {}}
                        />
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
                        <JoditEditor
            	            ref={editor}
                            value={content}
                            config={config}
		                    tabIndex={1} // tabIndex of textarea
		                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => {}}
                        />
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
                        <JoditEditor
            	            ref={editor}
                            value={content}
                            config={config}
		                    tabIndex={1} // tabIndex of textarea
		                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => {}}
                        />
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
                        <JoditEditor
            	            ref={editor}
                            value={content}
                            config={config}
		                    tabIndex={1} // tabIndex of textarea
		                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => {}}
                        />
                    </Box>
                    <div>
                        {data}
                    </div>
                </form>
                <form style={style.form}>
                    <Box border={1} borderRadius={5} component="form" onSubmit={handleSubmit}>
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
                                    //label="Titulo"
                                    name="titulo"
                                    type="text"
                                    variant="outlined"
                                    fullWidth 
                                    required
                                    error={error.error}
                                    helperText={error.message}
                                    value={usuario.titulo}
                                    onChange={ValidateEditor}
                                    />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                        id="logo"
                                        name="logo"
                                        type="URL"
                                        variant="outlined"
                                        fullWidth 
                                        required
                                        error={error.error}
                                        helperText={error.message}
                                        value={usuario.titulo}
                                        onChange={ValidateEditor} // setUsuario//
                                        />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        config={config}
                                        tabIndex={1} // tabIndex of textarea
                                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                        onChange={newContent => {}}
                                    />
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
                                        id="video"
                                        name="video"
                                        type="URL"
                                        variant="outlined"
                                        fullWidth 
                                        required
                                        error={error.error}
                                        helperText={error.message}
                                        value={usuario.titulo}
                                        onChange={ValidateEditor}
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
                                <MenuItem value='10'>Ten</MenuItem>
                                <MenuItem value='20'>Twenty</MenuItem>
                                <MenuItem value='30'>Thirty</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Select
                                    id="demo"
                                    value={age}
                                    onChange={handleChangeSelect}
                                    fullWidth
                                    >
                                <MenuItem value='10'>Ten</MenuItem>
                                <MenuItem value='20'>Twenty</MenuItem>
                                <MenuItem value='30'>Thirty</MenuItem>
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
                                    Codigo
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
                                    Codigo y Login
                                </Typography>
                                <Radio
                                checked={selectedValue === 'Codigo  y Login'}
                                onChange={handleChangeRadio}
                                value="Codigo  y Login"
                                name="Codigo  y Login"
                                inputProps={{ 'aria-label': 'Codigo  y Login' }}
                                label="Codigo  y Login"
                                />
                            </Grid>
                        </Grid>
                        
                        <Grid item xs={12} sm={12}></Grid>
                        <Grid item xs={12} md={12}>
                            <Box width="20%" margin="auto">
                                <Button type="submit" variant="contained" color="primary" style={style.form} >
                                    Registrar
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}></Grid>
                        <Grid item xs={12} sm={12}></Grid>
                    </Box>
                </form>
            </div>
    </Container>
    );
};

export default Juego; 

//Navegacion entre paginas//

/*const history = useHistory();
const Siguiente = () => history.push('/auth/acceso');
const Atras = () => history.push('/auth/imprimevoto');*/

//titulo y logo //
 /*const [usuario, setUsuario] = useState({
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


     //onSubmit={handleSubmit}// 


const [age, setAge] = React.useState('');
    const Suppliers = ['Ten', 'Twenty', 'Thirty'];

    const handleChangeSelect = (event) => {
    setAge(event.target.value);
        console.log(age);
    };    
    

    /*id="demo"
                                    value={age}
                                    onChange={handleChangeSelect}
                                    fullWidth
                                    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    
    */
    
