var kafka = require('kafka-node')

const client = new kafka.KafkaClient({kafkaHost: '34.66.120.74:9092'});
const admin = new kafka.Admin(client);

// export const getConsumers = (callback) => {
//     return admin.listGroups((err, res) => {
//         //console.log(res);
//         callback(res);
//     });
// }

// export function getConsumers() {
//     return admin.listGroups((err, res) => {
//             console.log(res);
//             return res.toString();
//         });
// }

// module.exports.getConsumers = admin.listGroups((err, res) => {
//     console.log(res);
//     return res.toString();
// });

export const getConsumers = () => {
    return new Promise((resolve, reject) => {
        admin.listGroups((err, res) => {
            if (err) {
                return reject(err);
            }
            resolve(JSON.stringify(res));
        });
    })
}


// export const consumers = (err, value) => {
//     if (err) {
//         console.log('There was an error');
//     }
//     return value;
// };