/*document.addEventListener('DOMContentLoaded',function(){
	
	var arr = [1,2,3,4,2,1,5,6,2,1,2,3,7,6,3,2,1,2,3,6], len = arr.length;
	var frame_1 = [arr[0],arr[0],arr[0]], frame_2 = [0,arr[1],arr[1]], frame_3 = [0,0,arr[2]];
	var arrFalse = ['F','F','F'];
  var arrIndex = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9];
	
	var rallyArrs = [frame_1,frame_2,frame_3];  // firstElem && rallyArrs && arrMax đều có cùng length 
	for(let i = 3; i < len; i++ ){
		if(arr[i] === frame_1[i-1] || arr[i] === frame_2[i-1] || arr[i] === frame_3[i-1]){
			arrFalse.push(' ');
			for(let j = 0; j < rallyArrs.length; j++){
				rallyArrs[j].push(rallyArrs[j][i-1]);
        
			}
		}else{
			
			let subArr = arr.slice(i+1, len), len_1, len_2, len_3,arrMax = [];
			len_1 = subArr.indexOf(frame_1[i-1]);
			len_2 = subArr.indexOf(frame_2[i-1]);
			len_3 = subArr.indexOf(frame_3[i-1]);

			let firstElem = []; const number = 100000;
			firstElem.push(frame_1[i-1],frame_2[i-1],frame_3[i-1])
			arrMax.push(len_1,len_2,len_3);
      
			for(let j = 0; j < arrMax.length; j++){
			    if(arrMax[j] >= 0){arrMax[j] += i + 1;}
			    else continue;
			}

			let t = 0, maxFirstElem = 0;
			let max = arrMax.reduce((a,b) =>{
				if(b > 0){
					if(b > a ) { return b;}
					else{ return a;}
				}
				else{ 
      				for(let j = 0; j < arrMax.length; j++){
						if(arrMax[j] < 0){
							arrMax[j] = arr.indexOf(firstElem[j]);
							maxFirstElem = (arrMax[j] > maxFirstElem)?(arrMax[j]): maxFirstElem; 	
						}
					}            
					return maxFirstElem*number;-
				}
			},0);
			max = (max % number == 0)? max/number: max;
		
			for(let j = 0; j < firstElem.length; j++){ // firstElem && rallyArrs && arrMax đều có cùng length
				if(firstElem[j] == arr[max]){
					rallyArrs[j].push(arr[i]);
				}else{
					rallyArrs[j].push(rallyArrs[j][i-1]);
				}
			}
      t=0;
			arrFalse.push("F");

		}
		
	}
  console.log(arrIndex);
  console.log(arr);
  console.log()
	console.log(frame_1);
  console.log(frame_2);
  console.log(frame_3);
  console.log(arrFalse);
},false)*/

var arr = [1,2,3,4,2,1,5,6,2,1,2,3,7,6,3,2,1,2,3,6], len = arr.length;
var sumFrame = 4;
var arrFalse = [];
var rallyFrame = [];
for(let i = 0; i < sumFrame; i++){
  arrFalse.push("F");
  rallyFrame.push([]);
  for(let j = 0; j < i; j++){
    rallyFrame[i].push(0);
  }
  for(let j = 0; j < sumFrame - i; j++){
    rallyFrame[i].push(arr[i]);
  }
}

for(let i = sumFrame; i < len; i++){
  let subArr = arr.slice(i+1,len), t =  0;
  for(let j = 0; j < sumFrame; j++){
    if(rallyFrame[j][i-1] == arr[i]){
      ++t;
      arrFalse.push(" ");
      for(let k = 0; k < sumFrame; k++){
        rallyFrame[k].push(rallyFrame[k][i-1]);
      }
      break;
    }
  }

  if(t == 0){
    arrFalse.push("F");
    
    let positionElem = [];
    let max; const numbConst = 100000;

    for(let j = 0; j < sumFrame; j++ ){
      positionElem.push(subArr.indexOf(rallyFrame[j][i-1]));
    }
    
    for(let j = 0; j < sumFrame; j++){
			    if(positionElem[j] >= 0){positionElem[j] += i + 1;}
			    else continue;
		}

    let minElem = Infinity;
    max = positionElem.reduce((a,b) =>{
      if(b > 0){
        if(b > a ) { return b;}
        else{ return a;}
      }
      else{ 
          for(let j = 0; j < sumFrame; j++){
            if(positionElem[j] < 0){
              positionElem[j] = arr.indexOf(rallyFrame[j][i-1]);
              minElem = (positionElem[j] < minElem)?(positionElem[j]): minElem; 	
          }
        }            
        return minElem*numbConst;
      }
    },0);

    max = (max % numbConst == 0)? max/numbConst: max;
		
    for(let j = 0; j < sumFrame; j++){
      if(rallyFrame[j][i-1] == arr[max]){
        rallyFrame[j].push(arr[i]);
      }else{
        rallyFrame[j].push(rallyFrame[j][i-1]);
      }
    }
  }
  else{
    continue;
  }
}

console.log(arr);
console.log();
for(let j = 0; j < sumFrame; j++){
  console.log(rallyFrame[j])
}
console.log(arrFalse)

// https://repl.it/@khoailang991/WhiteQuickwittedDesignmethod-24