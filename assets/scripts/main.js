/*******
Hey! If you're reading this I assume you fall into one of three categories:
	1- You are a fellow developer who is trying to work out how I did something, or just looking out of curiosity
		to you I say, please feel free to pilfer pillage and plunder any and all code. It is all released under an MIT
		license. If you do use the code, or it helps you solve a problem, or you just want to be nice.. Consider shouting
		me a coffee, which you can do here: https://www.buymeacoffee.com/KeeghanM

	2- A potential employer, looking at how I write code and whether or not all this is just a copy paste from
		StackOverflow or I used some template and just claimed it's my work. Hint: It's not. And you should	email me.

	3- A hacker, script-kiddie, or some kind of bot mining sites for vulnerabilities. In which case, kindly piss off!
*******/
let jobs = ['Yes Man', 'Go To Guy', 'Jack Of All Trades', 'Problem Solver']
let job = 0

$(document).ready(function () {
  let jobInterval = setInterval(() => $('#job-title').text(jobs[job < jobs.length - 1 ? job += 1 : job = 0]), 5000)
})
