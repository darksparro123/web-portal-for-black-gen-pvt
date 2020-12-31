const signIn = document.querySelector("#sign-in");
signIn.addEventListener('submit', e => {
    e.preventDefault();
    const email = signIn["sign-in-email"].value;
    const password = signIn["sign-in-password"].value;

    // console.log(email + password);

    auth.signInWithEmailAndPassword(email, password).then(e => {
        console.log(e);

    });
});