var userInput;
var userName;
userInput = 5;
userInput = 'max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('エラーが発生しました', 500);
