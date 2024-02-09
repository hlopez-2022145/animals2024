'use strict'

import express from 'express'
import { addAnimal, update, deleteAni } from './animal.controller.js'

const api =  express.Router()

api.post('/addAnimal', addAnimal)
api.post('/update/:id', update)
api.delete('/deleteAni/:id', deleteAni)

export default api