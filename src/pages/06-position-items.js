import React from 'react';
import Main from '../components/layout/Main';
import CodeBlock from '../components/CodeBlock';
import DevHomework from '../components/layout/DevHomework';

const Tutorial = () => (
  <div>
    <h2>Position Items</h2>

    <h4>Understanding Grid Lines</h4>

    <p>
      Now that we are comfortable creating a grid and defining the row and column sizes, we can move
      on to placing items on this grid. There are several ways to place items, but we will start
      with a basic example. Consider a simple 3x2 grid:
    </p>

    <img src="http://placehold.it/500x200" alt="a 3x2 grid" />

    <p>Each item within this grid will be placed automatically in the default order.</p>

    <p>
      If we wish to have greater control, we can position items on the grid using grid line numbers.
      Grid lines are numbered left to right and top to bottom (if you are working in a right-to-left
      language, then grid lines are numbered right to left). The above example would be numbered
      like so:
    </p>

    <img src="http://placehold.it/500x200" alt="a 3x2 grid" />

    <h4>Position an item</h4>

    <p>
      Say we want to position our first grid item (with a class of item1) to be in the second row
      and occupy the second column. This item will need to start at the second row line, and span to
      the third row line. It will also need to start at the second column line and span to the third
      column line. We could write our CSS like so:
    </p>

    <CodeBlock>
      {`
.item1 {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
}
      `}
    </CodeBlock>

    <h4>Shorthand Property</h4>

    <p>We can also rewrite this with shorthand properties:</p>

    <CodeBlock>
      {`
.item1 {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
}
      `}
    </CodeBlock>

    <p>Here is the result:</p>

    <div className="container-6">
      <div className="item item1">1</div>
      <div className="item item2">2</div>
      <div className="item item3">3</div>
      <div className="item item4">4</div>
      <div className="item item5">5</div>
      <div className="item item5">6</div>
    </div>
  </div>
);

const Homework = () => (
  <DevHomework>
    <p>this is some homework</p>
  </DevHomework>
);

export default () => <Main currentPageNum={6} tutorial={<Tutorial />} homework={<Homework />} />;