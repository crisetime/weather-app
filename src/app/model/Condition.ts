import { ICondition } from './ICondition';

export class Condition implements ICondition {
  constructor(public text: string, public icon: string, public code: number) {}
}
