export const lessonExamples: Record<string, { code: string; output: string; explanation: string }[]> = {
  python: [
    { code: 'print("Hello, beta!")', output: 'Hello, beta!', explanation: 'print() displays a value. The quotation marks tell Python that Hello, beta! is text.' },
    { code: 'name = "Aditya"\nprint(name)', output: 'Aditya', explanation: 'A variable gives a name to a value. print(name) displays the text stored in name.' },
    { code: 'for number in range(1, 4):\n    print(number)', output: '1\n2\n3', explanation: 'range(1, 4) provides 1, 2 and 3. The indented print statement runs once for each number.' },
  ],
  "c-programming": [{ code: '#include <stdio.h>\nint main(void) {\n  printf("Hello, beta!\\n");\n  return 0;\n}', output: 'Hello, beta!', explanation: 'main is the entry point. printf displays text, and return 0 signals successful completion.' }],
  "cpp-programming": [{ code: '#include <iostream>\nint main() {\n  std::cout << "Hello, beta!";\n  return 0;\n}', output: 'Hello, beta!', explanation: 'std::cout writes text to the standard output stream.' }],
  java: [{ code: 'class Hello {\n  public static void main(String[] args) {\n    System.out.println("Hello, beta!");\n  }\n}', output: 'Hello, beta!', explanation: 'Java begins in main. println displays the text and adds a new line.' }],
  javascript: [{ code: 'const name = "Aditya";\nconsole.log(name);', output: 'Aditya', explanation: 'const names a value. console.log sends that value to the console.' }],
  typescript: [{ code: 'const name: string = "Aditya";\nconsole.log(name);', output: 'Aditya', explanation: 'The string annotation describes the expected type. The value is displayed in the console.' }],
  "html-css": [{ code: '<h1>Hello, beta!</h1>\n<style>h1 { font-family: sans-serif; }</style>', output: 'Hello, beta!', explanation: 'The h1 element is a heading. CSS changes its appearance.' }],
  "sql-databases": [{ code: "SELECT 'Hello, beta!' AS greeting;", output: 'greeting\nHello, beta!', explanation: 'SELECT returns a value. AS gives the result column a readable name.' }],
  php: [{ code: '<?php\necho "Hello, beta!";\n?>', output: 'Hello, beta!', explanation: 'echo outputs text inside a PHP block.' }],
  dsa: [{ code: 'values = [10, 20, 30]\nprint(values[0])', output: '10', explanation: 'An array-like list stores ordered values. Index 0 refers to its first element.' }],
};

export const demoPrograms = {
  python: { code: 'print("Hello, beta!")', output: 'Hello, beta!' },
  javascript: { code: 'console.log("Hello, beta!");', output: 'Hello, beta!' },
  c: { code: '#include <stdio.h>\nint main(void) { printf("Hello, beta!\\n"); return 0; }', output: 'Hello, beta!' },
} as const;
export type DemoLanguage = keyof typeof demoPrograms;
export function runDemo(language: DemoLanguage, code: string) {
  const example = demoPrograms[language];
  return code.trim() === example.code.trim() ? example.output : "This demo previews only the supplied example. Restore the example to see its output; custom code is not executed.";
}

export const visualTopics = [
  { title: 'Arrays', values: ['10', '20', '30', '40'], description: 'Ordered values are accessed by index, starting at 0.', action: 'Read next index' },
  { title: 'Linked Lists', values: ['10 →', '20 →', '30 →', 'null'], description: 'Each node holds a value and a link to the next node.', action: 'Follow next link' },
  { title: 'Stack', values: ['10', '20', '30', '40 ← top'], description: 'Last in, first out: remove 40 before the earlier values.', action: 'Pop next value' },
  { title: 'Queue', values: ['10 ← front', '20', '30', '40'], description: 'First in, first out: remove 10 before the later values.', action: 'Dequeue next value' },
  { title: 'Searching', values: ['10', '20', '30 ✓', '40'], description: 'Linear search checks each value in order until it finds the target, 30.', action: 'Check next value' },
  { title: 'Sorting', values: ['40', '10', '30', '20'], description: 'A bubble-sort pass compares adjacent values and swaps them if they are out of order.', action: 'Compare next pair' },
] as const;
export const quizQuestions = [
  { question: 'What does print("Hello") display in Python?', options: ['Hello', 'print', 'Nothing'], correct: 0, explanation: 'print displays the text inside the quotation marks.' },
  { question: 'What is the first index of [10, 20, 30]?', options: ['1', '0', '3'], correct: 1, explanation: 'List indexes start at 0, so values[0] is 10.' },
  { question: 'Which value leaves a stack first?', options: ['The oldest value', 'The smallest value', 'The last value added'], correct: 2, explanation: 'A stack follows last in, first out.' },
] as const;