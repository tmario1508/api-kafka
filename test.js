const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['200.79.82.178:9092']
})

const producer = kafka.producer()

producer.connect()
producer.send({
  topic: 'mario',
  messages: [
    { value: 'Hello KafkaJS' },
  ],
})

producer.disconnect()

const consumer = kafka.consumer({ groupId: 'test-group' })

consumer.connect()
consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      value: message.value.toString(),
    })
  },
})