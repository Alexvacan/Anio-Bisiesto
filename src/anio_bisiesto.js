function EsAnioBisiesto(anio) {
    if (anio%400===0) 
        return true; 
    else return false;
}
export default EsAnioBisiesto;