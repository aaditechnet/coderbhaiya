import { mentorPoses, type MentorPose } from "@/config/mentor";
import { mentorCopy } from "@/config/mentor-copy";
import { useLanguage } from "@/context/language-context";

export function useMentorCopy() { return mentorCopy[useLanguage().language]; }

export function Mentor({ pose, speech, compact = false }: { pose: MentorPose; speech: string; compact?: boolean }) {
  const asset = mentorPoses[pose];
  return <figure className={compact ? "mentor-inline" : "mentor-scene"}>
    <img src={asset.url} alt={asset.alt} width="292" height="350" decoding="async" className="mentor-image" />
    <figcaption className="mentor-speech"><span className="mb-2 block text-xs font-bold text-primary">CODER BHAIYA</span><p className="text-sm font-semibold leading-7">{speech}</p></figcaption>
  </figure>;
}