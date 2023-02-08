/* eslint-disable prettier/prettier */

import { IsDate, isDate, IsDateString, isDateString, IsDefined, IsEmail, IsInt, IsOptional, isPositive, Min } from "class-validator";

export default class NewAlkalmazottDto {
  @IsOptional()
  @IsDateString()
  kezdoDatum: Date|string;

  @IsDefined({ message: 'A havibér megadása kötelező' })
  @Min(0, { message: 'A havibérnek legalább 0-nak kell lennie' })
  @IsInt({ message: 'A havibérnek egész számnak kell lennie' })
  haviBer: number;
  @IsEmail()
  hivatalosEmail: string;
}

