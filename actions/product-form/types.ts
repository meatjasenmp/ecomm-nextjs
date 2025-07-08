export type ErrorProperties =
  | {
      [key: string]: {
        errors: string[];
      };
    }
  | undefined;
