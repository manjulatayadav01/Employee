import { MaskHashPipe } from './mask-hash.pipe';

describe('MaskHashPipe', () => {
  it('create an instance', () => {
    const pipe = new MaskHashPipe();
    expect(pipe).toBeTruthy();
  });
});
