// accountController.js
// Import account model
Account = require('../../models/accountModel');

// Handle index actions
exports.index = function (req, res) {
    Account.get(function (err, accounts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Accounts retrieved successfully",
            data: accounts
        });
    });
};

// Handle create account actions
exports.new = function (req, res) {
    var account = new Account();
    account.username = req.body.username ? req.body.username : account.username;
    account.password = req.body.password ? req.body.password : account.password;
    account.name = req.body.name;
    account.gender = req.body.gender;
    account.email = req.body.email;
    account.phone = req.body.phone;
// save the account and check for errors
    account.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New account created!',
            data: account
        });
    });
};
// Handle view account info
exports.view = function (req, res) {
    Account.findById(req.params.account_id, function (err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Account details loading..',
            data: account
        });
    });
};

// Handle view account info
exports.view = function (req, res) {
    Account.find({'username': 'huuthien'}, function (err, account) {
        if (err)
            res.send(err);
        res.json({
            message: 'Account details loading..',
            data: account
        });
    });
};

// Handle update account info
exports.update = function (req, res) {
    Account.findById(req.params.account_id, function (err, account) {
        if (err)
            res.send(err);
        account.username = req.body.username ? req.body.username : account.name;
        account.password = req.body.password ? req.body.password : account.password;
        account.name = req.body.name;
        account.gender = req.body.gender;
        account.email = req.body.email;
        account.phone = req.body.phone;
// save the account and check for errors
        account.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Account Info updated',
                data: account
            });
        });
    });
};
// Handle delete account
exports.delete = function (req, res) {
    Account.remove({
        _id: req.params.account_id
    }, function (err, account) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Account deleted'
        });
    });
};

// Handle view account info
exports.getAccountExit = function (req, res) {
    var message = '';
    var isExit = true;
    Account.findOne({'username': req.body.username, 'password' : req.body.password}, function (err, account) {
        if (err)
            res.send(err);
        console.log(account);
        if(!account) {
            message = 'Account not found';
            isExit = false;
        }else {
            message = 'Account found';
        }
        res.json({
            isExit: isExit,
            message: message,
            data: account
        });
    });
};