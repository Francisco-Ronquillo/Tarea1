//Algoritmo para calcular 3 cuestionarios para un evaluacion y cuantas horas y cuantos minutos se tardara en revisar todas las evaluaciones
// Usamos la funcion trunc para quedarnos con la parte entera 
//Entrada cantidadA(leer),cantidadB(leer),cantidadC(leer),tiempoA(calcular),tiempoB(calcular),tiempoC(calcular),tiempo_total(calcular),horas,minutos(calcular)
//Proceso tiempoA<-cantidadA*5;
//        tiempoB<-cantidadB*8;
//        tiempoC=cantidadC*6;
//        tiempo_total=tiempoA+tiempoB+tiempoC;
//        horas=Math.trunc(tiempo_total/60);
//        minutos=tiempo_total mod 
//Salida horas,minutos

const Leer= require('prompt-sync')()
const Escribir = console

class revisionEx{
    revisionEXAMEN(){
        let cantidadA,cantidadB,cantidadC,tiempoA,tiempoB,tiempoC,tiempo_total,horas,minutos
       cantidadA=0;cantidadB=0;cantidadC=0;tiempoA=0;tiempoB=0;tiempoC=0;tiempo_total=0;horas,minutos=0
       
       
        cantidadA= Leer ("digite la cantidad de cuestionarios A: ")
	    cantidadB= Leer("digite la cantidad de cuestionarios B: ")
	    cantidadC= Leer ("digite la cantidad de cuestionarios C: ")
	    tiempoA = cantidadA * 5
	    tiempoB = cantidadB * 8
	    tiempoC = cantidadC * 6
	    tiempo_total = tiempoA+tiempoB+tiempoC 
	    horas = Math.trunc(tiempo_total / 60)
	    minutos = tiempo_total % 60;
	    Escribir.log("se tardara ",horas," horas y ",minutos," minutos ")
    }
}
let rev=new revisionEx()
rev.revisionEXAMEN()