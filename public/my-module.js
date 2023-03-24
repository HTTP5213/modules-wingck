import { theShire } from './my-script.js';
import { buckland } from './another-module.js';

const statement = () => `${theShire.name} was founded ${buckland.founding - theShire.founding} years before ${buckland.name}.`;
export { theShire, buckland, statement };