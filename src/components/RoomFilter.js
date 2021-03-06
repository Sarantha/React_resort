import React from 'react'
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';
//get all unique values
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handelChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    //get unique types
    let types = getUnique(rooms,'type');
    //add all
    types = ["all",...types];
    //map to jsx
    types = types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    });
    let people = getUnique(rooms,'capacity');
    people = people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })
    return (
       <section className="filter-container">
           <Title title="Search Rooms"></Title>
           <form className="filter-form">
                {/*select type*/}
                    <div class="form-group">
                        <label htmlFor="type">Room Type</label>
                        <select name="type" id="type" value={type} className="form-control" onChange={handelChange}>{types}</select>
                    </div>
                {/*end select type*/}
                {/*select guests*/}
                    <div class="form-group">
                        <label htmlFor="type">Guests</label>
                        <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handelChange}>{people}</select>
                    </div>
                {/*end select guests*/}
                {/*select price range*/}
                    <div class="form-group">
                        <label htmlFor="price">Room Price ${price}</label>
                        <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handelChange} className="form-control"/>
                    </div>
                {/*end select price range*/}
                {/*select size*/}
                    <div className="form-group">
                        <label htmlFor="size">Room Size</label>
                        <div className="form-group">
                            <input type="number" name="minSize" id="size" value={minSize} onChange={handelChange} className="size-input" />
                            <input type="number" name="maxSize" id="size" value={maxSize} onChange={handelChange} className="size-input" />
                        </div>
                    </div>
                {/*end select size*/}
                {/*Extra*/}
                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handelChange}/> 
                            <label htmlFor="breakfast">Breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handelChange}/> 
                            <label htmlFor="pets">pets</label>
                        </div>
                    </div>
                {/*End Extra*/}
           </form>
       </section>
    )
}
