import { RegisterUser } from '../models/register-user.interface'

export function createRegisterUser(): RegisterUser {
    const timestamp = Date.now()

    return {
        login: `user${timestamp}`,
        password: 'Password123!',
        firstName: 'Anna',
        lastName: 'Black',
        email: `user${timestamp}@mail.com`
    }
}