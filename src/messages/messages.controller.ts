import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from '../messages/dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messageService: MessagesService) {}

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const messages = await this.messageService.findOne(id);
    if (!messages) {
      const notFoundId = new NotFoundException(
        `Message with ID "${id}" not found`,
      );
      console.log(notFoundId);
      throw notFoundId;
    }
    return messages;
  }
}
