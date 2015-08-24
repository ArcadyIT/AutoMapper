'use strict';
var GulpConfig = (function () {
    
    function gulpConfig() {

        // folder definitions        
        this.baseFolder = './';
        
        this.sourceFolder = this.baseFolder + 'src/';
        this.samplesFolder = this.baseFolder + 'samples/';
        this.testFolder = this.baseFolder + 'test/';
        this.typingsFolder = this.baseFolder + 'tools/typings/';
        
        // TypeScript source definitions
        this.libraryTypeScriptDefinitions = this.typingsFolder + '**/*d.ts';
        this.allAppTsFiles = this.sourceFolder + 'ts/**/*.ts';
        this.allSampleTsFiles = this.samplesFolder + 'ts/**/*.ts';
        this.allTestTsFiles = this.testFolder + 'tests/ts/**/*.ts';

        // JavaScript output definitions
        this.appJsOutputFolder = this.sourceFolder + 'js/';
        this.samplesJsOutputFolder = this.samplesFolder + 'js/';
        this.testJsOutputFolder = this.testFolder + 'tests/js/';
        
        // Output bundle definitions
        this.bundleFolder = this.baseFolder + 'dist/';
        this.appBundleName = 'automapper.js';
        this.appBundleNameMinified = 'automapper.min.js';
        this.appDefinitionBundleName = 'arcady-automapper.d.ts';
        
        this.allAppJsFiles = [
            this.appJsOutputFolder + '**/*.js',
            '!' + this.samplesJsOutputFolder + '**/*.js'
            ];

        this.allTestFiles = [];
        Array.prototype.push.apply(this.allTestFiles, this.allAppJsFiles);
        this.allTestFiles.push(
            this.testFolder + 'scripts/jasmine-utils.js',
            this.testJsOutputFolder + '**/*.js'
        );
        
        // TypeScript compiler options
        this.tscOptions = { 
            noImplicitAny: true 
        };
        
        this.libraryHeaderTemplate = '/*!\n\
 * TypeScript / Javascript AutoMapper Library v${version}\n\
 * ${url}\n\
 *\n\
 * Copyright 2015 ${organization} and other contributors\n\
 * Released under the ${license} license\n\
 *\n\
 * Date: ${currentDate}\n\
 */\n',
        this.libraryVersion = '1.1.4',
        this.libraryOrganization = 'Arcady BV',
        this.libraryUrl = 'https://github.com/ArcadyIT/AutoMapper',
        this.libraryLicense = 'MIT'
        
    }
    return gulpConfig;
})();
module.exports = GulpConfig;