import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { members } from './members/members';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('number of members', () => {
    it('should return 3', () => {
      expect(appController.getMembers().length).toBe(3);
    });
  });

  describe('of age', () => {
    it('should return age > 18', () => {
      const members = appController.getMembers();
      for (var member of members) {
        if (member.age < 18){
          throw new Error('There is members underage')
        }
      }
      
    });
  });

});
