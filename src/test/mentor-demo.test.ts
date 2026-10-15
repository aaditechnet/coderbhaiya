import { describe, expect, it } from "vitest";
import { demoPrograms, runDemo } from "@/config/learning-demo";
import { detectLanguage, supportedLanguages } from "@/config/i18n";
import { mentorCopy } from "@/config/mentor-copy";
import { mentorPoses } from "@/config/mentor";

describe("Frontend mentor foundation", () => {
  it("previews only supplied programs and never evaluates custom code", () => {
    expect(runDemo("python", demoPrograms.python.code)).toBe("Hello, beta!");
    expect(runDemo("javascript", "while(true) {} ")).toContain("custom code is not executed");
    expect(runDemo("c", demoPrograms.c.code)).toBe("Hello, beta!");
  });
  it("has speech for every selectable language and predictable locale fallback", () => {
    for (const { code } of supportedLanguages) expect(mentorCopy[code].welcome.length).toBeGreaterThan(0);
    expect(detectLanguage("hi-IN")).toBe("hi");
    expect(detectLanguage("fr-FR")).toBe("en");
    expect(detectLanguage()).toBe("en");
  });
  it("preserves all 36 original panels with descriptive alternatives", () => {
    expect(Object.keys(mentorPoses)).toHaveLength(36);
    for (const pose of Object.values(mentorPoses)) {
      expect(pose.url).toContain("/__l5e/assets-v1/");
      expect(pose.alt).toContain("Coder Bhaiya");
    }
  });
});