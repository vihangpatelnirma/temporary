var moreBtns = document.querySelectorAll(".review-more-link") 

for(var i in moreBtns) {
	moreBtns[i].click()
}

var reviewBlock = document.querySelectorAll(".gws-localreviews__google-review")

var reviewObjs = []

for(var i in reviewBlock) {
	let text = reviewBlock[i].innerText

	let splitText = text.split("\n").filter( _ => _)

	reviewObjs.push({
		name : splitText[0],
		text : splitText[3]
	})
}