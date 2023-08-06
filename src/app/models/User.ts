export interface User {
    is_superuser : boolean;
    username : string;
    password : string;
    user_type : string;

}

export interface Credential {
    username : string;
    password : string;
}