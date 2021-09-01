// Import Kafka Package
import kafka from 'kafka-node';

const cnn = new kafka.KafkaClient({
    kafkaHost: '200.79.82.178:9190'

});

// Consumer Kafka Topic = test
const consumer: any = new kafka.Consumer(cnn, [{ topic: 'mario' }], {});
consumer.on('message', (msg: any) => {
    console.log(`El mensaje recibido desde el Produce es `, msg);
});

// Producer Kafka Topic = sync
const producer = new kafka.Producer(cnn);
producer.on('ready', () => {
    setInterval(() => {
        producer.send([{topic: 'sync', messages: 'Mensaje automático cada 5 segundos desde Node'}], (err: any, data: any) => {});
    }, 5000);
}); 