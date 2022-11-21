import { DictionaryKeys } from '../../../constants/Dictionary/Dictionary';

export type MyProps = {
  type: DictionaryKeys;
  link: boolean;
  color?: string;
  header?: boolean;
};