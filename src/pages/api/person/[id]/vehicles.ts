import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

export default async function getAllVehiclesByPersonId(req: NextApiRequest, res: NextApiResponse) {
    const db = await sqlite.open('./mydb.sqlite');
    const allvehicles = await db.all('SELECT * FROM vehicle WHERE ownerId = ?', [req.query.id]);
    res.json(allvehicles);
}