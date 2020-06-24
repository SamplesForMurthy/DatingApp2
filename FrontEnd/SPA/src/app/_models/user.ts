import { Photo } from './photo';

export interface User {
     id: number;
     username: string;
     gender: string;
     age: number;
     city: string;
     country: string;
     knownAs: string;
     photoUrl: string;
     created: Date;
     lastActive: Date;
     Introduction?: string;
     Interests?: string;
     lookingFor?: string;
     photos?: Photo[];
}
