import { Transaction } from "@mysten/sui/transactions";
export declare class SkillManager {
    /**
     * Create a new Skill
     * @param name - Skill name
     * @param description - Skill description
     * @param endpoint - Skill endpoint
     * @param doc - Skill documentation
     * @param github_repo - GitHub repository URL
     * @param docker_image - Docker image name
     * @param quote - Skill quote
     * @param log_url - Log URL
     * @param public_key - Public key
     * @param fee - Skill usage fee (in MIST)
     */
    createSkill(name: string, description: string, endpoint: string, doc: string, github_repo: string, docker_image: string, quote: string, log_url: string, public_key: string, fee: bigint): Promise<Transaction>;
    /**
     * Update an existing Skill
     * @param skillId - The Skill object ID
     * @param name - New skill name
     * @param description - New skill description
     * @param doc - New skill documentation
     * @param fee - New skill usage fee (in MIST)
     */
    updateSkill(skillId: string, name: string, description: string, doc: string, fee: bigint): Promise<Transaction>;
    /**
     * Toggle skill's enabled status
     * @param skillId - The Skill object ID
     */
    toggleSkill(skillId: string): Promise<Transaction>;
}
//# sourceMappingURL=skillManager.d.ts.map