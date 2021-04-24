
function range(start, end, step){
  let output = []
  if(start === undefined || end === undefined || step === undefined
    || start > end || step <= 0){
      return []
    } else {
      for(start; start <= end; start += step){
        output.push(start);
      }
      return output
    }

}


  console.log(range(10, 30, 5));

