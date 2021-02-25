//importing json file
async function fetchData() {
  let response = await fetch('./tree.json');
  let data = await response.json();
  return data;
}

const getClass = element => element.class ? ` class='${element.class}'` : '';
  
const hasChildren = element => Boolean(element.children);

const getIndent = (indent, level) => {
  const indentString = indent.includes('space') ? ' '.repeat(indent.slice(5)) : "\t";
  return indentString.repeat(level);
}

const getChildren = (tree, indent, level) => {
  const childTag = 'li';

  return tree.children.map( child => {
    const result = `<${childTag}${getClass(child)}>${child.text}</${childTag}>`;
    let childResult = '';
    if (hasChildren(child)) {
      childResult = `\n${child.children.map(grandchildren => `${convertJsonToHtml(grandchildren, indent, level + 1)}`)}`
    }
    return result  + childResult;
  }).join(`\n${getIndent(indent, level + 1)}`)

}

const convertJsonToHtml = (tree, indent = 'tab', level = 0) => {
  return `${getIndent(indent, level)}<${tree.tag}>
${getIndent(indent, level + 1)}${getChildren(tree, indent, level)}
${getIndent(indent, level)}</${tree.tag}>`
}

fetchData()
  .then( data => {    
    console.log('tree', data.tree)
    console.log(convertJsonToHtml(data.tree));

    console.log('treeWithClass', data.treeWithClass)
    console.log(convertJsonToHtml(data.treeWithClass));

    console.log('complexTree', data.complexTree)
    console.log(convertJsonToHtml(data.complexTree));

})

module.exports = convertJsonToHtml;