/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { ConfigType, configEquals } from './data/config';
import Configurable from './data/configurable';
import { allEqual, array, directionToRotation, escape, maxBy, minBy, move, orientationToRotation, resize, unescape } from './data/dataHelper';
import { isEventHandler } from './data/events/eventHelper';
import { handlesFinalValidation } from './data/events/onFinalValidation';
import { handlesGridChange } from './data/events/onGridChange';
import { handlesGridResize } from './data/events/onGridResize';
import { handlesSetGrid } from './data/events/onSetGrid';
import { handlesSymbolValidation } from './data/events/onSymbolValidation';
import GridData from './data/grid';
import GridConnections from './data/gridConnections';
import Instruction from './data/instruction';
import { COMPARISONS, Color, Comparison, DIRECTIONS, Direction, Mode, ORIENTATIONS, Orientation, State, directionToggle, orientationToggle } from './data/primitives';
import { MetadataSchema, PuzzleSchema } from './data/puzzle';
import BanPatternRule from './data/rules/banPatternRule';
import CellCountRule from './data/rules/cellCountRule';
import CompletePatternRule from './data/rules/completePatternRule';
import ConnectAllRule from './data/rules/connectAllRule';
import CustomRule from './data/rules/customRule';
import ForesightRule from './data/rules/foresightRule';
import { allRules } from './data/rules/index';
import { ControlLine, Row } from './data/rules/musicControlLine';
import MusicGridRule from './data/rules/musicGridRule';
import MysteryRule from './data/rules/mysteryRule';
import OffByXRule from './data/rules/offByXRule';
import RegionAreaRule from './data/rules/regionAreaRule';
import RegionShapeRule from './data/rules/regionShapeRule';
import Rule from './data/rules/rule';
import SameShapeRule from './data/rules/sameShapeRule';
import SymbolsPerRegionRule from './data/rules/symbolsPerRegionRule';
import UndercluedRule from './data/rules/undercluedRule';
import UniqueShapeRule from './data/rules/uniqueShapeRule';
import { Serializer } from './data/serializer/allSerializers';
import { Compressor } from './data/serializer/compressor/allCompressors';
import CompressorBase from './data/serializer/compressor/compressorBase';
import DeflateCompressor from './data/serializer/compressor/deflateCompressor';
import GzipCompressor from './data/serializer/compressor/gzipCompressor';
import StreamCompressor from './data/serializer/compressor/streamCompressor';
import SerializerBase from './data/serializer/serializerBase';
import SerializerV0 from './data/serializer/serializer_v0';
import { getShapeVariants, normalizeShape, positionsToShape, shapeEquals, tilesToShape } from './data/shapes';
import { allSolvers } from './data/solver/allSolvers';
import BacktrackSolver from './data/solver/backtrack/backtrackSolver';
import BTModule, { BTGridData, BTTile, IntArray2D, colorToBTTile, createOneTileResult, getOppositeColor } from './data/solver/backtrack/data';
import BanPatternBTModule from './data/solver/backtrack/rules/banPattern';
import CellCountBTModule from './data/solver/backtrack/rules/cellCount';
import ConnectAllBTModule from './data/solver/backtrack/rules/connectAll';
import RegionAreaBTModule from './data/solver/backtrack/rules/regionArea';
import RegionShapeBTModule from './data/solver/backtrack/rules/regionShape';
import SameShapeBTModule from './data/solver/backtrack/rules/sameShape';
import SymbolsPerRegionBTModule from './data/solver/backtrack/rules/symbolsPerRegion';
import UniqueShapeBTModule from './data/solver/backtrack/rules/uniqueShape';
import AreaNumberBTModule from './data/solver/backtrack/symbols/areaNumber';
import DartBTModule from './data/solver/backtrack/symbols/dart';
import DirectionLinkerBTModule from './data/solver/backtrack/symbols/directionLinker';
import GalaxyBTModule from './data/solver/backtrack/symbols/galaxy';
import LetterBTModule from './data/solver/backtrack/symbols/letter';
import LotusBTModule from './data/solver/backtrack/symbols/lotus';
import MinesweeperBTModule from './data/solver/backtrack/symbols/minesweeper';
import MyopiaBTModule from './data/solver/backtrack/symbols/myopia';
import ViewpointBTModule from './data/solver/backtrack/symbols/viewpoint';
import Solver from './data/solver/solver';
import UndercluedSolver from './data/solver/underclued/undercluedSolver';
import AreaNumberModule from './data/solver/z3/modules/areaNumberModule';
import CellCountModule from './data/solver/z3/modules/cellCountModule';
import ConnectAllModule from './data/solver/z3/modules/connectAllModule';
import DartModule from './data/solver/z3/modules/dartModule';
import { allZ3Modules } from './data/solver/z3/modules/index';
import LetterModule from './data/solver/z3/modules/letterModule';
import MyopiaModule from './data/solver/z3/modules/myopiaModule';
import RegionAreaModule from './data/solver/z3/modules/regionAreaModule';
import ViewpointModule from './data/solver/z3/modules/viewpointModule';
import Z3Module from './data/solver/z3/modules/z3Module';
import { convertDirection } from './data/solver/z3/utils';
import Z3Solver from './data/solver/z3/z3Solver';
import Z3SolverContext from './data/solver/z3/z3SolverContext';
import AreaNumberSymbol from './data/symbols/areaNumberSymbol';
import CustomIconSymbol from './data/symbols/customIconSymbol';
import CustomSymbol from './data/symbols/customSymbol';
import CustomTextSymbol from './data/symbols/customTextSymbol';
import DartSymbol from './data/symbols/dartSymbol';
import DirectionLinkerSymbol from './data/symbols/directionLinkerSymbol';
import GalaxySymbol from './data/symbols/galaxySymbol';
import { allSymbols } from './data/symbols/index';
import LetterSymbol from './data/symbols/letterSymbol';
import LotusSymbol from './data/symbols/lotusSymbol';
import MinesweeperSymbol from './data/symbols/minesweeperSymbol';
import MultiEntrySymbol from './data/symbols/multiEntrySymbol';
import MyopiaSymbol from './data/symbols/myopiaSymbol';
import NumberSymbol from './data/symbols/numberSymbol';
import Symbol from './data/symbols/symbol';
import ViewpointSymbol from './data/symbols/viewpointSymbol';
import TileData from './data/tile';
import TileConnections from './data/tileConnections';
import validateGrid, { aggregateState, applyFinalOverrides } from './data/validate';

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
