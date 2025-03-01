document.addEventListener('DOMContentLoaded', async function () {

    let { economy, skyblock } = await fetch('http://localhost:9999/data').then(res => res.json());

    var eco = new Chart('ecochart', {
        type: 'line',
        data: {
            labels: economy.x,
            datasets: [{
                label: 'Economy Players Online',
                data: economy.y,
                backgroundColor: 'rgba(0, 255, 0, 0.4)',
                borderColor: 'rgba(0, 255, 0, 1)',

            }]
        },
        options: {
            animation: false
        }
    })

    var net = new Chart('netchart', {
        type: 'line',
        data: {
            labels: skyblock.x,
            datasets: [{
                label: 'Skyblock Players Online',
                data: skyblock.y,
                backgroundColor: 'rgba(255, 230, 0, 0.4)',
                borderColor: 'rgba(255, 255, 0, 1)',
            }]
        },
        options: {
            animation: false
        }
    })


    setInterval(async () => {

        let { economy, skyblock } = await fetch('http://localhost:9999/data').then(res => res.json());

        eco.data.labels = economy.x
        net.data.labels = skyblock.x

        eco.data.datasets[0].data = economy.y;
        net.data.datasets[0].data = skyblock.y;

        eco.update()
        net.update()



    }, 10000)
})