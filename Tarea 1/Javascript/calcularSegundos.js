//Calcular la cantidad de segundos que estan incluidos en el numero de horas, minutos y segundos ingresados por el usuario.
//Entrada  horas(leer),minutos(leer),seg(leer),horas_seg(calcular),minutos_seg(calcular),total_seg(calcular)
//Proceso horas_seg=horas*3600, minutos=minutos*60,total-seg=horas_seg+minutos_seg+seg
//Salida total_seg

const Leer= require('prompt-sync')()
const Escribir=console

class calcularSeg{
    calcularSEG(){
        let horas,minutos,seg,horas_seg,minutos_seg,total_seg
        horas=0;minutos=0;seg=0;horas_seg=0;minutos_seg=0;total_seg=0

        horas=parseInt(Leer("Digite las horas: "))
        minutos=parseInt(Leer("Digite los minutos: "))
        seg=parseInt(Leer("Digite los segundos: "))

        horas_seg=horas*3600
	    minutos_seg=minutos*60;
	    total_seg=horas_seg+minutos_seg+seg

        Escribir.log("Los segundos equivalentes son:",total_seg)
    
    }
}
let cs= new calcularSeg()
cs.calcularSEG()