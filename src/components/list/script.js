import React from 'react'
import './styles.css'

class List extends React.Component {

  render() {
    return (
      <div className="toDoList">
        <ul>
          {(this.props.toDoList || []).map(item => {
            return <li key={item.id} className={item.done? 'done':''}>
            <input id={`item${item.id}`} type="checkbox" checked={item.done? 'done':''} onChange={this.props.itemDone.bind(this, item)} />
            <label htmlFor={`item${item.id}`}>{item.title}</label>
            <button onClick={this.props.removeItem.bind(this, item)}>&times;</button>
          </li>
          })}
        </ul>
      </div>
    )
  }

}

export default List
