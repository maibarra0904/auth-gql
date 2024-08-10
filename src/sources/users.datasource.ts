import { RESTDataSource } from "@apollo/datasource-rest"

export class AuthAPI extends RESTDataSource {

    override baseURL = "http://localhost:4000/"

    async createUser(name: string, email:string, password: string) {

        const user = await this.post(`/api/auth/register`, {
            body: {
                name,
                email,
                password
            }
        })

        console.log(user)

        return user
    }

    async loginUser(email:string, password: string) {

        const user = await this.post(`/api/auth/login`, {
            body: {
                email,
                password
            }
        })

        return user
    }

    async changePassword(oldPassword:string, newPassword: string, token: string) {

        const user = await this.patch(`/api/auth/change-password`, {
            body: {
                oldPassword,
                newPassword
            },
            headers: {
                Authorization: token
            }
        })

        return user
    }

    async changeUsername(newName: string, token: string) {

        const user = await this.patch(`/api/auth/change-username`, {
            body: {
                newName
            },
            headers: {
                Authorization: token
            }
        })

        return user
    }

    
}