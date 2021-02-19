const tree = {
  tag: "ul",
  children: [
    {
      text: "Primer elemento",
    },
    {
      text: "Cáspita, otro elemento",
    },
    {
      text: "El último",
    },
  ],
};

const convertJsonToHtml = (tree, indent = 'tab') => {
    const indentString = indent === 'space' ? ' ' : "\t"

    return `<${tree.tag}>
${indentString}${tree.children.map(child => `<li>${child.text}</li>`).join("\n"+indentString)}
</${tree.tag}>`
}


console.log(convertJsonToHtml(tree, 'space'));