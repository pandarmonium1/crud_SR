import {Request, Response} from 'express';

class IndexController {

    public index (req: Request, res: Response){
        res.json({text: 'API is otro lado'}) 
    } 
}

export const indexController = new IndexController()