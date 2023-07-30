
"use strict";

let GetSafetyMode = require('./GetSafetyMode.js')
let GetProgramState = require('./GetProgramState.js')
let IsProgramSaved = require('./IsProgramSaved.js')
let IsInRemoteControl = require('./IsInRemoteControl.js')
let RawRequest = require('./RawRequest.js')
let Load = require('./Load.js')
let GetRobotMode = require('./GetRobotMode.js')
let GetLoadedProgram = require('./GetLoadedProgram.js')
let IsProgramRunning = require('./IsProgramRunning.js')
let AddToLog = require('./AddToLog.js')
let Popup = require('./Popup.js')

module.exports = {
  GetSafetyMode: GetSafetyMode,
  GetProgramState: GetProgramState,
  IsProgramSaved: IsProgramSaved,
  IsInRemoteControl: IsInRemoteControl,
  RawRequest: RawRequest,
  Load: Load,
  GetRobotMode: GetRobotMode,
  GetLoadedProgram: GetLoadedProgram,
  IsProgramRunning: IsProgramRunning,
  AddToLog: AddToLog,
  Popup: Popup,
};
