import pose0 from "@/assets/mentor/joy.jpg.asset.json";
import pose1 from "@/assets/mentor/confused.jpg.asset.json";
import pose2 from "@/assets/mentor/coding.jpg.asset.json";
import pose3 from "@/assets/mentor/thinking.jpg.asset.json";
import pose4 from "@/assets/mentor/friendly.jpg.asset.json";
import pose5 from "@/assets/mentor/explaining.jpg.asset.json";
import pose6 from "@/assets/mentor/tea-break.jpg.asset.json";
import pose7 from "@/assets/mentor/victory.jpg.asset.json";
import pose8 from "@/assets/mentor/thumbs-up.jpg.asset.json";
import pose9 from "@/assets/mentor/welcome.jpg.asset.json";
import pose10 from "@/assets/mentor/debugging.jpg.asset.json";
import pose11 from "@/assets/mentor/brainstorming.jpg.asset.json";
import pose12 from "@/assets/mentor/teaching.jpg.asset.json";
import pose13 from "@/assets/mentor/surprised.jpg.asset.json";
import pose14 from "@/assets/mentor/sleeping.jpg.asset.json";
import pose15 from "@/assets/mentor/high-five.jpg.asset.json";
import pose16 from "@/assets/mentor/running.jpg.asset.json";
import pose17 from "@/assets/mentor/coffee.jpg.asset.json";
import pose18 from "@/assets/mentor/goodbye.jpg.asset.json";
import pose19 from "@/assets/mentor/meeting.jpg.asset.json";
import pose20 from "@/assets/mentor/aha.jpg.asset.json";
import pose21 from "@/assets/mentor/notification.jpg.asset.json";
import pose22 from "@/assets/mentor/error.jpg.asset.json";
import pose23 from "@/assets/mentor/birthday.jpg.asset.json";
import pose24 from "@/assets/mentor/thumbs-down.jpg.asset.json";
import pose25 from "@/assets/mentor/peace.jpg.asset.json";
import pose26 from "@/assets/mentor/listening.jpg.asset.json";
import pose27 from "@/assets/mentor/excited-idea.jpg.asset.json";
import pose28 from "@/assets/mentor/reading.jpg.asset.json";
import pose29 from "@/assets/mentor/frustrated.jpg.asset.json";
import pose30 from "@/assets/mentor/hydrating.jpg.asset.json";
import pose31 from "@/assets/mentor/feedback.jpg.asset.json";
import pose32 from "@/assets/mentor/showing.jpg.asset.json";
import pose33 from "@/assets/mentor/waving.jpg.asset.json";
import pose34 from "@/assets/mentor/phone.jpg.asset.json";
import pose35 from "@/assets/mentor/stretching.jpg.asset.json";

export const mentorPoses = {
  "joy": { url: pose0.url, alt: "Coder Bhaiya — joy pose from your original character library" },
  "confused": { url: pose1.url, alt: "Coder Bhaiya — confused pose from your original character library" },
  "coding": { url: pose2.url, alt: "Coder Bhaiya — coding pose from your original character library" },
  "thinking": { url: pose3.url, alt: "Coder Bhaiya — thinking pose from your original character library" },
  "friendly": { url: pose4.url, alt: "Coder Bhaiya — friendly pose from your original character library" },
  "explaining": { url: pose5.url, alt: "Coder Bhaiya — explaining pose from your original character library" },
  "tea-break": { url: pose6.url, alt: "Coder Bhaiya — tea break pose from your original character library" },
  "victory": { url: pose7.url, alt: "Coder Bhaiya — victory pose from your original character library" },
  "thumbs-up": { url: pose8.url, alt: "Coder Bhaiya — thumbs up pose from your original character library" },
  "welcome": { url: pose9.url, alt: "Coder Bhaiya — welcome pose from your original character library" },
  "debugging": { url: pose10.url, alt: "Coder Bhaiya — debugging pose from your original character library" },
  "brainstorming": { url: pose11.url, alt: "Coder Bhaiya — brainstorming pose from your original character library" },
  "teaching": { url: pose12.url, alt: "Coder Bhaiya — teaching pose from your original character library" },
  "surprised": { url: pose13.url, alt: "Coder Bhaiya — surprised pose from your original character library" },
  "sleeping": { url: pose14.url, alt: "Coder Bhaiya — sleeping pose from your original character library" },
  "high-five": { url: pose15.url, alt: "Coder Bhaiya — high five pose from your original character library" },
  "running": { url: pose16.url, alt: "Coder Bhaiya — running pose from your original character library" },
  "coffee": { url: pose17.url, alt: "Coder Bhaiya — coffee pose from your original character library" },
  "goodbye": { url: pose18.url, alt: "Coder Bhaiya — goodbye pose from your original character library" },
  "meeting": { url: pose19.url, alt: "Coder Bhaiya — meeting pose from your original character library" },
  "aha": { url: pose20.url, alt: "Coder Bhaiya — aha pose from your original character library" },
  "notification": { url: pose21.url, alt: "Coder Bhaiya — notification pose from your original character library" },
  "error": { url: pose22.url, alt: "Coder Bhaiya — error pose from your original character library" },
  "birthday": { url: pose23.url, alt: "Coder Bhaiya — birthday pose from your original character library" },
  "thumbs-down": { url: pose24.url, alt: "Coder Bhaiya — thumbs down pose from your original character library" },
  "peace": { url: pose25.url, alt: "Coder Bhaiya — peace pose from your original character library" },
  "listening": { url: pose26.url, alt: "Coder Bhaiya — listening pose from your original character library" },
  "excited-idea": { url: pose27.url, alt: "Coder Bhaiya — excited idea pose from your original character library" },
  "reading": { url: pose28.url, alt: "Coder Bhaiya — reading pose from your original character library" },
  "frustrated": { url: pose29.url, alt: "Coder Bhaiya — frustrated pose from your original character library" },
  "hydrating": { url: pose30.url, alt: "Coder Bhaiya — hydrating pose from your original character library" },
  "feedback": { url: pose31.url, alt: "Coder Bhaiya — feedback pose from your original character library" },
  "showing": { url: pose32.url, alt: "Coder Bhaiya — showing pose from your original character library" },
  "waving": { url: pose33.url, alt: "Coder Bhaiya — waving pose from your original character library" },
  "phone": { url: pose34.url, alt: "Coder Bhaiya — phone pose from your original character library" },
  "stretching": { url: pose35.url, alt: "Coder Bhaiya — stretching pose from your original character library" },
} as const;
export type MentorPose = keyof typeof mentorPoses;
