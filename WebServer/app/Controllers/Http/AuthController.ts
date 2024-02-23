import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";
import SignInValidator from 'App/Validators/SignInValidator';
import SignUpValidator from 'App/Validators/SignUpValidator';

export default class AuthController {
    public async signUp({ request, response, auth }: HttpContextContract) {
        let payload;
        try {
            payload = await request.validate(SignUpValidator)
        } catch (e) {
            return response.badRequest(e.messages)
        }

        const { email, username, password } = payload
        await User.create(payload)
        await auth.attempt(email ?? username, password);
        return await this.auth.apply(this, arguments);
        
    }

    public async signIn({ request, response, auth }: HttpContextContract) {
        let payload;
        try {
            payload = await request.validate(SignInValidator)
        } catch (e) {
            return response.badRequest(e.messages)
        }

        try {
            const { usernameEmail, password } = payload
            await auth.attempt(usernameEmail, password);
        } catch (e) {
            return response.badRequest(e.messages)
        }

        return await this.auth.apply(this, arguments);
    }

    public async logout({ auth, response }: HttpContextContract) {
        try {
            await auth.logout();
        } catch (e) {
            return response.status(500);
        }
        return response.status(200);
    }

    public async auth({ auth }: HttpContextContract) {
        return auth?.user?.toJSON();
    }
}
