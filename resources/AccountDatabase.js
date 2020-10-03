var AccountDatabase = {
    url: "https://boss-bushwalkers.firebaseio.com/users.json",
    selectedKey: undefined,
    userArray: [],
    setAccount: function (username, password) {
        fetch(this.url)
            .then(res => res.json())
            .then(parsedRes => { 
                for (const key in parsedRes) {
                    this.userArray.push({
                        Name: parsedRes[key].Name,
                        Password: parsedRes[key].Password,
                        id: key
                    })
                    if (parsedRes[key].Name === username && parsedRes[key].Password === password) {
                        this.selectedKey = key;
                    }
                }
            })
            .catch(err => console.log(err))
    },
    getAccountInfo: function () {
        if (this.selectedKey != undefined) {
            return this.selectedKey
        }
        return 404
    },
    createAccount: function (username, email, emergancyAlert, phone, password) {
        fetch(this.url, {
            method: 'POST',
            body: JSON.stringify({
                Email: email,
                EmergancyAlert: emergancyAlert,
                Name: username,
                Password: password,
                Phone: phone,
            })
            
        })
            .catch(err => console.log(err))
    },
    changeAccountInfo: function (varToChange, change) {
        /*TODO*/
        return false;
    }

};

export default AccountDatabase;