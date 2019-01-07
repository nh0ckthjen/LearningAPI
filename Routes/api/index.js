const router = require('express').Router();

// Set default API response

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import account controller
var accountController = require('./accountRouter');
// Contact routes
router.route('/accounts')
    .get(accountController.index)
    .post(accountController.new);

router.route('/accounts/:account_id')
    .get(accountController.view)
    .patch(accountController.update)
    .put(accountController.update)
    .delete(accountController.delete);

router.route('/accounts/getAccountExit/')
    .post(accountController.getAccountExit);

module.exports = router;