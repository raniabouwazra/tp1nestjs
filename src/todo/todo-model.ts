import {TodoStatusEnum} from './todostatusenum'
import {v4 as uuidv4} from 'uuid';

export class TodoModel {
  id: string = uuidv4();
  name: string;
  description: string;
  createAt: string = Date();
  status: TodoStatusEnum = TodoStatusEnum.waiting;
}