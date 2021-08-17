import { Role } from "./Role";
import { GeneratedFiles } from "./GeneratedFiles";
export class User {
    public constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public status: boolean,
        public role: string,
        //public roles: Role[],
        public generatedFiles: GeneratedFiles[]
    ) { }
}
