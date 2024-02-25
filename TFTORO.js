var a= document.getElementById("input_a");
var b= document.getElementById("input_b");
var c= document.getElementById("input_c");


var boton=document.getElementById("boton");


var b0=0.0;
var r=document.getElementById("resultado");
var wc=0.0;
var w=0.0;
var ro=0.0;
var tipo
var s1=0.0;
var s2=0.0;


function calcular(){

    
    if(a.value==""||NaN ||b.value==""||NaN ||c.value==""|| NaN)
    {
        r.innerHTML="No deje casillas vacias";
    }

    else if (a.value > 0 && c.value >= 0)
    {
        a.value=parseFloat(a.value);
        b.value=parseFloat(b.value);
        c.value=parseFloat(c.value);
        console.log(a.value);
        k= a.value/c.value;
        w= Math.sqrt(c.value);
        ro=b.value/(2*w);
        os=Math.pow(Math.E,-((ro*Math.PI)/(Math.sqrt(1-Math.pow(ro,2)))))*100;
        ts=4/(ro*w);

        if (ro==0)
        {
            tipo="Sin amortiguar/ Undamped";
            ts=4*(Math.PI/(w));
            s1=w;
            s2=w;
            r.innerHTML="La funcion de transferencia corresponde a un sistema:"+"<br/>"+"<br/>"  + tipo +"<br/>" +"<br/>"+ "k = "+ k.toFixed(2)+"<br/>"+ "ro = "+ ro.toFixed(2)+"<br/>"+ "wn = "+ w.toFixed(2) + "<br/>"+ "OS% = "+ os.toFixed(2) + "<br/>" + "Ts = "+ts.toFixed(2)+"<br/>"+"Polos en ±"+ s1.toFixed(2)+" j" ;
            
        }
        else if (ro>0 && ro< 1)
        {
            tipo="Subamortiguado/ Underdamped";
            s1=-ro*w;
            s2=w*Math.sqrt(1-(Math.pow(ro,2)));
            r.innerHTML="La funcion de transferencia corresponde a un sistema:"+"<br/>"+ "<br/>" + tipo +"<br/>"+ "<br/>"+ "k = "+ k.toFixed(2)+"<br/>"+ "ro = "+ ro.toFixed(2)+"<br/>"+ "wn = "+ w.toFixed(2) + "<br/>"+ "OS% = "+ os.toFixed(2) + "<br/>" + "Ts = "+ts.toFixed(2)+"<br/>"+"Polos en "+ s1.toFixed(2)+" ± "+s2.toFixed(2)+"j" ;
        }
        else if (ro==1)
        {
            tipo= "Criticamente amortiguado/ Critically damped";
            s1=-ro*w;
            r.innerHTML="La funcion de transferencia corresponde a un sistema:"+"<br/>"+ "<br/>" + tipo +"<br/>" +"<br/>"+ "k = "+ k.toFixed(2)+"<br/>"+ "ro = "+ ro.toFixed(2)+"<br/>"+ "wn = "+ w.toFixed(2) + "<br/>"+ "OS% = "+ os.toFixed(2) + "<br/>" + "Ts = "+ts.toFixed(2)+"<br/>"+"Polos en "+ s1.toFixed(2) ;
        }
        else if (ro>1)
        {
            tipo="Sobre amortiguado/ Overdamped";
            ts=8*ro/(w);
            s1=-ro*w+w*Math.sqrt((Math.pow(ro,2))-1);
            s2=-ro*w-w*Math.sqrt((Math.pow(ro,2))-1);
            r.innerHTML="La funcion de transferencia corresponde a un sistema:"+"<br/>" +"<br/>"  + tipo +"<br/>"+ "<br/>"+ "k = "+ k.toFixed(2)+"<br/>"+ "ro = "+ ro.toFixed(2)+"<br/>"+ "wn = "+ w.toFixed(2) + "<br/>"+ "OS% = "+ os.toFixed(2) + "<br/>" + "Ts = "+ts.toFixed(2)+"<br/>"+"Polos en "+ s1.toFixed(2)+" y "+s2.toFixed(2) ;
        }
        else
        {
            tipo="error determinando el tipo de sistema";
        }    
    }

    else
    {   
        r.innerHTML="Error de parametros";
    }

}


boton.addEventListener("click",calcular);