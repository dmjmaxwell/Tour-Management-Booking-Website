import express from 'express';
import { createTour } from '../controllers/tourContollers.js';

const router = express.Router()

// create new tour

router.post('/', createTour)

export default router;