const generatePassword = require("generate-password")

function randomPassword(){
    const password = generatePassword.generate({
        length: 8,
        numbers: true,
        uppercase: true,
        lowercase: true,
        symbols: true,  
    })

    console.log(`A random password: ${password}`)
}

randomPassword()