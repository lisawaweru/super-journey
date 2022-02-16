import input from 'input';

class App {
    constructor(password) {
        this.password = password;

    }
    async main() {
        const response = await input.text('What is the password?');
        if (response == this.password) {
            console.log('Correct');

        } else {
            console.log('Incorrect');
        }
    }
}
const app = new App('My Password');
app.main();
