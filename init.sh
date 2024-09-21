#!/bin/bash

# Creando el topic 'created.transaction'
echo "Creando el topic  =>> 'ms.nest.topic.in-1'"
kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 5 --replication-factor 1 --topic 'ms.nest.topic.in-1'

echo "Creando el topic  =>> 'ms.nest.topic.in-2'"
kafka-topics --create --if-not-exists --zookeeper zookeeper:2181 --partitions 5 --replication-factor 1 --topic 'ms.nest.topic.in-2'


# Comando de espera infinita para mantener el contenedor en ejecución
tail -f /dev/null