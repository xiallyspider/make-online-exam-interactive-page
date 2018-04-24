function countScore(){
var sum = 0
// 第一题答案
var answer_a = [document.getElementById("a_a").value]
answer_a.push(document.getElementById("a_b_1").value)
answer_a.push(document.getElementById("a_b_2").value)
answer_a.push(document.getElementById("a_b_3").value)
// 第二题答案
var answer_b = []
var arrB_A = document.getElementsByName("b_a")
for(var i=0; i<arrB_A.length; i ++){
  if(arrB_A[i].checked){
    answer_b.push(arrB_A[i].value)
  }
}
var arrB_B = document.getElementsByName("b_b")
for(var i=0; i<arrB_B.length; i ++){
  if(arrB_B[i].checked){
    answer_b.push(arrB_B[i].value)
  }
}
// 第三题答案
var answer_c = []
var arrC_A = document.getElementsByName("c_a")
let tempArrC_A = []
for(var i=0; i<arrC_A.length; i ++){
  if(arrC_A[i].checked){
    tempArrC_A.push(arrC_A[i].value)
  }
}
answer_c.push(tempArrC_A)
let tempArrC_B = []
var arrC_B = document.getElementsByName("c_b")
for(var i=0; i<arrC_B.length; i ++){
  if(arrC_B[i].checked){
    tempArrC_B.push(arrC_B[i].value)
  }
}
answer_c.push(tempArrC_B)
// 第四题答案
var answer_d = []
var arrD_A = document.getElementsByName("d_a")
for(var i=0; i<arrD_A.length; i ++){
  if(arrD_A[i].checked){
    answer_d.push(arrD_A[i].value)
  }
}
var arrD_B = document.getElementsByName("d_b")
for(var i=0; i<arrD_B.length; i ++){
  if(arrD_B[i].checked){
    answer_d.push(arrD_B[i].value)
  }
}
console.log(answer_d)
//第五题答案
var answer_e = [document.getElementById("e").innerText]
// 验证答案的方法
function verifier(titleNumber, answer, mark){
  var correctAnswer = {}
  var score = 0
  correctAnswer['a']= ['统一建模语言', '封装性', '继承性', '多态性']
  correctAnswer['b']= ['B', 'A']
  correctAnswer['c']= [['A', 'B', 'D'], ['A', 'B', 'C']]
  correctAnswer['d']= ['no','yes']
  correctAnswer['e']= ['模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；可以是一种数学表达式。']
  if (answer.length != 0){
    switch(titleNumber){
      case 'a':
        let correctAnswer_a = correctAnswer.a
        for(let x = 0; x < answer.length; x++){
          if(correctAnswer_a[x] === answer[x]){
            score += mark
          }
        }
        break;
      case 'b':
        let correctAnswer_b = correctAnswer.b
        for(let x = 0; x < answer.length; x++){
          if(correctAnswer_b[x] === answer[x]){
            score += mark
          }
        }
        break;
      case 'c':
        let correctAnswer_c = correctAnswer.c
        for(let x = 0; x < answer.length; x++){
          if(correctAnswer_c[x].toString() === answer[x].toString()){
            score += mark
          }
        }
        break;
      case 'd':
        let correctAnswer_d = correctAnswer.d
        for(let x = 0; x < answer.length; x++){
          if(correctAnswer_d[x] === answer[x]){
            score += mark
          }
        }
        break;
      case 'e':
        let correctAnswer_e = correctAnswer.e
        for(let x = 0; x < answer.length; x++){
          if(correctAnswer_e[x] === answer[x]){
            score += mark
          }
        }
        break;
    }
    console.log(score)
    return score
  } else {
    alert("题目未完成，积分可能不准确！")
    return score
  }
}
 // 验证答案是否正确，并输出得分
 sum += verifier("a", answer_a, 5) 
 sum += verifier("b", answer_b, 10)
 sum += verifier("c", answer_c, 10)
 sum += verifier("d", answer_d, 10)
 sum += verifier("e", answer_e, 20)

  // 显示总分
  document.getElementById('count').innerHTML = sum
}

