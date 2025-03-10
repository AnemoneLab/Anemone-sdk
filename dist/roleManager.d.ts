import { Transaction } from "@mysten/sui/transactions";
export declare class RoleManager {
    /**
     * Create a new Role
     * @param botAddress - The authorized bot address
     * @param name - Role name
     * @param description - Role description
     * @param imgUrl - Role image URL
     * @param suiAmount - Amount of SUI to deposit (in MIST)
     */
    createRole(botAddress: string, name: string, description: string, imgUrl: string, suiAmount: bigint): Promise<Transaction>;
    /**
     * Deposit SUI to maintain or restore Role's health
     * @param roleId - The Role object ID
     * @param suiAmount - Amount of SUI to deposit (in MIST)
     */
    depositSui(roleId: string, suiAmount: bigint): Promise<Transaction>;
    /**
     * Update role's health (can only be called by bot address)
     * @param roleId - The Role object ID
     */
    updateRoleHealth(roleId: string): Promise<Transaction>;
    /**
     * Activate a role
     * @param roleId - The Role object ID
     * @param botNftId - The Bot NFT object ID
     */
    activateRole(roleId: string, botNftId: string): Promise<Transaction>;
    /**
     * Toggle role's lock status
     * @param roleId - The Role object ID
     * @param botNftId - The Bot NFT object ID
     */
    toggleLock(roleId: string, botNftId: string): Promise<Transaction>;
    /**
     * Add a skill to the role
     * @param roleId - The Role object ID
     * @param botNftId - The Bot NFT object ID
     * @param skillId - The Skill object ID
     */
    addSkill(roleId: string, botNftId: string, skillId: string): Promise<Transaction>;
    /**
     * Remove a skill from the role
     * @param roleId - The Role object ID
     * @param botNftId - The Bot NFT object ID
     * @param skillId - The Skill object ID to remove
     */
    removeSkill(roleId: string, botNftId: string, skillId: string): Promise<Transaction>;
    /**
     * Withdraw SUI using Bot NFT ownership verification
     * @param roleId - The Role object ID
     * @param botNftId - The Bot NFT object ID
     * @param amount - Amount of SUI to withdraw (in MIST)
     */
    withdrawSuiWithNft(roleId: string, botNftId: string, amount: bigint): Promise<Transaction>;
    /**
     * Withdraw SUI using bot address verification
     * @param roleId - The Role object ID
     * @param amount - Amount of SUI to withdraw (in MIST)
     */
    withdrawSuiAsBot(roleId: string, amount: bigint): Promise<Transaction>;
}
//# sourceMappingURL=roleManager.d.ts.map