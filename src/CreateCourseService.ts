
interface Course {
    name: string
    duration?: number // parametro opcional
    educator: string
}


class CreateCourseService {
    
    // duration com valor default
    execute({ duration = 10, educator, name }: Course) {
        console.log(name, duration, educator)
        return {
            duration,
            educator,
            name
        }
    }
}

export default new CreateCourseService()