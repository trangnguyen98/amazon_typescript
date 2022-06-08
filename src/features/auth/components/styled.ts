import { Button } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

const RegisterFormWrapper = styled.div`
  .box-register {
    padding: 17px;
  }

  span {
    font-size: 12px;

    a {
      text-decoration: none;
    }
  }

  .register-rules {
    margin-bottom: 26px;
  }

  .register-account {
    margin-top: 26px;

    div {
      font-size: 12px;

      a {
        text-decoration: none;
      }
    }
  }
`;

const BoxWrapper = styled(Box)`
  border: 1px solid #cccccc;
  width: 350px;
  max-width: 100%;
  margin-top: 2px;
  padding: 2px;
`;

const ButtonWrapper = styled(Button)`
  margin-bottom: 26px !important;
`;

export { RegisterFormWrapper, BoxWrapper, ButtonWrapper };
