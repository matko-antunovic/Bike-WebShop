import React, { Component } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap  } from 'react-google-maps';
import "./Retailer.scss"
import SearchRetailer from "../../Components/Retailers/Search/Search";
import Locations from "../../Components/Retailers/Locations/Locations";
import STORE_DATA from "../../Assets/data/StoreData"

function Map(){
    return( 
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 37.129269, lng: -121.656410}}
        />
    )
}

    const WrapperMap = withScriptjs(withGoogleMap(Map));


class Retailer extends Component {

    state={
        stores:STORE_DATA
    }
    
    render() {
        const{stores}=this.state;
        return (
            <div className="retailer">
                <div className="retailer-map">
                    <div className="map">
                    <WrapperMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBVyTnAXJ7r-zkw-TKJgDUutEasR2Lbc5k`}
                        loadingElement={<div style={{height: "100%"}} />}
                        containerElement={<div style={{height: "100%"}} />}
                        mapElement={<div style={{height: "100%"}} />}
                        />
                    </div>

                </div>

                <div className="search-retailer-main">
                <SearchRetailer/>
                </div>

                <div className="locations-main">
                    {stores.map(({id,number,name,address1,
                    address2,address3,storeUrl})=>{
                        return(
                            <Locations
                             key={id}
                             number={number}
                             name={name}
                             address1={address1}
                             address2={address2}
                             address3={address3}
                             storeUrl={storeUrl}
                             />
                        )
                    })}
                    
                </div>


                </div>    
        )
    }
}
export default Retailer;