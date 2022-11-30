import { IBoard } from '../../../../features/dashboard/interface';

export type MyProps = {
  edit: React.Dispatch<React.SetStateAction<boolean>>;
  info?: IBoard;
  changeId: React.Dispatch<React.SetStateAction<string>>;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
};
