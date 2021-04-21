# Prueba telefonica

La API fue desarrollada en Nodejs y utiliza `jest` para ejecutar las pruebas unitarias, las cuales se ejecutan cada vez que se sube un cambio a este repositorio [mediante CD](https://github.com/adwher/telefonica-testing/actions) de `GitHub Actions` y no despliega los cambios a menos que todas las pruebas fueran completadas satisfactoriamente.

## Sucesión de fibonacci

Se puede acceder a la ruta [`https://telefonica-testing.herokuapp.com/fibo/{number}`](https://telefonica-testing.herokuapp.com/fibo/12) donde `number` es la longitud de número de la sucesión quieres ver.

## Ecuación cuadratica

Se puede acceder a la ruta [`https://telefonica-testing.herokuapp.com/quadratic?a={a}&b={b}&c={c}`](https://telefonica-testing.herokuapp.com/quadratic?a=2&b=7&c=2) donde `a`, `b` y `c` son los parametros para obtener los dos posibles resultados tanto `x1` como `x2`.
