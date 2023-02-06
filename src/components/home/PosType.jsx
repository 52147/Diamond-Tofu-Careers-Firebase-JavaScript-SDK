import React from 'react'

export const PosType = () => {
  const data = [{
    id: "1",
    heading: "123456",
    summary: "123456",
    cover: "image.png" // image for card
  }, {
    id: "2",
    heading: "123456",
    summary: "123456",
    cover: "image.png"
  }, {
    id: "3",
    heading: "123456",
    summary: "123456",
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
