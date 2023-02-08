import React, {useState} from 'react'

export const PosType = () => {
  const [style, setStyle] = useState({display: "none"});

  const data = [{
    id: "1",
    heading: "Software Engineer",
    summary: "An IT professional who designs, develops and maintains computer software at a company. They use their creativity and technical skills to provide pratical solutions.",
    cover: "image.png" // image for card
  }, {
    id: "2",
    heading: "Data Scientist",
    summary:"An analytics professional who is responsible for collecting, analyzing and interpreting data to help drive decision-making in an organization.",
    cover: "image.png"
  }, {
    id: "3",
    heading: "Project Manager",
    summary: "Accountable for planning and allocating resources, preparing budgets, monitoring progress, and keeping stakeholders informed throughout the project lifecycle.",
    cover: "image.png"
  }]

  // 不要用沒有用div， className 直接寫在 tag 上
  // 每一個button都是inline block
  return (
  <>
    <section className = "container">
      <div className = "card-group">
        {
          data.map((value) => {
            return (
              <div className ="card"
              onMouseEnter = {e => {setStyle({display: "inline-block"});}}
                  onMouseLeave = {e => {setStyle({display: "none"});}}>
                <img src={value.cover} alt=""/>

                
                <div className = "para">
                  <h2>{value.heading}</h2>
                  <p>{value.summary}</p>
                </div>
                <div className = "btn-group">
                  <button style={style}>Click</button>
                  <button style={style}>Click</button>
              </div>
              </div>
            )
          })
        }
      </div>
    </section>
  </>
  )
}
