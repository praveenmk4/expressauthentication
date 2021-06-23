const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';
module.exports = (req,res,next)=>{
	try{
		const token = req.headers.authorization.split(' ')[1];
		/*console.log("token::::::::::::",token);
		const decodeToken =  jwt.verify(token,"SECRET");
		console.log("decodeToken::::::::::::",decodeToken);

		const userId =  decodeToken.userId;
		console.log("User ID::::::::::::",userId);*/
		 jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
	}catch{
		res.status(401).json({
			error:new Error('Invalid Request')
		});
	}
}

//https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.nOjh2sT9T1KP2rimcdN3_PI4W0G2KtTbvkg0Zt_dqp0