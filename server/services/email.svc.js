

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



                    //REINSTATE THIS FUNCTION AFTER TESTING PERIOD IS OVER!!!
//==============================================================================================

// exports.sendEmail = function(toAddress, fromAddress, subject, content){


//         const msg = {
//         to: toAddress,
//         from: 'hlawrence@exceptionalfoundation.org',
//         subject: subject,
//         text: content,
//         };
//         sgMail.send(msg).then(function(success){
//             console.log('email sent successfully');
//         }).catch(function(error){
//             console.log(error);
//             console.log(error.response.body);

//         })



// }

// exports.sendNewPwordEmail = function(userEmail, newPassword, userName){

//         const msg = {
//             to: userEmail,
//             from: 'hlawrence@exceptionalfoundation.org',
//             subject: 'new password',
//             text: 'Your account info has been updated. Your login credentials are: '+ 'login: ' +userName + ' password: '  + newPassword,
//         };
//         sgMail.send(msg).then(function(success){
//             console.log('email sent successfully');
//         }).catch(function(error){
//             console.log(error);
//             console.log(error.response.body);

//         })


// }


//---------------------------------------------------------------------------------------------------




