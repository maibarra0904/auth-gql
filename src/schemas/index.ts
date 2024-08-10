export const typeDefs = `#graphql

type Error {
    message: [String]
}

type AuthResponse {
    name: String
    email: String
}

type User {
    success: Boolean!
    errors: Error
    token: String
}

type LoginUser {
    success: Boolean!
    errors: Error
    token: String
    user: AuthResponse
}

type GenericResponse {
    success: Boolean!
    errors: Error
    token: String
}

input CreateUserInput {
    name: String!
    email: String!
    password: String!
}

input LoginUserInput {
    email: String!
    password: String!
}

input ChangePasswordInput {
    oldPassword: String!
    newPassword: String!
    token: String!
}

input ChangeUsernameInput {
    newName: String!
}

type Query {
    getAllUsers: String
}

type Mutation {
    createUser(input: CreateUserInput): User
    loginUser(input: LoginUserInput): LoginUser
    changePassword(input: ChangePasswordInput): GenericResponse
    changeUsername(input: ChangeUsernameInput): GenericResponse
}

`;
