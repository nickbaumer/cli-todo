var inquirer = require('inquirer');

var myList = require('./list.json');

function command() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Command?',
                name: 'command',
                choices: [
                    {
                        name: 'help'
                    },
                    {
                        name: 'list'
                    },
                    {
                        name: 'add'
                    },
                    {
                        name: 'quit'
                    },
                    {
                        name: 'delete'
                    }
                ],
                validate: function (answer) {
                    if (answer.length < 1) {
                        return 'You must enter a command.';
                    }
                    return true;
                }
            }
        ])
        .then(answers => {
            if (answers.command == "quit") {
                saveToFile();
                console.log("Thanks for playing!")
            } else if (answers.command == "list") {
                list(myList);
                command();
            } else if (answers.command == "add") {
              add();
            } else if (answers.command == "help") {
                console.log("Help not yet implemented.");
                command();
            } else if (answers.command == "delete") {
                deleteItem();
            } else {
                command();
            }
        });
}

function list(list){
    for (key in list) {
        console.log(key + ":" + list[key]);
    }
}

function add() {
    var questions = [
        {
            type: 'input',
            name: 'key',
            message: 'Item to add'
        },
        {
            type: 'input',
            name: 'value',
            message: 'Quantity'
        }
    ]
    inquirer.prompt(questions).then(answers => {
        key = answers.key
        console.log(key);
        myList[answers.key] = answers.value
        command();
    });
};

function saveToFile() {
    var fs = require('fs');
    fs.writeFile('list.json', JSON.stringify(myList, null, 2), function (err) {
        if (err) return console.log(err);
        console.log('Saved successfully.');
    });
}

function deleteItem() {
    var choices = [];
    for (choice in myList) {
        choices.push({name: choice});
    }
    inquirer
        .prompt([
            {
                type: 'checkbox',
                message: 'Command?',
                name: 'command',
                choices: choices
            }
        ])
        .then(answers => {
            var count = 0;
            for (answer in answers.command) {                   
                delete myList[answers.command[count]];
                count = count + 1;
            }
            command();    
        });
        
}

command();