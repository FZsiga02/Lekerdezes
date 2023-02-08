/* eslint-disable prettier/prettier */

import { Contains, IsDate, isDate, IsDateString, isDateString, IsDefined, IsEmail, IsInt, IsOptional, isPositive, Min } from "class-validator";

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

  @IsDefined({ message: 'A név megadása kötelező' })
  @Contains(' ', { message: 'A névnek tartalmaznia kell egy szóközt' })
  teljesNev: string;

  @IsOptional()
  @Min(0, { message: 'A beosztottak száma nem lehet negatív' })
  beosztottakSzama: number;
}

