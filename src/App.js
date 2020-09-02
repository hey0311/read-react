import * as React from "react";
// import {useState, useEffect} from "react";
import UseMemoPage from "./pages/UseMemoPage";
// import CommentListPage from "./pages/CommentListPage";
// import PureComponentPage from "./pages/PureComponentPage";
// import ReactMemoPage from "./pages/ReactMemoPage";
import UseCallbackPage from "./pages/UseCallbackPage";
// import ExamplePage from "./pages/ExamplePage";
// import ContextPage from "./pages/ContextPage";
// import SetStatePage from "./pages/SetStatePage";
// import RefPage from "./pages/RefPage";
// import SuspensePage from "./pages/SuspensePage";
// import DiffPage from "./pages/DiffPage";
// import ClassFunctionComponent from "./pages/ClassFunctionComponent";
// import UseReducerPage from "./pages/UseReducerPage";
import _ from 'lodash';
import $ from 'jquery';

const tempLog = console.log;
let colorArray = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
colorArray = [
  "#b099fb",
  "#1fd991",
  "#996107",
  "#dac0eb",
  "#5c9bfc",
  "#6bc395",
  "#ae96b8",
  "#c2db8d",
  "#5ce7b0",
  "#bcba5e",
  "#a48f33",
  "#aed6c4",
  "#25a8c2",
  "#60ad6f",
  "#9b413d",
  "#7e31b8",
  "#6a3520",
  "#628174",
  "#48a4a2",
  "#e06b18",
  "#1a23b7",
  "#7abc12",
  "#9eccc3",
  "#729e14",
  "#5e0efb",
  "#65798e",
  "#ca3621",
  "#de62ba",
  "#be1eb3",
  "#f7961b",
  "#5ac768",
  "#e1e36f",
  "#6ece61",
  "#9e7567",
  "#773621",
  "#e27cab",
  "#e6981a",
  "#a14168",
  "#2780d6",
  "#70a785",
  "#3b0dde",
  "#87e0a1",
  "#5d9dc9",
  "#5cf396",
  "#ee4e4c",
  "#9226a5",
  "#c361b3",
  "#b35244",
  "#e9ae96",
  "#b430d3",
  "#fc33c0",
  "#193667",
  "#cea692",
  "#c5b489",
  "#38e68c",
  "#208dd5",
  "#d9e98f",
  "#358a8b",
  "#f4d743",
  "#ee0cab",
  "#b70c5b",
  "#27c4c8",
  "#3b62b3",
  "#edf064",
  "#297d3f",
  "#336b59",
  "#33bb66",
  "#f846c8",
  "#833670",
  "#65f377",
  "#7f99a6",
  "#cd93ce",
  "#4c0fe3",
  "#ce417b",
  "#baeb2d",
  "#7d50c7",
  "#d3df23",
  "#cdf04b",
  "#6b130a",
  "#1a22ec",
  "#681f94",
  "#e3b938",
  "#752125",
  "#6ec395",
  "#81f578",
  "#71a6ec",
  "#e7294b",
  "#f7ba0d",
  "#f485e8",
  "#26dff6",
  "#d0b9d1",
  "#729742",
  "#1c75d1",
  "#cc8be7",
  "#4b63ec",
  "#9b52a1",
  "#469332",
  "#2c5d5f",
  "#97d98d",
  "#234ac9",
  "#a02d69",
  "#cc48d5",
  "#ff55bc",
  "#672244",
  "#1da216",
  "#ea61c0",
  "#88e9e4",
  "#205e60",
  "#2dacaa",
  "#3e7608",
  "#30f176",
  "#efc954",
  "#c39b9d",
  "#2f9f67",
  "#676906",
  "#9583c5",
  "#229b75",
  "#b3d461",
  "#81101b",
  "#658d74",
  "#996912",
  "#bfb248",
  "#477b87",
  "#587784",
  "#3873d2",
  "#fc5874",
  "#2693d9",
  "#3dde6a",
  "#eedfca",
  "#c6012b",
  "#3ea5df",
  "#6ecb6c",
  "#ef844c",
  "#481eef",
  "#2dccce",
  "#ce2656",
  "#f13099",
  "#3fc0ed",
  "#a72854",
  "#8c16a3",
  "#9ed8f4",
  "#55a3c4",
  "#4f06b2",
  "#46ac26",
  "#c44632",
  "#3ee935",
  "#f3d36f",
  "#118e95",
  "#33eddb",
  "#484c54",
  "#ba2b50",
  "#eb70a4",
  "#c30af1",
  "#575390",
  "#e06ecc",
  "#1092c5",
  "#a54678",
  "#8905e9",
  "#dda989",
  "#660bc5",
  "#6e9fbb",
  "#9587ce",
  "#137d21",
  "#186e73",
  "#e04f36",
  "#8a4cd0",
  "#de746b",
  "#28d773",
  "#866284",
  "#1b1379",
  "#fc43e7",
  "#ce0551",
  "#19a1c2",
  "#e9fe65",
  "#68a422",
  "#533b9d",
  "#2b6c63",
  "#f35abe",
  "#418158",
  "#dc5e56",
  "#626901"
]
let color = {};
let colorIndex = 0;
var getRandomColor = function () {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
let indent = 0;
let functionCountMap = {

}
console.log = (...args) => {
  if(args[0].reset){
    color={};
    colorIndex=0;
    indent=0;
    functionCountMap={}
  }
  if (args[0].function || args[0].content) {
    let p = args[0];
    let result = '';
    // if (p.path) {
    //   result += p.path + ' ';
    // }
    if (p.function) {
      if (functionCountMap[p.function]) {
        result += p.function + functionCountMap[p.function] + ' ';
      } else {
        result += p.function + ' ';
      }
    }
    if (p.start) {
      result += '开始'
      color[p.function] = colorArray[colorIndex];
      colorIndex++;
      indent++;
    }
    let indentStr = new Array(indent);
    if (p.end) {
      result += '结束'
      if (!functionCountMap[p.function]) {
        functionCountMap[p.function] = 2;
      } else {
        functionCountMap[p.function]++;
      }
      indent--;
    }
    if (p.content) {
      result += p.content;
    }
    let formatArguments = null;
    if (p.arguments) {
      formatArguments = {};
      for (let key in p.arguments) {
        if (p.arguments[key] instanceof HTMLElement) {
          formatArguments[key] = $(p.arguments[key]).clone();
        } else {
          formatArguments[key] = _.cloneDeep(p.arguments[key]);
        }
      }
    }
    let payload = '';
    if (p.payload) {
      payload = {};
      for (let key in p.payload) {
        if (p.payload[key] instanceof HTMLElement) {
          payload[key] = $(p.payload[key]).clone();
        } else {
          payload[key] = _.cloneDeep(p.payload[key]);
        }
      }
    }
    indentStr = indentStr.fill(' ').join('');
    tempLog('%c' + indentStr + result, 'color:' + color[p.function], (formatArguments ? formatArguments : ''), payload);
  } else {
    tempLog(...args);
  }
}
export default function App(props) {
  return (
    <div className="app">
      {/* <CommentListPage /> */}
      {/* <PureComponentPage /> */}
      {/* <ReactMemoPage /> */}
      <UseCallbackPage />
      {/* <UseMemoPage /> */}
      {/* <ExamplePage /> */}
      {/* <ContextPage /> */}
      {/* <SetStatePage /> */}
      {/* <RefPage /> */}
      {/* <SuspensePage /> */}
      {/* <DiffPage /> */}
      {/* <ClassFunctionComponent /> */}
      {/* <UseReducerPage /> */}
    </div>
  );
}
