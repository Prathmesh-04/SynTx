import { createClient } from "redis";

export const redis = createClient({
    url: process.env.REDIS_URL
})

redis.on("error" , err => console.log("Error while connecting to redis"))

try{
    await redis.connect()
    console.log("Connected to Redis")
}catch(e){
    console.log("not able to connect to redis")
}
