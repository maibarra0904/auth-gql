import { usersMutations, usersQuerys } from "./users.resolver";

export const resolvers = {
    Query: {
        ...usersQuerys
    },

    Mutation: {
        ...usersMutations
    }
};