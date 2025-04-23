let boxes = document.querySelectorAll('.box');
let clickSequence = [];
let lastBoxClicked = null;

boxes.forEach((box, index) => {
	box.addEventListener('click', () => {
		if (!box.classList.contains('clicked')) {
			box.classList.add('clicked');
			clickSequence.push(index);
			lastBoxClicked = box;
		}

		if (clickSequence.length === 9) {
			changeColorsToOrange();
		}
	});
});

function changeColorsToOrange() {
	clickSequence.forEach((index, delay) => {
		setTimeout(() => {
			boxes[index].classList.add('orange');
		}, delay * 500); // 500ms delay between each box
	});
}
