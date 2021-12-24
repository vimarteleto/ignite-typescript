"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    // duration com valor default
    execute({ duration = 10, educator, name }) {
        console.log(name, duration, educator);
        return {
            duration,
            educator,
            name
        };
    }
}
exports.default = new CreateCourseService();
