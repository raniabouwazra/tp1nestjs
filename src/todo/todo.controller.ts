import { Controller ,Get,Post,Delete,Put,Body,Param } from '@nestjs/common';
import {addDTO} from './DTO/todoDTO'
import {UpdatetodoDto} from './DTO/updateDTO'
import{TodoService} from './todo.service'
import{TodoModel} from './todo-model'
@Controller('todo')
export class TodoController {
  constructor (private todoService:TodoService ){} /* l'injection du service */
 
@Get ()
getToodos() {
  this.todoService.getTodos();
}
   
 @Post( )
 addTodos (Todo : addDTO){
 this.todoService.addTodos(Todo ) 
 }

 @Get (':id')
 getTodosbyId( @Param() params){
  this.todoService.getTodosbyId(params)
 }

 @Delete(':id')
 deletetodo(@Param()params){
    this.todoService.deletetodo(params);
 }
 @Put(':id')
  updatetodo(@Param()params, @Body() updatetodoDto: UpdatetodoDto) {
    this.todoService.updatetodo(params ,updatetodoDto )
}

