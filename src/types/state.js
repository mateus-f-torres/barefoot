//@flow
import type {Reducer} from 'ducks/reducers';

type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;

export type State = $ObjMap<Reducer, $ExtractFunctionReturn>;
