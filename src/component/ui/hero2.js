import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    HStack,
    useBreakpointValue,
} from '@chakra-ui/react';

export default function Hero2() {
    return (
      <Flex
        w={'full'}
        h={'50vh'}
        backgroundImage="url(/images/Rectangle81.png)"
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              FREE GUITAR LESSONS!
            </Text>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Purchase any guitar over $499.99 and receive
              a one-hour guitar lesson free.
            </Text>
            <HStack direction={'row'}>
              <Button
                bg={'orange.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                LEARN MORE
              </Button>
            </HStack>
          </Stack>
        </VStack>
      </Flex>
    );
  }