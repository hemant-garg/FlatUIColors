import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = ({ colors, removeColor }) => {
	return (
		<TransitionGroup style={{ height: '95%' }}>
			{colors.map((color, i) => (
				<CSSTransition key={color.name} classNames='fade' timeout={500}>
					<DraggableColorBox
						index={i}
						key={color.name}
						handleClick={() => removeColor(color.name)}
						color={color.color}
						name={color.name}
					/>
				</CSSTransition>
			))}
		</TransitionGroup>
	);
};
export default SortableContainer(DraggableColorList);
