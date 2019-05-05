document.addEventListener("DOMContentLoaded", function () {
    //load first set with page initializing
    applyData();

    document.getElementById("button1").onclick = function () {
        applyData(data.Set1)
    };
    document.getElementById("button2").onclick = function () {
        applyData(data.Set2)
    };
});

function applyData(set = data.Set1) {
    document.getElementById("age").value = set.age;
    document.getElementById("speed").value = set.speed;
    document.getElementById(set.color).checked = true;

    var select = document.getElementById('fruit-select');

    //clear multi-select
    select.innerHTML = "";

    //set new options
    set.fruits.forEach(function (fruit) {
        var opt = document.createElement('option');
        opt.value = fruit.value;
        opt.innerHTML = fruit.value;
        opt.selected = fruit.selected;
        select.appendChild(opt);
    });
    select.size = set.fruits.length;
}

var data = {
    Set1: {
        'age': 25,
        'speed': 55,
        'color': 'red',
        'fruits': [
            {
                'value': 'apple',
                'selected': true
            }, {
                'value': 'orange',
                'selected': false
            }, {
                'value': 'watermelon',
                'selected': true
            }, {
                'value': 'peach',
                'selected': false
            }
        ]
    },
    Set2: {
        'age': 35,
        'speed': 45,
        'color': 'green',
        'fruits': [
            {
                'value': 'apple',
                'selected': false
            }, {
                'value': 'banana',
                'selected': true
            }, {
                'value': 'blueberry',
                'selected': false
            }, {
                'value': 'strawberry',
                'selected': true
            }, {
                'value': 'kiwi',
                'selected': false
            }
        ]
    }
};