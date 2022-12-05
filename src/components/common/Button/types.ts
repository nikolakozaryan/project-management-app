import { DictionaryKeys } from '../../../constants/Dictionary/Dictionary';

export type MyProps = {
  type: DictionaryKeys;
  link: boolean;
  color?: string;
  formID?: string;
  header?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
