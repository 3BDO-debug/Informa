import { atom } from 'recoil';

const secretCodePopUpAtom = atom({
  key: 'secretCodePopUp',
  default: { triggered: false, code: '' },
});

export default secretCodePopUpAtom;
