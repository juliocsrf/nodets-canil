import { Request, Response } from 'express';
import { Banner } from '../types/banner';
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/Pet';

export const home = (req: Request, res: Response) => {
    let banner: Banner = {
        title: 'Todos os animais',
        background: 'allanimals.jpg'
    }

    let list = Pet.getAll();
    res.render('pages/page', { menu: createMenuObject('all'), banner, list });
}

export const dogs = (req: Request, res: Response) => {
    let banner: Banner = {
        title: 'Cachorros',
        background: 'banner_dog.jpg'
    }
    let list = Pet.getFromType('dog');
    res.render('pages/page', { menu: createMenuObject('dog'), banner, list });
}

export const cats = (req: Request, res: Response) => {
    let banner: Banner = {
        title: 'Gatos',
        background: 'banner_cat.jpg'
    }
    let list = Pet.getFromType('cat');
    res.render('pages/page', {  menu: createMenuObject('cat'), banner, list });
}

export const fishes = (req: Request, res: Response) => {
    let banner: Banner = {
        title: 'Peixes',
        background: 'banner_fish.jpg'
    }
    let list = Pet.getFromType('fish');
    res.render('pages/page', { menu: createMenuObject('fish'), banner, list });
}