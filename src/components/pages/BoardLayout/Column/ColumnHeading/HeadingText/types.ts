export type MyProps = {
  title: string;
  handleEditMode: () => void;
  handleDeleteColumn: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};
