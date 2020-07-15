import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Flex, Text, Heading } from "@chakra-ui/core";

import Card from "../components/Card";
import ButtonR from "../components/Button";
import WrappedMessage from "../components/WrappedMessage";
import RippleStatCard from "../components/RippleStatCard";
import OrganizationCard from "../components/OrganizationCard";

import { getLink } from "../api/link";
import { fetchGeolocation } from "../api/ipdata";
import "./RippleLink.css";

function RippleLink(props) {
  const { linkID } = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const [link, setLink] = useState(undefined);
  const [ripple, setRipple] = useState(undefined);
  const [location, setLocation] = useState(undefined);

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

    if (process.env.REACT_APP_PRODUCTION) {
      fetchGeolocation()
        .then(res => setLocation([res.latitude, res.longitude]))
        .catch();
    }
  }, [linkID, history]);

  const WelcomeMessage = () => {
    return (
      <div class="row">
        <Heading
          className="welcome-text mb-3 mt-3"
          fontWeight="bold"
          size="lg"
          marginLeft={{ sm: "0px", md: "8px" }}
        >
          Welcome, welcome! Thanks for being visitor #{link.child_index}! Check
          out these stats for rippl.it:{" "}
          <span class="welcome-text-title"> {ripple.title || "Untitled"} </span>
        </Heading>
      </div>
    );
  };

  const StatCards = () => {
    return (
      <div class="row justify-content-around align-content-stretch h-100">
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
        <Text marginLeft={{ sm: "0px", md: "8px" }}>
          Let's continue this chain and share this rippl.it with more friends!
        </Text>
        <ButtonR
          marginLeft={{ sm: "12px", md: "16px" }}
          className="ripplit-button mt-2 mb-3"
          fontSize={{ sm: "12px", md: "16px" }}
          onClick={() => copyLink()}
        >{`rippl.its/ripplits/${link?._id}`}</ButtonR>
      </div>
    );
  };

  const Organizations = () => {
    return (
      <div className="row">
        <Card
          className="orgs-card ml-sm-3"
          margin="12px 0px"
          maxHeight={{ md: "500px", lg: "330px" }}
        >
          <Text className="my-3" fontWeight="bold">
            Let's learn more about these organizations!
          </Text>
          {ripple?.organizations?.map(orgID => (
            <OrganizationCard key={orgID} id={orgID} />
          ))}
        </Card>
      </div>
    );
  };

  if (loading) {
    return <div />;
  } else {
    return (
      <Flex
        className="ripple-link justify-content-center align-items-center text-left"
        height={{ md: "auto", lg: "96%" }}
        margin={{ sm: "auto", lg: "0% 4%", xl: "0% 8%" }}
      >
        <div class="container">
          {WelcomeMessage()}
          <div class="row">
            <div class="stats-container col text-md-left">{StatCards()}</div>
            <div class="orgs-container col ml-md-5 d-flex h-50">
              {Organizations()}
            </div>
          </div>
          {ShareRipplit()}
        </div>
      </Flex>
    );
  }
}

export default WrappedMessage(RippleLink);
