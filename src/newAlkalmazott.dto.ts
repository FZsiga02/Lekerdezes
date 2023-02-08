/* eslint-disable prettier/prettier */

import { IsDate, isDate, IsDateString, isDateString, IsEmail, isPositive, Min } from "class-validator";

export default class NewAlkalmazottDto {
  @IsDateString()
  kezdoDatum: Date;
  @Min(0)
  haviBer: number;
  @IsEmail()
  hivatalosEmail: string;
}

