import { BoardContent } from '../../components/pages/DeskLayout/ModalDesk/types';
import { IBoard } from '../../features/dashboard/interface';

export const parseBoardDescription = (data: IBoard) => {
  const { title } = data;
  const parsed = JSON.parse(title) as BoardContent;
  return parsed;
};
