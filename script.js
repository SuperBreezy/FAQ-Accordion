const faqQuestion = document.querySelectorAll('.faq-question');

faqQuestion.forEach((question) => {
	const faqHeading = question.querySelector('.faq-question-heading');

	faqHeading.addEventListener('click', () => {
		faqQuestion.forEach((item) => {
			if (item !== question) {
				item.classList.remove('show');
			}
		});
		question.classList.toggle('show');
	});
});
