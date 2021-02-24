//importing json file
async function fetchData() {
  let response = await fetch('./tree.json');
  let data = await response.json();
  return data;
}

const convertJsonToHtml = (tree, indent = 'tab') => {
  const childTag = 'li';
  const indentString = indent.includes('space') ? ' '.repeat(indent.slice(5)) : "\t";
  const getClass = element => element.class ? ` class='${element.class}'` : '';

  return `<${tree.tag}>
${indentString}${tree.children.map(child => `<${childTag}${getClass(child)}>${child.text}</${childTag}>`).join(`\n${indentString}`)}
</${tree.tag}>`
}

fetchData()
  .then( data => {    
    console.log('complexTree', data.complexTree)
    console.log(convertJsonToHtml(data.complexTree));

})

module.exports = convertJsonToHtml;