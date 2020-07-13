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
      padding="16px"
      textAlign="center"
      overflowWrap="break-word"
      className="orgs-individual-card mx-2 mb-2"
    >
      <Text fontWeight="bold" fontSize="0.75rem">{organization.name}</Text>
      <Text fontSize="0.75rem">
        <a target="_blank" rel="noopener noreferrer" href={organization.url}>
          {organization.url}
        </a>
      </Text>
    </Card>
  );
}

export default OrganizationCard;
