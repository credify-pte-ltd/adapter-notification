import { TFunction } from "react-i18next";

export const getNotificationMessages = (code: string, t: TFunction<string>) => {
  switch (code) {
    case NOTIFICATION_CODE.E0001:
      return t(NOTIFICATION_CODE.E0001);
    case NOTIFICATION_CODE.E0002:
      return t(NOTIFICATION_CODE.E0002);
    default:
      return t("unexpected-error");
  }
};

export const NOTIFICATION_CODE = {
  E0001: "E0001",
  E0002: "E0002",
};
