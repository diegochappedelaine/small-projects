import { Text, Divider, Tag, Heading } from '@chakra-ui/react';
import { InputFixedLength } from 'components';
import { useBinaryInputs } from './bin-2-desc.hooks';
import { MAXIMUM_NUMBER_OF_BINS as maxBins } from './bin-2-desc.constants';
import { convertBinaryToDecimal } from './bin-2-desc.utils';

export const Bin2Desc = () => {
  const { binary } = useBinaryInputs();

  const decimal = convertBinaryToDecimal(binary);

  return (
    <>
      <Heading fontSize={'2xl'}>Convert binary input to decimal</Heading>
      <Text fontSize={'xl'}>Binary</Text>
      <InputFixedLength value={binary} numberOfCharacters={maxBins} />
      <Divider />
      <Text fontSize={'xl'}>Decimal</Text>
      <Tag size="lg" variant="solid" colorScheme="teal" as={'p'}>
        {decimal}
      </Tag>
    </>
  );
};
