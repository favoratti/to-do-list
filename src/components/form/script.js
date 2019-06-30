import React, { Component } from 'react'
import './styles.css'

class Form extends Component {
  addItem = (evt) => {
    // ao clicar enter, adiciona a tarefa à lista
    if(evt.keyCode === 13 && evt.target.value !== '') {
      this.props.storeItems(evt.target.value)
      evt.target.value = ''
    }
  }

  setFocus() {
    document.querySelector('#newOne').focus()
  }

  render() {
    return (
      <div className='form'>
        <fieldset>
          <input ref={this.props.inputRef} onKeyDown={this.addItem} type="text" placeholder="add a new todo..." />
        </fieldset>
      </div>
    )
  }
}

export default Form
