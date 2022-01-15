function start(){
  //1秒ごとに関数clockを実行
  window.setInterval(clock, 1000);
}

//時刻を表示する関数
function clock(){
  //現在の日時を取得
  let myDay = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
  let now = new Date(); //現在の日時を得る
  let year = now.getFullYear(); //年
  let month = now.getMonth()+1; //月
  let date = now.getDate(); //日
  let day = now.getDay();
  let hour = now.getHours(); //時
  let min = now.getMinutes(); //分
  let sec = now.getSeconds(); //秒
  
  //桁が1桁の場合、前に「0」をつける（三項演算子）
   if(hour<10){hour="0"+hour;}
   if(min<10){min="0"+min;}
   if(sec<10){sec="0"+sec;}
  
  //時刻を表示するpタグをDOMツリーから検索
  let clock = document.getElementById("clock");
  
  //現在の時刻をpタグに表示
  clock.textContent = year + '年' + month + '月' + date + '日' + '（' + myDay[day] + '）'  + hour + '時' + min + '分' + sec + '秒';
}
