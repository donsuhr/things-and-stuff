import { Queue } from './queue';
// import { QueueDaily } from '../_daily/queue';

describe.each([
    { fn: Queue },
    // { fn: QueueDaily }
])('Queue: $fn.name', ({ fn: CurrentQueue }) => {
    it('starts empty', () => {
        const sut = new CurrentQueue<string>();
        expect(sut.isEmpty()).toBe(true);
    });

    it('add one increases count', () => {
        const sut = new CurrentQueue<string>();
        expect(sut.size()).toBe(0);
        sut.enqueue('something');
        expect(sut.size()).toBe(1);
    });

    it('returns null on dequeue empty', () => {
        const sut = new CurrentQueue<string>();

        expect(sut.dequeue()).toBeNull();
    });

    it('it pushes', () => {
        const sut = new CurrentQueue<string>();
        sut.enqueue('something');
        expect(sut.dequeue()).toBe('something');
    });

    it('it pushes two', () => {
        const sut = new CurrentQueue<string>();
        sut.enqueue('something');
        sut.enqueue('else');
        expect(sut.dequeue()).toBe('something');
    });
});
