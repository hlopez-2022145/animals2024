'use strict'

import Animal from './animal.model.js'

export const addAnimal = async(req, res)=>{
    try{
        let data = req.body
        let animal = new Animal(data)
        await animal.save()
        return res.send({message: 'Aggregate successfully'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error aggregate animal', err})
    }
}

//UPDATE
export const update = async(req, res)=>{
    try{
        let { id } = req.params
        let data =  req.body
        
        let updateAnimal = await Animal.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )

        if(!updateAnimal) return res.status(401).send({message: 'Animal not found and not updated'})
        return res.send({message: 'Updated animal', updateAnimal})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error updating animal'})
    }
}

//DELETE
export const deleteAni = async(req, res)=>{
    try{
        let { id } = req.params
        let deleteAnimal = await Animal.findOneAndDelete({_id: id})
        if(!deleteAnimal) return res.status(404).send({message: 'Animal not found and not deleted'})
        return res.send({message: `animal with name ${deleteAnimal.name} deleted seccessfully`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting animal'})
    }
}

//BUSCAR
export const searchAni = async(req, res)=>{
   let data = await Animal.find()
   if(!data.length){
        return res.send({message: 'error' })
   }
}
