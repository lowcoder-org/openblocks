import styled from "styled-components";
import { trans } from "../../i18n";
import { default as Divider } from "antd/es/divider";

import { Card } from "antd";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  height: 84px;
  width: 100%;
  display: flex;
  padding: 0 36px;
  align-items: center;
  flex-shrink: 0;
  @media screen and (max-width: 500px) {
    padding: 0 24px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
`;


const PublishMobileView = styled.div`
  font-size: 14px;
  color: #8b8fa3;
  flex-grow: 1;
  padding-top: 0px;
  padding-left: 40px;
  max-width: 95%;
`;

const StylePublishMobileCover = styled.div`
    background: rgb(2,0,36);
    background: -moz-linear-gradient(39deg, rgba(2,0,36,1) 0%, rgba(104,9,121,1) 35%, rgba(255,83,0,1) 100%);
    background: -webkit-linear-gradient(39deg, rgba(2,0,36,1) 0%, rgba(104,9,121,1) 35%, rgba(255,83,0,1) 100%);
    background: linear-gradient(39deg, rgba(2,0,36,1) 0%, rgba(104,9,121,1) 35%, rgba(255,83,0,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#ff5300",GradientType=1);
    padding: 25px;
    height: 120px;
    border-radius:10px 10px 0 0;
`;

const StylePublishMobileContent = styled.div` 
    position: relative;
    margin-top:-50px;
    display: flex;
    align-items: end;
    gap: 20px;

    .subtitle {
        color: #8b8fa3;
    }

    .button-end {
        margin-left: auto;
    }
    
    svg {
        margin-right: 5px;
        vertical-align: middle;
    }
`;

var PublishMobileLink = "https://www.wesetupyourwebviewapp.com/order-form-lowcoder.php";

export function PublishMobileLayout() {

  return (
    <Wrapper>
      <HeaderWrapper></HeaderWrapper>

      <ContentWrapper>
        <PublishMobileView>
          <StylePublishMobileCover>
            <h1 style={{color: "#ffffff", marginTop : "12px"}}>Lowcoder {trans("home.PublishMobile")}</h1>
          </StylePublishMobileCover>
          <Card style={{ marginBottom: "20px", minHeight : "800px" }}>
            <h4>{trans("home.PublishMobileLoading")}</h4>
            <iframe
              style={{ border: "none" }}
              title="Lowcoder PublishMobile"
              width="100%"
              height="800px"
              src={PublishMobileLink}
            />
            <Divider />

          </Card>  
          
        </PublishMobileView>
      </ContentWrapper>
    </Wrapper>
  );
}
