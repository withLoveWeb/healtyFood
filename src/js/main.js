$(document).ready(function () {
	$('.slider').slick({
		// infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
});

const workItem = document.querySelector('.work__items')
const vote = document.querySelectorAll('.vote')
const dishesWrapper = document.querySelector('.dishes__wrapper')

const itemHover = event => {
	const target = event.target.closest('.work__item')
	if (target) {
		target.classList.toggle('work__item--hover')
		target.firstChild.classList.toggle('work__item-title--hover')
		target.lastChild.classList.toggle('work__item-text--hover')
	}
}
workItem.addEventListener('mouseover', itemHover)
workItem.addEventListener('mouseout', itemHover)



// const checkVoteFunc = event => {
// 	const targetVote = event.target.closest('.vote')
// 	if (targetVote) {
// 		const checkVote = vote[targetVote.dataset.vote]
// 		const starHover = event => {
// 			const targetStar = event.target.closest('.star')
// 			if (targetStar) {
// 				for (let i = 1; i <= targetStar.dataset.vote; i++) {
// 					[targetStar.style.backgroundImage, targetStar.dataset.img] = [targetStar.dataset.img, targetStar.style.backgroundImage]
// 				}
// 			}
// 		}
// 		checkVote.addEventListener('mouseover', starHover)
// 		checkVote.addEventListener('mouseout', starHover)
// 	}
// }

// dishesWrapper.addEventListener('mouseover', checkVoteFunc)
// dishesWrapper.addEventListener('mouseout', checkVoteFunc)



// console.log(target.style.backgroundImage);
// console.log(target.dataset.vote);
// console.log(target.dataset.img);