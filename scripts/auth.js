// signup

const signUpForm = document.querySelector('#sign-up-form');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signUpForm["signup-email"].value;
    const password = signUpForm["signup-password"].value;
    const shopName = signUpForm["shop-name"].value;
    const ownerName = signUpForm["shop-owner-name"].value;
    const addressLine1 = signUpForm["address-line-1"].value;
    const addressLine2 = signUpForm["address-line-2"].value;
    const city = signUpForm["city"].value;
    const postalCode = signUpForm["postal-code"].value;
    var address = addressLine1 + "," + addressLine2 + "," + city;


    //sign up shops
    auth.createUserWithEmailAndPassword(email, password).then(() => {

        //register shop
        db.collection("shops").doc(email).collection("Shop Details").add({
            "Shop Name": shopName,
            "Owner's Name": ownerName,
            "Address": address,
            "Postal Code": postalCode,
            "Email": email
        });
        signUpForm.reset();

    });



    signUpForm.reset();
})

//sign out
/*const signout = document.querySelector("#sign-out");
signout.addEventListener('submit', () => {
    auth.signOut().then(() => {
        console.log("sign out succusfully");
    });
})

//sign in
*/