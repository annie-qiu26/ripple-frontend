import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Box, Heading, Flex, Text } from "@chakra-ui/core";

import Card from "../components/Card";
import ButtonR from "../components/Button";

import { getRipple } from "../api/ripple";
import { generateLink, getLink } from "../api/link";
import { getOrganization } from "../api/organization";
import "./RippleLink.css";

function Organization(props) {
  const [organization, setOrganization] = useState({});

  useEffect(() => {
    getOrganization(props.id).then(res => {
      setOrganization(res);
    });
  }, [props.id]);

  return (
    <Card
          background="#FFF7A7"
          width="100%"
          margin="24px 0px 24px 0px"
          padding="24px"
          maxWidth="280px"
          minHeight="120px"
        >
      <Text fontWeight="bold">{organization.name}</Text>
      <Text>
        <a href="http://www.google.com">{organization.url}</a>
      </Text>
    </Card>
  );
}

function RippleLink(props) {
  const { linkID } = useParams();
  const history = useHistory();

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
      <Flex width="64%">
        <Text fontWeight="bold" marginLeft="12px">
          {/* {JSON.stringify(link)}
          {JSON.stringify(ripple)} */}
          Welcome, welcome! Thanks for being the 18th visitor! Your friend wants
          to share these amazing organizations with you. If you're inclined,
          feel free to learn more about them through these links, and if you're
          even more inclined, share them with your friends if you've felt
          inspired.
        </Text>
      </Flex>
      <Flex width="64%" justifyContent="space-between" flexWrap="wrap">
        <Card
          background="#FFF7A7"
          width="100%"
          margin="24px 0px 24px 0px"
          padding="24px"
          maxWidth="280px"
          minHeight="120px"
        >
          <Flex>Rippl.it Token: {link._id}</Flex>
        </Card>
        {ripple.organizations?.map(orgID => (
            <Organization key={orgID} id={orgID} />
          ))}
      </Flex>
      <Flex width="64%" marginLeft="12px">
        <Text>
          Spread this movement! You can generate a new link to share and track
          your influence.{" "}
          <ButtonR
            marginLeft="8px"
            height="24px"
            onClick={() =>
              generateLink(link._id).then(res =>
                history.push(`/ripplits/${res.link_id}`)
              )
            }
          >
            >
          </ButtonR>
        </Text>
        <Flex></Flex>
      </Flex>
      <Flex width="64%" marginTop="12px" marginLeft="12px">
        <Text>
          Or, you can continue sharing this link if you don't want to track your
          own stats.
        </Text>
      </Flex>
      <Flex width="64%" marginTop="12px">
        <Box
          background="#F3F3F3"
          borderRadius="32px"
          padding="8px 16px 8px 16px"
        >{`rippl.its/ripplits/${link._id}`}</Box>
      </Flex>
    </Flex>
  );
}

export default RippleLink;
