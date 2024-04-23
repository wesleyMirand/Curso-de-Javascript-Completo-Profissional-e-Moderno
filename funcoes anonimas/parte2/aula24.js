const f = function (...valores){
      let res = 0
      for(v of valores){
            res += v
      }
      return res
}
console.log(f(10,5))

/* 

spread com valores , mesmo conceito da rest 
for v of valores
red += v
return res

*/