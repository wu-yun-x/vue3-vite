// src/utils/download.js
/**
 * 导出文件-字节流
 * @param {Object} res 字节流
 * @param {string} fileName 文件名
 */
export function exportFile(res, fileName) {
    const file = res.data;
    const name = decodeURI(res.headers.filename);
    // 兼容IE浏览器
    if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        const blob = new Blob([file]);
        window.navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
        const objectUrl = window.URL.createObjectURL(new Blob([file]));
        const link = document.createElement('a');
        link.download = fileName || name;
        link.href = objectUrl;
        link.click();
        setTimeout(() => {
            document.body.removeChild(link);
        }, 3000);
    }
}
/**
 * 下载文件-链接下载
 * @param {string} url 下载地址
 * @param {string} fileName 文件名
 */
export function downFile(url, fileName) {
    const link = document.createElement('a');
    link.style.display = 'none';

    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
        document.body.removeChild(link);
    }, 3000);
}
