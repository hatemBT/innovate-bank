module.exports = function (app) {
    app.get('/endpoints/auth', function (req, res) {
        if (req.session.user) {
            console.log(req.session);
          //  let log=req.session.user.email;
           // let pass= req.session.user.password;
           // res.send({'uuid': req.session.user.uuid});
           res.send({'uuid': req.session.user});
         // res.send({'log': log , 'pass': pass});
        } else {
            res.status(500).send({'err': 'unauthorized'});
        }
    });
};
