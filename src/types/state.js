//@flow
import type {Reducer} from 'Store/index.js';

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;

export type State = $ObjMap<Reducer, $ExtractFunctionReturn>;
