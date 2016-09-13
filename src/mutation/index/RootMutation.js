/***
*该文件用于整合初始化的state 以及mutation
***/

import { GameState, GameMutation } from './GameMutation';
import { RuleState, RuleMutation } from './RuleMutation';

export const IndexRootState = Object.assign({}, GameState, RuleState);
export const IndexRootMutation = Object.assign({}, GameMutation, RuleMutation);