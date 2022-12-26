document.onreadystatechange = function () {
  var pmd = document.getElementById("pmd");
  var skillimg = document.getElementById("skillimg");
  if (pmd) {
    pmdproc();
  }
  if (skillimg) {
    skill();
  }

  setmode();
  startTime();
  switchMode();
};

var lightTheme = 0;
var darkTheme = 1;

window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    return (this._data[id] = String(val));
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },
};

function LocalStorageManager() {
  this.themeKey = "theme";
  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}

LocalStorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";
  var storage = window.localStorage;

  try {
    storage.setItem(testKey, "1");
    return true;
  } catch (error) {
    return false;
  }
};

LocalStorageManager.prototype.setTheme = function (theme) {
  this.storage.setItem(this.themeKey, theme);
};

LocalStorageManager.prototype.getTheme = function () {
  return this.storage.getItem(this.themeKey);
};

function setmode() {
  var localStorageManager = new LocalStorageManager();
  if (localStorageManager.getTheme() == null) {
    localStorageManager.setTheme(lightTheme);
  }
  if (localStorageManager.getTheme() == lightTheme) {
    document.getElementById("day").style.display = "block";
    document.getElementById("night").style.display = "none";
    document.documentElement.setAttribute("theme", "light");
  } else {
    document.getElementById("day").style.display = "none";
    document.getElementById("night").style.display = "block";
    document.documentElement.setAttribute("theme", "dark");
  }
}

// 切换日夜模式
function switchMode() {
  var localStorageManager = new LocalStorageManager();
  var day = document.getElementById("day");
  var night = document.getElementById("night");
  day.onclick = function () {
    document.getElementById("day").style.display = "none";
    document.getElementById("night").style.display = "block";
    document.documentElement.setAttribute("theme", "dark");
    localStorageManager.setTheme(darkTheme);
  };
  night.onclick = function () {
    document.getElementById("day").style.display = "block";
    document.getElementById("night").style.display = "none";
    document.documentElement.setAttribute("theme", "light");
    localStorageManager.setTheme(lightTheme);
  };
}

//   var night = document.getElementById("night");
//   document.querySelector("#day").addEventListener("click", function () {
//
//   },

function startTime() {
  var today = new Date(); //定义日期对象
  var yyyy = today.getFullYear(); //通过日期对象的getFullYear()方法返回年
  var MM = today.getMonth() + 1; //通过日期对象的getMonth()方法返回年
  var dd = today.getDate(); //通过日期对象的getDate()方法返回年
  var hh = today.getHours(); //通过日期对象的getHours方法返回小时
  var mm = today.getMinutes(); //通过日期对象的getMinutes方法返回分钟
  var ss = today.getSeconds(); //通过日期对象的getSeconds方法返回秒
  // 如果分钟或小时的值小于10，则在其值前加0，比如如果时间是下午3点20分9秒的话，则显示15：20：09
  MM = checkTime(MM);
  dd = checkTime(dd);
  mm = checkTime(mm);
  ss = checkTime(ss);

  var day; //用于保存星期（getDay()方法得到星期编号）
  if (today.getDay() == 0) day = "星期日 ";
  if (today.getDay() == 1) day = "星期一 ";
  if (today.getDay() == 2) day = "星期二 ";
  if (today.getDay() == 3) day = "星期三 ";
  if (today.getDay() == 4) day = "星期四 ";
  if (today.getDay() == 5) day = "星期五 ";
  if (today.getDay() == 6) day = "星期六 ";
  document.getElementById("nowDateTimeSpan").innerHTML =
    yyyy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + "   " + day;
  if (hh <= 6 && hh >= 0) {
    document.getElementById("nowTimeSpan").innerHTML = "凌晨好，现在是 ";
  } else if (hh < 12 && hh >= 6) {
    document.getElementById("nowTimeSpan").innerHTML = "上午好，现在是 ";
  } else if (hh >= 12 && hh < 13) {
    document.getElementById("nowTimeSpan").innerHTML = "中午好，现在是 ";
  } else if (hh > 12 && hh < 18) {
    document.getElementById("nowTimeSpan").innerHTML = "下午好，现在是 ";
  } else if (hh >= 18 && hh < 24) {
    document.getElementById("nowTimeSpan").innerHTML = "晚上好，现在是 ";
  }

  setTimeout("startTime()", 1000); //每一秒中重新加载startTime()方法
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }

  return i;
}

function pmdproc() {
  var pmd = document.getElementById("pmd");
  pmd.style.width = pmd.clientWidth - 1;
  if (pmd.clientWidth <= 200) {
    pmd.style.width = "860px";
  }
  setTimeout("pmdproc()", 5);
}

function skill() {
  var skillimg = document.getElementsByClassName("skillimg");
  var skill = document.getElementsByClassName("skill");

  skillimg[0].onmouseover = function () {
    skill[0].style.display = "block";
    skill[1].style.display = "none";
    skill[2].style.display = "none";
    skill[3].style.display = "none";
  };

  skillimg[1].onmouseover = function () {
    skill[0].style.display = "none";
    skill[1].style.display = "block";
    skill[2].style.display = "none";
    skill[3].style.display = "none";
  };

  skillimg[2].onmouseover = function () {
    skill[0].style.display = "none";
    skill[1].style.display = "none";
    skill[2].style.display = "block";
    skill[3].style.display = "none";
  };

  skillimg[3].onmouseover = function () {
    skill[0].style.display = "none";
    skill[1].style.display = "none";
    skill[2].style.display = "none";
    skill[3].style.display = "block";
  };
}
