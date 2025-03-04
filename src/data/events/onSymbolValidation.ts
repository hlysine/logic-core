import GridData from '../grid.js';
import { State } from '../primitives.js';
import Rule from '../rules/rule.js';
import Symbol from '../symbols/symbol.js';
import { isEventHandler } from './eventHelper.js';

export interface SymbolValidationHandler {
  /**
   * Overrides the validation of symbols.
   *
   * You can return a different validation result, or call the original validation logic with a modified grid.
   *
   * @param grid - The grid to validate.
   * @param _symbol - The symbol to validate.
   * @param validator - The original validation logic for the symbol.
   * @returns The state of the symbol after validation.
   */
  onSymbolValidation(
    grid: GridData,
    symbol: Symbol,
    validator: (grid: GridData) => State
  ): State | undefined;
}

export function handlesSymbolValidation<T extends Rule>(
  val: T
): val is T & SymbolValidationHandler {
  return isEventHandler(val, 'onSymbolValidation');
}
