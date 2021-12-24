import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function CreateCourse(request: Request, response: Response) {
    
    const course1 = CreateCourseService.execute({
        name: 'NodeJS',
        educator: 'Vinicius',
        duration: 12
    })

    const course2 = CreateCourseService.execute({
        name: 'ReactJS',
        educator: 'Marteleto',
    })

    return response.json({course: course1})
}