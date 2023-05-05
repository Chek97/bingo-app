export const validateCartonIdForm = (id, cartonList) => {
    
    const cartonExist = cartonList.find(carton => carton.id === +id);
    
    if(id <= 0 || id > 3000) return "El numero del carton debe estar entre 1 y 3000";
    
    if(cartonExist !== undefined) return "El numero del carton ya fue registrado";

    return "";
}

export const validateCartonValueForm = (value, id, positions) => {
    const bPostions = [0, 5, 10, 15, 20];
    const iPostions = [1, 6, 11, 16, 21];
    const nPostions = [2, 7, 17, 22];
    const gPostions = [3, 8, 13, 18, 23];
    const oPostions = [4, 9, 14,15, 24];
    const valueExist = positions.find(p => p[0] === value);
    
    if(value <= 0 || value > 75) return "El numero ingresado debe estar entre 1 y 75";

    if(bPostions.find(p => p === id) && (value > 15)) return "Solo puedes poner un numero entre 1 y 15 en esta casilla";

    if(iPostions.find(p => p === id) && (value < 16 || value > 30)) return "Solo puedes poner un numero entre 16 y 30 en esta casilla";
    
    if(nPostions.find(p => p === id) && (value < 31 || value > 45)) return "Solo puedes poner un numero entre 31 y 45 en esta casilla";
    
    if(gPostions.find(p => p === id) && (value < 46 || value > 60)) return "Solo puedes poner un numero entre 46 y 60 en esta casilla";
    
    if(oPostions.find(p => p === id) && (value < 61 || value > 75)) return "Solo puedes poner un numero entre 60 y 75 en esta casilla";


    if(valueExist !== undefined){
        return "Ya existe ese valor en esta columna";
    }
}