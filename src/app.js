/* eslint-disable */


let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
const domains = ['com', 'es', 'net']

const generateDomain = (arr1,arr2,arr3, domains) =>{
  arr1.forEach(pronoun => {
    arr2.forEach(adj => {
      arr3.forEach(noun => {
        domains.forEach(domain => {
          console.log(pronoun + adj + noun + '.'+ domain);
          
        })
      })
    })
  })

}

generateDomain(pronoun,adj,noun,domains);