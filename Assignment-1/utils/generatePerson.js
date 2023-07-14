const fakeData = {
    firstName: ['John', 'Jane', 'Michael', 'Emma', 'David', 'Sarah'],
    lastName: ['Smith', 'Johnson', 'Brown', 'Lee', 'Wilson', 'Taylor'],
    emailDomains: ['gmail.com', 'yahoo.com', 'hotmail.com', 'example.com'],
    avatars: [
        'https://example.com/avatar1.png',
        'https://example.com/avatar2.png',
        'https://example.com/avatar3.png',
    ],
    address: ['123 Main St', '456 Elm St', '789 Oak St', '321 Pine St'],
};

const generatePerson = (selectedProperties) => {
    const person = {};

    if (selectedProperties.includes('firstName')) {
        person.firstName =
            fakeData.firstName[Math.floor(Math.random() * fakeData.firstName.length)];
    }

    if (selectedProperties.includes('lastName')) {
        person.lastName =
            fakeData.lastName[Math.floor(Math.random() * fakeData.lastName.length)];
    }

    if (selectedProperties.includes('email')) {
        const randomEmailDomain =
            fakeData.emailDomains[
            Math.floor(Math.random() * fakeData.emailDomains.length)
            ];
        person.email = `${person.firstName.toLowerCase()}.${person.lastName.toLowerCase()}@${randomEmailDomain}`;
    }

    if (selectedProperties.includes('avatar')) {
        person.avatar =
            fakeData.avatars[Math.floor(Math.random() * fakeData.avatars.length)];
    }

    if (selectedProperties.includes('age')) {
        person.age = Math.floor(Math.random() * 60) + 18;
    }

    if (selectedProperties.includes('address')) {
        person.address =
            fakeData.address[Math.floor(Math.random() * fakeData.address.length)];
    }

    return person;
};

module.exports = generatePerson;
