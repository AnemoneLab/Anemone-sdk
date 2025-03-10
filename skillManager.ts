import { Transaction } from "@mysten/sui/transactions";
import { PACKAGE_ID } from "./config";

export class SkillManager {


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
    async createSkill(
        name: string,
        description: string,
        endpoint: string,
        doc: string,
        github_repo: string,
        docker_image: string,
        quote: string,
        log_url: string,
        public_key: string,
        fee: bigint
    ) {
        const tx = new Transaction();

        tx.moveCall({
            target: `${PACKAGE_ID}::skill_manager::create_skill`,
            arguments: [
                tx.pure.string(name),
                tx.pure.string(description),
                tx.pure.string(endpoint),
                tx.pure.string(doc),
                tx.pure.string(github_repo),
                tx.pure.string(docker_image),
                tx.pure.string(quote),
                tx.pure.string(log_url),
                tx.pure.string(public_key),
                tx.pure.u64(fee)
            ],
        });

        return tx;
    }

    /**
     * Update an existing Skill
     * @param skillId - The Skill object ID
     * @param name - New skill name
     * @param description - New skill description
     * @param doc - New skill documentation
     * @param fee - New skill usage fee (in MIST)
     */
    async updateSkill(
        skillId: string,
        name: string,
        description: string,
        doc: string,
        fee: bigint
    ) {
        const tx = new Transaction();

        tx.moveCall({
            target: `${PACKAGE_ID}::skill_manager::update_skill`,
            arguments: [
                tx.object(skillId),
                tx.pure.string(name),
                tx.pure.string(description),
                tx.pure.string(doc),
                tx.pure.u64(fee)
            ],
        });

        return tx;
    }

    /**
     * Toggle skill's enabled status
     * @param skillId - The Skill object ID
     */
    async toggleSkill(skillId: string) {
        const tx = new Transaction();

        tx.moveCall({
            target: `${PACKAGE_ID}::skill_manager::toggle_skill`,
            arguments: [tx.object(skillId)],
        });

        return tx;
    }
} 