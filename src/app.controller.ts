/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import Alkalmazott from './alkalmazott.entity';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('/alkalmazott/:id')
  async getAlkalmazott(@Param('id') id: number) {
    const alkalmazottRepo = this.dataSource.getRepository(Alkalmazott);
    return await alkalmazottRepo.findOneByOrFail({ id: id });
  }
}
