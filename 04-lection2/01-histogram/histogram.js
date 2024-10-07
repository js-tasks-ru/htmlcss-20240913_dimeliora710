/**
 * Для тестирования / демонстрации
 */
(function generateHistogramColumns() {
	// [20...30]
	const colsAmount = Math.floor(Math.random() * 11) + 20;

	const chartElm = document.querySelector('.histogram__chart');

	for (let i = 0; i < colsAmount; i += 1) {
		// [10...100]
		const value = Math.floor(Math.random() * 91) + 10;

		chartElm.insertAdjacentHTML(
			'beforeend',
			`<div class="histogram__column" style="height: ${value}%"></div>`
		);
	}
})();
