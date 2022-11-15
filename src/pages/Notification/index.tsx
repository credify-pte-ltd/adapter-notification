import { getNotificationMessages } from "../../constants";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Content, Title, Wrapper } from "./styles";
import MainLayout from "layout/MainLayout";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Page() {
  const { t } = useTranslation();
  const query = useQuery();
  const code = query.get("code") || "";

  const getNotificationContent = useMemo(() => {
    let message = "";
    message = getNotificationMessages(code, t);
    return message || t("unexpected-error");
  }, [code, t]);

  return (
    <MainLayout>
      <Wrapper className="page-wrapper">
        <Title>{t("title")}</Title>
        <Content>{getNotificationContent}</Content>
      </Wrapper>
    </MainLayout>
  );
}

export default Page;
