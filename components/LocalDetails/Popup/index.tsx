"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Field } from "@/lib";

import { UpdateTitle } from "./UpdateTitle";
import { UpdateDescription } from "./UpdateDescription";
import { UpdateImage } from "./UpdateImage";
import { UpdateCategories } from "./UpdateCategories";
import { UpdateLocalInfo } from "./UpdateLocalInfo";

import "./Popup.scss";

export type PopupConfigsType = {
  [Field.IMAGE]: { image: string };
  [Field.TITLE]: { title: string };
  [Field.DESCRIPTION]: { description: string };
  [Field.CATEGORIES]: { categories: string[] };
  [Field.LOCAL_INFO]: {
    phone: string | undefined;
    address: string | undefined;
  };
};

export type PopupConfigType =
  | PopupConfigsType[Field.IMAGE]
  | PopupConfigsType[Field.TITLE]
  | PopupConfigsType[Field.DESCRIPTION]
  | PopupConfigsType[Field.CATEGORIES]
  | PopupConfigsType[Field.LOCAL_INFO];

export type PopupPropsType = {
  localId: string;
  field: Field;
  config: PopupConfigType;
};

const renderPopupContent = ({
  field,
  config,
  localId,
}: {
  field: Field;
  config: PopupConfigType;
  localId: string;
}) => {
  switch (field) {
    case Field.TITLE:
      return (
        <UpdateTitle
          config={config as PopupConfigsType[Field.TITLE]}
          localId={localId}
        />
      );
    case Field.DESCRIPTION:
      return (
        <UpdateDescription
          config={config as PopupConfigsType[Field.DESCRIPTION]}
          localId={localId}
        />
      );
    case Field.IMAGE:
      return (
        <UpdateImage
          config={config as PopupConfigsType[Field.IMAGE]}
          localId={localId}
        />
      );
    case Field.CATEGORIES:
      return (
        <UpdateCategories
          config={config as PopupConfigsType[Field.CATEGORIES]}
          localId={localId}
        />
      );
    case Field.LOCAL_INFO:
      return (
        <UpdateLocalInfo
          config={config as PopupConfigsType[Field.LOCAL_INFO]}
          localId={localId}
        />
      );
    default:
      return null;
  }
};

export const Popup = ({ localId, field, config }: PopupPropsType) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    router.push(pathname);
  };

  return (
    <div className="popup">
      <div onClick={handleClick} className="popup__layer" />
      <div className="popup__container">
        {renderPopupContent({ localId, field, config })}
      </div>
    </div>
  );
};
