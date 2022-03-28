import { ICreateUserDTO } from "../dtos/ICreateUserDTO";


interface IUsersRespository {
    create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRespository };