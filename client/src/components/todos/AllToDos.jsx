import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Card, CardGroup , Button } from 'react-bootstrap'
import cancelIcon from '../../img/cancel_icon.svg'
import doneIcon from '../../img/done_icon.svg'
import { Link,  } from 'react-router-dom'

const AllToDos = () => {
    const [todos, setTodos] = useState([])

    React.useEffect(()=>{
        const getToDoData = async () =>{
          try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()
            setTodos(data)
            } catch(e){ console.log(e) }
        }
        getToDoData()
    },[])

  const getLinkUrl = (id) => {
      return `http://localhost:3000/todos/${id}`
  }

  let getNewURL = (event)=>{
    console.log(event.target.id)
  }


  return (
    <div >
        <h1  style={{justifyContent:"center", alignItems:"center", display:'flex'}}>ToDos</h1>
        <Row className="g-3">
          {/*// TODO TABLE */}
          {/*// TODO TABLE ->  TODO item -> */}

          {todos.map((todo) => (
            <Col key={todo.id} >
              <Card id={todo.id} style={{width:'300px', height:"180px", cursor:"pointer"}} onClick={getNewURL}>
                <Card.Body  id={todo.id} >
                  <Link to={getLinkUrl(todo.id)} style={{textDecoration: 'none', color: 'black'}}>
                    <Card.Title id={todo.id}> {todo.title} </Card.Title>
                  </Link>
                  <Card.Text id={todo.id}> {todo.id} </Card.Text>
                  <Card.Img id={todo.id} variant="bottom" height='20px' src={todo.completed ? doneIcon : cancelIcon} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    </div>
  )
}

export default AllToDos
