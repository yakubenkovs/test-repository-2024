const fse = require("fs-extra");

const file = '/Homework_04/Folder_01/hw_04.txt';

fse.ensureFileSync (file);

const dir2 = '/Homework_04/Folder_02';

fse.ensureDirSync(dir2);

fse.moveSync('/Homework_04/Folder_01/hw_04.txt','/Homework_04/Folder_02/hw_04.txt');

const dir3 = '/Homework_04/Folder_03';

fse.ensureDirSync(dir3);

fse.copySync('/Homework_04/Folder_02/hw_04.txt', '/Homework_04/Folder_03/hw_04.txt');

fse.removeSync('/Homework_04/Folder_01')

fse.removeSync('/Homework_04/Folder_02')

fse.removeSync('/Homework_04/Folder_03')