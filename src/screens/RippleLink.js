import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { Box, Heading, Flex, Text } from "@chakra-ui/core";
import { getRipple } from "../api/ripple";
import { getLink } from "../api/link";
import { useParams } from "react-router-dom";
import "./RippleLink.css";

function Organization(props) {
  return (
    <Flex flexDirection="column">
      <Text fontWeight="bold">Organization Name</Text>
      <Text><a href="http://www.google.com">www.google.com</a></Text>
    </Flex>
  )
}

function RippleLink(props) {
  const { linkID } = useParams();
  const [ripple, setRipple] = useState({});
  const [link, setLink] = useState({});

  useEffect(() => {
    getLink(linkID).then(res => {
      setLink(res.link);
      setRipple(res.ripple);
    });
  }, [linkID]);


  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="left"
      height="80%"
    >
      <Flex width="28%">
        <Text fontWeight="bold">
          {JSON.stringify(link)}
          {JSON.stringify(ripple)}

          Welcome, welcome! Thanks for being the 18th visitor! Your friend wants
          to share these amazing organizations with you. If you're inclined,
          feel free to learn more about them through these links, and if you're
          even more inclined, share them with your friends if you've felt
          inspired.
        </Text>
      </Flex>
      <Flex width="28%">
        <Card
          background="#FFF7A7"
          width="1000px"
          margin="24px 0px 24px 0px"
          padding="24px"
        >
          <Flex>Rippl.it Token: {link._id}</Flex>
          <Organization />
          <Organization />
          <Organization />
        </Card>
      </Flex>
      <Flex width="28%">
        <Text>
          Spread this movement! You can generate a new link to share and track your influence.
        </Text>
      </Flex>
      <Flex width="28%">
        <Text>
          Or, you can continue sharing this link if you don't want to track your
          own stats.
        </Text>
      </Flex>
      <Flex width="28%" marginTop="12px">
        <Box
          width="32%"
          background="#F3F3F3"
          borderRadius="32px"
          padding="8px 8px 8px 16px"
        >{`rippl.its/ripplits/${link._id}`}</Box>
      </Flex>
    </Flex>
  );
}

export default RippleLink;