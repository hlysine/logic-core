import Solver from './solver';
import UndercluedSolver from './underclued/undercluedSolver';
import BacktrackSolver from './backtrack/backtrackSolver';
import Z3Solver from './z3/z3Solver';

const allSolvers = new Map<string, Solver>();

function register(prototype: Solver) {
  allSolvers.set(prototype.id, prototype);
}

register(new BacktrackSolver());
register(new UndercluedSolver());
register(new Z3Solver());

export { allSolvers };
