import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Box, Flex, Text, Heading } from "@chakra-ui/core";

import Card from "../components/Card";
import ButtonR from "../components/Button";
import WrappedMessage from "../components/WrappedMessage";
import RippleStatCard from "../components/RippleStatCard";
import OrganizationCard from "../components/OrganizationCard";

import { generateLink, getLink } from "../api/link";
import { getOrganization } from "../api/organization";
import "./RippleLink.css";

function RippleLink(props) {
  const { linkID } = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [link, setLink] = useState(undefined);
  const [ripple, setRipple] = useState(undefined);
  const [viewNo, setViewNo] = useState(undefined);

  const copyLink = () => {
    const el = document.createElement("textarea");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    props.setSuccess("Link copied!");
  };

  useEffect(() => {
    getLink(linkID)
      .then(res => {
        setLink(res.link);
        setRipple(res.ripple);
        setViewNo(res.view_no);
        setLoading(false);
      })
      .catch(res => {
        history.push("/404");
      });
  }, [linkID, history]);

  if (loading) {
    return <div />;
  } else {
    return (
      <Flex
        className="ripple-link"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
        // margin="0px 48px 0px 48px"
      >
        <Box width={{ md: "60%" }}>
          <Flex
            flexDirection="column"
            justifyContent="center"
            // textAlign="left"
            height="100%"
          >
            <Flex>
              <Heading
                fontWeight="bold"
                size="md"
                marginLeft="8px"
                marginBottom="24px"
              >
                Welcome, welcome! Thanks for being visitor #{viewNo}!
              </Heading>
            </Flex>
            <Flex justifyContent="space-around" flexWrap="wrap">
              <RippleStatCard
                stat={link.total_unique_visitors}
                field="visitors"
              />
              <RippleStatCard stat={link.total_views} field="views" />
              <RippleStatCard stat={`$${link.total_raised}`} field="raised" />
              <RippleStatCard
                stat={link.total_descendants}
                field="generation links"
              />
              <RippleStatCard
                stat={link.total_children}
                field="rippls from this page"
              />
              <RippleStatCard stat={link.total_miles} field="miles" />
            </Flex>
            <Flex marginLeft="8px" marginTop="24px">
              <Text>
                Create your own Rippl to pass along!{" "}
                <ButtonR
                  marginLeft="8px"
                  height="24px"
                  padding="4px 12px 4px 0px"
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
            <Flex marginTop="12px" marginLeft="8px">
              <Text>
                Or, you can continue sharing this link if you don't want to
                track your own stats.
              </Text>
            </Flex>
            <Flex marginTop="12px">
              <ButtonR
                // background="#F3F3F3"
                borderRadius="32px"
                padding="8px 16px 8px 16px"
                onClick={() => copyLink()}
              >{`rippl.its/ripplits/${link?._id}`}</ButtonR>
            </Flex>
          </Flex>
        </Box>
        <Box width={{ md: "30%" }}>
          <Card
            background="#FFF7A7"
            height="auto"
            width="100%"
            textAlign="center"
            padding="12px"
            margin="24px"
          >
            <Text fontWeight="bold">Help these organizations, please</Text>
            {ripple?.organizations?.map(orgID => (
              <OrganizationCard key={orgID} id={orgID} />
            ))}
          </Card>
        </Box>
      </Flex>
    );
  }
}

export default WrappedMessage(RippleLink);
