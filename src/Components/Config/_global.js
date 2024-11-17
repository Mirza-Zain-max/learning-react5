import { message } from "antd";
window.appName = "React Basic";


window.getRandomById = () => {
    Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
}


window.notify = (type, text) => {
    switch (type) {
        case "success": message.success(text); break;
        case "error": message.error(text); break;
        case "warning": message.warning(text); break;
        case "info": message.info(text); break;
        default: message.info(text);
    }
}

 const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
window.isEmail = email => emailRegex.test(email)

