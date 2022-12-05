import React, {PureComponent} from 'react';

function addAge(target: Function) {
  target.prototype.gae = 111
}

class Class extends PureComponent {
  age?: number

  render() {
    return (
      <h2>我是类组件---{this.age}</h2>
    );
  }
}

export default Class;