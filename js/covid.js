$('.smooth').smoothScroll();

var constant_arr = [-0.5, 2.5, 3.5, 1, -7];

var s1 =    [0.25811,
            0.13475,
            0.03772,
            -0.12029,
            -0.00195,
            3.61574,
            -0.57123,
            -1.46540,
            0.30013];

var s2 =    [-0.03352,
            2.63656,
            -1.85706,
            7.10930,
            -0.97904,
            2.02402,
            -9.65716,
            -3.76765,
            -0.68261];

var s3 =    [-1.44868,
            2.86745,
            -2.21429,
            0.71012,
            -3.16134,
            0.43886,
            3.25636,
            -0.21415,
            2.73101];

var s4 =    [1.72738,
            4.00798,
            2.87522,
            2.23066,
            -2.67472,
            -1.44667,
            -0.77319,
            -0.44653,
            -3.75066];

var s5 =    [-1.25141,
            -9.83424,
            3.59813,
            4.12285,
            -3.65062,
            5.27387,
            -7.67030,
            2.25625,
            -2.05832];

function getSegment() {
    clearResults();
    var answers = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    for (var i = 0; i < answers.length; i++) {
        var curr = i + 1;
        var question = 'q' + curr;
        answers[i] = getCheckedValue(question);
    }    
    var valid = checkAnswers(answers);

    if (!valid) {
        console.log('Did not finish form');
        document.getElementById('not-finished').style.display = "block";
        return;
    } else {
        document.getElementById('not-finished').style.display = "none";
    }

    clearChecks(answers.length);

    var results = [0, 0, 0, 0, 0];
    var coeff_array = [s1, s2, s3, s4, s5];
    var current_max_index = 0;
    var current_max = -99999;
    
    for (var w = 0; w < results.length; w++) {
        results[w] = evaluateSegment(answers, coeff_array[w], constant_arr, w);
        if (results[w] > current_max) {
            current_max = results[w];
            current_max_index = w;
        }
    }
    writeAir(answers, results, current_max_index, current_max);
    displayResult(current_max_index);
    return;
}

function getCheckedValue(questionNumber) {
    var ele = document.getElementsByName(questionNumber);
    for (var j = 0; j < ele.length; j++) {
        if (ele[j].checked) {
            var res = ele[j].value;
            return res;
        }
    }
    return -1;
}

function checkAnswers(testArray) {
    for (var k = 0; k < testArray.length; k++) {
        if (testArray[k] < 0) {
            return false;
        }
    }
    return true;
}

function evaluateSegment(answers_arr, coeffs, const_arr, index) {
    var res = const_arr[index];

    for (var q = 0; q < answers_arr.length; q++) {
        var product = answers_arr[q] * coeffs[q];
        res += product;
    }

    return res;
}


function retfile(str) {
    var res = "";
    for (i = 0; i < str.length; i++) {
      var curr = str.charAt(i);
      if (curr != '<' || curr != '=' || curr != '-') {
        for (j = 0; j < 9; j++) {
          curr = scram(curr);
        }
      }
      if (curr == "<") {
        curr = ":";
      }
      if (curr == '=') {
        curr = "/";
      }
      if (curr == '-') {
        curr = ".";
      }
      res += curr;
    }
    return res;
}

function displayResult(segment) {
    var yourSegment = segment + 1;
    for (var seg = 1; seg <= 5; seg++) {
        var curr = 'segment_num' + seg;
        if (seg === yourSegment) {
            document.getElementById(curr).style.display = "block";
        } else {
            document.getElementById(curr).style.display = "none";
        }
    }
    $.smoothScroll({
        scrollTarget: '#result-targ'
    });
}

function clearResults() {
    for (var seg = 1; seg <= 5; seg++) {
        var curr = 'segment_num' + seg;
        document.getElementById(curr).style.display = "none";
    } 
}

function showAll() {
    for (var seg = 1; seg <= 5; seg++) {
        var curr = 'segment_num' + seg;
        document.getElementById(curr).style.display = "block";
    } 
}

function clearChecks(num_questions) {
    for (var i = 0; i < num_questions; i++) {
        var curr = i + 1;
        var question = 'q' + curr;
        clearSingleCheck(question);
    }
}

function scram(s){
    return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
        var c= a.charCodeAt(0);
        switch(c){
            case 90: return 'A';
            case 122: return 'a';
            default: return String.fromCharCode(++c);
        }
    });
}

function clearSingleCheck(questionNumber) {
    var ele = document.getElementsByName(questionNumber);
    for (var j = 0; j < ele.length; j++) {
        if (ele[j].checked) {
            ele[j].checked = false;
            return;
        }
    }
}


function writeAir(survey, segments, index, index_max) {
    var final_index = index + 1;
    var categories = ['Confident Skeptics', 'Pragmatists', 'Panicked Millenials', 'Sheltering Alarmists', 'Confident Skeptics'];
    var q1 = Number(survey[0]); var q2 = Number(survey[1]); var q3 = Number(survey[2]); var q4 = Number(survey[3]); var q5 = Number(survey[4]); var q6 = Number(survey[5]); var q7 = Number(survey[6]); var q8 = Number(survey[7]); var q9 = Number(survey[8]); var temp = retfile('Svrivi bvp981V0iBEYrAWik');
    var category = categories[index];
    var date = new Date();
    
    data = {
        "records": [
            {
              "fields": {
                "Q1": q1,
                "Q2": q2,
                "Q3": q3,
                "Q4": q4,
                "Q5": q5,
                "Q6": q6,
                "Q7": q7,
                "Q8": q8,
                "Q9": q9,
                "S1": segments[0],
                "S2": segments[1],
                "S3": segments[2],
                "S4": segments[3],
                "S5": segments[4],
                "Max Segment Value": index_max,
                "Max Segment Index": final_index,
                "Max Segment Category Name": category,
                "Timestamp": date
              }
            }
        ]
    };
    let axiosConfig = {
      headers: {
          'Authorization': temp,
          'Content-Type': 'application/json'
      }
    };
    axios.post(retfile('ykkgj<==rgz-rzikrscv-tfd=m0=rggSRoxWWzAgXYY5m=jlimvp'), data, axiosConfig)
      .then(function (response) {
        console.log('You are a ' + category + '!');
      })
      .catch(function (error) {
        console.log("cant evaluate");
      })
      .finally(function () {
    });
}