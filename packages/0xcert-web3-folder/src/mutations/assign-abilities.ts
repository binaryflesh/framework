import { FolderAbility } from "@0xcert/connector";
import { performMutate } from "../core/intents";
import { FolderConfig } from "../core/folder";
import { getFolder, getAccount } from "../utils/contracts";

/**
 * 
 */
export default async function(config: FolderConfig, accountId: string, abilities: FolderAbility[]) {
  const folder = getFolder(config.web3, config.folderId);
  const from = await getAccount(config.web3, config.makerId);

  return performMutate(() => {
    return folder.methods.assignAbilities(accountId, abilities).send({ from });
  });
}
