function* contator(){
      let i = 0
      while (true) {
            yield i++
            if(i> 5)
                break
      }
}

const itc = contator()
for (let c of itc) {
      console.log(c)
}


/* 

vou por for of se of interetor do contator
e agora console.log e se  e por let em c
sessao infinita
dentro do while funcao geradora break
se i for maior que 5 executo break
No valor 5 da um break no loop.
NAO VAI executar para sempre 0 a 5. por conta de break na funcao.

*/