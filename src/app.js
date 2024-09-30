/* eslint-disable */


const  pronouns = ['the', 'our'];
const  adjs = ['great', 'big'];
const  nouns = ['jogger', 'racoon'];
const extensions = ['com', 'es', 'onl']

const hackDomain = (noun, extension) => {
  const lengthExtension = extension.length
  const nounFragment = noun.slice( - lengthExtension)

  if(nounFragment === extension){
    return `.${noun}`
  }

  const indexFirstChart = noun.lastIndexOf(extension[0])

  const stringToCompare = noun.slice(indexFirstChart)
  if(indexFirstChart !== -1 && extension.startsWith(stringToCompare)) {
    
    return noun.replace(stringToCompare, "." + extension)
    
  }
  
  return `${noun}.${extension}`
  
}

const generateDomain = (pronouns,adjs,nouns, extensions) =>{
  pronouns.forEach(pronoun => {
    adjs.forEach(adj => {
      nouns.forEach(noun => {
        extensions.forEach(extension => {
          console.log(pronoun + adj + hackDomain(noun,extension));          
        })
      })
    })
  })

}


generateDomain(pronouns,adjs,nouns,extensions);