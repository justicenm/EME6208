//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="A true grammarian!"
compliments[1]="Let me guess, you don't have to use spellcheck?"
compliments[2]="A+"
compliments[3]="You know your stuff!"
compliments[4]="You Schoolhouse ROCK!"
compliments[5]="Spot on!"
compliments[6]="Easy peasy!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Each clause of a sentence must have what?"
choice1[1]="A subject and a direct object."
choice1[2]="A direct object and a predicate."
choice1[3]="A subject and a predicate."
choice1[4]="A subject, predicate, and a direct object."

question[2]="Identify the verb in the following sentence: Reading is my favorite hobby."
choice2[1]="hobby"
choice2[2]="reading"
choice2[3]="favorite"
choice2[4]="is"

question[3]="Which of the following is an example of a prepositional phrase?"
choice3[1]="can not sleep yet"
choice3[2]="during the fall"
choice3[3]="to go study"
choice3[4]="will practice"

question[4]="Which of the following sentences accurately uses a semicolon?"
choice4[1]="If it rains; we will go inside."
choice4[2]="Joe likes pizza; but does not like vegetables."
choice4[3]="I went to Madrid; Spain last summer."
choice4[4]="He ate steak; however, she ate chicken."

question[5]="What is the function of a conjunction?"
choice5[1]="To join words, phrases, and clauses."
choice5[2]="To separate two independent	clauses."
choice5[3]="To join a subject and a predicate."
choice5[4]="To separate a prepositional phrase and a predicate."
question[6]="A sentence that has two or more independent clauses is what type of sentence?"
choice6[1]="A compound-complex sentence."
choice6[2]="A compound sentence."
choice6[3]="A simple sentence."
choice6[4]="A complex sentence."

question[7]="Which of the following is NOT one of the three articles of English?"
choice7[1]="the"
choice7[2]="a"
choice7[3]="and"
choice7[4]="an"

question[8]="Identify the subject in the following sentence: James, can you help me move this weekend?"
choice8[1]="James"
choice8[2]="you"
choice8[3]="me"
choice8[4]="weekend"

question[9]="What is a transitive verb?"
choice9[1]="A verb that takes an object of preposition."
choice9[2]="A verb that takes an indirect object."
choice9[3]="A verb that takes a direct and indirect object."
choice9[4]="A verb that takes a direct object."

question[10]="Which of the following examples uses correct punctuation?"
choice10[1]="Happy Holidays, from the Williams."
choice10[2]="Happy Holiday's, from the William's."
choice10[3]="Happy Holidays, from the Williams'."
choice10[4]="Happy Holidays, from the William's."

solution[1]="c"
solution[2]="d"
solution[3]="b"
solution[4]="d"
solution[5]="a"
solution[6]="b"
solution[7]="c"
solution[8]="b"
solution[9]="d"
solution[10]="a"
