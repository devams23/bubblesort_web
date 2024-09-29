const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
async function myFunction(){
    var arrlength = Number(document.getElementById('length').value);
    var array = document.getElementById('array').value;
    var barcont = document.getElementsByClassName('barcont')[0]
    console.log("array");
    array = array.split(",");
    //console.log(array.split(","))
    array.forEach(element => {
        var iDiv = document.createElement('div');
        iDiv.innerHTML = element;
        iDiv.className = 'number';
        
        iDiv.style.height = `${element}px`;
        barcont.appendChild(iDiv);
    });
    var numberlist = document.getElementsByClassName('number');
    //console.log(numberlist)
    //console.log((numberlist[0].innerHTML))

    for (let i = 0; i < arrlength-1; i++) {
        for (let j = 0; j <=arrlength-i-2; j++) {
            await pause(500);
            numberlist[j].style.backgroundColor  = "#635554";
            numberlist[j+1].style.backgroundColor  = "#635554";
            const element1 = Number(numberlist[j].innerHTML);
            const element2 = Number(numberlist[j+1].innerHTML);
            await pause(500);
            if (element1 > element2) {
                console.log(element1,element2)
                numberlist[j].style.height = `${element2}px`;
                numberlist[j].innerHTML = element2;
                numberlist[j+1].style.height = `${element1}px`;
                numberlist[j+1].innerHTML  = element1;
            }
            await pause(500);
            numberlist[j].style.backgroundColor  = "#a3887c";
            numberlist[j+1].style.backgroundColor  = "#a3887c";
        
        }
        // const element = numberlist[i].innerHTML;
        // console.log(element)
        
    }
    
}