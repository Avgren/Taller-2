import { gender } from "src/common/enums/user-gender";
import { Role } from "src/common/enums/user-role";
export class UserEntity {
    id:number;
    name: string;
    age: number;
    photo: string;
    email: string;
    password: string;
    role: Enumerator;
    gender: Enumerator;
    isActive: boolean;
}
