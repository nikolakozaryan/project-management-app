import { DictionaryKeys } from '../../../constants/Dictionary';

export type MyProps = {
  type: DictionaryKeys;
  link: boolean;
  color?: string;
  header?: boolean;
};
