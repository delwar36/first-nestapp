import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUser(): any {
    return this.userService.getUser();
  }
  @Get('/:id')
  getUserById(@Param('id') id: string, @Query('query') query: string): any {
    return this.userService.getUserById(id, query);
  }
}
