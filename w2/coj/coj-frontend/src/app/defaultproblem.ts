import { Problem } from './models/problem.model';

export const DEFAULT_PROBLEM: Problem = Object.freeze({
    id: 0,
    name: '',
    desc: '',
    difficulty: 'easy'
});