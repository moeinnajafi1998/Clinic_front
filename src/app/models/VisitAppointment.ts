import { Item } from "./Item";
import { Service } from "./Service";

export interface VisitAppointment{
    id : number;
    nurse : string;
    sick : string;
    clinic : string;
    typical_user : string;
    description : string;
    used_items : Item[];
    services : Service[];
}