import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { Author } from "@/sanity/types";

export type LocalDetailsAuthorPropsType = {
  author: Author;
};

export const LocalDetailsAuthor = ({ author }: LocalDetailsAuthorPropsType) => (
  <Link href={`/browse/user/${author._id}`} className="local-details__author">
    <img
      src={author.image || ""}
      alt="avatar"
      className="local-details__author-image"
    />
    <div className="local-details__author-content">
      <p className="local-details__author-name">{author.name}</p>
      <p className="local-details__author-username">@{author.username}</p>
    </div>
  </Link>
);
