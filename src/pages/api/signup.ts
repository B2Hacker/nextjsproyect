import { hash } from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

export default async function signup(req: NextApiRequest, res: NextApiResponse) {
    const db = await sqlite.open('./mydb.sqlite');

    if (req.method === 'POST') {
        hash(req.body.password, 10, async function(err, hash) {

        const statement = await db.prepare('INSERT INTO person (name, email, password) values (?, ?, ?)');
        const result = await statement.run(req.body.name, req.body.email, hash);
        result.finalize();

        const person = await db.all('SELECT * FROM person');
        res.json(person);
        });
    }

    else {
        res.status(405).json({message: 'We only support POST'});
    }

    
}
