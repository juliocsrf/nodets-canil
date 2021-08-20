import { Request, Response } from 'express';
import { Banner } from '../types/banner';

export const home = (req: Request, res: Response) => {
    let banner: Banner = {
        title: 'Todos os animais',
        background: 'allanimals.jpg'
    }
    res.render('pages/page', { banner });
}

export const dogs = (req: Request, res: Response) => {
    let banner: Banner = {
        title: 'Cachorros',
        background: 'banner_dog.jpg'
    }
    res.render('pages/page', { banner });
}

export const cats = (req: Request, res: Response) => {
    let banner: Banner = {
        title: 'Gatos',
        background: 'banner_cat.jpg'
    }
    res.render('pages/page', { banner });
}

export const fishes = (req: Request, res: Response) => {
    let banner: Banner = {
        title: 'Peixes',
        background: 'banner_fish.jpg'
    }
    res.render('pages/page', { banner });
}