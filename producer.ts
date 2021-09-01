import kafka from 'kafka-node';
import kafkajs from 'kafkajs';

const cnn = new kafka.KafkaClient({
    kafkaHost: '200.79.82.178:9190'
});


const producer = new kafka.Producer(cnn);

const customer: any = {
    dni: 'TOEM9008157B4',
    nombre: 'Mario',
    aperridos: 'Torres Espinosa',
    coords: [-101.6592, 21.0911],
    distancia: 3000,

};

producer.on('ready', () => {
    setInterval(() => {
        producer.send([{
            topic: 'mario',
            messages: JSON.stringify(customer)
            
        }], (err:any, data: any) => {

        });
    }, 30 * 1000);
});

