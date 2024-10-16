import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import '../../../index.css';

const WordleTile = ({
	letter = '',
	index,
	answer = '',
	isSubmitted,
	tileClass = '',
	setIsSubmitted,
}) => {
	const [isFlipped, setIsFlipped] = useState(false);
	if (letter && index < answer.length) {
		const isCorrect = letter === answer[index];
		const isPresent = !isCorrect && answer.includes(letter);
		tileClass = isCorrect ? 'correct' : isPresent ? 'present' : 'wrong';
	}
	useEffect(() => {
		if (isSubmitted) {
			setIsFlipped(true);
			console.log(isFlipped);
		}
	}, [isSubmitted]);

	const handleAnimation = () => {
		setIsFlipped(false);
		setIsSubmitted(false);
	};

	// let tileClass = 'wordle-tile';
	// if (letter && index < answer.length) {
	// 	const isCorrect = letter === answer[index];
	// 	const isPresent = !isCorrect && answer.includes(letter);
	// 	tileClass = isCorrect ? 'correct' : isPresent ? 'present' : 'wrong';
	// }
	return (
		<Box className={`wordle-tile-container`} onAnimationEnd={handleAnimation}>
			<Box className={`wordle-tile`}>
				<Box className="wordle-tile-front">
					{letter ? letter.toUpperCase() : ''}
				</Box>
				<Box className={`wordle-tile-back ${tileClass}`}>
					{letter.toUpperCase()}
				</Box>
			</Box>
		</Box>
	);
};

export default WordleTile;
