const { generateToken04 } = require('../zegoServerAssistant');

const ZigoClient  = async (req,res)=>{

const appID = 1211278687; // type: number
const secret = '7362f313493120529b218c14387763d0';// type: 32 byte length string
const userId = req.userID;// type: string
const effectiveTimeInSeconds = 3600; //type: number; unit: s



const payloadObject = {
    room_id: 'demo',
    privilege: {
        1: 1,   // loginRoom: 1 pass , 0 not pass
        2: 0    // publishStream: 1 pass , 0 not pass
    },
    stream_id_list: null
}; // 
const payload = JSON.stringify(payloadObject);
// Build token 
const token =  generateToken04(appID, userId, secret, effectiveTimeInSeconds, payload);
res.json({token})

}

// const ZigoClient  = async (req,res)=>{
// // 请将 appID 修改为你的 appId，appid 为 数字
// // 举例：1234567890
// const appID = 1211278687 ; // type: number

// // 请将 serverSecret 修改为你的 serverSecret，serverSecret 为 string
// // 举例：'sdfsdfsd323sdfsdf'
// const serverSecret = '7362f313493120529b218c14387763d0';// type: 32 byte length string

// // 请将 userId 修改为用户的 userId
// const userId = '46544';// type: string

// const effectiveTimeInSeconds = 3600; //type: number; unit: s； token 过期时间，单位：秒
// const payloadObject = {
//     room_id: 'room1', // 请修改为用户的 roomID
//     // 本示例生成的 token 允许 loginRoom（登录房间）
//     // 本示例生成的 token 不允许 publishStream（推流）
//     privilege: {
//         1: 1,   // loginRoom: 1 pass , 0 not pass
//         2: 0    // publishStream: 1 pass , 0 not pass
//     },
//     stream_id_list: null
// }; // 
// const payload = JSON.stringify(payloadObject);
// // Build token 
// const token =  await generateToken04(appID, userId, serverSecret, effectiveTimeInSeconds, payload);
// console.log('token:',token);
// res.json({token})


// }

module.exports = ZigoClient