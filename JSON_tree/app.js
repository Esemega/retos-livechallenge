//importing json file
async function fetchData() {
  let response = await fetch('./tree.json');
  let data = await response.json();
  return data;
}

const convertJsonToHtml = (tree, indent = 'tab') => {
  const childTag = 'li';
  const indentString = indent === 'space' ? ' ' : "\t"
  
  return `<${tree.tag}>
${indentString}${tree.children.map(child => `<${childTag}>${child.text}</${childTag}>`).join(`\n${indentString}`)}
</${tree.tag}>`
}

fetchData()
  .then(tree => {
    console.log(tree)
    console.log(convertJsonToHtml(tree));
})

module.exports = convertJsonToHtml;