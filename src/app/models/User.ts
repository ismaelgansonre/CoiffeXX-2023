import { Offer } from "./Offer";

export interface User {
    id: number;
    username: string;
    email: string;
    passwordHash: string;
    accountType: "user" | "hairdresser";
    offers: Offer[]; //Only for users
    reservations: Offer[] //Only for hairdressers
}
