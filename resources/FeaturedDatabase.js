var FeaturedDatabase = {
    url: "https://boss-bushwalkers.firebaseio.com/walks",
    parksArray: [],
    loadParks: function () {
        fetch(this.url)
            .then(res => res.json())
            .then(parsedRes => {
                for (const key in parsedRes) {
                    this.parksArray.push({
                        Duration: parsedRes[key].Duration,
                        Park: parsedRes[key].Park,
                        StartPoint: parsedRes[key].StartPoint,
                        WalkName: parsedRes[key].WalkName,
                        MapURL: parsedRes[key].MapURL,
                        id:key
                    })
                }
            })
            .catch(err => console.log(err))
    },
    returnFormatedParks: function () {

    }
}
export default FeaturedDatabase