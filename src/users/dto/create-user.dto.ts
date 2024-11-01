import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, Min, IsEnum, isNumber, isString } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @MinLength(4)
    name: string;

    @IsNumber()
    @Min(18, {message: 'Debe ser mayor de edad'})
    @IsNotEmpty()
    age: number;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @MinLength(4)
    email: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    password: string;


    @IsNotEmpty()
    @MinLength(4)
    gender: Enumerator;
}
