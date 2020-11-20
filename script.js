document.getElementById("submit").onclick = function(){
    document.getElementById("table").style.visibility = "visible";
    let equity = document.getElementById("equity").value
    let volume = document.getElementById("volume").value
    let maxlot = equity * 20 / 100000
    let rownumber = Math.floor(((Math.floor(maxlot/10)*10 - Math.ceil(volume/10)*10) / 10) + 3)
    let currentprice = document.getElementById("price").value
    let table = document.getElementById("table")


    let childNodes = table.childNodes
    for (i=2;i<childNodes.length;i){
        table.removeChild(childNodes[i])
    }
    
    alert(childNodes.length)

    for (i=0;i<rownumber;i++){
        
        let tr = document.createElement("tr");
        
        if(i===0){tbvolume = volume}
        else if (i===rownumber-1){tbvolume = maxlot}
        else {tbvolume = ((Math.ceil(volume/10))*10) + ((i-1)*10)}
        for(b=0;b<6;b++){
            
            let td = document.createElement("td");
            let margin = tbvolume*100000/20;
            let freemargin = equity - margin;
            
            if(b===0){
                
                td.innerHTML = tbvolume
            } else if (b===1){
                td.innerHTML = equity + "$";
            } else if (b===2){
                
                td.innerHTML = margin + "$";
            } else if(b===3){
                
                td.innerHTML = freemargin + "$";
            } else if(b===4){
                td.innerHTML = currentprice
            } else if (b===5){
                let reqprice
                if (document.getElementById("long").checked === true) {
                reqprice = (currentprice * tbvolume * 100000)/((tbvolume*100000)+freemargin); }
                else {
                reqprice = (currentprice * tbvolume * 100000)/((tbvolume*100000)-freemargin);
            }
                td.innerHTML = reqprice;
            }

            
            else {td.innerHTML = "aaa"}

            tr.appendChild(td)
        }

        document.getElementById("table").appendChild(tr)
    }

    alert(childNodes.length)
}