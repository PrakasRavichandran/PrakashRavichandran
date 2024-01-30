import SimpleLayout from "components/SimpleLayout";
import SnippetsPlaceholder from "components/skeleton/SnippetsPlaceholder";
import { server } from "config";
import type { Metadata } from "next";
import { Suspense } from "react";
import ListSnippets from "./ListSnippets";

export const metadata: Metadata = {
  title: "Code Snippets",
  description:
    "I've been writing code for a long time. Here are some of the snippets I've found useful and reusable.",
  openGraph: {
    title: "Code Snippets - Prakash Ravichandran",
    description:
      "I've been writing code for a long time. Here are some of the snippets I've found useful and reusable.",
    url: `${server}/snippets`,
    type: "website",
    site_name: "Prakash Ravichandran - Innovative Researcher and Skilled Engineer",
    images: [
      {
        url: `${server}/images/og-image.png`,
        alt: "Prakash Ravichandran",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Prakash_r10",
    creator: "@Prakash_r10",
    title: "Code Snippets - Prakash Ravichandran",
    description:
      "I've been writing code for a long time. Here are some of the snippets I've found useful and reusable.",
    images: [
      {
        url: `${server}/images/og-image.png`,
        alt: "Prakash Ravichandran",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: `${server}/snippets`,
    types: {
      "application/rss+xml": `${server}/feed.xml`,
    },
  },
};

export default function Snippets(): JSX.Element {
  return (
    <SimpleLayout
      title="Snippets of Code I Find Useful"
      intro="I've been writing code for a long time. Here are some of the snippets I've found useful and reusable."
    >
      <div className="mt-16 sm:mt-20">
        <Suspense fallback={<SnippetsPlaceholder />}>
          {/* @ts-expect-error Server Component */}
          <ListSnippets />
        </Suspense>
      </div>
    </SimpleLayout>
  );
}
