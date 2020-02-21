import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('Fatih');
const linkedListCollection = new LinkedList();

linkedListCollection.add(500);
linkedListCollection.add(-10);
linkedListCollection.add(-3);
linkedListCollection.add(4);


const sorterNumber = new Sorter(numbersCollection);
const sorterString = new Sorter(charactersCollection);
const sorterLinkedList = new Sorter(linkedListCollection);

sorterNumber.sort();
sorterString.sort();
sorterLinkedList.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedListCollection.print();