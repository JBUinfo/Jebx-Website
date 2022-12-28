import angular from "./imgs/angular.png";
import assembly from "./imgs/assembly.png";
import bash from "./imgs/bash.png";
import blueprism from "./imgs/blueprism.png";
import bootstrap from "./imgs/bootstrap.png";
import cSharp from "./imgs/cSharp.png";
import css from "./imgs/css.png";
import docker from "./imgs/docker.png";
import elastic from "./imgs/elastic.png";
import figma from "./imgs/figma.png";
import git from "./imgs/git.png";
import html from "./imgs/html.png";
import javascript from "./imgs/javascript.png";
import jquery from "./imgs/jquery.png";
import jwt from "./imgs/JWT.png";
import mongoDB from "./imgs/mongoDB.png";
import mysql from "./imgs/mysql.png";
import nmap from "./imgs/nmap.png";
import nodejs from "./imgs/nodejs.png";
import php from "./imgs/php.png";
import python from "./imgs/python.png";
import R from "./imgs/R.png";
import react from "./imgs/react.png";
import semanticUI from "./imgs/semanticUI.png";
import socketio from "./imgs/socketio.png";
import solidity from "./imgs/solidity.png";
import styledComponents from "./imgs/styled-components.png";
import tradingView from "./imgs/trading view.png";
import typescript from "./imgs/typescript.png";
import wpf from "./imgs/wpf.png";
import redux from "./imgs/redux.png";
import web3js from "./imgs/web3js.png";
import electronjs from "./imgs/electronjs.png";
import go from "./imgs/go.png";
import tailwindcss from "./imgs/tailwindcss.png";
import ganache from "./imgs/ganache.png";
import axios from "./imgs/axios.png";
import graphql from "./imgs/graphql.png";
import nextjs from "./imgs/nextjs.png";
import jest_img from "./imgs/jest.png";
import vite from "./imgs/vite.png";
import vitest from "./imgs/vitest.png";
import firebase from "./imgs/firebase.png";
import nestjs from "./imgs/nestjs.png";
import cypress from "./imgs/cypress.png";
import sqlite from "./imgs/sqlite.png";
import mustachejs from "./imgs/mustache.png";
import express from "./imgs/express.png";
//import cplusplus from "./imgs/c++.png";

export interface IImage {
  name: string;
  src: string;
}

export interface IProject {
  year: number;
  title: { es: string; en: string };
  languages: string;
}

export const tech: IImage[] = [
  { name: "Redux", src: redux },
  { name: "WPF", src: wpf },
  { name: "Typescript", src: typescript },
  { name: "Trading View", src: tradingView },
  { name: "Styled Components", src: styledComponents },
  { name: "Solidity", src: solidity },
  { name: "Web3.js", src: web3js },
  { name: "Socket.IO", src: socketio },
  { name: "Semantic UI", src: semanticUI },
  { name: "React", src: react },
  { name: "R", src: R },
  { name: "Python", src: python },
  { name: "PHP", src: php },
  { name: "NodeJS", src: nodejs },
  { name: "Angular", src: angular },
  { name: "Assembly", src: assembly },
  { name: "Bash", src: bash },
  { name: "Blue Prism", src: blueprism },
  { name: "Bootstrap", src: bootstrap },
  { name: "C#", src: cSharp },
  { name: "CSS", src: css },
  { name: "Docker", src: docker },
  { name: "Elasticsearch", src: elastic },
  { name: "Figma", src: figma },
  { name: "Git", src: git },
  { name: "HTML", src: html },
  { name: "Javascript", src: javascript },
  { name: "JQuery", src: jquery },
  { name: "JWT", src: jwt },
  { name: "MongoDB", src: mongoDB },
  { name: "MySQL", src: mysql },
  { name: "Nmap", src: nmap },
  { name: "Go", src: go },
  { name: "ElectronJS", src: electronjs },
  { name: "TailwindCSS", src: tailwindcss },
  { name: "Ganache", src: ganache },
  { name: "Axios", src: axios },
  { name: "MustacheJS", src: mustachejs },
  { name: "Express", src: express },
  { name: "Firebase", src: firebase },
  { name: "NestJS", src: nestjs },
  { name: "GraphQL", src: graphql },
  { name: "Vitest", src: vitest },
  { name: "Vite", src: vite },
  { name: "Jest", src: jest_img },
  { name: "SQlite", src: sqlite },
];
