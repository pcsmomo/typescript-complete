import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 20]);
numbersCollection.sort();
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('zIOsspQA');
charactersCollection.sort();
// const sorter2 = new Sorter(charactersCollection);
// sorter2.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
// const sorter = new Sorter(linkedList);
// sorter.sort();
linkedList.print();
