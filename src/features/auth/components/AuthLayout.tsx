import { Grid } from "@mui/material";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      sx={{ p: 2 }}
      container
      direction="column"
      // justifyContent="flex-start"
      alignItems="center"
    >
      <img src="amazon.png" alt="amazon-logo" height="100px" />
      <main>{children}</main>
    </Grid>
  );
};

export default AuthLayout;
