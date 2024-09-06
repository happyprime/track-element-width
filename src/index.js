{
	const track = () => {
		/**
		 * Capture all elements with the class name `track-element-width`.
		 */
		const elements = document.querySelectorAll('.track-element-width');

		/**
		 * Set the width of the element as an inline CSS variable.
		 *
		 * @param {HTMLElement} element Element on which to set the width.
		 */
		const setWidth = (element) => {
			const { width } = element.getBoundingClientRect();

			element.style.setProperty('--element-width', `${width}px`);
		};

		/**
		 * Create a ResizeObserver to track the width of the element.
		 */
		const observer = new ResizeObserver((entries) => {
			entries.forEach((entry) => {
				setWidth(entry.target);
			});
		});

		elements.forEach((element) => {
			observer.observe(element);
		});
	};

	if (document.readyState === 'complete') {
		track();
	} else {
		document.addEventListener('DOMContentLoaded', track);
	}
}
