import { factsType } from "../../types/fact";

export type useFilterFactsProps = {
  facts: factsType;
  factsDispatcher: React.Dispatch<any>;
};
