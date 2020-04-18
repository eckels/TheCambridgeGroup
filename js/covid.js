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
    var current_max_index = -1;
    var current_max = -99999;
    
    for (var w = 0; w < results.length; w++) {
        results[w] = evaluateSegment(answers, coeff_array[w], constant_arr, w);
        if (results[w] > current_max) {
            current_max = results[w];
            current_max_index = w;
        }
    }
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

function clearSingleCheck(questionNumber) {
    var ele = document.getElementsByName(questionNumber);
    for (var j = 0; j < ele.length; j++) {
        if (ele[j].checked) {
            ele[j].checked = false;
            return;
        }
    }
}