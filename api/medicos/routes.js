var express = require('express');
var router = express.Router();

const MedicosController = require('./controller');

router.get('/', async function(req,res,next){
  //res.send('Listado de medicos');
  let medicos = await MedicosController.getMedicos();
  res.send(medicos);
});


router.get('/:id', async function(req,res,next){
  //res.send('Un inventor: ' + req.params.id);
  let medico = await MedicosController.getMedico(req.params.id);
  res.send(medico);
});

router.post('/', async function(req,res){

  let result = await MedicosController.pushMedico(
      {
          _id:req.body._id,
          nombre: req.body.nombre, 
          apellido: req.body.apellido, 
          matricula: req.body.matricula,
          mail: req.body.mail,
          usuario: req.body.usuario,
          password: req.body.password,
          calendario: req.body.calendario
      }
  )

  res.send(result);
})

router.put('/:id', async function (req,res){
  
  let result = await MedicosController.updateMedico(
      {
        _id:req.body._id,
        nombre: req.body.nombre, 
        apellido: req.body.apellido, 
        matricula: req.body.matricula,
        mail: req.body.mail,
        usuario: req.body.usuario,
        password: req.body.password,
        calendario: req.body.calendario
      }
  )

  res.send(result);

});

router.delete('/:id', async function(req,res){
  let result = await MedicosController.deleteMedico(req.params.id);
  res.send(result);
});

module.exports = router;