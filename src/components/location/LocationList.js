import React, { Component } from 'react'
    //import the components we will need
    import LocationCard from './LocationCard'
    import LocationManager from '../../modules/LocationManager'

    class LocationList extends Component {
        //define what this component needs to render
        state = {
            locations: [],
        }

    componentDidMount(){
        // console.log("Location LIST: ComponentDidMount");
        //getAll from LocationManager and hang on to that data; put it in state
        LocationManager.getAll()
        .then((locations) => {
            this.setState({
                locations: locations
            })
        })
    }

    render(){
        // console.log("Location LIST: Render");

        return(
            <div className="container-cards">
                {this.state.locations.map(singleLocation => <LocationCard key={singleLocation.id} locationProp={singleLocation} />)}
            </div>
        )
    }
}

export default LocationList