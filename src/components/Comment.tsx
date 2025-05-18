"use client";
import Giscus from "@giscus/react";

export default function Comment() {
  return (
    <Giscus
      id="comments"
      repo="rizqydev/blog"
      repoId="R_kgDOL_ezEw"
      category="Announcements"
      categoryId="DIC_kwDOL_ezE84CqTDf"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark_dimmed"
      lang="en"
      loading="lazy"
    ></Giscus>
  );
}
