import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class AppController {
  private readonly data = [
    {
      id: 1,
      firstName: 'Johny',
      lastName: 'Cage',
      age: 27,
    },
    {
      id: 2,
      firstName: 'Ismoil',
      lastName: 'Somoni',
      age: 50,
    },
    {
      id: 3,
      firstName: 'Luke',
      lastName: 'Dacascos',
      age: 12,
    },
  ];
  @Get()
  listMessages() {
    return this.data;
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
