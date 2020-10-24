var FeaturedDatabase = {
    url: "https://boss-bushwalkers.firebaseio.com/walks.json",
    parksArray: [],
    loadParks: function (comp) {
        fetch(this.url)
            .then(res => res.json())
            .then(parsedRes => {
                this.parksArray = []
                for (const key in parsedRes) {
                    if(this.parksArray[key] == undefined){
                    this.parksArray.push({
                        duration: parsedRes[key].Duration,
                        park: parsedRes[key].Park,
                        walkName: parsedRes[key].WalkName,
                        mapURL: parsedRes[key].MapURL,
                        image:parsedRes[key].Image,
                        id:key
                    })
                }
                }
            })
            .then(parsedRes => {
                comp.setState({
                    walksArray : this.parksArray
                })
     
            })
            .catch(err => console.log(err))
    },
    returnFormatedParks: function () {
        return this.parksArray
    }
}
export default FeaturedDatabase