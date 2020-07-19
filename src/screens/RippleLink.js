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
      .then((res) => {
        if (res.link._id !== linkID) {
          history.push(`/ripplits/${res.link._id}`);
        } else {
          setLink(res.link);
          setRipple(res.ripple);
          setLoading(false);
        }
      })
      .catch((res) => {
        history.push("/404");
      });

    if (process.env.REACT_APP_PRODUCTION === "true") {
      fetchGeolocation()
        .then((res) => setLocation([res.latitude, res.longitude]))
        .catch((err) => {});
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

  const ResponsiveStatsCards = () => {
    return (
      <section class="stats-cards" id="stats-cards">
        <ul>
          <li>
            <RippleStatCard
              className="col"
              stat={`$${link.total_raised}`}
              field="raised"
            />
          </li>
          <li>
            <RippleStatCard
              className="col"
              stat={link.total_views}
              field="views"
            />
          </li>
          <li>
            <RippleStatCard
              className="col"
              stat={link.total_children}
              field="unique visitors"
            />
          </li>
          <li>
            <RippleStatCard
              className="col"
              stat={link.total_descendants}
              field="descendants"
            />
          </li>
          <li>
            <RippleStatCard
              className="col"
              stat={link.total_depth}
              field="depth"
            />
          </li>
          <li>
            <RippleStatCard
              className="col-sm"
              stat={link.total_miles}
              field="miles"
            />
          </li>
        </ul>
      </section>
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
          className="orgs-card ml-sm-3 my-2"
          maxHeight={{ sm: "500px", md: "500px", lg: "270px" }}
        >
          <Text className="my-3" fontWeight="bold">
            Let's learn more about these organizations!
          </Text>
          {ripple?.organizations?.map((orgID) => (
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
            <div class="stats-container col text-md-left">
              {ResponsiveStatsCards()}
            </div>
            <div class="orgs-container col d-flex h-50">
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
