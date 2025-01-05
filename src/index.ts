/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { ConfigType, configEquals } from '../src/data/config';
import Configurable from '../src/data/configurable';
import { allEqual, array, directionToRotation, escape, maxBy, minBy, move, orientationToRotation, resize, unescape } from '../src/data/dataHelper';
import { isEventHandler } from '../src/data/events/eventHelper';
import { handlesFinalValidation } from '../src/data/events/onFinalValidation';
import { handlesGridChange } from '../src/data/events/onGridChange';
import { handlesGridResize } from '../src/data/events/onGridResize';
import { handlesSetGrid } from '../src/data/events/onSetGrid';
import { handlesSymbolValidation } from '../src/data/events/onSymbolValidation';
import GridData from '../src/data/grid';
import GridConnections from '../src/data/gridConnections';
import Instruction from '../src/data/instruction';
import { COMPARISONS, Color, Comparison, DIRECTIONS, Direction, Mode, ORIENTATIONS, Orientation, State, directionToggle, orientationToggle } from '../src/data/primitives';
import { MetadataSchema, PuzzleSchema } from '../src/data/puzzle';
import BanPatternRule from '../src/data/rules/banPatternRule';
import CellCountRule from '../src/data/rules/cellCountRule';
import CompletePatternRule from '../src/data/rules/completePatternRule';
import ConnectAllRule from '../src/data/rules/connectAllRule';
import CustomRule from '../src/data/rules/customRule';
import ForesightRule from '../src/data/rules/foresightRule';
import { allRules } from '../src/data/rules/index';
import { ControlLine, Row } from '../src/data/rules/musicControlLine';
import MusicGridRule from '../src/data/rules/musicGridRule';
import MysteryRule from '../src/data/rules/mysteryRule';
import OffByXRule from '../src/data/rules/offByXRule';
import RegionAreaRule from '../src/data/rules/regionAreaRule';
import RegionShapeRule from '../src/data/rules/regionShapeRule';
import Rule from '../src/data/rules/rule';
import SameShapeRule from '../src/data/rules/sameShapeRule';
import SymbolsPerRegionRule from '../src/data/rules/symbolsPerRegionRule';
import UndercluedRule from '../src/data/rules/undercluedRule';
import UniqueShapeRule from '../src/data/rules/uniqueShapeRule';
import { Serializer } from '../src/data/serializer/allSerializers';
import { Compressor } from '../src/data/serializer/compressor/allCompressors';
import CompressorBase from '../src/data/serializer/compressor/compressorBase';
import DeflateCompressor from '../src/data/serializer/compressor/deflateCompressor';
import GzipCompressor from '../src/data/serializer/compressor/gzipCompressor';
import StreamCompressor from '../src/data/serializer/compressor/streamCompressor';
import SerializerBase from '../src/data/serializer/serializerBase';
import SerializerV0 from '../src/data/serializer/serializer_v0';
import { getShapeVariants, normalizeShape, positionsToShape, shapeEquals, tilesToShape } from '../src/data/shapes';
import { allSolvers } from '../src/data/solver/allSolvers';
import BacktrackSolver from '../src/data/solver/backtrack/backtrackSolver';
import BTModule, { BTGridData, BTTile, IntArray2D, colorToBTTile, createOneTileResult, getOppositeColor } from '../src/data/solver/backtrack/data';
import BanPatternBTModule from '../src/data/solver/backtrack/rules/banPattern';
import CellCountBTModule from '../src/data/solver/backtrack/rules/cellCount';
import ConnectAllBTModule from '../src/data/solver/backtrack/rules/connectAll';
import RegionAreaBTModule from '../src/data/solver/backtrack/rules/regionArea';
import RegionShapeBTModule from '../src/data/solver/backtrack/rules/regionShape';
import SameShapeBTModule from '../src/data/solver/backtrack/rules/sameShape';
import SymbolsPerRegionBTModule from '../src/data/solver/backtrack/rules/symbolsPerRegion';
import UniqueShapeBTModule from '../src/data/solver/backtrack/rules/uniqueShape';
import AreaNumberBTModule from '../src/data/solver/backtrack/symbols/areaNumber';
import DartBTModule from '../src/data/solver/backtrack/symbols/dart';
import DirectionLinkerBTModule from '../src/data/solver/backtrack/symbols/directionLinker';
import GalaxyBTModule from '../src/data/solver/backtrack/symbols/galaxy';
import LetterBTModule from '../src/data/solver/backtrack/symbols/letter';
import LotusBTModule from '../src/data/solver/backtrack/symbols/lotus';
import MinesweeperBTModule from '../src/data/solver/backtrack/symbols/minesweeper';
import MyopiaBTModule from '../src/data/solver/backtrack/symbols/myopia';
import ViewpointBTModule from '../src/data/solver/backtrack/symbols/viewpoint';
import Solver from '../src/data/solver/solver';
import UndercluedSolver from '../src/data/solver/underclued/undercluedSolver';
import AreaNumberModule from '../src/data/solver/z3/modules/areaNumberModule';
import CellCountModule from '../src/data/solver/z3/modules/cellCountModule';
import ConnectAllModule from '../src/data/solver/z3/modules/connectAllModule';
import DartModule from '../src/data/solver/z3/modules/dartModule';
import { allZ3Modules } from '../src/data/solver/z3/modules/index';
import LetterModule from '../src/data/solver/z3/modules/letterModule';
import MyopiaModule from '../src/data/solver/z3/modules/myopiaModule';
import RegionAreaModule from '../src/data/solver/z3/modules/regionAreaModule';
import ViewpointModule from '../src/data/solver/z3/modules/viewpointModule';
import Z3Module from '../src/data/solver/z3/modules/z3Module';
import { convertDirection } from '../src/data/solver/z3/utils';
import Z3Solver from '../src/data/solver/z3/z3Solver';
import Z3SolverContext from '../src/data/solver/z3/z3SolverContext';
import AreaNumberSymbol from '../src/data/symbols/areaNumberSymbol';
import CustomIconSymbol from '../src/data/symbols/customIconSymbol';
import CustomSymbol from '../src/data/symbols/customSymbol';
import CustomTextSymbol from '../src/data/symbols/customTextSymbol';
import DartSymbol from '../src/data/symbols/dartSymbol';
import DirectionLinkerSymbol from '../src/data/symbols/directionLinkerSymbol';
import GalaxySymbol from '../src/data/symbols/galaxySymbol';
import { allSymbols } from '../src/data/symbols/index';
import LetterSymbol from '../src/data/symbols/letterSymbol';
import LotusSymbol from '../src/data/symbols/lotusSymbol';
import MinesweeperSymbol from '../src/data/symbols/minesweeperSymbol';
import MultiEntrySymbol from '../src/data/symbols/multiEntrySymbol';
import MyopiaSymbol from '../src/data/symbols/myopiaSymbol';
import NumberSymbol from '../src/data/symbols/numberSymbol';
import Symbol from '../src/data/symbols/symbol';
import ViewpointSymbol from '../src/data/symbols/viewpointSymbol';
import TileData from '../src/data/tile';
import TileConnections from '../src/data/tileConnections';
import validateGrid, { aggregateState, applyFinalOverrides } from '../src/data/validate';

export {
  ConfigType,
  configEquals,
  Configurable,
  allEqual,
  array,
  directionToRotation,
  escape,
  maxBy,
  minBy,
  move,
  orientationToRotation,
  resize,
  unescape,
  isEventHandler,
  handlesFinalValidation,
  handlesGridChange,
  handlesGridResize,
  handlesSetGrid,
  handlesSymbolValidation,
  GridData,
  GridConnections,
  Instruction,
  COMPARISONS,
  Color,
  Comparison,
  DIRECTIONS,
  Direction,
  Mode,
  ORIENTATIONS,
  Orientation,
  State,
  directionToggle,
  orientationToggle,
  MetadataSchema,
  PuzzleSchema,
  BanPatternRule,
  CellCountRule,
  CompletePatternRule,
  ConnectAllRule,
  CustomRule,
  ForesightRule,
  allRules,
  ControlLine,
  Row,
  MusicGridRule,
  MysteryRule,
  OffByXRule,
  RegionAreaRule,
  RegionShapeRule,
  Rule,
  SameShapeRule,
  SymbolsPerRegionRule,
  UndercluedRule,
  UniqueShapeRule,
  Serializer,
  Compressor,
  CompressorBase,
  DeflateCompressor,
  GzipCompressor,
  StreamCompressor,
  SerializerBase,
  SerializerV0,
  getShapeVariants,
  normalizeShape,
  positionsToShape,
  shapeEquals,
  tilesToShape,
  allSolvers,
  BacktrackSolver,
  BTModule,
  BTGridData,
  BTTile,
  IntArray2D,
  colorToBTTile,
  createOneTileResult,
  getOppositeColor,
  BanPatternBTModule,
  CellCountBTModule,
  ConnectAllBTModule,
  RegionAreaBTModule,
  RegionShapeBTModule,
  SameShapeBTModule,
  SymbolsPerRegionBTModule,
  UniqueShapeBTModule,
  AreaNumberBTModule,
  DartBTModule,
  DirectionLinkerBTModule,
  GalaxyBTModule,
  LetterBTModule,
  LotusBTModule,
  MinesweeperBTModule,
  MyopiaBTModule,
  ViewpointBTModule,
  Solver,
  UndercluedSolver,
  AreaNumberModule,
  CellCountModule,
  ConnectAllModule,
  DartModule,
  allZ3Modules,
  LetterModule,
  MyopiaModule,
  RegionAreaModule,
  ViewpointModule,
  Z3Module,
  convertDirection,
  Z3Solver,
  Z3SolverContext,
  AreaNumberSymbol,
  CustomIconSymbol,
  CustomSymbol,
  CustomTextSymbol,
  DartSymbol,
  DirectionLinkerSymbol,
  GalaxySymbol,
  allSymbols,
  LetterSymbol,
  LotusSymbol,
  MinesweeperSymbol,
  MultiEntrySymbol,
  MyopiaSymbol,
  NumberSymbol,
  Symbol,
  ViewpointSymbol,
  TileData,
  TileConnections,
  validateGrid,
  aggregateState,
  applyFinalOverrides,
};
