import { Controller, Get, Patch, Post, Put, Delete } from '@nestjs/common';

@Controller('premier')

export class PremierController {
    
    @Get()
    getpremier(): string{
        return 'get';
    }
    @Post()
    postpremier(): string {
        return 'post';
    }
    @Delete ()
    deletepremier(): string{
        return 'delete';
    }
    @Patch()
    patchpremier(): string{
        return 'patch';
    }
    @Put()
    putpremier(): string{
        return 'put';
    }
}