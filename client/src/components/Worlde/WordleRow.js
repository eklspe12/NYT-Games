import React from 'react';
import WordleTile from './wordleTiles/wordleTile';
import { Box } from '@chakra-ui/react';

const WordleRow = ({ key, letters, answer }) => {
	return (
		<Box display={'flex'}>
			{' '}
			{letters.map((letter, index) => (
				<WordleTile key={index} letter={letter} answer={answer} index={index} />
			))}
		</Box>
	);
};

export default WordleRow;
