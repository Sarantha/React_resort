import React, { Component } from 'react'
import Title from './Title';
import { IoMdWine, IoMdBoat, IoMdBed, IoMdBicycle} from "react-icons/io";;
export default class Services extends Component {
    state={
        services:[
            {
                icons:<IoMdWine/>,
                title:"Free Cocktail",
                info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                icons:<IoMdBoat/>,
                title:"Boat Rides",
                info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                icons:<IoMdBed/>,
                title:"Comfortable Rooms",
                info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                icons:<IoMdBicycle/>,
                title:"Bicycle Rides",
                info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
            
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icons}</span>
                            <h5>{item.title}</h5>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
