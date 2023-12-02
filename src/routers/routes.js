const express = require('express');
const router = express.Router();
const {
    member_service,
    add_service,
} = require('../controllers/member_Controller');
const libraryController = require('../controllers/library_controller');
// const feesheadctrl = require("../controllers/fees_controller");
const dashboard_controller = require('../controllers/dashboard_controllers')

router.get('/add_service',add_service);
router.post('/member_service',member_service);

router.post('/library', libraryController.libraryctrl);

router.get('/add-users', (req, res) => {
    res.render('add-users');
});

// router.get('/add_service',(req, res) => {
//     res.render('add_service');
// })


router.get('/dashboard',(req, res)=>
{
    res.render('dashboard')
});

// router.post("/fees_libraray", feesheadctrl)

module.exports = router;