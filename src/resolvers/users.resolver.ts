
export const usersQuerys = {
    getAllUsers: async (_, __, ___ ) => {
            

        return "Todos los usuarios";
    },


}

export const usersMutations = {

    createUser: async (_, {input}, {dataSources}) => {

        const {name, email, password} = input

        return dataSources.authAPI.createUser(name, email, password)
    },

    loginUser: async (_, {input}, {dataSources}) => {

        const {email, password} = input

        return dataSources.authAPI.loginUser(email, password)
    },

    //Implementación con el token dentro del body (no recomendado)
    changePassword: async (_, {input}, {dataSources}) => {

        const {oldPassword, newPassword, token} = input

        return dataSources.authAPI.changePassword(oldPassword, newPassword, token)
    },

    //Implementación con el token como parte de los dataSources (óptimo)
    changeUsername: async (_, {input}, {dataSources, token}) => {

        const {newName} = input

        return dataSources.authAPI.changeUsername(newName, token)

    },



    
}