const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');

const envs = ['dev', 'qa', 'real'];
const osList = ['ios', 'android'];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

(async () => {
  console.log('\n📱 실행 OS를 선택하세요:');
  osList.forEach((os, i) => console.log(`${i + 1}) ${os}`));
  const osAnswer = await askQuestion('\n번호를 선택하세요 (OS): ');
  const osIndex = parseInt(osAnswer, 10) - 1;
  const os = osList[osIndex];

  if (!os) {
    console.log('❌ 올바른 OS 번호를 입력해주세요.');
    rl.close();
    return;
  }

  console.log('\n🌍 실행 환경을 선택하세요:');
  envs.forEach((env, i) => console.log(`${i + 1}) ${env}`));
  const envAnswer = await askQuestion('\n번호를 선택하세요 (환경): ');
  const envIndex = parseInt(envAnswer, 10) - 1;
  const env = envs[envIndex];

  if (!env) {
    console.log('❌ 올바른 환경 번호를 입력해주세요.');
    rl.close();
    return;
  }

  // 앱 실행
  const command = `node scripts/set-env.js ${os}.${env} && npx react-native start --reset-cache`;
  console.log(`\n🚀 command >>> ${command}\n`);
  
  execSync(command, { stdio: 'inherit' });
  rl.close();
})();
