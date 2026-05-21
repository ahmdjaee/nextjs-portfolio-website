"use client"

import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

interface CodeblockProps {
  content: string;
}

function Codeblock({ content }: CodeblockProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, [content]);

  return (
    <div
      className="prose prose-invert prose-lg max-w-none
        prose-headings:text-foreground prose-headings:font-bold
        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-muted prose-pre:border prose-pre:border-border
        [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-foreground [&_h1]:mt-12 [&_h1]:mb-4
        [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4
        [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3
        [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-6
        [&_a]:text-primary [&_a]:no-underline hover:[&_a]:underline
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-6 [&_ul]:space-y-2
        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-6 [&_ol]:space-y-2
        [&_li]:text-muted-foreground [&_li]:leading-relaxed [&_li]:pl-1
        [&_li>p]:mb-0 [&_li>ul]:my-2 [&_li>ol]:my-2
        [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground
        [&_img]:rounded-lg [&_img]:my-8
        [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-muted [&_pre]:border [&_pre]:border-border
        [&_table]:w-full [&_table]:my-8 [&_table]:border-collapse
        [&_th]:border [&_th]:border-border [&_th]:p-3 [&_th]:text-left [&_td]:border [&_td]:border-border [&_td]:p-3"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default Codeblock;
