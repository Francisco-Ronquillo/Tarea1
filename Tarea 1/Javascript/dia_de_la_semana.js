//Elaborar un programa que me muestre los días de las semanas cuando ingrese los siete primeros numeros 
//Entrada dia(leer)
//Procesos witch (dia){
//     case 1 :
//        Escribir.log("Lunes")
//        break;
//    case 2 :
//        Escribir.log("Martes")
//        break;
//    case 3 :
//        Escribir.log("Miercoles")
//        break;
//    case 4 :
//        Escribir.log("Jueves")
//        break;
//    case 5:
//        Escribir.log("Viernes")
//        break;
//    case 6 :
//        Escribir.log("Sabado")
//        break;
//    case 7 :
//        Escribir.log("Domingo")
//        break;
//    default :
//        Escribir.log("Error, no existe dia para ese numero")
//Salida dia de la semana seleccionado   

const Leer= require('prompt-sync')()
const Escribir = console

class diaSemana{
    diaSEMANA(){
        let dia
        dia=0
        dia=parseInt(Leer("Digite el numero del dia de la semana: "))
        switch (dia){
            case 1 :
                Escribir.log("Lunes")
                break;
            case 2 :
                Escribir.log("Martes")
                break;
            case 3 :
                Escribir.log("Miercoles")
                break;
            case 4 :
                Escribir.log("Jueves")
                break;
            case 5:
                Escribir.log("Viernes")
                break;
            case 6 :
                Escribir.log("Sabado")
                break;
            case 7 :
                Escribir.log("Domingo")
                break;
            default :
                Escribir.log("Error, no existe dia para ese numero")
            

        
        }

    }
}
let di=new diaSemana()
di.diaSEMANA()
