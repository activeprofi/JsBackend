#!/usr/bin/env node

import { l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString } from 'hexlet-pairs-data';
import { is, toString as htmlToString, hasChildren, children, map, filter, reduce, node } from 'hexlet-html-tags';

console.log(isList(node('p', 'sdffsdfs')));
