import { Role } from "./Role";
import { GeneratedFiles } from "./GeneratedFiles";
export class User {
        public constructor(
                public id?: number,
                public name?: string,
                public email?: string,
                public phone?: string,
                public password?: string,
                public status?: boolean,
                public role?: string,
                public productGroup?: string,
                //public roles: Role[],
                public generatedFiles?: GeneratedFiles[]
        ) { }
}
