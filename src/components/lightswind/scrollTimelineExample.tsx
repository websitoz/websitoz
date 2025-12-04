import { ScrollTimeline } from "@/components/lightswind/scroll-timeline"

// Define your timeline events
const events = [
  {
    year: "2023",
    title: "Major Achievement",
    subtitle: "Organization Name",
    description: "Description of the achievement."
  },
  {
    year: "2022",
    title: "Important Milestone",
    subtitle: "Organization Name",
    description: "Details about the milestone."
  },
]

export function ScrollTimelineExample() {
  return (
    <ScrollTimeline 
      events={events}
      title="Our Workflow"
  subtitle="From idea to impact — a seamless journey to build digital excellence"
      progressIndicator={true}
      cardAlignment="alternating"
      revealAnimation="fade"
    />
  )
}