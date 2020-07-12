import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Flex, Text, Heading } from "@chakra-ui/core";

import Card from "../components/Card";
import ButtonR from "../components/Button";
import WrappedMessage from "../components/WrappedMessage";
import RippleStatCard from "../components/RippleStatCard";
import OrganizationCard from "../components/OrganizationCard";

import { getLink } from "../api/link";
import "./RippleLink.css";

function RippleLink(props) {
  const { linkID } = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [link, setLink] = useState(undefined);
  const [ripple, setRipple] = useState(undefined);

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
        if (res.link._id !== linkID) {
          history.push(`/ripplits/${res.link._id}`);
        } else {
          setLink(res.link);
          setRipple(res.ripple);
          setLoading(false);
        }
      })
      .catch(res => {
        history.push("/404");
      });
  }, [linkID, history]);

  const WelcomeMessage = () => {
    return (
      <div class="row">
        <Heading className="welcome-text mb-4 mt-3" fontWeight="bold" size="lg">
          Welcome, welcome! Thanks for being visitor #{link.child_index}! Check
          out these stats for rippl.it:{" "}
          <span class="welcome-text-title"> {ripple.title || "Untitled"} </span>
        </Heading>
      </div>
    );
  };

  const StatCards = () => {
    return (
      <div class="row justify-content-around">
        <RippleStatCard
          className="col"
          stat={`$${link.total_raised}`}
          field="raised"
        />
        <RippleStatCard className="col" stat={link.total_views} field="views" />
        <RippleStatCard
          className="col"
          stat={link.total_children}
          field="unique visitors"
        />
        <RippleStatCard
          className="col"
          stat={link.total_descendants}
          field="descendants"
        />
        <RippleStatCard className="col" stat={link.total_depth} field="depth" />
        <RippleStatCard
          className="col-sm"
          stat={link.total_miles}
          field="miles"
        />
      </div>
    );
  };

  const ShareRipplit = () => {
    return (
      <div class="row mt-3">
        <Text>
          Let's continue this chain and share this rippl.it with more friends!
        </Text>
        <ButtonR
          className="ripplit-button m-2"
          fontSize={{ sm: "12px", md: "16px" }}
          onClick={() => copyLink()}
        >{`rippl.its/ripplits/${link?._id}`}</ButtonR>
      </div>
    );
  };

  const Organizations = () => {
    return (
      <Card className="orgs-card" maxHeight={{ sm: "440px", md: "740px", lg: "500px", xl: "440px" }}>
        <Text className="my-3" fontWeight="bold">
          Let's learn more about these organizations!
        </Text>
        {ripple?.organizations?.map(orgID => (
          <OrganizationCard key={orgID} id={orgID} />
        ))}
      </Card>
    );
  };

  if (loading) {
    return <div />;
  } else {
    return (
      <Flex
        className="ripple-link justify-content-center align-items-center"
        height={{ md: "auto", lg: "92%" }}
      >
        <div class="container">
          <div class="row">
            <div class="stats-container col text-left">
              {WelcomeMessage()}
              {StatCards()}
              {ShareRipplit()}
            </div>
            <div class="orgs-container col ml-lg-5 my-3 d-flex">
              {Organizations()}
            </div>
          </div>
        </div>
      </Flex>
    );
  }
}

export default WrappedMessage(RippleLink);
