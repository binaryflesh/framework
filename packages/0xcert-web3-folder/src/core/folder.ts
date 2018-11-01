import { FolderBase, FolderTransferState, FolderAbility } from "@0xcert/connector";
import getAbilities from '../queries/get-abilities';
import getCapabilities from '../queries/get-capabilities';
import getInfo from '../queries/get-info';
import getSupply from '../queries/get-supply';
import getTransferState from '../queries/get-transfer-state';
import assignAbilities from '../mutations/assign-abilities';
import revokeAbilities from '../mutations/revoke-abilities';
import setTransferState from '../mutations/set-transfer-state';

/**
 * 
 */
export interface FolderConfig {
  web3: any;
  conventionId: string;
  folderId: string;
  makerId: string;
}

/**
 * 
 */
export class Folder implements FolderBase {
  protected config: FolderConfig;

  /**
   * 
   */
  public constructor(config: FolderConfig) {
    this.config = config;
  }

  /**
   * 
   */
  public async getAbilities(accountId: string) {
    return getAbilities(this.config, accountId);
  }

  /**
   * 
   */
  public async getCapabilities() {
    return getCapabilities(this.config);
  }

  /**
   * 
   */
  public async getInfo() {
    return getInfo(this.config);
  }

  /**
   * 
   */
  public async getSupply() {
    return getSupply(this.config);
  }

  /**
   * 
   */
  public async getTransferState() {
    return getTransferState(this.config);
  }

  /**
   * 
   */
  public async assignAbilities(accountId: string, abilities: FolderAbility[]) {
    return assignAbilities(this.config, accountId, abilities);
  }

  /**
   * 
   */
  public async revokeAbilities(accountId: string, abilities: FolderAbility[]) {
    return revokeAbilities(this.config, accountId, abilities);
  }

  /**
   * 
   */
  public async setTransferState(state: FolderTransferState) {
    return setTransferState(this.config, state);
  }

}
