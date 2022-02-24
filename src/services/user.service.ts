import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): any {
    return { message: `Hello User!` };
  }
  getUserById(id: string, query:string): any {
    return { message: `Hello User ${id} by ${query}` };
  }
}
