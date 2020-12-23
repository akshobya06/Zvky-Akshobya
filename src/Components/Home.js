import React, { Component } from 'react'
import Board from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'
import "./Home.css"
const board = {
  columns: [
    {
      id: 1,
      title: 'Default 1',
      cards: [
       
      ]
    },
    {
      id: 2,
      title: 'Default 2',
      cards: [
       
      ]
    },
    {
      id: 3,
      title: 'Default 3',
      cards: [
       
      ]
    }
  ]
}

export default class Dashboard extends Component {
  state = {
    currentUser: null
  }
  componentDidMount() {
    this.setCurrentUser()
  }
  setCurrentUser = () => {
    const user = localStorage.getItem("currentUser");
    this.setState({ currentUser: JSON.parse(user) })
  }
  render() {
    const { currentUser } = this.state;
    return (
     
        <div className="backdrop">
        <div>
            <h3 className="p-2 boardHeader">Boards</h3>
          </div>
        <div className="container">
         
          {currentUser && (
           <div>
             <Board
              allowRemoveLane
              allowRenameColumn
              allowRemoveCard
              onLaneRemove={console.log}
              onCardRemove={console.log}
              onLaneRename={console.log}
              initialBoard={board}
              allowAddCard={{ on: "top" }}
              onNewCardConfirm={draftCard => ({
                id: new Date().getTime(),
                ...draftCard
              })}
              onCardNew={console.log} />
             </div>
          )}
        </div>
        </div>
     
    )
  }
}
