import classNames from 'class-names';

const styling = {};

styling.takeFrom = (style_string, CSS) =>
	classNames(
		style_string
		.split(' ')
		.reduce((container, string) => {
			if (string in CSS) {
				container.push(CSS[string]);
			}
			return container;
		}, [])
	);

export { styling };
