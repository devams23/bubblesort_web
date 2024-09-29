const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function myFunction() {
  var target = Number(document.getElementById("target").value);
  var array = document.getElementById("array").value;
  var barcont = document.getElementsByClassName("barcont")[0];
  var ansdescription = document.getElementById('targetans');
  console.log("array");
  array = array.split(",");
  var arrlength = array.length;
  //console.log(array.split(","))
  array.forEach((element) => {
    var iDiv = document.createElement("div");
    iDiv.innerHTML = element;
    iDiv.className = "number";

    iDiv.style.height = `${element}px`;
    barcont.appendChild(iDiv);
  });
  var numberlist = document.getElementsByClassName("number");
  console.log(numberlist)
  //console.log((numberlist[0].innerHTML))
  var low = 0;
  var high = arrlength - 1;
  while (low <= high) {
    var mid = Math.floor((high + low) / 2);
    console.log("low" , low , "high" , high , "mid" , mid);
    await pause(500);
    for (let i = low; i <=high; i++) {
      numberlist[i].style.backgroundColor = "#d40d17";
    }
    await pause(1500);
    numberlist[mid].style.backgroundColor = "#32a852";
    if (Number(array[mid]==Number(target))) {
        ansdescription.innerText = `The target is at the position ${mid+1}`;
        break;
    }
    
    else if(Number(array[mid]>Number(target))){
        await pause(500);
        for (let i = mid; i <=high; i++) {
            numberlist[i].style.backgroundColor = "#a3887c";
        }
        high = mid-1;
        ansdescription.innerText = `The target is on the left part`;
    }
    else {
        await pause(500);
        for (let i = low; i <=mid; i++) {
            numberlist[i].style.backgroundColor = "#a3887c";
        }
        low = mid+1;
        ansdescription.innerText = `The target is on the right part`;

    }
  }
  
}
