//Hacer un programa para ingresar el radio de un circulo y se reporte su área y la longitud de la circunferencia
//Usamos la funcion Math.pi
//Entrada radio(leer),pi,area(calcular),lon(calcular)
//Proceso area=pi *radio^2;
//        lon=2* pi *radio;
//Salida area,lon

const Leer= require('prompt-sync')()
const Escribir = console

class areaCir{
    areaCIRCULO(){
        let radio,area,lon
        radio=0;area=0;lon=0

        radio=parseFloat(Leer("Digite el valor del radio: "))

        area = Math.PI * radio**2
	    lon = 2 * Math.PI *radio
        Escribir.log ("El area del la circunferencia es: ",area)
        Escribir.log(" La longitud es: ", lon)
    }

}
let ar=new areaCir()
ar.areaCIRCULO()