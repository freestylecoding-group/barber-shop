import { createPool } from 'mysql2/promise'

export const pool = createPool({
        host: process.env.DB_HOST || 'containers-us-west-159.railway.app',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'NirugrQ5Vu8DemrjgXgM',
        database: process.env.DB_DATABASE || 'barber-shop-DJMStudio',
        port: process.env.DB_PORT || 5738
        // host: 'bpqgnofmrvqt8fqa0xqn-mysql.services.clever-cloud.com',
        // user: 'us4tlzhqmgdihvft',
        // password: 'ToJh5NtsYahLpFNzcUbA',
        // database: 'bpqgnofmrvqt8fqa0xqn'
});
