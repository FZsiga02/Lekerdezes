/* eslint-disable prettier/prettier */

import { IsEmail } from "class-validator";

export default class NewAlkalmazottDto {
  kezdoDatum: Date;
  haviBer: number;
  @IsEmail()
  hivatalosEmail: string;
}

