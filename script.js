fetch(`./data.json`).then(request => {
    return request.json()
}).then(data => {
    const totalTitle = document.getElementsByClassName(`title`)
    const totalCurrent = document.getElementsByClassName(`current`)
    const totalPrevious = document.getElementsByClassName(`previous`)
    const daily = document.getElementById(`day`)
    const weekly = document.getElementById(`week`)
    const monthly = document.getElementById(`month`)

    data.forEach((obj, index) => {
        totalTitle[index].innerHTML = obj.title
        totalCurrent[index].innerHTML = `${obj.timeframes.daily.current}hrs`
        totalPrevious[index].innerHTML = `Last Week - ${obj.timeframes.daily.previous}hrs`
    })

    daily.addEventListener(`click`, () => {
        data.forEach((obj, index) => {
            totalCurrent[index].innerHTML = `${obj.timeframes.daily.current}hrs`
            totalPrevious[index].innerHTML = `Last Week - ${obj.timeframes.daily.previous}hrs`
        })
    })

    weekly.addEventListener(`click`, () => {
        data.forEach((obj, index) => {
            totalCurrent[index].innerHTML = `${obj.timeframes.weekly.current}hrs`
            totalPrevious[index].innerHTML = `Last Week - ${obj.timeframes.weekly.previous}hrs`
        })
    })

    monthly.addEventListener(`click`, () => {
        data.forEach((obj, index) => {
            totalCurrent[index].innerHTML = `${obj.timeframes.monthly.current}hrs`
            totalPrevious[index].innerHTML = `Last Week - ${obj.timeframes.monthly.previous}hrs`
        })
    })
})

