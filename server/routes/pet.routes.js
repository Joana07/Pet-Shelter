const PetController = require('../controllers/pet.controller')

module.exports = (app) => {
    
    
    
    app.post("/api/pets", PetController.addPet)
    app.get("/api/pets", PetController.allPets)
    app.get("/api/pet/:id", PetController.onePet)  
    app.put("/api/pet/:id", PetController.updatePet)
    app.delete("/api/pet/:id", PetController.deletePet)
}
