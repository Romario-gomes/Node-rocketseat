import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRespository } from "../IUsersRepository";


class UsersRepository implements IUsersRespository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ name, email, driver_license, password }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name, email, driver_license, password
        });
    
        await this.repository.save(user);
    }

}

export { UsersRepository };