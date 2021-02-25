const convertJsonToHtml = require('./app');

const tree = {
    tag: "ul",
    children: [
      {
        text: "Primer elemento"
      },
      {
        text: "Cáspita, otro elemento"
      },
      {
          text: "El último"
      }
    ]
};

const resultTab = `<ul>
\t<li>Primer elemento</li>
\t<li>Cáspita, otro elemento</li>
\t<li>El último</li>
</ul>`;

const resultOneSpace = `<ul>
 <li>Primer elemento</li>
 <li>Cáspita, otro elemento</li>
 <li>El último</li>
</ul>`;

const resultThreeSpaces = `<ul>
   <li>Primer elemento</li>
   <li>Cáspita, otro elemento</li>
   <li>El último</li>
</ul>`;

const resultTenSpaces = `<ul>
          <li>Primer elemento</li>
          <li>Cáspita, otro elemento</li>
          <li>El último</li>
</ul>`;


//-----------------------------------------------------
const treeWithClass = {
  tag: "ul",
  children: [
    {
      text: "Primer elemento"
    },
    {
      text: "Cáspita, otro elemento",
      class: "caper"
    },
    {
        text: "El último"
    }
  ]
};

const resultWithClass = `<ul>
\t<li>Primer elemento</li>
\t<li class='caper'>Cáspita, otro elemento</li>
\t<li>El último</li>
</ul>`;

//---------------------------------------------------------
const complexTree = {
  tag: "ul",
  children: [
    {
      text: "Primer elemento"
    },
    {
      text: "Cáspita, otro elemento",
      children: [
        {
          tag: "ul",
          children: [
            {
              text: 'Primer heredero del cáspita'
            },
            {
              text: 'Último heredero del cáspita'
            }
          ]
        }
      ]
    },
    {
    	text: "El último"
    }
  ]
}

const resultComplexTree = `<ul>
\t<li>Primer elemento</li>
\t<li>Cáspita, otro elemento</li>
\t<ul>
\t\t<li>Primer heredero del cáspita</li>
\t\t<li>Último heredero del cáspita</li>
\t</ul>
\t<li>El último</li>
</ul>`;

//---------------------------------------------------------
describe('convertJsonToHtml function', () => {
  
  test("create html tree", () => {
    expect(convertJsonToHtml(tree)).toBe(resultTab);
  });

  test("create html tree using tab", () => {
    expect(convertJsonToHtml(tree, "tab")).toBe(resultTab);
  });

  test("create html tree using one space", () => {
    expect(convertJsonToHtml(tree, "space1")).toBe(resultOneSpace);
  });

  test("create html tree using three spaces", () => {
    expect(convertJsonToHtml(tree, "space3")).toBe(resultThreeSpaces);
  });

  test("create html tree using ten spaces", () => {
    expect(convertJsonToHtml(tree, "space10")).toBe(resultTenSpaces);
  });

  test("element with class property", () => {
    expect(convertJsonToHtml(treeWithClass)).toBe(resultWithClass);
  });
  test("complex tree", () => {
    expect(convertJsonToHtml(complexTree)).toBe(resultComplexTree);
  });
})