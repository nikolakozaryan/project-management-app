export type ParsedToken = {
  id: string;
  login: string;
  exp: number;
};

export type MyState = { logout: () => void };
