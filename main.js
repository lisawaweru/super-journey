import input from 'input';

class App {
    constructor(password) {
        this.password = password;

    }
    async main() {
        while (true) {
            const response = await input.text('What is the password?');
            if (response == this.password) {
                console.log('Correct');
                break;
            } else {
                console.log('Incorrect');
            }
        }
    }
}
const app = new App('My Password');
app.main();
