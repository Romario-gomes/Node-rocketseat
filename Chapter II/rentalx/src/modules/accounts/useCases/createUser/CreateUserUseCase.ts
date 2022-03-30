import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRespository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRespository
    ) {}

    async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
        await this.usersRepository.create({
            name, email, password, driver_license
        })
    }
}

export { CreateUserUseCase }