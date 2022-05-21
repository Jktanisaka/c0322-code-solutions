import React from 'react';

const topics = [
  { name: 'HTML', description: 'HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.' },
  { name: 'CSS', description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. ' },
  { name: 'JavaScript', description: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.' }
];

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { selected: null };
  }

  handleClick(event) {
    if (event.target.id === this.state.selected) {
      this.setState({ selected: null });
    } else (this.setState({ selected: event.target.id }));
  }

  render() {
    return (
      <ul className='container'>
        {topics.map((topic, index) => {
          let classVar;
          if (index.toString() === this.state.selected) {
            classVar = '';
          } else { classVar = 'hidden'; }
          return <li key={index}>
           <h1 id={index} onClick={this.handleClick}>{topic.name}</h1>
           <div className={classVar}>{topic.description}</div>
        </li>;
        })}
      </ul>
    );
  }
}
