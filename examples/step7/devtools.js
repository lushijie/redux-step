/*
* @Author: lushijie
* @Date:   2016-09-26 17:20:02
* @Last Modified by:   lushijie
* @Last Modified time: 2016-09-26 17:42:33
*/

import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

//创建DevTools组件
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey ="ctrl-q">
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
);

export default DevTools
