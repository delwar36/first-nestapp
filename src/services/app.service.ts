import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTest(): any {
    return { message: 'Get request Test' };
  }

  postTest(): any {
    return { message: 'Post request Test' };
  }

  patchTest(): any {
    return { message: 'Patch request Test' };
  }

  putTest(): any {
    return { message: 'Put request Test' };
  }

  deleteTest(): any {
    return { message: 'Delete request Test' };
  }
}
