export const asyncErrorHandler = (func) => {
  /*
    Devuelve una funcion anonima, la cual internamente
    llama a la funcion que se le pasa por parametro.
    Por que asi? Porque en "controllers", el use debe llamar a un middleware, y si llamamos a 
    asyncErrorHandler(async(req, res, next)=>{funcion detallada}) asyncErrorHandler ejecutará func automaticamente, 
    en cambio al embolverla en una funcion la embolvente pasa a ser el ultimo middleware de la cadena! 
  */
  return (req, res, next) => {
    func(req, res, next)
      .catch(err => next(err));
  }
}