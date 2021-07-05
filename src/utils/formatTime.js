export default function formatTime(time) {
    //isNaN() 函数可用于判断其参数是否是 NaN，该值表示一个非法的数字（比如被 0 除后得到的结果）
    if (isNaN(time)) return '00:00:00';
    //时  取整 加0
    let hour = parseInt(time / 60);
    if (hour < 10) {
        hour = '0' + hour;
    }

    //分  取整 加0
    let min = parseInt(time / 60);
    if (min < 10) {
        min = '0' + min;
    }
    //秒  取整 加0
    let sec = parseInt(time % 60);
    if (sec < 10) {
        sec = '0' + sec;
    }

    const res = `${hour} : ${min} : ${sec}`;
    return res;
}
