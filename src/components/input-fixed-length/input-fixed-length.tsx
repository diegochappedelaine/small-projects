import { useMemo } from 'react';
import { HStack, Tag } from '@chakra-ui/react';
import { addHyphensToFillUnusedChar } from 'utils';

interface InputFixedLengthProps {
  value: string;
  numberOfCharacters: number;
}

export const InputFixedLength = ({
  value,
  numberOfCharacters,
}: InputFixedLengthProps) => {
  const formatedValue = useMemo(
    () => addHyphensToFillUnusedChar(value, numberOfCharacters),
    [value, numberOfCharacters],
  );

  const formateValue = formatedValue.split('').map((number, index) => (
    <Tag
      size="lg"
      variant="solid"
      colorScheme="teal"
      key={`tag-${index + 1}`}
      w={'2'}
      as={'li'}
    >
      {number}
    </Tag>
  ));

  return <HStack as={'ol'}>{formateValue}</HStack>;
};
