/* eslint-disable */
const fs = require('fs-extra');
const {
  series, src, dest,
} = require('gulp');
const { argv } = require('yargs');
const { exec } = require('child_process');
require('dotenv').config({ path: 'config/.env' });

console.log('APP_PIN : ', process.env.APP_PIN);

const apps = {
  app1: {
    name: 'app1',
    tagPrefix: "app1_",
    gitMessage: "app1_v",
  },
  app2: {
    name: 'app2',
    tagPrefix: "app2_",
    gitMessage: "app2_v",
  },
  app3: {
    name: 'app3',
    tagPrefix: "app3_",
    gitMessage: "app3_v",
  },
};

const prevAppPin = process.env.APP_PIN;
const tenant = argv.tenant || apps.app1.name;
const platform = argv.platform || 'ios';

const sources = `./tenant_config/${tenant}/**/*`;
const destinations = '.';

/**
 * *************************************
 * CONFIG
 * *************************************
 */

//clean previous tenant files
const cleanFiles = () => {
  console.log('Switching ', platform, 'to ', tenant);
  const through = require('through2');
  const fileList = [];
  return src(`./tenant_config/${prevAppPin}/**/*`) //--> var ?
    .pipe(
      through.obj(function (file, enc, cb) {
        //get file's list from previous src
        fileList.push(file.path);
        cb(null);
      }))
    .pipe(dest('./temp/'))
    .on ('end', function () {
      fileList.map(res => {
        const path = res.split(`${prevAppPin}/`)[1];
        if (path && path.indexOf('.') !== -1) {
          fs.removeSync(path);
        }
      });
    });
};

//simple copy -> keep arbo
const copyFiles = () => {
  fs.ensureDirSync(destinations);
  return src(sources, { dot: true })
    .pipe(dest(destinations));
};

/**
 * *************************************
 * VERSION
 * *************************************
 */

const setVersion = async () => {
  if (tenant === apps.app1.name) {
    await exec(`yarn config set version-tag-prefix "${apps.app1.tagPrefix}" && yarn config set version-git-message "${apps.app1.gitMessage}%s"`);
  } else if (tenant === apps.app2.name) {
    await exec(`yarn config set version-tag-prefix "${apps.app2.tagPrefix}" && yarn config set version-git-message "${apps.app2.gitMessage}%s"`);
  } else if (tenant === apps.app3.name) {
    await exec(`yarn config set version-tag-prefix "${apps.app3.tagPrefix}" && yarn config set version-git-message "${apps.app3.gitMessage}%s"`);
  }
  let versionJSON = require('./version');
  let packageJSON = require('./package');
  packageJSON.version = versionJSON.version;
  let fs = require('fs');
  fs.writeFile ('./package.json', JSON.stringify(packageJSON, null, 2), function(err) {
      if (err) {
        console.log('\nWarning: gulp setVersion failed !\n');
      } else {
        console.log(`Success: package.json version is now ${packageJSON.version} !`);
      }
    }
  );
};

exports.updateTenantVersion = async () => {
  const appPin = process.env.APP_PIN;
  const target = `./tenant_config/${appPin}/version`;
  let versionJSON = require(target);
  let packageJSON = require('./package');
  versionJSON.version = packageJSON.version;
  let fs = require('fs');
  const targetFile = `${target}.json`
  fs.writeFile (targetFile, JSON.stringify(versionJSON, null, 2), function(err) {
      if (err) {
        console.log('\nWarning: gulp updateVersion failed !\n');
      } else {
        console.log(`Success: ${appPin} version is now ${packageJSON.version} !`);
      }
    }
  );
}

/**
 * *************************************
 * SCRIPTS
 * *************************************
 */

exports.startApp = () => {
  console.log('RUN ', `RN_SRC_EXT=${process.env.APP_PIN}.js node node_modules/react-native/local-cli/cli.js start --reset-cache`);
  const startCmd = exec(`RN_SRC_EXT=${process.env.APP_PIN}.js node node_modules/react-native/local-cli/cli.js start --reset-cache`);
  return startCmd.stdout.pipe(process.stdout);
};

/**
 * *************************************
 * EXPORTS
 * *************************************
 */

exports.default = series(cleanFiles, copyFiles, setVersion);
