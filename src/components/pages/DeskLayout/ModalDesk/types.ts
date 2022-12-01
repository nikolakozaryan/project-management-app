export type MyProps = {
  type: string;
  id: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type BoardContent = {
  name: string;
  description: string;
};
