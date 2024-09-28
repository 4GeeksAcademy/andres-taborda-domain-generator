/* eslint-disable */


const  pronoun = ['the', 'our'];
const  adj = ['great', 'big'];
const  noun = ['jogger', 'racoon'];
const extensions = ['com', 'es', 'onl']

const hackDomain = (noun, extension) => {
  const lengthExtension = extension.length
  const nounFragment = noun.slice( - lengthExtension)

  if(nounFragment === extension){
    return `.${noun}`
  }

  const indexFirstChart = noun.lastIndexOf(extension[0])

  if(indexFirstChart !== -1) {
    let stringToCompare = noun.slice(indexFirstChart)

    if(extension.startsWith(stringToCompare)){
      return noun.replace(stringToCompare, "." + extension)
    }
  }
  
  return `${noun}.${extension}`
  
}

const generateDomain = (arr1,arr2,arr3, extensions) =>{
  arr1.forEach(pronoun => {
    arr2.forEach(adj => {
      arr3.forEach(noun => {
        extensions.forEach(extension => {
          console.log(pronoun + adj + hackDomain(noun,extension));          
        })
      })
    })
  })

}


generateDomain(pronoun,adj,noun,extensions);