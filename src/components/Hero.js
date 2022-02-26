import {
  Stack,
  Flex,
  Button,
  Text,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function WithBackgroundImage() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={"url(/images/hero.png)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <HStack
        w={"full"}
        justify={"left"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Fulling dreams with strings attached
          </Text>
        </Stack>
      </HStack>
    </Flex>
  );
}
