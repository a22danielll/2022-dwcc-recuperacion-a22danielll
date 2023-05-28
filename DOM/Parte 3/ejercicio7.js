function crearCalendario(elemento, ano, mes) {
    let dias = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']; 
    let date = new Date(ano,mes-1,1);
    let tabla = document.createElement('table');
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    for (let i = 0; i < dias.length; i++) {
      let th = document.createElement('th');
      th.textContent = dias[i];
      tr.append(th);
      
    }
    thead.append(tr);
    tabla.append(thead);

    let tbody = document.createElement('tbody');
    let diasMes = new Date(ano,mes,0).getDate();
    let tr2 = document.createElement('tr'); 
    
    
  }
  let calendario = document.getElementById('calendario');
  crearCalendario(calendario, 2022, 11);