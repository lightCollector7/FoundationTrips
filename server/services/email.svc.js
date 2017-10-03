

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmail = function(toAddress, fromAddress, subject, content){


        const msg = {
        to: toAddress,
        from: fromAddress,
        subject: subject,
        text: content,
        };
        sgMail.send(msg).then(function(success){
            console.log('email sent successfully');
        }).catch(function(error){
            console.log(error);
            console.log(error.response.body);

        })



}

                    //REINSTATE THIS FUNCTION AFTER TESTING PERIOD IS OVER!!!
//==============================================================================================

// exports.sendNewPwordEmail = function(userEmail, newPassword){

//         const msg = {
//             to: userEmail,
//             from: 'hlawrence@exceptionalfoundation.org',
//             subject: 'new password',
//             text: 'Your account info has been updated. Your login credentials are: '+ 'login: ' +userEmail + ' password: '  + newPassword,
//         };
//         sgMail.send(msg).then(function(success){
//             console.log('email sent successfully');
//         }).catch(function(error){
//             console.log(error);
//             console.log(error.response.body);

//         })


// }


//---------------------------------------------------------------------------------------------------




