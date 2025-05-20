import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Started working as Product/IT Support at Dewaweb
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="gap-4">
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Started working as Freelance Fullstack Developer at Fiverr
            <li>Delivered 4+ projects that increased usability and assisted 80% of non-technical users with back-end programming tasks such as APIs and requests.</li>
            <li>Developed 3+ automation tools that streamlined user workflows, reducing manual tasks to zero cost.</li>
            <li>Designed and implemented 5+ Discord bots integrated with Discord API, which facilitated seamless
communication, automated processes, and improved user experience.</li>
          </p>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Started working as Freelance Article Thumbnail Editor at GKDI Church
          </p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Started working as Data Entry at my Family Business
          </p>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Started using unity and created Stardew Valley clone using it.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Made my first game using Construct 2
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
