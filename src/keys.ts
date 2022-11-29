import { InjectionKey } from "vue";
import { ExampleKey } from './types';

export const exampleKey = Symbol() as InjectionKey<ExampleKey>;