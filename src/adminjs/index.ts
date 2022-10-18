import AdminJS from "adminjs";
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize';
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { Category, Course, Episode, User } from "../models";
import bcrypt from 'bcrypt'
import { locale } from './locale'
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authtentication";

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
   databases: [sequelize],
	 resources: adminJsResources,
   rootPath: "/admin",
	 locale: locale,
	 dashboard: dashboardOptions,	
   branding: brandingOptions,
})

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
	adminJs, 
	authenticationOptions, 
	null, 
	{
		resave: false,
		saveUninitialized: false
	} 
)