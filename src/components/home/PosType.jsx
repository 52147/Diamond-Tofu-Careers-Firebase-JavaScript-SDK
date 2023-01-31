import React from 'react'
import { Home } from './homes/Home'
export const PosType = () => {
    const data = [{
                id: "1",
                heading: "123456",
                summary: "123456",
                cover: ""
            },{
                id: "2",
                heading: "123456",
                summary: "123456",
                cover: ""
            },{
                id: "3",
                heading: "123456",
                summary: "123456",
                cover: ""
            }]
  return (
    <>
    <section className = "pos">
        <div className = "grid">
            {data.map((value) => {
                return (
                <div className ="">
                    <div className ="img">
                        <img src={value.cover} alt="" />
                    </div>
                    <div className = "para">
                        <h2>{value.heading}</h2>
                        <p>{value.summary}</p>
                    </div>
                </div>
                )
            })}
        </div>
    </section>
    </>
    
  )
}
