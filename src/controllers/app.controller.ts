import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTest(): any {
    return this.appService.getTest();
  }

  @Post()
  postTest(): any {
    return this.appService.postTest();
  }

  @Patch()
  patchTest(): any {
    return this.appService.patchTest();
  }

  @Put()
  putTest(): any {
    return this.appService.putTest();
  }

  @Delete()
  deleteTest(): any {
    return this.appService.deleteTest();
  }
}
