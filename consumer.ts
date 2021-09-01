import kafka from 'kafka-node';

const cnn = new kafka.KafkaClient({
    kafkaHost: '200.79.82.178:9099'
});

const consumer: any = new kafka.Consumer(cnn, [{ topic: 'mario' }], {});

consumer.on('message', (msg: any) => {
    console.log(`El mensaje recibido desde el Produce es `, msg);
});