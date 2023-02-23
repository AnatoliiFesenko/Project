import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Card, CardGroup , Button} from 'react-bootstrap'
import doneIcon from '../img/done_icon.svg'
import cancelIcon from '../img/cancel_icon.svg'
import { Link } from 'react-router-dom'



const OnePage = () => {

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
    
    
    let arrTitle = [];
    let arrCompleted= [];
    
    todos.map((todo)=>{
        arrTitle.push(todo.title)
        arrCompleted.push(todo.completed)
    })


    let indexToDo = Number(((window.location.search).split('='))[1])
    console.log(indexToDo)
  return (
    <div>
      <Container style={{paddingTop:'10%'}}>
        <Link to='/all' style={{textDecoration:'none', color:'black'}}>
          <Button variant="outline-danger" size="lg" style={{width:'100%'}}>Back</Button>
        </Link>
        
           <Card >
            <Card.Img 
                variant="top" 
                src={arrCompleted[indexToDo-1] ? doneIcon : cancelIcon} 
                style={{width:'40%', height:'40%',marginLeft:'30%'}}
            />
            <Card.Body>
                <Card.Text>{arrTitle[indexToDo-1]} </Card.Text>
            </Card.Body>
          </Card>
       </Container>
    </div>
  )
}

export default OnePage
