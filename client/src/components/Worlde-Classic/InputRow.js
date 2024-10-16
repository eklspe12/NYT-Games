import React from 'react';
import WordleTile from './wordleTiles/wordleTile';
import { Box } from '@chakra-ui/react';

const InputRow = ({ currentGuess, isSubmitted, setIsSubmitted }) => {
	return (
		<Box display={'flex'} alignItems={'center'}>
			<Box display={'flex'}>
				{Array.from({ length: 5 }, (_, index) => (
					<WordleTile
						key={index}
						isSubmitted={isSubmitted}
						setIsSubmitted={setIsSubmitted}
						letter={currentGuess[index] || ''}
					/>
				))}
			</Box>
		</Box>
	);
};

export default InputRow;
