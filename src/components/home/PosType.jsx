import React from 'react'

export const PosType = () => {
  const data = [{
    id: "1",
    heading: "Software Engineer",
    summary: "An IT professional who designs, develops and maintains computer software at a company. They use their creativity and technical skills.",
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
  return (
  <>
    <section className = "container">
      <div className = "card-group">
        {
          data.map((value) => {
            return (
              <div className ="card">
                <img src={value.cover} alt="" />
                <div className = "para">
                  <h2>{value.heading}</h2>
                  <p>{value.summary}</p>
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
