const functions = {

    // function that add two numbers
    add: (num1, num2) => num1 + num2,

    // function that checks if null
    isNull: () => null,

    // function that create an object "user" with first name and last name
    createUser: () => {
        const user = { firstName: 'Marco' };
        user['lastName'] = 'Polo';
        return user;
    }
};

// export function to be able for test file
module.exports = functions;