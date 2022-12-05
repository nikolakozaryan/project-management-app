export type MyProps = {
  type: string;
  id: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  hasSelect: boolean;
  taskId?: string;
  columnId?: string;
};

export type BoardContent = {
  name: string;
  description: string;
};
