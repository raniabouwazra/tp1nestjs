import { addDTO } from "./todoDTO";
import { PartialType } from '@nestjs/mapped-types'
export class  UpdatetodoDto extends PartialType(addDTO) { 
   
    
}