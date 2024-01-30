import SimpleLayout from "components/SimpleLayout";
import CoursesPlaceholder from "components/skeleton/CoursesPlaceholder";
import { server } from "config";
import type { Metadata } from "next";
import { Suspense } from "react";
import ListCourses from "./ListCourses";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "During my time at IUB, I've worked as a teaching assistant and research assistant for a few different courses. These are the courses I've instructed.",
  openGraph: {
    title: "Courses - Prakash Ravichandran",
    description:
      "During my time at IUB, I've worked as a teaching assistant and research assistant for a few different courses. These are the courses I've instructed.",
    url: `${server}/courses`,
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
    title: "Courses - Prakash Ravichandran",
    description:
      "During my time at IUB, I've worked as a teaching assistant and research assistant for a few different courses. These are the courses I've instructed.",
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
    canonical: `${server}/courses`,
    types: {
      "application/rss+xml": `${server}/feed.xml`,
    },
  },
};

export default function Courses(): JSX.Element {
  return (
    <SimpleLayout
      title="Courses that I've instructed as a Embedded Engineer"
      intro="During my studies, I delved into this course to broaden my knowledge and skill set."
    >
      <div className="mt-16 sm:mt-20">
        <Suspense fallback={<CoursesPlaceholder />}>
          {/* @ts-expect-error Server Component */}
          <ListCourses />
        </Suspense>
      </div>
    </SimpleLayout>
  );
}
