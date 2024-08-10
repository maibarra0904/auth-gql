import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {typeDefs} from "./schemas/index"
import {resolvers} from "./resolvers/index"
import { AuthAPI } from "./sources/users.datasource";


const server = new ApolloServer({ typeDefs, resolvers });

// Inicia el servidor
async function startServer() {
    const {url} = await startStandaloneServer(server, {
        listen: {
            port: 3000
        },
        context: async ({req}) => {
            const {cache} = server

            const token = req.headers.authorization 
            //req.headers["x-auth-token"] //en caso de pasar el Header en GraphQL con un nombre particular en este caso "x-auth-token"


            // if(token) {
            //     cache.set("token", token)
            // }

            return {
                token,
                dataSources: {
                    authAPI: new AuthAPI({cache})
                }
            }
        }
    });
    console.log(`🚀 Servidor Apollo listo en ${url}`);
}

startServer();