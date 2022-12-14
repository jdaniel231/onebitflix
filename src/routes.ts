import express from 'express';
import { authController } from './controllers/authController';
import { categoriesController } from './controllers/categoriesController';
import { coursesController } from './controllers/coursesController';
import { episodesController } from './controllers/episodesController';
import { favoritesController } from './controllers/favoritesController';
import { likesController } from './controllers/likesController';
import { ensureAuth, ensureAuthViaQuery } from './middlewares/auth';


const router = express.Router();

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/categories',ensureAuth, categoriesController.index)
router.get('/categories/:id',ensureAuth, categoriesController.show)

router.get('/courses/featured',ensureAuth , coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/search',ensureAuth , coursesController.search)
router.get('/courses/popular',ensureAuth , coursesController.popular)
router.get('/courses/:id',ensureAuth , coursesController.show)

router.get('/episodes/stream', ensureAuthViaQuery, episodesController.stream)

router.post('/favorites', ensureAuth, favoritesController.save)
router.get('/favorites',ensureAuth, favoritesController.index)
router.delete('/favorites/:id',ensureAuth, favoritesController.delete)

router.post('/likes', ensureAuth, likesController.save)
router.delete('/likes/:id', ensureAuth, likesController.delete)

export {router}