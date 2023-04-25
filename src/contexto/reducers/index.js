import sesionUsuarioReducer from "./sesionUsuarioReducer";
import openSnackbarReducer from "./openSnackbarReducer";


export const mainReducer = ({sesionUsuario}, action) => {
    return {
        sesionUsuario : sesionUsuarioReducer(sesionUsuario, action),
    }
}