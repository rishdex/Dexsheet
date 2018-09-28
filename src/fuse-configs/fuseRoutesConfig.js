import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import { SheetConfig } from '../main/pages/SheetConfig';

const routeConfigs = [
    SheetConfig
];

export const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/"/>
    }
];
