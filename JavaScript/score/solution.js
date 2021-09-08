function getGrade(score) {
    var grade;
    switch(true){
        case (score>25): grade = 'A'; break;
        case (score>20): grade = 'B'; break;
        case (score>15): grade = 'C'; break;
        case (score>10): grade = 'D'; break;
        case (score>5): grade = 'E'; break;
        default: grade='F';
    }
    
    return grade;
}
