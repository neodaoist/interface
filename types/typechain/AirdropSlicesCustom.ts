/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AirdropSlicesCustomInterface extends utils.Interface {
  contractName: "AirdropSlicesCustom";
  functions: {
    "_closeAirdrop()": FunctionFragment;
    "_setParams(address,bytes32,uint256,uint256)": FunctionFragment;
    "_whitelistClaimed(address)": FunctionFragment;
    "airdropInfo()": FunctionFragment;
    "claim(uint256,bytes32[])": FunctionFragment;
    "isWhitelistSaleStarted()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "releaseToCollector()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "whitelistClaimed(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_closeAirdrop",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_setParams",
    values: [string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_whitelistClaimed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "airdropInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelistSaleStarted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseToCollector",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistClaimed",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "_closeAirdrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_setParams", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_whitelistClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "airdropInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelistSaleStarted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseToCollector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistClaimed",
    data: BytesLike
  ): Result;

  events: {
    "AirdropClosed(address,uint256)": EventFragment;
    "Claimed(address,uint256,uint256)": EventFragment;
    "ParamsSet(address,bytes32,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AirdropClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ParamsSet"): EventFragment;
}

export type AirdropClosedEvent = TypedEvent<
  [string, BigNumber],
  { slicesSupplier: string; slicesAmount: BigNumber }
>;

export type AirdropClosedEventFilter = TypedEventFilter<AirdropClosedEvent>;

export type ClaimedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { to: string; amount: BigNumber; _tokenId: BigNumber }
>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

export type ParamsSetEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  {
    collector: string;
    merkleRoot: string;
    whitelistPrice: BigNumber;
    whitelistStartDate: BigNumber;
  }
>;

export type ParamsSetEventFilter = TypedEventFilter<ParamsSetEvent>;

export interface AirdropSlicesCustom extends BaseContract {
  contractName: "AirdropSlicesCustom";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AirdropSlicesCustomInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _closeAirdrop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _setParams(
      collector_: string,
      merkleRoot_: BytesLike,
      whitelistPrice_: BigNumberish,
      whitelistStartDate_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _whitelistClaimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    airdropInfo(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        merkleRoot: string;
        slicerAddress: string;
        collector: string;
        whitelistPrice: BigNumber;
        whitelistStartDate: BigNumber;
      }
    >;

    claim(
      amount: BigNumberish,
      proof: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isWhitelistSaleStarted(overrides?: CallOverrides): Promise<[boolean]>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      from: string,
      tokenId_: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    releaseToCollector(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    whitelistClaimed(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  _closeAirdrop(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _setParams(
    collector_: string,
    merkleRoot_: BytesLike,
    whitelistPrice_: BigNumberish,
    whitelistStartDate_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _whitelistClaimed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  airdropInfo(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber] & {
      merkleRoot: string;
      slicerAddress: string;
      collector: string;
      whitelistPrice: BigNumber;
      whitelistStartDate: BigNumber;
    }
  >;

  claim(
    amount: BigNumberish,
    proof: BytesLike[],
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isWhitelistSaleStarted(overrides?: CallOverrides): Promise<boolean>;

  onERC1155BatchReceived(
    arg0: string,
    arg1: string,
    arg2: BigNumberish[],
    arg3: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: string,
    from: string,
    tokenId_: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  releaseToCollector(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  whitelistClaimed(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    _closeAirdrop(overrides?: CallOverrides): Promise<void>;

    _setParams(
      collector_: string,
      merkleRoot_: BytesLike,
      whitelistPrice_: BigNumberish,
      whitelistStartDate_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _whitelistClaimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    airdropInfo(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber] & {
        merkleRoot: string;
        slicerAddress: string;
        collector: string;
        whitelistPrice: BigNumber;
        whitelistStartDate: BigNumber;
      }
    >;

    claim(
      amount: BigNumberish,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    isWhitelistSaleStarted(overrides?: CallOverrides): Promise<boolean>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: string,
      from: string,
      tokenId_: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    releaseToCollector(overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    whitelistClaimed(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "AirdropClosed(address,uint256)"(
      slicesSupplier?: null,
      slicesAmount?: null
    ): AirdropClosedEventFilter;
    AirdropClosed(
      slicesSupplier?: null,
      slicesAmount?: null
    ): AirdropClosedEventFilter;

    "Claimed(address,uint256,uint256)"(
      to?: string | null,
      amount?: null,
      _tokenId?: null
    ): ClaimedEventFilter;
    Claimed(
      to?: string | null,
      amount?: null,
      _tokenId?: null
    ): ClaimedEventFilter;

    "ParamsSet(address,bytes32,uint256,uint256)"(
      collector?: null,
      merkleRoot?: null,
      whitelistPrice?: null,
      whitelistStartDate?: null
    ): ParamsSetEventFilter;
    ParamsSet(
      collector?: null,
      merkleRoot?: null,
      whitelistPrice?: null,
      whitelistStartDate?: null
    ): ParamsSetEventFilter;
  };

  estimateGas: {
    _closeAirdrop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _setParams(
      collector_: string,
      merkleRoot_: BytesLike,
      whitelistPrice_: BigNumberish,
      whitelistStartDate_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _whitelistClaimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    airdropInfo(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      amount: BigNumberish,
      proof: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isWhitelistSaleStarted(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      from: string,
      tokenId_: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    releaseToCollector(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelistClaimed(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _closeAirdrop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _setParams(
      collector_: string,
      merkleRoot_: BytesLike,
      whitelistPrice_: BigNumberish,
      whitelistStartDate_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _whitelistClaimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    airdropInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      amount: BigNumberish,
      proof: BytesLike[],
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isWhitelistSaleStarted(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: string,
      from: string,
      tokenId_: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    releaseToCollector(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistClaimed(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}