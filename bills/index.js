import express from 'express';
import create from './services/create';
import remove from './services/delete';
import list from './services/list';
import listById from './services/listById';

const router = express.Router();

//localhost:300/bills GET
router.get('/',list);
//localhost:300/bills GET
router.get('/:id',listById);
//localhost:3000/bills POST
router.post('/',create);
//localhost:3000/bills/:id DELETE
router.delete('/:id',remove);

export default router;