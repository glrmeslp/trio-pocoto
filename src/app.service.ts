import { Injectable } from '@nestjs/common';
import { members } from './members/members';

@Injectable()
export class AppService {
  getMembers(): any[] {
    return members;
  }
}
