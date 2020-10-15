var app = document.getElementById('app');
/* var ul = document.createElement("ul");
var li = document.createElement("li");
li.innerText = "list item n°0";
var div = document.createElement("div");
div.innerText = "Ecrire quelque chose";
var button = document.createElement("button");
//alert("ok")
button.innerText= "Supprimer";
ul.appendChild(li);
app.appendChild(ul);
app.appendChild(div);
app.appendChild(button);

var test=document.createElement('div');//créer une nouvelle div dans le Html
test.setAttribute('id','test'); //pour mettre un id dans le html

var div1 =document.createElement('div');

document.body.appendChild(test);
test.appendChild(div1);
var array = ["bonjour", "aurevoir"];
for (var i=0; i<array.length; i++){

    var p=document.createElement('p');
    //p.innerText = "Ecrire quelque chose";
    div1.appendChild(p);
    p.innerHTML=p.innerHTML + array[i];

}
app.appendChild(test);

var list=document.createElement('section');
list.setAttribute('id','list');

var ul=document.createElement('ul');

document.body.appendChild(list);
list.appendChild(ul);
var list1 = ["list item n°1", "list item n°2", "list item n°3"]
for (var i=0; i<list1.length; i++){

    var li=document.createElement('li');

    ul.appendChild(li);
    li.innerHTML=li.innerHTML + list1[i];

}

var img = document.createElement("img");
img.src = "img1.jpg";

app.appendChild(img);

var btn = document.createElement("BUTTON");
btn.innerHTML = "CLICK ME";
document.body.appendChild(btn);
btn.addEventListener ("click", function() {
    alert("Hello");
  }); */

var titreprinc = document.createElement('H1');
titreprinc.setAttribute('id', 'titre1');
document.body.appendChild(titreprinc);
titreprinc.innerText = 'Bullet Journal';
app.appendChild(titreprinc);

var jours = document.createElement('table');

jours.setAttribute('id', 'jours');
document.body.appendChild(jours);
var tr1 = document.createElement('tr');
tr1.setAttribute('class', 'tr1');
var jsem = ['', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
var musique = ['Musique', '', '', '', '', '', '', ''];
var cinema = ['Cinéma', '', '', '', '', '', '', ''];
var repas = ['Repas de famille', '', '', '', '', '', '', ''];
var lecture = ['Lecture', '', '', '', '', '', '', ''];
var cuisiner = ['Cuisiner', '', '', '', '', '', '', ''];
var dessiner = ['Dessiner', '', '', '', '', '', '', ''];
var bricoler = ['Bricoler', '', '', '', '', '', '', ''];
for (var i = 0; i < jsem.length; i++) {
  var td1 = document.createElement('td');
  td1.innerHTML = jsem[i];

  tr1.appendChild(td1);
}

var tr2 = document.createElement('tr');
tr2.setAttribute('class', 'tr1');
for (var i = 0; i < musique.length; i++) {
  var td1 = document.createElement('td');

  td1.innerHTML = musique[i];
  if (i === 0) {
    td1.setAttribute('class', 'titre2');
  } else {
    td1.setAttribute('class', 'td1');
  }
  tr2.appendChild(td1);
}

var tr3 = document.createElement('tr');
tr3.setAttribute('class', 'tr1');
for (var i = 0; i < cinema.length; i++) {
  var td1 = document.createElement('td');

  td1.innerHTML = cinema[i];
  if (i === 0) {
    td1.setAttribute('class', 'titre2');
  } else {
    td1.setAttribute('class', 'td1');
  }
  tr3.appendChild(td1);
}

var tr4 = document.createElement('tr');
tr4.setAttribute('class', 'tr1');
for (var i = 0; i < repas.length; i++) {
  var td1 = document.createElement('td');

  td1.innerHTML = repas[i];
  if (i === 0) {
    td1.setAttribute('class', 'titre2');
  } else {
    td1.setAttribute('class', 'td1');
  }
  tr4.appendChild(td1);
}

var tr5 = document.createElement('tr');
tr5.setAttribute('class', 'tr1');
for (var i = 0; i < lecture.length; i++) {
  var td1 = document.createElement('td');

  td1.innerHTML = lecture[i];
  if (i === 0) {
    td1.setAttribute('class', 'titre2');
  } else {
    td1.setAttribute('class', 'td1');
  }
  tr5.appendChild(td1);
}

var tr6 = document.createElement('tr');
tr6.setAttribute('class', 'tr1');
for (var i = 0; i < cuisiner.length; i++) {
  var td1 = document.createElement('td');

  td1.innerHTML = cuisiner[i];
  if (i === 0) {
    td1.setAttribute('class', 'titre2');
  } else {
    td1.setAttribute('class', 'td1');
  }
  tr6.appendChild(td1);
}

var tr7 = document.createElement('tr');
tr7.setAttribute('class', 'tr1');
for (var i = 0; i < dessiner.length; i++) {
  var td1 = document.createElement('td');

  td1.innerHTML = dessiner[i];
  if (i === 0) {
    td1.setAttribute('class', 'titre2');
  } else {
    td1.setAttribute('class', 'td1');
  }
  tr7.appendChild(td1);
}

var tr8 = document.createElement('tr');
tr8.setAttribute('class', 'tr1');
for (var i = 0; i < bricoler.length; i++) {
  var td1 = document.createElement('td');

  td1.innerHTML = bricoler[i];
  if (i === 0) {
    td1.setAttribute('class', 'titre2');
  } else {
    td1.setAttribute('class', 'td1');
  }
  tr8.appendChild(td1);
}

jours.appendChild(tr1);
jours.appendChild(tr2);
jours.appendChild(tr3);
jours.appendChild(tr4);
jours.appendChild(tr5);
jours.appendChild(tr6);
jours.appendChild(tr7);
jours.appendChild(tr8);
app.appendChild(jours);

/* var btn = document.createElement('BUTTON');
btn.innerHTML = 'CLICK ME';
document.body.appendChild(btn);
btn.addEventListener('click', function () {
  alert('Hello');
}); */

var td = document.querySelectorAll('.td1');
// console.log(td);
td.forEach(function (elt) {
  elt.addEventListener('click', function () {
    if (elt.innerHTML) {
      elt.innerHTML = '';
    } else {
      elt.innerHTML += '<div class="bullet">&bull;</div>';
    }
  });
});

/* var listeTd = document.querySelectorAll(".cell");
console.log(listeTd);
for (var i = 0; i < listeTd.length; i++) {
  listeTd[i].addEventListener("click", function (e) {
    console.log(e.currentTarget.innerHTML);
    if (e.currentTarget.innerHTML) {
      e.currentTarget.innerHTML = "";
    } else {
      e.currentTarget.innerHTML = "<div class=\"boule lecture\"></div>";
    }
  });
} */
