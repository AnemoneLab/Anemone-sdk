import { RoleManager } from './roleManager';
import { SkillManager } from './skillManager';
export class AnemoneSDK {
    roleManager;
    skillManager;
    constructor() {
        this.roleManager = new RoleManager();
        this.skillManager = new SkillManager();
    }
}
