var AccountDatabase = {
    url: "https://boss-bushwalkers.firebaseio.com/users.json",
    selectedKey: undefined,
    userArray: [],
    setAccount: function (username, password) {
                for (const key in this.userArray) {
                    if (this.userArray[key].Name === username && this.userArray[key].Password === password) {
                        this.selectedKey = key;
                        return true
                    }
                }
                return false
    },
    getAccountInfo: function () {
        if (this.selectedKey != undefined) {
            const acc = this.userArray[this.selectedKey]
            return acc
        }
        console.error("Warning! No Account Found. Please Ensure that this function can only be called afer AccountDatabase.setAccount()")
    },
    getExistingAccount: function (username) {
        for (const key in this.userArray){
            if(this.userArray[key].Name === username){
                return true
            }
            else return false
        }
    },
    createAccount: function (username, email, emergancyAlert, phone, password) {
        console.log(1)
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
    },
    loadAccounts: function (){
        fetch(this.url)
        .then(res => res.json())
        .then(parsedRes => { 
            for (const key in parsedRes) {
                this.userArray.push({
                    Name: parsedRes[key].Name,
                    Password: parsedRes[key].Password,
                    Email: parsedRes[key].Email,
                    Phone: parsedRes[key].Phone,
                    EmergancyAlert: parsedRes[key].EmergancyAlert 
                })
            }
        })
        .catch(err => console.log(err))
    }

};

export default AccountDatabase;