let userName = prompt('Ingresa su nombre: ');
console.log(userName)
let age = prompt('Ingrese su edad: ');
console.log(age)
let gender = "";
let heightSelector= "";
let weight= "";
let height="";
let lifestyle="";
let goal="";
let level="";






do{
    gender = prompt(' Ingrese su sexo "M" para masculino o "F" para femenino: ');
    console.log(gender);
    if (gender === "M" || gender === "m" || gender === "F" || gender === "f" ) {
        do{
            heightSelector = prompt(' Para ingresar la altura en pies escribir "P" si prefiere ingresar la altura en metros ingresar "Me": ');
            console.log(heightSelector)
            if(heightSelector == "P" || heightSelector == "p" || heightSelector == "ME"  || heightSelector == "me" || heightSelector == "Me" || heightSelector == "mE"){
            if(heightSelector == "P" || heightSelector == "p"){
                height = parseFloat(prompt('Ingrese su altura en Pies: '));
                console.log(height);
                weight= parseFloat(prompt('Ingrese su peso en libras: ')); 
                console.log(weight);
       
            
            } else if(heightSelector == "ME"  || heightSelector == "me" || heightSelector == "Me" || heightSelector == "mE") {
                height = parseFloat(prompt('Ingrese su altura en Metros: '));
                console.log(height);
                weight= parseFloat(prompt('Ingrese su peso en kilogramos: ')); 
                console.log(weight);
        
           
             }    
             /*Calcula el BMR*/   
             var metabolic=BMR(gender,heightSelector,weight, height,age)
             /*alert('Su BMR es ' + metabolic)*/
             console.log( 'El BMR es '+metabolic);
             lifestyle=prompt('Ingrese una de las siguientes opciones: A si su estilo de vida sendetaria, B si su estilo de vida  es oficina mas 3 veces a la semana gimnasio o C si su estilo de vida es activa 4 o mas veces al gimnasio: ')
             console.log(lifestyle);
             
             /*Calcula el TDEE*/   
             var energy=TDEE(metabolic, lifestyle)
             alert('Su TDEE es ' + energy)
            
             /*Calcula el TDCI*/  
             goal=prompt('Ingrese 1 si su meta es bajar de peso o 2 si su meta es ganar musculo: ')
             console.log(lifestyle);
             if(goal =='2'){
                level=prompt('Ingrese su nivel: 1 para Beginner, 2 para Novice, 3 para Intermedio y 4 para avanzado: ')
             }
            
             var calorieIntake= TDCI(energy, heightSelector, weight)
             alert('Su TDCI es ' + calorieIntake);
            }
            break;
        }while(heightSelector != "P" || heightSelector != "p" || heightSelector != "ME"  || heightSelector != "me" || heightSelector != "Me" || heightSelector != "mE");  

}

}while(gender != 'M' || gender != 'm' || gender != 'F' || gender !='f');


 



function BMR(gender,heightSelector,weight, height,age){
    if((gender=='M' || gender=='m')&&(heightSelector=='P'||heightSelector=='p')){
        BMR=66+(6.2*weight)+(12.7*height)-(6.8*age);
        return BMR; 
    }else if ((gender=='M' || gender=='m')&&(heightSelector=='Me'||heightSelector=='me')){
        BMR=66+(13.7*weight)+(5*height)-(6.8*age);
        return BMR;
    }else if((gender=='F' || gender=='f')&&(heightSelector=='P'||heightSelector=='p')){
        BMR=655+(4.4*weight)+(4.6*height)-(4.7*age);
        return BMR;
    }else if ((gender=='F' || gender=='f')&&(heightSelector=='Me'||heightSelector=='me')){
        BMR=655+(9.6*weight)+(1.8*height)-(4.7*age);
        return BMR;
    }
    }


function TDEE(BMR,lifestyle){
       if(lifestyle== 'A' || lifestyle == 'a'){
        TDEE=BMR*1.35;
        return TDEE ; 
    }else if(lifestyle== 'B' || lifestyle=='b'){
        TDEE=BMR*1.55;
        return TDEE ; 
    }else if(lifestyle== 'C' || lifestyle =='c'){
        TDEE=BMR*1.75;
        return TDEE ; 
    }
}


function TDCI(TDEE, heightSelector, weight){
    if(goal == '1' && (heightSelector == 'P' || heightSelector == 'p')){
        TDCI = TDEE+(weight*0.75*500);
        return TDCI;
    }else if (goal == '1' && (heightSelector == 'Me' || heightSelector == 'ME' || heightSelector == 'me' ||heightSelector == 'mE')){
        TDCI =TDEE+(weight*0.75*1100);
        return TDCI;
    }else if(goal ==2 && level ==1 && (heightSelector == 'P' || heightSelector == 'p')){
        TDCI = TDEE+(weight*0.02*150);
        return TDCI;
    }else if(goal ==2 && level ==2 && (heightSelector == 'P' || heightSelector == 'p')){
        TDCI = TDEE+(weight*0.015*150);
        return TDCI;
    }else if(goal ==2 && level ==3 && (heightSelector == 'P' || heightSelector == 'p')){
        TDCI = TDEE+(weight*0.01*150);
        return TDCI;
    }else if(goal ==2 && level ==4 && (heightSelector == 'P' || heightSelector == 'p')){
        TDCI = TDEE+(weight*0.005*150);
        return TDCI;
    }else if(goal ==2 && level ==1 && (heightSelector == 'Me' || heightSelector == 'ME' || heightSelector == 'me' ||heightSelector == 'mE')){
        TDCI = TDEE+(weight*0.02*150);
        return TDCI;
    }else if(goal ==2 && level ==2 && (heightSelector == 'Me' || heightSelector == 'ME' || heightSelector == 'me' ||heightSelector == 'mE')){
        TDCI = TDEE+(weight*0.015*150);
        return TDCI;
    }else if(goal ==2 && level ==3 && (heightSelector == 'Me' || heightSelector == 'ME' || heightSelector == 'me' ||heightSelector == 'mE')){
        TDCI = TDEE+(weight*0.01*150);
        return TDCI;
    }else if(goal ==2 && level ==4 && (heightSelector == 'Me' || heightSelector == 'ME' || heightSelector == 'me' ||heightSelector == 'mE')){
        TDCI = TDEE+(weight*0.005*150);
        return TDCI;
    }
}
/*
function MACRO(){}

*/
