import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/core";
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
      width="stretch"
      margin="6px 16px"
      padding="16px"
      textAlign="center"
      overflowWrap="break-word"
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
