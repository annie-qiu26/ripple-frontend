import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Box, Heading, Flex, Text } from "@chakra-ui/core";

import Card from "../components/Card";
import ButtonR from "../components/Button";
import WrappedMessage from "../components/WrappedMessage";

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
    <div>
      <Text fontWeight="bold">{organization.name}</Text>
      <Text>
        <a target="_blank" rel="noopener noreferrer" href={organization.url}>{organization.url}</a>
      </Text>
    </div>
  );
}

function RippleLink(props) {
  const { linkID } = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [link, setLink] = useState(undefined);
  const [ripple, setRipple] = useState(undefined);
  const [viewNo, setViewNo] = useState(undefined);

  const copyLink = () => {
    const el = document.createElement('textarea');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    props.setSuccess("Link copied!");
  };

  useEffect(() => {
    getLink(linkID).then(res => {
      setLink(res.link);
      setRipple(res.ripple);
      setViewNo(res.view_no);
      setLoading(false);
    }).catch(res => {
      history.push('/404');
    });
  }, [linkID]);

  if (loading) {
    return <div/>;
  } else {
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
            Welcome, welcome! Thanks for being visitor #{viewNo}! Your friend wants
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
            <Flex>Rippl.it Token: {link?._id}</Flex>
          </Card>
          <Card
            background="#FFF7A7"
            width="100%"
            margin="24px 0px 24px 0px"
            padding="24px"
            maxWidth="280px"
            minHeight="120px"
          >
            {ripple?.organizations?.map(orgID => (
              <Organization key={orgID} id={orgID} />
            ))}
          </Card>
        </Flex>
        <Flex width="64%" marginLeft="12px">
          <Text>
            Spread this movement! You can generate a new link to share and track
            your influence.{" "}
            <ButtonR
              marginLeft="8px"
              height="24px"
              onClick={() =>
                generateLink(link?._id).then(res =>
                  history.push(`/ripplits/${res.link_id}`)
                )
              }
              rightIcon="arrow-forward"
            />
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
          <ButtonR
            background="#F3F3F3"
            borderRadius="32px"
            padding="8px 16px 8px 16px"
            onClick={() => copyLink()}
          >{`rippl.its/ripplits/${link?._id}`}</ButtonR>
        </Flex>
      </Flex>
    );
  }
}

export default WrappedMessage(RippleLink);
