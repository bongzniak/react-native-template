const fs = require('fs');
const path = require('path');

const argv = process.argv[2]; // ex: 'ios.dev'

const [os, env] = argv.split('.');

const baseFile = path.resolve(__dirname, '../env/.env');
const envFile = path.resolve(__dirname, `../env/.env.${env}`);
const osFile = path.resolve(__dirname, `../env/expo/.env.${os}`);
const destFile = path.resolve(__dirname, '../.env');


const filesToCheck = [
  { label: '공통 env', path: baseFile },
  { label: '환경별 env', path: envFile },
  { label: 'OS별 env', path: osFile },
];

// 파일 존재 여부 검사
filesToCheck.forEach(({ label, path }) => {
  if (!fs.existsSync(path)) {
    console.error(`❌ ${label} 파일이 존재하지 않습니다.\n경로: ${path}`);
    process.exit(1);
  }
});

let merged = '';
if (fs.existsSync(baseFile)) {
  merged += fs.readFileSync(baseFile, 'utf-8') + '\n';
}

if (fs.existsSync(envFile)) {
  merged += fs.readFileSync(envFile, 'utf-8') + '\n';
}

if (fs.existsSync(osFile)) {
  merged += fs.readFileSync(osFile, 'utf-8') + '\n';
}

fs.writeFileSync(destFile, merged);
console.log(`✅ .env 파일을 expo/.env.${os} .env.${env} 로 설정했습니다.`);
