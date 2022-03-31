/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface UniOpsInterface extends utils.Interface {
  contractName: "UniOps";
  functions: {
    "MAX_TICK()": FunctionFragment;
    "getCurrencyPrice(address,uint256,int16)": FunctionFragment;
    "getPool(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "MAX_TICK", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCurrencyPrice",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getPool", values: [string]): string;

  decodeFunctionResult(functionFragment: "MAX_TICK", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrencyPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;

  events: {};
}

export interface UniOps extends BaseContract {
  contractName: "UniOps";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UniOpsInterface;

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
    MAX_TICK(overrides?: CallOverrides): Promise<[number]>;

    getCurrencyPrice(
      currency: string,
      weiPrice: BigNumberish,
      twapInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { currencyPrice: BigNumber }>;

    getPool(currency: string, overrides?: CallOverrides): Promise<[string]>;
  };

  MAX_TICK(overrides?: CallOverrides): Promise<number>;

  getCurrencyPrice(
    currency: string,
    weiPrice: BigNumberish,
    twapInterval: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPool(currency: string, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    MAX_TICK(overrides?: CallOverrides): Promise<number>;

    getCurrencyPrice(
      currency: string,
      weiPrice: BigNumberish,
      twapInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPool(currency: string, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    MAX_TICK(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrencyPrice(
      currency: string,
      weiPrice: BigNumberish,
      twapInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPool(currency: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_TICK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrencyPrice(
      currency: string,
      weiPrice: BigNumberish,
      twapInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPool(
      currency: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
