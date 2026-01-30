import angular from "./tech-imgs/angular.png";
import assembly from "./tech-imgs/assembly.png";
import bash from "./tech-imgs/bash.png";
import blueprism from "./tech-imgs/blueprism.png";
import bootstrap from "./tech-imgs/bootstrap.png";
import cSharp from "./tech-imgs/cSharp.png";
import css from "./tech-imgs/css.png";
import docker from "./tech-imgs/docker.png";
import elastic from "./tech-imgs/elastic.png";
import figma from "./tech-imgs/figma.png";
import git from "./tech-imgs/git.png";
import html from "./tech-imgs/html.png";
import javascript from "./tech-imgs/javascript.png";
import jquery from "./tech-imgs/jquery.png";
import jwt from "./tech-imgs/JWT.png";
import mongoDB from "./tech-imgs/mongoDB.png";
import mysql from "./tech-imgs/mysql.png";
import nmap from "./tech-imgs/nmap.png";
import nodejs from "./tech-imgs/nodejs.png";
import php from "./tech-imgs/php.png";
import python from "./tech-imgs/python.png";
import R from "./tech-imgs/R.png";
import react from "./tech-imgs/react.png";
import semanticUI from "./tech-imgs/semanticUI.png";
import socketio from "./tech-imgs/socketio.png";
import solidity from "./tech-imgs/solidity.png";
import styledComponents from "./tech-imgs/styled-components.png";
import tradingView from "./tech-imgs/trading view.png";
import typescript from "./tech-imgs/typescript.png";
import wpf from "./tech-imgs/wpf.png";
import redux from "./tech-imgs/redux.png";
import web3js from "./tech-imgs/web3js.png";
import electronjs from "./tech-imgs/electronjs.png";
import go from "./tech-imgs/go.png";
import tailwindcss from "./tech-imgs/tailwindcss.png";
import ganache from "./tech-imgs/ganache.png";
import axios from "./tech-imgs/axios.png";
import graphql from "./tech-imgs/graphql.png";
import jest_img from "./tech-imgs/jest.png";
import vite from "./tech-imgs/vite.png";
import vitest from "./tech-imgs/vitest.png";
import firebase from "./tech-imgs/firebase.png";
import nestjs from "./tech-imgs/nestjs.png";
import sqlite from "./tech-imgs/sqlite.png";
import mustachejs from "./tech-imgs/mustache.png";
import express from "./tech-imgs/express.png";
import keras from "./tech-imgs/keras.png";

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
  { name: "Keras", src: keras },
];
