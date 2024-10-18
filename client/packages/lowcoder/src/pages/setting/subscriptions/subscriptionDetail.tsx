import styled from "styled-components";
import { trans } from "i18n";
import { useParams } from "react-router-dom";
import { HeaderBack } from "../permission/styledComponents";
import history from "util/history";
import { SUBSCRIPTION_SETTING } from "constants/routesURL";
import { getProduct }  from '@lowcoder-ee/api/subscriptionApi';
import {MultiIconDisplay} from "@lowcoder-ee/comps/comps/multiIconDisplay";

const FieldWrapper = styled.div`
  margin-bottom: 32px;
  width: 408px;
  margin-top: 40px;
`;

const Wrapper = styled.div`
  padding: 32px 24px;
`;

export function SubscriptionDetail() {
  const { subscriptionId } = useParams<{ subscriptionId: string }>();
  const { productId } = useParams<{ productId: string }>();

  const product = getProduct(productId);

  console.log("product", product);

  return (
    <Wrapper>
      <HeaderBack>
        <span onClick={() => history.push(SUBSCRIPTION_SETTING)}>
          {trans("settings.subscription")}
        </span>
        <MultiIconDisplay identifier="/icon:svg/ArrowIcon" />
      </HeaderBack>
      <div>
        <h1>{`Subscription ID: ${subscriptionId}`}</h1>
      </div>
    </Wrapper>
  );
}

export default SubscriptionDetail;
