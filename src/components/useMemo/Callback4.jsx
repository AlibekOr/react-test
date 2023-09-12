import React from 'react'

const Callback4 = () => {
    const data = [
        { brand: 'Apple', mark: "IPhone 14 pro max", price: 1500, info: "lorem ipsone [skdjfgojasrd", img: "./img/images.png" },
        {
            brand: 'Apple', mark: "IPhone 13 pro max", price: 1100, info: "lorem ipsone [skdjfgojasrd", img: "./img/karsu.png"
        },
        { brand: 'Apple', mark: "IPhone 12 pro max", price: 1300, info: "lorem ipsone [skdjfgojasrd", img: "./img/logo.png" },
        { brand: 'Apple', mark: "IPhone 11 pro max", price: 1000, info: "lorem ipsone [skdjfgojasrd", img: "./img/logo.png" },
        { brand: 'Apple', mark: "IPhone X pro max", price: 900, info: "lorem ipsone [skdjfgojasrd", img: "./img/karsu.png" },
        { brand: 'Apple', mark: "IPhone 15 pro max", price: 800, info: "lorem ipsone [skdjfgojasrd", img: "./img/images.png" },
    ]
    const filtirCallback = data.filter((e) => e.price > 1050)
    console.log(filtirCallback);
    return (
        <div>
            Callback4
        </div>
    )
}

export default Callback4
