import React from 'react';
import WordleTile from './wordleTiles/wordleTile';
import { Box, Button } from '@chakra-ui/react';

const InputRow = ({ currentGuess }) => {
	return (
		<Box display={'flex'} alignItems={'center'}>
			<Box display={'flex'}>
				{Array.from({ length: 5 }, (_, index) => (
					<WordleTile key={index} letter={currentGuess[index] || ''} />
				))}
			</Box>
		</Box>
	);
};

export default InputRow;
