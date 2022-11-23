import { atom } from 'recoil';

const userIpRegionAtom = atom({
  key: 'userIpRegion',
  default: null,
});

export default userIpRegionAtom;
