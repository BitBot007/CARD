import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";

export default class AuthController {
    public async register({ request }: HttpContextContract) {
        await User.create(request.only(['email', 'password', 'username']));
        return this.login.apply(null, arguments);
    }

    public async login({ request, auth }: HttpContextContract) {
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }

    public async logout({ auth, response }: HttpContextContract) {
        await auth.logout();
        return response.status(200);
    }
}
