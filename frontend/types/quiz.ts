export interface QuizQuestion {
    year: number | null;
    event: string;
    setup: string;
    answers: {
      A: { text: string; response: string; correct: boolean };
      B: { text: string; response: string; correct: boolean };
      C: { text: string; response: string; correct: boolean };
    };
    education: string;
  }
  