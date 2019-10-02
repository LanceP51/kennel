import React, { Component } from 'react'
    //import the components we will need
    import OwnerCard from './OwnerCard'
    import OwnerManager from '../../modules/OwnerManager'

    class OwnerList extends Component {
        //define what this component needs to render
        state = {
            owners: [],
        };

        deleteOwner = (id)=>{
            OwnerManager.delete(id)
            .then(OwnerManager.getAll)
            .then(parsedOwners => (
                this.setState({
                    owners:parsedOwners
                })
            ))
        }

    componentDidMount(){
        // console.log("Owner LIST: ComponentDidMount");
        //getAll from OwnerManager and hang on to that data; put it in state
        OwnerManager.getAll()
        .then((owners) => {
            this.setState({
                owners: owners
            })
        })
    }

    render(){
        // console.log("Owner LIST: Render");

        return(<>
<section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/owners/new");
            }}
          >
            New Owner
          </button>
        </section>
            <div className="container-cards">
                {this.state.owners.map(singleOwner => <OwnerCard deleteOwnerProp={this.deleteOwner} key={singleOwner.id} ownerProp={singleOwner} />)}
            </div>
            </>
        )
    }
}

export default OwnerList