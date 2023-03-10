/* eslint-disable prettier/prettier */
import { Body, Controller, Get, NotFoundException, Param, Post, Query, Render } from '@nestjs/common';
import { DataSource, EntityNotFoundError } from 'typeorm';
import Alkalmazott from './alkalmazott.entity';
import { AppService } from './app.service';
import NewAlkalmazottDto from './newAlkalmazott.dto';

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

  @Post('alkalmazott')
  async newAlkalmazott(@Body() alkalmazott: NewAlkalmazottDto) {
    const alkalmazottRepo = this.dataSource.getRepository(Alkalmazott);
    if (alkalmazott.kezdoDatum) {
      alkalmazott.kezdoDatum = new Date();
    }
    alkalmazottRepo.save(alkalmazott);
    return alkalmazott;
  }

  @Get('/alkalmazott/search')
  async searchAlkalmazott(@Query('email') email: string) {
    const alkalmazottRepo = this.dataSource.getRepository(Alkalmazott)
    return await alkalmazottRepo
    .createQueryBuilder()
    .where('hivatalosEmail LIKE :email', { email: '%' + email + '%' })
    .addOrderBy('kezdoDatum', 'DESC')
    .getMany();

    //return await alkalmazottRepo.findOneByOrFail({ hivatalosEmail: email })
  }

  @Get('/alkalmazott/bersav')
  async getBersav(@Query('min') min: number, @Query('max') max: number) {
    const alkalmazottRepo = this.dataSource.getRepository(Alkalmazott)
    return await alkalmazottRepo
    .createQueryBuilder()
    .where('haviBer BETWEEN :min AND :max', { min: 1000, max: 1000000 })
    .addOrderBy('haviBer', 'ASC')
    .getMany();
  }

  @Get('/alkalmazott/:id')
  async getAlkalmazott(@Param('id') id: number) {
    try {
    const alkalmazottRepo = this.dataSource.getRepository(Alkalmazott);
    return await alkalmazottRepo.findOneByOrFail({ id: id });
    } catch (e) {
      if (e instanceof EntityNotFoundError) {
        throw new NotFoundException ('Az alkalmazott nem létezik')
      } else {
        throw e;
      }
    }
  }
}
