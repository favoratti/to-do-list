import React from 'react'
import './styles.css'
import Form from '../form/script'
import List from '../list/script'

class App extends React.Component {
  storageName = 'bd_toDoList'

  constructor() {
    super();

    this.state = {
      toDoList: this.getItems()
    }
  }

  getItems(evt) {
    let data = []

    // inicia com algum dado caso não tenha localStorage
    if(!window.localStorage) {
      data = [{
        "id": 1,
        "title": "Write my todo list",
        "done": true
      },
      {
        "id": 2,
        "title": "learn react",
        "done": false
      }]
    } else if(localStorage.getItem(this.storageName)) {
      data = JSON.parse(localStorage.getItem(this.storageName))
    }

    return data
  }

  itemDone(item) {
    this.state.toDoList.map(i => {
      if(i.id === item.id) {
        item.done = !item.done
      }
      return item
    })
    this.updateItems()
  }

  nextId() {
    return this.state.toDoList.length ? this.state.toDoList[this.state.toDoList.length - 1].id + 1 : 0;
  }

  storeItems( title ) {
    this.state.toDoList.push({
      "id": this.nextId(),
      "title": title,
      "done": false
    })
    this.updateItems()
  }

  removeItem( id ) {
    const list = this.state.toDoList.filter(item => {
      return item.id !== id
    })
    this.updateItems(list)
  }

  updateItems(list) {
    this.setState({
      toDoList: list || this.state.toDoList
    })

    if(window.localStorage) {
      localStorage.setItem(this.storageName, JSON.stringify(this.state.toDoList))
    }
  }

  render() {
    return (
      <div className="toDo">
        <h1>ToDo List</h1>
        <Form storeItems={this.storeItems.bind(this)} />
        <List toDoList={this.state.toDoList} itemDone={this.itemDone.bind(this)} removeItem={this.removeItem.bind(this)} />
      </div>
    )
  }
}

export default App
