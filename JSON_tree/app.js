/**
 *  IDEAS
 * 1) cargar el fichero json / fetch  -> https://stackoverflow.com/questions/34944099/how-to-import-a-json-file-in-ecmascript-6
 * 2) TDD
 * 3) funciones anidadas
 * 4) documentar la función
 * *Stringify -> https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON/stringify
 */
//importing json file
fetch('./tree.json')
  .then(response => response.json())
  .then(tree => {
    console.log(tree)
    
    const convertJsonToHtml = (tree, indent = 'tab') => {
      const childTag = 'li';
      const indentString = indent === 'space' ? ' ' : "\t"
      
      return `<${tree.tag}>
${indentString}${tree.children.map(child => `<${childTag}>${child.text}</${childTag}>`).join(`\n${indentString}`)}
</${tree.tag}>`
    }


    console.log(convertJsonToHtml(tree));
})