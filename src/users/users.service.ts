import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { isEnum, IsEnum } from 'class-validator';

@Injectable()
export class UsersService {

  private user: UserEntity[] = []
  create(createUserDto: CreateUserDto) {
    try {
      const user: UserEntity = {
        id: 1,
        ...createUserDto,

        isActive: true,
        photo: '',
        role: undefined
      }
  
      if( !user ){
        throw new BadRequestException("USer not create!");
      }
  
      this.user.push(user); 
      return user
    } catch (error) {
      throw new InternalServerErrorException("No que ocurrio");
    }
  }

  async findAll(): Promise<UserEntity[]> {
    try {
      if( this.user.length === 0 ){
        throw new NotFoundException("Users not found!");
      }
      return this.user;
    } catch (error) {
      throw new InternalServerErrorException("checks logs");
    }
  }

  async findOne(id: number) {
    try{

      const user = this.user.find(user => user.id === id)

      if(!user) throw new NotFoundException('user not found')

      return user;  

    }catch(error){
      throw new InternalServerErrorException('checks logs')
    }
    
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try { 
      let userDB = this.user.find(user => user.id === id)
      
      this.user = this.user.map(user => {
        if(user.id === id){
          userDB = {
            ...userDB,
            ...updateUserDto
          }
          return userDB
        }
        return user;
      })
    }
    catch (error) {
      throw new InternalServerErrorException('checks logs')
    }
  }

  async delete(id: number) {
    try {
      const userDB = this.user.find(user => user.id === id)
      if(!userDB) throw new NotFoundException('user not found')
      this.user = this.user.filter(user => user.id !== id)
    } catch (error) {
      throw new InternalServerErrorException('checks logs')
    }
  }

}
