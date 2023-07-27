import { v4 as uuidv4 } from 'uuid';

export interface User {
  id: string;
  name: string;
  active: boolean;
}

export function createUser(name: string, isActive: boolean) {
  return {
    id: uuidv4(),
    name: name,
    active: isActive,
  };
}
