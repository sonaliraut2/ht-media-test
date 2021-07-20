import React from "react";
import { Helmet } from "react-helmet";
import { Box } from "@material-ui/core";

/**
 * Reusable page container component with ability to manage the web page title.
 */
const Page = ({ title = "", children, ...props }) => {
  return (
    <Box p={3} {...props}>
      <Helmet>
        <title>HT {title ? `| ${title}` : ""}</title>
      </Helmet>
      {children}
    </Box>
  );
};

export default Page;
