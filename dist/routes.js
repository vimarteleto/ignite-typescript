"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function CreateCourse(request, response) {
    const course1 = CreateCourseService_1.default.execute({
        name: 'NodeJS',
        educator: 'Vinicius',
        duration: 12
    });
    const course2 = CreateCourseService_1.default.execute({
        name: 'ReactJS',
        educator: 'Marteleto',
    });
    return response.json({ course: course1 });
}
exports.CreateCourse = CreateCourse;
