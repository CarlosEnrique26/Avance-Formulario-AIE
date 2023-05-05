import React from "react";
import theme from "./theme/theme";
import { ThemeProvider as MuithemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from '@material-ui/core';
import Acceso from "./componente/seguridad/Acceso";
import VotoDelegado from "./componente/seguridad/VotoDelegado";
import Enviar from "./componente/seguridad/Enviar";
import BotonesRadio from "./componente/seguridad/BotonesRadio";
import ImprimeVoto from "./componente/seguridad/ImprimeVoto";
import Juego from "./componente/seguridad/Juego";
;

function App() {

return (
<React.Fragment>
      <Router>
      <MuithemeProvider theme={theme}>
        <Grid container>
            <Switch>
                <Route exact path="/" component={Acceso} />
                <Route exact path="/auth/acceso" component={Acceso} />
                <Route exact path="/auth/votodelegado" component={VotoDelegado} />
                <Route exact path="/auth/enviar" component={Enviar} />
                <Route exact path="/auth/botonesradio" component={BotonesRadio} />
                <Route exact path="/auth/imprimevoto" component={ImprimeVoto} />
                <Route exact path="/auth/juego" component={Juego} />
            </Switch>
        </Grid>
      </MuithemeProvider>
    </Router>
    </React.Fragment>
  );
}

export default App;

//<Acceso/>
//<VotoDelegado/>
//<Enviar/>
//<ImprimeVoto/>
//<BotonesRadio/>
/*<Route exact path="/" component={Acceso} />
                <Route exact path="/auth/acceso" component={Acceso} />
                <Route exact path="/auth/votodelegado" component={VotoDelegado} />
                <Route exact path="/auth/enviar" component={Enviar} />
                <Route exact path="/auth/botonesradio" component={BotonesRadio} />
                <Route exact path="/auth/imprimevoto" component={ImprimeVoto} /> */