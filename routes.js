const router = require('express').Router();

router.get('/login', (req, res)=> {
    res.send('login user')
});

router.get('/signup', (req, res)=> {
    res.send('signup user')
})

module.exports = router;