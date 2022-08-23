for FILE in conf/*; 
do
	cross-env CONFIG_FILE=$FILE ./cucumber-runner.js --require step-definitions/**/*.js &
done;
