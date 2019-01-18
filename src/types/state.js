//@flow
import type {Reducer} from 'Stores/index';

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;

export type State = $ObjMap<Reducer, $ExtractFunctionReturn>;
