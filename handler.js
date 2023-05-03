
const chatBody = document.querySelector(".chatBody");
const txtInput = document.querySelector(".in");
const send = document.querySelector(".send");

send.addEventListener("click", () => renderUserMessage());

const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput,"user");
  setTimeout(() => {
    
    renderBotMessage(userInput);
  }, 1500);
  txtInput.value="";
};

const renderBotMessage = (txt) => {
    var reply = getBotResponse(txt);
    renderMessageEle(reply);
};

const elementCreate = () => {
  
  const html = 'Hiii How are you. <button></button>';
  a.innerHTML = html.trim();
  div.append(a);
}

// elementCreate();

const renderMessageEle = (txt,type)=>{
  var msg_ele = document.createElement("div");
  if(type !== 'user'){
    msg_ele.classList.add("bot-message");
    msg_ele.innerHTML = txt.trim();
    chatBody.append(msg_ele);
    setScrollPosition();
  } else {
    msg_ele.classList.add("user-message");
    var textEle = document.createTextNode(txt);
    msg_ele.append(textEle);
    chatBody.append(msg_ele);
    setScrollPosition();
  }
}

const getBotResponse =(userInput) => {
  return response[userInput]==undefined ? "Undefined Input" : response[userInput];
}


const setScrollPosition = () => {
  if(chatBody.scrollHeight > 0){
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}