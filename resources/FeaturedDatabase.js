var FeaturedDatabase = {
    url: "https://boss-bushwalkers.firebaseio.com/walks.json",
    parksArray: [],
    loadParks: function () {
        fetch(this.url)
            .then(res => res.json())
            .then(parsedRes => {
                for (const key in parsedRes) {
                    this.parksArray.push({
                        duration: parsedRes[key].Duration,
                        park: parsedRes[key].Park,
                        startPoint: parsedRes[key].StartPoint,
                        walkName: parsedRes[key].WalkName,
                        mapLink: parsedRes[key].MapURL,
                        id:key
                    })
                }
            })
            .catch(err => console.log(err))
    },
    returnFormatedParks: function () {
        return this.parksArray
    }
}
export default FeaturedDatabase