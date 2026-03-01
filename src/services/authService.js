export const checkCredentials = (email, password) => {
    const validEmail = "usuario@test.com";
    const validPassword = "123";
    return email === validEmail && password === validPassword;
};