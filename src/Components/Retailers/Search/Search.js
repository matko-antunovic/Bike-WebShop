import React, { Component } from 'react';
import './Search.scss';
import Button from "../../Reusable/Buttton/Button"

class SearchRetailer extends Component {

    render() {
        return (
            <div className='search-retailer'>

                <form className='search-form'>
                    <div className='search-form-left'>

                        <h1 className='search-title'>FIND A RETAILER</h1>
                        <div className='search-input'>
                            <input type='text' 
                                name='address' 
                                className='search-input-box'
                                placeholder='Enter Address or Zip'>
                            </input>

                            <div className='search-milage'>
                                <select className='search-milage-options'>
                                    <option value='25'>25</option>
                                    <option value='50'>50</option>
                                    <option value='100'>100</option>
                                    <option value='200'>200</option>
                                </select>
                                <p className='search-miles'>MILES</p>
                            </div>
                        </div> 

                        <Button width="30rem" bck="rgb(211, 46, 46)" color="#fff" size="1.5rem" padding="1.5rem" text="SEARCH" />
                        
                    </div>



                    <div className='search-form-right'>
                        <h2 className='search-form-title'>FILTER STORES BY</h2>
                        <div className='search-form-container'>

                            <div className='search-form-filters'>
                                <label className='search-form-filter'>
                                    <input type='checkbox' name='conceptStore' value='conceptStore'/>Concept Store
                                </label>
                                <label className='search-form-filter'>
                                    <input type='checkbox' name='s-worksRetailer' value='s-worksRetailer'/>S-Works Retailer
                                </label>
                                <label className='search-form-filter'>
                                    <input type='checkbox' name='eliteShop' value='eliteShop'/>Elite Shop
                                </label>
                                <label className='search-form-filter'>
                                    <input type='checkbox' name='rovalWheelRetailer' value='rovalWheelRetailer'/>Roval Wheel Retailer
                                </label>
                                <label className='search-form-filter'>
                                    <input type='checkbox' name='specializedTestCenter' value='specializedTestCenter'/>Specialized Test Center
                                </label>
                            </div>

                            <div className='search-form-column'>
                                <label className='search-form-filter'>
                                    <input type='checkbox' name='e-mountainBikeRetailer' value='e-mountainBikeRetailer'/>E-Mountain Bike Retailer
                                </label>
                                <label className='search-form-filter'>
                                    <input type='checkbox' name='urbanE-bikeRetailer' value='urbanE-bikeRetailer'/>Urban
                                </label>
                                <label className='search-form-filter'>
                                    <input type='checkbox' name='retülFit' value='retülFit'/>Retül Fit
                                </label>
                                <label className='search-form-filter'>
                                    <input type='checkbox' name='retülMatch' value='retülMatch'/>Retül Match
                                </label>
                                
                                
                                
                                
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchRetailer;