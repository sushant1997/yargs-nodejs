const { argv } = require('yargs')
const yargs = require('yargs')
const { add, remove, list, read, update} = require('./commands')


//add command
yargs.command({
    command: 'add',
    describe: 'Adding to notes',
    handler: function (argv) {
        add(argv.username, argv.email, argv.password, argv.address)
    },
    builder: {
        username: {
            describe: 'The username to be added in a note.',
            
        },
        email: {
            describe: 'The email to be added in a note.',
            demandOption: true,
            unique:true
        },
        password: {
            describe: 'The password to be added in a note.',
            
        },
        address: {
            describe: 'The address to be added in a note.',
            
        }
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'Removing data from list.',
    handler:function(argv){
        remove(argv.email)
    }
})

//list all users
yargs.command({
    command: 'list',
    describe: 'list of data from userDetails.',
    handler:function(){
      list();
    }
})

//read particulat user details
yargs.command({
    command: 'read',
    describe: 'Read a particular data from userDetails.',
    handler:function(argv){
      read(argv.email)
    }
})

//update user
yargs.command({
    command: 'update',
    describe: 'Update a particular data from userDetails.',
    handler:function(argv){
      update( argv.username, argv.email, argv.address)
    }
})



console.log(yargs.parse())
