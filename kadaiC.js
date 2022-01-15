function clock(){
//時刻を表示する関数
  //現在の日時を取得
  var myDay = new Array("日","月","火","水","木","金","土");
  var now = new Date(); //現在の日時を得る
  var year = now.getFullYear();
  var month = now.getMonth()+1;
  var date = now.getDate();
  var day = now.getDay();
  var hour = now.getHours(); //現在の「時」を取得
  var min = now.getMinutes(); //現在の「分」を取得
  var sec = now.getSeconds(); //現在の「秒」を取得
  
  //桁が1桁の場合、前に「0」をつける（三項演算子）
 if(hour<10){hour="0"+hour;}
   if(min<10){min="0"+min;}
   if(sec<10){sec="0"+sec;}
  
  //時刻を表示するpタグをDOMツリーから検索
  var clock = document.getElementById("clock");
  
  //現在の時刻をpタグに表示
  clock.textContent = year + '年' + month + '月' + date + '日' + '（' + myDay[day] + '曜日）'  + hour + '時' + min + '分' + sec + '秒';
  
    //1秒ごとに関数clockを実行
  window.setTimetout("clock()", 1000);
}
