import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response){

    CreateCourseService.execute({
        name: "Nodejs",
        educator: "Dani",
        duration: 10
    });

    CreateCourseService.execute({
        name: "Nodejs",
        educator: "Diego"
    });

    return response.send();
}