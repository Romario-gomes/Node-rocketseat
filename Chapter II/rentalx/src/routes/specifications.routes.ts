import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
    
});

export { specificationsRoutes }