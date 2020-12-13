//Simranpreet Kaur - 200427339
//Website name: http://localhost:3000/ and http://localhost:4200/

// Set up Public array of global variables.
module.exports =
{
    'db': 'mongodb+srv://admin:admin@cluster0.x7aky.mongodb.net/tasks',
    ids: {
        // For google
        'google': {
            clientID: '898603682684-4k1tad6c1s141gnqv26f4g3qq8hgknls.apps.googleusercontent.com',
            clientSecret: '0p7_CmOfTLnrIWdo9Qx0L2ll',
            callbackURL: 'http://localhost:3000/google/callback'
            //callbackURL: 'https://a-2-hospital-management.herokuapp.com/google/callback'
        },
        //For facebook
        'facebook': {
            clientID: '2241452869319986',
            clientSecret: '51a3f6685988df8dd8e441fa5d1fec5b',
            callbackURL: 'http://localhost:3000/facebook/callback'
            //callbackURL: 'https://a-2-hospital-management.herokuapp.com/facebook/callback'
        }
      
    }, 
        'apiRoot': 'http://localhost:3000',
        'clientRoot': 'http://localhost:4200'

}