import { inject } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRespository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRespository
    ) {}

    async execute({ name, username, email, password, driver_license }: ICreateUserDTO): Promise<void> {
        await this.usersRepository.create({
            name, username, email, password, driver_license
        })
    }
}

export { CreateUserUseCase }