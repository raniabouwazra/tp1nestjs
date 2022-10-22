import { Controller ,Get,Post,Delete,Put,Body,Param } from '@nestjs/common';
import {addDTO} from './DTO/todoDTO'
import {UpdatetodoDto} from './DTO/updateDTO'
import { v4 as uuidv4 } from 'uuid';
import{TodoModel} from './todo-model'
@Controller('todo')
export class TodoController {
private todos=[new TodoModel() ];

@Get ()
    getTodos() {
     return this.todos ;
 }
 @Post( )
 addTodos(@Body () Todo : addDTO) {
  const todo = new TodoModel();
  const {name,description}=  Todo ;
  todo.name=name;
  todo.description=description ;
 this.todos.push(todo);
 return todo ;
 }
 @Get (':id')
 getTodosbyId( @Param() params){
    return this.todos.find((todo) => todo.id ==params.id);
 }
 @Delete(':id')
 deletetodo(@Param()params){
    this.todos = this.todos.filter((todo) => todo.id != params.id);

 }
 @Put(':id')
  updatetodo(@Param()params, @Body() updatetodoDto: UpdatetodoDto) {
    const todo = new TodoModel(); 
    const {name, description}=updatetodoDto ;
    todo.name=name;
    todo.description =description ;
   const ToDo = this.todos.find((todo) => todo.id == params.id);
   
    if (ToDo) {
      ToDo.name = todo.name;
      ToDo.description  = todo.description ;
      
    }
   
   
    return ToDo;
  }
}

