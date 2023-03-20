import { Request } from "express";

// Models Interfaces
export interface IQuiz {
    username: string,
    title: string,
    password?: string,
    questions: [[string]]
};

export interface ISubmission {
    quizID: string,
    grade?: number,
    name?: string,
    questions: [[string]]
}

export interface IUser {
    name: string,
    username: string,
    password: string
}

// Used in other areas


export interface IUserPass {
    username: string,
    password: string
}

// Check for user
export interface IUserObject extends IUser {
    createdAt: Date;
    updatedAt: Date;
}

export interface IPayload{
    username: string
}


export interface IRequestWithLoad extends Request {
    payload: IPayload
}

