import React, { useState, useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/core";
import Card from "./Card";
import "./OrganizationCard.css";

import { getOrganization } from "../api/organization";

function OrganizationCard(props) {
  const [organization, setOrganization] = useState({});

  useEffect(() => {
    getOrganization(props.id).then(res => {
      setOrganization(res);
    });
  }, [props.id]);

  return (
    <Card
      background="#FFFFFF"
      width="100%"
      margin="24px 0px 24px 0px"
      padding="24px"
      textAlign="center"
    >
      <Text fontWeight="bold">{organization.name}</Text>
      <Text>
        <a target="_blank" rel="noopener noreferrer" href={organization.url}>
          {organization.url}
        </a>
      </Text>
    </Card>
  );
}

export default OrganizationCard;
