import { Permission } from "./Permission";

export interface User {
    id :  number;
    is_superuser : boolean;
    username : string;
    password : string;
    user_type : string;
    user_permissions : Permission[];
    image : string;
    is_staff : boolean;
}

export interface Credential {
    username : string;
    password : string;
}

