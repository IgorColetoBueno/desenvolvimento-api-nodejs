import express from 'express';
import create from './services/create';
import remove from './services/delete';

const router = express.Router();

//localhost:3000/bills
router.post('/',create);
//localhost:3000/bills/:id
router.delete('/:id',remove);

export default router;