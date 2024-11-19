/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  MockGovernance,
  MockGovernanceInterface,
} from "../MockGovernance";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proposer",
        type: "address",
      },
    ],
    name: "ProposalSubmitted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "support",
        type: "bool",
      },
    ],
    name: "VoteCast",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "support",
        type: "bool",
      },
    ],
    name: "castVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "executeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "submitProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506101a8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630d61b5191461004657806315373e3d1461005b578063736d95aa1461006e575b600080fd5b610059610054366004610124565b610081565b005b61005961006936600461013d565b6100af565b61005961007c366004610124565b6100ec565b60405181907f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f90600090a250565b6040518115158152339083907fe71fcdac32df1877c1700e7bda2a03157e20993363a28fc35ac495cefc76e4d49060200160405180910390a35050565b60405133815281907f11641d364e926d2bf231c2d36f2a9271390042d717ea334a3e7c983c27a123919060200160405180910390a250565b60006020828403121561013657600080fd5b5035919050565b6000806040838503121561015057600080fd5b823591506020830135801515811461016757600080fd5b80915050925092905056fea2646970667358221220f0b73becdff0ad9507a51b243c74932578912d159422fac77f539e8a82ad4ff564736f6c63430008130033";

type MockGovernanceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockGovernanceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockGovernance__factory extends ContractFactory {
  constructor(...args: MockGovernanceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MockGovernance & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockGovernance__factory {
    return super.connect(runner) as MockGovernance__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockGovernanceInterface {
    return new Interface(_abi) as MockGovernanceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockGovernance {
    return new Contract(address, _abi, runner) as unknown as MockGovernance;
  }
}
