import { atom } from 'recoil';

const followUpPackageExplainationPopUpAtom = atom({
  key: 'followUpPackageExplainationPopUp',
  default: {
    open: false,
    videoLink: null,
  },
});

export default followUpPackageExplainationPopUpAtom;
