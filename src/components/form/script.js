import React from 'react'
import './styles.css'

class Form extends React.Component {
  addItem = (evt) => {
    // ao clicar enter, adiciona a tarefa à lista
    if(evt.keyCode === 13 && evt.target.value !== '') {
      this.props.storeItems(evt.target.value)
      evt.target.value = ''
    }
  }

  render() {
    return (
      <div className='form'>
        <fieldset>
          <input name="newOne" onKeyDown={this.addItem} type="text" placeholder="add a new todo..." />
        </fieldset>
      </div>
    )
  }
}

export default Form
