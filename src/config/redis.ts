import { createClient } from 'redis';

export default new class Redis {
    public client: any;
    constructor() {
        console.log("Redis constructor");
        this.init();
    }
    init = async () => {
        this.client = createClient({
            username: 'default', // use your Redis user. More info https://redis.io/docs/management/security/acl/
            password: 'Vikas#110$$', // use your password here
            socket: {
                host: '43.231.127.135',
                port: 6379,

            }
        });
        this.client.on('error', (err: any) => console.log('Redis Client Error', err));

        await this.client.connect();
        console.log("Connect");
    }

    setData = async (key: any, value: any) => {
        return await this.client.set(key, value);

    }
    getData = async (key: any) => {
        return await this.client.get(key);

    }
    hGetAll = async (key: any) => {
        console.log("sdc",key);
        return await this.client.hGetAll(key);

    }

    // var r = await Redis.getData("foo");
    // var r = await Redis.setData("foo", "changes");
    // var r = await Redis.getData("foo");
    // console.log(r);

    // const res1 = await Redis.client.lPush('users', 'bike:1');
    // await Redis.client.lPush('users', 'bike:2');

    // const fieldsAdded = await Redis.client.hSet(
    //     'bike:1',
    //     {
    //         model: 'Deimos',
    //         brand: 'Ergonom',
    //         type: 'Enduro bikes',
    //         price: 4972,
    //     },
    // )

    // const rr = await Redis.client.hGetAll("bike:1");
    // console.log("rr", rr.model);
}();