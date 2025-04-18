import {Enum, _Enum, GetEnum, FixedSizeBinary, Binary, SS58String, FixedSizeArray, ResultPayload, TxCallData} from "polkadot-api";

  type AnonymousEnum<T extends {}> = T & {
  __anonymous: true
}

type MyTuple<T> = [T, ...T[]]

type SeparateUndefined<T> = undefined extends T
  ? undefined | Exclude<T, undefined>
  : T

type Anonymize<T> = SeparateUndefined<
  T extends FixedSizeBinary<infer L>
    ? number extends L
      ? Binary
      : FixedSizeBinary<L>
    : T extends
          | string
          | number
          | bigint
          | boolean
          | void
          | undefined
          | null
          | symbol
          | Uint8Array
          | Enum<any>
      ? T
      : T extends AnonymousEnum<infer V>
        ? Enum<V>
        : T extends MyTuple<any>
          ? {
              [K in keyof T]: T[K]
            }
          : T extends []
            ? []
            : T extends FixedSizeArray<infer L, infer T>
              ? number extends L
                ? Array<T>
                : FixedSizeArray<L, T>
              : {
                  [K in keyof T & string]: T[K]
                }
>

  export type I5sesotjlssv2d = {"nonce": number, "consumers": number, "providers": number, "sufficients": number, "data": Anonymize<I1q8tnt1cluu5j>};

export type I1q8tnt1cluu5j = {"free": bigint, "reserved": bigint, "frozen": bigint, "flags": bigint};

export type Iffmde3ekjedi9 = {"normal": Anonymize<I4q39t5hn830vp>, "operational": Anonymize<I4q39t5hn830vp>, "mandatory": Anonymize<I4q39t5hn830vp>};

export type I4q39t5hn830vp = {"ref_time": bigint, "proof_size": bigint};

export type I4mddgoa69c0a2 = Array<DigestItem>;

export type DigestItem = Enum<{"PreRuntime": Anonymize<I82jm9g7pufuel>, "Consensus": Anonymize<I82jm9g7pufuel>, "Seal": Anonymize<I82jm9g7pufuel>, "Other": Binary, "RuntimeEnvironmentUpdated": undefined}>;
export const DigestItem = _Enum as unknown as GetEnum<DigestItem>;

export type I82jm9g7pufuel = [FixedSizeBinary<4>, Binary];

export type I6bv7dj4hklhv0 = Array<{"phase": Phase, "event": Anonymize<I2poiquoa14q47>, "topics": Anonymize<Ic5m5lp1oioo8r>}>;

export type Phase = Enum<{"ApplyExtrinsic": number, "Finalization": undefined, "Initialization": undefined}>;
export const Phase = _Enum as unknown as GetEnum<Phase>;

export type I2poiquoa14q47 = AnonymousEnum<{"System": Anonymize<I6u1spsv5fualv>, "ParachainSystem": Anonymize<Icbsekf57miplo>, "MultiBlockMigrations": Anonymize<I94co7vj7h6bo>, "Balances": Anonymize<Iao8h4hv7atnq3>, "TransactionPayment": TransactionPaymentEvent, "AssetTxPayment": Anonymize<I78bosroad52fa>, "CollatorSelection": Anonymize<I4srakrmf0fspo>, "Session": Anonymize<I4co4bgsti676q>, "XcmpQueue": Anonymize<Idsqc7mhp6nnle>, "PolkadotXcm": Anonymize<Iel5f66clbekc3>, "CumulusXcm": Anonymize<Ihpdgvt7vs2cb>, "ToRococoXcmRouter": Anonymize<Ift4p4jnj5bri1>, "MessageQueue": Anonymize<I2kosejppk3jon>, "Utility": Anonymize<I4ojsoreb32hho>, "Multisig": Anonymize<Icr8dskpun21k>, "Proxy": Anonymize<Icmu8ofcbmfheo>, "Assets": Anonymize<I6avancvg8fd05>, "Uniques": Anonymize<Ia0j71vjrjqu9p>, "Nfts": Anonymize<I6qicn8jn4fftj>, "ForeignAssets": Anonymize<I95qdjot35qdnr>, "NftFractionalization": Anonymize<I41s7j0hsp2u0b>, "PoolAssets": Anonymize<I6avancvg8fd05>, "AssetConversion": Anonymize<Ievo2o32gc42ng>, "AssetsFreezer": Anonymize<I7omheqbc53plq>, "ForeignAssetsFreezer": Anonymize<I7bdov8cfj9qk8>, "PoolAssetsFreezer": Anonymize<I7omheqbc53plq>, "Revive": Anonymize<I3vl9org1c535t>, "AssetRewards": Anonymize<I23dbg5epnfjeo>, "StateTrieMigration": Anonymize<I61dksvl51aujo>, "AssetConversionMigration": Anonymize<Ifiu844mj7r2h6>}>;

export type I6u1spsv5fualv = AnonymousEnum<{
/**
 *An extrinsic completed successfully.
 */
"ExtrinsicSuccess": Anonymize<Ia82mnkmeo2rhc>, 
/**
 *An extrinsic failed.
 */
"ExtrinsicFailed": Anonymize<I5r53vkfpi84ht>, 
/**
 *`:code` was updated.
 */
"CodeUpdated": undefined, 
/**
 *A new account was created.
 */
"NewAccount": Anonymize<Icbccs0ug47ilf>, 
/**
 *An account was reaped.
 */
"KilledAccount": Anonymize<Icbccs0ug47ilf>, 
/**
 *On on-chain remark happened.
 */
"Remarked": Anonymize<I855j4i3kr8ko1>, 
/**
 *An upgrade was authorized.
 */
"UpgradeAuthorized": Anonymize<Ibgl04rn6nbfm6>}>;

export type Ia82mnkmeo2rhc = {"dispatch_info": Anonymize<Ic9s8f85vjtncc>};

export type Ic9s8f85vjtncc = {"weight": Anonymize<I4q39t5hn830vp>, "class": DispatchClass, "pays_fee": Anonymize<Iehg04bj71rkd>};

export type DispatchClass = Enum<{"Normal": undefined, "Operational": undefined, "Mandatory": undefined}>;
export const DispatchClass = _Enum as unknown as GetEnum<DispatchClass>;

export type Iehg04bj71rkd = AnonymousEnum<{"Yes": undefined, "No": undefined}>;

export type I5r53vkfpi84ht = {"dispatch_error": Anonymize<I4umgp8a2i7jfd>, "dispatch_info": Anonymize<Ic9s8f85vjtncc>};

export type I4umgp8a2i7jfd = AnonymousEnum<{"Other": undefined, "CannotLookup": undefined, "BadOrigin": undefined, "Module": Enum<{"System": Anonymize<I5o0s7c8q1cc9b>, "ParachainSystem": Anonymize<I9p95gln24a0rn>, "Timestamp": undefined, "ParachainInfo": undefined, "WeightReclaim": undefined, "MultiBlockMigrations": Anonymize<Iaaqq5jevtahm8>, "Balances": Anonymize<Idj13i7adlomht>, "TransactionPayment": undefined, "AssetTxPayment": undefined, "Authorship": undefined, "CollatorSelection": Anonymize<I36bcffk2387dv>, "Session": Anonymize<I1e07dgbaqd1sq>, "Aura": undefined, "AuraExt": undefined, "XcmpQueue": Anonymize<Idnnbndsjjeqqs>, "PolkadotXcm": Anonymize<I87j95aq93d7dq>, "CumulusXcm": undefined, "ToRococoXcmRouter": undefined, "MessageQueue": Anonymize<I5iupade5ag2dp>, "Utility": Anonymize<I8dt2g2hcrgh36>, "Multisig": Anonymize<Ia76qmhhg4jvb9>, "Proxy": Anonymize<Iuvt54ei4cehc>, "Assets": Anonymize<Iapedqb0veh71>, "Uniques": Anonymize<Ienq2ge2rhv4jm>, "Nfts": Anonymize<I58r1150kmj18u>, "ForeignAssets": Anonymize<Iapedqb0veh71>, "NftFractionalization": Anonymize<Ib24bvufha821j>, "PoolAssets": Anonymize<Iapedqb0veh71>, "AssetConversion": Anonymize<I4u78hb23uhvi2>, "AssetsFreezer": Anonymize<I4dd4ctqfnk5kr>, "ForeignAssetsFreezer": Anonymize<I4dd4ctqfnk5kr>, "PoolAssetsFreezer": Anonymize<I4dd4ctqfnk5kr>, "Revive": Anonymize<Icrbvluqac3l8s>, "AssetRewards": Anonymize<I1vqs5qaqr6h6>, "StateTrieMigration": Anonymize<I96objte63brjr>, "AssetConversionMigration": Anonymize<I1t0slqjho4lh4>}>, "ConsumerRemaining": undefined, "NoProviders": undefined, "TooManyConsumers": undefined, "Token": TokenError, "Arithmetic": ArithmeticError, "Transactional": TransactionalError, "Exhausted": undefined, "Corruption": undefined, "Unavailable": undefined, "RootNotAllowed": undefined, "Trie": Anonymize<Idh4cj79bvroj8>}>;

export type I5o0s7c8q1cc9b = AnonymousEnum<{
/**
 *The name of specification does not match between the current runtime
 *and the new runtime.
 */
"InvalidSpecName": undefined, 
/**
 *The specification version is not allowed to decrease between the current runtime
 *and the new runtime.
 */
"SpecVersionNeedsToIncrease": undefined, 
/**
 *Failed to extract the runtime version from the new runtime.
 *
 *Either calling `Core_version` or decoding `RuntimeVersion` failed.
 */
"FailedToExtractRuntimeVersion": undefined, 
/**
 *Suicide called when the account has non-default composite data.
 */
"NonDefaultComposite": undefined, 
/**
 *There is a non-zero reference count preventing the account from being purged.
 */
"NonZeroRefCount": undefined, 
/**
 *The origin filter prevent the call to be dispatched.
 */
"CallFiltered": undefined, 
/**
 *A multi-block migration is ongoing and prevents the current code from being replaced.
 */
"MultiBlockMigrationsOngoing": undefined, 
/**
 *No upgrade authorized.
 */
"NothingAuthorized": undefined, 
/**
 *The submitted code is not authorized.
 */
"Unauthorized": undefined}>;

export type I9p95gln24a0rn = AnonymousEnum<{
/**
 *Attempt to upgrade validation function while existing upgrade pending.
 */
"OverlappingUpgrades": undefined, 
/**
 *Polkadot currently prohibits this parachain from upgrading its validation function.
 */
"ProhibitedByPolkadot": undefined, 
/**
 *The supplied validation function has compiled into a blob larger than Polkadot is
 *willing to run.
 */
"TooBig": undefined, 
/**
 *The inherent which supplies the validation data did not run this block.
 */
"ValidationDataNotAvailable": undefined, 
/**
 *The inherent which supplies the host configuration did not run this block.
 */
"HostConfigurationNotAvailable": undefined, 
/**
 *No validation function upgrade is currently scheduled.
 */
"NotScheduled": undefined, 
/**
 *No code upgrade has been authorized.
 */
"NothingAuthorized": undefined, 
/**
 *The given code upgrade has not been authorized.
 */
"Unauthorized": undefined}>;

export type Iaaqq5jevtahm8 = AnonymousEnum<{
/**
 *The operation cannot complete since some MBMs are ongoing.
 */
"Ongoing": undefined}>;

export type Idj13i7adlomht = AnonymousEnum<{
/**
 *Vesting balance too high to send value.
 */
"VestingBalance": undefined, 
/**
 *Account liquidity restrictions prevent withdrawal.
 */
"LiquidityRestrictions": undefined, 
/**
 *Balance too low to send value.
 */
"InsufficientBalance": undefined, 
/**
 *Value too low to create account due to existential deposit.
 */
"ExistentialDeposit": undefined, 
/**
 *Transfer/payment would kill account.
 */
"Expendability": undefined, 
/**
 *A vesting schedule already exists for this account.
 */
"ExistingVestingSchedule": undefined, 
/**
 *Beneficiary account must pre-exist.
 */
"DeadAccount": undefined, 
/**
 *Number of named reserves exceed `MaxReserves`.
 */
"TooManyReserves": undefined, 
/**
 *Number of holds exceed `VariantCountOf<T::RuntimeHoldReason>`.
 */
"TooManyHolds": undefined, 
/**
 *Number of freezes exceed `MaxFreezes`.
 */
"TooManyFreezes": undefined, 
/**
 *The issuance cannot be modified since it is already deactivated.
 */
"IssuanceDeactivated": undefined, 
/**
 *The delta cannot be zero.
 */
"DeltaZero": undefined}>;

export type I36bcffk2387dv = AnonymousEnum<{
/**
 *The pallet has too many candidates.
 */
"TooManyCandidates": undefined, 
/**
 *Leaving would result in too few candidates.
 */
"TooFewEligibleCollators": undefined, 
/**
 *Account is already a candidate.
 */
"AlreadyCandidate": undefined, 
/**
 *Account is not a candidate.
 */
"NotCandidate": undefined, 
/**
 *There are too many Invulnerables.
 */
"TooManyInvulnerables": undefined, 
/**
 *Account is already an Invulnerable.
 */
"AlreadyInvulnerable": undefined, 
/**
 *Account is not an Invulnerable.
 */
"NotInvulnerable": undefined, 
/**
 *Account has no associated validator ID.
 */
"NoAssociatedValidatorId": undefined, 
/**
 *Validator ID is not yet registered.
 */
"ValidatorNotRegistered": undefined, 
/**
 *Could not insert in the candidate list.
 */
"InsertToCandidateListFailed": undefined, 
/**
 *Could not remove from the candidate list.
 */
"RemoveFromCandidateListFailed": undefined, 
/**
 *New deposit amount would be below the minimum candidacy bond.
 */
"DepositTooLow": undefined, 
/**
 *Could not update the candidate list.
 */
"UpdateCandidateListFailed": undefined, 
/**
 *Deposit amount is too low to take the target's slot in the candidate list.
 */
"InsufficientBond": undefined, 
/**
 *The target account to be replaced in the candidate list is not a candidate.
 */
"TargetIsNotCandidate": undefined, 
/**
 *The updated deposit amount is equal to the amount already reserved.
 */
"IdenticalDeposit": undefined, 
/**
 *Cannot lower candidacy bond while occupying a future collator slot in the list.
 */
"InvalidUnreserve": undefined}>;

export type I1e07dgbaqd1sq = AnonymousEnum<{
/**
 *Invalid ownership proof.
 */
"InvalidProof": undefined, 
/**
 *No associated validator ID for account.
 */
"NoAssociatedValidatorId": undefined, 
/**
 *Registered duplicate key.
 */
"DuplicatedKey": undefined, 
/**
 *No keys are associated with this account.
 */
"NoKeys": undefined, 
/**
 *Key setting account is not live, so it's impossible to associate keys.
 */
"NoAccount": undefined}>;

export type Idnnbndsjjeqqs = AnonymousEnum<{
/**
 *Setting the queue config failed since one of its values was invalid.
 */
"BadQueueConfig": undefined, 
/**
 *The execution is already suspended.
 */
"AlreadySuspended": undefined, 
/**
 *The execution is already resumed.
 */
"AlreadyResumed": undefined, 
/**
 *There are too many active outbound channels.
 */
"TooManyActiveOutboundChannels": undefined, 
/**
 *The message is too big.
 */
"TooBig": undefined}>;

export type I87j95aq93d7dq = AnonymousEnum<{
/**
 *The desired destination was unreachable, generally because there is a no way of routing
 *to it.
 */
"Unreachable": undefined, 
/**
 *There was some other issue (i.e. not to do with routing) in sending the message.
 *Perhaps a lack of space for buffering the message.
 */
"SendFailure": undefined, 
/**
 *The message execution fails the filter.
 */
"Filtered": undefined, 
/**
 *The message's weight could not be determined.
 */
"UnweighableMessage": undefined, 
/**
 *The destination `Location` provided cannot be inverted.
 */
"DestinationNotInvertible": undefined, 
/**
 *The assets to be sent are empty.
 */
"Empty": undefined, 
/**
 *Could not re-anchor the assets to declare the fees for the destination chain.
 */
"CannotReanchor": undefined, 
/**
 *Too many assets have been attempted for transfer.
 */
"TooManyAssets": undefined, 
/**
 *Origin is invalid for sending.
 */
"InvalidOrigin": undefined, 
/**
 *The version of the `Versioned` value used is not able to be interpreted.
 */
"BadVersion": undefined, 
/**
 *The given location could not be used (e.g. because it cannot be expressed in the
 *desired version of XCM).
 */
"BadLocation": undefined, 
/**
 *The referenced subscription could not be found.
 */
"NoSubscription": undefined, 
/**
 *The location is invalid since it already has a subscription from us.
 */
"AlreadySubscribed": undefined, 
/**
 *Could not check-out the assets for teleportation to the destination chain.
 */
"CannotCheckOutTeleport": undefined, 
/**
 *The owner does not own (all) of the asset that they wish to do the operation on.
 */
"LowBalance": undefined, 
/**
 *The asset owner has too many locks on the asset.
 */
"TooManyLocks": undefined, 
/**
 *The given account is not an identifiable sovereign account for any location.
 */
"AccountNotSovereign": undefined, 
/**
 *The operation required fees to be paid which the initiator could not meet.
 */
"FeesNotMet": undefined, 
/**
 *A remote lock with the corresponding data could not be found.
 */
"LockNotFound": undefined, 
/**
 *The unlock operation cannot succeed because there are still consumers of the lock.
 */
"InUse": undefined, 
/**
 *Invalid asset, reserve chain could not be determined for it.
 */
"InvalidAssetUnknownReserve": undefined, 
/**
 *Invalid asset, do not support remote asset reserves with different fees reserves.
 */
"InvalidAssetUnsupportedReserve": undefined, 
/**
 *Too many assets with different reserve locations have been attempted for transfer.
 */
"TooManyReserves": undefined, 
/**
 *Local XCM execution incomplete.
 */
"LocalExecutionIncomplete": undefined}>;

export type I5iupade5ag2dp = AnonymousEnum<{
/**
 *Page is not reapable because it has items remaining to be processed and is not old
 *enough.
 */
"NotReapable": undefined, 
/**
 *Page to be reaped does not exist.
 */
"NoPage": undefined, 
/**
 *The referenced message could not be found.
 */
"NoMessage": undefined, 
/**
 *The message was already processed and cannot be processed again.
 */
"AlreadyProcessed": undefined, 
/**
 *The message is queued for future execution.
 */
"Queued": undefined, 
/**
 *There is temporarily not enough weight to continue servicing messages.
 */
"InsufficientWeight": undefined, 
/**
 *This message is temporarily unprocessable.
 *
 *Such errors are expected, but not guaranteed, to resolve themselves eventually through
 *retrying.
 */
"TemporarilyUnprocessable": undefined, 
/**
 *The queue is paused and no message can be executed from it.
 *
 *This can change at any time and may resolve in the future by re-trying.
 */
"QueuePaused": undefined, 
/**
 *Another call is in progress and needs to finish before this call can happen.
 */
"RecursiveDisallowed": undefined}>;

export type I8dt2g2hcrgh36 = AnonymousEnum<{
/**
 *Too many calls batched.
 */
"TooManyCalls": undefined}>;

export type Ia76qmhhg4jvb9 = AnonymousEnum<{
/**
 *Threshold must be 2 or greater.
 */
"MinimumThreshold": undefined, 
/**
 *Call is already approved by this signatory.
 */
"AlreadyApproved": undefined, 
/**
 *Call doesn't need any (more) approvals.
 */
"NoApprovalsNeeded": undefined, 
/**
 *There are too few signatories in the list.
 */
"TooFewSignatories": undefined, 
/**
 *There are too many signatories in the list.
 */
"TooManySignatories": undefined, 
/**
 *The signatories were provided out of order; they should be ordered.
 */
"SignatoriesOutOfOrder": undefined, 
/**
 *The sender was contained in the other signatories; it shouldn't be.
 */
"SenderInSignatories": undefined, 
/**
 *Multisig operation not found when attempting to cancel.
 */
"NotFound": undefined, 
/**
 *Only the account that originally created the multisig is able to cancel it.
 */
"NotOwner": undefined, 
/**
 *No timepoint was given, yet the multisig operation is already underway.
 */
"NoTimepoint": undefined, 
/**
 *A different timepoint was given to the multisig operation that is underway.
 */
"WrongTimepoint": undefined, 
/**
 *A timepoint was given, yet no multisig operation is underway.
 */
"UnexpectedTimepoint": undefined, 
/**
 *The maximum weight information provided was too low.
 */
"MaxWeightTooLow": undefined, 
/**
 *The data to be stored is already stored.
 */
"AlreadyStored": undefined}>;

export type Iuvt54ei4cehc = AnonymousEnum<{
/**
 *There are too many proxies registered or too many announcements pending.
 */
"TooMany": undefined, 
/**
 *Proxy registration not found.
 */
"NotFound": undefined, 
/**
 *Sender is not a proxy of the account to be proxied.
 */
"NotProxy": undefined, 
/**
 *A call which is incompatible with the proxy type's filter was attempted.
 */
"Unproxyable": undefined, 
/**
 *Account is already a proxy.
 */
"Duplicate": undefined, 
/**
 *Call may not be made by proxy because it may escalate its privileges.
 */
"NoPermission": undefined, 
/**
 *Announcement, if made at all, was made too recently.
 */
"Unannounced": undefined, 
/**
 *Cannot add self as proxy.
 */
"NoSelfProxy": undefined}>;

export type Iapedqb0veh71 = AnonymousEnum<{
/**
 *Account balance must be greater than or equal to the transfer amount.
 */
"BalanceLow": undefined, 
/**
 *The account to alter does not exist.
 */
"NoAccount": undefined, 
/**
 *The signing account has no permission to do the operation.
 */
"NoPermission": undefined, 
/**
 *The given asset ID is unknown.
 */
"Unknown": undefined, 
/**
 *The origin account is frozen.
 */
"Frozen": undefined, 
/**
 *The asset ID is already taken.
 */
"InUse": undefined, 
/**
 *Invalid witness data given.
 */
"BadWitness": undefined, 
/**
 *Minimum balance should be non-zero.
 */
"MinBalanceZero": undefined, 
/**
 *Unable to increment the consumer reference counters on the account. Either no provider
 *reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
 *fewer then the maximum number of consumers has been reached.
 */
"UnavailableConsumer": undefined, 
/**
 *Invalid metadata given.
 */
"BadMetadata": undefined, 
/**
 *No approval exists that would allow the transfer.
 */
"Unapproved": undefined, 
/**
 *The source account would not survive the transfer and it needs to stay alive.
 */
"WouldDie": undefined, 
/**
 *The asset-account already exists.
 */
"AlreadyExists": undefined, 
/**
 *The asset-account doesn't have an associated deposit.
 */
"NoDeposit": undefined, 
/**
 *The operation would result in funds being burned.
 */
"WouldBurn": undefined, 
/**
 *The asset is a live asset and is actively being used. Usually emit for operations such
 *as `start_destroy` which require the asset to be in a destroying state.
 */
"LiveAsset": undefined, 
/**
 *The asset is not live, and likely being destroyed.
 */
"AssetNotLive": undefined, 
/**
 *The asset status is not the expected status.
 */
"IncorrectStatus": undefined, 
/**
 *The asset should be frozen before the given operation.
 */
"NotFrozen": undefined, 
/**
 *Callback action resulted in error
 */
"CallbackFailed": undefined, 
/**
 *The asset ID must be equal to the [`NextAssetId`].
 */
"BadAssetId": undefined}>;

export type Ienq2ge2rhv4jm = AnonymousEnum<{
/**
 *The signing account has no permission to do the operation.
 */
"NoPermission": undefined, 
/**
 *The given item ID is unknown.
 */
"UnknownCollection": undefined, 
/**
 *The item ID has already been used for an item.
 */
"AlreadyExists": undefined, 
/**
 *The owner turned out to be different to what was expected.
 */
"WrongOwner": undefined, 
/**
 *Invalid witness data given.
 */
"BadWitness": undefined, 
/**
 *The item ID is already taken.
 */
"InUse": undefined, 
/**
 *The item or collection is frozen.
 */
"Frozen": undefined, 
/**
 *The delegate turned out to be different to what was expected.
 */
"WrongDelegate": undefined, 
/**
 *There is no delegate approved.
 */
"NoDelegate": undefined, 
/**
 *No approval exists that would allow the transfer.
 */
"Unapproved": undefined, 
/**
 *The named owner has not signed ownership of the collection is acceptable.
 */
"Unaccepted": undefined, 
/**
 *The item is locked.
 */
"Locked": undefined, 
/**
 *All items have been minted.
 */
"MaxSupplyReached": undefined, 
/**
 *The max supply has already been set.
 */
"MaxSupplyAlreadySet": undefined, 
/**
 *The provided max supply is less to the amount of items a collection already has.
 */
"MaxSupplyTooSmall": undefined, 
/**
 *The given item ID is unknown.
 */
"UnknownItem": undefined, 
/**
 *Item is not for sale.
 */
"NotForSale": undefined, 
/**
 *The provided bid is too low.
 */
"BidTooLow": undefined}>;

export type I58r1150kmj18u = AnonymousEnum<{
/**
 *The signing account has no permission to do the operation.
 */
"NoPermission": undefined, 
/**
 *The given item ID is unknown.
 */
"UnknownCollection": undefined, 
/**
 *The item ID has already been used for an item.
 */
"AlreadyExists": undefined, 
/**
 *The approval had a deadline that expired, so the approval isn't valid anymore.
 */
"ApprovalExpired": undefined, 
/**
 *The owner turned out to be different to what was expected.
 */
"WrongOwner": undefined, 
/**
 *The witness data given does not match the current state of the chain.
 */
"BadWitness": undefined, 
/**
 *Collection ID is already taken.
 */
"CollectionIdInUse": undefined, 
/**
 *Items within that collection are non-transferable.
 */
"ItemsNonTransferable": undefined, 
/**
 *The provided account is not a delegate.
 */
"NotDelegate": undefined, 
/**
 *The delegate turned out to be different to what was expected.
 */
"WrongDelegate": undefined, 
/**
 *No approval exists that would allow the transfer.
 */
"Unapproved": undefined, 
/**
 *The named owner has not signed ownership acceptance of the collection.
 */
"Unaccepted": undefined, 
/**
 *The item is locked (non-transferable).
 */
"ItemLocked": undefined, 
/**
 *Item's attributes are locked.
 */
"LockedItemAttributes": undefined, 
/**
 *Collection's attributes are locked.
 */
"LockedCollectionAttributes": undefined, 
/**
 *Item's metadata is locked.
 */
"LockedItemMetadata": undefined, 
/**
 *Collection's metadata is locked.
 */
"LockedCollectionMetadata": undefined, 
/**
 *All items have been minted.
 */
"MaxSupplyReached": undefined, 
/**
 *The max supply is locked and can't be changed.
 */
"MaxSupplyLocked": undefined, 
/**
 *The provided max supply is less than the number of items a collection already has.
 */
"MaxSupplyTooSmall": undefined, 
/**
 *The given item ID is unknown.
 */
"UnknownItem": undefined, 
/**
 *Swap doesn't exist.
 */
"UnknownSwap": undefined, 
/**
 *The given item has no metadata set.
 */
"MetadataNotFound": undefined, 
/**
 *The provided attribute can't be found.
 */
"AttributeNotFound": undefined, 
/**
 *Item is not for sale.
 */
"NotForSale": undefined, 
/**
 *The provided bid is too low.
 */
"BidTooLow": undefined, 
/**
 *The item has reached its approval limit.
 */
"ReachedApprovalLimit": undefined, 
/**
 *The deadline has already expired.
 */
"DeadlineExpired": undefined, 
/**
 *The duration provided should be less than or equal to `MaxDeadlineDuration`.
 */
"WrongDuration": undefined, 
/**
 *The method is disabled by system settings.
 */
"MethodDisabled": undefined, 
/**
 *The provided setting can't be set.
 */
"WrongSetting": undefined, 
/**
 *Item's config already exists and should be equal to the provided one.
 */
"InconsistentItemConfig": undefined, 
/**
 *Config for a collection or an item can't be found.
 */
"NoConfig": undefined, 
/**
 *Some roles were not cleared.
 */
"RolesNotCleared": undefined, 
/**
 *Mint has not started yet.
 */
"MintNotStarted": undefined, 
/**
 *Mint has already ended.
 */
"MintEnded": undefined, 
/**
 *The provided Item was already used for claiming.
 */
"AlreadyClaimed": undefined, 
/**
 *The provided data is incorrect.
 */
"IncorrectData": undefined, 
/**
 *The extrinsic was sent by the wrong origin.
 */
"WrongOrigin": undefined, 
/**
 *The provided signature is incorrect.
 */
"WrongSignature": undefined, 
/**
 *The provided metadata might be too long.
 */
"IncorrectMetadata": undefined, 
/**
 *Can't set more attributes per one call.
 */
"MaxAttributesLimitReached": undefined, 
/**
 *The provided namespace isn't supported in this call.
 */
"WrongNamespace": undefined, 
/**
 *Can't delete non-empty collections.
 */
"CollectionNotEmpty": undefined, 
/**
 *The witness data should be provided.
 */
"WitnessRequired": undefined}>;

export type Ib24bvufha821j = AnonymousEnum<{
/**
 *Asset ID does not correspond to locked NFT.
 */
"IncorrectAssetId": undefined, 
/**
 *The signing account has no permission to do the operation.
 */
"NoPermission": undefined, 
/**
 *NFT doesn't exist.
 */
"NftNotFound": undefined, 
/**
 *NFT has not yet been fractionalised.
 */
"NftNotFractionalized": undefined}>;

export type I4u78hb23uhvi2 = AnonymousEnum<{
/**
 *Provided asset pair is not supported for pool.
 */
"InvalidAssetPair": undefined, 
/**
 *Pool already exists.
 */
"PoolExists": undefined, 
/**
 *Desired amount can't be zero.
 */
"WrongDesiredAmount": undefined, 
/**
 *Provided amount should be greater than or equal to the existential deposit/asset's
 *minimal amount.
 */
"AmountOneLessThanMinimal": undefined, 
/**
 *Provided amount should be greater than or equal to the existential deposit/asset's
 *minimal amount.
 */
"AmountTwoLessThanMinimal": undefined, 
/**
 *Reserve needs to always be greater than or equal to the existential deposit/asset's
 *minimal amount.
 */
"ReserveLeftLessThanMinimal": undefined, 
/**
 *Desired amount can't be equal to the pool reserve.
 */
"AmountOutTooHigh": undefined, 
/**
 *The pool doesn't exist.
 */
"PoolNotFound": undefined, 
/**
 *An overflow happened.
 */
"Overflow": undefined, 
/**
 *The minimal amount requirement for the first token in the pair wasn't met.
 */
"AssetOneDepositDidNotMeetMinimum": undefined, 
/**
 *The minimal amount requirement for the second token in the pair wasn't met.
 */
"AssetTwoDepositDidNotMeetMinimum": undefined, 
/**
 *The minimal amount requirement for the first token in the pair wasn't met.
 */
"AssetOneWithdrawalDidNotMeetMinimum": undefined, 
/**
 *The minimal amount requirement for the second token in the pair wasn't met.
 */
"AssetTwoWithdrawalDidNotMeetMinimum": undefined, 
/**
 *Optimal calculated amount is less than desired.
 */
"OptimalAmountLessThanDesired": undefined, 
/**
 *Insufficient liquidity minted.
 */
"InsufficientLiquidityMinted": undefined, 
/**
 *Requested liquidity can't be zero.
 */
"ZeroLiquidity": undefined, 
/**
 *Amount can't be zero.
 */
"ZeroAmount": undefined, 
/**
 *Calculated amount out is less than provided minimum amount.
 */
"ProvidedMinimumNotSufficientForSwap": undefined, 
/**
 *Provided maximum amount is not sufficient for swap.
 */
"ProvidedMaximumNotSufficientForSwap": undefined, 
/**
 *The provided path must consists of 2 assets at least.
 */
"InvalidPath": undefined, 
/**
 *The provided path must consists of unique assets.
 */
"NonUniquePath": undefined, 
/**
 *It was not possible to get or increment the Id of the pool.
 */
"IncorrectPoolAssetId": undefined, 
/**
 *The destination account cannot exist with the swapped funds.
 */
"BelowMinimum": undefined}>;

export type I4dd4ctqfnk5kr = AnonymousEnum<{
/**
 *Number of freezes on an account would exceed `MaxFreezes`.
 */
"TooManyFreezes": undefined}>;

export type Icrbvluqac3l8s = AnonymousEnum<{
/**
 *Invalid schedule supplied, e.g. with zero weight of a basic operation.
 */
"InvalidSchedule": undefined, 
/**
 *Invalid combination of flags supplied to `seal_call` or `seal_delegate_call`.
 */
"InvalidCallFlags": undefined, 
/**
 *The executed contract exhausted its gas limit.
 */
"OutOfGas": undefined, 
/**
 *Performing the requested transfer failed. Probably because there isn't enough
 *free balance in the sender's account.
 */
"TransferFailed": undefined, 
/**
 *Performing a call was denied because the calling depth reached the limit
 *of what is specified in the schedule.
 */
"MaxCallDepthReached": undefined, 
/**
 *No contract was found at the specified address.
 */
"ContractNotFound": undefined, 
/**
 *No code could be found at the supplied code hash.
 */
"CodeNotFound": undefined, 
/**
 *No code info could be found at the supplied code hash.
 */
"CodeInfoNotFound": undefined, 
/**
 *A buffer outside of sandbox memory was passed to a contract API function.
 */
"OutOfBounds": undefined, 
/**
 *Input passed to a contract API function failed to decode as expected type.
 */
"DecodingFailed": undefined, 
/**
 *Contract trapped during execution.
 */
"ContractTrapped": undefined, 
/**
 *The size defined in `T::MaxValueSize` was exceeded.
 */
"ValueTooLarge": undefined, 
/**
 *Termination of a contract is not allowed while the contract is already
 *on the call stack. Can be triggered by `seal_terminate`.
 */
"TerminatedWhileReentrant": undefined, 
/**
 *`seal_call` forwarded this contracts input. It therefore is no longer available.
 */
"InputForwarded": undefined, 
/**
 *The amount of topics passed to `seal_deposit_events` exceeds the limit.
 */
"TooManyTopics": undefined, 
/**
 *The chain does not provide a chain extension. Calling the chain extension results
 *in this error. Note that this usually  shouldn't happen as deploying such contracts
 *is rejected.
 */
"NoChainExtension": undefined, 
/**
 *Failed to decode the XCM program.
 */
"XCMDecodeFailed": undefined, 
/**
 *A contract with the same AccountId already exists.
 */
"DuplicateContract": undefined, 
/**
 *A contract self destructed in its constructor.
 *
 *This can be triggered by a call to `seal_terminate`.
 */
"TerminatedInConstructor": undefined, 
/**
 *A call tried to invoke a contract that is flagged as non-reentrant.
 */
"ReentranceDenied": undefined, 
/**
 *A contract called into the runtime which then called back into this pallet.
 */
"ReenteredPallet": undefined, 
/**
 *A contract attempted to invoke a state modifying API while being in read-only mode.
 */
"StateChangeDenied": undefined, 
/**
 *Origin doesn't have enough balance to pay the required storage deposits.
 */
"StorageDepositNotEnoughFunds": undefined, 
/**
 *More storage was created than allowed by the storage deposit limit.
 */
"StorageDepositLimitExhausted": undefined, 
/**
 *Code removal was denied because the code is still in use by at least one contract.
 */
"CodeInUse": undefined, 
/**
 *The contract ran to completion but decided to revert its storage changes.
 *Please note that this error is only returned from extrinsics. When called directly
 *or via RPC an `Ok` will be returned. In this case the caller needs to inspect the flags
 *to determine whether a reversion has taken place.
 */
"ContractReverted": undefined, 
/**
 *The contract failed to compile or is missing the correct entry points.
 *
 *A more detailed error can be found on the node console if debug messages are enabled
 *by supplying `-lruntime::revive=debug`.
 */
"CodeRejected": undefined, 
/**
 *The code blob supplied is larger than [`limits::code::BLOB_BYTES`].
 */
"BlobTooLarge": undefined, 
/**
 *The static memory consumption of the blob will be larger than
 *[`limits::code::STATIC_MEMORY_BYTES`].
 */
"StaticMemoryTooLarge": undefined, 
/**
 *The program contains a basic block that is larger than allowed.
 */
"BasicBlockTooLarge": undefined, 
/**
 *The program contains an invalid instruction.
 */
"InvalidInstruction": undefined, 
/**
 *The contract has reached its maximum number of delegate dependencies.
 */
"MaxDelegateDependenciesReached": undefined, 
/**
 *The dependency was not found in the contract's delegate dependencies.
 */
"DelegateDependencyNotFound": undefined, 
/**
 *The contract already depends on the given delegate dependency.
 */
"DelegateDependencyAlreadyExists": undefined, 
/**
 *Can not add a delegate dependency to the code hash of the contract itself.
 */
"CannotAddSelfAsDelegateDependency": undefined, 
/**
 *Can not add more data to transient storage.
 */
"OutOfTransientStorage": undefined, 
/**
 *The contract tried to call a syscall which does not exist (at its current api level).
 */
"InvalidSyscall": undefined, 
/**
 *Invalid storage flags were passed to one of the storage syscalls.
 */
"InvalidStorageFlags": undefined, 
/**
 *PolkaVM failed during code execution. Probably due to a malformed program.
 */
"ExecutionFailed": undefined, 
/**
 *Failed to convert a U256 to a Balance.
 */
"BalanceConversionFailed": undefined, 
/**
 *Failed to convert an EVM balance to a native balance.
 */
"DecimalPrecisionLoss": undefined, 
/**
 *Immutable data can only be set during deploys and only be read during calls.
 *Additionally, it is only valid to set the data once and it must not be empty.
 */
"InvalidImmutableAccess": undefined, 
/**
 *An `AccountID32` account tried to interact with the pallet without having a mapping.
 *
 *Call [`Pallet::map_account`] in order to create a mapping for the account.
 */
"AccountUnmapped": undefined, 
/**
 *Tried to map an account that is already mapped.
 */
"AccountAlreadyMapped": undefined, 
/**
 *The transaction used to dry-run a contract is invalid.
 */
"InvalidGenericTransaction": undefined, 
/**
 *The refcount of a code either over or underflowed.
 */
"RefcountOverOrUnderflow": undefined, 
/**
 *Unsupported precompile address
 */
"UnsupportedPrecompileAddress": undefined, 
/**
 *Precompile Error
 */
"PrecompileFailure": undefined}>;

export type I1vqs5qaqr6h6 = AnonymousEnum<{
/**
 *The staker does not have enough tokens to perform the operation.
 */
"NotEnoughTokens": undefined, 
/**
 *An operation was attempted on a non-existent pool.
 */
"NonExistentPool": undefined, 
/**
 *An operation was attempted for a non-existent staker.
 */
"NonExistentStaker": undefined, 
/**
 *An operation was attempted with a non-existent asset.
 */
"NonExistentAsset": undefined, 
/**
 *There was an error converting a block number.
 */
"BlockNumberConversionError": undefined, 
/**
 *The expiry block must be in the future.
 */
"ExpiryBlockMustBeInTheFuture": undefined, 
/**
 *Insufficient funds to create the freeze.
 */
"InsufficientFunds": undefined, 
/**
 *The expiry block can be only extended.
 */
"ExpiryCut": undefined, 
/**
 *The reward rate per block can be only increased.
 */
"RewardRateCut": undefined, 
/**
 *The pool still has staked tokens or rewards.
 */
"NonEmptyPool": undefined}>;

export type I96objte63brjr = AnonymousEnum<{
/**
 *Max signed limits not respected.
 */
"MaxSignedLimits": undefined, 
/**
 *A key was longer than the configured maximum.
 *
 *This means that the migration halted at the current [`Progress`] and
 *can be resumed with a larger [`crate::Config::MaxKeyLen`] value.
 *Retrying with the same [`crate::Config::MaxKeyLen`] value will not work.
 *The value should only be increased to avoid a storage migration for the currently
 *stored [`crate::Progress::LastKey`].
 */
"KeyTooLong": undefined, 
/**
 *submitter does not have enough funds.
 */
"NotEnoughFunds": undefined, 
/**
 *Bad witness data provided.
 */
"BadWitness": undefined, 
/**
 *Signed migration is not allowed because the maximum limit is not set yet.
 */
"SignedMigrationNotAllowed": undefined, 
/**
 *Bad child root provided.
 */
"BadChildRoot": undefined}>;

export type I1t0slqjho4lh4 = AnonymousEnum<{
/**
 *Provided asset pair is not supported for pool.
 */
"InvalidAssetPair": undefined, 
/**
 *The pool doesn't exist.
 */
"PoolNotFound": undefined, 
/**
 *Pool's balance cannot be zero.
 */
"ZeroBalance": undefined, 
/**
 *Indicates a partial transfer of balance to the new account during a migration.
 */
"PartialTransfer": undefined}>;

export type TokenError = Enum<{"FundsUnavailable": undefined, "OnlyProvider": undefined, "BelowMinimum": undefined, "CannotCreate": undefined, "UnknownAsset": undefined, "Frozen": undefined, "Unsupported": undefined, "CannotCreateHold": undefined, "NotExpendable": undefined, "Blocked": undefined}>;
export const TokenError = _Enum as unknown as GetEnum<TokenError>;

export type ArithmeticError = Enum<{"Underflow": undefined, "Overflow": undefined, "DivisionByZero": undefined}>;
export const ArithmeticError = _Enum as unknown as GetEnum<ArithmeticError>;

export type TransactionalError = Enum<{"LimitReached": undefined, "NoLayer": undefined}>;
export const TransactionalError = _Enum as unknown as GetEnum<TransactionalError>;

export type Idh4cj79bvroj8 = AnonymousEnum<{"InvalidStateRoot": undefined, "IncompleteDatabase": undefined, "ValueAtIncompleteKey": undefined, "DecoderError": undefined, "InvalidHash": undefined, "DuplicateKey": undefined, "ExtraneousNode": undefined, "ExtraneousValue": undefined, "ExtraneousHashReference": undefined, "InvalidChildReference": undefined, "ValueMismatch": undefined, "IncompleteProof": undefined, "RootMismatch": undefined, "DecodeError": undefined}>;

export type Icbccs0ug47ilf = {"account": SS58String};

export type I855j4i3kr8ko1 = {"sender": SS58String, "hash": FixedSizeBinary<32>};

export type Ibgl04rn6nbfm6 = {"code_hash": FixedSizeBinary<32>, "check_version": boolean};

export type Icbsekf57miplo = AnonymousEnum<{
/**
 *The validation function has been scheduled to apply.
 */
"ValidationFunctionStored": undefined, 
/**
 *The validation function was applied as of the contained relay chain block number.
 */
"ValidationFunctionApplied": Anonymize<Idd7hd99u0ho0n>, 
/**
 *The relay-chain aborted the upgrade process.
 */
"ValidationFunctionDiscarded": undefined, 
/**
 *Some downward messages have been received and will be processed.
 */
"DownwardMessagesReceived": Anonymize<Iafscmv8tjf0ou>, 
/**
 *Downward messages were processed using the given weight.
 */
"DownwardMessagesProcessed": Anonymize<I100l07kaehdlp>, 
/**
 *An upward message was sent to the relay chain.
 */
"UpwardMessageSent": Anonymize<I6gnbnvip5vvdi>}>;

export type Idd7hd99u0ho0n = {"relay_chain_block_num": number};

export type Iafscmv8tjf0ou = {"count": number};

export type I100l07kaehdlp = {"weight_used": Anonymize<I4q39t5hn830vp>, "dmq_head": FixedSizeBinary<32>};

export type I6gnbnvip5vvdi = {"message_hash"?: Anonymize<I4s6vifaf8k998>};

export type I4s6vifaf8k998 = (FixedSizeBinary<32>) | undefined;

export type I94co7vj7h6bo = AnonymousEnum<{
/**
 *A Runtime upgrade started.
 *
 *Its end is indicated by `UpgradeCompleted` or `UpgradeFailed`.
 */
"UpgradeStarted": Anonymize<If1co0pilmi7oq>, 
/**
 *The current runtime upgrade completed.
 *
 *This implies that all of its migrations completed successfully as well.
 */
"UpgradeCompleted": undefined, 
/**
 *Runtime upgrade failed.
 *
 *This is very bad and will require governance intervention.
 */
"UpgradeFailed": undefined, 
/**
 *A migration was skipped since it was already executed in the past.
 */
"MigrationSkipped": Anonymize<I666bl2fqjkejo>, 
/**
 *A migration progressed.
 */
"MigrationAdvanced": Anonymize<Iae74gjak1qibn>, 
/**
 *A Migration completed.
 */
"MigrationCompleted": Anonymize<Iae74gjak1qibn>, 
/**
 *A Migration failed.
 *
 *This implies that the whole upgrade failed and governance intervention is required.
 */
"MigrationFailed": Anonymize<Iae74gjak1qibn>, 
/**
 *The set of historical migrations has been cleared.
 */
"HistoricCleared": Anonymize<I3escdojpj0551>}>;

export type If1co0pilmi7oq = {
/**
 *The number of migrations that this upgrade contains.
 *
 *This can be used to design a progress indicator in combination with counting the
 *`MigrationCompleted` and `MigrationSkipped` events.
 */
"migrations": number};

export type I666bl2fqjkejo = {
/**
 *The index of the skipped migration within the [`Config::Migrations`] list.
 */
"index": number};

export type Iae74gjak1qibn = {
/**
 *The index of the migration within the [`Config::Migrations`] list.
 */
"index": number, 
/**
 *The number of blocks that this migration took so far.
 */
"took": number};

export type I3escdojpj0551 = {
/**
 *Should be passed to `clear_historic` in a successive call.
 */
"next_cursor"?: Anonymize<Iabpgqcjikia83>};

export type Iabpgqcjikia83 = (Binary) | undefined;

export type Iao8h4hv7atnq3 = AnonymousEnum<{
/**
 *An account was created with some free balance.
 */
"Endowed": Anonymize<Icv68aq8841478>, 
/**
 *An account was removed whose balance was non-zero but below ExistentialDeposit,
 *resulting in an outright loss.
 */
"DustLost": Anonymize<Ic262ibdoec56a>, 
/**
 *Transfer succeeded.
 */
"Transfer": Anonymize<Iflcfm9b6nlmdd>, 
/**
 *A balance was set by root.
 */
"BalanceSet": Anonymize<Ijrsf4mnp3eka>, 
/**
 *Some balance was reserved (moved from free to reserved).
 */
"Reserved": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *Some balance was unreserved (moved from reserved to free).
 */
"Unreserved": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *Some balance was moved from the reserve of the first account to the second account.
 *Final argument indicates the destination balance type.
 */
"ReserveRepatriated": Anonymize<I8tjvj9uq4b7hi>, 
/**
 *Some amount was deposited (e.g. for transaction fees).
 */
"Deposit": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *Some amount was withdrawn from the account (e.g. for transaction fees).
 */
"Withdraw": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *Some amount was removed from the account (e.g. for misbehavior).
 */
"Slashed": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *Some amount was minted into an account.
 */
"Minted": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *Some amount was burned from an account.
 */
"Burned": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *Some amount was suspended from an account (it can be restored later).
 */
"Suspended": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *Some amount was restored into an account.
 */
"Restored": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *An account was upgraded.
 */
"Upgraded": Anonymize<I4cbvqmqadhrea>, 
/**
 *Total issuance was increased by `amount`, creating a credit to be balanced.
 */
"Issued": Anonymize<I3qt1hgg4djhgb>, 
/**
 *Total issuance was decreased by `amount`, creating a debt to be balanced.
 */
"Rescinded": Anonymize<I3qt1hgg4djhgb>, 
/**
 *Some balance was locked.
 */
"Locked": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *Some balance was unlocked.
 */
"Unlocked": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *Some balance was frozen.
 */
"Frozen": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *Some balance was thawed.
 */
"Thawed": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *The `TotalIssuance` was forcefully changed.
 */
"TotalIssuanceForced": Anonymize<I4fooe9dun9o0t>}>;

export type Icv68aq8841478 = {"account": SS58String, "free_balance": bigint};

export type Ic262ibdoec56a = {"account": SS58String, "amount": bigint};

export type Iflcfm9b6nlmdd = {"from": SS58String, "to": SS58String, "amount": bigint};

export type Ijrsf4mnp3eka = {"who": SS58String, "free": bigint};

export type Id5fm4p8lj5qgi = {"who": SS58String, "amount": bigint};

export type I8tjvj9uq4b7hi = {"from": SS58String, "to": SS58String, "amount": bigint, "destination_status": BalanceStatus};

export type BalanceStatus = Enum<{"Free": undefined, "Reserved": undefined}>;
export const BalanceStatus = _Enum as unknown as GetEnum<BalanceStatus>;

export type I4cbvqmqadhrea = {"who": SS58String};

export type I3qt1hgg4djhgb = {"amount": bigint};

export type I4fooe9dun9o0t = {"old": bigint, "new": bigint};

export type TransactionPaymentEvent = Enum<{
/**
 *A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
 *has been paid by `who`.
 */
"TransactionFeePaid": Anonymize<Ier2cke86dqbr2>}>;
export const TransactionPaymentEvent = _Enum as unknown as GetEnum<TransactionPaymentEvent>;

export type Ier2cke86dqbr2 = {"who": SS58String, "actual_fee": bigint, "tip": bigint};

export type I78bosroad52fa = AnonymousEnum<{
/**
 *A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
 *has been paid by `who` in an asset `asset_id`.
 */
"AssetTxFeePaid": Anonymize<Imhre0s2vm68p>, 
/**
 *A swap of the refund in native currency back to asset failed.
 */
"AssetRefundFailed": Anonymize<Icjchvrijclvlv>}>;

export type Imhre0s2vm68p = {"who": SS58String, "actual_fee": bigint, "tip": bigint, "asset_id": Anonymize<If9iqq7i64mur8>};

export type If9iqq7i64mur8 = {"parents": number, "interior": XcmV5Junctions};

export type XcmV5Junctions = Enum<{"Here": undefined, "X1": XcmV5Junction, "X2": FixedSizeArray<2, XcmV5Junction>, "X3": FixedSizeArray<3, XcmV5Junction>, "X4": FixedSizeArray<4, XcmV5Junction>, "X5": FixedSizeArray<5, XcmV5Junction>, "X6": FixedSizeArray<6, XcmV5Junction>, "X7": FixedSizeArray<7, XcmV5Junction>, "X8": FixedSizeArray<8, XcmV5Junction>}>;
export const XcmV5Junctions = _Enum as unknown as GetEnum<XcmV5Junctions>;

export type XcmV5Junction = Enum<{"Parachain": number, "AccountId32": {"network"?: Anonymize<I97pd2rst02a7r>, "id": FixedSizeBinary<32>}, "AccountIndex64": {"network"?: Anonymize<I97pd2rst02a7r>, "index": bigint}, "AccountKey20": {"network"?: Anonymize<I97pd2rst02a7r>, "key": FixedSizeBinary<20>}, "PalletInstance": number, "GeneralIndex": bigint, "GeneralKey": Anonymize<I15lht6t53odo4>, "OnlyChild": undefined, "Plurality": Anonymize<I518fbtnclg1oc>, "GlobalConsensus": XcmV5NetworkId}>;
export const XcmV5Junction = _Enum as unknown as GetEnum<XcmV5Junction>;

export type I97pd2rst02a7r = (XcmV5NetworkId) | undefined;

export type XcmV5NetworkId = Enum<{"ByGenesis": FixedSizeBinary<32>, "ByFork": Anonymize<I15vf5oinmcgps>, "Polkadot": undefined, "Kusama": undefined, "Ethereum": Anonymize<I623eo8t3jrbeo>, "BitcoinCore": undefined, "BitcoinCash": undefined, "PolkadotBulletin": undefined}>;
export const XcmV5NetworkId = _Enum as unknown as GetEnum<XcmV5NetworkId>;

export type I15vf5oinmcgps = {"block_number": bigint, "block_hash": FixedSizeBinary<32>};

export type I623eo8t3jrbeo = {"chain_id": bigint};

export type I15lht6t53odo4 = {"length": number, "data": FixedSizeBinary<32>};

export type I518fbtnclg1oc = {"id": XcmV3JunctionBodyId, "part": XcmV2JunctionBodyPart};

export type XcmV3JunctionBodyId = Enum<{"Unit": undefined, "Moniker": FixedSizeBinary<4>, "Index": number, "Executive": undefined, "Technical": undefined, "Legislative": undefined, "Judicial": undefined, "Defense": undefined, "Administration": undefined, "Treasury": undefined}>;
export const XcmV3JunctionBodyId = _Enum as unknown as GetEnum<XcmV3JunctionBodyId>;

export type XcmV2JunctionBodyPart = Enum<{"Voice": undefined, "Members": Anonymize<Iafscmv8tjf0ou>, "Fraction": {"nom": number, "denom": number}, "AtLeastProportion": {"nom": number, "denom": number}, "MoreThanProportion": {"nom": number, "denom": number}}>;
export const XcmV2JunctionBodyPart = _Enum as unknown as GetEnum<XcmV2JunctionBodyPart>;

export type Icjchvrijclvlv = {"native_amount_kept": bigint};

export type I4srakrmf0fspo = AnonymousEnum<{
/**
 *New Invulnerables were set.
 */
"NewInvulnerables": Anonymize<I39t01nnod9109>, 
/**
 *A new Invulnerable was added.
 */
"InvulnerableAdded": Anonymize<I6v8sm60vvkmk7>, 
/**
 *An Invulnerable was removed.
 */
"InvulnerableRemoved": Anonymize<I6v8sm60vvkmk7>, 
/**
 *The number of desired candidates was set.
 */
"NewDesiredCandidates": Anonymize<I1qmtmbe5so8r3>, 
/**
 *The candidacy bond was set.
 */
"NewCandidacyBond": Anonymize<Ih99m6ehpcar7>, 
/**
 *A new candidate joined.
 */
"CandidateAdded": Anonymize<Idgorhsbgdq2ap>, 
/**
 *Bond of a candidate updated.
 */
"CandidateBondUpdated": Anonymize<Idgorhsbgdq2ap>, 
/**
 *A candidate was removed.
 */
"CandidateRemoved": Anonymize<I6v8sm60vvkmk7>, 
/**
 *An account was replaced in the candidate list by another one.
 */
"CandidateReplaced": Anonymize<I9ubb2kqevnu6t>, 
/**
 *An account was unable to be added to the Invulnerables because they did not have keys
 *registered. Other Invulnerables may have been set.
 */
"InvalidInvulnerableSkipped": Anonymize<I6v8sm60vvkmk7>}>;

export type I39t01nnod9109 = {"invulnerables": Anonymize<Ia2lhg7l2hilo3>};

export type Ia2lhg7l2hilo3 = Array<SS58String>;

export type I6v8sm60vvkmk7 = {"account_id": SS58String};

export type I1qmtmbe5so8r3 = {"desired_candidates": number};

export type Ih99m6ehpcar7 = {"bond_amount": bigint};

export type Idgorhsbgdq2ap = {"account_id": SS58String, "deposit": bigint};

export type I9ubb2kqevnu6t = {"old": SS58String, "new": SS58String, "deposit": bigint};

export type I4co4bgsti676q = AnonymousEnum<{
/**
 *New session has happened. Note that the argument is the session index, not the
 *block number as the type might suggest.
 */
"NewSession": Anonymize<I2hq50pu2kdjpo>, 
/**
 *Validator has been disabled.
 */
"ValidatorDisabled": Anonymize<I9acqruh7322g2>, 
/**
 *Validator has been re-enabled.
 */
"ValidatorReenabled": Anonymize<I9acqruh7322g2>}>;

export type I2hq50pu2kdjpo = {"session_index": number};

export type I9acqruh7322g2 = {"validator": SS58String};

export type Idsqc7mhp6nnle = AnonymousEnum<{
/**
 *An HRMP message was sent to a sibling parachain.
 */
"XcmpMessageSent": Anonymize<I137t1cld92pod>}>;

export type I137t1cld92pod = {"message_hash": FixedSizeBinary<32>};

export type Iel5f66clbekc3 = AnonymousEnum<{
/**
 *Execution of an XCM message was attempted.
 */
"Attempted": Anonymize<Ia72eet39sf8j9>, 
/**
 *A XCM message was sent.
 */
"Sent": Anonymize<If8u5kl4h8070m>, 
/**
 *Query response received which does not match a registered query. This may be because a
 *matching query was never registered, it may be because it is a duplicate response, or
 *because the query timed out.
 */
"UnexpectedResponse": Anonymize<Icl7nl1rfeog3i>, 
/**
 *Query response has been received and is ready for taking with `take_response`. There is
 *no registered notification call.
 */
"ResponseReady": Anonymize<Iasr6pj6shs0fl>, 
/**
 *Query response has been received and query is removed. The registered notification has
 *been dispatched and executed successfully.
 */
"Notified": Anonymize<I2uqmls7kcdnii>, 
/**
 *Query response has been received and query is removed. The registered notification
 *could not be dispatched because the dispatch weight is greater than the maximum weight
 *originally budgeted by this runtime for the query result.
 */
"NotifyOverweight": Anonymize<Idg69klialbkb8>, 
/**
 *Query response has been received and query is removed. There was a general error with
 *dispatching the notification call.
 */
"NotifyDispatchError": Anonymize<I2uqmls7kcdnii>, 
/**
 *Query response has been received and query is removed. The dispatch was unable to be
 *decoded into a `Call`; this might be due to dispatch function having a signature which
 *is not `(origin, QueryId, Response)`.
 */
"NotifyDecodeFailed": Anonymize<I2uqmls7kcdnii>, 
/**
 *Expected query response has been received but the origin location of the response does
 *not match that expected. The query remains registered for a later, valid, response to
 *be received and acted upon.
 */
"InvalidResponder": Anonymize<I7r6b7145022pp>, 
/**
 *Expected query response has been received but the expected origin location placed in
 *storage by this runtime previously cannot be decoded. The query remains registered.
 *
 *This is unexpected (since a location placed in storage in a previously executing
 *runtime should be readable prior to query timeout) and dangerous since the possibly
 *valid response will be dropped. Manual governance intervention is probably going to be
 *needed.
 */
"InvalidResponderVersion": Anonymize<Icl7nl1rfeog3i>, 
/**
 *Received query response has been read and removed.
 */
"ResponseTaken": Anonymize<I30pg328m00nr3>, 
/**
 *Some assets have been placed in an asset trap.
 */
"AssetsTrapped": Anonymize<Icmrn7bogp28cs>, 
/**
 *An XCM version change notification message has been attempted to be sent.
 *
 *The cost of sending it (borne by the chain) is included.
 */
"VersionChangeNotified": Anonymize<I7m9b5plj4h5ot>, 
/**
 *The supported version of a location has been changed. This might be through an
 *automatic notification or a manual intervention.
 */
"SupportedVersionChanged": Anonymize<I9kt8c221c83ln>, 
/**
 *A given location which had a version change subscription was dropped owing to an error
 *sending the notification to it.
 */
"NotifyTargetSendFail": Anonymize<I9onhk772nfs4f>, 
/**
 *A given location which had a version change subscription was dropped owing to an error
 *migrating the location to our new XCM format.
 */
"NotifyTargetMigrationFail": Anonymize<I3l6bnksrmt56r>, 
/**
 *Expected query response has been received but the expected querier location placed in
 *storage by this runtime previously cannot be decoded. The query remains registered.
 *
 *This is unexpected (since a location placed in storage in a previously executing
 *runtime should be readable prior to query timeout) and dangerous since the possibly
 *valid response will be dropped. Manual governance intervention is probably going to be
 *needed.
 */
"InvalidQuerierVersion": Anonymize<Icl7nl1rfeog3i>, 
/**
 *Expected query response has been received but the querier location of the response does
 *not match the expected. The query remains registered for a later, valid, response to
 *be received and acted upon.
 */
"InvalidQuerier": Anonymize<Idh09k0l2pmdcg>, 
/**
 *A remote has requested XCM version change notification from us and we have honored it.
 *A version information message is sent to them and its cost is included.
 */
"VersionNotifyStarted": Anonymize<I7uoiphbm0tj4r>, 
/**
 *We have requested that a remote chain send us XCM version change notifications.
 */
"VersionNotifyRequested": Anonymize<I7uoiphbm0tj4r>, 
/**
 *We have requested that a remote chain stops sending us XCM version change
 *notifications.
 */
"VersionNotifyUnrequested": Anonymize<I7uoiphbm0tj4r>, 
/**
 *Fees were paid from a location for an operation (often for using `SendXcm`).
 */
"FeesPaid": Anonymize<I512p1n7qt24l8>, 
/**
 *Some assets have been claimed from an asset trap
 */
"AssetsClaimed": Anonymize<Icmrn7bogp28cs>, 
/**
 *A XCM version migration finished.
 */
"VersionMigrationFinished": Anonymize<I6s1nbislhk619>}>;

export type Ia72eet39sf8j9 = {"outcome": Anonymize<I6uq5gb4s805s7>};

export type I6uq5gb4s805s7 = AnonymousEnum<{"Complete": {"used": Anonymize<I4q39t5hn830vp>}, "Incomplete": {"used": Anonymize<I4q39t5hn830vp>, "error": Anonymize<Id56rgs0bdb7gl>}, "Error": {"error": Anonymize<Id56rgs0bdb7gl>}}>;

export type Id56rgs0bdb7gl = AnonymousEnum<{"Overflow": undefined, "Unimplemented": undefined, "UntrustedReserveLocation": undefined, "UntrustedTeleportLocation": undefined, "LocationFull": undefined, "LocationNotInvertible": undefined, "BadOrigin": undefined, "InvalidLocation": undefined, "AssetNotFound": undefined, "FailedToTransactAsset": undefined, "NotWithdrawable": undefined, "LocationCannotHold": undefined, "ExceedsMaxMessageSize": undefined, "DestinationUnsupported": undefined, "Transport": undefined, "Unroutable": undefined, "UnknownClaim": undefined, "FailedToDecode": undefined, "MaxWeightInvalid": undefined, "NotHoldingFees": undefined, "TooExpensive": undefined, "Trap": bigint, "ExpectationFalse": undefined, "PalletNotFound": undefined, "NameMismatch": undefined, "VersionIncompatible": undefined, "HoldingWouldOverflow": undefined, "ExportError": undefined, "ReanchorFailed": undefined, "NoDeal": undefined, "FeesNotMet": undefined, "LockError": undefined, "NoPermission": undefined, "Unanchored": undefined, "NotDepositable": undefined, "TooManyAssets": undefined, "UnhandledXcmVersion": undefined, "WeightLimitReached": Anonymize<I4q39t5hn830vp>, "Barrier": undefined, "WeightNotComputable": undefined, "ExceedsStackLimit": undefined}>;

export type If8u5kl4h8070m = {"origin": Anonymize<If9iqq7i64mur8>, "destination": Anonymize<If9iqq7i64mur8>, "message": Anonymize<Ict03eedr8de9s>, "message_id": FixedSizeBinary<32>};

export type Ict03eedr8de9s = Array<XcmV5Instruction>;

export type XcmV5Instruction = Enum<{"WithdrawAsset": Anonymize<I4npjalvhmfuj>, "ReserveAssetDeposited": Anonymize<I4npjalvhmfuj>, "ReceiveTeleportedAsset": Anonymize<I4npjalvhmfuj>, "QueryResponse": {"query_id": bigint, "response": Anonymize<I7vucpgm2c6959>, "max_weight": Anonymize<I4q39t5hn830vp>, "querier"?: Anonymize<I4pai6qnfk426l>}, "TransferAsset": {"assets": Anonymize<I4npjalvhmfuj>, "beneficiary": Anonymize<If9iqq7i64mur8>}, "TransferReserveAsset": {"assets": Anonymize<I4npjalvhmfuj>, "dest": Anonymize<If9iqq7i64mur8>, "xcm": Anonymize<Ict03eedr8de9s>}, "Transact": {"origin_kind": XcmV2OriginKind, "fallback_max_weight"?: Anonymize<Iasb8k6ash5mjn>, "call": Binary}, "HrmpNewChannelOpenRequest": Anonymize<I5uhhrjqfuo4e5>, "HrmpChannelAccepted": Anonymize<Ifij4jam0o7sub>, "HrmpChannelClosing": Anonymize<Ieeb4svd9i8fji>, "ClearOrigin": undefined, "DescendOrigin": XcmV5Junctions, "ReportError": Anonymize<I6vsmh07hrp1rc>, "DepositAsset": {"assets": XcmV5AssetFilter, "beneficiary": Anonymize<If9iqq7i64mur8>}, "DepositReserveAsset": {"assets": XcmV5AssetFilter, "dest": Anonymize<If9iqq7i64mur8>, "xcm": Anonymize<Ict03eedr8de9s>}, "ExchangeAsset": {"give": XcmV5AssetFilter, "want": Anonymize<I4npjalvhmfuj>, "maximal": boolean}, "InitiateReserveWithdraw": {"assets": XcmV5AssetFilter, "reserve": Anonymize<If9iqq7i64mur8>, "xcm": Anonymize<Ict03eedr8de9s>}, "InitiateTeleport": {"assets": XcmV5AssetFilter, "dest": Anonymize<If9iqq7i64mur8>, "xcm": Anonymize<Ict03eedr8de9s>}, "ReportHolding": {"response_info": Anonymize<I6vsmh07hrp1rc>, "assets": XcmV5AssetFilter}, "BuyExecution": {"fees": Anonymize<Iffh1nc5e1mod6>, "weight_limit": XcmV3WeightLimit}, "RefundSurplus": undefined, "SetErrorHandler": Anonymize<Ict03eedr8de9s>, "SetAppendix": Anonymize<Ict03eedr8de9s>, "ClearError": undefined, "ClaimAsset": {"assets": Anonymize<I4npjalvhmfuj>, "ticket": Anonymize<If9iqq7i64mur8>}, "Trap": bigint, "SubscribeVersion": Anonymize<Ieprdqqu7ildvr>, "UnsubscribeVersion": undefined, "BurnAsset": Anonymize<I4npjalvhmfuj>, "ExpectAsset": Anonymize<I4npjalvhmfuj>, "ExpectOrigin"?: Anonymize<I4pai6qnfk426l>, "ExpectError"?: Anonymize<I3l6ejee750fv1>, "ExpectTransactStatus": XcmV3MaybeErrorCode, "QueryPallet": {"module_name": Binary, "response_info": Anonymize<I6vsmh07hrp1rc>}, "ExpectPallet": Anonymize<Id7mf37dkpgfjs>, "ReportTransactStatus": Anonymize<I6vsmh07hrp1rc>, "ClearTransactStatus": undefined, "UniversalOrigin": XcmV5Junction, "ExportMessage": {"network": XcmV5NetworkId, "destination": XcmV5Junctions, "xcm": Anonymize<Ict03eedr8de9s>}, "LockAsset": {"asset": Anonymize<Iffh1nc5e1mod6>, "unlocker": Anonymize<If9iqq7i64mur8>}, "UnlockAsset": {"asset": Anonymize<Iffh1nc5e1mod6>, "target": Anonymize<If9iqq7i64mur8>}, "NoteUnlockable": {"asset": Anonymize<Iffh1nc5e1mod6>, "owner": Anonymize<If9iqq7i64mur8>}, "RequestUnlock": {"asset": Anonymize<Iffh1nc5e1mod6>, "locker": Anonymize<If9iqq7i64mur8>}, "SetFeesMode": Anonymize<I4nae9rsql8fa7>, "SetTopic": FixedSizeBinary<32>, "ClearTopic": undefined, "AliasOrigin": Anonymize<If9iqq7i64mur8>, "UnpaidExecution": {"weight_limit": XcmV3WeightLimit, "check_origin"?: Anonymize<I4pai6qnfk426l>}, "PayFees": {"asset": Anonymize<Iffh1nc5e1mod6>}, "InitiateTransfer": {"destination": Anonymize<If9iqq7i64mur8>, "remote_fees"?: (Anonymize<Ifhmc9e7vpeeig>) | undefined, "preserve_origin": boolean, "assets": Array<Anonymize<Ifhmc9e7vpeeig>>, "remote_xcm": Anonymize<Ict03eedr8de9s>}, "ExecuteWithOrigin": {"descendant_origin"?: (XcmV5Junctions) | undefined, "xcm": Anonymize<Ict03eedr8de9s>}, "SetHints": {"hints": Array<Enum<{"AssetClaimer": {"location": Anonymize<If9iqq7i64mur8>}}>>}}>;
export const XcmV5Instruction = _Enum as unknown as GetEnum<XcmV5Instruction>;

export type I4npjalvhmfuj = Array<Anonymize<Iffh1nc5e1mod6>>;

export type Iffh1nc5e1mod6 = {"id": Anonymize<If9iqq7i64mur8>, "fun": XcmV3MultiassetFungibility};

export type XcmV3MultiassetFungibility = Enum<{"Fungible": bigint, "NonFungible": XcmV3MultiassetAssetInstance}>;
export const XcmV3MultiassetFungibility = _Enum as unknown as GetEnum<XcmV3MultiassetFungibility>;

export type XcmV3MultiassetAssetInstance = Enum<{"Undefined": undefined, "Index": bigint, "Array4": FixedSizeBinary<4>, "Array8": FixedSizeBinary<8>, "Array16": FixedSizeBinary<16>, "Array32": FixedSizeBinary<32>}>;
export const XcmV3MultiassetAssetInstance = _Enum as unknown as GetEnum<XcmV3MultiassetAssetInstance>;

export type I7vucpgm2c6959 = AnonymousEnum<{"Null": undefined, "Assets": Anonymize<I4npjalvhmfuj>, "ExecutionResult"?: Anonymize<I3l6ejee750fv1>, "Version": number, "PalletsInfo": Anonymize<I599u7h20b52at>, "DispatchResult": XcmV3MaybeErrorCode}>;

export type I3l6ejee750fv1 = ([number, Anonymize<Id56rgs0bdb7gl>]) | undefined;

export type I599u7h20b52at = Array<{"index": number, "name": Binary, "module_name": Binary, "major": number, "minor": number, "patch": number}>;

export type XcmV3MaybeErrorCode = Enum<{"Success": undefined, "Error": Binary, "TruncatedError": Binary}>;
export const XcmV3MaybeErrorCode = _Enum as unknown as GetEnum<XcmV3MaybeErrorCode>;

export type I4pai6qnfk426l = (Anonymize<If9iqq7i64mur8>) | undefined;

export type XcmV2OriginKind = Enum<{"Native": undefined, "SovereignAccount": undefined, "Superuser": undefined, "Xcm": undefined}>;
export const XcmV2OriginKind = _Enum as unknown as GetEnum<XcmV2OriginKind>;

export type Iasb8k6ash5mjn = (Anonymize<I4q39t5hn830vp>) | undefined;

export type I5uhhrjqfuo4e5 = {"sender": number, "max_message_size": number, "max_capacity": number};

export type Ifij4jam0o7sub = {"recipient": number};

export type Ieeb4svd9i8fji = {"initiator": number, "sender": number, "recipient": number};

export type I6vsmh07hrp1rc = {"destination": Anonymize<If9iqq7i64mur8>, "query_id": bigint, "max_weight": Anonymize<I4q39t5hn830vp>};

export type XcmV5AssetFilter = Enum<{"Definite": Anonymize<I4npjalvhmfuj>, "Wild": XcmV5WildAsset}>;
export const XcmV5AssetFilter = _Enum as unknown as GetEnum<XcmV5AssetFilter>;

export type XcmV5WildAsset = Enum<{"All": undefined, "AllOf": {"id": Anonymize<If9iqq7i64mur8>, "fun": XcmV2MultiassetWildFungibility}, "AllCounted": number, "AllOfCounted": {"id": Anonymize<If9iqq7i64mur8>, "fun": XcmV2MultiassetWildFungibility, "count": number}}>;
export const XcmV5WildAsset = _Enum as unknown as GetEnum<XcmV5WildAsset>;

export type XcmV2MultiassetWildFungibility = Enum<{"Fungible": undefined, "NonFungible": undefined}>;
export const XcmV2MultiassetWildFungibility = _Enum as unknown as GetEnum<XcmV2MultiassetWildFungibility>;

export type XcmV3WeightLimit = Enum<{"Unlimited": undefined, "Limited": Anonymize<I4q39t5hn830vp>}>;
export const XcmV3WeightLimit = _Enum as unknown as GetEnum<XcmV3WeightLimit>;

export type Ieprdqqu7ildvr = {"query_id": bigint, "max_response_weight": Anonymize<I4q39t5hn830vp>};

export type Id7mf37dkpgfjs = {"index": number, "name": Binary, "module_name": Binary, "crate_major": number, "min_crate_minor": number};

export type I4nae9rsql8fa7 = {"jit_withdraw": boolean};

export type Ifhmc9e7vpeeig = AnonymousEnum<{"Teleport": XcmV5AssetFilter, "ReserveDeposit": XcmV5AssetFilter, "ReserveWithdraw": XcmV5AssetFilter}>;

export type Icl7nl1rfeog3i = {"origin": Anonymize<If9iqq7i64mur8>, "query_id": bigint};

export type Iasr6pj6shs0fl = {"query_id": bigint, "response": Anonymize<I7vucpgm2c6959>};

export type I2uqmls7kcdnii = {"query_id": bigint, "pallet_index": number, "call_index": number};

export type Idg69klialbkb8 = {"query_id": bigint, "pallet_index": number, "call_index": number, "actual_weight": Anonymize<I4q39t5hn830vp>, "max_budgeted_weight": Anonymize<I4q39t5hn830vp>};

export type I7r6b7145022pp = {"origin": Anonymize<If9iqq7i64mur8>, "query_id": bigint, "expected_location"?: Anonymize<I4pai6qnfk426l>};

export type I30pg328m00nr3 = {"query_id": bigint};

export type Icmrn7bogp28cs = {"hash": FixedSizeBinary<32>, "origin": Anonymize<If9iqq7i64mur8>, "assets": XcmVersionedAssets};

export type XcmVersionedAssets = Enum<{"V3": Anonymize<Iai6dhqiq3bach>, "V4": Anonymize<I50mli3hb64f9b>, "V5": Anonymize<I4npjalvhmfuj>}>;
export const XcmVersionedAssets = _Enum as unknown as GetEnum<XcmVersionedAssets>;

export type Iai6dhqiq3bach = Array<Anonymize<Idcm24504c8bkk>>;

export type Idcm24504c8bkk = {"id": XcmV3MultiassetAssetId, "fun": XcmV3MultiassetFungibility};

export type XcmV3MultiassetAssetId = Enum<{"Concrete": Anonymize<I4c0s5cioidn76>, "Abstract": FixedSizeBinary<32>}>;
export const XcmV3MultiassetAssetId = _Enum as unknown as GetEnum<XcmV3MultiassetAssetId>;

export type I4c0s5cioidn76 = {"parents": number, "interior": XcmV3Junctions};

export type XcmV3Junctions = Enum<{"Here": undefined, "X1": XcmV3Junction, "X2": FixedSizeArray<2, XcmV3Junction>, "X3": FixedSizeArray<3, XcmV3Junction>, "X4": FixedSizeArray<4, XcmV3Junction>, "X5": FixedSizeArray<5, XcmV3Junction>, "X6": FixedSizeArray<6, XcmV3Junction>, "X7": FixedSizeArray<7, XcmV3Junction>, "X8": FixedSizeArray<8, XcmV3Junction>}>;
export const XcmV3Junctions = _Enum as unknown as GetEnum<XcmV3Junctions>;

export type XcmV3Junction = Enum<{"Parachain": number, "AccountId32": {"network"?: Anonymize<Idcq3vns9tgp5p>, "id": FixedSizeBinary<32>}, "AccountIndex64": {"network"?: Anonymize<Idcq3vns9tgp5p>, "index": bigint}, "AccountKey20": {"network"?: Anonymize<Idcq3vns9tgp5p>, "key": FixedSizeBinary<20>}, "PalletInstance": number, "GeneralIndex": bigint, "GeneralKey": Anonymize<I15lht6t53odo4>, "OnlyChild": undefined, "Plurality": Anonymize<I518fbtnclg1oc>, "GlobalConsensus": XcmV3JunctionNetworkId}>;
export const XcmV3Junction = _Enum as unknown as GetEnum<XcmV3Junction>;

export type Idcq3vns9tgp5p = (XcmV3JunctionNetworkId) | undefined;

export type XcmV3JunctionNetworkId = Enum<{"ByGenesis": FixedSizeBinary<32>, "ByFork": Anonymize<I15vf5oinmcgps>, "Polkadot": undefined, "Kusama": undefined, "Westend": undefined, "Rococo": undefined, "Wococo": undefined, "Ethereum": Anonymize<I623eo8t3jrbeo>, "BitcoinCore": undefined, "BitcoinCash": undefined, "PolkadotBulletin": undefined}>;
export const XcmV3JunctionNetworkId = _Enum as unknown as GetEnum<XcmV3JunctionNetworkId>;

export type I50mli3hb64f9b = Array<Anonymize<Ia5l7mu5a6v49o>>;

export type Ia5l7mu5a6v49o = {"id": Anonymize<I4c0s5cioidn76>, "fun": XcmV3MultiassetFungibility};

export type I7m9b5plj4h5ot = {"destination": Anonymize<If9iqq7i64mur8>, "result": number, "cost": Anonymize<I4npjalvhmfuj>, "message_id": FixedSizeBinary<32>};

export type I9kt8c221c83ln = {"location": Anonymize<If9iqq7i64mur8>, "version": number};

export type I9onhk772nfs4f = {"location": Anonymize<If9iqq7i64mur8>, "query_id": bigint, "error": Anonymize<Id56rgs0bdb7gl>};

export type I3l6bnksrmt56r = {"location": XcmVersionedLocation, "query_id": bigint};

export type XcmVersionedLocation = Enum<{"V3": Anonymize<I4c0s5cioidn76>, "V4": Anonymize<I4c0s5cioidn76>, "V5": Anonymize<If9iqq7i64mur8>}>;
export const XcmVersionedLocation = _Enum as unknown as GetEnum<XcmVersionedLocation>;

export type Idh09k0l2pmdcg = {"origin": Anonymize<If9iqq7i64mur8>, "query_id": bigint, "expected_querier": Anonymize<If9iqq7i64mur8>, "maybe_actual_querier"?: Anonymize<I4pai6qnfk426l>};

export type I7uoiphbm0tj4r = {"destination": Anonymize<If9iqq7i64mur8>, "cost": Anonymize<I4npjalvhmfuj>, "message_id": FixedSizeBinary<32>};

export type I512p1n7qt24l8 = {"paying": Anonymize<If9iqq7i64mur8>, "fees": Anonymize<I4npjalvhmfuj>};

export type I6s1nbislhk619 = {"version": number};

export type Ihpdgvt7vs2cb = AnonymousEnum<{
/**
 *Downward message is invalid XCM.
 *\[ id \]
 */
"InvalidFormat": FixedSizeBinary<32>, 
/**
 *Downward message is unsupported version of XCM.
 *\[ id \]
 */
"UnsupportedVersion": FixedSizeBinary<32>, 
/**
 *Downward message executed with the given outcome.
 *\[ id, outcome \]
 */
"ExecutedDownward": Anonymize<Ibeto40kl3r5j7>}>;

export type Ibeto40kl3r5j7 = [FixedSizeBinary<32>, Anonymize<I6uq5gb4s805s7>];

export type Ift4p4jnj5bri1 = AnonymousEnum<{
/**
 *Delivery fee factor has been decreased.
 */
"DeliveryFeeFactorDecreased": Anonymize<Ie8hpsm3jhsvo3>, 
/**
 *Delivery fee factor has been increased.
 */
"DeliveryFeeFactorIncreased": Anonymize<Ie8hpsm3jhsvo3>}>;

export type Ie8hpsm3jhsvo3 = {
/**
 *New value of the `DeliveryFeeFactor`.
 */
"new_value": bigint};

export type I2kosejppk3jon = AnonymousEnum<{
/**
 *Message discarded due to an error in the `MessageProcessor` (usually a format error).
 */
"ProcessingFailed": Anonymize<I1rvj4ubaplho0>, 
/**
 *Message is processed.
 */
"Processed": Anonymize<Ia3uu7lqcc1q1i>, 
/**
 *Message placed in overweight queue.
 */
"OverweightEnqueued": Anonymize<I7crucfnonitkn>, 
/**
 *This page was reaped.
 */
"PageReaped": Anonymize<I7tmrp94r9sq4n>}>;

export type I1rvj4ubaplho0 = {
/**
 *The `blake2_256` hash of the message.
 */
"id": FixedSizeBinary<32>, 
/**
 *The queue of the message.
 */
"origin": Anonymize<Iejeo53sea6n4q>, 
/**
 *The error that occurred.
 *
 *This error is pretty opaque. More fine-grained errors need to be emitted as events
 *by the `MessageProcessor`.
 */
"error": Anonymize<I5hhsj7l9obr84>};

export type Iejeo53sea6n4q = AnonymousEnum<{"Here": undefined, "Parent": undefined, "Sibling": number}>;

export type I5hhsj7l9obr84 = AnonymousEnum<{"BadFormat": undefined, "Corrupt": undefined, "Unsupported": undefined, "Overweight": Anonymize<I4q39t5hn830vp>, "Yield": undefined, "StackLimitReached": undefined}>;

export type Ia3uu7lqcc1q1i = {
/**
 *The `blake2_256` hash of the message.
 */
"id": FixedSizeBinary<32>, 
/**
 *The queue of the message.
 */
"origin": Anonymize<Iejeo53sea6n4q>, 
/**
 *How much weight was used to process the message.
 */
"weight_used": Anonymize<I4q39t5hn830vp>, 
/**
 *Whether the message was processed.
 *
 *Note that this does not mean that the underlying `MessageProcessor` was internally
 *successful. It *solely* means that the MQ pallet will treat this as a success
 *condition and discard the message. Any internal error needs to be emitted as events
 *by the `MessageProcessor`.
 */
"success": boolean};

export type I7crucfnonitkn = {
/**
 *The `blake2_256` hash of the message.
 */
"id": FixedSizeBinary<32>, 
/**
 *The queue of the message.
 */
"origin": Anonymize<Iejeo53sea6n4q>, 
/**
 *The page of the message.
 */
"page_index": number, 
/**
 *The index of the message within the page.
 */
"message_index": number};

export type I7tmrp94r9sq4n = {
/**
 *The queue of the page.
 */
"origin": Anonymize<Iejeo53sea6n4q>, 
/**
 *The index of the page.
 */
"index": number};

export type I4ojsoreb32hho = AnonymousEnum<{
/**
 *Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 *well as the error.
 */
"BatchInterrupted": Anonymize<I6apgv3jf5lls3>, 
/**
 *Batch of dispatches completed fully with no error.
 */
"BatchCompleted": undefined, 
/**
 *Batch of dispatches completed but has errors.
 */
"BatchCompletedWithErrors": undefined, 
/**
 *A single item within a Batch of dispatches has completed with no error.
 */
"ItemCompleted": undefined, 
/**
 *A single item within a Batch of dispatches has completed with error.
 */
"ItemFailed": Anonymize<I94i64lcekgj2f>, 
/**
 *A call was dispatched.
 */
"DispatchedAs": Anonymize<I26asiqk87b44t>, 
/**
 *Main call was dispatched.
 */
"IfElseMainSuccess": undefined, 
/**
 *The fallback call was dispatched.
 */
"IfElseFallbackCalled": Anonymize<I5hett2bg1fnha>}>;

export type I6apgv3jf5lls3 = {"index": number, "error": Anonymize<I4umgp8a2i7jfd>};

export type I94i64lcekgj2f = {"error": Anonymize<I4umgp8a2i7jfd>};

export type I26asiqk87b44t = {"result": Anonymize<I97nrbjju21ave>};

export type I97nrbjju21ave = ResultPayload<undefined, Anonymize<I4umgp8a2i7jfd>>;

export type I5hett2bg1fnha = {"main_error": Anonymize<I4umgp8a2i7jfd>};

export type Icr8dskpun21k = AnonymousEnum<{
/**
 *A new multisig operation has begun.
 */
"NewMultisig": Anonymize<Iep27ialq4a7o7>, 
/**
 *A multisig operation has been approved by someone.
 */
"MultisigApproval": Anonymize<Iasu5jvoqr43mv>, 
/**
 *A multisig operation has been executed.
 */
"MultisigExecuted": Anonymize<I5p1a1fpo3402q>, 
/**
 *A multisig operation has been cancelled.
 */
"MultisigCancelled": Anonymize<I5qolde99acmd1>}>;

export type Iep27ialq4a7o7 = {"approving": SS58String, "multisig": SS58String, "call_hash": FixedSizeBinary<32>};

export type Iasu5jvoqr43mv = {"approving": SS58String, "timepoint": Anonymize<Itvprrpb0nm3o>, "multisig": SS58String, "call_hash": FixedSizeBinary<32>};

export type Itvprrpb0nm3o = {"height": number, "index": number};

export type I5p1a1fpo3402q = {"approving": SS58String, "timepoint": Anonymize<Itvprrpb0nm3o>, "multisig": SS58String, "call_hash": FixedSizeBinary<32>, "result": Anonymize<I97nrbjju21ave>};

export type I5qolde99acmd1 = {"cancelling": SS58String, "timepoint": Anonymize<Itvprrpb0nm3o>, "multisig": SS58String, "call_hash": FixedSizeBinary<32>};

export type Icmu8ofcbmfheo = AnonymousEnum<{
/**
 *A proxy was executed correctly, with the given.
 */
"ProxyExecuted": Anonymize<I26asiqk87b44t>, 
/**
 *A pure account has been created by new proxy with given
 *disambiguation index and proxy type.
 */
"PureCreated": Anonymize<Ie7cuj84ohvg56>, 
/**
 *An announcement was placed to make a call in the future.
 */
"Announced": Anonymize<I2ur0oeqg495j8>, 
/**
 *A proxy was added.
 */
"ProxyAdded": Anonymize<I8ioopvokvl3ud>, 
/**
 *A proxy was removed.
 */
"ProxyRemoved": Anonymize<I8ioopvokvl3ud>}>;

export type Ie7cuj84ohvg56 = {"pure": SS58String, "who": SS58String, "proxy_type": Anonymize<I5ftepkjop3g1u>, "disambiguation_index": number};

export type I5ftepkjop3g1u = AnonymousEnum<{"Any": undefined, "NonTransfer": undefined, "CancelProxy": undefined, "Assets": undefined, "AssetOwner": undefined, "AssetManager": undefined, "Collator": undefined}>;

export type I2ur0oeqg495j8 = {"real": SS58String, "proxy": SS58String, "call_hash": FixedSizeBinary<32>};

export type I8ioopvokvl3ud = {"delegator": SS58String, "delegatee": SS58String, "proxy_type": Anonymize<I5ftepkjop3g1u>, "delay": number};

export type I6avancvg8fd05 = AnonymousEnum<{
/**
 *Some asset class was created.
 */
"Created": Anonymize<I88ff3u4dpivk>, 
/**
 *Some assets were issued.
 */
"Issued": Anonymize<I33cp947glv1ks>, 
/**
 *Some assets were transferred.
 */
"Transferred": Anonymize<Ic9om1gmmqu7rq>, 
/**
 *Some assets were destroyed.
 */
"Burned": Anonymize<I5hfov2b68ppb6>, 
/**
 *The management team changed.
 */
"TeamChanged": Anonymize<Ibthhb2m9vneds>, 
/**
 *The owner changed.
 */
"OwnerChanged": Anonymize<Iaitn5bqfacj7k>, 
/**
 *Some account `who` was frozen.
 */
"Frozen": Anonymize<If4ebvclj2ugvi>, 
/**
 *Some account `who` was thawed.
 */
"Thawed": Anonymize<If4ebvclj2ugvi>, 
/**
 *Some asset `asset_id` was frozen.
 */
"AssetFrozen": Anonymize<Ia5le7udkgbaq9>, 
/**
 *Some asset `asset_id` was thawed.
 */
"AssetThawed": Anonymize<Ia5le7udkgbaq9>, 
/**
 *Accounts were destroyed for given asset.
 */
"AccountsDestroyed": Anonymize<Ieduc1e6frq8rb>, 
/**
 *Approvals were destroyed for given asset.
 */
"ApprovalsDestroyed": Anonymize<I9h6gbtabovtm4>, 
/**
 *An asset class is in the process of being destroyed.
 */
"DestructionStarted": Anonymize<Ia5le7udkgbaq9>, 
/**
 *An asset class was destroyed.
 */
"Destroyed": Anonymize<Ia5le7udkgbaq9>, 
/**
 *Some asset class was force-created.
 */
"ForceCreated": Anonymize<Iaitn5bqfacj7k>, 
/**
 *New metadata has been set for an asset.
 */
"MetadataSet": Anonymize<Ifnsa0dkkpf465>, 
/**
 *Metadata has been cleared for an asset.
 */
"MetadataCleared": Anonymize<Ia5le7udkgbaq9>, 
/**
 *(Additional) funds have been approved for transfer to a destination account.
 */
"ApprovedTransfer": Anonymize<I65dtqr2egjbc3>, 
/**
 *An approval for account `delegate` was cancelled by `owner`.
 */
"ApprovalCancelled": Anonymize<Ibqj3vg5s5lk0c>, 
/**
 *An `amount` was transferred in its entirety from `owner` to `destination` by
 *the approved `delegate`.
 */
"TransferredApproved": Anonymize<I6l73u513p8rna>, 
/**
 *An asset has had its attributes changed by the `Force` origin.
 */
"AssetStatusChanged": Anonymize<Ia5le7udkgbaq9>, 
/**
 *The min_balance of an asset has been updated by the asset owner.
 */
"AssetMinBalanceChanged": Anonymize<Iefqmt2htu1dlu>, 
/**
 *Some account `who` was created with a deposit from `depositor`.
 */
"Touched": Anonymize<If8bgtgqrchjtu>, 
/**
 *Some account `who` was blocked.
 */
"Blocked": Anonymize<If4ebvclj2ugvi>, 
/**
 *Some assets were deposited (e.g. for transaction fees).
 */
"Deposited": Anonymize<Idusmq77988cmt>, 
/**
 *Some assets were withdrawn from the account (e.g. for transaction fees).
 */
"Withdrawn": Anonymize<Idusmq77988cmt>}>;

export type I88ff3u4dpivk = {"asset_id": number, "creator": SS58String, "owner": SS58String};

export type I33cp947glv1ks = {"asset_id": number, "owner": SS58String, "amount": bigint};

export type Ic9om1gmmqu7rq = {"asset_id": number, "from": SS58String, "to": SS58String, "amount": bigint};

export type I5hfov2b68ppb6 = {"asset_id": number, "owner": SS58String, "balance": bigint};

export type Ibthhb2m9vneds = {"asset_id": number, "issuer": SS58String, "admin": SS58String, "freezer": SS58String};

export type Iaitn5bqfacj7k = {"asset_id": number, "owner": SS58String};

export type If4ebvclj2ugvi = {"asset_id": number, "who": SS58String};

export type Ia5le7udkgbaq9 = {"asset_id": number};

export type Ieduc1e6frq8rb = {"asset_id": number, "accounts_destroyed": number, "accounts_remaining": number};

export type I9h6gbtabovtm4 = {"asset_id": number, "approvals_destroyed": number, "approvals_remaining": number};

export type Ifnsa0dkkpf465 = {"asset_id": number, "name": Binary, "symbol": Binary, "decimals": number, "is_frozen": boolean};

export type I65dtqr2egjbc3 = {"asset_id": number, "source": SS58String, "delegate": SS58String, "amount": bigint};

export type Ibqj3vg5s5lk0c = {"asset_id": number, "owner": SS58String, "delegate": SS58String};

export type I6l73u513p8rna = {"asset_id": number, "owner": SS58String, "delegate": SS58String, "destination": SS58String, "amount": bigint};

export type Iefqmt2htu1dlu = {"asset_id": number, "new_min_balance": bigint};

export type If8bgtgqrchjtu = {"asset_id": number, "who": SS58String, "depositor": SS58String};

export type Idusmq77988cmt = {"asset_id": number, "who": SS58String, "amount": bigint};

export type Ia0j71vjrjqu9p = AnonymousEnum<{
/**
 *A `collection` was created.
 */
"Created": Anonymize<I9gqanbbbe917p>, 
/**
 *A `collection` was force-created.
 */
"ForceCreated": Anonymize<Id1m1230297f7a>, 
/**
 *A `collection` was destroyed.
 */
"Destroyed": Anonymize<I6cu7obfo0rr0o>, 
/**
 *An `item` was issued.
 */
"Issued": Anonymize<Ifvb1p5munhhv4>, 
/**
 *An `item` was transferred.
 */
"Transferred": Anonymize<I46h83ilqeed3g>, 
/**
 *An `item` was destroyed.
 */
"Burned": Anonymize<Ifvb1p5munhhv4>, 
/**
 *Some `item` was frozen.
 */
"Frozen": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Some `item` was thawed.
 */
"Thawed": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Some `collection` was frozen.
 */
"CollectionFrozen": Anonymize<I6cu7obfo0rr0o>, 
/**
 *Some `collection` was thawed.
 */
"CollectionThawed": Anonymize<I6cu7obfo0rr0o>, 
/**
 *The owner changed.
 */
"OwnerChanged": Anonymize<Icahse3uoi76n7>, 
/**
 *The management team changed.
 */
"TeamChanged": Anonymize<I75sj3uv7gnemk>, 
/**
 *An `item` of a `collection` has been approved by the `owner` for transfer by
 *a `delegate`.
 */
"ApprovedTransfer": Anonymize<I5fjkvcb5vr6nb>, 
/**
 *An approval for a `delegate` account to transfer the `item` of an item
 *`collection` was cancelled by its `owner`.
 */
"ApprovalCancelled": Anonymize<I5fjkvcb5vr6nb>, 
/**
 *A `collection` has had its attributes changed by the `Force` origin.
 */
"ItemStatusChanged": Anonymize<I6cu7obfo0rr0o>, 
/**
 *New metadata has been set for a `collection`.
 */
"CollectionMetadataSet": Anonymize<I9viqhmdtuof5e>, 
/**
 *Metadata has been cleared for a `collection`.
 */
"CollectionMetadataCleared": Anonymize<I6cu7obfo0rr0o>, 
/**
 *New metadata has been set for an item.
 */
"MetadataSet": Anonymize<Iceq9fmmp9aeqv>, 
/**
 *Metadata has been cleared for an item.
 */
"MetadataCleared": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Metadata has been cleared for an item.
 */
"Redeposited": Anonymize<I2gr1toekv86b9>, 
/**
 *New attribute metadata has been set for a `collection` or `item`.
 */
"AttributeSet": Anonymize<I5tvvgui05tn6e>, 
/**
 *Attribute metadata has been cleared for a `collection` or `item`.
 */
"AttributeCleared": Anonymize<Ibal0joadvdc2h>, 
/**
 *Ownership acceptance has changed for an account.
 */
"OwnershipAcceptanceChanged": Anonymize<I2v2ikqt2trp52>, 
/**
 *Max supply has been set for a collection.
 */
"CollectionMaxSupplySet": Anonymize<I6h88h8vba22v8>, 
/**
 *The price was set for the instance.
 */
"ItemPriceSet": Anonymize<If3057hi1g5qlo>, 
/**
 *The price for the instance was removed.
 */
"ItemPriceRemoved": Anonymize<Iafkqus0ohh6l6>, 
/**
 *An item was bought.
 */
"ItemBought": Anonymize<Iaii5qf41d5n3d>}>;

export type I9gqanbbbe917p = {"collection": number, "creator": SS58String, "owner": SS58String};

export type Id1m1230297f7a = {"collection": number, "owner": SS58String};

export type I6cu7obfo0rr0o = {"collection": number};

export type Ifvb1p5munhhv4 = {"collection": number, "item": number, "owner": SS58String};

export type I46h83ilqeed3g = {"collection": number, "item": number, "from": SS58String, "to": SS58String};

export type Iafkqus0ohh6l6 = {"collection": number, "item": number};

export type Icahse3uoi76n7 = {"collection": number, "new_owner": SS58String};

export type I75sj3uv7gnemk = {"collection": number, "issuer": SS58String, "admin": SS58String, "freezer": SS58String};

export type I5fjkvcb5vr6nb = {"collection": number, "item": number, "owner": SS58String, "delegate": SS58String};

export type I9viqhmdtuof5e = {"collection": number, "data": Binary, "is_frozen": boolean};

export type Iceq9fmmp9aeqv = {"collection": number, "item": number, "data": Binary, "is_frozen": boolean};

export type I2gr1toekv86b9 = {"collection": number, "successful_items": Anonymize<Icgljjb6j82uhn>};

export type Icgljjb6j82uhn = Array<number>;

export type I5tvvgui05tn6e = {"collection": number, "maybe_item"?: Anonymize<I4arjljr6dpflb>, "key": Binary, "value": Binary};

export type I4arjljr6dpflb = (number) | undefined;

export type Ibal0joadvdc2h = {"collection": number, "maybe_item"?: Anonymize<I4arjljr6dpflb>, "key": Binary};

export type I2v2ikqt2trp52 = {"who": SS58String, "maybe_collection"?: Anonymize<I4arjljr6dpflb>};

export type I6h88h8vba22v8 = {"collection": number, "max_supply": number};

export type If3057hi1g5qlo = {"collection": number, "item": number, "price": bigint, "whitelisted_buyer"?: Anonymize<Ihfphjolmsqq1>};

export type Ihfphjolmsqq1 = (SS58String) | undefined;

export type Iaii5qf41d5n3d = {"collection": number, "item": number, "price": bigint, "seller": SS58String, "buyer": SS58String};

export type I6qicn8jn4fftj = AnonymousEnum<{
/**
 *A `collection` was created.
 */
"Created": Anonymize<I9gqanbbbe917p>, 
/**
 *A `collection` was force-created.
 */
"ForceCreated": Anonymize<Id1m1230297f7a>, 
/**
 *A `collection` was destroyed.
 */
"Destroyed": Anonymize<I6cu7obfo0rr0o>, 
/**
 *An `item` was issued.
 */
"Issued": Anonymize<Ifvb1p5munhhv4>, 
/**
 *An `item` was transferred.
 */
"Transferred": Anonymize<I46h83ilqeed3g>, 
/**
 *An `item` was destroyed.
 */
"Burned": Anonymize<Ifvb1p5munhhv4>, 
/**
 *An `item` became non-transferable.
 */
"ItemTransferLocked": Anonymize<Iafkqus0ohh6l6>, 
/**
 *An `item` became transferable.
 */
"ItemTransferUnlocked": Anonymize<Iafkqus0ohh6l6>, 
/**
 *`item` metadata or attributes were locked.
 */
"ItemPropertiesLocked": Anonymize<I1jj31tn29ie3c>, 
/**
 *Some `collection` was locked.
 */
"CollectionLocked": Anonymize<I6cu7obfo0rr0o>, 
/**
 *The owner changed.
 */
"OwnerChanged": Anonymize<Icahse3uoi76n7>, 
/**
 *The management team changed.
 */
"TeamChanged": Anonymize<Ico8bnjc6taa27>, 
/**
 *An `item` of a `collection` has been approved by the `owner` for transfer by
 *a `delegate`.
 */
"TransferApproved": Anonymize<I78i1bvlonei69>, 
/**
 *An approval for a `delegate` account to transfer the `item` of an item
 *`collection` was cancelled by its `owner`.
 */
"ApprovalCancelled": Anonymize<I5fjkvcb5vr6nb>, 
/**
 *All approvals of an item got cancelled.
 */
"AllApprovalsCancelled": Anonymize<Ifvb1p5munhhv4>, 
/**
 *A `collection` has had its config changed by the `Force` origin.
 */
"CollectionConfigChanged": Anonymize<I6cu7obfo0rr0o>, 
/**
 *New metadata has been set for a `collection`.
 */
"CollectionMetadataSet": Anonymize<I78u60nqh0etah>, 
/**
 *Metadata has been cleared for a `collection`.
 */
"CollectionMetadataCleared": Anonymize<I6cu7obfo0rr0o>, 
/**
 *New metadata has been set for an item.
 */
"ItemMetadataSet": Anonymize<Icrkms46uh8tpb>, 
/**
 *Metadata has been cleared for an item.
 */
"ItemMetadataCleared": Anonymize<Iafkqus0ohh6l6>, 
/**
 *The deposit for a set of `item`s within a `collection` has been updated.
 */
"Redeposited": Anonymize<I2gr1toekv86b9>, 
/**
 *New attribute metadata has been set for a `collection` or `item`.
 */
"AttributeSet": Anonymize<I5llu6o6a0go5i>, 
/**
 *Attribute metadata has been cleared for a `collection` or `item`.
 */
"AttributeCleared": Anonymize<I93r2effh7od84>, 
/**
 *A new approval to modify item attributes was added.
 */
"ItemAttributesApprovalAdded": Anonymize<I9i1f9mrso1hmf>, 
/**
 *A new approval to modify item attributes was removed.
 */
"ItemAttributesApprovalRemoved": Anonymize<I9i1f9mrso1hmf>, 
/**
 *Ownership acceptance has changed for an account.
 */
"OwnershipAcceptanceChanged": Anonymize<I2v2ikqt2trp52>, 
/**
 *Max supply has been set for a collection.
 */
"CollectionMaxSupplySet": Anonymize<I6h88h8vba22v8>, 
/**
 *Mint settings for a collection had changed.
 */
"CollectionMintSettingsUpdated": Anonymize<I6cu7obfo0rr0o>, 
/**
 *Event gets emitted when the `NextCollectionId` gets incremented.
 */
"NextCollectionIdIncremented": Anonymize<I9ksla2si91s56>, 
/**
 *The price was set for the item.
 */
"ItemPriceSet": Anonymize<If3057hi1g5qlo>, 
/**
 *The price for the item was removed.
 */
"ItemPriceRemoved": Anonymize<Iafkqus0ohh6l6>, 
/**
 *An item was bought.
 */
"ItemBought": Anonymize<Iaii5qf41d5n3d>, 
/**
 *A tip was sent.
 */
"TipSent": Anonymize<Id9j7b85otvjru>, 
/**
 *An `item` swap intent was created.
 */
"SwapCreated": Anonymize<Iaihk9pek2ajl9>, 
/**
 *The swap was cancelled.
 */
"SwapCancelled": Anonymize<Iaihk9pek2ajl9>, 
/**
 *The swap has been claimed.
 */
"SwapClaimed": Anonymize<Id9av23h47ufb2>, 
/**
 *New attributes have been set for an `item` of the `collection`.
 */
"PreSignedAttributesSet": Anonymize<Ib4kpnijas4jqp>, 
/**
 *A new attribute in the `Pallet` namespace was set for the `collection` or an `item`
 *within that `collection`.
 */
"PalletAttributeSet": Anonymize<I2vnu5k0u1i65h>}>;

export type I1jj31tn29ie3c = {"collection": number, "item": number, "lock_metadata": boolean, "lock_attributes": boolean};

export type Ico8bnjc6taa27 = {"collection": number, "issuer"?: Anonymize<Ihfphjolmsqq1>, "admin"?: Anonymize<Ihfphjolmsqq1>, "freezer"?: Anonymize<Ihfphjolmsqq1>};

export type I78i1bvlonei69 = {"collection": number, "item": number, "owner": SS58String, "delegate": SS58String, "deadline"?: Anonymize<I4arjljr6dpflb>};

export type I78u60nqh0etah = {"collection": number, "data": Binary};

export type Icrkms46uh8tpb = {"collection": number, "item": number, "data": Binary};

export type I5llu6o6a0go5i = {"collection": number, "maybe_item"?: Anonymize<I4arjljr6dpflb>, "key": Binary, "value": Binary, "namespace": Anonymize<If3jjadhmug6qc>};

export type If3jjadhmug6qc = AnonymousEnum<{"Pallet": undefined, "CollectionOwner": undefined, "ItemOwner": undefined, "Account": SS58String}>;

export type I93r2effh7od84 = {"collection": number, "maybe_item"?: Anonymize<I4arjljr6dpflb>, "key": Binary, "namespace": Anonymize<If3jjadhmug6qc>};

export type I9i1f9mrso1hmf = {"collection": number, "item": number, "delegate": SS58String};

export type I9ksla2si91s56 = {"next_id"?: Anonymize<I4arjljr6dpflb>};

export type Id9j7b85otvjru = {"collection": number, "item": number, "sender": SS58String, "receiver": SS58String, "amount": bigint};

export type Iaihk9pek2ajl9 = {"offered_collection": number, "offered_item": number, "desired_collection": number, "desired_item"?: Anonymize<I4arjljr6dpflb>, "price"?: Anonymize<I6oogc1jbmmi81>, "deadline": number};

export type I6oogc1jbmmi81 = ({"amount": bigint, "direction": Enum<{"Send": undefined, "Receive": undefined}>}) | undefined;

export type Id9av23h47ufb2 = {"sent_collection": number, "sent_item": number, "sent_item_owner": SS58String, "received_collection": number, "received_item": number, "received_item_owner": SS58String, "price"?: Anonymize<I6oogc1jbmmi81>, "deadline": number};

export type Ib4kpnijas4jqp = {"collection": number, "item": number, "namespace": Anonymize<If3jjadhmug6qc>};

export type I2vnu5k0u1i65h = {"collection": number, "item"?: Anonymize<I4arjljr6dpflb>, "attribute": Enum<{"UsedToClaim": number, "TransferDisabled": undefined}>, "value": Binary};

export type I95qdjot35qdnr = AnonymousEnum<{
/**
 *Some asset class was created.
 */
"Created": Anonymize<Icqe266pmnr25o>, 
/**
 *Some assets were issued.
 */
"Issued": Anonymize<I5hoiph0lqphp>, 
/**
 *Some assets were transferred.
 */
"Transferred": Anonymize<I5k7oropl9ofc7>, 
/**
 *Some assets were destroyed.
 */
"Burned": Anonymize<I48vagp1omigob>, 
/**
 *The management team changed.
 */
"TeamChanged": Anonymize<Ib5tst4ppem1g6>, 
/**
 *The owner changed.
 */
"OwnerChanged": Anonymize<Ibn64edsrg3737>, 
/**
 *Some account `who` was frozen.
 */
"Frozen": Anonymize<I83r9d02dh47j9>, 
/**
 *Some account `who` was thawed.
 */
"Thawed": Anonymize<I83r9d02dh47j9>, 
/**
 *Some asset `asset_id` was frozen.
 */
"AssetFrozen": Anonymize<I22bm4d7re21j9>, 
/**
 *Some asset `asset_id` was thawed.
 */
"AssetThawed": Anonymize<I22bm4d7re21j9>, 
/**
 *Accounts were destroyed for given asset.
 */
"AccountsDestroyed": Anonymize<I3jnhifvaeuama>, 
/**
 *Approvals were destroyed for given asset.
 */
"ApprovalsDestroyed": Anonymize<I8n1gia0lo42ok>, 
/**
 *An asset class is in the process of being destroyed.
 */
"DestructionStarted": Anonymize<I22bm4d7re21j9>, 
/**
 *An asset class was destroyed.
 */
"Destroyed": Anonymize<I22bm4d7re21j9>, 
/**
 *Some asset class was force-created.
 */
"ForceCreated": Anonymize<Ibn64edsrg3737>, 
/**
 *New metadata has been set for an asset.
 */
"MetadataSet": Anonymize<I6gb0o7lqjfdjq>, 
/**
 *Metadata has been cleared for an asset.
 */
"MetadataCleared": Anonymize<I22bm4d7re21j9>, 
/**
 *(Additional) funds have been approved for transfer to a destination account.
 */
"ApprovedTransfer": Anonymize<Idh36v6iegkmpq>, 
/**
 *An approval for account `delegate` was cancelled by `owner`.
 */
"ApprovalCancelled": Anonymize<I27hnueutmchbe>, 
/**
 *An `amount` was transferred in its entirety from `owner` to `destination` by
 *the approved `delegate`.
 */
"TransferredApproved": Anonymize<Iectm2em66uhao>, 
/**
 *An asset has had its attributes changed by the `Force` origin.
 */
"AssetStatusChanged": Anonymize<I22bm4d7re21j9>, 
/**
 *The min_balance of an asset has been updated by the asset owner.
 */
"AssetMinBalanceChanged": Anonymize<I7q57goff3j72h>, 
/**
 *Some account `who` was created with a deposit from `depositor`.
 */
"Touched": Anonymize<Ibe49veu9i9nro>, 
/**
 *Some account `who` was blocked.
 */
"Blocked": Anonymize<I83r9d02dh47j9>, 
/**
 *Some assets were deposited (e.g. for transaction fees).
 */
"Deposited": Anonymize<I1rnkmiu7usb82>, 
/**
 *Some assets were withdrawn from the account (e.g. for transaction fees).
 */
"Withdrawn": Anonymize<I1rnkmiu7usb82>}>;

export type Icqe266pmnr25o = {"asset_id": Anonymize<If9iqq7i64mur8>, "creator": SS58String, "owner": SS58String};

export type I5hoiph0lqphp = {"asset_id": Anonymize<If9iqq7i64mur8>, "owner": SS58String, "amount": bigint};

export type I5k7oropl9ofc7 = {"asset_id": Anonymize<If9iqq7i64mur8>, "from": SS58String, "to": SS58String, "amount": bigint};

export type I48vagp1omigob = {"asset_id": Anonymize<If9iqq7i64mur8>, "owner": SS58String, "balance": bigint};

export type Ib5tst4ppem1g6 = {"asset_id": Anonymize<If9iqq7i64mur8>, "issuer": SS58String, "admin": SS58String, "freezer": SS58String};

export type Ibn64edsrg3737 = {"asset_id": Anonymize<If9iqq7i64mur8>, "owner": SS58String};

export type I83r9d02dh47j9 = {"asset_id": Anonymize<If9iqq7i64mur8>, "who": SS58String};

export type I22bm4d7re21j9 = {"asset_id": Anonymize<If9iqq7i64mur8>};

export type I3jnhifvaeuama = {"asset_id": Anonymize<If9iqq7i64mur8>, "accounts_destroyed": number, "accounts_remaining": number};

export type I8n1gia0lo42ok = {"asset_id": Anonymize<If9iqq7i64mur8>, "approvals_destroyed": number, "approvals_remaining": number};

export type I6gb0o7lqjfdjq = {"asset_id": Anonymize<If9iqq7i64mur8>, "name": Binary, "symbol": Binary, "decimals": number, "is_frozen": boolean};

export type Idh36v6iegkmpq = {"asset_id": Anonymize<If9iqq7i64mur8>, "source": SS58String, "delegate": SS58String, "amount": bigint};

export type I27hnueutmchbe = {"asset_id": Anonymize<If9iqq7i64mur8>, "owner": SS58String, "delegate": SS58String};

export type Iectm2em66uhao = {"asset_id": Anonymize<If9iqq7i64mur8>, "owner": SS58String, "delegate": SS58String, "destination": SS58String, "amount": bigint};

export type I7q57goff3j72h = {"asset_id": Anonymize<If9iqq7i64mur8>, "new_min_balance": bigint};

export type Ibe49veu9i9nro = {"asset_id": Anonymize<If9iqq7i64mur8>, "who": SS58String, "depositor": SS58String};

export type I1rnkmiu7usb82 = {"asset_id": Anonymize<If9iqq7i64mur8>, "who": SS58String, "amount": bigint};

export type I41s7j0hsp2u0b = AnonymousEnum<{
/**
 *An NFT was successfully fractionalized.
 */
"NftFractionalized": Anonymize<Ib67harsthtcvr>, 
/**
 *An NFT was successfully returned back.
 */
"NftUnified": Anonymize<Ic7ok3lq0728f7>}>;

export type Ib67harsthtcvr = {"nft_collection": number, "nft": number, "fractions": bigint, "asset": number, "beneficiary": SS58String};

export type Ic7ok3lq0728f7 = {"nft_collection": number, "nft": number, "asset": number, "beneficiary": SS58String};

export type Ievo2o32gc42ng = AnonymousEnum<{
/**
 *A successful call of the `CreatePool` extrinsic will create this event.
 */
"PoolCreated": Anonymize<I1q546n7mmm8nk>, 
/**
 *A successful call of the `AddLiquidity` extrinsic will create this event.
 */
"LiquidityAdded": Anonymize<If7i5aoh4lk0a1>, 
/**
 *A successful call of the `RemoveLiquidity` extrinsic will create this event.
 */
"LiquidityRemoved": Anonymize<If9prqbk25189q>, 
/**
 *Assets have been converted from one to another. Both `SwapExactTokenForToken`
 *and `SwapTokenForExactToken` will generate this event.
 */
"SwapExecuted": Anonymize<Icugn66dlnp8rd>, 
/**
 *Assets have been converted from one to another.
 */
"SwapCreditExecuted": Anonymize<I1bfrt15apsnp>, 
/**
 *Pool has been touched in order to fulfill operational requirements.
 */
"Touched": Anonymize<Id3old33tr9erj>}>;

export type I1q546n7mmm8nk = {
/**
 *The account that created the pool.
 */
"creator": SS58String, 
/**
 *The pool id associated with the pool. Note that the order of the assets may not be
 *the same as the order specified in the create pool extrinsic.
 */
"pool_id": Anonymize<If21n82i0516em>, 
/**
 *The account ID of the pool.
 */
"pool_account": SS58String, 
/**
 *The id of the liquidity tokens that will be minted when assets are added to this
 *pool.
 */
"lp_token": number};

export type If21n82i0516em = FixedSizeArray<2, Anonymize<If9iqq7i64mur8>>;

export type If7i5aoh4lk0a1 = {
/**
 *The account that the liquidity was taken from.
 */
"who": SS58String, 
/**
 *The account that the liquidity tokens were minted to.
 */
"mint_to": SS58String, 
/**
 *The pool id of the pool that the liquidity was added to.
 */
"pool_id": Anonymize<If21n82i0516em>, 
/**
 *The amount of the first asset that was added to the pool.
 */
"amount1_provided": bigint, 
/**
 *The amount of the second asset that was added to the pool.
 */
"amount2_provided": bigint, 
/**
 *The id of the lp token that was minted.
 */
"lp_token": number, 
/**
 *The amount of lp tokens that were minted of that id.
 */
"lp_token_minted": bigint};

export type If9prqbk25189q = {
/**
 *The account that the liquidity tokens were burned from.
 */
"who": SS58String, 
/**
 *The account that the assets were transferred to.
 */
"withdraw_to": SS58String, 
/**
 *The pool id that the liquidity was removed from.
 */
"pool_id": Anonymize<If21n82i0516em>, 
/**
 *The amount of the first asset that was removed from the pool.
 */
"amount1": bigint, 
/**
 *The amount of the second asset that was removed from the pool.
 */
"amount2": bigint, 
/**
 *The id of the lp token that was burned.
 */
"lp_token": number, 
/**
 *The amount of lp tokens that were burned of that id.
 */
"lp_token_burned": bigint, 
/**
 *Liquidity withdrawal fee (%).
 */
"withdrawal_fee": number};

export type Icugn66dlnp8rd = {
/**
 *Which account was the instigator of the swap.
 */
"who": SS58String, 
/**
 *The account that the assets were transferred to.
 */
"send_to": SS58String, 
/**
 *The amount of the first asset that was swapped.
 */
"amount_in": bigint, 
/**
 *The amount of the second asset that was received.
 */
"amount_out": bigint, 
/**
 *The route of asset IDs with amounts that the swap went through.
 *E.g. (A, amount_in) -> (Dot, amount_out) -> (B, amount_out)
 */
"path": Anonymize<I7egh93q89718t>};

export type I7egh93q89718t = Array<[Anonymize<If9iqq7i64mur8>, bigint]>;

export type I1bfrt15apsnp = {
/**
 *The amount of the first asset that was swapped.
 */
"amount_in": bigint, 
/**
 *The amount of the second asset that was received.
 */
"amount_out": bigint, 
/**
 *The route of asset IDs with amounts that the swap went through.
 *E.g. (A, amount_in) -> (Dot, amount_out) -> (B, amount_out)
 */
"path": Anonymize<I7egh93q89718t>};

export type Id3old33tr9erj = {
/**
 *The ID of the pool.
 */
"pool_id": Anonymize<If21n82i0516em>, 
/**
 *The account initiating the touch.
 */
"who": SS58String};

export type I7omheqbc53plq = AnonymousEnum<{"Frozen": Anonymize<Idusmq77988cmt>, "Thawed": Anonymize<Idusmq77988cmt>}>;

export type I7bdov8cfj9qk8 = AnonymousEnum<{"Frozen": Anonymize<I1rnkmiu7usb82>, "Thawed": Anonymize<I1rnkmiu7usb82>}>;

export type I3vl9org1c535t = AnonymousEnum<{
/**
 *A custom event emitted by the contract.
 */
"ContractEmitted": Anonymize<I7svbvm6hg57aj>}>;

export type I7svbvm6hg57aj = {
/**
 *The contract that emitted the event.
 */
"contract": FixedSizeBinary<20>, 
/**
 *Data supplied by the contract. Metadata generated during contract compilation
 *is needed to decode it.
 */
"data": Binary, 
/**
 *A list of topics used to index the event.
 *Number of topics is capped by [`limits::NUM_EVENT_TOPICS`].
 */
"topics": Anonymize<Ic5m5lp1oioo8r>};

export type Ic5m5lp1oioo8r = Array<FixedSizeBinary<32>>;

export type I23dbg5epnfjeo = AnonymousEnum<{
/**
 *An account staked some tokens in a pool.
 */
"Staked": Anonymize<I2k42nnm9nluhp>, 
/**
 *An account unstaked some tokens from a pool.
 */
"Unstaked": Anonymize<Ic37bju0plgup1>, 
/**
 *An account harvested some rewards.
 */
"RewardsHarvested": Anonymize<Ic37bju0plgup1>, 
/**
 *A new reward pool was created.
 */
"PoolCreated": Anonymize<I7sm6ctq17lb21>, 
/**
 *A pool reward rate was modified by the admin.
 */
"PoolRewardRateModified": Anonymize<I3fl7kvh9tccu2>, 
/**
 *A pool admin was modified.
 */
"PoolAdminModified": Anonymize<I51711mrb372ih>, 
/**
 *A pool expiry block was modified by the admin.
 */
"PoolExpiryBlockModified": Anonymize<I5j2utcjc4hktd>, 
/**
 *A pool information was cleared after it's completion.
 */
"PoolCleanedUp": Anonymize<I931cottvong90>}>;

export type I2k42nnm9nluhp = {
/**
 *The account that staked assets.
 */
"staker": SS58String, 
/**
 *The pool.
 */
"pool_id": number, 
/**
 *The staked asset amount.
 */
"amount": bigint};

export type Ic37bju0plgup1 = {
/**
 *The account that signed transaction.
 */
"caller": SS58String, 
/**
 *The account that unstaked assets.
 */
"staker": SS58String, 
/**
 *The pool.
 */
"pool_id": number, 
/**
 *The unstaked asset amount.
 */
"amount": bigint};

export type I7sm6ctq17lb21 = {
/**
 *The account that created the pool.
 */
"creator": SS58String, 
/**
 *The unique ID for the new pool.
 */
"pool_id": number, 
/**
 *The staking asset.
 */
"staked_asset_id": Anonymize<If9iqq7i64mur8>, 
/**
 *The reward asset.
 */
"reward_asset_id": Anonymize<If9iqq7i64mur8>, 
/**
 *The initial reward rate per block.
 */
"reward_rate_per_block": bigint, 
/**
 *The block the pool will cease to accumulate rewards.
 */
"expiry_block": number, 
/**
 *The account allowed to modify the pool.
 */
"admin": SS58String};

export type I3fl7kvh9tccu2 = {
/**
 *The modified pool.
 */
"pool_id": number, 
/**
 *The new reward rate per block.
 */
"new_reward_rate_per_block": bigint};

export type I51711mrb372ih = {
/**
 *The modified pool.
 */
"pool_id": number, 
/**
 *The new admin.
 */
"new_admin": SS58String};

export type I5j2utcjc4hktd = {
/**
 *The modified pool.
 */
"pool_id": number, 
/**
 *The new expiry block.
 */
"new_expiry_block": number};

export type I931cottvong90 = {
/**
 *The cleared pool.
 */
"pool_id": number};

export type I61dksvl51aujo = AnonymousEnum<{
/**
 *Given number of `(top, child)` keys were migrated respectively, with the given
 *`compute`.
 */
"Migrated": Anonymize<Iagqcb06kbevb1>, 
/**
 *Some account got slashed by the given amount.
 */
"Slashed": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *The auto migration task finished.
 */
"AutoMigrationFinished": undefined, 
/**
 *Migration got halted due to an error or miss-configuration.
 */
"Halted": Anonymize<Iec8defeh924b6>}>;

export type Iagqcb06kbevb1 = {"top": number, "child": number, "compute": Enum<{"Signed": undefined, "Auto": undefined}>};

export type Iec8defeh924b6 = {"error": Anonymize<I96objte63brjr>};

export type Ifiu844mj7r2h6 = AnonymousEnum<{
/**
 *Indicates that a pool has been migrated to the new account ID.
 */
"MigratedToNewAccount": Anonymize<I9al0v2qskkktj>}>;

export type I9al0v2qskkktj = {
/**
 *Pool's ID.
 */
"pool_id": Anonymize<If21n82i0516em>, 
/**
 *Pool's prior account ID.
 */
"prior_account": SS58String, 
/**
 *Pool's new account ID.
 */
"new_account": SS58String};

export type I95g6i7ilua7lq = Array<Anonymize<I9jd27rnpm8ttv>>;

export type I9jd27rnpm8ttv = FixedSizeArray<2, number>;

export type Ieniouoqkq4icf = {"spec_version": number, "spec_name": string};

export type I1v7jbnil3tjns = Array<{"used_bandwidth": Anonymize<Ieafp1gui1o4cl>, "para_head_hash"?: Anonymize<I4s6vifaf8k998>, "consumed_go_ahead_signal"?: Anonymize<Iav8k1edbj86k7>}>;

export type Ieafp1gui1o4cl = {"ump_msg_count": number, "ump_total_bytes": number, "hrmp_outgoing": Array<[number, {"msg_count": number, "total_bytes": number}]>};

export type Iav8k1edbj86k7 = (UpgradeGoAhead) | undefined;

export type UpgradeGoAhead = Enum<{"Abort": undefined, "GoAhead": undefined}>;
export const UpgradeGoAhead = _Enum as unknown as GetEnum<UpgradeGoAhead>;

export type I8jgj1nhcr2dg8 = {"used_bandwidth": Anonymize<Ieafp1gui1o4cl>, "hrmp_watermark"?: Anonymize<I4arjljr6dpflb>, "consumed_go_ahead_signal"?: Anonymize<Iav8k1edbj86k7>};

export type Ifn6q3equiq9qi = {"parent_head": Binary, "relay_parent_number": number, "relay_parent_storage_root": FixedSizeBinary<32>, "max_pov_size": number};

export type Ia3sb0vgvovhtg = (UpgradeRestriction) | undefined;

export type UpgradeRestriction = Enum<{"Present": undefined}>;
export const UpgradeRestriction = _Enum as unknown as GetEnum<UpgradeRestriction>;

export type Itom7fk49o0c9 = Array<Binary>;

export type I4i91h98n3cv1b = {"dmq_mqc_head": FixedSizeBinary<32>, "relay_dispatch_queue_remaining_capacity": {"remaining_count": number, "remaining_size": number}, "ingress_channels": Array<[number, {"max_capacity": number, "max_total_size": number, "max_message_size": number, "msg_count": number, "total_size": number, "mqc_head"?: Anonymize<I4s6vifaf8k998>}]>, "egress_channels": Array<[number, {"max_capacity": number, "max_total_size": number, "max_message_size": number, "msg_count": number, "total_size": number, "mqc_head"?: Anonymize<I4s6vifaf8k998>}]>};

export type I4iumukclgj8ej = {"max_code_size": number, "max_head_data_size": number, "max_upward_queue_count": number, "max_upward_queue_size": number, "max_upward_message_size": number, "max_upward_message_num_per_candidate": number, "hrmp_max_message_num_per_candidate": number, "validation_upgrade_cooldown": number, "validation_upgrade_delay": number, "async_backing_params": {"max_candidate_depth": number, "allowed_ancestry_len": number}};

export type Iqnbvitf7a7l3 = Array<[number, FixedSizeBinary<32>]>;

export type I6r5cbv8ttrb09 = Array<{"recipient": number, "data": Binary}>;

export type Iepbsvlk3qceij = AnonymousEnum<{"Active": {"index": number, "inner_cursor"?: Anonymize<Iabpgqcjikia83>, "started_at": number}, "Stuck": undefined}>;

export type I8ds64oj6581v0 = Array<{"id": FixedSizeBinary<8>, "amount": bigint, "reasons": BalancesTypesReasons}>;

export type BalancesTypesReasons = Enum<{"Fee": undefined, "Misc": undefined, "All": undefined}>;
export const BalancesTypesReasons = _Enum as unknown as GetEnum<BalancesTypesReasons>;

export type Ia7pdug7cdsg8g = Array<{"id": FixedSizeBinary<8>, "amount": bigint}>;

export type I3jggpqhtc9902 = Array<{"id": Enum<{"NftFractionalization": Anonymize<I8bf8ma56td7eh>, "Revive": Anonymize<I364se861k3md3>, "AssetRewards": Anonymize<Icf8m1v8b5b6eh>, "StateTrieMigration": Anonymize<I7lf1val3vmpq0>}>, "amount": bigint}>;

export type I8bf8ma56td7eh = AnonymousEnum<{"Fractionalized": undefined}>;

export type I364se861k3md3 = AnonymousEnum<{"CodeUploadDepositReserve": undefined, "StorageDepositReserve": undefined, "AddressMapping": undefined}>;

export type Icf8m1v8b5b6eh = AnonymousEnum<{"PoolCreation": undefined}>;

export type I7lf1val3vmpq0 = AnonymousEnum<{"SlashForMigrate": undefined}>;

export type I88srdm17ahab6 = Array<{"id": Enum<{"AssetRewards": Anonymize<Idod1r495oa5gh>}>, "amount": bigint}>;

export type Idod1r495oa5gh = AnonymousEnum<{"Staked": undefined}>;

export type TransactionPaymentReleases = Enum<{"V1Ancient": undefined, "V2": undefined}>;
export const TransactionPaymentReleases = _Enum as unknown as GetEnum<TransactionPaymentReleases>;

export type Ifi4da1gej1fri = Array<Anonymize<Iep1lmt6q3s6r3>>;

export type Iep1lmt6q3s6r3 = {"who": SS58String, "deposit": bigint};

export type Ifvgo9568rpmqc = Array<Anonymize<I8uo3fpd3bcc6f>>;

export type I8uo3fpd3bcc6f = [SS58String, FixedSizeBinary<32>];

export type I6cs1itejju2vv = [bigint, number];

export type Ib77b0fp1a6mjr = Array<{"recipient": number, "state": Enum<{"Ok": undefined, "Suspended": undefined}>, "signals_exist": boolean, "first_index": number, "last_index": number}>;

export type I5g2vv0ckl2m8b = [number, number];

export type Ifup3lg9ro8a0f = {"suspend_threshold": number, "drop_threshold": number, "resume_threshold": number};

export type I5qfubnuvrnqn6 = AnonymousEnum<{"Pending": {"responder": XcmVersionedLocation, "maybe_match_querier"?: (XcmVersionedLocation) | undefined, "maybe_notify"?: (FixedSizeBinary<2>) | undefined, "timeout": number}, "VersionNotifier": {"origin": XcmVersionedLocation, "is_active": boolean}, "Ready": {"response": Enum<{"V3": XcmV3Response, "V4": XcmV4Response, "V5": Anonymize<I7vucpgm2c6959>}>, "at": number}}>;

export type XcmV3Response = Enum<{"Null": undefined, "Assets": Anonymize<Iai6dhqiq3bach>, "ExecutionResult"?: Anonymize<I7sltvf8v2nure>, "Version": number, "PalletsInfo": Anonymize<I599u7h20b52at>, "DispatchResult": XcmV3MaybeErrorCode}>;
export const XcmV3Response = _Enum as unknown as GetEnum<XcmV3Response>;

export type I7sltvf8v2nure = ([number, XcmV3TraitsError]) | undefined;

export type XcmV3TraitsError = Enum<{"Overflow": undefined, "Unimplemented": undefined, "UntrustedReserveLocation": undefined, "UntrustedTeleportLocation": undefined, "LocationFull": undefined, "LocationNotInvertible": undefined, "BadOrigin": undefined, "InvalidLocation": undefined, "AssetNotFound": undefined, "FailedToTransactAsset": undefined, "NotWithdrawable": undefined, "LocationCannotHold": undefined, "ExceedsMaxMessageSize": undefined, "DestinationUnsupported": undefined, "Transport": undefined, "Unroutable": undefined, "UnknownClaim": undefined, "FailedToDecode": undefined, "MaxWeightInvalid": undefined, "NotHoldingFees": undefined, "TooExpensive": undefined, "Trap": bigint, "ExpectationFalse": undefined, "PalletNotFound": undefined, "NameMismatch": undefined, "VersionIncompatible": undefined, "HoldingWouldOverflow": undefined, "ExportError": undefined, "ReanchorFailed": undefined, "NoDeal": undefined, "FeesNotMet": undefined, "LockError": undefined, "NoPermission": undefined, "Unanchored": undefined, "NotDepositable": undefined, "UnhandledXcmVersion": undefined, "WeightLimitReached": Anonymize<I4q39t5hn830vp>, "Barrier": undefined, "WeightNotComputable": undefined, "ExceedsStackLimit": undefined}>;
export const XcmV3TraitsError = _Enum as unknown as GetEnum<XcmV3TraitsError>;

export type XcmV4Response = Enum<{"Null": undefined, "Assets": Anonymize<I50mli3hb64f9b>, "ExecutionResult"?: Anonymize<I7sltvf8v2nure>, "Version": number, "PalletsInfo": Anonymize<I599u7h20b52at>, "DispatchResult": XcmV3MaybeErrorCode}>;
export const XcmV4Response = _Enum as unknown as GetEnum<XcmV4Response>;

export type I8t3u2dv73ahbd = [number, XcmVersionedLocation];

export type I7vlvrrl2pnbgk = [bigint, Anonymize<I4q39t5hn830vp>, number];

export type Ie0rpl5bahldfk = Array<[XcmVersionedLocation, number]>;

export type XcmPalletVersionMigrationStage = Enum<{"MigrateSupportedVersion": undefined, "MigrateVersionNotifiers": undefined, "NotifyCurrentTargets"?: Anonymize<Iabpgqcjikia83>, "MigrateAndNotifyOldTargets": undefined}>;
export const XcmPalletVersionMigrationStage = _Enum as unknown as GetEnum<XcmPalletVersionMigrationStage>;

export type I7e5oaj2qi4kl1 = {"amount": bigint, "owner": XcmVersionedLocation, "locker": XcmVersionedLocation, "consumers": Array<[undefined, bigint]>};

export type Ie849h3gncgvok = [number, SS58String, XcmVersionedAssetId];

export type XcmVersionedAssetId = Enum<{"V3": XcmV3MultiassetAssetId, "V4": Anonymize<I4c0s5cioidn76>, "V5": Anonymize<If9iqq7i64mur8>}>;
export const XcmVersionedAssetId = _Enum as unknown as GetEnum<XcmVersionedAssetId>;

export type Iat62vud7hlod2 = Array<[bigint, XcmVersionedLocation]>;

export type I7f4alf2hnuu8s = {"delivery_fee_factor": bigint, "is_congested": boolean};

export type Idh2ug6ou4a8og = {"begin": number, "end": number, "count": number, "ready_neighbours"?: ({"prev": Anonymize<Iejeo53sea6n4q>, "next": Anonymize<Iejeo53sea6n4q>}) | undefined, "message_count": bigint, "size": bigint};

export type I53esa2ms463bk = {"remaining": number, "remaining_size": number, "first_index": number, "first": number, "last": number, "heap": Binary};

export type Ib4jhb8tt3uung = [Anonymize<Iejeo53sea6n4q>, number];

export type Iag146hmjgqfgj = {"when": Anonymize<Itvprrpb0nm3o>, "deposit": bigint, "depositor": SS58String, "approvals": Anonymize<Ia2lhg7l2hilo3>};

export type I32or1mos65f9o = [Array<{"delegate": SS58String, "proxy_type": Anonymize<I5ftepkjop3g1u>, "delay": number}>, bigint];

export type I9p9lq3rej5bhc = [Array<{"real": SS58String, "call_hash": FixedSizeBinary<32>, "height": number}>, bigint];

export type I3qklfjubrljqh = {"owner": SS58String, "issuer": SS58String, "admin": SS58String, "freezer": SS58String, "supply": bigint, "deposit": bigint, "min_balance": bigint, "is_sufficient": boolean, "accounts": number, "sufficients": number, "approvals": number, "status": Enum<{"Live": undefined, "Frozen": undefined, "Destroying": undefined}>};

export type Iag3f1hum3p4c8 = {"balance": bigint, "status": Enum<{"Liquid": undefined, "Frozen": undefined, "Blocked": undefined}>, "reason": Enum<{"Consumer": undefined, "Sufficient": undefined, "DepositHeld": bigint, "DepositRefunded": undefined, "DepositFrom": Anonymize<I95l2k9b1re95f>}>};

export type I95l2k9b1re95f = [SS58String, bigint];

export type I7svnfko10tq2e = [number, SS58String];

export type I4s6jkha20aoh0 = {"amount": bigint, "deposit": bigint};

export type I2brm5b9jij1st = [number, SS58String, SS58String];

export type I78s05f59eoi8b = {"deposit": bigint, "name": Binary, "symbol": Binary, "decimals": number, "is_frozen": boolean};

export type Ianufjuplcj6u4 = {"owner": SS58String, "issuer": SS58String, "admin": SS58String, "freezer": SS58String, "total_deposit": bigint, "free_holding": boolean, "items": number, "item_metadatas": number, "attributes": number, "is_frozen": boolean};

export type Id32h28hjj1tch = [SS58String, number, number];

export type I6ouflveob4eli = [SS58String, number];

export type I2mv9dvsaj3kcr = {"owner": SS58String, "approved"?: Anonymize<Ihfphjolmsqq1>, "is_frozen": boolean, "deposit": bigint};

export type I7781vnk0rm9eq = {"deposit": bigint, "data": Binary, "is_frozen": boolean};

export type Ie2iqtdb0stqo1 = [Binary, bigint];

export type I5irutptk105do = [number, Anonymize<I4arjljr6dpflb>, Binary];

export type Ic9nev69d8grv1 = [bigint, Anonymize<Ihfphjolmsqq1>];

export type I18m6a0sc4k7s9 = {"owner": SS58String, "owner_deposit": bigint, "items": number, "item_metadatas": number, "item_configs": number, "attributes": number};

export type Ic9iokm15iigt6 = {"owner": SS58String, "approvals": Array<[SS58String, Anonymize<I4arjljr6dpflb>]>, "deposit": Anonymize<Ic262ibdoec56a>};

export type I35m96p3u4vl0p = {"deposit": bigint, "data": Binary};

export type Iapmji0h53pmkn = {"deposit": Anonymize<I6e70ge7ubff75>, "data": Binary};

export type I6e70ge7ubff75 = {"account"?: Anonymize<Ihfphjolmsqq1>, "amount": bigint};

export type Idrr42svup341f = [Binary, Anonymize<I6e70ge7ubff75>];

export type I4ugih6gb4fmug = [number, Anonymize<I4arjljr6dpflb>, Anonymize<If3jjadhmug6qc>, Binary];

export type Idac0t49lnd4ls = {"desired_collection": number, "desired_item"?: Anonymize<I4arjljr6dpflb>, "price"?: Anonymize<I6oogc1jbmmi81>, "deadline": number};

export type I72ndo6phms8ik = {"settings": bigint, "max_supply"?: Anonymize<I4arjljr6dpflb>, "mint_settings": Anonymize<Ia3s8qquibn97v>};

export type Ia3s8qquibn97v = {"mint_type": Enum<{"Issuer": undefined, "Public": undefined, "HolderOf": number}>, "price"?: Anonymize<I35p85j063s0il>, "start_block"?: Anonymize<I4arjljr6dpflb>, "end_block"?: Anonymize<I4arjljr6dpflb>, "default_item_settings": bigint};

export type I35p85j063s0il = (bigint) | undefined;

export type I4v5g6i7bmt06o = [Anonymize<If9iqq7i64mur8>, SS58String];

export type I84bhscllvv07n = [Anonymize<If9iqq7i64mur8>, SS58String, SS58String];

export type I1b2ckfeib3nig = {"asset": number, "fractions": bigint, "deposit": bigint, "asset_creator": SS58String};

export type Idtkgtc4to05ia = {"owner": SS58String, "deposit": bigint, "refcount": bigint, "code_len": number, "behaviour_version": number};

export type I5t5eoogd7ekut = {"trie_id": Binary, "code_hash": FixedSizeBinary<32>, "storage_bytes": number, "storage_items": number, "storage_byte_deposit": bigint, "storage_item_deposit": bigint, "storage_base_deposit": bigint, "immutable_data_len": number};

export type I8t4pajubp34g3 = {"insert_counter": number, "delete_counter": number};

export type Id8jl5g9dhjihk = {"amount": bigint, "rewards": bigint, "reward_per_token_paid": bigint};

export type I797avu38kpqn = {"staked_asset_id": Anonymize<If9iqq7i64mur8>, "reward_asset_id": Anonymize<If9iqq7i64mur8>, "reward_rate_per_block": bigint, "expiry_block": number, "admin": SS58String, "total_tokens_staked": bigint, "reward_per_token_stored": bigint, "last_update_block": number, "account": SS58String};

export type If354jrdedj0pj = {"progress_top": Anonymize<I1ufmh6d8psvik>, "progress_child": Anonymize<I1ufmh6d8psvik>, "size": number, "top_items": number, "child_items": number};

export type I1ufmh6d8psvik = AnonymousEnum<{"ToStart": undefined, "LastKey": Binary, "Complete": undefined}>;

export type Ib17t3992hb64n = (Anonymize<I215mkl885p4da>) | undefined;

export type I215mkl885p4da = {"size": number, "item": number};

export type In7a38730s6qs = {"base_block": Anonymize<I4q39t5hn830vp>, "max_block": Anonymize<I4q39t5hn830vp>, "per_class": {"normal": {"base_extrinsic": Anonymize<I4q39t5hn830vp>, "max_extrinsic"?: Anonymize<Iasb8k6ash5mjn>, "max_total"?: Anonymize<Iasb8k6ash5mjn>, "reserved"?: Anonymize<Iasb8k6ash5mjn>}, "operational": {"base_extrinsic": Anonymize<I4q39t5hn830vp>, "max_extrinsic"?: Anonymize<Iasb8k6ash5mjn>, "max_total"?: Anonymize<Iasb8k6ash5mjn>, "reserved"?: Anonymize<Iasb8k6ash5mjn>}, "mandatory": {"base_extrinsic": Anonymize<I4q39t5hn830vp>, "max_extrinsic"?: Anonymize<Iasb8k6ash5mjn>, "max_total"?: Anonymize<Iasb8k6ash5mjn>, "reserved"?: Anonymize<Iasb8k6ash5mjn>}}};

export type If15el53dd76v9 = {"normal": number, "operational": number, "mandatory": number};

export type I9s0ave7t0vnrk = {"read": bigint, "write": bigint};

export type I4fo08joqmcqnm = {"spec_name": string, "impl_name": string, "authoring_version": number, "spec_version": number, "impl_version": number, "apis": Array<[FixedSizeBinary<8>, number]>, "transaction_version": number, "system_version": number};

export type Iekve0i6djpd9f = AnonymousEnum<{
/**
 *Make some on-chain remark.
 *
 *Can be executed by every `origin`.
 */
"remark": Anonymize<I8ofcg5rbj0g2c>, 
/**
 *Set the number of pages in the WebAssembly environment's heap.
 */
"set_heap_pages": Anonymize<I4adgbll7gku4i>, 
/**
 *Set the new runtime code.
 */
"set_code": Anonymize<I6pjjpfvhvcfru>, 
/**
 *Set the new runtime code without doing any checks of the given `code`.
 *
 *Note that runtime upgrades will not run if this is called with a not-increasing spec
 *version!
 */
"set_code_without_checks": Anonymize<I6pjjpfvhvcfru>, 
/**
 *Set some items of storage.
 */
"set_storage": Anonymize<I9pj91mj79qekl>, 
/**
 *Kill some items from storage.
 */
"kill_storage": Anonymize<I39uah9nss64h9>, 
/**
 *Kill all storage items with a key that starts with the given prefix.
 *
 ***NOTE:** We rely on the Root origin to provide us the number of subkeys under
 *the prefix we are removing to accurately calculate the weight of this function.
 */
"kill_prefix": Anonymize<Ik64dknsq7k08>, 
/**
 *Make some on-chain remark and emit event.
 */
"remark_with_event": Anonymize<I8ofcg5rbj0g2c>, 
/**
 *Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
 *later.
 *
 *This call requires Root origin.
 */
"authorize_upgrade": Anonymize<Ib51vk42m1po4n>, 
/**
 *Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
 *later.
 *
 *WARNING: This authorizes an upgrade that will take place without any safety checks, for
 *example that the spec name remains the same and that the version number increases. Not
 *recommended for normal use. Use `authorize_upgrade` instead.
 *
 *This call requires Root origin.
 */
"authorize_upgrade_without_checks": Anonymize<Ib51vk42m1po4n>, 
/**
 *Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
 *
 *If the authorization required a version check, this call will ensure the spec name
 *remains unchanged and that the spec version has increased.
 *
 *Depending on the runtime's `OnSetCode` configuration, this function may directly apply
 *the new `code` in the same block or attempt to schedule the upgrade.
 *
 *All origins are allowed.
 */
"apply_authorized_upgrade": Anonymize<I6pjjpfvhvcfru>}>;

export type I8ofcg5rbj0g2c = {"remark": Binary};

export type I4adgbll7gku4i = {"pages": bigint};

export type I6pjjpfvhvcfru = {"code": Binary};

export type I9pj91mj79qekl = {"items": Anonymize<I6pi5ou8r1hblk>};

export type I6pi5ou8r1hblk = Array<Anonymize<Idkbvh6dahk1v7>>;

export type Idkbvh6dahk1v7 = FixedSizeArray<2, Binary>;

export type I39uah9nss64h9 = {"keys": Anonymize<Itom7fk49o0c9>};

export type Ik64dknsq7k08 = {"prefix": Binary, "subkeys": number};

export type Ib51vk42m1po4n = {"code_hash": FixedSizeBinary<32>};

export type I5kev21p7u6ajb = AnonymousEnum<{
/**
 *Set the current validation data.
 *
 *This should be invoked exactly once per block. It will panic at the finalization
 *phase if the call was not invoked.
 *
 *The dispatch origin for this call must be `Inherent`
 *
 *As a side effect, this function upgrades the current validation function
 *if the appropriate time has come.
 */
"set_validation_data": Anonymize<I60v7bikk54tpu>, "sudo_send_upward_message": Anonymize<Ifpj261e8s63m3>}>;

export type I60v7bikk54tpu = {"data": {"validation_data": Anonymize<Ifn6q3equiq9qi>, "relay_chain_state": Anonymize<Itom7fk49o0c9>, "downward_messages": Array<{"sent_at": number, "msg": Binary}>, "horizontal_messages": Array<[number, Array<{"sent_at": number, "data": Binary}>]>}};

export type Ifpj261e8s63m3 = {"message": Binary};

export type I7d75gqfg6jh9c = AnonymousEnum<{
/**
 *Set the current time.
 *
 *This call should be invoked exactly once per block. It will panic at the finalization
 *phase, if this call hasn't been invoked by that time.
 *
 *The timestamp should be greater than the previous one by the amount specified by
 *[`Config::MinimumPeriod`].
 *
 *The dispatch origin for this call must be _None_.
 *
 *This dispatch class is _Mandatory_ to ensure it gets executed in the block. Be aware
 *that changing the complexity of this call could result exhausting the resources in a
 *block to execute any other calls.
 *
 *## Complexity
 *- `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 *- 1 storage read and 1 storage mutation (codec `O(1)` because of `DidUpdate::take` in
 *  `on_finalize`)
 *- 1 event handler `on_timestamp_set`. Must be `O(1)`.
 */
"set": Anonymize<Idcr6u6361oad9>}>;

export type Idcr6u6361oad9 = {"now": bigint};

export type I4oqb168b2d4er = AnonymousEnum<{
/**
 *Allows root to set a cursor to forcefully start, stop or forward the migration process.
 *
 *Should normally not be needed and is only in place as emergency measure. Note that
 *restarting the migration process in this manner will not call the
 *[`MigrationStatusHandler::started`] hook or emit an `UpgradeStarted` event.
 */
"force_set_cursor": Anonymize<Ibou4u1engb441>, 
/**
 *Allows root to set an active cursor to forcefully start/forward the migration process.
 *
 *This is an edge-case version of [`Self::force_set_cursor`] that allows to set the
 *`started_at` value to the next block number. Otherwise this would not be possible, since
 *`force_set_cursor` takes an absolute block number. Setting `started_at` to `None`
 *indicates that the current block number plus one should be used.
 */
"force_set_active_cursor": Anonymize<Id6nbvqoqdj4o2>, 
/**
 *Forces the onboarding of the migrations.
 *
 *This process happens automatically on a runtime upgrade. It is in place as an emergency
 *measurement. The cursor needs to be `None` for this to succeed.
 */
"force_onboard_mbms": undefined, 
/**
 *Clears the `Historic` set.
 *
 *`map_cursor` must be set to the last value that was returned by the
 *`HistoricCleared` event. The first time `None` can be used. `limit` must be chosen in a
 *way that will result in a sensible weight.
 */
"clear_historic": Anonymize<I95iqep3b8snn9>}>;

export type Ibou4u1engb441 = {"cursor"?: (Anonymize<Iepbsvlk3qceij>) | undefined};

export type Id6nbvqoqdj4o2 = {"index": number, "inner_cursor"?: Anonymize<Iabpgqcjikia83>, "started_at"?: Anonymize<I4arjljr6dpflb>};

export type I95iqep3b8snn9 = {"selector": Enum<{"Specific": Anonymize<Itom7fk49o0c9>, "Wildcard": {"limit"?: Anonymize<I4arjljr6dpflb>, "previous_cursor"?: Anonymize<Iabpgqcjikia83>}}>};

export type I9svldsp29mh87 = AnonymousEnum<{
/**
 *Transfer some liquid free balance to another account.
 *
 *`transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
 *If the sender's account is below the existential deposit as a result
 *of the transfer, the account will be reaped.
 *
 *The dispatch origin for this call must be `Signed` by the transactor.
 */
"transfer_allow_death": Anonymize<I4ktuaksf5i1gk>, 
/**
 *Exactly as `transfer_allow_death`, except the origin must be root and the source account
 *may be specified.
 */
"force_transfer": Anonymize<I9bqtpv2ii35mp>, 
/**
 *Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
 *kill the origin account.
 *
 *99% of the time you want [`transfer_allow_death`] instead.
 *
 *[`transfer_allow_death`]: struct.Pallet.html#method.transfer
 */
"transfer_keep_alive": Anonymize<I4ktuaksf5i1gk>, 
/**
 *Transfer the entire transferable balance from the caller account.
 *
 *NOTE: This function only attempts to transfer _transferable_ balances. This means that
 *any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 *transferred by this function. To ensure that this function results in a killed account,
 *you might need to prepare the account by removing any reference counters, storage
 *deposits, etc...
 *
 *The dispatch origin of this call must be Signed.
 *
 *- `dest`: The recipient of the transfer.
 *- `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *  of the funds the account has, causing the sender account to be killed (false), or
 *  transfer everything except at least the existential deposit, which will guarantee to
 *  keep the sender account alive (true).
 */
"transfer_all": Anonymize<I9j7pagd6d4bda>, 
/**
 *Unreserve some balance from a user by force.
 *
 *Can only be called by ROOT.
 */
"force_unreserve": Anonymize<I2h9pmio37r7fb>, 
/**
 *Upgrade a specified account.
 *
 *- `origin`: Must be `Signed`.
 *- `who`: The account to be upgraded.
 *
 *This will waive the transaction fee if at least all but 10% of the accounts needed to
 *be upgraded. (We let some not have to be upgraded just in order to allow for the
 *possibility of churn).
 */
"upgrade_accounts": Anonymize<Ibmr18suc9ikh9>, 
/**
 *Set the regular balance of a given account.
 *
 *The dispatch origin for this call is `root`.
 */
"force_set_balance": Anonymize<I9iq22t0burs89>, 
/**
 *Adjust the total issuance in a saturating way.
 *
 *Can only be called by root and always needs a positive `delta`.
 *
 *# Example
 */
"force_adjust_total_issuance": Anonymize<I5u8olqbbvfnvf>, 
/**
 *Burn the specified liquid free balance from the origin account.
 *
 *If the origin's account ends up below the existential deposit as a result
 *of the burn and `keep_alive` is false, the account will be reaped.
 *
 *Unlike sending funds to a _burn_ address, which merely makes the funds inaccessible,
 *this `burn` operation will reduce total issuance by the amount _burned_.
 */
"burn": Anonymize<I5utcetro501ir>}>;

export type I4ktuaksf5i1gk = {"dest": MultiAddress, "value": bigint};

export type MultiAddress = Enum<{"Id": SS58String, "Index": undefined, "Raw": Binary, "Address32": FixedSizeBinary<32>, "Address20": FixedSizeBinary<20>}>;
export const MultiAddress = _Enum as unknown as GetEnum<MultiAddress>;

export type I9bqtpv2ii35mp = {"source": MultiAddress, "dest": MultiAddress, "value": bigint};

export type I9j7pagd6d4bda = {"dest": MultiAddress, "keep_alive": boolean};

export type I2h9pmio37r7fb = {"who": MultiAddress, "amount": bigint};

export type Ibmr18suc9ikh9 = {"who": Anonymize<Ia2lhg7l2hilo3>};

export type I9iq22t0burs89 = {"who": MultiAddress, "new_free": bigint};

export type I5u8olqbbvfnvf = {"direction": BalancesAdjustmentDirection, "delta": bigint};

export type BalancesAdjustmentDirection = Enum<{"Increase": undefined, "Decrease": undefined}>;
export const BalancesAdjustmentDirection = _Enum as unknown as GetEnum<BalancesAdjustmentDirection>;

export type I5utcetro501ir = {"value": bigint, "keep_alive": boolean};

export type I9dpq5287dur8b = AnonymousEnum<{
/**
 *Set the list of invulnerable (fixed) collators. These collators must do some
 *preparation, namely to have registered session keys.
 *
 *The call will remove any accounts that have not registered keys from the set. That is,
 *it is non-atomic; the caller accepts all `AccountId`s passed in `new` _individually_ as
 *acceptable Invulnerables, and is not proposing a _set_ of new Invulnerables.
 *
 *This call does not maintain mutual exclusivity of `Invulnerables` and `Candidates`. It
 *is recommended to use a batch of `add_invulnerable` and `remove_invulnerable` instead. A
 *`batch_all` can also be used to enforce atomicity. If any candidates are included in
 *`new`, they should be removed with `remove_invulnerable_candidate` after execution.
 *
 *Must be called by the `UpdateOrigin`.
 */
"set_invulnerables": Anonymize<Ifccifqltb5obi>, 
/**
 *Set the ideal number of non-invulnerable collators. If lowering this number, then the
 *number of running collators could be higher than this figure. Aside from that edge case,
 *there should be no other way to have more candidates than the desired number.
 *
 *The origin for this call must be the `UpdateOrigin`.
 */
"set_desired_candidates": Anonymize<Iadtsfv699cq8b>, 
/**
 *Set the candidacy bond amount.
 *
 *If the candidacy bond is increased by this call, all current candidates which have a
 *deposit lower than the new bond will be kicked from the list and get their deposits
 *back.
 *
 *The origin for this call must be the `UpdateOrigin`.
 */
"set_candidacy_bond": Anonymize<Ialpmgmhr3gk5r>, 
/**
 *Register this account as a collator candidate. The account must (a) already have
 *registered session keys and (b) be able to reserve the `CandidacyBond`.
 *
 *This call is not available to `Invulnerable` collators.
 */
"register_as_candidate": undefined, 
/**
 *Deregister `origin` as a collator candidate. Note that the collator can only leave on
 *session change. The `CandidacyBond` will be unreserved immediately.
 *
 *This call will fail if the total number of candidates would drop below
 *`MinEligibleCollators`.
 */
"leave_intent": undefined, 
/**
 *Add a new account `who` to the list of `Invulnerables` collators. `who` must have
 *registered session keys. If `who` is a candidate, they will be removed.
 *
 *The origin for this call must be the `UpdateOrigin`.
 */
"add_invulnerable": Anonymize<I4cbvqmqadhrea>, 
/**
 *Remove an account `who` from the list of `Invulnerables` collators. `Invulnerables` must
 *be sorted.
 *
 *The origin for this call must be the `UpdateOrigin`.
 */
"remove_invulnerable": Anonymize<I4cbvqmqadhrea>, 
/**
 *Update the candidacy bond of collator candidate `origin` to a new amount `new_deposit`.
 *
 *Setting a `new_deposit` that is lower than the current deposit while `origin` is
 *occupying a top-`DesiredCandidates` slot is not allowed.
 *
 *This call will fail if `origin` is not a collator candidate, the updated bond is lower
 *than the minimum candidacy bond, and/or the amount cannot be reserved.
 */
"update_bond": Anonymize<I3sdol54kg5jaq>, 
/**
 *The caller `origin` replaces a candidate `target` in the collator candidate list by
 *reserving `deposit`. The amount `deposit` reserved by the caller must be greater than
 *the existing bond of the target it is trying to replace.
 *
 *This call will fail if the caller is already a collator candidate or invulnerable, the
 *caller does not have registered session keys, the target is not a collator candidate,
 *and/or the `deposit` amount cannot be reserved.
 */
"take_candidate_slot": Anonymize<I8fougodaj6di6>}>;

export type Ifccifqltb5obi = {"new": Anonymize<Ia2lhg7l2hilo3>};

export type Iadtsfv699cq8b = {"max": number};

export type Ialpmgmhr3gk5r = {"bond": bigint};

export type I3sdol54kg5jaq = {"new_deposit": bigint};

export type I8fougodaj6di6 = {"deposit": bigint, "target": SS58String};

export type I77dda7hps0u37 = AnonymousEnum<{
/**
 *Sets the session key(s) of the function caller to `keys`.
 *Allows an account to set its session key prior to becoming a validator.
 *This doesn't take effect until the next session.
 *
 *The dispatch origin of this function must be signed.
 *
 *## Complexity
 *- `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
 *  fixed.
 */
"set_keys": Anonymize<I81vt5eq60l4b6>, 
/**
 *Removes any session key(s) of the function caller.
 *
 *This doesn't take effect until the next session.
 *
 *The dispatch origin of this function must be Signed and the account must be either be
 *convertible to a validator ID using the chain's typical addressing system (this usually
 *means being a controller account) or directly convertible into a validator ID (which
 *usually means being a stash account).
 *
 *## Complexity
 *- `O(1)` in number of key types. Actual cost depends on the number of length of
 *  `T::Keys::key_ids()` which is fixed.
 */
"purge_keys": undefined}>;

export type I81vt5eq60l4b6 = {"keys": FixedSizeBinary<32>, "proof": Binary};

export type Ib7tahn20bvsep = AnonymousEnum<{
/**
 *Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
 *
 *- `origin`: Must pass `ControllerOrigin`.
 */
"suspend_xcm_execution": undefined, 
/**
 *Resumes all XCM executions for the XCMP queue.
 *
 *Note that this function doesn't change the status of the in/out bound channels.
 *
 *- `origin`: Must pass `ControllerOrigin`.
 */
"resume_xcm_execution": undefined, 
/**
 *Overwrites the number of pages which must be in the queue for the other side to be
 *told to suspend their sending.
 *
 *- `origin`: Must pass `Root`.
 *- `new`: Desired value for `QueueConfigData.suspend_value`
 */
"update_suspend_threshold": Anonymize<I3vh014cqgmrfd>, 
/**
 *Overwrites the number of pages which must be in the queue after which we drop any
 *further messages from the channel.
 *
 *- `origin`: Must pass `Root`.
 *- `new`: Desired value for `QueueConfigData.drop_threshold`
 */
"update_drop_threshold": Anonymize<I3vh014cqgmrfd>, 
/**
 *Overwrites the number of pages which the queue must be reduced to before it signals
 *that message sending may recommence after it has been suspended.
 *
 *- `origin`: Must pass `Root`.
 *- `new`: Desired value for `QueueConfigData.resume_threshold`
 */
"update_resume_threshold": Anonymize<I3vh014cqgmrfd>}>;

export type I3vh014cqgmrfd = {"new": number};

export type I4up31a3q8cjhp = AnonymousEnum<{"send": Anonymize<Ia5cotcvi888ln>, 
/**
 *Teleport some assets from the local chain to some destination chain.
 *
 ***This function is deprecated: Use `limited_teleport_assets` instead.**
 *
 *Fee payment on the destination side is made from the asset in the `assets` vector of
 *index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 *with all fees taken as needed from the asset.
 *
 *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *- `dest`: Destination context for the assets. Will typically be `[Parent,
 *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *  relay to parachain.
 *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *  generally be an `AccountId32` value.
 *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *  fee on the `dest` chain.
 *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *  fees.
 */
"teleport_assets": Anonymize<I21jsa919m88fd>, 
/**
 *Transfer some assets from the local chain to the destination chain through their local,
 *destination or remote reserve.
 *
 *`assets` must have same reserve location and may not be teleportable to `dest`.
 * - `assets` have local reserve: transfer assets to sovereign account of destination
 *   chain and forward a notification XCM to `dest` to mint and deposit reserve-based
 *   assets to `beneficiary`.
 * - `assets` have destination reserve: burn local assets and forward a notification to
 *   `dest` chain to withdraw the reserve assets from this chain's sovereign account and
 *   deposit them to `beneficiary`.
 * - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
 *   reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
 *   to mint and deposit reserve-based assets to `beneficiary`.
 *
 ***This function is deprecated: Use `limited_reserve_transfer_assets` instead.**
 *
 *Fee payment on the destination side is made from the asset in the `assets` vector of
 *index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 *with all fees taken as needed from the asset.
 *
 *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *- `dest`: Destination context for the assets. Will typically be `[Parent,
 *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *  relay to parachain.
 *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *  generally be an `AccountId32` value.
 *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *  fee on the `dest` (and possibly reserve) chains.
 *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *  fees.
 */
"reserve_transfer_assets": Anonymize<I21jsa919m88fd>, 
/**
 *Execute an XCM message from a local, signed, origin.
 *
 *An event is deposited indicating whether `msg` could be executed completely or only
 *partially.
 *
 *No more than `max_weight` will be used in its attempted execution. If this is less than
 *the maximum amount of weight that the message could take to be executed, then no
 *execution attempt will be made.
 */
"execute": Anonymize<Iegif7m3upfe1k>, 
/**
 *Extoll that a particular destination can be communicated with through a particular
 *version of XCM.
 *
 *- `origin`: Must be an origin specified by AdminOrigin.
 *- `location`: The destination that is being described.
 *- `xcm_version`: The latest version of XCM that `location` supports.
 */
"force_xcm_version": Anonymize<I9kt8c221c83ln>, 
/**
 *Set a safe XCM version (the version that XCM should be encoded with if the most recent
 *version a destination can accept is unknown).
 *
 *- `origin`: Must be an origin specified by AdminOrigin.
 *- `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
"force_default_xcm_version": Anonymize<Ic76kfh5ebqkpl>, 
/**
 *Ask a location to notify us regarding their XCM version and any changes to it.
 *
 *- `origin`: Must be an origin specified by AdminOrigin.
 *- `location`: The location to which we should subscribe for XCM version notifications.
 */
"force_subscribe_version_notify": Anonymize<Icscpmubum33bq>, 
/**
 *Require that a particular destination should no longer notify us regarding any XCM
 *version changes.
 *
 *- `origin`: Must be an origin specified by AdminOrigin.
 *- `location`: The location to which we are currently subscribed for XCM version
 *  notifications which we no longer desire.
 */
"force_unsubscribe_version_notify": Anonymize<Icscpmubum33bq>, 
/**
 *Transfer some assets from the local chain to the destination chain through their local,
 *destination or remote reserve.
 *
 *`assets` must have same reserve location and may not be teleportable to `dest`.
 * - `assets` have local reserve: transfer assets to sovereign account of destination
 *   chain and forward a notification XCM to `dest` to mint and deposit reserve-based
 *   assets to `beneficiary`.
 * - `assets` have destination reserve: burn local assets and forward a notification to
 *   `dest` chain to withdraw the reserve assets from this chain's sovereign account and
 *   deposit them to `beneficiary`.
 * - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
 *   reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
 *   to mint and deposit reserve-based assets to `beneficiary`.
 *
 *Fee payment on the destination side is made from the asset in the `assets` vector of
 *index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 *is needed than `weight_limit`, then the operation will fail and the sent assets may be
 *at risk.
 *
 *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *- `dest`: Destination context for the assets. Will typically be `[Parent,
 *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *  relay to parachain.
 *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *  generally be an `AccountId32` value.
 *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *  fee on the `dest` (and possibly reserve) chains.
 *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *  fees.
 *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
"limited_reserve_transfer_assets": Anonymize<I21d2olof7eb60>, 
/**
 *Teleport some assets from the local chain to some destination chain.
 *
 *Fee payment on the destination side is made from the asset in the `assets` vector of
 *index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 *is needed than `weight_limit`, then the operation will fail and the sent assets may be
 *at risk.
 *
 *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *- `dest`: Destination context for the assets. Will typically be `[Parent,
 *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *  relay to parachain.
 *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *  generally be an `AccountId32` value.
 *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *  fee on the `dest` chain.
 *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *  fees.
 *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
"limited_teleport_assets": Anonymize<I21d2olof7eb60>, 
/**
 *Set or unset the global suspension state of the XCM executor.
 *
 *- `origin`: Must be an origin specified by AdminOrigin.
 *- `suspended`: `true` to suspend, `false` to resume.
 */
"force_suspension": Anonymize<Ibgm4rnf22lal1>, 
/**
 *Transfer some assets from the local chain to the destination chain through their local,
 *destination or remote reserve, or through teleports.
 *
 *Fee payment on the destination side is made from the asset in the `assets` vector of
 *index `fee_asset_item` (hence referred to as `fees`), up to enough to pay for
 *`weight_limit` of weight. If more weight is needed than `weight_limit`, then the
 *operation will fail and the sent assets may be at risk.
 *
 *`assets` (excluding `fees`) must have same reserve location or otherwise be teleportable
 *to `dest`, no limitations imposed on `fees`.
 * - for local reserve: transfer assets to sovereign account of destination chain and
 *   forward a notification XCM to `dest` to mint and deposit reserve-based assets to
 *   `beneficiary`.
 * - for destination reserve: burn local assets and forward a notification to `dest` chain
 *   to withdraw the reserve assets from this chain's sovereign account and deposit them
 *   to `beneficiary`.
 * - for remote reserve: burn local assets, forward XCM to reserve chain to move reserves
 *   from this chain's SA to `dest` chain's SA, and forward another XCM to `dest` to mint
 *   and deposit reserve-based assets to `beneficiary`.
 * - for teleports: burn local assets and forward XCM to `dest` chain to mint/teleport
 *   assets and deposit them to `beneficiary`.
 *
 *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *- `dest`: Destination context for the assets. Will typically be `X2(Parent,
 *  Parachain(..))` to send from parachain to parachain, or `X1(Parachain(..))` to send
 *  from relay to parachain.
 *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
 *  generally be an `AccountId32` value.
 *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *  fee on the `dest` (and possibly reserve) chains.
 *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *  fees.
 *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
"transfer_assets": Anonymize<I21d2olof7eb60>, 
/**
 *Claims assets trapped on this pallet because of leftover assets during XCM execution.
 *
 *- `origin`: Anyone can call this extrinsic.
 *- `assets`: The exact assets that were trapped. Use the version to specify what version
 *was the latest when they were trapped.
 *- `beneficiary`: The location/account where the claimed assets will be deposited.
 */
"claim_assets": Anonymize<Ie68np0vpihith>, 
/**
 *Transfer assets from the local chain to the destination chain using explicit transfer
 *types for assets and fees.
 *
 *`assets` must have same reserve location or may be teleportable to `dest`. Caller must
 *provide the `assets_transfer_type` to be used for `assets`:
 * - `TransferType::LocalReserve`: transfer assets to sovereign account of destination
 *   chain and forward a notification XCM to `dest` to mint and deposit reserve-based
 *   assets to `beneficiary`.
 * - `TransferType::DestinationReserve`: burn local assets and forward a notification to
 *   `dest` chain to withdraw the reserve assets from this chain's sovereign account and
 *   deposit them to `beneficiary`.
 * - `TransferType::RemoteReserve(reserve)`: burn local assets, forward XCM to `reserve`
 *   chain to move reserves from this chain's SA to `dest` chain's SA, and forward another
 *   XCM to `dest` to mint and deposit reserve-based assets to `beneficiary`. Typically
 *   the remote `reserve` is Asset Hub.
 * - `TransferType::Teleport`: burn local assets and forward XCM to `dest` chain to
 *   mint/teleport assets and deposit them to `beneficiary`.
 *
 *On the destination chain, as well as any intermediary hops, `BuyExecution` is used to
 *buy execution using transferred `assets` identified by `remote_fees_id`.
 *Make sure enough of the specified `remote_fees_id` asset is included in the given list
 *of `assets`. `remote_fees_id` should be enough to pay for `weight_limit`. If more weight
 *is needed than `weight_limit`, then the operation will fail and the sent assets may be
 *at risk.
 *
 *`remote_fees_id` may use different transfer type than rest of `assets` and can be
 *specified through `fees_transfer_type`.
 *
 *The caller needs to specify what should happen to the transferred assets once they reach
 *the `dest` chain. This is done through the `custom_xcm_on_dest` parameter, which
 *contains the instructions to execute on `dest` as a final step.
 *  This is usually as simple as:
 *  `Xcm(vec![DepositAsset { assets: Wild(AllCounted(assets.len())), beneficiary }])`,
 *  but could be something more exotic like sending the `assets` even further.
 *
 *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *- `dest`: Destination context for the assets. Will typically be `[Parent,
 *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
 *  relay to parachain, or `(parents: 2, (GlobalConsensus(..), ..))` to send from
 *  parachain across a bridge to another ecosystem destination.
 *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
 *  fee on the `dest` (and possibly reserve) chains.
 *- `assets_transfer_type`: The XCM `TransferType` used to transfer the `assets`.
 *- `remote_fees_id`: One of the included `assets` to be used to pay fees.
 *- `fees_transfer_type`: The XCM `TransferType` used to transfer the `fees` assets.
 *- `custom_xcm_on_dest`: The XCM to be executed on `dest` chain as the last step of the
 *  transfer, which also determines what happens to the assets on the destination chain.
 *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
"transfer_assets_using_type_and_then": Anonymize<I9bnv6lu0crf1q>}>;

export type Ia5cotcvi888ln = {"dest": XcmVersionedLocation, "message": XcmVersionedXcm};

export type XcmVersionedXcm = Enum<{"V3": Anonymize<Ianvng4e08j9ii>, "V4": Anonymize<Iegrepoo0c1jc5>, "V5": Anonymize<Ict03eedr8de9s>}>;
export const XcmVersionedXcm = _Enum as unknown as GetEnum<XcmVersionedXcm>;

export type Ianvng4e08j9ii = Array<XcmV3Instruction>;

export type XcmV3Instruction = Enum<{"WithdrawAsset": Anonymize<Iai6dhqiq3bach>, "ReserveAssetDeposited": Anonymize<Iai6dhqiq3bach>, "ReceiveTeleportedAsset": Anonymize<Iai6dhqiq3bach>, "QueryResponse": {"query_id": bigint, "response": XcmV3Response, "max_weight": Anonymize<I4q39t5hn830vp>, "querier"?: Anonymize<Ia9cgf4r40b26h>}, "TransferAsset": {"assets": Anonymize<Iai6dhqiq3bach>, "beneficiary": Anonymize<I4c0s5cioidn76>}, "TransferReserveAsset": {"assets": Anonymize<Iai6dhqiq3bach>, "dest": Anonymize<I4c0s5cioidn76>, "xcm": Anonymize<Ianvng4e08j9ii>}, "Transact": Anonymize<I92p6l5cs3fr50>, "HrmpNewChannelOpenRequest": Anonymize<I5uhhrjqfuo4e5>, "HrmpChannelAccepted": Anonymize<Ifij4jam0o7sub>, "HrmpChannelClosing": Anonymize<Ieeb4svd9i8fji>, "ClearOrigin": undefined, "DescendOrigin": XcmV3Junctions, "ReportError": Anonymize<I4r3v6e91d1qbs>, "DepositAsset": {"assets": XcmV3MultiassetMultiAssetFilter, "beneficiary": Anonymize<I4c0s5cioidn76>}, "DepositReserveAsset": {"assets": XcmV3MultiassetMultiAssetFilter, "dest": Anonymize<I4c0s5cioidn76>, "xcm": Anonymize<Ianvng4e08j9ii>}, "ExchangeAsset": {"give": XcmV3MultiassetMultiAssetFilter, "want": Anonymize<Iai6dhqiq3bach>, "maximal": boolean}, "InitiateReserveWithdraw": {"assets": XcmV3MultiassetMultiAssetFilter, "reserve": Anonymize<I4c0s5cioidn76>, "xcm": Anonymize<Ianvng4e08j9ii>}, "InitiateTeleport": {"assets": XcmV3MultiassetMultiAssetFilter, "dest": Anonymize<I4c0s5cioidn76>, "xcm": Anonymize<Ianvng4e08j9ii>}, "ReportHolding": {"response_info": Anonymize<I4r3v6e91d1qbs>, "assets": XcmV3MultiassetMultiAssetFilter}, "BuyExecution": {"fees": Anonymize<Idcm24504c8bkk>, "weight_limit": XcmV3WeightLimit}, "RefundSurplus": undefined, "SetErrorHandler": Anonymize<Ianvng4e08j9ii>, "SetAppendix": Anonymize<Ianvng4e08j9ii>, "ClearError": undefined, "ClaimAsset": {"assets": Anonymize<Iai6dhqiq3bach>, "ticket": Anonymize<I4c0s5cioidn76>}, "Trap": bigint, "SubscribeVersion": Anonymize<Ieprdqqu7ildvr>, "UnsubscribeVersion": undefined, "BurnAsset": Anonymize<Iai6dhqiq3bach>, "ExpectAsset": Anonymize<Iai6dhqiq3bach>, "ExpectOrigin"?: Anonymize<Ia9cgf4r40b26h>, "ExpectError"?: Anonymize<I7sltvf8v2nure>, "ExpectTransactStatus": XcmV3MaybeErrorCode, "QueryPallet": Anonymize<Iba5bdbapp16oo>, "ExpectPallet": Anonymize<Id7mf37dkpgfjs>, "ReportTransactStatus": Anonymize<I4r3v6e91d1qbs>, "ClearTransactStatus": undefined, "UniversalOrigin": XcmV3Junction, "ExportMessage": {"network": XcmV3JunctionNetworkId, "destination": XcmV3Junctions, "xcm": Anonymize<Ianvng4e08j9ii>}, "LockAsset": {"asset": Anonymize<Idcm24504c8bkk>, "unlocker": Anonymize<I4c0s5cioidn76>}, "UnlockAsset": {"asset": Anonymize<Idcm24504c8bkk>, "target": Anonymize<I4c0s5cioidn76>}, "NoteUnlockable": {"asset": Anonymize<Idcm24504c8bkk>, "owner": Anonymize<I4c0s5cioidn76>}, "RequestUnlock": {"asset": Anonymize<Idcm24504c8bkk>, "locker": Anonymize<I4c0s5cioidn76>}, "SetFeesMode": Anonymize<I4nae9rsql8fa7>, "SetTopic": FixedSizeBinary<32>, "ClearTopic": undefined, "AliasOrigin": Anonymize<I4c0s5cioidn76>, "UnpaidExecution": Anonymize<I40d50jeai33oq>}>;
export const XcmV3Instruction = _Enum as unknown as GetEnum<XcmV3Instruction>;

export type Ia9cgf4r40b26h = (Anonymize<I4c0s5cioidn76>) | undefined;

export type I92p6l5cs3fr50 = {"origin_kind": XcmV2OriginKind, "require_weight_at_most": Anonymize<I4q39t5hn830vp>, "call": Binary};

export type I4r3v6e91d1qbs = {"destination": Anonymize<I4c0s5cioidn76>, "query_id": bigint, "max_weight": Anonymize<I4q39t5hn830vp>};

export type XcmV3MultiassetMultiAssetFilter = Enum<{"Definite": Anonymize<Iai6dhqiq3bach>, "Wild": XcmV3MultiassetWildMultiAsset}>;
export const XcmV3MultiassetMultiAssetFilter = _Enum as unknown as GetEnum<XcmV3MultiassetMultiAssetFilter>;

export type XcmV3MultiassetWildMultiAsset = Enum<{"All": undefined, "AllOf": {"id": XcmV3MultiassetAssetId, "fun": XcmV2MultiassetWildFungibility}, "AllCounted": number, "AllOfCounted": {"id": XcmV3MultiassetAssetId, "fun": XcmV2MultiassetWildFungibility, "count": number}}>;
export const XcmV3MultiassetWildMultiAsset = _Enum as unknown as GetEnum<XcmV3MultiassetWildMultiAsset>;

export type Iba5bdbapp16oo = {"module_name": Binary, "response_info": Anonymize<I4r3v6e91d1qbs>};

export type I40d50jeai33oq = {"weight_limit": XcmV3WeightLimit, "check_origin"?: Anonymize<Ia9cgf4r40b26h>};

export type Iegrepoo0c1jc5 = Array<XcmV4Instruction>;

export type XcmV4Instruction = Enum<{"WithdrawAsset": Anonymize<I50mli3hb64f9b>, "ReserveAssetDeposited": Anonymize<I50mli3hb64f9b>, "ReceiveTeleportedAsset": Anonymize<I50mli3hb64f9b>, "QueryResponse": {"query_id": bigint, "response": XcmV4Response, "max_weight": Anonymize<I4q39t5hn830vp>, "querier"?: Anonymize<Ia9cgf4r40b26h>}, "TransferAsset": {"assets": Anonymize<I50mli3hb64f9b>, "beneficiary": Anonymize<I4c0s5cioidn76>}, "TransferReserveAsset": {"assets": Anonymize<I50mli3hb64f9b>, "dest": Anonymize<I4c0s5cioidn76>, "xcm": Anonymize<Iegrepoo0c1jc5>}, "Transact": Anonymize<I92p6l5cs3fr50>, "HrmpNewChannelOpenRequest": Anonymize<I5uhhrjqfuo4e5>, "HrmpChannelAccepted": Anonymize<Ifij4jam0o7sub>, "HrmpChannelClosing": Anonymize<Ieeb4svd9i8fji>, "ClearOrigin": undefined, "DescendOrigin": XcmV3Junctions, "ReportError": Anonymize<I4r3v6e91d1qbs>, "DepositAsset": {"assets": XcmV4AssetAssetFilter, "beneficiary": Anonymize<I4c0s5cioidn76>}, "DepositReserveAsset": {"assets": XcmV4AssetAssetFilter, "dest": Anonymize<I4c0s5cioidn76>, "xcm": Anonymize<Iegrepoo0c1jc5>}, "ExchangeAsset": {"give": XcmV4AssetAssetFilter, "want": Anonymize<I50mli3hb64f9b>, "maximal": boolean}, "InitiateReserveWithdraw": {"assets": XcmV4AssetAssetFilter, "reserve": Anonymize<I4c0s5cioidn76>, "xcm": Anonymize<Iegrepoo0c1jc5>}, "InitiateTeleport": {"assets": XcmV4AssetAssetFilter, "dest": Anonymize<I4c0s5cioidn76>, "xcm": Anonymize<Iegrepoo0c1jc5>}, "ReportHolding": {"response_info": Anonymize<I4r3v6e91d1qbs>, "assets": XcmV4AssetAssetFilter}, "BuyExecution": {"fees": Anonymize<Ia5l7mu5a6v49o>, "weight_limit": XcmV3WeightLimit}, "RefundSurplus": undefined, "SetErrorHandler": Anonymize<Iegrepoo0c1jc5>, "SetAppendix": Anonymize<Iegrepoo0c1jc5>, "ClearError": undefined, "ClaimAsset": {"assets": Anonymize<I50mli3hb64f9b>, "ticket": Anonymize<I4c0s5cioidn76>}, "Trap": bigint, "SubscribeVersion": Anonymize<Ieprdqqu7ildvr>, "UnsubscribeVersion": undefined, "BurnAsset": Anonymize<I50mli3hb64f9b>, "ExpectAsset": Anonymize<I50mli3hb64f9b>, "ExpectOrigin"?: Anonymize<Ia9cgf4r40b26h>, "ExpectError"?: Anonymize<I7sltvf8v2nure>, "ExpectTransactStatus": XcmV3MaybeErrorCode, "QueryPallet": Anonymize<Iba5bdbapp16oo>, "ExpectPallet": Anonymize<Id7mf37dkpgfjs>, "ReportTransactStatus": Anonymize<I4r3v6e91d1qbs>, "ClearTransactStatus": undefined, "UniversalOrigin": XcmV3Junction, "ExportMessage": {"network": XcmV3JunctionNetworkId, "destination": XcmV3Junctions, "xcm": Anonymize<Iegrepoo0c1jc5>}, "LockAsset": {"asset": Anonymize<Ia5l7mu5a6v49o>, "unlocker": Anonymize<I4c0s5cioidn76>}, "UnlockAsset": {"asset": Anonymize<Ia5l7mu5a6v49o>, "target": Anonymize<I4c0s5cioidn76>}, "NoteUnlockable": {"asset": Anonymize<Ia5l7mu5a6v49o>, "owner": Anonymize<I4c0s5cioidn76>}, "RequestUnlock": {"asset": Anonymize<Ia5l7mu5a6v49o>, "locker": Anonymize<I4c0s5cioidn76>}, "SetFeesMode": Anonymize<I4nae9rsql8fa7>, "SetTopic": FixedSizeBinary<32>, "ClearTopic": undefined, "AliasOrigin": Anonymize<I4c0s5cioidn76>, "UnpaidExecution": Anonymize<I40d50jeai33oq>}>;
export const XcmV4Instruction = _Enum as unknown as GetEnum<XcmV4Instruction>;

export type XcmV4AssetAssetFilter = Enum<{"Definite": Anonymize<I50mli3hb64f9b>, "Wild": XcmV4AssetWildAsset}>;
export const XcmV4AssetAssetFilter = _Enum as unknown as GetEnum<XcmV4AssetAssetFilter>;

export type XcmV4AssetWildAsset = Enum<{"All": undefined, "AllOf": {"id": Anonymize<I4c0s5cioidn76>, "fun": XcmV2MultiassetWildFungibility}, "AllCounted": number, "AllOfCounted": {"id": Anonymize<I4c0s5cioidn76>, "fun": XcmV2MultiassetWildFungibility, "count": number}}>;
export const XcmV4AssetWildAsset = _Enum as unknown as GetEnum<XcmV4AssetWildAsset>;

export type I21jsa919m88fd = {"dest": XcmVersionedLocation, "beneficiary": XcmVersionedLocation, "assets": XcmVersionedAssets, "fee_asset_item": number};

export type Iegif7m3upfe1k = {"message": XcmVersionedXcm, "max_weight": Anonymize<I4q39t5hn830vp>};

export type Ic76kfh5ebqkpl = {"maybe_xcm_version"?: Anonymize<I4arjljr6dpflb>};

export type Icscpmubum33bq = {"location": XcmVersionedLocation};

export type I21d2olof7eb60 = {"dest": XcmVersionedLocation, "beneficiary": XcmVersionedLocation, "assets": XcmVersionedAssets, "fee_asset_item": number, "weight_limit": XcmV3WeightLimit};

export type Ibgm4rnf22lal1 = {"suspended": boolean};

export type Ie68np0vpihith = {"assets": XcmVersionedAssets, "beneficiary": XcmVersionedLocation};

export type I9bnv6lu0crf1q = {"dest": XcmVersionedLocation, "assets": XcmVersionedAssets, "assets_transfer_type": Enum<{"Teleport": undefined, "LocalReserve": undefined, "DestinationReserve": undefined, "RemoteReserve": XcmVersionedLocation}>, "remote_fees_id": XcmVersionedAssetId, "fees_transfer_type": Enum<{"Teleport": undefined, "LocalReserve": undefined, "DestinationReserve": undefined, "RemoteReserve": XcmVersionedLocation}>, "custom_xcm_on_dest": XcmVersionedXcm, "weight_limit": XcmV3WeightLimit};

export type I6epb28bkd5aqn = AnonymousEnum<{
/**
 *Notification about congested bridge queue.
 */
"report_bridge_status": Anonymize<Idlampfle3vh6q>}>;

export type Idlampfle3vh6q = {"bridge_id": FixedSizeBinary<32>, "is_congested": boolean};

export type Ic2uoe7jdksosp = AnonymousEnum<{
/**
 *Remove a page which has no more messages remaining to be processed or is stale.
 */
"reap_page": Anonymize<I40pqum1mu8qg3>, 
/**
 *Execute an overweight message.
 *
 *Temporary processing errors will be propagated whereas permanent errors are treated
 *as success condition.
 *
 *- `origin`: Must be `Signed`.
 *- `message_origin`: The origin from which the message to be executed arrived.
 *- `page`: The page in the queue in which the message to be executed is sitting.
 *- `index`: The index into the queue of the message to be executed.
 *- `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
 *  of the message.
 *
 *Benchmark complexity considerations: O(index + weight_limit).
 */
"execute_overweight": Anonymize<I1r4c2ghbtvjuc>}>;

export type I40pqum1mu8qg3 = {"message_origin": Anonymize<Iejeo53sea6n4q>, "page_index": number};

export type I1r4c2ghbtvjuc = {"message_origin": Anonymize<Iejeo53sea6n4q>, "page": number, "index": number, "weight_limit": Anonymize<I4q39t5hn830vp>};

export type I474v425r9om8h = AnonymousEnum<{
/**
 *Send a batch of dispatch calls.
 *
 *May be called from any origin except `None`.
 *
 *- `calls`: The calls to be dispatched from the same origin. The number of call must not
 *  exceed the constant: `batched_calls_limit` (available in constant metadata).
 *
 *If origin is root then the calls are dispatched without checking origin filter. (This
 *includes bypassing `frame_system::Config::BaseCallFilter`).
 *
 *## Complexity
 *- O(C) where C is the number of calls to be batched.
 *
 *This will return `Ok` in all circumstances. To determine the success of the batch, an
 *event is deposited. If a call failed and the batch was interrupted, then the
 *`BatchInterrupted` event is deposited, along with the number of successful calls made
 *and the error of the failed call. If all were successful, then the `BatchCompleted`
 *event is deposited.
 */
"batch": Anonymize<I60ncu9g93al05>, 
/**
 *Send a call through an indexed pseudonym of the sender.
 *
 *Filter from origin are passed along. The call will be dispatched with an origin which
 *use the same filter as the origin of this call.
 *
 *NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 *because you expect `proxy` to have been used prior in the call stack and you do not want
 *the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 *in the Multisig pallet instead.
 *
 *NOTE: Prior to version *12, this was called `as_limited_sub`.
 *
 *The dispatch origin for this call must be _Signed_.
 */
"as_derivative": Anonymize<Ia7p150365ofbr>, 
/**
 *Send a batch of dispatch calls and atomically execute them.
 *The whole transaction will rollback and fail if any of the calls failed.
 *
 *May be called from any origin except `None`.
 *
 *- `calls`: The calls to be dispatched from the same origin. The number of call must not
 *  exceed the constant: `batched_calls_limit` (available in constant metadata).
 *
 *If origin is root then the calls are dispatched without checking origin filter. (This
 *includes bypassing `frame_system::Config::BaseCallFilter`).
 *
 *## Complexity
 *- O(C) where C is the number of calls to be batched.
 */
"batch_all": Anonymize<I60ncu9g93al05>, 
/**
 *Dispatches a function call with a provided origin.
 *
 *The dispatch origin for this call must be _Root_.
 *
 *## Complexity
 *- O(1).
 */
"dispatch_as": Anonymize<Ibvn6rkd300koi>, 
/**
 *Send a batch of dispatch calls.
 *Unlike `batch`, it allows errors and won't interrupt.
 *
 *May be called from any origin except `None`.
 *
 *- `calls`: The calls to be dispatched from the same origin. The number of call must not
 *  exceed the constant: `batched_calls_limit` (available in constant metadata).
 *
 *If origin is root then the calls are dispatch without checking origin filter. (This
 *includes bypassing `frame_system::Config::BaseCallFilter`).
 *
 *## Complexity
 *- O(C) where C is the number of calls to be batched.
 */
"force_batch": Anonymize<I60ncu9g93al05>, 
/**
 *Dispatch a function call with a specified weight.
 *
 *This function does not check the weight of the call, and instead allows the
 *Root origin to specify the weight of the call.
 *
 *The dispatch origin for this call must be _Root_.
 */
"with_weight": Anonymize<If2jeh31c7dc1j>, 
/**
 *Dispatch a fallback call in the event the main call fails to execute.
 *May be called from any origin except `None`.
 *
 *This function first attempts to dispatch the `main` call.
 *If the `main` call fails, the `fallback` is attemted.
 *if the fallback is successfully dispatched, the weights of both calls
 *are accumulated and an event containing the main call error is deposited.
 *
 *In the event of a fallback failure the whole call fails
 *with the weights returned.
 *
 *- `main`: The main call to be dispatched. This is the primary action to execute.
 *- `fallback`: The fallback call to be dispatched in case the `main` call fails.
 *
 *## Dispatch Logic
 *- If the origin is `root`, both the main and fallback calls are executed without
 *  applying any origin filters.
 *- If the origin is not `root`, the origin filter is applied to both the `main` and
 *  `fallback` calls.
 *
 *## Use Case
 *- Some use cases might involve submitting a `batch` type call in either main, fallback
 *  or both.
 */
"if_else": Anonymize<I19cgag7shh6cc>, 
/**
 *Dispatches a function call with a provided origin.
 *
 *Almost the same as [`Pallet::dispatch_as`] but forwards any error of the inner call.
 *
 *The dispatch origin for this call must be _Root_.
 */
"dispatch_as_fallible": Anonymize<Ibvn6rkd300koi>}>;

export type I60ncu9g93al05 = {"calls": Array<TxCallData>};

export type Ia7p150365ofbr = {"index": number, "call": TxCallData};

export type Ibvn6rkd300koi = {"as_origin": Anonymize<I42ficri7uep20>, "call": TxCallData};

export type I42ficri7uep20 = AnonymousEnum<{"system": DispatchRawOrigin, "PolkadotXcm": Enum<{"Xcm": Anonymize<If9iqq7i64mur8>, "Response": Anonymize<If9iqq7i64mur8>}>, "CumulusXcm": Enum<{"Relay": undefined, "SiblingParachain": number}>}>;

export type DispatchRawOrigin = Enum<{"Root": undefined, "Signed": SS58String, "None": undefined}>;
export const DispatchRawOrigin = _Enum as unknown as GetEnum<DispatchRawOrigin>;

export type If2jeh31c7dc1j = {"call": TxCallData, "weight": Anonymize<I4q39t5hn830vp>};

export type I19cgag7shh6cc = {"main": TxCallData, "fallback": TxCallData};

export type Iai5gqeafj5h3c = AnonymousEnum<{
/**
 *Immediately dispatch a multi-signature call using a single approval from the caller.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *- `other_signatories`: The accounts (other than the sender) who are part of the
 *multi-signature, but do not participate in the approval process.
 *- `call`: The call to be executed.
 *
 *Result is equivalent to the dispatched result.
 *
 *## Complexity
 *O(Z + C) where Z is the length of the call and C its execution weight.
 */
"as_multi_threshold_1": Anonymize<Ics0jauch94u7>, 
/**
 *Register approval for a dispatch to be made from a deterministic composite account if
 *approved by a total of `threshold - 1` of `other_signatories`.
 *
 *If there are enough, then dispatch the call.
 *
 *Payment: `DepositBase` will be reserved if this is the first approval, plus
 *`threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *is cancelled.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *- `threshold`: The total number of approvals for this dispatch before it is executed.
 *- `other_signatories`: The accounts (other than the sender) who can approve this
 *dispatch. May not be empty.
 *- `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *not the first approval, then it must be `Some`, with the timepoint (block number and
 *transaction index) of the first approval transaction.
 *- `call`: The call to be executed.
 *
 *NOTE: Unless this is the final approval, you will generally want to use
 *`approve_as_multi` instead, since it only requires a hash of the call.
 *
 *Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 *on success, result is `Ok` and the result from the interior call, if it was executed,
 *may be found in the deposited `MultisigExecuted` event.
 *
 *## Complexity
 *- `O(S + Z + Call)`.
 *- Up to one balance-reserve or unreserve operation.
 *- One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *  signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *- One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 *- One encode & hash, both of complexity `O(S)`.
 *- Up to one binary search and insert (`O(logS + S)`).
 *- I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *- One event.
 *- The weight of the `call`.
 *- Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *  taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 */
"as_multi": Anonymize<I1j0smop13mrrk>, 
/**
 *Register approval for a dispatch to be made from a deterministic composite account if
 *approved by a total of `threshold - 1` of `other_signatories`.
 *
 *Payment: `DepositBase` will be reserved if this is the first approval, plus
 *`threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *is cancelled.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *- `threshold`: The total number of approvals for this dispatch before it is executed.
 *- `other_signatories`: The accounts (other than the sender) who can approve this
 *dispatch. May not be empty.
 *- `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *not the first approval, then it must be `Some`, with the timepoint (block number and
 *transaction index) of the first approval transaction.
 *- `call_hash`: The hash of the call to be executed.
 *
 *NOTE: If this is the final approval, you will want to use `as_multi` instead.
 *
 *## Complexity
 *- `O(S)`.
 *- Up to one balance-reserve or unreserve operation.
 *- One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *  signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *- One encode & hash, both of complexity `O(S)`.
 *- Up to one binary search and insert (`O(logS + S)`).
 *- I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *- One event.
 *- Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *  taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 */
"approve_as_multi": Anonymize<Ideaemvoneh309>, 
/**
 *Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 *for this operation will be unreserved on success.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *- `threshold`: The total number of approvals for this dispatch before it is executed.
 *- `other_signatories`: The accounts (other than the sender) who can approve this
 *dispatch. May not be empty.
 *- `timepoint`: The timepoint (block number and transaction index) of the first approval
 *transaction for this dispatch.
 *- `call_hash`: The hash of the call to be executed.
 *
 *## Complexity
 *- `O(S)`.
 *- Up to one balance-reserve or unreserve operation.
 *- One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *  signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *- One encode & hash, both of complexity `O(S)`.
 *- One event.
 *- I/O: 1 read `O(S)`, one remove.
 *- Storage: removes one item.
 */
"cancel_as_multi": Anonymize<I3d9o9d7epp66v>}>;

export type Ics0jauch94u7 = {"other_signatories": Anonymize<Ia2lhg7l2hilo3>, "call": TxCallData};

export type I1j0smop13mrrk = {"threshold": number, "other_signatories": Anonymize<Ia2lhg7l2hilo3>, "maybe_timepoint"?: Anonymize<I95jfd8j5cr5eh>, "call": TxCallData, "max_weight": Anonymize<I4q39t5hn830vp>};

export type I95jfd8j5cr5eh = (Anonymize<Itvprrpb0nm3o>) | undefined;

export type Ideaemvoneh309 = {"threshold": number, "other_signatories": Anonymize<Ia2lhg7l2hilo3>, "maybe_timepoint"?: Anonymize<I95jfd8j5cr5eh>, "call_hash": FixedSizeBinary<32>, "max_weight": Anonymize<I4q39t5hn830vp>};

export type I3d9o9d7epp66v = {"threshold": number, "other_signatories": Anonymize<Ia2lhg7l2hilo3>, "timepoint": Anonymize<Itvprrpb0nm3o>, "call_hash": FixedSizeBinary<32>};

export type I7gt29leqc522 = AnonymousEnum<{
/**
 *Dispatch the given `call` from an account that the sender is authorised for through
 *`add_proxy`.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Parameters:
 *- `real`: The account that the proxy will make a call on behalf of.
 *- `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 *- `call`: The call to be made by the `real` account.
 */
"proxy": Anonymize<I5o9cg0mkhl27l>, 
/**
 *Register a proxy account for the sender that is able to make calls on its behalf.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Parameters:
 *- `proxy`: The account that the `caller` would like to make a proxy.
 *- `proxy_type`: The permissions allowed for this proxy account.
 *- `delay`: The announcement period required of the initial proxy. Will generally be
 *zero.
 */
"add_proxy": Anonymize<Iovrcu9bfelfq>, 
/**
 *Unregister a proxy account for the sender.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Parameters:
 *- `proxy`: The account that the `caller` would like to remove as a proxy.
 *- `proxy_type`: The permissions currently enabled for the removed proxy account.
 */
"remove_proxy": Anonymize<Iovrcu9bfelfq>, 
/**
 *Unregister all proxy accounts for the sender.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *WARNING: This may be called on accounts created by `pure`, however if done, then
 *the unreserved fees will be inaccessible. **All access to this account will be lost.**
 */
"remove_proxies": undefined, 
/**
 *Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 *initialize it with a proxy of `proxy_type` for `origin` sender.
 *
 *Requires a `Signed` origin.
 *
 *- `proxy_type`: The type of the proxy that the sender will be registered as over the
 *new account. This will almost always be the most permissive `ProxyType` possible to
 *allow for maximum flexibility.
 *- `index`: A disambiguation index, in case this is called multiple times in the same
 *transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
 *want to use `0`.
 *- `delay`: The announcement period required of the initial proxy. Will generally be
 *zero.
 *
 *Fails with `Duplicate` if this has already been called in this transaction, from the
 *same sender, with the same parameters.
 *
 *Fails if there are insufficient funds to pay for deposit.
 */
"create_pure": Anonymize<Iefr8jgtgfk8um>, 
/**
 *Removes a previously spawned pure proxy.
 *
 *WARNING: **All access to this account will be lost.** Any funds held in it will be
 *inaccessible.
 *
 *Requires a `Signed` origin, and the sender account must have been created by a call to
 *`pure` with corresponding parameters.
 *
 *- `spawner`: The account that originally called `pure` to create this account.
 *- `index`: The disambiguation index originally passed to `pure`. Probably `0`.
 *- `proxy_type`: The proxy type originally passed to `pure`.
 *- `height`: The height of the chain when the call to `pure` was processed.
 *- `ext_index`: The extrinsic index in which the call to `pure` was processed.
 *
 *Fails with `NoPermission` in case the caller is not a previously created pure
 *account whose `pure` call has corresponding parameters.
 */
"kill_pure": Anonymize<I3j05hul54uj7q>, 
/**
 *Publish the hash of a proxy-call that will be made in the future.
 *
 *This must be called some number of blocks before the corresponding `proxy` is attempted
 *if the delay associated with the proxy relationship is greater than zero.
 *
 *No more than `MaxPending` announcements may be made at any one time.
 *
 *This will take a deposit of `AnnouncementDepositFactor` as well as
 *`AnnouncementDepositBase` if there are no other pending announcements.
 *
 *The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 *
 *Parameters:
 *- `real`: The account that the proxy will make a call on behalf of.
 *- `call_hash`: The hash of the call to be made by the `real` account.
 */
"announce": Anonymize<I2eb501t8s6hsq>, 
/**
 *Remove a given announcement.
 *
 *May be called by a proxy account to remove a call they previously announced and return
 *the deposit.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Parameters:
 *- `real`: The account that the proxy will make a call on behalf of.
 *- `call_hash`: The hash of the call to be made by the `real` account.
 */
"remove_announcement": Anonymize<I2eb501t8s6hsq>, 
/**
 *Remove the given announcement of a delegate.
 *
 *May be called by a target (proxied) account to remove a call that one of their delegates
 *(`delegate`) has announced they want to execute. The deposit is returned.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Parameters:
 *- `delegate`: The account that previously announced the call.
 *- `call_hash`: The hash of the call to be made.
 */
"reject_announcement": Anonymize<Ianmuoljk2sk1u>, 
/**
 *Dispatch the given `call` from an account that the sender is authorized for through
 *`add_proxy`.
 *
 *Removes any corresponding announcement(s).
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Parameters:
 *- `real`: The account that the proxy will make a call on behalf of.
 *- `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 *- `call`: The call to be made by the `real` account.
 */
"proxy_announced": Anonymize<Ia3ue19p5eglt5>}>;

export type I5o9cg0mkhl27l = {"real": MultiAddress, "force_proxy_type"?: Anonymize<I7rk1n3vg3et43>, "call": TxCallData};

export type I7rk1n3vg3et43 = (Anonymize<I5ftepkjop3g1u>) | undefined;

export type Iovrcu9bfelfq = {"delegate": MultiAddress, "proxy_type": Anonymize<I5ftepkjop3g1u>, "delay": number};

export type Iefr8jgtgfk8um = {"proxy_type": Anonymize<I5ftepkjop3g1u>, "delay": number, "index": number};

export type I3j05hul54uj7q = {"spawner": MultiAddress, "proxy_type": Anonymize<I5ftepkjop3g1u>, "index": number, "height": number, "ext_index": number};

export type I2eb501t8s6hsq = {"real": MultiAddress, "call_hash": FixedSizeBinary<32>};

export type Ianmuoljk2sk1u = {"delegate": MultiAddress, "call_hash": FixedSizeBinary<32>};

export type Ia3ue19p5eglt5 = {"delegate": MultiAddress, "real": MultiAddress, "force_proxy_type"?: Anonymize<I7rk1n3vg3et43>, "call": TxCallData};

export type I84851acvod2ic = AnonymousEnum<{
/**
 *Issue a new class of fungible assets from a public origin.
 *
 *This new asset class has no assets initially and its owner is the origin.
 *
 *The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
 *
 *Funds of sender are reserved by `AssetDeposit`.
 *
 *Parameters:
 *- `id`: The identifier of the new asset. This must not be currently in use to identify
 *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
 *- `admin`: The admin of this class of assets. The admin is the initial address of each
 *member of the asset class's admin team.
 *- `min_balance`: The minimum balance of this new asset that any single account must
 *have. If an account's balance is reduced below this, then it collapses to zero.
 *
 *Emits `Created` event when successful.
 *
 *Weight: `O(1)`
 */
"create": Anonymize<Ic357tcepuvo5c>, 
/**
 *Issue a new class of fungible assets from a privileged origin.
 *
 *This new asset class has no assets initially.
 *
 *The origin must conform to `ForceOrigin`.
 *
 *Unlike `create`, no funds are reserved.
 *
 *- `id`: The identifier of the new asset. This must not be currently in use to identify
 *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
 *- `owner`: The owner of this class of assets. The owner has full superuser permissions
 *over this asset, but may later change and configure the permissions using
 *`transfer_ownership` and `set_team`.
 *- `min_balance`: The minimum balance of this new asset that any single account must
 *have. If an account's balance is reduced below this, then it collapses to zero.
 *
 *Emits `ForceCreated` event when successful.
 *
 *Weight: `O(1)`
 */
"force_create": Anonymize<I2rnoam876ruhj>, 
/**
 *Start the process of destroying a fungible asset class.
 *
 *`start_destroy` is the first in a series of extrinsics that should be called, to allow
 *destruction of an asset class.
 *
 *The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
 *
 *- `id`: The identifier of the asset to be destroyed. This must identify an existing
 *  asset.
 */
"start_destroy": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Destroy all accounts associated with a given asset.
 *
 *`destroy_accounts` should only be called after `start_destroy` has been called, and the
 *asset is in a `Destroying` state.
 *
 *Due to weight restrictions, this function may need to be called multiple times to fully
 *destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
 *
 *- `id`: The identifier of the asset to be destroyed. This must identify an existing
 *  asset.
 *
 *Each call emits the `Event::DestroyedAccounts` event.
 */
"destroy_accounts": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
 *
 *`destroy_approvals` should only be called after `start_destroy` has been called, and the
 *asset is in a `Destroying` state.
 *
 *Due to weight restrictions, this function may need to be called multiple times to fully
 *destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
 *
 *- `id`: The identifier of the asset to be destroyed. This must identify an existing
 *  asset.
 *
 *Each call emits the `Event::DestroyedApprovals` event.
 */
"destroy_approvals": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Complete destroying asset and unreserve currency.
 *
 *`finish_destroy` should only be called after `start_destroy` has been called, and the
 *asset is in a `Destroying` state. All accounts or approvals should be destroyed before
 *hand.
 *
 *- `id`: The identifier of the asset to be destroyed. This must identify an existing
 *  asset.
 *
 *Each successful call emits the `Event::Destroyed` event.
 */
"finish_destroy": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Mint assets of a particular class.
 *
 *The origin must be Signed and the sender must be the Issuer of the asset `id`.
 *
 *- `id`: The identifier of the asset to have some amount minted.
 *- `beneficiary`: The account to be credited with the minted assets.
 *- `amount`: The amount of the asset to be minted.
 *
 *Emits `Issued` event when successful.
 *
 *Weight: `O(1)`
 *Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
 */
"mint": Anonymize<Ib3qnc19gu633c>, 
/**
 *Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
 *
 *Origin must be Signed and the sender should be the Manager of the asset `id`.
 *
 *Bails with `NoAccount` if the `who` is already dead.
 *
 *- `id`: The identifier of the asset to have some amount burned.
 *- `who`: The account to be debited from.
 *- `amount`: The maximum amount by which `who`'s balance should be reduced.
 *
 *Emits `Burned` with the actual amount burned. If this takes the balance to below the
 *minimum for the asset, then the amount burned is increased to take it to zero.
 *
 *Weight: `O(1)`
 *Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
 */
"burn": Anonymize<Ifira6u9hi7cu1>, 
/**
 *Move some assets from the sender account to another.
 *
 *Origin must be Signed.
 *
 *- `id`: The identifier of the asset to have some amount transferred.
 *- `target`: The account to be credited.
 *- `amount`: The amount by which the sender's balance of assets should be reduced and
 *`target`'s balance increased. The amount actually transferred may be slightly greater in
 *the case that the transfer would otherwise take the sender balance above zero but below
 *the minimum balance. Must be greater than zero.
 *
 *Emits `Transferred` with the actual amount transferred. If this takes the source balance
 *to below the minimum for the asset, then the amount transferred is increased to take it
 *to zero.
 *
 *Weight: `O(1)`
 *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 *`target`.
 */
"transfer": Anonymize<I72tqocvdoqfff>, 
/**
 *Move some assets from the sender account to another, keeping the sender account alive.
 *
 *Origin must be Signed.
 *
 *- `id`: The identifier of the asset to have some amount transferred.
 *- `target`: The account to be credited.
 *- `amount`: The amount by which the sender's balance of assets should be reduced and
 *`target`'s balance increased. The amount actually transferred may be slightly greater in
 *the case that the transfer would otherwise take the sender balance above zero but below
 *the minimum balance. Must be greater than zero.
 *
 *Emits `Transferred` with the actual amount transferred. If this takes the source balance
 *to below the minimum for the asset, then the amount transferred is increased to take it
 *to zero.
 *
 *Weight: `O(1)`
 *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 *`target`.
 */
"transfer_keep_alive": Anonymize<I72tqocvdoqfff>, 
/**
 *Move some assets from one account to another.
 *
 *Origin must be Signed and the sender should be the Admin of the asset `id`.
 *
 *- `id`: The identifier of the asset to have some amount transferred.
 *- `source`: The account to be debited.
 *- `dest`: The account to be credited.
 *- `amount`: The amount by which the `source`'s balance of assets should be reduced and
 *`dest`'s balance increased. The amount actually transferred may be slightly greater in
 *the case that the transfer would otherwise take the `source` balance above zero but
 *below the minimum balance. Must be greater than zero.
 *
 *Emits `Transferred` with the actual amount transferred. If this takes the source balance
 *to below the minimum for the asset, then the amount transferred is increased to take it
 *to zero.
 *
 *Weight: `O(1)`
 *Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
 *`dest`.
 */
"force_transfer": Anonymize<I2i27f3sfmvc05>, 
/**
 *Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
 *must already exist as an entry in `Account`s of the asset. If you want to freeze an
 *account that does not have an entry, use `touch_other` first.
 *
 *Origin must be Signed and the sender should be the Freezer of the asset `id`.
 *
 *- `id`: The identifier of the asset to be frozen.
 *- `who`: The account to be frozen.
 *
 *Emits `Frozen`.
 *
 *Weight: `O(1)`
 */
"freeze": Anonymize<I1nlrtd1epki2d>, 
/**
 *Allow unprivileged transfers to and from an account again.
 *
 *Origin must be Signed and the sender should be the Admin of the asset `id`.
 *
 *- `id`: The identifier of the asset to be frozen.
 *- `who`: The account to be unfrozen.
 *
 *Emits `Thawed`.
 *
 *Weight: `O(1)`
 */
"thaw": Anonymize<I1nlrtd1epki2d>, 
/**
 *Disallow further unprivileged transfers for the asset class.
 *
 *Origin must be Signed and the sender should be the Freezer of the asset `id`.
 *
 *- `id`: The identifier of the asset to be frozen.
 *
 *Emits `Frozen`.
 *
 *Weight: `O(1)`
 */
"freeze_asset": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Allow unprivileged transfers for the asset again.
 *
 *Origin must be Signed and the sender should be the Admin of the asset `id`.
 *
 *- `id`: The identifier of the asset to be thawed.
 *
 *Emits `Thawed`.
 *
 *Weight: `O(1)`
 */
"thaw_asset": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Change the Owner of an asset.
 *
 *Origin must be Signed and the sender should be the Owner of the asset `id`.
 *
 *- `id`: The identifier of the asset.
 *- `owner`: The new Owner of this asset.
 *
 *Emits `OwnerChanged`.
 *
 *Weight: `O(1)`
 */
"transfer_ownership": Anonymize<I3abtumcmempjs>, 
/**
 *Change the Issuer, Admin and Freezer of an asset.
 *
 *Origin must be Signed and the sender should be the Owner of the asset `id`.
 *
 *- `id`: The identifier of the asset to be frozen.
 *- `issuer`: The new Issuer of this asset.
 *- `admin`: The new Admin of this asset.
 *- `freezer`: The new Freezer of this asset.
 *
 *Emits `TeamChanged`.
 *
 *Weight: `O(1)`
 */
"set_team": Anonymize<Id81m8flopt8ha>, 
/**
 *Set the metadata for an asset.
 *
 *Origin must be Signed and the sender should be the Owner of the asset `id`.
 *
 *Funds of sender are reserved according to the formula:
 *`MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
 *account any already reserved funds.
 *
 *- `id`: The identifier of the asset to update.
 *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 *- `decimals`: The number of decimals this asset uses to represent one unit.
 *
 *Emits `MetadataSet`.
 *
 *Weight: `O(1)`
 */
"set_metadata": Anonymize<I8hff7chabggkd>, 
/**
 *Clear the metadata for an asset.
 *
 *Origin must be Signed and the sender should be the Owner of the asset `id`.
 *
 *Any deposit is freed for the asset owner.
 *
 *- `id`: The identifier of the asset to clear.
 *
 *Emits `MetadataCleared`.
 *
 *Weight: `O(1)`
 */
"clear_metadata": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Force the metadata for an asset to some value.
 *
 *Origin must be ForceOrigin.
 *
 *Any deposit is left alone.
 *
 *- `id`: The identifier of the asset to update.
 *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 *- `decimals`: The number of decimals this asset uses to represent one unit.
 *
 *Emits `MetadataSet`.
 *
 *Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
 */
"force_set_metadata": Anonymize<I49i39mtj1ivbs>, 
/**
 *Clear the metadata for an asset.
 *
 *Origin must be ForceOrigin.
 *
 *Any deposit is returned.
 *
 *- `id`: The identifier of the asset to clear.
 *
 *Emits `MetadataCleared`.
 *
 *Weight: `O(1)`
 */
"force_clear_metadata": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Alter the attributes of a given asset.
 *
 *Origin must be `ForceOrigin`.
 *
 *- `id`: The identifier of the asset.
 *- `owner`: The new Owner of this asset.
 *- `issuer`: The new Issuer of this asset.
 *- `admin`: The new Admin of this asset.
 *- `freezer`: The new Freezer of this asset.
 *- `min_balance`: The minimum balance of this new asset that any single account must
 *have. If an account's balance is reduced below this, then it collapses to zero.
 *- `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
 *value to account for the state bloat associated with its balance storage. If set to
 *`true`, then non-zero balances may be stored without a `consumer` reference (and thus
 *an ED in the Balances pallet or whatever else is used to control user-account state
 *growth).
 *- `is_frozen`: Whether this asset class is frozen except for permissioned/admin
 *instructions.
 *
 *Emits `AssetStatusChanged` with the identity of the asset.
 *
 *Weight: `O(1)`
 */
"force_asset_status": Anonymize<Ifkr2kcak2vto1>, 
/**
 *Approve an amount of asset for transfer by a delegated third-party account.
 *
 *Origin must be Signed.
 *
 *Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
 *for the purpose of holding the approval. If some non-zero amount of assets is already
 *approved from signing account to `delegate`, then it is topped up or unreserved to
 *meet the right value.
 *
 *NOTE: The signing account does not need to own `amount` of assets at the point of
 *making this call.
 *
 *- `id`: The identifier of the asset.
 *- `delegate`: The account to delegate permission to transfer asset.
 *- `amount`: The amount of asset that may be transferred by `delegate`. If there is
 *already an approval in place, then this acts additively.
 *
 *Emits `ApprovedTransfer` on success.
 *
 *Weight: `O(1)`
 */
"approve_transfer": Anonymize<I1ju6r8q0cs9jt>, 
/**
 *Cancel all of some asset approved for delegated transfer by a third-party account.
 *
 *Origin must be Signed and there must be an approval in place between signer and
 *`delegate`.
 *
 *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 *
 *- `id`: The identifier of the asset.
 *- `delegate`: The account delegated permission to transfer asset.
 *
 *Emits `ApprovalCancelled` on success.
 *
 *Weight: `O(1)`
 */
"cancel_approval": Anonymize<I4kpeq6j7cd5bu>, 
/**
 *Cancel all of some asset approved for delegated transfer by a third-party account.
 *
 *Origin must be either ForceOrigin or Signed origin with the signer being the Admin
 *account of the asset `id`.
 *
 *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 *
 *- `id`: The identifier of the asset.
 *- `delegate`: The account delegated permission to transfer asset.
 *
 *Emits `ApprovalCancelled` on success.
 *
 *Weight: `O(1)`
 */
"force_cancel_approval": Anonymize<I5na1ka76k6811>, 
/**
 *Transfer some asset balance from a previously delegated account to some third-party
 *account.
 *
 *Origin must be Signed and there must be an approval in place by the `owner` to the
 *signer.
 *
 *If the entire amount approved for transfer is transferred, then any deposit previously
 *reserved by `approve_transfer` is unreserved.
 *
 *- `id`: The identifier of the asset.
 *- `owner`: The account which previously approved for a transfer of at least `amount` and
 *from which the asset balance will be withdrawn.
 *- `destination`: The account to which the asset balance of `amount` will be transferred.
 *- `amount`: The amount of assets to transfer.
 *
 *Emits `TransferredApproved` on success.
 *
 *Weight: `O(1)`
 */
"transfer_approved": Anonymize<I59mhdb9omdqfa>, 
/**
 *Create an asset account for non-provider assets.
 *
 *A deposit will be taken from the signer account.
 *
 *- `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
 *  to be taken.
 *- `id`: The identifier of the asset for the account to be created.
 *
 *Emits `Touched` event when successful.
 */
"touch": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Return the deposit (if any) of an asset account or a consumer reference (if any) of an
 *account.
 *
 *The origin must be Signed.
 *
 *- `id`: The identifier of the asset for which the caller would like the deposit
 *  refunded.
 *- `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
 *
 *Emits `Refunded` event when successful.
 */
"refund": Anonymize<I9vl5kpk0fpakt>, 
/**
 *Sets the minimum balance of an asset.
 *
 *Only works if there aren't any accounts that are holding the asset or if
 *the new value of `min_balance` is less than the old one.
 *
 *Origin must be Signed and the sender has to be the Owner of the
 *asset `id`.
 *
 *- `id`: The identifier of the asset.
 *- `min_balance`: The new value of `min_balance`.
 *
 *Emits `AssetMinBalanceChanged` event when successful.
 */
"set_min_balance": Anonymize<I717jt61hu19b4>, 
/**
 *Create an asset account for `who`.
 *
 *A deposit will be taken from the signer account.
 *
 *- `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
 *  must have sufficient funds for a deposit to be taken.
 *- `id`: The identifier of the asset for the account to be created.
 *- `who`: The account to be created.
 *
 *Emits `Touched` event when successful.
 */
"touch_other": Anonymize<I1nlrtd1epki2d>, 
/**
 *Return the deposit (if any) of a target asset account. Useful if you are the depositor.
 *
 *The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
 *order to burn a non-zero balance of the asset, the caller must be the account and should
 *use `refund`.
 *
 *- `id`: The identifier of the asset for the account holding a deposit.
 *- `who`: The account to refund.
 *
 *Emits `Refunded` event when successful.
 */
"refund_other": Anonymize<I1nlrtd1epki2d>, 
/**
 *Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
 *
 *Origin must be Signed and the sender should be the Freezer of the asset `id`.
 *
 *- `id`: The identifier of the account's asset.
 *- `who`: The account to be unblocked.
 *
 *Emits `Blocked`.
 *
 *Weight: `O(1)`
 */
"block": Anonymize<I1nlrtd1epki2d>, 
/**
 *Transfer the entire transferable balance from the caller asset account.
 *
 *NOTE: This function only attempts to transfer _transferable_ balances. This means that
 *any held, frozen, or minimum balance (when `keep_alive` is `true`), will not be
 *transferred by this function. To ensure that this function results in a killed account,
 *you might need to prepare the account by removing any reference counters, storage
 *deposits, etc...
 *
 *The dispatch origin of this call must be Signed.
 *
 *- `id`: The identifier of the asset for the account holding a deposit.
 *- `dest`: The recipient of the transfer.
 *- `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *  of the funds the asset account has, causing the sender asset account to be killed
 *  (false), or transfer everything except at least the minimum balance, which will
 *  guarantee to keep the sender asset account alive (true).
 */
"transfer_all": Anonymize<I7f7v8192r1lmq>}>;

export type Ic357tcepuvo5c = {"id": number, "admin": MultiAddress, "min_balance": bigint};

export type I2rnoam876ruhj = {"id": number, "owner": MultiAddress, "is_sufficient": boolean, "min_balance": bigint};

export type Ic5b47dj4coa3r = {"id": number};

export type Ib3qnc19gu633c = {"id": number, "beneficiary": MultiAddress, "amount": bigint};

export type Ifira6u9hi7cu1 = {"id": number, "who": MultiAddress, "amount": bigint};

export type I72tqocvdoqfff = {"id": number, "target": MultiAddress, "amount": bigint};

export type I2i27f3sfmvc05 = {"id": number, "source": MultiAddress, "dest": MultiAddress, "amount": bigint};

export type I1nlrtd1epki2d = {"id": number, "who": MultiAddress};

export type I3abtumcmempjs = {"id": number, "owner": MultiAddress};

export type Id81m8flopt8ha = {"id": number, "issuer": MultiAddress, "admin": MultiAddress, "freezer": MultiAddress};

export type I8hff7chabggkd = {"id": number, "name": Binary, "symbol": Binary, "decimals": number};

export type I49i39mtj1ivbs = {"id": number, "name": Binary, "symbol": Binary, "decimals": number, "is_frozen": boolean};

export type Ifkr2kcak2vto1 = {"id": number, "owner": MultiAddress, "issuer": MultiAddress, "admin": MultiAddress, "freezer": MultiAddress, "min_balance": bigint, "is_sufficient": boolean, "is_frozen": boolean};

export type I1ju6r8q0cs9jt = {"id": number, "delegate": MultiAddress, "amount": bigint};

export type I4kpeq6j7cd5bu = {"id": number, "delegate": MultiAddress};

export type I5na1ka76k6811 = {"id": number, "owner": MultiAddress, "delegate": MultiAddress};

export type I59mhdb9omdqfa = {"id": number, "owner": MultiAddress, "destination": MultiAddress, "amount": bigint};

export type I9vl5kpk0fpakt = {"id": number, "allow_burn": boolean};

export type I717jt61hu19b4 = {"id": number, "min_balance": bigint};

export type I7f7v8192r1lmq = {"id": number, "dest": MultiAddress, "keep_alive": boolean};

export type Icu49uv7rfej74 = AnonymousEnum<{
/**
 *Issue a new collection of non-fungible items from a public origin.
 *
 *This new collection has no items initially and its owner is the origin.
 *
 *The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
 *
 *`ItemDeposit` funds of sender are reserved.
 *
 *Parameters:
 *- `collection`: The identifier of the new collection. This must not be currently in use.
 *- `admin`: The admin of this collection. The admin is the initial address of each
 *member of the collection's admin team.
 *
 *Emits `Created` event when successful.
 *
 *Weight: `O(1)`
 */
"create": Anonymize<If66ivi02f7256>, 
/**
 *Issue a new collection of non-fungible items from a privileged origin.
 *
 *This new collection has no items initially.
 *
 *The origin must conform to `ForceOrigin`.
 *
 *Unlike `create`, no funds are reserved.
 *
 *- `collection`: The identifier of the new item. This must not be currently in use.
 *- `owner`: The owner of this collection of items. The owner has full superuser
 *  permissions
 *over this item, but may later change and configure the permissions using
 *`transfer_ownership` and `set_team`.
 *
 *Emits `ForceCreated` event when successful.
 *
 *Weight: `O(1)`
 */
"force_create": Anonymize<I223jtcatlfkrc>, 
/**
 *Destroy a collection of fungible items.
 *
 *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
 *owner of the `collection`.
 *
 *- `collection`: The identifier of the collection to be destroyed.
 *- `witness`: Information on the items minted in the collection. This must be
 *correct.
 *
 *Emits `Destroyed` event when successful.
 *
 *Weight: `O(n + m)` where:
 *- `n = witness.items`
 *- `m = witness.item_metadatas`
 *- `a = witness.attributes`
 */
"destroy": Anonymize<I223jg78mng8hq>, 
/**
 *Mint an item of a particular collection.
 *
 *The origin must be Signed and the sender must be the Issuer of the `collection`.
 *
 *- `collection`: The collection of the item to be minted.
 *- `item`: The item value of the item to be minted.
 *- `beneficiary`: The initial owner of the minted item.
 *
 *Emits `Issued` event when successful.
 *
 *Weight: `O(1)`
 */
"mint": Anonymize<I4iiuiftkpq3fd>, 
/**
 *Destroy a single item.
 *
 *Origin must be Signed and the signing account must be either:
 *- the Admin of the `collection`;
 *- the Owner of the `item`;
 *
 *- `collection`: The collection of the item to be burned.
 *- `item`: The item of the item to be burned.
 *- `check_owner`: If `Some` then the operation will fail with `WrongOwner` unless the
 *  item is owned by this value.
 *
 *Emits `Burned` with the actual amount burned.
 *
 *Weight: `O(1)`
 *Modes: `check_owner.is_some()`.
 */
"burn": Anonymize<Ibra6533h92c0a>, 
/**
 *Move an item from the sender account to another.
 *
 *This resets the approved account of the item.
 *
 *Origin must be Signed and the signing account must be either:
 *- the Admin of the `collection`;
 *- the Owner of the `item`;
 *- the approved delegate for the `item` (in this case, the approval is reset).
 *
 *Arguments:
 *- `collection`: The collection of the item to be transferred.
 *- `item`: The item of the item to be transferred.
 *- `dest`: The account to receive ownership of the item.
 *
 *Emits `Transferred`.
 *
 *Weight: `O(1)`
 */
"transfer": Anonymize<Ibgvkh96s68a66>, 
/**
 *Reevaluate the deposits on some items.
 *
 *Origin must be Signed and the sender should be the Owner of the `collection`.
 *
 *- `collection`: The collection to be frozen.
 *- `items`: The items of the collection whose deposits will be reevaluated.
 *
 *NOTE: This exists as a best-effort function. Any items which are unknown or
 *in the case that the owner account does not have reservable funds to pay for a
 *deposit increase are ignored. Generally the owner isn't going to call this on items
 *whose existing deposit is less than the refreshed deposit as it would only cost them,
 *so it's of little consequence.
 *
 *It will still return an error in the case that the collection is unknown of the signer
 *is not permitted to call it.
 *
 *Weight: `O(items.len())`
 */
"redeposit": Anonymize<If9vko7pv0231m>, 
/**
 *Disallow further unprivileged transfer of an item.
 *
 *Origin must be Signed and the sender should be the Freezer of the `collection`.
 *
 *- `collection`: The collection of the item to be frozen.
 *- `item`: The item of the item to be frozen.
 *
 *Emits `Frozen`.
 *
 *Weight: `O(1)`
 */
"freeze": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Re-allow unprivileged transfer of an item.
 *
 *Origin must be Signed and the sender should be the Freezer of the `collection`.
 *
 *- `collection`: The collection of the item to be thawed.
 *- `item`: The item of the item to be thawed.
 *
 *Emits `Thawed`.
 *
 *Weight: `O(1)`
 */
"thaw": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Disallow further unprivileged transfers for a whole collection.
 *
 *Origin must be Signed and the sender should be the Freezer of the `collection`.
 *
 *- `collection`: The collection to be frozen.
 *
 *Emits `CollectionFrozen`.
 *
 *Weight: `O(1)`
 */
"freeze_collection": Anonymize<I6cu7obfo0rr0o>, 
/**
 *Re-allow unprivileged transfers for a whole collection.
 *
 *Origin must be Signed and the sender should be the Admin of the `collection`.
 *
 *- `collection`: The collection to be thawed.
 *
 *Emits `CollectionThawed`.
 *
 *Weight: `O(1)`
 */
"thaw_collection": Anonymize<I6cu7obfo0rr0o>, 
/**
 *Change the Owner of a collection.
 *
 *Origin must be Signed and the sender should be the Owner of the `collection`.
 *
 *- `collection`: The collection whose owner should be changed.
 *- `owner`: The new Owner of this collection. They must have called
 *  `set_accept_ownership` with `collection` in order for this operation to succeed.
 *
 *Emits `OwnerChanged`.
 *
 *Weight: `O(1)`
 */
"transfer_ownership": Anonymize<I736lv5q9m5bot>, 
/**
 *Change the Issuer, Admin and Freezer of a collection.
 *
 *Origin must be Signed and the sender should be the Owner of the `collection`.
 *
 *- `collection`: The collection whose team should be changed.
 *- `issuer`: The new Issuer of this collection.
 *- `admin`: The new Admin of this collection.
 *- `freezer`: The new Freezer of this collection.
 *
 *Emits `TeamChanged`.
 *
 *Weight: `O(1)`
 */
"set_team": Anonymize<I1ap9tlenhr44l>, 
/**
 *Approve an item to be transferred by a delegated third-party account.
 *
 *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be
 *either the owner of the `item` or the admin of the collection.
 *
 *- `collection`: The collection of the item to be approved for delegated transfer.
 *- `item`: The item of the item to be approved for delegated transfer.
 *- `delegate`: The account to delegate permission to transfer the item.
 *
 *Important NOTE: The `approved` account gets reset after each transfer.
 *
 *Emits `ApprovedTransfer` on success.
 *
 *Weight: `O(1)`
 */
"approve_transfer": Anonymize<Ib92t90p616grb>, 
/**
 *Cancel the prior approval for the transfer of an item by a delegate.
 *
 *Origin must be either:
 *- the `Force` origin;
 *- `Signed` with the signer being the Admin of the `collection`;
 *- `Signed` with the signer being the Owner of the `item`;
 *
 *Arguments:
 *- `collection`: The collection of the item of whose approval will be cancelled.
 *- `item`: The item of the item of whose approval will be cancelled.
 *- `maybe_check_delegate`: If `Some` will ensure that the given account is the one to
 *  which permission of transfer is delegated.
 *
 *Emits `ApprovalCancelled` on success.
 *
 *Weight: `O(1)`
 */
"cancel_approval": Anonymize<Ieipuujd6879do>, 
/**
 *Alter the attributes of a given item.
 *
 *Origin must be `ForceOrigin`.
 *
 *- `collection`: The identifier of the item.
 *- `owner`: The new Owner of this item.
 *- `issuer`: The new Issuer of this item.
 *- `admin`: The new Admin of this item.
 *- `freezer`: The new Freezer of this item.
 *- `free_holding`: Whether a deposit is taken for holding an item of this collection.
 *- `is_frozen`: Whether this collection is frozen except for permissioned/admin
 *instructions.
 *
 *Emits `ItemStatusChanged` with the identity of the item.
 *
 *Weight: `O(1)`
 */
"force_item_status": Anonymize<Ie56eq9sg1rsoc>, 
/**
 *Set an attribute for a collection or item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *`collection`.
 *
 *If the origin is Signed, then funds of signer are reserved according to the formula:
 *`MetadataDepositBase + DepositPerByte * (key.len + value.len)` taking into
 *account any already reserved funds.
 *
 *- `collection`: The identifier of the collection whose item's metadata to set.
 *- `maybe_item`: The identifier of the item whose metadata to set.
 *- `key`: The key of the attribute.
 *- `value`: The value to which to set the attribute.
 *
 *Emits `AttributeSet`.
 *
 *Weight: `O(1)`
 */
"set_attribute": Anonymize<I5tvvgui05tn6e>, 
/**
 *Clear an attribute for a collection or item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *`collection`.
 *
 *Any deposit is freed for the collection's owner.
 *
 *- `collection`: The identifier of the collection whose item's metadata to clear.
 *- `maybe_item`: The identifier of the item whose metadata to clear.
 *- `key`: The key of the attribute.
 *
 *Emits `AttributeCleared`.
 *
 *Weight: `O(1)`
 */
"clear_attribute": Anonymize<Ibal0joadvdc2h>, 
/**
 *Set the metadata for an item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *`collection`.
 *
 *If the origin is Signed, then funds of signer are reserved according to the formula:
 *`MetadataDepositBase + DepositPerByte * data.len` taking into
 *account any already reserved funds.
 *
 *- `collection`: The identifier of the collection whose item's metadata to set.
 *- `item`: The identifier of the item whose metadata to set.
 *- `data`: The general information of this item. Limited in length by `StringLimit`.
 *- `is_frozen`: Whether the metadata should be frozen against further changes.
 *
 *Emits `MetadataSet`.
 *
 *Weight: `O(1)`
 */
"set_metadata": Anonymize<Iceq9fmmp9aeqv>, 
/**
 *Clear the metadata for an item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *`item`.
 *
 *Any deposit is freed for the collection's owner.
 *
 *- `collection`: The identifier of the collection whose item's metadata to clear.
 *- `item`: The identifier of the item whose metadata to clear.
 *
 *Emits `MetadataCleared`.
 *
 *Weight: `O(1)`
 */
"clear_metadata": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Set the metadata for a collection.
 *
 *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 *the `collection`.
 *
 *If the origin is `Signed`, then funds of signer are reserved according to the formula:
 *`MetadataDepositBase + DepositPerByte * data.len` taking into
 *account any already reserved funds.
 *
 *- `collection`: The identifier of the item whose metadata to update.
 *- `data`: The general information of this item. Limited in length by `StringLimit`.
 *- `is_frozen`: Whether the metadata should be frozen against further changes.
 *
 *Emits `CollectionMetadataSet`.
 *
 *Weight: `O(1)`
 */
"set_collection_metadata": Anonymize<I9viqhmdtuof5e>, 
/**
 *Clear the metadata for a collection.
 *
 *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 *the `collection`.
 *
 *Any deposit is freed for the collection's owner.
 *
 *- `collection`: The identifier of the collection whose metadata to clear.
 *
 *Emits `CollectionMetadataCleared`.
 *
 *Weight: `O(1)`
 */
"clear_collection_metadata": Anonymize<I6cu7obfo0rr0o>, 
/**
 *Set (or reset) the acceptance of ownership for a particular account.
 *
 *Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
 *provider reference.
 *
 *- `maybe_collection`: The identifier of the collection whose ownership the signer is
 *  willing to accept, or if `None`, an indication that the signer is willing to accept no
 *  ownership transferal.
 *
 *Emits `OwnershipAcceptanceChanged`.
 */
"set_accept_ownership": Anonymize<Ibqooroq6rr5kr>, 
/**
 *Set the maximum amount of items a collection could have.
 *
 *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 *the `collection`.
 *
 *Note: This function can only succeed once per collection.
 *
 *- `collection`: The identifier of the collection to change.
 *- `max_supply`: The maximum amount of items a collection could have.
 *
 *Emits `CollectionMaxSupplySet` event when successful.
 */
"set_collection_max_supply": Anonymize<I6h88h8vba22v8>, 
/**
 *Set (or reset) the price for an item.
 *
 *Origin must be Signed and must be the owner of the asset `item`.
 *
 *- `collection`: The collection of the item.
 *- `item`: The item to set the price for.
 *- `price`: The price for the item. Pass `None`, to reset the price.
 *- `buyer`: Restricts the buy operation to a specific account.
 *
 *Emits `ItemPriceSet` on success if the price is not `None`.
 *Emits `ItemPriceRemoved` on success if the price is `None`.
 */
"set_price": Anonymize<Ia9cd4jqb5eecb>, 
/**
 *Allows to buy an item if it's up for sale.
 *
 *Origin must be Signed and must not be the owner of the `item`.
 *
 *- `collection`: The collection of the item.
 *- `item`: The item the sender wants to buy.
 *- `bid_price`: The price the sender is willing to pay.
 *
 *Emits `ItemBought` on success.
 */
"buy_item": Anonymize<I19jiel1ftbcce>}>;

export type If66ivi02f7256 = {"collection": number, "admin": MultiAddress};

export type I223jtcatlfkrc = {"collection": number, "owner": MultiAddress, "free_holding": boolean};

export type I223jg78mng8hq = {"collection": number, "witness": {"items": number, "item_metadatas": number, "attributes": number}};

export type I4iiuiftkpq3fd = {"collection": number, "item": number, "owner": MultiAddress};

export type Ibra6533h92c0a = {"collection": number, "item": number, "check_owner"?: Anonymize<Ia0jlc0rcbskuk>};

export type Ia0jlc0rcbskuk = (MultiAddress) | undefined;

export type Ibgvkh96s68a66 = {"collection": number, "item": number, "dest": MultiAddress};

export type If9vko7pv0231m = {"collection": number, "items": Anonymize<Icgljjb6j82uhn>};

export type I736lv5q9m5bot = {"collection": number, "new_owner": MultiAddress};

export type I1ap9tlenhr44l = {"collection": number, "issuer": MultiAddress, "admin": MultiAddress, "freezer": MultiAddress};

export type Ib92t90p616grb = {"collection": number, "item": number, "delegate": MultiAddress};

export type Ieipuujd6879do = {"collection": number, "item": number, "maybe_check_delegate"?: Anonymize<Ia0jlc0rcbskuk>};

export type Ie56eq9sg1rsoc = {"collection": number, "owner": MultiAddress, "issuer": MultiAddress, "admin": MultiAddress, "freezer": MultiAddress, "free_holding": boolean, "is_frozen": boolean};

export type Ibqooroq6rr5kr = {"maybe_collection"?: Anonymize<I4arjljr6dpflb>};

export type Ia9cd4jqb5eecb = {"collection": number, "item": number, "price"?: Anonymize<I35p85j063s0il>, "whitelisted_buyer"?: Anonymize<Ia0jlc0rcbskuk>};

export type I19jiel1ftbcce = {"collection": number, "item": number, "bid_price": bigint};

export type I1k4il7i5elhc7 = AnonymousEnum<{
/**
 *Issue a new collection of non-fungible items from a public origin.
 *
 *This new collection has no items initially and its owner is the origin.
 *
 *The origin must be Signed and the sender must have sufficient funds free.
 *
 *`CollectionDeposit` funds of sender are reserved.
 *
 *Parameters:
 *- `admin`: The admin of this collection. The admin is the initial address of each
 *member of the collection's admin team.
 *
 *Emits `Created` event when successful.
 *
 *Weight: `O(1)`
 */
"create": Anonymize<I43aobns89nbkh>, 
/**
 *Issue a new collection of non-fungible items from a privileged origin.
 *
 *This new collection has no items initially.
 *
 *The origin must conform to `ForceOrigin`.
 *
 *Unlike `create`, no funds are reserved.
 *
 *- `owner`: The owner of this collection of items. The owner has full superuser
 *  permissions over this item, but may later change and configure the permissions using
 *  `transfer_ownership` and `set_team`.
 *
 *Emits `ForceCreated` event when successful.
 *
 *Weight: `O(1)`
 */
"force_create": Anonymize<Iamd7rovec1hfb>, 
/**
 *Destroy a collection of fungible items.
 *
 *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
 *owner of the `collection`.
 *
 *NOTE: The collection must have 0 items to be destroyed.
 *
 *- `collection`: The identifier of the collection to be destroyed.
 *- `witness`: Information on the items minted in the collection. This must be
 *correct.
 *
 *Emits `Destroyed` event when successful.
 *
 *Weight: `O(m + c + a)` where:
 *- `m = witness.item_metadatas`
 *- `c = witness.item_configs`
 *- `a = witness.attributes`
 */
"destroy": Anonymize<I77ie723ncd4co>, 
/**
 *Mint an item of a particular collection.
 *
 *The origin must be Signed and the sender must comply with the `mint_settings` rules.
 *
 *- `collection`: The collection of the item to be minted.
 *- `item`: An identifier of the new item.
 *- `mint_to`: Account into which the item will be minted.
 *- `witness_data`: When the mint type is `HolderOf(collection_id)`, then the owned
 *  item_id from that collection needs to be provided within the witness data object. If
 *  the mint price is set, then it should be additionally confirmed in the `witness_data`.
 *
 *Note: the deposit will be taken from the `origin` and not the `owner` of the `item`.
 *
 *Emits `Issued` event when successful.
 *
 *Weight: `O(1)`
 */
"mint": Anonymize<Ieebloeahma3ke>, 
/**
 *Mint an item of a particular collection from a privileged origin.
 *
 *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
 *Issuer of the `collection`.
 *
 *- `collection`: The collection of the item to be minted.
 *- `item`: An identifier of the new item.
 *- `mint_to`: Account into which the item will be minted.
 *- `item_config`: A config of the new item.
 *
 *Emits `Issued` event when successful.
 *
 *Weight: `O(1)`
 */
"force_mint": Anonymize<I4mbtpf4pu3rec>, 
/**
 *Destroy a single item.
 *
 *The origin must conform to `ForceOrigin` or must be Signed and the signing account must
 *be the owner of the `item`.
 *
 *- `collection`: The collection of the item to be burned.
 *- `item`: The item to be burned.
 *
 *Emits `Burned`.
 *
 *Weight: `O(1)`
 */
"burn": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Move an item from the sender account to another.
 *
 *Origin must be Signed and the signing account must be either:
 *- the Owner of the `item`;
 *- the approved delegate for the `item` (in this case, the approval is reset).
 *
 *Arguments:
 *- `collection`: The collection of the item to be transferred.
 *- `item`: The item to be transferred.
 *- `dest`: The account to receive ownership of the item.
 *
 *Emits `Transferred`.
 *
 *Weight: `O(1)`
 */
"transfer": Anonymize<Ibgvkh96s68a66>, 
/**
 *Re-evaluate the deposits on some items.
 *
 *Origin must be Signed and the sender should be the Owner of the `collection`.
 *
 *- `collection`: The collection of the items to be reevaluated.
 *- `items`: The items of the collection whose deposits will be reevaluated.
 *
 *NOTE: This exists as a best-effort function. Any items which are unknown or
 *in the case that the owner account does not have reservable funds to pay for a
 *deposit increase are ignored. Generally the owner isn't going to call this on items
 *whose existing deposit is less than the refreshed deposit as it would only cost them,
 *so it's of little consequence.
 *
 *It will still return an error in the case that the collection is unknown or the signer
 *is not permitted to call it.
 *
 *Weight: `O(items.len())`
 */
"redeposit": Anonymize<If9vko7pv0231m>, 
/**
 *Disallow further unprivileged transfer of an item.
 *
 *Origin must be Signed and the sender should be the Freezer of the `collection`.
 *
 *- `collection`: The collection of the item to be changed.
 *- `item`: The item to become non-transferable.
 *
 *Emits `ItemTransferLocked`.
 *
 *Weight: `O(1)`
 */
"lock_item_transfer": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Re-allow unprivileged transfer of an item.
 *
 *Origin must be Signed and the sender should be the Freezer of the `collection`.
 *
 *- `collection`: The collection of the item to be changed.
 *- `item`: The item to become transferable.
 *
 *Emits `ItemTransferUnlocked`.
 *
 *Weight: `O(1)`
 */
"unlock_item_transfer": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Disallows specified settings for the whole collection.
 *
 *Origin must be Signed and the sender should be the Owner of the `collection`.
 *
 *- `collection`: The collection to be locked.
 *- `lock_settings`: The settings to be locked.
 *
 *Note: it's possible to only lock(set) the setting, but not to unset it.
 *
 *Emits `CollectionLocked`.
 *
 *Weight: `O(1)`
 */
"lock_collection": Anonymize<I1ahf3pvgsgbu>, 
/**
 *Change the Owner of a collection.
 *
 *Origin must be Signed and the sender should be the Owner of the `collection`.
 *
 *- `collection`: The collection whose owner should be changed.
 *- `owner`: The new Owner of this collection. They must have called
 *  `set_accept_ownership` with `collection` in order for this operation to succeed.
 *
 *Emits `OwnerChanged`.
 *
 *Weight: `O(1)`
 */
"transfer_ownership": Anonymize<I736lv5q9m5bot>, 
/**
 *Change the Issuer, Admin and Freezer of a collection.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *`collection`.
 *
 *Note: by setting the role to `None` only the `ForceOrigin` will be able to change it
 *after to `Some(account)`.
 *
 *- `collection`: The collection whose team should be changed.
 *- `issuer`: The new Issuer of this collection.
 *- `admin`: The new Admin of this collection.
 *- `freezer`: The new Freezer of this collection.
 *
 *Emits `TeamChanged`.
 *
 *Weight: `O(1)`
 */
"set_team": Anonymize<I9uapdn16emsti>, 
/**
 *Change the Owner of a collection.
 *
 *Origin must be `ForceOrigin`.
 *
 *- `collection`: The identifier of the collection.
 *- `owner`: The new Owner of this collection.
 *
 *Emits `OwnerChanged`.
 *
 *Weight: `O(1)`
 */
"force_collection_owner": Anonymize<Ie5i0q2glmr0md>, 
/**
 *Change the config of a collection.
 *
 *Origin must be `ForceOrigin`.
 *
 *- `collection`: The identifier of the collection.
 *- `config`: The new config of this collection.
 *
 *Emits `CollectionConfigChanged`.
 *
 *Weight: `O(1)`
 */
"force_collection_config": Anonymize<I97qcg6i3l8gee>, 
/**
 *Approve an item to be transferred by a delegated third-party account.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *`item`.
 *
 *- `collection`: The collection of the item to be approved for delegated transfer.
 *- `item`: The item to be approved for delegated transfer.
 *- `delegate`: The account to delegate permission to transfer the item.
 *- `maybe_deadline`: Optional deadline for the approval. Specified by providing the
 *	number of blocks after which the approval will expire
 *
 *Emits `TransferApproved` on success.
 *
 *Weight: `O(1)`
 */
"approve_transfer": Anonymize<Ib5udrahak005b>, 
/**
 *Cancel one of the transfer approvals for a specific item.
 *
 *Origin must be either:
 *- the `Force` origin;
 *- `Signed` with the signer being the Owner of the `item`;
 *
 *Arguments:
 *- `collection`: The collection of the item of whose approval will be cancelled.
 *- `item`: The item of the collection of whose approval will be cancelled.
 *- `delegate`: The account that is going to loose their approval.
 *
 *Emits `ApprovalCancelled` on success.
 *
 *Weight: `O(1)`
 */
"cancel_approval": Anonymize<Ib92t90p616grb>, 
/**
 *Cancel all the approvals of a specific item.
 *
 *Origin must be either:
 *- the `Force` origin;
 *- `Signed` with the signer being the Owner of the `item`;
 *
 *Arguments:
 *- `collection`: The collection of the item of whose approvals will be cleared.
 *- `item`: The item of the collection of whose approvals will be cleared.
 *
 *Emits `AllApprovalsCancelled` on success.
 *
 *Weight: `O(1)`
 */
"clear_all_transfer_approvals": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Disallows changing the metadata or attributes of the item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Admin
 *of the `collection`.
 *
 *- `collection`: The collection if the `item`.
 *- `item`: An item to be locked.
 *- `lock_metadata`: Specifies whether the metadata should be locked.
 *- `lock_attributes`: Specifies whether the attributes in the `CollectionOwner` namespace
 *  should be locked.
 *
 *Note: `lock_attributes` affects the attributes in the `CollectionOwner` namespace only.
 *When the metadata or attributes are locked, it won't be possible the unlock them.
 *
 *Emits `ItemPropertiesLocked`.
 *
 *Weight: `O(1)`
 */
"lock_item_properties": Anonymize<I1jj31tn29ie3c>, 
/**
 *Set an attribute for a collection or item.
 *
 *Origin must be Signed and must conform to the namespace ruleset:
 *- `CollectionOwner` namespace could be modified by the `collection` Admin only;
 *- `ItemOwner` namespace could be modified by the `maybe_item` owner only. `maybe_item`
 *  should be set in that case;
 *- `Account(AccountId)` namespace could be modified only when the `origin` was given a
 *  permission to do so;
 *
 *The funds of `origin` are reserved according to the formula:
 *`AttributeDepositBase + DepositPerByte * (key.len + value.len)` taking into
 *account any already reserved funds.
 *
 *- `collection`: The identifier of the collection whose item's metadata to set.
 *- `maybe_item`: The identifier of the item whose metadata to set.
 *- `namespace`: Attribute's namespace.
 *- `key`: The key of the attribute.
 *- `value`: The value to which to set the attribute.
 *
 *Emits `AttributeSet`.
 *
 *Weight: `O(1)`
 */
"set_attribute": Anonymize<I5llu6o6a0go5i>, 
/**
 *Force-set an attribute for a collection or item.
 *
 *Origin must be `ForceOrigin`.
 *
 *If the attribute already exists and it was set by another account, the deposit
 *will be returned to the previous owner.
 *
 *- `set_as`: An optional owner of the attribute.
 *- `collection`: The identifier of the collection whose item's metadata to set.
 *- `maybe_item`: The identifier of the item whose metadata to set.
 *- `namespace`: Attribute's namespace.
 *- `key`: The key of the attribute.
 *- `value`: The value to which to set the attribute.
 *
 *Emits `AttributeSet`.
 *
 *Weight: `O(1)`
 */
"force_set_attribute": Anonymize<Ic8b8561e6t9ie>, 
/**
 *Clear an attribute for a collection or item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *attribute.
 *
 *Any deposit is freed for the collection's owner.
 *
 *- `collection`: The identifier of the collection whose item's metadata to clear.
 *- `maybe_item`: The identifier of the item whose metadata to clear.
 *- `namespace`: Attribute's namespace.
 *- `key`: The key of the attribute.
 *
 *Emits `AttributeCleared`.
 *
 *Weight: `O(1)`
 */
"clear_attribute": Anonymize<I93r2effh7od84>, 
/**
 *Approve item's attributes to be changed by a delegated third-party account.
 *
 *Origin must be Signed and must be an owner of the `item`.
 *
 *- `collection`: A collection of the item.
 *- `item`: The item that holds attributes.
 *- `delegate`: The account to delegate permission to change attributes of the item.
 *
 *Emits `ItemAttributesApprovalAdded` on success.
 */
"approve_item_attributes": Anonymize<Ib92t90p616grb>, 
/**
 *Cancel the previously provided approval to change item's attributes.
 *All the previously set attributes by the `delegate` will be removed.
 *
 *Origin must be Signed and must be an owner of the `item`.
 *
 *- `collection`: Collection that the item is contained within.
 *- `item`: The item that holds attributes.
 *- `delegate`: The previously approved account to remove.
 *
 *Emits `ItemAttributesApprovalRemoved` on success.
 */
"cancel_item_attributes_approval": Anonymize<I6afd7fllr8otc>, 
/**
 *Set the metadata for an item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the
 *`collection`.
 *
 *If the origin is Signed, then funds of signer are reserved according to the formula:
 *`MetadataDepositBase + DepositPerByte * data.len` taking into
 *account any already reserved funds.
 *
 *- `collection`: The identifier of the collection whose item's metadata to set.
 *- `item`: The identifier of the item whose metadata to set.
 *- `data`: The general information of this item. Limited in length by `StringLimit`.
 *
 *Emits `ItemMetadataSet`.
 *
 *Weight: `O(1)`
 */
"set_metadata": Anonymize<Icrkms46uh8tpb>, 
/**
 *Clear the metadata for an item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the
 *`collection`.
 *
 *Any deposit is freed for the collection's owner.
 *
 *- `collection`: The identifier of the collection whose item's metadata to clear.
 *- `item`: The identifier of the item whose metadata to clear.
 *
 *Emits `ItemMetadataCleared`.
 *
 *Weight: `O(1)`
 */
"clear_metadata": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Set the metadata for a collection.
 *
 *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of
 *the `collection`.
 *
 *If the origin is `Signed`, then funds of signer are reserved according to the formula:
 *`MetadataDepositBase + DepositPerByte * data.len` taking into
 *account any already reserved funds.
 *
 *- `collection`: The identifier of the item whose metadata to update.
 *- `data`: The general information of this item. Limited in length by `StringLimit`.
 *
 *Emits `CollectionMetadataSet`.
 *
 *Weight: `O(1)`
 */
"set_collection_metadata": Anonymize<I78u60nqh0etah>, 
/**
 *Clear the metadata for a collection.
 *
 *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of
 *the `collection`.
 *
 *Any deposit is freed for the collection's owner.
 *
 *- `collection`: The identifier of the collection whose metadata to clear.
 *
 *Emits `CollectionMetadataCleared`.
 *
 *Weight: `O(1)`
 */
"clear_collection_metadata": Anonymize<I6cu7obfo0rr0o>, 
/**
 *Set (or reset) the acceptance of ownership for a particular account.
 *
 *Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
 *provider reference.
 *
 *- `maybe_collection`: The identifier of the collection whose ownership the signer is
 *  willing to accept, or if `None`, an indication that the signer is willing to accept no
 *  ownership transferal.
 *
 *Emits `OwnershipAcceptanceChanged`.
 */
"set_accept_ownership": Anonymize<Ibqooroq6rr5kr>, 
/**
 *Set the maximum number of items a collection could have.
 *
 *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 *the `collection`.
 *
 *- `collection`: The identifier of the collection to change.
 *- `max_supply`: The maximum number of items a collection could have.
 *
 *Emits `CollectionMaxSupplySet` event when successful.
 */
"set_collection_max_supply": Anonymize<I6h88h8vba22v8>, 
/**
 *Update mint settings.
 *
 *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Issuer
 *of the `collection`.
 *
 *- `collection`: The identifier of the collection to change.
 *- `mint_settings`: The new mint settings.
 *
 *Emits `CollectionMintSettingsUpdated` event when successful.
 */
"update_mint_settings": Anonymize<I1lso3vlgherue>, 
/**
 *Set (or reset) the price for an item.
 *
 *Origin must be Signed and must be the owner of the `item`.
 *
 *- `collection`: The collection of the item.
 *- `item`: The item to set the price for.
 *- `price`: The price for the item. Pass `None`, to reset the price.
 *- `buyer`: Restricts the buy operation to a specific account.
 *
 *Emits `ItemPriceSet` on success if the price is not `None`.
 *Emits `ItemPriceRemoved` on success if the price is `None`.
 */
"set_price": Anonymize<Ia9cd4jqb5eecb>, 
/**
 *Allows to buy an item if it's up for sale.
 *
 *Origin must be Signed and must not be the owner of the `item`.
 *
 *- `collection`: The collection of the item.
 *- `item`: The item the sender wants to buy.
 *- `bid_price`: The price the sender is willing to pay.
 *
 *Emits `ItemBought` on success.
 */
"buy_item": Anonymize<I19jiel1ftbcce>, 
/**
 *Allows to pay the tips.
 *
 *Origin must be Signed.
 *
 *- `tips`: Tips array.
 *
 *Emits `TipSent` on every tip transfer.
 */
"pay_tips": Anonymize<I26c8p47106toa>, 
/**
 *Register a new atomic swap, declaring an intention to send an `item` in exchange for
 *`desired_item` from origin to target on the current blockchain.
 *The target can execute the swap during the specified `duration` of blocks (if set).
 *Additionally, the price could be set for the desired `item`.
 *
 *Origin must be Signed and must be an owner of the `item`.
 *
 *- `collection`: The collection of the item.
 *- `item`: The item an owner wants to give.
 *- `desired_collection`: The collection of the desired item.
 *- `desired_item`: The desired item an owner wants to receive.
 *- `maybe_price`: The price an owner is willing to pay or receive for the desired `item`.
 *- `duration`: A deadline for the swap. Specified by providing the number of blocks
 *	after which the swap will expire.
 *
 *Emits `SwapCreated` on success.
 */
"create_swap": Anonymize<Iq82b3qvf20ne>, 
/**
 *Cancel an atomic swap.
 *
 *Origin must be Signed.
 *Origin must be an owner of the `item` if the deadline hasn't expired.
 *
 *- `collection`: The collection of the item.
 *- `item`: The item an owner wants to give.
 *
 *Emits `SwapCancelled` on success.
 */
"cancel_swap": Anonymize<Ic3j8ku6mbsms4>, 
/**
 *Claim an atomic swap.
 *This method executes a pending swap, that was created by a counterpart before.
 *
 *Origin must be Signed and must be an owner of the `item`.
 *
 *- `send_collection`: The collection of the item to be sent.
 *- `send_item`: The item to be sent.
 *- `receive_collection`: The collection of the item to be received.
 *- `receive_item`: The item to be received.
 *- `witness_price`: A price that was previously agreed on.
 *
 *Emits `SwapClaimed` on success.
 */
"claim_swap": Anonymize<I3nvoqsi8f05ph>, 
/**
 *Mint an item by providing the pre-signed approval.
 *
 *Origin must be Signed.
 *
 *- `mint_data`: The pre-signed approval that consists of the information about the item,
 *  its metadata, attributes, who can mint it (`None` for anyone) and until what block
 *  number.
 *- `signature`: The signature of the `data` object.
 *- `signer`: The `data` object's signer. Should be an Issuer of the collection.
 *
 *Emits `Issued` on success.
 *Emits `AttributeSet` if the attributes were provided.
 *Emits `ItemMetadataSet` if the metadata was not empty.
 */
"mint_pre_signed": Anonymize<I3eoft5md071do>, 
/**
 *Set attributes for an item by providing the pre-signed approval.
 *
 *Origin must be Signed and must be an owner of the `data.item`.
 *
 *- `data`: The pre-signed approval that consists of the information about the item,
 *  attributes to update and until what block number.
 *- `signature`: The signature of the `data` object.
 *- `signer`: The `data` object's signer. Should be an Admin of the collection for the
 *  `CollectionOwner` namespace.
 *
 *Emits `AttributeSet` for each provided attribute.
 *Emits `ItemAttributesApprovalAdded` if the approval wasn't set before.
 *Emits `PreSignedAttributesSet` on success.
 */
"set_attributes_pre_signed": Anonymize<I923eug653ra0o>}>;

export type I43aobns89nbkh = {"admin": MultiAddress, "config": Anonymize<I72ndo6phms8ik>};

export type Iamd7rovec1hfb = {"owner": MultiAddress, "config": Anonymize<I72ndo6phms8ik>};

export type I77ie723ncd4co = {"collection": number, "witness": {"item_metadatas": number, "item_configs": number, "attributes": number}};

export type Ieebloeahma3ke = {"collection": number, "item": number, "mint_to": MultiAddress, "witness_data"?: Anonymize<Ib0113vv89gbic>};

export type Ib0113vv89gbic = ({"owned_item"?: Anonymize<I4arjljr6dpflb>, "mint_price"?: Anonymize<I35p85j063s0il>}) | undefined;

export type I4mbtpf4pu3rec = {"collection": number, "item": number, "mint_to": MultiAddress, "item_config": bigint};

export type I1ahf3pvgsgbu = {"collection": number, "lock_settings": bigint};

export type I9uapdn16emsti = {"collection": number, "issuer"?: Anonymize<Ia0jlc0rcbskuk>, "admin"?: Anonymize<Ia0jlc0rcbskuk>, "freezer"?: Anonymize<Ia0jlc0rcbskuk>};

export type Ie5i0q2glmr0md = {"collection": number, "owner": MultiAddress};

export type I97qcg6i3l8gee = {"collection": number, "config": Anonymize<I72ndo6phms8ik>};

export type Ib5udrahak005b = {"collection": number, "item": number, "delegate": MultiAddress, "maybe_deadline"?: Anonymize<I4arjljr6dpflb>};

export type Ic8b8561e6t9ie = {"set_as"?: Anonymize<Ihfphjolmsqq1>, "collection": number, "maybe_item"?: Anonymize<I4arjljr6dpflb>, "namespace": Anonymize<If3jjadhmug6qc>, "key": Binary, "value": Binary};

export type I6afd7fllr8otc = {"collection": number, "item": number, "delegate": MultiAddress, "witness": number};

export type I1lso3vlgherue = {"collection": number, "mint_settings": Anonymize<Ia3s8qquibn97v>};

export type I26c8p47106toa = {"tips": Array<{"collection": number, "item": number, "receiver": SS58String, "amount": bigint}>};

export type Iq82b3qvf20ne = {"offered_collection": number, "offered_item": number, "desired_collection": number, "maybe_desired_item"?: Anonymize<I4arjljr6dpflb>, "maybe_price"?: Anonymize<I6oogc1jbmmi81>, "duration": number};

export type Ic3j8ku6mbsms4 = {"offered_collection": number, "offered_item": number};

export type I3nvoqsi8f05ph = {"send_collection": number, "send_item": number, "receive_collection": number, "receive_item": number, "witness_price"?: Anonymize<I6oogc1jbmmi81>};

export type I3eoft5md071do = {"mint_data": {"collection": number, "item": number, "attributes": Anonymize<I6pi5ou8r1hblk>, "metadata": Binary, "only_account"?: Anonymize<Ihfphjolmsqq1>, "deadline": number, "mint_price"?: Anonymize<I35p85j063s0il>}, "signature": MultiSignature, "signer": SS58String};

export type MultiSignature = Enum<{"Ed25519": FixedSizeBinary<64>, "Sr25519": FixedSizeBinary<64>, "Ecdsa": FixedSizeBinary<65>}>;
export const MultiSignature = _Enum as unknown as GetEnum<MultiSignature>;

export type I923eug653ra0o = {"data": {"collection": number, "item": number, "attributes": Anonymize<I6pi5ou8r1hblk>, "namespace": Anonymize<If3jjadhmug6qc>, "deadline": number}, "signature": MultiSignature, "signer": SS58String};

export type I1botoq1mmhfag = AnonymousEnum<{
/**
 *Issue a new class of fungible assets from a public origin.
 *
 *This new asset class has no assets initially and its owner is the origin.
 *
 *The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
 *
 *Funds of sender are reserved by `AssetDeposit`.
 *
 *Parameters:
 *- `id`: The identifier of the new asset. This must not be currently in use to identify
 *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
 *- `admin`: The admin of this class of assets. The admin is the initial address of each
 *member of the asset class's admin team.
 *- `min_balance`: The minimum balance of this new asset that any single account must
 *have. If an account's balance is reduced below this, then it collapses to zero.
 *
 *Emits `Created` event when successful.
 *
 *Weight: `O(1)`
 */
"create": Anonymize<I7t2thek61ghou>, 
/**
 *Issue a new class of fungible assets from a privileged origin.
 *
 *This new asset class has no assets initially.
 *
 *The origin must conform to `ForceOrigin`.
 *
 *Unlike `create`, no funds are reserved.
 *
 *- `id`: The identifier of the new asset. This must not be currently in use to identify
 *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
 *- `owner`: The owner of this class of assets. The owner has full superuser permissions
 *over this asset, but may later change and configure the permissions using
 *`transfer_ownership` and `set_team`.
 *- `min_balance`: The minimum balance of this new asset that any single account must
 *have. If an account's balance is reduced below this, then it collapses to zero.
 *
 *Emits `ForceCreated` event when successful.
 *
 *Weight: `O(1)`
 */
"force_create": Anonymize<I61tdrsafr1vf3>, 
/**
 *Start the process of destroying a fungible asset class.
 *
 *`start_destroy` is the first in a series of extrinsics that should be called, to allow
 *destruction of an asset class.
 *
 *The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
 *
 *- `id`: The identifier of the asset to be destroyed. This must identify an existing
 *  asset.
 */
"start_destroy": Anonymize<Ibsk5g3rhm45pu>, 
/**
 *Destroy all accounts associated with a given asset.
 *
 *`destroy_accounts` should only be called after `start_destroy` has been called, and the
 *asset is in a `Destroying` state.
 *
 *Due to weight restrictions, this function may need to be called multiple times to fully
 *destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
 *
 *- `id`: The identifier of the asset to be destroyed. This must identify an existing
 *  asset.
 *
 *Each call emits the `Event::DestroyedAccounts` event.
 */
"destroy_accounts": Anonymize<Ibsk5g3rhm45pu>, 
/**
 *Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
 *
 *`destroy_approvals` should only be called after `start_destroy` has been called, and the
 *asset is in a `Destroying` state.
 *
 *Due to weight restrictions, this function may need to be called multiple times to fully
 *destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
 *
 *- `id`: The identifier of the asset to be destroyed. This must identify an existing
 *  asset.
 *
 *Each call emits the `Event::DestroyedApprovals` event.
 */
"destroy_approvals": Anonymize<Ibsk5g3rhm45pu>, 
/**
 *Complete destroying asset and unreserve currency.
 *
 *`finish_destroy` should only be called after `start_destroy` has been called, and the
 *asset is in a `Destroying` state. All accounts or approvals should be destroyed before
 *hand.
 *
 *- `id`: The identifier of the asset to be destroyed. This must identify an existing
 *  asset.
 *
 *Each successful call emits the `Event::Destroyed` event.
 */
"finish_destroy": Anonymize<Ibsk5g3rhm45pu>, 
/**
 *Mint assets of a particular class.
 *
 *The origin must be Signed and the sender must be the Issuer of the asset `id`.
 *
 *- `id`: The identifier of the asset to have some amount minted.
 *- `beneficiary`: The account to be credited with the minted assets.
 *- `amount`: The amount of the asset to be minted.
 *
 *Emits `Issued` event when successful.
 *
 *Weight: `O(1)`
 *Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
 */
"mint": Anonymize<Icfoe9q8d4vs8f>, 
/**
 *Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
 *
 *Origin must be Signed and the sender should be the Manager of the asset `id`.
 *
 *Bails with `NoAccount` if the `who` is already dead.
 *
 *- `id`: The identifier of the asset to have some amount burned.
 *- `who`: The account to be debited from.
 *- `amount`: The maximum amount by which `who`'s balance should be reduced.
 *
 *Emits `Burned` with the actual amount burned. If this takes the balance to below the
 *minimum for the asset, then the amount burned is increased to take it to zero.
 *
 *Weight: `O(1)`
 *Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
 */
"burn": Anonymize<Ibrfmvjrg4trnb>, 
/**
 *Move some assets from the sender account to another.
 *
 *Origin must be Signed.
 *
 *- `id`: The identifier of the asset to have some amount transferred.
 *- `target`: The account to be credited.
 *- `amount`: The amount by which the sender's balance of assets should be reduced and
 *`target`'s balance increased. The amount actually transferred may be slightly greater in
 *the case that the transfer would otherwise take the sender balance above zero but below
 *the minimum balance. Must be greater than zero.
 *
 *Emits `Transferred` with the actual amount transferred. If this takes the source balance
 *to below the minimum for the asset, then the amount transferred is increased to take it
 *to zero.
 *
 *Weight: `O(1)`
 *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 *`target`.
 */
"transfer": Anonymize<Iedih7t34maii9>, 
/**
 *Move some assets from the sender account to another, keeping the sender account alive.
 *
 *Origin must be Signed.
 *
 *- `id`: The identifier of the asset to have some amount transferred.
 *- `target`: The account to be credited.
 *- `amount`: The amount by which the sender's balance of assets should be reduced and
 *`target`'s balance increased. The amount actually transferred may be slightly greater in
 *the case that the transfer would otherwise take the sender balance above zero but below
 *the minimum balance. Must be greater than zero.
 *
 *Emits `Transferred` with the actual amount transferred. If this takes the source balance
 *to below the minimum for the asset, then the amount transferred is increased to take it
 *to zero.
 *
 *Weight: `O(1)`
 *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 *`target`.
 */
"transfer_keep_alive": Anonymize<Iedih7t34maii9>, 
/**
 *Move some assets from one account to another.
 *
 *Origin must be Signed and the sender should be the Admin of the asset `id`.
 *
 *- `id`: The identifier of the asset to have some amount transferred.
 *- `source`: The account to be debited.
 *- `dest`: The account to be credited.
 *- `amount`: The amount by which the `source`'s balance of assets should be reduced and
 *`dest`'s balance increased. The amount actually transferred may be slightly greater in
 *the case that the transfer would otherwise take the `source` balance above zero but
 *below the minimum balance. Must be greater than zero.
 *
 *Emits `Transferred` with the actual amount transferred. If this takes the source balance
 *to below the minimum for the asset, then the amount transferred is increased to take it
 *to zero.
 *
 *Weight: `O(1)`
 *Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
 *`dest`.
 */
"force_transfer": Anonymize<I4e902qbfel1f1>, 
/**
 *Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
 *must already exist as an entry in `Account`s of the asset. If you want to freeze an
 *account that does not have an entry, use `touch_other` first.
 *
 *Origin must be Signed and the sender should be the Freezer of the asset `id`.
 *
 *- `id`: The identifier of the asset to be frozen.
 *- `who`: The account to be frozen.
 *
 *Emits `Frozen`.
 *
 *Weight: `O(1)`
 */
"freeze": Anonymize<Ie4met0joi8sv0>, 
/**
 *Allow unprivileged transfers to and from an account again.
 *
 *Origin must be Signed and the sender should be the Admin of the asset `id`.
 *
 *- `id`: The identifier of the asset to be frozen.
 *- `who`: The account to be unfrozen.
 *
 *Emits `Thawed`.
 *
 *Weight: `O(1)`
 */
"thaw": Anonymize<Ie4met0joi8sv0>, 
/**
 *Disallow further unprivileged transfers for the asset class.
 *
 *Origin must be Signed and the sender should be the Freezer of the asset `id`.
 *
 *- `id`: The identifier of the asset to be frozen.
 *
 *Emits `Frozen`.
 *
 *Weight: `O(1)`
 */
"freeze_asset": Anonymize<Ibsk5g3rhm45pu>, 
/**
 *Allow unprivileged transfers for the asset again.
 *
 *Origin must be Signed and the sender should be the Admin of the asset `id`.
 *
 *- `id`: The identifier of the asset to be thawed.
 *
 *Emits `Thawed`.
 *
 *Weight: `O(1)`
 */
"thaw_asset": Anonymize<Ibsk5g3rhm45pu>, 
/**
 *Change the Owner of an asset.
 *
 *Origin must be Signed and the sender should be the Owner of the asset `id`.
 *
 *- `id`: The identifier of the asset.
 *- `owner`: The new Owner of this asset.
 *
 *Emits `OwnerChanged`.
 *
 *Weight: `O(1)`
 */
"transfer_ownership": Anonymize<I1t8vq6a06ohhu>, 
/**
 *Change the Issuer, Admin and Freezer of an asset.
 *
 *Origin must be Signed and the sender should be the Owner of the asset `id`.
 *
 *- `id`: The identifier of the asset to be frozen.
 *- `issuer`: The new Issuer of this asset.
 *- `admin`: The new Admin of this asset.
 *- `freezer`: The new Freezer of this asset.
 *
 *Emits `TeamChanged`.
 *
 *Weight: `O(1)`
 */
"set_team": Anonymize<Icvt3pdunbinm7>, 
/**
 *Set the metadata for an asset.
 *
 *Origin must be Signed and the sender should be the Owner of the asset `id`.
 *
 *Funds of sender are reserved according to the formula:
 *`MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
 *account any already reserved funds.
 *
 *- `id`: The identifier of the asset to update.
 *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 *- `decimals`: The number of decimals this asset uses to represent one unit.
 *
 *Emits `MetadataSet`.
 *
 *Weight: `O(1)`
 */
"set_metadata": Anonymize<I9ui3n41balr2q>, 
/**
 *Clear the metadata for an asset.
 *
 *Origin must be Signed and the sender should be the Owner of the asset `id`.
 *
 *Any deposit is freed for the asset owner.
 *
 *- `id`: The identifier of the asset to clear.
 *
 *Emits `MetadataCleared`.
 *
 *Weight: `O(1)`
 */
"clear_metadata": Anonymize<Ibsk5g3rhm45pu>, 
/**
 *Force the metadata for an asset to some value.
 *
 *Origin must be ForceOrigin.
 *
 *Any deposit is left alone.
 *
 *- `id`: The identifier of the asset to update.
 *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 *- `decimals`: The number of decimals this asset uses to represent one unit.
 *
 *Emits `MetadataSet`.
 *
 *Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
 */
"force_set_metadata": Anonymize<I89sl7btgl24g2>, 
/**
 *Clear the metadata for an asset.
 *
 *Origin must be ForceOrigin.
 *
 *Any deposit is returned.
 *
 *- `id`: The identifier of the asset to clear.
 *
 *Emits `MetadataCleared`.
 *
 *Weight: `O(1)`
 */
"force_clear_metadata": Anonymize<Ibsk5g3rhm45pu>, 
/**
 *Alter the attributes of a given asset.
 *
 *Origin must be `ForceOrigin`.
 *
 *- `id`: The identifier of the asset.
 *- `owner`: The new Owner of this asset.
 *- `issuer`: The new Issuer of this asset.
 *- `admin`: The new Admin of this asset.
 *- `freezer`: The new Freezer of this asset.
 *- `min_balance`: The minimum balance of this new asset that any single account must
 *have. If an account's balance is reduced below this, then it collapses to zero.
 *- `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
 *value to account for the state bloat associated with its balance storage. If set to
 *`true`, then non-zero balances may be stored without a `consumer` reference (and thus
 *an ED in the Balances pallet or whatever else is used to control user-account state
 *growth).
 *- `is_frozen`: Whether this asset class is frozen except for permissioned/admin
 *instructions.
 *
 *Emits `AssetStatusChanged` with the identity of the asset.
 *
 *Weight: `O(1)`
 */
"force_asset_status": Anonymize<I3u6g26k9kn96u>, 
/**
 *Approve an amount of asset for transfer by a delegated third-party account.
 *
 *Origin must be Signed.
 *
 *Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
 *for the purpose of holding the approval. If some non-zero amount of assets is already
 *approved from signing account to `delegate`, then it is topped up or unreserved to
 *meet the right value.
 *
 *NOTE: The signing account does not need to own `amount` of assets at the point of
 *making this call.
 *
 *- `id`: The identifier of the asset.
 *- `delegate`: The account to delegate permission to transfer asset.
 *- `amount`: The amount of asset that may be transferred by `delegate`. If there is
 *already an approval in place, then this acts additively.
 *
 *Emits `ApprovedTransfer` on success.
 *
 *Weight: `O(1)`
 */
"approve_transfer": Anonymize<If1invp94rsjms>, 
/**
 *Cancel all of some asset approved for delegated transfer by a third-party account.
 *
 *Origin must be Signed and there must be an approval in place between signer and
 *`delegate`.
 *
 *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 *
 *- `id`: The identifier of the asset.
 *- `delegate`: The account delegated permission to transfer asset.
 *
 *Emits `ApprovalCancelled` on success.
 *
 *Weight: `O(1)`
 */
"cancel_approval": Anonymize<Ie5nc19gtiv5sv>, 
/**
 *Cancel all of some asset approved for delegated transfer by a third-party account.
 *
 *Origin must be either ForceOrigin or Signed origin with the signer being the Admin
 *account of the asset `id`.
 *
 *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 *
 *- `id`: The identifier of the asset.
 *- `delegate`: The account delegated permission to transfer asset.
 *
 *Emits `ApprovalCancelled` on success.
 *
 *Weight: `O(1)`
 */
"force_cancel_approval": Anonymize<Iald3dgvt1hjkb>, 
/**
 *Transfer some asset balance from a previously delegated account to some third-party
 *account.
 *
 *Origin must be Signed and there must be an approval in place by the `owner` to the
 *signer.
 *
 *If the entire amount approved for transfer is transferred, then any deposit previously
 *reserved by `approve_transfer` is unreserved.
 *
 *- `id`: The identifier of the asset.
 *- `owner`: The account which previously approved for a transfer of at least `amount` and
 *from which the asset balance will be withdrawn.
 *- `destination`: The account to which the asset balance of `amount` will be transferred.
 *- `amount`: The amount of assets to transfer.
 *
 *Emits `TransferredApproved` on success.
 *
 *Weight: `O(1)`
 */
"transfer_approved": Anonymize<Iurrhahet4gno>, 
/**
 *Create an asset account for non-provider assets.
 *
 *A deposit will be taken from the signer account.
 *
 *- `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
 *  to be taken.
 *- `id`: The identifier of the asset for the account to be created.
 *
 *Emits `Touched` event when successful.
 */
"touch": Anonymize<Ibsk5g3rhm45pu>, 
/**
 *Return the deposit (if any) of an asset account or a consumer reference (if any) of an
 *account.
 *
 *The origin must be Signed.
 *
 *- `id`: The identifier of the asset for which the caller would like the deposit
 *  refunded.
 *- `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
 *
 *Emits `Refunded` event when successful.
 */
"refund": Anonymize<I5tamv2nk8bj8o>, 
/**
 *Sets the minimum balance of an asset.
 *
 *Only works if there aren't any accounts that are holding the asset or if
 *the new value of `min_balance` is less than the old one.
 *
 *Origin must be Signed and the sender has to be the Owner of the
 *asset `id`.
 *
 *- `id`: The identifier of the asset.
 *- `min_balance`: The new value of `min_balance`.
 *
 *Emits `AssetMinBalanceChanged` event when successful.
 */
"set_min_balance": Anonymize<I8apq8e7c7qcpp>, 
/**
 *Create an asset account for `who`.
 *
 *A deposit will be taken from the signer account.
 *
 *- `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
 *  must have sufficient funds for a deposit to be taken.
 *- `id`: The identifier of the asset for the account to be created.
 *- `who`: The account to be created.
 *
 *Emits `Touched` event when successful.
 */
"touch_other": Anonymize<Ie4met0joi8sv0>, 
/**
 *Return the deposit (if any) of a target asset account. Useful if you are the depositor.
 *
 *The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
 *order to burn a non-zero balance of the asset, the caller must be the account and should
 *use `refund`.
 *
 *- `id`: The identifier of the asset for the account holding a deposit.
 *- `who`: The account to refund.
 *
 *Emits `Refunded` event when successful.
 */
"refund_other": Anonymize<Ie4met0joi8sv0>, 
/**
 *Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
 *
 *Origin must be Signed and the sender should be the Freezer of the asset `id`.
 *
 *- `id`: The identifier of the account's asset.
 *- `who`: The account to be unblocked.
 *
 *Emits `Blocked`.
 *
 *Weight: `O(1)`
 */
"block": Anonymize<Ie4met0joi8sv0>, 
/**
 *Transfer the entire transferable balance from the caller asset account.
 *
 *NOTE: This function only attempts to transfer _transferable_ balances. This means that
 *any held, frozen, or minimum balance (when `keep_alive` is `true`), will not be
 *transferred by this function. To ensure that this function results in a killed account,
 *you might need to prepare the account by removing any reference counters, storage
 *deposits, etc...
 *
 *The dispatch origin of this call must be Signed.
 *
 *- `id`: The identifier of the asset for the account holding a deposit.
 *- `dest`: The recipient of the transfer.
 *- `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *  of the funds the asset account has, causing the sender asset account to be killed
 *  (false), or transfer everything except at least the minimum balance, which will
 *  guarantee to keep the sender asset account alive (true).
 */
"transfer_all": Anonymize<Id1e31ij0c35fv>}>;

export type I7t2thek61ghou = {"id": Anonymize<If9iqq7i64mur8>, "admin": MultiAddress, "min_balance": bigint};

export type I61tdrsafr1vf3 = {"id": Anonymize<If9iqq7i64mur8>, "owner": MultiAddress, "is_sufficient": boolean, "min_balance": bigint};

export type Ibsk5g3rhm45pu = {"id": Anonymize<If9iqq7i64mur8>};

export type Icfoe9q8d4vs8f = {"id": Anonymize<If9iqq7i64mur8>, "beneficiary": MultiAddress, "amount": bigint};

export type Ibrfmvjrg4trnb = {"id": Anonymize<If9iqq7i64mur8>, "who": MultiAddress, "amount": bigint};

export type Iedih7t34maii9 = {"id": Anonymize<If9iqq7i64mur8>, "target": MultiAddress, "amount": bigint};

export type I4e902qbfel1f1 = {"id": Anonymize<If9iqq7i64mur8>, "source": MultiAddress, "dest": MultiAddress, "amount": bigint};

export type Ie4met0joi8sv0 = {"id": Anonymize<If9iqq7i64mur8>, "who": MultiAddress};

export type I1t8vq6a06ohhu = {"id": Anonymize<If9iqq7i64mur8>, "owner": MultiAddress};

export type Icvt3pdunbinm7 = {"id": Anonymize<If9iqq7i64mur8>, "issuer": MultiAddress, "admin": MultiAddress, "freezer": MultiAddress};

export type I9ui3n41balr2q = {"id": Anonymize<If9iqq7i64mur8>, "name": Binary, "symbol": Binary, "decimals": number};

export type I89sl7btgl24g2 = {"id": Anonymize<If9iqq7i64mur8>, "name": Binary, "symbol": Binary, "decimals": number, "is_frozen": boolean};

export type I3u6g26k9kn96u = {"id": Anonymize<If9iqq7i64mur8>, "owner": MultiAddress, "issuer": MultiAddress, "admin": MultiAddress, "freezer": MultiAddress, "min_balance": bigint, "is_sufficient": boolean, "is_frozen": boolean};

export type If1invp94rsjms = {"id": Anonymize<If9iqq7i64mur8>, "delegate": MultiAddress, "amount": bigint};

export type Ie5nc19gtiv5sv = {"id": Anonymize<If9iqq7i64mur8>, "delegate": MultiAddress};

export type Iald3dgvt1hjkb = {"id": Anonymize<If9iqq7i64mur8>, "owner": MultiAddress, "delegate": MultiAddress};

export type Iurrhahet4gno = {"id": Anonymize<If9iqq7i64mur8>, "owner": MultiAddress, "destination": MultiAddress, "amount": bigint};

export type I5tamv2nk8bj8o = {"id": Anonymize<If9iqq7i64mur8>, "allow_burn": boolean};

export type I8apq8e7c7qcpp = {"id": Anonymize<If9iqq7i64mur8>, "min_balance": bigint};

export type Id1e31ij0c35fv = {"id": Anonymize<If9iqq7i64mur8>, "dest": MultiAddress, "keep_alive": boolean};

export type Ifrervtb291iin = AnonymousEnum<{
/**
 *Lock the NFT and mint a new fungible asset.
 *
 *The dispatch origin for this call must be Signed.
 *The origin must be the owner of the NFT they are trying to lock.
 *
 *`Deposit` funds of sender are reserved.
 *
 *- `nft_collection_id`: The ID used to identify the collection of the NFT.
 *Is used within the context of `pallet_nfts`.
 *- `nft_id`: The ID used to identify the NFT within the given collection.
 *Is used within the context of `pallet_nfts`.
 *- `asset_id`: The ID of the new asset. It must not exist.
 *Is used within the context of `pallet_assets`.
 *- `beneficiary`: The account that will receive the newly created asset.
 *- `fractions`: The total issuance of the newly created asset class.
 *
 *Emits `NftFractionalized` event when successful.
 */
"fractionalize": Anonymize<I9gf2bs80kgbnk>, 
/**
 *Burn the total issuance of the fungible asset and return (unlock) the locked NFT.
 *
 *The dispatch origin for this call must be Signed.
 *
 *`Deposit` funds will be returned to `asset_creator`.
 *
 *- `nft_collection_id`: The ID used to identify the collection of the NFT.
 *Is used within the context of `pallet_nfts`.
 *- `nft_id`: The ID used to identify the NFT within the given collection.
 *Is used within the context of `pallet_nfts`.
 *- `asset_id`: The ID of the asset being returned and destroyed. Must match
 *the original ID of the created asset, corresponding to the NFT.
 *Is used within the context of `pallet_assets`.
 *- `beneficiary`: The account that will receive the unified NFT.
 *
 *Emits `NftUnified` event when successful.
 */
"unify": Anonymize<I5urb3tva4ave5>}>;

export type I9gf2bs80kgbnk = {"nft_collection_id": number, "nft_id": number, "asset_id": number, "beneficiary": MultiAddress, "fractions": bigint};

export type I5urb3tva4ave5 = {"nft_collection_id": number, "nft_id": number, "asset_id": number, "beneficiary": MultiAddress};

export type Ia06pia7pbkurh = AnonymousEnum<{
/**
 *Creates an empty liquidity pool and an associated new `lp_token` asset
 *(the id of which is returned in the `Event::PoolCreated` event).
 *
 *Once a pool is created, someone may [`Pallet::add_liquidity`] to it.
 */
"create_pool": Anonymize<I3ip09dj7i1e8n>, 
/**
 *Provide liquidity into the pool of `asset1` and `asset2`.
 *NOTE: an optimal amount of asset1 and asset2 will be calculated and
 *might be different than the provided `amount1_desired`/`amount2_desired`
 *thus you should provide the min amount you're happy to provide.
 *Params `amount1_min`/`amount2_min` represent that.
 *`mint_to` will be sent the liquidity tokens that represent this share of the pool.
 *
 *NOTE: when encountering an incorrect exchange rate and non-withdrawable pool liquidity,
 *batch an atomic call with [`Pallet::add_liquidity`] and
 *[`Pallet::swap_exact_tokens_for_tokens`] or [`Pallet::swap_tokens_for_exact_tokens`]
 *calls to render the liquidity withdrawable and rectify the exchange rate.
 *
 *Once liquidity is added, someone may successfully call
 *[`Pallet::swap_exact_tokens_for_tokens`].
 */
"add_liquidity": Anonymize<Ide34bfv94bvut>, 
/**
 *Allows you to remove liquidity by providing the `lp_token_burn` tokens that will be
 *burned in the process. With the usage of `amount1_min_receive`/`amount2_min_receive`
 *it's possible to control the min amount of returned tokens you're happy with.
 */
"remove_liquidity": Anonymize<I6c7mabde89bp>, 
/**
 *Swap the exact amount of `asset1` into `asset2`.
 *`amount_out_min` param allows you to specify the min amount of the `asset2`
 *you're happy to receive.
 *
 *[`AssetConversionApi::quote_price_exact_tokens_for_tokens`] runtime call can be called
 *for a quote.
 */
"swap_exact_tokens_for_tokens": Anonymize<I9sbpodgd8ilku>, 
/**
 *Swap any amount of `asset1` to get the exact amount of `asset2`.
 *`amount_in_max` param allows to specify the max amount of the `asset1`
 *you're happy to provide.
 *
 *[`AssetConversionApi::quote_price_tokens_for_exact_tokens`] runtime call can be called
 *for a quote.
 */
"swap_tokens_for_exact_tokens": Anonymize<Ialnqi1f4kpb>, 
/**
 *Touch an existing pool to fulfill prerequisites before providing liquidity, such as
 *ensuring that the pool's accounts are in place. It is typically useful when a pool
 *creator removes the pool's accounts and does not provide a liquidity. This action may
 *involve holding assets from the caller as a deposit for creating the pool's accounts.
 *
 *The origin must be Signed.
 *
 *- `asset1`: The asset ID of an existing pool with a pair (asset1, asset2).
 *- `asset2`: The asset ID of an existing pool with a pair (asset1, asset2).
 *
 *Emits `Touched` event when successful.
 */
"touch": Anonymize<I3ip09dj7i1e8n>}>;

export type I3ip09dj7i1e8n = {"asset1": Anonymize<If9iqq7i64mur8>, "asset2": Anonymize<If9iqq7i64mur8>};

export type Ide34bfv94bvut = {"asset1": Anonymize<If9iqq7i64mur8>, "asset2": Anonymize<If9iqq7i64mur8>, "amount1_desired": bigint, "amount2_desired": bigint, "amount1_min": bigint, "amount2_min": bigint, "mint_to": SS58String};

export type I6c7mabde89bp = {"asset1": Anonymize<If9iqq7i64mur8>, "asset2": Anonymize<If9iqq7i64mur8>, "lp_token_burn": bigint, "amount1_min_receive": bigint, "amount2_min_receive": bigint, "withdraw_to": SS58String};

export type I9sbpodgd8ilku = {"path": Anonymize<I40r0k8147eovg>, "amount_in": bigint, "amount_out_min": bigint, "send_to": SS58String, "keep_alive": boolean};

export type I40r0k8147eovg = Array<Anonymize<If9iqq7i64mur8>>;

export type Ialnqi1f4kpb = {"path": Anonymize<I40r0k8147eovg>, "amount_out": bigint, "amount_in_max": bigint, "send_to": SS58String, "keep_alive": boolean};

export type I77gr8mjbg2r9f = AnonymousEnum<{
/**
 *A raw EVM transaction, typically dispatched by an Ethereum JSON-RPC server.
 *
 *# Parameters
 *
 ** `payload`: The encoded [`crate::evm::TransactionSigned`].
 ** `gas_limit`: The gas limit enforced during contract execution.
 ** `storage_deposit_limit`: The maximum balance that can be charged to the caller for
 *  storage usage.
 *
 *# Note
 *
 *This call cannot be dispatched directly; attempting to do so will result in a failed
 *transaction. It serves as a wrapper for an Ethereum transaction. When submitted, the
 *runtime converts it into a [`sp_runtime::generic::CheckedExtrinsic`] by recovering the
 *signer and validating the transaction.
 */
"eth_transact": Anonymize<Ida37oe44osb06>, 
/**
 *Makes a call to an account, optionally transferring some balance.
 *
 *# Parameters
 *
 ** `dest`: Address of the contract to call.
 ** `value`: The balance to transfer from the `origin` to `dest`.
 ** `gas_limit`: The gas limit enforced when executing the constructor.
 ** `storage_deposit_limit`: The maximum amount of balance that can be charged from the
 *  caller to pay for the storage consumed.
 ** `data`: The input data to pass to the contract.
 *
 ** If the account is a smart-contract account, the associated code will be
 *executed and any value will be transferred.
 ** If the account is a regular account, any value will be transferred.
 ** If no account exists and the call value is not less than `existential_deposit`,
 *a regular account will be created and any value will be transferred.
 */
"call": Anonymize<Idsg8aod8e8fqn>, 
/**
 *Instantiates a contract from a previously deployed wasm binary.
 *
 *This function is identical to [`Self::instantiate_with_code`] but without the
 *code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
 *must be supplied.
 */
"instantiate": Anonymize<I46nktn22m6hbi>, 
/**
 *Instantiates a new contract from the supplied `code` optionally transferring
 *some balance.
 *
 *This dispatchable has the same effect as calling [`Self::upload_code`] +
 *[`Self::instantiate`]. Bundling them together provides efficiency gains. Please
 *also check the documentation of [`Self::upload_code`].
 *
 *# Parameters
 *
 ** `value`: The balance to transfer from the `origin` to the newly created contract.
 ** `gas_limit`: The gas limit enforced when executing the constructor.
 ** `storage_deposit_limit`: The maximum amount of balance that can be charged/reserved
 *  from the caller to pay for the storage consumed.
 ** `code`: The contract code to deploy in raw bytes.
 ** `data`: The input data to pass to the contract constructor.
 ** `salt`: Used for the address derivation. If `Some` is supplied then `CREATE2`
 *	semantics are used. If `None` then `CRATE1` is used.
 *
 *
 *Instantiation is executed as follows:
 *
 *- The supplied `code` is deployed, and a `code_hash` is created for that code.
 *- If the `code_hash` already exists on the chain the underlying `code` will be shared.
 *- The destination address is computed based on the sender, code_hash and the salt.
 *- The smart-contract account is created at the computed address.
 *- The `value` is transferred to the new account.
 *- The `deploy` function is executed in the context of the newly-created account.
 */
"instantiate_with_code": Anonymize<Ibgj1cthra7lte>, 
/**
 *Upload new `code` without instantiating a contract from it.
 *
 *If the code does not already exist a deposit is reserved from the caller
 *and unreserved only when [`Self::remove_code`] is called. The size of the reserve
 *depends on the size of the supplied `code`.
 *
 *# Note
 *
 *Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
 *To avoid this situation a constructor could employ access control so that it can
 *only be instantiated by permissioned entities. The same is true when uploading
 *through [`Self::instantiate_with_code`].
 */
"upload_code": Anonymize<I10ra4g1rl6k2f>, 
/**
 *Remove the code stored under `code_hash` and refund the deposit to its owner.
 *
 *A code can only be removed by its original uploader (its owner) and only if it is
 *not used by any contract.
 */
"remove_code": Anonymize<Ib51vk42m1po4n>, 
/**
 *Privileged function that changes the code of an existing contract.
 *
 *This takes care of updating refcounts and all other necessary operations. Returns
 *an error if either the `code_hash` or `dest` do not exist.
 *
 *# Note
 *
 *This does **not** change the address of the contract in question. This means
 *that the contract address is no longer derived from its code hash after calling
 *this dispatchable.
 */
"set_code": Anonymize<I1uihehkdsggvp>, 
/**
 *Register the callers account id so that it can be used in contract interactions.
 *
 *This will error if the origin is already mapped or is a eth native `Address20`. It will
 *take a deposit that can be released by calling [`Self::unmap_account`].
 */
"map_account": undefined, 
/**
 *Unregister the callers account id in order to free the deposit.
 *
 *There is no reason to ever call this function other than freeing up the deposit.
 *This is only useful when the account should no longer be used.
 */
"unmap_account": undefined, 
/**
 *Dispatch an `call` with the origin set to the callers fallback address.
 *
 *Every `AccountId32` can control its corresponding fallback account. The fallback account
 *is the `AccountId20` with the last 12 bytes set to `0xEE`. This is essentially a
 *recovery function in case an `AccountId20` was used without creating a mapping first.
 */
"dispatch_as_fallback_account": Anonymize<Iai3ge79tbfv63>}>;

export type Ida37oe44osb06 = {"payload": Binary};

export type Idsg8aod8e8fqn = {"dest": FixedSizeBinary<20>, "value": bigint, "gas_limit": Anonymize<I4q39t5hn830vp>, "storage_deposit_limit": bigint, "data": Binary};

export type I46nktn22m6hbi = {"value": bigint, "gas_limit": Anonymize<I4q39t5hn830vp>, "storage_deposit_limit": bigint, "code_hash": FixedSizeBinary<32>, "data": Binary, "salt"?: Anonymize<I4s6vifaf8k998>};

export type Ibgj1cthra7lte = {"value": bigint, "gas_limit": Anonymize<I4q39t5hn830vp>, "storage_deposit_limit": bigint, "code": Binary, "data": Binary, "salt"?: Anonymize<I4s6vifaf8k998>};

export type I10ra4g1rl6k2f = {"code": Binary, "storage_deposit_limit": bigint};

export type I1uihehkdsggvp = {"dest": FixedSizeBinary<20>, "code_hash": FixedSizeBinary<32>};

export type Iai3ge79tbfv63 = {"call": TxCallData};

export type I6i7hgo4s9982m = AnonymousEnum<{
/**
 *Create a new reward pool.
 *
 *Parameters:
 *- `origin`: must be `Config::CreatePoolOrigin`;
 *- `staked_asset_id`: the asset to be staked in the pool;
 *- `reward_asset_id`: the asset to be distributed as rewards;
 *- `reward_rate_per_block`: the amount of reward tokens distributed per block;
 *- `expiry`: the block number at which the pool will cease to accumulate rewards. The
 *  [`DispatchTime::After`] variant evaluated at the execution time.
 *- `admin`: the account allowed to extend the pool expiration, increase the rewards rate
 *  and receive the unutilized reward tokens back after the pool completion. If `None`,
 *  the caller is set as an admin.
 */
"create_pool": Anonymize<I74kb3a509j58b>, 
/**
 *Stake additional tokens in a pool.
 *
 *A freeze is placed on the staked tokens.
 */
"stake": Anonymize<Ieg1oc56mamrl5>, 
/**
 *Unstake tokens from a pool.
 *
 *Removes the freeze on the staked tokens.
 *
 *Parameters:
 *- origin: must be the `staker` if the pool is still active. Otherwise, any account.
 *- pool_id: the pool to unstake from.
 *- amount: the amount of tokens to unstake.
 *- staker: the account to unstake from. If `None`, the caller is used.
 */
"unstake": Anonymize<If4c254req52io>, 
/**
 *Harvest unclaimed pool rewards.
 *
 *Parameters:
 *- origin: must be the `staker` if the pool is still active. Otherwise, any account.
 *- pool_id: the pool to harvest from.
 *- staker: the account for which to harvest rewards. If `None`, the caller is used.
 */
"harvest_rewards": Anonymize<Ifvms3ocl3df16>, 
/**
 *Modify a pool reward rate.
 *
 *Currently the reward rate can only be increased.
 *
 *Only the pool admin may perform this operation.
 */
"set_pool_reward_rate_per_block": Anonymize<I3fl7kvh9tccu2>, 
/**
 *Modify a pool admin.
 *
 *Only the pool admin may perform this operation.
 */
"set_pool_admin": Anonymize<I51711mrb372ih>, 
/**
 *Set when the pool should expire.
 *
 *Currently the expiry block can only be extended.
 *
 *Only the pool admin may perform this operation.
 */
"set_pool_expiry_block": Anonymize<Iautv23q3c0gko>, 
/**
 *Convenience method to deposit reward tokens into a pool.
 *
 *This method is not strictly necessary (tokens could be transferred directly to the
 *pool pot address), but is provided for convenience so manual derivation of the
 *account id is not required.
 */
"deposit_reward_tokens": Anonymize<Ieg1oc56mamrl5>, 
/**
 *Cleanup a pool.
 *
 *Origin must be the pool admin.
 *
 *Cleanup storage, release any associated storage cost and return the remaining reward
 *tokens to the admin.
 */
"cleanup_pool": Anonymize<I931cottvong90>}>;

export type I74kb3a509j58b = {"staked_asset_id": Anonymize<If9iqq7i64mur8>, "reward_asset_id": Anonymize<If9iqq7i64mur8>, "reward_rate_per_block": bigint, "expiry": TraitsScheduleDispatchTime, "admin"?: Anonymize<Ihfphjolmsqq1>};

export type TraitsScheduleDispatchTime = Enum<{"At": number, "After": number}>;
export const TraitsScheduleDispatchTime = _Enum as unknown as GetEnum<TraitsScheduleDispatchTime>;

export type Ieg1oc56mamrl5 = {"pool_id": number, "amount": bigint};

export type If4c254req52io = {"pool_id": number, "amount": bigint, "staker"?: Anonymize<Ihfphjolmsqq1>};

export type Ifvms3ocl3df16 = {"pool_id": number, "staker"?: Anonymize<Ihfphjolmsqq1>};

export type Iautv23q3c0gko = {"pool_id": number, "new_expiry": TraitsScheduleDispatchTime};

export type I39l72gdmkk30t = AnonymousEnum<{
/**
 *Control the automatic migration.
 *
 *The dispatch origin of this call must be [`Config::ControlOrigin`].
 */
"control_auto_migration": Anonymize<I7psec5e6ghc64>, 
/**
 *Continue the migration for the given `limits`.
 *
 *The dispatch origin of this call can be any signed account.
 *
 *This transaction has NO MONETARY INCENTIVES. calling it will not reward anyone. Albeit,
 *Upon successful execution, the transaction fee is returned.
 *
 *The (potentially over-estimated) of the byte length of all the data read must be
 *provided for up-front fee-payment and weighing. In essence, the caller is guaranteeing
 *that executing the current `MigrationTask` with the given `limits` will not exceed
 *`real_size_upper` bytes of read data.
 *
 *The `witness_task` is merely a helper to prevent the caller from being slashed or
 *generally trigger a migration that they do not intend. This parameter is just a message
 *from caller, saying that they believed `witness_task` was the last state of the
 *migration, and they only wish for their transaction to do anything, if this assumption
 *holds. In case `witness_task` does not match, the transaction fails.
 *
 *Based on the documentation of [`MigrationTask::migrate_until_exhaustion`], the
 *recommended way of doing this is to pass a `limit` that only bounds `count`, as the
 *`size` limit can always be overwritten.
 */
"continue_migrate": Anonymize<I2psb0sladd863>, 
/**
 *Migrate the list of top keys by iterating each of them one by one.
 *
 *This does not affect the global migration process tracker ([`MigrationProcess`]), and
 *should only be used in case any keys are leftover due to a bug.
 */
"migrate_custom_top": Anonymize<I585tk8khua0gk>, 
/**
 *Migrate the list of child keys by iterating each of them one by one.
 *
 *All of the given child keys must be present under one `child_root`.
 *
 *This does not affect the global migration process tracker ([`MigrationProcess`]), and
 *should only be used in case any keys are leftover due to a bug.
 */
"migrate_custom_child": Anonymize<I3ut99di214ru2>, 
/**
 *Set the maximum limit of the signed migration.
 */
"set_signed_max_limits": Anonymize<Iemkp87d26vsbh>, 
/**
 *Forcefully set the progress the running migration.
 *
 *This is only useful in one case: the next key to migrate is too big to be migrated with
 *a signed account, in a parachain context, and we simply want to skip it. A reasonable
 *example of this would be `:code:`, which is both very expensive to migrate, and commonly
 *used, so probably it is already migrated.
 *
 *In case you mess things up, you can also, in principle, use this to reset the migration
 *process.
 */
"force_set_progress": Anonymize<I4ahfrt5dscf6q>}>;

export type I7psec5e6ghc64 = {"maybe_config"?: Anonymize<Ib17t3992hb64n>};

export type I2psb0sladd863 = {"limits": Anonymize<I215mkl885p4da>, "real_size_upper": number, "witness_task": Anonymize<If354jrdedj0pj>};

export type I585tk8khua0gk = {"keys": Anonymize<Itom7fk49o0c9>, "witness_size": number};

export type I3ut99di214ru2 = {"root": Binary, "child_keys": Anonymize<Itom7fk49o0c9>, "total_size": number};

export type Iemkp87d26vsbh = {"limits": Anonymize<I215mkl885p4da>};

export type I4ahfrt5dscf6q = {"progress_top": Anonymize<I1ufmh6d8psvik>, "progress_child": Anonymize<I1ufmh6d8psvik>};

export type Ib85ihi0vt50bd = AnonymousEnum<{
/**
 *Migrates an existing pool to a new account ID derivation method for a given asset pair.
 *If the migration is successful, transaction fees are refunded to the caller.
 *
 *Must be signed.
 */
"migrate_to_new_account": Anonymize<I3ip09dj7i1e8n>}>;

export type Iaqet9jc3ihboe = {"header": Anonymize<Ic952bubvq4k7d>, "extrinsics": Anonymize<Itom7fk49o0c9>};

export type Ic952bubvq4k7d = {"parent_hash": FixedSizeBinary<32>, "number": number, "state_root": FixedSizeBinary<32>, "extrinsics_root": FixedSizeBinary<32>, "digest": Anonymize<I4mddgoa69c0a2>};

export type I2v50gu3s1aqk6 = AnonymousEnum<{"AllExtrinsics": undefined, "OnlyInherents": undefined}>;

export type Id9ta6ebrjtpji = ResultPayload<Anonymize<I97nrbjju21ave>, Anonymize<I5nrjkj9qumobs>>;

export type I5nrjkj9qumobs = AnonymousEnum<{"Invalid": Enum<{"Call": undefined, "Payment": undefined, "Future": undefined, "Stale": undefined, "BadProof": undefined, "AncientBirthBlock": undefined, "ExhaustsResources": undefined, "Custom": number, "BadMandatory": undefined, "MandatoryValidation": undefined, "BadSigner": undefined, "IndeterminateImplicit": undefined, "UnknownOrigin": undefined}>, "Unknown": TransactionValidityUnknownTransaction}>;

export type TransactionValidityUnknownTransaction = Enum<{"CannotLookup": undefined, "NoUnsignedValidator": undefined, "Custom": number}>;
export const TransactionValidityUnknownTransaction = _Enum as unknown as GetEnum<TransactionValidityUnknownTransaction>;

export type If7uv525tdvv7a = Array<[FixedSizeBinary<8>, Binary]>;

export type I2an1fs2eiebjp = {"okay": boolean, "fatal_error": boolean, "errors": Anonymize<If7uv525tdvv7a>};

export type TransactionValidityTransactionSource = Enum<{"InBlock": undefined, "Local": undefined, "External": undefined}>;
export const TransactionValidityTransactionSource = _Enum as unknown as GetEnum<TransactionValidityTransactionSource>;

export type I9ask1o4tfvcvs = ResultPayload<{"priority": bigint, "requires": Anonymize<Itom7fk49o0c9>, "provides": Anonymize<Itom7fk49o0c9>, "longevity": bigint, "propagate": boolean}, Anonymize<I5nrjkj9qumobs>>;

export type Icerf8h8pdu8ss = (Array<[Binary, FixedSizeBinary<4>]>) | undefined;

export type I5vv5n03oo8gas = (Anonymize<I200n1ov5tbcvr>) | undefined;

export type I200n1ov5tbcvr = FixedSizeArray<2, bigint>;

export type I6spmpef2c7svf = {"weight": Anonymize<I4q39t5hn830vp>, "class": DispatchClass, "partial_fee": bigint};

export type Iei2mvq0mjvt81 = {"inclusion_fee"?: ({"base_fee": bigint, "len_fee": bigint, "adjusted_weight_fee": bigint}) | undefined, "tip": bigint};

export type Iftvbctbo05fu4 = ResultPayload<Array<XcmVersionedAssetId>, Anonymize<Iavct6f844hfju>>;

export type Iavct6f844hfju = AnonymousEnum<{"Unimplemented": undefined, "VersionedConversionFailed": undefined, "WeightNotComputable": undefined, "UnhandledXcmVersion": undefined, "AssetNotFound": undefined, "Unroutable": undefined}>;

export type Ic0c3req3mlc1l = ResultPayload<Anonymize<I4q39t5hn830vp>, Anonymize<Iavct6f844hfju>>;

export type I7ocn4njqde3v5 = ResultPayload<bigint, Anonymize<Iavct6f844hfju>>;

export type Iek7ha36da9mf5 = ResultPayload<XcmVersionedAssets, Anonymize<Iavct6f844hfju>>;

export type Idhl1m6bneg903 = AnonymousEnum<{"System": Anonymize<Iekve0i6djpd9f>, "ParachainSystem": Anonymize<I5kev21p7u6ajb>, "Timestamp": Anonymize<I7d75gqfg6jh9c>, "ParachainInfo": undefined, "MultiBlockMigrations": Anonymize<I4oqb168b2d4er>, "Balances": Anonymize<I9svldsp29mh87>, "CollatorSelection": Anonymize<I9dpq5287dur8b>, "Session": Anonymize<I77dda7hps0u37>, "XcmpQueue": Anonymize<Ib7tahn20bvsep>, "PolkadotXcm": Anonymize<I4up31a3q8cjhp>, "CumulusXcm": undefined, "ToRococoXcmRouter": Anonymize<I6epb28bkd5aqn>, "MessageQueue": Anonymize<Ic2uoe7jdksosp>, "Utility": Anonymize<I474v425r9om8h>, "Multisig": Anonymize<Iai5gqeafj5h3c>, "Proxy": Anonymize<I7gt29leqc522>, "Assets": Anonymize<I84851acvod2ic>, "Uniques": Anonymize<Icu49uv7rfej74>, "Nfts": Anonymize<I1k4il7i5elhc7>, "ForeignAssets": Anonymize<I1botoq1mmhfag>, "NftFractionalization": Anonymize<Ifrervtb291iin>, "PoolAssets": Anonymize<I84851acvod2ic>, "AssetConversion": Anonymize<Ia06pia7pbkurh>, "Revive": Anonymize<I77gr8mjbg2r9f>, "AssetRewards": Anonymize<I6i7hgo4s9982m>, "StateTrieMigration": Anonymize<I39l72gdmkk30t>, "AssetConversionMigration": Anonymize<Ib85ihi0vt50bd>}>;

export type I7935irqhf33gn = ResultPayload<{"execution_result": ResultPayload<Anonymize<Ia1u1r3n74r13c>, {"post_info": Anonymize<Ia1u1r3n74r13c>, "error": Anonymize<I4umgp8a2i7jfd>}>, "emitted_events": Anonymize<I8dfntsjbhfua4>, "local_xcm"?: (XcmVersionedXcm) | undefined, "forwarded_xcms": Anonymize<Ialhmrpub9sefe>}, Anonymize<I55ku9c5gk50hb>>;

export type Ia1u1r3n74r13c = {"actual_weight"?: Anonymize<Iasb8k6ash5mjn>, "pays_fee": Anonymize<Iehg04bj71rkd>};

export type I8dfntsjbhfua4 = Array<Anonymize<I2poiquoa14q47>>;

export type Ialhmrpub9sefe = Array<[XcmVersionedLocation, Array<XcmVersionedXcm>]>;

export type I55ku9c5gk50hb = AnonymousEnum<{"Unimplemented": undefined, "VersionedConversionFailed": undefined}>;

export type Ibd4all3ej0nk1 = ResultPayload<{"execution_result": Anonymize<I6uq5gb4s805s7>, "emitted_events": Anonymize<I8dfntsjbhfua4>, "forwarded_xcms": Anonymize<Ialhmrpub9sefe>}, Anonymize<I55ku9c5gk50hb>>;

export type Ieh6nis3hdbtgi = ResultPayload<SS58String, Enum<{"Unsupported": undefined, "VersionedConversionFailed": undefined}>>;

export type I8fk5filgollou = ResultPayload<XcmVersionedAssets, Enum<{"AssetIdConversionFailed": undefined, "AmountToBalanceConversionFailed": undefined}>>;

export type Ic1d4u2opv3fst = {"upward_messages": Anonymize<Itom7fk49o0c9>, "horizontal_messages": Anonymize<I6r5cbv8ttrb09>, "new_validation_code"?: Anonymize<Iabpgqcjikia83>, "processed_downward_messages": number, "hrmp_watermark": number, "head_data": Binary};

export type Ie9sr1iqcg3cgm = ResultPayload<undefined, string>;

export type I1mqgk2tmnn9i2 = (string) | undefined;

export type I6lr8sctk0bi4e = Array<string>;

export type XcmVersionedAsset = Enum<{"V3": Anonymize<Idcm24504c8bkk>, "V4": Anonymize<Ia5l7mu5a6v49o>, "V5": Anonymize<Iffh1nc5e1mod6>}>;
export const XcmVersionedAsset = _Enum as unknown as GetEnum<XcmVersionedAsset>;

export type Icujp6hmv35vbn = ResultPayload<boolean, Enum<{"VersionedAssetConversionFailed": undefined, "VersionedLocationConversionFailed": undefined}>>;

export type I4totqt881mlti = FixedSizeArray<4, bigint>;

export type Icgfji0ja9av2c = {"gas_consumed": Anonymize<I4q39t5hn830vp>, "gas_required": Anonymize<I4q39t5hn830vp>, "storage_deposit": Anonymize<If7bmpttbdmqu4>, "result": ResultPayload<Anonymize<I620n7irgfspm4>, Anonymize<I4umgp8a2i7jfd>>};

export type If7bmpttbdmqu4 = AnonymousEnum<{"Refund": bigint, "Charge": bigint}>;

export type I620n7irgfspm4 = {"flags": number, "data": Binary};

export type I9sijb8gfrns29 = AnonymousEnum<{"Upload": Binary, "Existing": FixedSizeBinary<32>}>;

export type Iumo3pjmsjmjv = {"gas_consumed": Anonymize<I4q39t5hn830vp>, "gas_required": Anonymize<I4q39t5hn830vp>, "storage_deposit": Anonymize<If7bmpttbdmqu4>, "result": ResultPayload<Anonymize<I6cm3omaniofs7>, Anonymize<I4umgp8a2i7jfd>>};

export type I6cm3omaniofs7 = {"result": Anonymize<I620n7irgfspm4>, "addr": FixedSizeBinary<20>};

export type I741pl2pidmim6 = {"access_list"?: (Array<{"address": FixedSizeBinary<20>, "storage_keys": Anonymize<Ic5m5lp1oioo8r>}>) | undefined, "blob_versioned_hashes": Anonymize<Ic5m5lp1oioo8r>, "blobs": Anonymize<Itom7fk49o0c9>, "chain_id"?: Anonymize<Ic4rgfgksgmm3e>, "from"?: Anonymize<If7b8240vgt2q5>, "gas"?: Anonymize<Ic4rgfgksgmm3e>, "gas_price"?: Anonymize<Ic4rgfgksgmm3e>, "input": {"input"?: Anonymize<Iabpgqcjikia83>, "data"?: Anonymize<Iabpgqcjikia83>}, "max_fee_per_blob_gas"?: Anonymize<Ic4rgfgksgmm3e>, "max_fee_per_gas"?: Anonymize<Ic4rgfgksgmm3e>, "max_priority_fee_per_gas"?: Anonymize<Ic4rgfgksgmm3e>, "nonce"?: Anonymize<Ic4rgfgksgmm3e>, "to"?: Anonymize<If7b8240vgt2q5>, "r#type"?: Anonymize<I4arjljr6dpflb>, "value"?: Anonymize<Ic4rgfgksgmm3e>};

export type Ic4rgfgksgmm3e = (Anonymize<I4totqt881mlti>) | undefined;

export type If7b8240vgt2q5 = (FixedSizeBinary<20>) | undefined;

export type I8abab09ak4pi1 = ResultPayload<{"gas_required": Anonymize<I4q39t5hn830vp>, "storage_deposit": bigint, "eth_gas": Anonymize<I4totqt881mlti>, "data": Binary}, Anonymize<I8mb9f26m2cgi5>>;

export type I8mb9f26m2cgi5 = AnonymousEnum<{"Data": Binary, "Message": string}>;

export type I7n3jto4hu0ttd = ResultPayload<Anonymize<Icjs1v5avc8kdj>, Anonymize<I4umgp8a2i7jfd>>;

export type Icjs1v5avc8kdj = {"code_hash": FixedSizeBinary<32>, "deposit": bigint};

export type Iehnkjehe1oeva = ResultPayload<Anonymize<Iabpgqcjikia83>, Enum<{"DoesntExist": undefined, "KeyDecodingFailed": undefined}>>;

export type Ifbmd9e2argcmg = AnonymousEnum<{"CallTracer": {"with_logs": boolean}}>;

export type I2bl5e7he0kaq9 = Array<[number, Anonymize<Icvq0fpjdcem8r>]>;

export type Icvq0fpjdcem8r = {"from": FixedSizeBinary<20>, "gas": Anonymize<I4totqt881mlti>, "gas_used": Anonymize<I4totqt881mlti>, "to": FixedSizeBinary<20>, "input": Binary, "output": Binary, "error"?: Anonymize<I1mqgk2tmnn9i2>, "revert_reason"?: Anonymize<I1mqgk2tmnn9i2>, "calls": Array<Anonymize<Icvq0fpjdcem8r>>, "logs": Array<{"address": FixedSizeBinary<20>, "topics": Anonymize<Ic5m5lp1oioo8r>, "data": Binary, "position": number}>, "value"?: Anonymize<Ic4rgfgksgmm3e>, "call_type": Enum<{"Call": undefined, "StaticCall": undefined, "DelegateCall": undefined}>};

export type I2d63hfvrckrkc = (Anonymize<Icvq0fpjdcem8r>) | undefined;

export type Ibabtpgk9h20k6 = ResultPayload<Anonymize<Icvq0fpjdcem8r>, Anonymize<I8mb9f26m2cgi5>>;

export type I5tgt1oqpjc7ju = Array<{"phase": Phase, "event": Enum<{"System": Anonymize<I31lcoro3dist3>, "Utility": Anonymize<I2nrtiteqp4rd9>, "Indices": Anonymize<I2pejk6do5vg4t>, "Balances": Anonymize<Iao8h4hv7atnq3>, "TransactionPayment": TransactionPaymentEvent, "AssetConversionTxPayment": Anonymize<Ieo4sgn12rge3o>, "ElectionProviderMultiPhase": ElectionProviderMultiPhaseEvent, "Staking": Anonymize<I8n4qjnlkvth8n>, "Session": Anonymize<I4co4bgsti676q>, "Democracy": Anonymize<Icfq8ap3e5p73t>, "Council": Anonymize<Ic72jud9f25nt9>, "TechnicalCommittee": Anonymize<Ic72jud9f25nt9>, "Elections": Anonymize<I4iamd5rd51ec2>, "TechnicalMembership": Anonymize<Ibraem55mlft17>, "Grandpa": GrandpaEvent, "Treasury": Anonymize<I157i60je71dq5>, "AssetRate": Anonymize<Id1m1nmkttfi5>, "Contracts": Anonymize<I211sbjvh5hjqu>, "Sudo": Anonymize<Iegb4cbcv21pl>, "ImOnline": Anonymize<I9ech588pscqur>, "Offences": OffencesEvent, "Identity": Anonymize<I2au2or9cskfoi>, "Society": Anonymize<Ifhcq78pr9md4e>, "Recovery": RecoveryEvent, "Vesting": VestingEvent, "Scheduler": Anonymize<I6357idnghhlp>, "Glutton": Anonymize<I425r46k4e6lh7>, "Preimage": PreimageEvent, "Proxy": Anonymize<I8j7hgnilb7ndf>, "Multisig": Anonymize<I66gr3eqlgv5lv>, "Bounties": BountiesEvent, "Tips": Anonymize<Imaosic05it19>, "Assets": Anonymize<I6avancvg8fd05>, "PoolAssets": Anonymize<I6avancvg8fd05>, "Lottery": Anonymize<I8vg8ohhden12t>, "Nis": Anonymize<I9dmlhfape78ke>, "Uniques": Anonymize<Ia0j71vjrjqu9p>, "Nfts": Anonymize<I6qicn8jn4fftj>, "NftFractionalization": Anonymize<I41s7j0hsp2u0b>, "Salary": Anonymize<I27m52gdafk6nc>, "CoreFellowship": Anonymize<I2bqfnlnlvs6f0>, "TransactionStorage": Anonymize<Iavj2l461j66eo>, "VoterList": BagsListEvent, "StateTrieMigration": Anonymize<I61dksvl51aujo>, "ChildBounties": ChildBountiesEvent, "Referenda": Anonymize<Idfraa3b4eu018>, "Remark": Anonymize<I1gmbkg2e44dlb>, "RootTesting": RootTestingEvent, "ConvictionVoting": Anonymize<I7tvgbf73o5td4>, "Whitelist": Anonymize<If20j6dqn1mdl2>, "AllianceMotion": Anonymize<Ic72jud9f25nt9>, "Alliance": Anonymize<Ieqqqv5fkfk9gi>, "NominationPools": Anonymize<Id0dkgikq71n9h>, "RankedPolls": Anonymize<I28aoa43r171jt>, "RankedCollective": Anonymize<Ifuucdgpuglunu>, "AssetConversion": Anonymize<Icg9s7i4r0ihvp>, "FastUnstake": Anonymize<Ief7s57i7nmf6b>, "MessageQueue": Anonymize<Icic0qj7skuv5g>, "Pov": Anonymize<I70u6ecpmp0tni>, "TxPause": Anonymize<I9ulgod11dfvq5>, "SafeMode": Anonymize<I3q8c83f5dvokp>, "Statement": Anonymize<Ic1vdi0e9te2la>, "MultiBlockMigrations": Anonymize<I94co7vj7h6bo>, "Broker": Anonymize<I8oh7vfem3j5g8>, "Parameters": Anonymize<I6g97r20i52jd6>, "SkipFeelessPayment": Anonymize<I21cggb5bsclgu>, "AssetConversionMigration": Anonymize<Ib66g80vn94f4v>, "Revive": Anonymize<I3vl9org1c535t>, "DelegatedStaking": Anonymize<I1nq1se98idofq>, "AssetRewards": Anonymize<I7q0siirsetnoe>, "AssetsFreezer": Anonymize<I7omheqbc53plq>, "MetaTx": Anonymize<Imkk4d0dll6in>}>, "topics": Anonymize<Ic5m5lp1oioo8r>}>;

export type I31lcoro3dist3 = AnonymousEnum<{
/**
 *An extrinsic completed successfully.
 */
"ExtrinsicSuccess": Anonymize<Ia82mnkmeo2rhc>, 
/**
 *An extrinsic failed.
 */
"ExtrinsicFailed": Anonymize<I46cf2fpmvg8hu>, 
/**
 *`:code` was updated.
 */
"CodeUpdated": undefined, 
/**
 *A new account was created.
 */
"NewAccount": Anonymize<Icbccs0ug47ilf>, 
/**
 *An account was reaped.
 */
"KilledAccount": Anonymize<Icbccs0ug47ilf>, 
/**
 *On on-chain remark happened.
 */
"Remarked": Anonymize<I855j4i3kr8ko1>, 
/**
 *An upgrade was authorized.
 */
"UpgradeAuthorized": Anonymize<Ibgl04rn6nbfm6>, 
/**
 *An invalid authorized upgrade was rejected while trying to apply it.
 */
"RejectedInvalidAuthorizedUpgrade": Anonymize<Ifn9hjdt8of6jo>}>;

export type I46cf2fpmvg8hu = {"dispatch_error": Anonymize<I2nd362qiea9l6>, "dispatch_info": Anonymize<Ic9s8f85vjtncc>};

export type I2nd362qiea9l6 = AnonymousEnum<{"Other": undefined, "CannotLookup": undefined, "BadOrigin": undefined, "Module": Enum<{"System": Anonymize<I5o0s7c8q1cc9b>, "Utility": Anonymize<I8dt2g2hcrgh36>, "Babe": Anonymize<Ib6q602k6o213a>, "Timestamp": undefined, "Authorship": undefined, "Indices": Anonymize<Icq1825fru3di2>, "Balances": Anonymize<Idj13i7adlomht>, "TransactionPayment": undefined, "AssetConversionTxPayment": undefined, "ElectionProviderMultiPhase": Anonymize<Idb84kfjd998sl>, "Staking": Anonymize<Ileu8a8k5fbnr>, "Session": Anonymize<I1e07dgbaqd1sq>, "Democracy": Anonymize<I67neb7i10udig>, "Council": Anonymize<I7n7mcmnnfjfl2>, "TechnicalCommittee": Anonymize<I7n7mcmnnfjfl2>, "Elections": Anonymize<I96u72l8br1ego>, "TechnicalMembership": Anonymize<Ie3flrv31mi7gh>, "Grandpa": Anonymize<I7q8i0pp1gkas6>, "Treasury": Anonymize<I36uss0m9fpcsf>, "AssetRate": Anonymize<I3qgd61cgli6cp>, "Contracts": Anonymize<I2489g9rnboo1t>, "Sudo": Anonymize<Iaug04qjhbli00>, "ImOnline": Anonymize<I8kh6j0q1r930d>, "AuthorityDiscovery": undefined, "Offences": undefined, "Historical": undefined, "RandomnessCollectiveFlip": undefined, "Identity": Anonymize<Ib8gja1crqq8kd>, "Society": Anonymize<I6n8dkudb3ed0r>, "Recovery": Anonymize<I29mqdjoga49c9>, "Vesting": Anonymize<Icof2acl69lq3c>, "Scheduler": Anonymize<If7oa8fprnilo5>, "Glutton": Anonymize<I3ocd9vk315l9t>, "Preimage": Anonymize<I4cfhml1prt4lu>, "Proxy": Anonymize<Iuvt54ei4cehc>, "Multisig": Anonymize<Ia76qmhhg4jvb9>, "Bounties": Anonymize<Ibfvjqqblobf53>, "Tips": Anonymize<I8c24qlovva8mi>, "Assets": Anonymize<Ieqmcndp78shme>, "PoolAssets": Anonymize<Ieqmcndp78shme>, "Beefy": Anonymize<Iflve6qd33ah68>, "Mmr": undefined, "MmrLeaf": undefined, "Lottery": Anonymize<I3r9fkqeo720fm>, "Nis": Anonymize<I3lqplv82e2f8f>, "Uniques": Anonymize<Ienq2ge2rhv4jm>, "Nfts": Anonymize<I58r1150kmj18u>, "NftFractionalization": Anonymize<Ib24bvufha821j>, "Salary": Anonymize<I1p846o0u8thlp>, "CoreFellowship": Anonymize<Ibl3edmh94f7bo>, "TransactionStorage": Anonymize<Ifbs8paf68ae6m>, "VoterList": Anonymize<Ic35l5bgiij29p>, "StateTrieMigration": Anonymize<I96objte63brjr>, "ChildBounties": Anonymize<I4u5ou5u3tthff>, "Referenda": Anonymize<I84u4ul208g742>, "Remark": Anonymize<I1c3bv8oe87c4v>, "RootTesting": undefined, "ConvictionVoting": Anonymize<Idfa8k8ikssbsf>, "Whitelist": Anonymize<I15nctscutpbeh>, "AllianceMotion": Anonymize<I7n7mcmnnfjfl2>, "Alliance": Anonymize<Id6g072thdglkp>, "NominationPools": Anonymize<Iuudu4kursojc>, "RankedPolls": Anonymize<I84u4ul208g742>, "RankedCollective": Anonymize<Ib69hbq04ogo7t>, "AssetConversion": Anonymize<I4u78hb23uhvi2>, "FastUnstake": Anonymize<Iau9bur8dc3bec>, "MessageQueue": Anonymize<I5iupade5ag2dp>, "Pov": undefined, "TxPause": Anonymize<Ifku1elmu8hk3i>, "SafeMode": Anonymize<I65gapcjsc3grr>, "Statement": undefined, "MultiBlockMigrations": Anonymize<Iaaqq5jevtahm8>, "Broker": Anonymize<I1ova47ispn87v>, "TasksExample": Anonymize<Icjvs8j8ipuo3p>, "Mixnet": undefined, "Parameters": undefined, "SkipFeelessPayment": undefined, "PalletExampleMbms": undefined, "AssetConversionMigration": Anonymize<I1t0slqjho4lh4>, "Revive": Anonymize<Icrbvluqac3l8s>, "VerifySignature": undefined, "DelegatedStaking": Anonymize<Iaogv3iimefnis>, "AssetRewards": Anonymize<I1vqs5qaqr6h6>, "AssetsFreezer": Anonymize<I4dd4ctqfnk5kr>, "MetaTx": Anonymize<I8436figeoo3ti>}>, "ConsumerRemaining": undefined, "NoProviders": undefined, "TooManyConsumers": undefined, "Token": TokenError, "Arithmetic": ArithmeticError, "Transactional": TransactionalError, "Exhausted": undefined, "Corruption": undefined, "Unavailable": undefined, "RootNotAllowed": undefined, "Trie": Anonymize<Idh4cj79bvroj8>}>;

export type Ib6q602k6o213a = AnonymousEnum<{
/**
 *An equivocation proof provided as part of an equivocation report is invalid.
 */
"InvalidEquivocationProof": undefined, 
/**
 *A key ownership proof provided as part of an equivocation report is invalid.
 */
"InvalidKeyOwnershipProof": undefined, 
/**
 *A given equivocation report is valid but already previously reported.
 */
"DuplicateOffenceReport": undefined, 
/**
 *Submitted configuration is invalid.
 */
"InvalidConfiguration": undefined}>;

export type Icq1825fru3di2 = AnonymousEnum<{
/**
 *The index was not already assigned.
 */
"NotAssigned": undefined, 
/**
 *The index is assigned to another account.
 */
"NotOwner": undefined, 
/**
 *The index was not available.
 */
"InUse": undefined, 
/**
 *The source and destination accounts are identical.
 */
"NotTransfer": undefined, 
/**
 *The index is permanent and may not be freed/changed.
 */
"Permanent": undefined}>;

export type Idb84kfjd998sl = AnonymousEnum<{
/**
 *Submission was too early.
 */
"PreDispatchEarlySubmission": undefined, 
/**
 *Wrong number of winners presented.
 */
"PreDispatchWrongWinnerCount": undefined, 
/**
 *Submission was too weak, score-wise.
 */
"PreDispatchWeakSubmission": undefined, 
/**
 *The queue was full, and the solution was not better than any of the existing ones.
 */
"SignedQueueFull": undefined, 
/**
 *The origin failed to pay the deposit.
 */
"SignedCannotPayDeposit": undefined, 
/**
 *Witness data to dispatchable is invalid.
 */
"SignedInvalidWitness": undefined, 
/**
 *The signed submission consumes too much weight
 */
"SignedTooMuchWeight": undefined, 
/**
 *OCW submitted solution for wrong round
 */
"OcwCallWrongEra": undefined, 
/**
 *Snapshot metadata should exist but didn't.
 */
"MissingSnapshotMetadata": undefined, 
/**
 *`Self::insert_submission` returned an invalid index.
 */
"InvalidSubmissionIndex": undefined, 
/**
 *The call is not allowed at this point.
 */
"CallNotAllowed": undefined, 
/**
 *The fallback failed
 */
"FallbackFailed": undefined, 
/**
 *Some bound not met
 */
"BoundNotMet": undefined, 
/**
 *Submitted solution has too many winners
 */
"TooManyWinners": undefined, 
/**
 *Submission was prepared for a different round.
 */
"PreDispatchDifferentRound": undefined}>;

export type Ileu8a8k5fbnr = AnonymousEnum<{
/**
 *Not a controller account.
 */
"NotController": undefined, 
/**
 *Not a stash account.
 */
"NotStash": undefined, 
/**
 *Stash is already bonded.
 */
"AlreadyBonded": undefined, 
/**
 *Controller is already paired.
 */
"AlreadyPaired": undefined, 
/**
 *Targets cannot be empty.
 */
"EmptyTargets": undefined, 
/**
 *Duplicate index.
 */
"DuplicateIndex": undefined, 
/**
 *Slash record index out of bounds.
 */
"InvalidSlashIndex": undefined, 
/**
 *Cannot have a validator or nominator role, with value less than the minimum defined by
 *governance (see `MinValidatorBond` and `MinNominatorBond`). If unbonding is the
 *intention, `chill` first to remove one's role as validator/nominator.
 */
"InsufficientBond": undefined, 
/**
 *Can not schedule more unlock chunks.
 */
"NoMoreChunks": undefined, 
/**
 *Can not rebond without unlocking chunks.
 */
"NoUnlockChunk": undefined, 
/**
 *Attempting to target a stash that still has funds.
 */
"FundedTarget": undefined, 
/**
 *Invalid era to reward.
 */
"InvalidEraToReward": undefined, 
/**
 *Invalid number of nominations.
 */
"InvalidNumberOfNominations": undefined, 
/**
 *Items are not sorted and unique.
 */
"NotSortedAndUnique": undefined, 
/**
 *Rewards for this era have already been claimed for this validator.
 */
"AlreadyClaimed": undefined, 
/**
 *No nominators exist on this page.
 */
"InvalidPage": undefined, 
/**
 *Incorrect previous history depth input provided.
 */
"IncorrectHistoryDepth": undefined, 
/**
 *Incorrect number of slashing spans provided.
 */
"IncorrectSlashingSpans": undefined, 
/**
 *Internal state has become somehow corrupted and the operation cannot continue.
 */
"BadState": undefined, 
/**
 *Too many nomination targets supplied.
 */
"TooManyTargets": undefined, 
/**
 *A nomination target was supplied that was blocked or otherwise not a validator.
 */
"BadTarget": undefined, 
/**
 *The user has enough bond and thus cannot be chilled forcefully by an external person.
 */
"CannotChillOther": undefined, 
/**
 *There are too many nominators in the system. Governance needs to adjust the staking
 *settings to keep things safe for the runtime.
 */
"TooManyNominators": undefined, 
/**
 *There are too many validator candidates in the system. Governance needs to adjust the
 *staking settings to keep things safe for the runtime.
 */
"TooManyValidators": undefined, 
/**
 *Commission is too low. Must be at least `MinCommission`.
 */
"CommissionTooLow": undefined, 
/**
 *Some bound is not met.
 */
"BoundNotMet": undefined, 
/**
 *Used when attempting to use deprecated controller account logic.
 */
"ControllerDeprecated": undefined, 
/**
 *Cannot reset a ledger.
 */
"CannotRestoreLedger": undefined, 
/**
 *Provided reward destination is not allowed.
 */
"RewardDestinationRestricted": undefined, 
/**
 *Not enough funds available to withdraw.
 */
"NotEnoughFunds": undefined, 
/**
 *Operation not allowed for virtual stakers.
 */
"VirtualStakerNotAllowed": undefined, 
/**
 *Stash could not be reaped as other pallet might depend on it.
 */
"CannotReapStash": undefined, 
/**
 *The stake of this account is already migrated to `Fungible` holds.
 */
"AlreadyMigrated": undefined, 
/**
 *Account is restricted from participation in staking. This may happen if the account is
 *staking in another way already, such as via pool.
 */
"Restricted": undefined}>;

export type I67neb7i10udig = AnonymousEnum<{
/**
 *Value too low
 */
"ValueLow": undefined, 
/**
 *Proposal does not exist
 */
"ProposalMissing": undefined, 
/**
 *Cannot cancel the same proposal twice
 */
"AlreadyCanceled": undefined, 
/**
 *Proposal already made
 */
"DuplicateProposal": undefined, 
/**
 *Proposal still blacklisted
 */
"ProposalBlacklisted": undefined, 
/**
 *Next external proposal not simple majority
 */
"NotSimpleMajority": undefined, 
/**
 *Invalid hash
 */
"InvalidHash": undefined, 
/**
 *No external proposal
 */
"NoProposal": undefined, 
/**
 *Identity may not veto a proposal twice
 */
"AlreadyVetoed": undefined, 
/**
 *Vote given for invalid referendum
 */
"ReferendumInvalid": undefined, 
/**
 *No proposals waiting
 */
"NoneWaiting": undefined, 
/**
 *The given account did not vote on the referendum.
 */
"NotVoter": undefined, 
/**
 *The actor has no permission to conduct the action.
 */
"NoPermission": undefined, 
/**
 *The account is already delegating.
 */
"AlreadyDelegating": undefined, 
/**
 *Too high a balance was provided that the account cannot afford.
 */
"InsufficientFunds": undefined, 
/**
 *The account is not currently delegating.
 */
"NotDelegating": undefined, 
/**
 *The account currently has votes attached to it and the operation cannot succeed until
 *these are removed, either through `unvote` or `reap_vote`.
 */
"VotesExist": undefined, 
/**
 *The instant referendum origin is currently disallowed.
 */
"InstantNotAllowed": undefined, 
/**
 *Delegation to oneself makes no sense.
 */
"Nonsense": undefined, 
/**
 *Invalid upper bound.
 */
"WrongUpperBound": undefined, 
/**
 *Maximum number of votes reached.
 */
"MaxVotesReached": undefined, 
/**
 *Maximum number of items reached.
 */
"TooMany": undefined, 
/**
 *Voting period too low
 */
"VotingPeriodLow": undefined, 
/**
 *The preimage does not exist.
 */
"PreimageNotExist": undefined}>;

export type I7n7mcmnnfjfl2 = AnonymousEnum<{
/**
 *Account is not a member
 */
"NotMember": undefined, 
/**
 *Duplicate proposals not allowed
 */
"DuplicateProposal": undefined, 
/**
 *Proposal must exist
 */
"ProposalMissing": undefined, 
/**
 *Mismatched index
 */
"WrongIndex": undefined, 
/**
 *Duplicate vote ignored
 */
"DuplicateVote": undefined, 
/**
 *Members are already initialized!
 */
"AlreadyInitialized": undefined, 
/**
 *The close call was made too early, before the end of the voting.
 */
"TooEarly": undefined, 
/**
 *There can only be a maximum of `MaxProposals` active proposals.
 */
"TooManyProposals": undefined, 
/**
 *The given weight bound for the proposal was too low.
 */
"WrongProposalWeight": undefined, 
/**
 *The given length bound for the proposal was too low.
 */
"WrongProposalLength": undefined, 
/**
 *Prime account is not a member
 */
"PrimeAccountNotMember": undefined, 
/**
 *Proposal is still active.
 */
"ProposalActive": undefined}>;

export type I96u72l8br1ego = AnonymousEnum<{
/**
 *Cannot vote when no candidates or members exist.
 */
"UnableToVote": undefined, 
/**
 *Must vote for at least one candidate.
 */
"NoVotes": undefined, 
/**
 *Cannot vote more than candidates.
 */
"TooManyVotes": undefined, 
/**
 *Cannot vote more than maximum allowed.
 */
"MaximumVotesExceeded": undefined, 
/**
 *Cannot vote with stake less than minimum balance.
 */
"LowBalance": undefined, 
/**
 *Voter can not pay voting bond.
 */
"UnableToPayBond": undefined, 
/**
 *Must be a voter.
 */
"MustBeVoter": undefined, 
/**
 *Duplicated candidate submission.
 */
"DuplicatedCandidate": undefined, 
/**
 *Too many candidates have been created.
 */
"TooManyCandidates": undefined, 
/**
 *Member cannot re-submit candidacy.
 */
"MemberSubmit": undefined, 
/**
 *Runner cannot re-submit candidacy.
 */
"RunnerUpSubmit": undefined, 
/**
 *Candidate does not have enough funds.
 */
"InsufficientCandidateFunds": undefined, 
/**
 *Not a member.
 */
"NotMember": undefined, 
/**
 *The provided count of number of candidates is incorrect.
 */
"InvalidWitnessData": undefined, 
/**
 *The provided count of number of votes is incorrect.
 */
"InvalidVoteCount": undefined, 
/**
 *The renouncing origin presented a wrong `Renouncing` parameter.
 */
"InvalidRenouncing": undefined, 
/**
 *Prediction regarding replacement after member removal is wrong.
 */
"InvalidReplacement": undefined}>;

export type Ie3flrv31mi7gh = AnonymousEnum<{
/**
 *Already a member.
 */
"AlreadyMember": undefined, 
/**
 *Not a member.
 */
"NotMember": undefined, 
/**
 *Too many members.
 */
"TooManyMembers": undefined}>;

export type I7q8i0pp1gkas6 = AnonymousEnum<{
/**
 *Attempt to signal GRANDPA pause when the authority set isn't live
 *(either paused or already pending pause).
 */
"PauseFailed": undefined, 
/**
 *Attempt to signal GRANDPA resume when the authority set isn't paused
 *(either live or already pending resume).
 */
"ResumeFailed": undefined, 
/**
 *Attempt to signal GRANDPA change with one already pending.
 */
"ChangePending": undefined, 
/**
 *Cannot signal forced change so soon after last.
 */
"TooSoon": undefined, 
/**
 *A key ownership proof provided as part of an equivocation report is invalid.
 */
"InvalidKeyOwnershipProof": undefined, 
/**
 *An equivocation proof provided as part of an equivocation report is invalid.
 */
"InvalidEquivocationProof": undefined, 
/**
 *A given equivocation report is valid but already previously reported.
 */
"DuplicateOffenceReport": undefined}>;

export type I36uss0m9fpcsf = AnonymousEnum<{
/**
 *No proposal, bounty or spend at that index.
 */
"InvalidIndex": undefined, 
/**
 *Too many approvals in the queue.
 */
"TooManyApprovals": undefined, 
/**
 *The spend origin is valid but the amount it is allowed to spend is lower than the
 *amount to be spent.
 */
"InsufficientPermission": undefined, 
/**
 *Proposal has not been approved.
 */
"ProposalNotApproved": undefined, 
/**
 *The balance of the asset kind is not convertible to the balance of the native asset.
 */
"FailedToConvertBalance": undefined, 
/**
 *The spend has expired and cannot be claimed.
 */
"SpendExpired": undefined, 
/**
 *The spend is not yet eligible for payout.
 */
"EarlyPayout": undefined, 
/**
 *The payment has already been attempted.
 */
"AlreadyAttempted": undefined, 
/**
 *There was some issue with the mechanism of payment.
 */
"PayoutError": undefined, 
/**
 *The payout was not yet attempted/claimed.
 */
"NotAttempted": undefined, 
/**
 *The payment has neither failed nor succeeded yet.
 */
"Inconclusive": undefined}>;

export type I3qgd61cgli6cp = AnonymousEnum<{
/**
 *The given asset ID is unknown.
 */
"UnknownAssetKind": undefined, 
/**
 *The given asset ID already has an assigned conversion rate and cannot be re-created.
 */
"AlreadyExists": undefined, 
/**
 *Overflow ocurred when calculating the inverse rate.
 */
"Overflow": undefined}>;

export type I2489g9rnboo1t = AnonymousEnum<{
/**
 *Invalid schedule supplied, e.g. with zero weight of a basic operation.
 */
"InvalidSchedule": undefined, 
/**
 *Invalid combination of flags supplied to `seal_call` or `seal_delegate_call`.
 */
"InvalidCallFlags": undefined, 
/**
 *The executed contract exhausted its gas limit.
 */
"OutOfGas": undefined, 
/**
 *The output buffer supplied to a contract API call was too small.
 */
"OutputBufferTooSmall": undefined, 
/**
 *Performing the requested transfer failed. Probably because there isn't enough
 *free balance in the sender's account.
 */
"TransferFailed": undefined, 
/**
 *Performing a call was denied because the calling depth reached the limit
 *of what is specified in the schedule.
 */
"MaxCallDepthReached": undefined, 
/**
 *No contract was found at the specified address.
 */
"ContractNotFound": undefined, 
/**
 *The code supplied to `instantiate_with_code` exceeds the limit specified in the
 *current schedule.
 */
"CodeTooLarge": undefined, 
/**
 *No code could be found at the supplied code hash.
 */
"CodeNotFound": undefined, 
/**
 *No code info could be found at the supplied code hash.
 */
"CodeInfoNotFound": undefined, 
/**
 *A buffer outside of sandbox memory was passed to a contract API function.
 */
"OutOfBounds": undefined, 
/**
 *Input passed to a contract API function failed to decode as expected type.
 */
"DecodingFailed": undefined, 
/**
 *Contract trapped during execution.
 */
"ContractTrapped": undefined, 
/**
 *The size defined in `T::MaxValueSize` was exceeded.
 */
"ValueTooLarge": undefined, 
/**
 *Termination of a contract is not allowed while the contract is already
 *on the call stack. Can be triggered by `seal_terminate`.
 */
"TerminatedWhileReentrant": undefined, 
/**
 *`seal_call` forwarded this contracts input. It therefore is no longer available.
 */
"InputForwarded": undefined, 
/**
 *The subject passed to `seal_random` exceeds the limit.
 */
"RandomSubjectTooLong": undefined, 
/**
 *The amount of topics passed to `seal_deposit_events` exceeds the limit.
 */
"TooManyTopics": undefined, 
/**
 *The chain does not provide a chain extension. Calling the chain extension results
 *in this error. Note that this usually  shouldn't happen as deploying such contracts
 *is rejected.
 */
"NoChainExtension": undefined, 
/**
 *Failed to decode the XCM program.
 */
"XCMDecodeFailed": undefined, 
/**
 *A contract with the same AccountId already exists.
 */
"DuplicateContract": undefined, 
/**
 *A contract self destructed in its constructor.
 *
 *This can be triggered by a call to `seal_terminate`.
 */
"TerminatedInConstructor": undefined, 
/**
 *A call tried to invoke a contract that is flagged as non-reentrant.
 *The only other cause is that a call from a contract into the runtime tried to call back
 *into `pallet-contracts`. This would make the whole pallet reentrant with regard to
 *contract code execution which is not supported.
 */
"ReentranceDenied": undefined, 
/**
 *A contract attempted to invoke a state modifying API while being in read-only mode.
 */
"StateChangeDenied": undefined, 
/**
 *Origin doesn't have enough balance to pay the required storage deposits.
 */
"StorageDepositNotEnoughFunds": undefined, 
/**
 *More storage was created than allowed by the storage deposit limit.
 */
"StorageDepositLimitExhausted": undefined, 
/**
 *Code removal was denied because the code is still in use by at least one contract.
 */
"CodeInUse": undefined, 
/**
 *The contract ran to completion but decided to revert its storage changes.
 *Please note that this error is only returned from extrinsics. When called directly
 *or via RPC an `Ok` will be returned. In this case the caller needs to inspect the flags
 *to determine whether a reversion has taken place.
 */
"ContractReverted": undefined, 
/**
 *The contract's code was found to be invalid during validation.
 *
 *The most likely cause of this is that an API was used which is not supported by the
 *node. This happens if an older node is used with a new version of ink!. Try updating
 *your node to the newest available version.
 *
 *A more detailed error can be found on the node console if debug messages are enabled
 *by supplying `-lruntime::contracts=debug`.
 */
"CodeRejected": undefined, 
/**
 *An indeterministic code was used in a context where this is not permitted.
 */
"Indeterministic": undefined, 
/**
 *A pending migration needs to complete before the extrinsic can be called.
 */
"MigrationInProgress": undefined, 
/**
 *Migrate dispatch call was attempted but no migration was performed.
 */
"NoMigrationPerformed": undefined, 
/**
 *The contract has reached its maximum number of delegate dependencies.
 */
"MaxDelegateDependenciesReached": undefined, 
/**
 *The dependency was not found in the contract's delegate dependencies.
 */
"DelegateDependencyNotFound": undefined, 
/**
 *The contract already depends on the given delegate dependency.
 */
"DelegateDependencyAlreadyExists": undefined, 
/**
 *Can not add a delegate dependency to the code hash of the contract itself.
 */
"CannotAddSelfAsDelegateDependency": undefined, 
/**
 *Can not add more data to transient storage.
 */
"OutOfTransientStorage": undefined}>;

export type Iaug04qjhbli00 = AnonymousEnum<{
/**
 *Sender must be the Sudo account.
 */
"RequireSudo": undefined}>;

export type I8kh6j0q1r930d = AnonymousEnum<{
/**
 *Non existent public key.
 */
"InvalidKey": undefined, 
/**
 *Duplicated heartbeat.
 */
"DuplicatedHeartbeat": undefined}>;

export type Ib8gja1crqq8kd = AnonymousEnum<{
/**
 *Too many subs-accounts.
 */
"TooManySubAccounts": undefined, 
/**
 *Account isn't found.
 */
"NotFound": undefined, 
/**
 *Account isn't named.
 */
"NotNamed": undefined, 
/**
 *Empty index.
 */
"EmptyIndex": undefined, 
/**
 *Fee is changed.
 */
"FeeChanged": undefined, 
/**
 *No identity found.
 */
"NoIdentity": undefined, 
/**
 *Sticky judgement.
 */
"StickyJudgement": undefined, 
/**
 *Judgement given.
 */
"JudgementGiven": undefined, 
/**
 *Invalid judgement.
 */
"InvalidJudgement": undefined, 
/**
 *The index is invalid.
 */
"InvalidIndex": undefined, 
/**
 *The target is invalid.
 */
"InvalidTarget": undefined, 
/**
 *Maximum amount of registrars reached. Cannot add any more.
 */
"TooManyRegistrars": undefined, 
/**
 *Account ID is already named.
 */
"AlreadyClaimed": undefined, 
/**
 *Sender is not a sub-account.
 */
"NotSub": undefined, 
/**
 *Sub-account isn't owned by sender.
 */
"NotOwned": undefined, 
/**
 *The provided judgement was for a different identity.
 */
"JudgementForDifferentIdentity": undefined, 
/**
 *Error that occurs when there is an issue paying for judgement.
 */
"JudgementPaymentFailed": undefined, 
/**
 *The provided suffix is too long.
 */
"InvalidSuffix": undefined, 
/**
 *The sender does not have permission to issue a username.
 */
"NotUsernameAuthority": undefined, 
/**
 *The authority cannot allocate any more usernames.
 */
"NoAllocation": undefined, 
/**
 *The signature on a username was not valid.
 */
"InvalidSignature": undefined, 
/**
 *Setting this username requires a signature, but none was provided.
 */
"RequiresSignature": undefined, 
/**
 *The username does not meet the requirements.
 */
"InvalidUsername": undefined, 
/**
 *The username is already taken.
 */
"UsernameTaken": undefined, 
/**
 *The requested username does not exist.
 */
"NoUsername": undefined, 
/**
 *The username cannot be forcefully removed because it can still be accepted.
 */
"NotExpired": undefined, 
/**
 *The username cannot be removed because it's still in the grace period.
 */
"TooEarly": undefined, 
/**
 *The username cannot be removed because it is not unbinding.
 */
"NotUnbinding": undefined, 
/**
 *The username cannot be unbound because it is already unbinding.
 */
"AlreadyUnbinding": undefined, 
/**
 *The action cannot be performed because of insufficient privileges (e.g. authority
 *trying to unbind a username provided by the system).
 */
"InsufficientPrivileges": undefined}>;

export type I6n8dkudb3ed0r = AnonymousEnum<{
/**
 *User is not a member.
 */
"NotMember": undefined, 
/**
 *User is already a member.
 */
"AlreadyMember": undefined, 
/**
 *User is suspended.
 */
"Suspended": undefined, 
/**
 *User is not suspended.
 */
"NotSuspended": undefined, 
/**
 *Nothing to payout.
 */
"NoPayout": undefined, 
/**
 *Society already founded.
 */
"AlreadyFounded": undefined, 
/**
 *Not enough in pot to accept candidate.
 */
"InsufficientPot": undefined, 
/**
 *Member is already vouching or banned from vouching again.
 */
"AlreadyVouching": undefined, 
/**
 *Member is not vouching.
 */
"NotVouchingOnBidder": undefined, 
/**
 *Cannot remove the head of the chain.
 */
"Head": undefined, 
/**
 *Cannot remove the founder.
 */
"Founder": undefined, 
/**
 *User has already made a bid.
 */
"AlreadyBid": undefined, 
/**
 *User is already a candidate.
 */
"AlreadyCandidate": undefined, 
/**
 *User is not a candidate.
 */
"NotCandidate": undefined, 
/**
 *Too many members in the society.
 */
"MaxMembers": undefined, 
/**
 *The caller is not the founder.
 */
"NotFounder": undefined, 
/**
 *The caller is not the head.
 */
"NotHead": undefined, 
/**
 *The membership cannot be claimed as the candidate was not clearly approved.
 */
"NotApproved": undefined, 
/**
 *The candidate cannot be kicked as the candidate was not clearly rejected.
 */
"NotRejected": undefined, 
/**
 *The candidacy cannot be dropped as the candidate was clearly approved.
 */
"Approved": undefined, 
/**
 *The candidacy cannot be bestowed as the candidate was clearly rejected.
 */
"Rejected": undefined, 
/**
 *The candidacy cannot be concluded as the voting is still in progress.
 */
"InProgress": undefined, 
/**
 *The candidacy cannot be pruned until a full additional intake period has passed.
 */
"TooEarly": undefined, 
/**
 *The skeptic already voted.
 */
"Voted": undefined, 
/**
 *The skeptic need not vote on candidates from expired rounds.
 */
"Expired": undefined, 
/**
 *User is not a bidder.
 */
"NotBidder": undefined, 
/**
 *There is no defender currently.
 */
"NoDefender": undefined, 
/**
 *Group doesn't exist.
 */
"NotGroup": undefined, 
/**
 *The member is already elevated to this rank.
 */
"AlreadyElevated": undefined, 
/**
 *The skeptic has already been punished for this offence.
 */
"AlreadyPunished": undefined, 
/**
 *Funds are insufficient to pay off society debts.
 */
"InsufficientFunds": undefined, 
/**
 *The candidate/defender has no stale votes to remove.
 */
"NoVotes": undefined}>;

export type I29mqdjoga49c9 = AnonymousEnum<{
/**
 *User is not allowed to make a call on behalf of this account
 */
"NotAllowed": undefined, 
/**
 *Threshold must be greater than zero
 */
"ZeroThreshold": undefined, 
/**
 *Friends list must be greater than zero and threshold
 */
"NotEnoughFriends": undefined, 
/**
 *Friends list must be less than max friends
 */
"MaxFriends": undefined, 
/**
 *Friends list must be sorted and free of duplicates
 */
"NotSorted": undefined, 
/**
 *This account is not set up for recovery
 */
"NotRecoverable": undefined, 
/**
 *This account is already set up for recovery
 */
"AlreadyRecoverable": undefined, 
/**
 *A recovery process has already started for this account
 */
"AlreadyStarted": undefined, 
/**
 *A recovery process has not started for this rescuer
 */
"NotStarted": undefined, 
/**
 *This account is not a friend who can vouch
 */
"NotFriend": undefined, 
/**
 *The friend must wait until the delay period to vouch for this recovery
 */
"DelayPeriod": undefined, 
/**
 *This user has already vouched for this recovery
 */
"AlreadyVouched": undefined, 
/**
 *The threshold for recovering this account has not been met
 */
"Threshold": undefined, 
/**
 *There are still active recovery attempts that need to be closed
 */
"StillActive": undefined, 
/**
 *This account is already set up for recovery
 */
"AlreadyProxy": undefined, 
/**
 *Some internal state is broken.
 */
"BadState": undefined}>;

export type Icof2acl69lq3c = AnonymousEnum<{
/**
 *The account given is not vesting.
 */
"NotVesting": undefined, 
/**
 *The account already has `MaxVestingSchedules` count of schedules and thus
 *cannot add another one. Consider merging existing schedules in order to add another.
 */
"AtMaxVestingSchedules": undefined, 
/**
 *Amount being transferred is too low to create a vesting schedule.
 */
"AmountLow": undefined, 
/**
 *An index was out of bounds of the vesting schedules.
 */
"ScheduleIndexOutOfBounds": undefined, 
/**
 *Failed to create a new schedule because some parameter was invalid.
 */
"InvalidScheduleParams": undefined}>;

export type If7oa8fprnilo5 = AnonymousEnum<{
/**
 *Failed to schedule a call
 */
"FailedToSchedule": undefined, 
/**
 *Cannot find the scheduled call.
 */
"NotFound": undefined, 
/**
 *Given target block number is in the past.
 */
"TargetBlockNumberInPast": undefined, 
/**
 *Reschedule failed because it does not change scheduled time.
 */
"RescheduleNoChange": undefined, 
/**
 *Attempt to use a non-named function on a named task.
 */
"Named": undefined}>;

export type I3ocd9vk315l9t = AnonymousEnum<{
/**
 *The pallet was already initialized.
 *
 *Set `witness_count` to `Some` to bypass this error.
 */
"AlreadyInitialized": undefined, 
/**
 *The limit was over [`crate::RESOURCE_HARD_LIMIT`].
 */
"InsaneLimit": undefined}>;

export type I4cfhml1prt4lu = AnonymousEnum<{
/**
 *Preimage is too large to store on-chain.
 */
"TooBig": undefined, 
/**
 *Preimage has already been noted on-chain.
 */
"AlreadyNoted": undefined, 
/**
 *The user is not authorized to perform this action.
 */
"NotAuthorized": undefined, 
/**
 *The preimage cannot be removed since it has not yet been noted.
 */
"NotNoted": undefined, 
/**
 *A preimage may not be removed when there are outstanding requests.
 */
"Requested": undefined, 
/**
 *The preimage request cannot be removed since no outstanding requests exist.
 */
"NotRequested": undefined, 
/**
 *More than `MAX_HASH_UPGRADE_BULK_COUNT` hashes were requested to be upgraded at once.
 */
"TooMany": undefined, 
/**
 *Too few hashes were requested to be upgraded (i.e. zero).
 */
"TooFew": undefined}>;

export type Ibfvjqqblobf53 = AnonymousEnum<{
/**
 *Proposer's balance is too low.
 */
"InsufficientProposersBalance": undefined, 
/**
 *No proposal or bounty at that index.
 */
"InvalidIndex": undefined, 
/**
 *The reason given is just too big.
 */
"ReasonTooBig": undefined, 
/**
 *The bounty status is unexpected.
 */
"UnexpectedStatus": undefined, 
/**
 *Require bounty curator.
 */
"RequireCurator": undefined, 
/**
 *Invalid bounty value.
 */
"InvalidValue": undefined, 
/**
 *Invalid bounty fee.
 */
"InvalidFee": undefined, 
/**
 *A bounty payout is pending.
 *To cancel the bounty, you must unassign and slash the curator.
 */
"PendingPayout": undefined, 
/**
 *The bounties cannot be claimed/closed because it's still in the countdown period.
 */
"Premature": undefined, 
/**
 *The bounty cannot be closed because it has active child bounties.
 */
"HasActiveChildBounty": undefined, 
/**
 *Too many approvals are already queued.
 */
"TooManyQueued": undefined}>;

export type I8c24qlovva8mi = AnonymousEnum<{
/**
 *The reason given is just too big.
 */
"ReasonTooBig": undefined, 
/**
 *The tip was already found/started.
 */
"AlreadyKnown": undefined, 
/**
 *The tip hash is unknown.
 */
"UnknownTip": undefined, 
/**
 *The tip given was too generous.
 */
"MaxTipAmountExceeded": undefined, 
/**
 *The account attempting to retract the tip is not the finder of the tip.
 */
"NotFinder": undefined, 
/**
 *The tip cannot be claimed/closed because there are not enough tippers yet.
 */
"StillOpen": undefined, 
/**
 *The tip cannot be claimed/closed because it's still in the countdown period.
 */
"Premature": undefined}>;

export type Ieqmcndp78shme = AnonymousEnum<{
/**
 *Account balance must be greater than or equal to the transfer amount.
 */
"BalanceLow": undefined, 
/**
 *The account to alter does not exist.
 */
"NoAccount": undefined, 
/**
 *The signing account has no permission to do the operation.
 */
"NoPermission": undefined, 
/**
 *The given asset ID is unknown.
 */
"Unknown": undefined, 
/**
 *The origin account is frozen.
 */
"Frozen": undefined, 
/**
 *The asset ID is already taken.
 */
"InUse": undefined, 
/**
 *Invalid witness data given.
 */
"BadWitness": undefined, 
/**
 *Minimum balance should be non-zero.
 */
"MinBalanceZero": undefined, 
/**
 *Unable to increment the consumer reference counters on the account. Either no provider
 *reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
 *fewer then the maximum number of consumers has been reached.
 */
"UnavailableConsumer": undefined, 
/**
 *Invalid metadata given.
 */
"BadMetadata": undefined, 
/**
 *No approval exists that would allow the transfer.
 */
"Unapproved": undefined, 
/**
 *The source account would not survive the transfer and it needs to stay alive.
 */
"WouldDie": undefined, 
/**
 *The asset-account already exists.
 */
"AlreadyExists": undefined, 
/**
 *The asset-account doesn't have an associated deposit.
 */
"NoDeposit": undefined, 
/**
 *The operation would result in funds being burned.
 */
"WouldBurn": undefined, 
/**
 *The asset is a live asset and is actively being used. Usually emit for operations such
 *as `start_destroy` which require the asset to be in a destroying state.
 */
"LiveAsset": undefined, 
/**
 *The asset is not live, and likely being destroyed.
 */
"AssetNotLive": undefined, 
/**
 *The asset status is not the expected status.
 */
"IncorrectStatus": undefined, 
/**
 *The asset should be frozen before the given operation.
 */
"NotFrozen": undefined, 
/**
 *Callback action resulted in error
 */
"CallbackFailed": undefined, 
/**
 *The asset ID must be equal to the [`NextAssetId`].
 */
"BadAssetId": undefined, 
/**
 *The asset cannot be destroyed because some accounts for this asset contain freezes.
 */
"ContainsFreezes": undefined, 
/**
 *The asset cannot be destroyed because some accounts for this asset contain holds.
 */
"ContainsHolds": undefined}>;

export type Iflve6qd33ah68 = AnonymousEnum<{
/**
 *A key ownership proof provided as part of an equivocation report is invalid.
 */
"InvalidKeyOwnershipProof": undefined, 
/**
 *A double voting proof provided as part of an equivocation report is invalid.
 */
"InvalidDoubleVotingProof": undefined, 
/**
 *A fork voting proof provided as part of an equivocation report is invalid.
 */
"InvalidForkVotingProof": undefined, 
/**
 *A future block voting proof provided as part of an equivocation report is invalid.
 */
"InvalidFutureBlockVotingProof": undefined, 
/**
 *The session of the equivocation proof is invalid
 */
"InvalidEquivocationProofSession": undefined, 
/**
 *A given equivocation report is valid but already previously reported.
 */
"DuplicateOffenceReport": undefined, 
/**
 *Submitted configuration is invalid.
 */
"InvalidConfiguration": undefined}>;

export type I3r9fkqeo720fm = AnonymousEnum<{
/**
 *A lottery has not been configured.
 */
"NotConfigured": undefined, 
/**
 *A lottery is already in progress.
 */
"InProgress": undefined, 
/**
 *A lottery has already ended.
 */
"AlreadyEnded": undefined, 
/**
 *The call is not valid for an open lottery.
 */
"InvalidCall": undefined, 
/**
 *You are already participating in the lottery with this call.
 */
"AlreadyParticipating": undefined, 
/**
 *Too many calls for a single lottery.
 */
"TooManyCalls": undefined, 
/**
 *Failed to encode calls
 */
"EncodingFailed": undefined}>;

export type I3lqplv82e2f8f = AnonymousEnum<{
/**
 *The duration of the bid is less than one.
 */
"DurationTooSmall": undefined, 
/**
 *The duration is the bid is greater than the number of queues.
 */
"DurationTooBig": undefined, 
/**
 *The amount of the bid is less than the minimum allowed.
 */
"AmountTooSmall": undefined, 
/**
 *The queue for the bid's duration is full and the amount bid is too low to get in
 *through replacing an existing bid.
 */
"BidTooLow": undefined, 
/**
 *Receipt index is unknown.
 */
"UnknownReceipt": undefined, 
/**
 *Not the owner of the receipt.
 */
"NotOwner": undefined, 
/**
 *Bond not yet at expiry date.
 */
"NotExpired": undefined, 
/**
 *The given bid for retraction is not found.
 */
"UnknownBid": undefined, 
/**
 *The portion supplied is beyond the value of the receipt.
 */
"PortionTooBig": undefined, 
/**
 *Not enough funds are held to pay out.
 */
"Unfunded": undefined, 
/**
 *There are enough funds for what is required.
 */
"AlreadyFunded": undefined, 
/**
 *The thaw throttle has been reached for this period.
 */
"Throttled": undefined, 
/**
 *The operation would result in a receipt worth an insignificant value.
 */
"MakesDust": undefined, 
/**
 *The receipt is already communal.
 */
"AlreadyCommunal": undefined, 
/**
 *The receipt is already private.
 */
"AlreadyPrivate": undefined}>;

export type I1p846o0u8thlp = AnonymousEnum<{
/**
 *The salary system has already been started.
 */
"AlreadyStarted": undefined, 
/**
 *The account is not a ranked member.
 */
"NotMember": undefined, 
/**
 *The account is already inducted.
 */
"AlreadyInducted": undefined, "NotInducted": undefined, 
/**
 *The member does not have a current valid claim.
 */
"NoClaim": undefined, 
/**
 *The member's claim is zero.
 */
"ClaimZero": undefined, 
/**
 *Current cycle's registration period is over.
 */
"TooLate": undefined, 
/**
 *Current cycle's payment period is not yet begun.
 */
"TooEarly": undefined, 
/**
 *Cycle is not yet over.
 */
"NotYet": undefined, 
/**
 *The payout cycles have not yet started.
 */
"NotStarted": undefined, 
/**
 *There is no budget left for the payout.
 */
"Bankrupt": undefined, 
/**
 *There was some issue with the mechanism of payment.
 */
"PayError": undefined, 
/**
 *The payment has neither failed nor succeeded yet.
 */
"Inconclusive": undefined, 
/**
 *The cycle is after that in which the payment was made.
 */
"NotCurrent": undefined}>;

export type Ibl3edmh94f7bo = AnonymousEnum<{
/**
 *Member's rank is too low.
 */
"Unranked": undefined, 
/**
 *Member's rank is not zero.
 */
"Ranked": undefined, 
/**
 *Member's rank is not as expected - generally means that the rank provided to the call
 *does not agree with the state of the system.
 */
"UnexpectedRank": undefined, 
/**
 *The given rank is invalid - this generally means it's not between 1 and `RANK_COUNT`.
 */
"InvalidRank": undefined, 
/**
 *The origin does not have enough permission to do this operation.
 */
"NoPermission": undefined, 
/**
 *No work needs to be done at present for this member.
 */
"NothingDoing": undefined, 
/**
 *The candidate has already been inducted. This should never happen since it would
 *require a candidate (rank 0) to already be tracked in the pallet.
 */
"AlreadyInducted": undefined, 
/**
 *The candidate has not been inducted, so cannot be offboarded from this pallet.
 */
"NotTracked": undefined, 
/**
 *Operation cannot be done yet since not enough time has passed.
 */
"TooSoon": undefined}>;

export type Ifbs8paf68ae6m = AnonymousEnum<{
/**
 *Invalid configuration.
 */
"NotConfigured": undefined, 
/**
 *Renewed extrinsic is not found.
 */
"RenewedNotFound": undefined, 
/**
 *Attempting to store empty transaction
 */
"EmptyTransaction": undefined, 
/**
 *Proof was not expected in this block.
 */
"UnexpectedProof": undefined, 
/**
 *Proof failed verification.
 */
"InvalidProof": undefined, 
/**
 *Missing storage proof.
 */
"MissingProof": undefined, 
/**
 *Unable to verify proof because state data is missing.
 */
"MissingStateData": undefined, 
/**
 *Double proof check in the block.
 */
"DoubleCheck": undefined, 
/**
 *Storage proof was not checked in the block.
 */
"ProofNotChecked": undefined, 
/**
 *Transaction is too large.
 */
"TransactionTooLarge": undefined, 
/**
 *Too many transactions in the block.
 */
"TooManyTransactions": undefined, 
/**
 *Attempted to call `store` outside of block execution.
 */
"BadContext": undefined}>;

export type Ic35l5bgiij29p = AnonymousEnum<{
/**
 *A error in the list interface implementation.
 */
"List": BagsListListListError}>;

export type BagsListListListError = Enum<{"Duplicate": undefined, "NotHeavier": undefined, "NotInSameBag": undefined, "NodeNotFound": undefined}>;
export const BagsListListListError = _Enum as unknown as GetEnum<BagsListListListError>;

export type I4u5ou5u3tthff = AnonymousEnum<{
/**
 *The parent bounty is not in active state.
 */
"ParentBountyNotActive": undefined, 
/**
 *The bounty balance is not enough to add new child-bounty.
 */
"InsufficientBountyBalance": undefined, 
/**
 *Number of child bounties exceeds limit `MaxActiveChildBountyCount`.
 */
"TooManyChildBounties": undefined}>;

export type I84u4ul208g742 = AnonymousEnum<{
/**
 *Referendum is not ongoing.
 */
"NotOngoing": undefined, 
/**
 *Referendum's decision deposit is already paid.
 */
"HasDeposit": undefined, 
/**
 *The track identifier given was invalid.
 */
"BadTrack": undefined, 
/**
 *There are already a full complement of referenda in progress for this track.
 */
"Full": undefined, 
/**
 *The queue of the track is empty.
 */
"QueueEmpty": undefined, 
/**
 *The referendum index provided is invalid in this context.
 */
"BadReferendum": undefined, 
/**
 *There was nothing to do in the advancement.
 */
"NothingToDo": undefined, 
/**
 *No track exists for the proposal origin.
 */
"NoTrack": undefined, 
/**
 *Any deposit cannot be refunded until after the decision is over.
 */
"Unfinished": undefined, 
/**
 *The deposit refunder is not the depositor.
 */
"NoPermission": undefined, 
/**
 *The deposit cannot be refunded since none was made.
 */
"NoDeposit": undefined, 
/**
 *The referendum status is invalid for this operation.
 */
"BadStatus": undefined, 
/**
 *The preimage does not exist.
 */
"PreimageNotExist": undefined, 
/**
 *The preimage is stored with a different length than the one provided.
 */
"PreimageStoredWithDifferentLength": undefined}>;

export type I1c3bv8oe87c4v = AnonymousEnum<{
/**
 *Attempting to store empty data.
 */
"Empty": undefined, 
/**
 *Attempted to call `store` outside of block execution.
 */
"BadContext": undefined}>;

export type Idfa8k8ikssbsf = AnonymousEnum<{
/**
 *Poll is not ongoing.
 */
"NotOngoing": undefined, 
/**
 *The given account did not vote on the poll.
 */
"NotVoter": undefined, 
/**
 *The actor has no permission to conduct the action.
 */
"NoPermission": undefined, 
/**
 *The actor has no permission to conduct the action right now but will do in the future.
 */
"NoPermissionYet": undefined, 
/**
 *The account is already delegating.
 */
"AlreadyDelegating": undefined, 
/**
 *The account currently has votes attached to it and the operation cannot succeed until
 *these are removed through `remove_vote`.
 */
"AlreadyVoting": undefined, 
/**
 *Too high a balance was provided that the account cannot afford.
 */
"InsufficientFunds": undefined, 
/**
 *The account is not currently delegating.
 */
"NotDelegating": undefined, 
/**
 *Delegation to oneself makes no sense.
 */
"Nonsense": undefined, 
/**
 *Maximum number of votes reached.
 */
"MaxVotesReached": undefined, 
/**
 *The class must be supplied since it is not easily determinable from the state.
 */
"ClassNeeded": undefined, 
/**
 *The class ID supplied is invalid.
 */
"BadClass": undefined}>;

export type I15nctscutpbeh = AnonymousEnum<{
/**
 *The preimage of the call hash could not be loaded.
 */
"UnavailablePreImage": undefined, 
/**
 *The call could not be decoded.
 */
"UndecodableCall": undefined, 
/**
 *The weight of the decoded call was higher than the witness.
 */
"InvalidCallWeightWitness": undefined, 
/**
 *The call was not whitelisted.
 */
"CallIsNotWhitelisted": undefined, 
/**
 *The call was already whitelisted; No-Op.
 */
"CallAlreadyWhitelisted": undefined}>;

export type Id6g072thdglkp = AnonymousEnum<{
/**
 *The Alliance has not been initialized yet, therefore accounts cannot join it.
 */
"AllianceNotYetInitialized": undefined, 
/**
 *The Alliance has been initialized, therefore cannot be initialized again.
 */
"AllianceAlreadyInitialized": undefined, 
/**
 *Account is already a member.
 */
"AlreadyMember": undefined, 
/**
 *Account is not a member.
 */
"NotMember": undefined, 
/**
 *Account is not an ally.
 */
"NotAlly": undefined, 
/**
 *Account does not have voting rights.
 */
"NoVotingRights": undefined, 
/**
 *Account is already an elevated (fellow) member.
 */
"AlreadyElevated": undefined, 
/**
 *Item is already listed as unscrupulous.
 */
"AlreadyUnscrupulous": undefined, 
/**
 *Account has been deemed unscrupulous by the Alliance and is not welcome to join or be
 *nominated.
 */
"AccountNonGrata": undefined, 
/**
 *Item has not been deemed unscrupulous.
 */
"NotListedAsUnscrupulous": undefined, 
/**
 *The number of unscrupulous items exceeds `MaxUnscrupulousItems`.
 */
"TooManyUnscrupulousItems": undefined, 
/**
 *Length of website URL exceeds `MaxWebsiteUrlLength`.
 */
"TooLongWebsiteUrl": undefined, 
/**
 *Balance is insufficient for the required deposit.
 */
"InsufficientFunds": undefined, 
/**
 *The account's identity does not have display field and website field.
 */
"WithoutRequiredIdentityFields": undefined, 
/**
 *The account's identity has no good judgement.
 */
"WithoutGoodIdentityJudgement": undefined, 
/**
 *The proposal hash is not found.
 */
"MissingProposalHash": undefined, 
/**
 *The announcement is not found.
 */
"MissingAnnouncement": undefined, 
/**
 *Number of members exceeds `MaxMembersCount`.
 */
"TooManyMembers": undefined, 
/**
 *Number of announcements exceeds `MaxAnnouncementsCount`.
 */
"TooManyAnnouncements": undefined, 
/**
 *Invalid witness data given.
 */
"BadWitness": undefined, 
/**
 *Account already gave retirement notice
 */
"AlreadyRetiring": undefined, 
/**
 *Account did not give a retirement notice required to retire.
 */
"RetirementNoticeNotGiven": undefined, 
/**
 *Retirement period has not passed.
 */
"RetirementPeriodNotPassed": undefined, 
/**
 *Fellows must be provided to initialize the Alliance.
 */
"FellowsMissing": undefined}>;

export type Iuudu4kursojc = AnonymousEnum<{
/**
 *A (bonded) pool id does not exist.
 */
"PoolNotFound": undefined, 
/**
 *An account is not a member.
 */
"PoolMemberNotFound": undefined, 
/**
 *A reward pool does not exist. In all cases this is a system logic error.
 */
"RewardPoolNotFound": undefined, 
/**
 *A sub pool does not exist.
 */
"SubPoolsNotFound": undefined, 
/**
 *An account is already delegating in another pool. An account may only belong to one
 *pool at a time.
 */
"AccountBelongsToOtherPool": undefined, 
/**
 *The member is fully unbonded (and thus cannot access the bonded and reward pool
 *anymore to, for example, collect rewards).
 */
"FullyUnbonding": undefined, 
/**
 *The member cannot unbond further chunks due to reaching the limit.
 */
"MaxUnbondingLimit": undefined, 
/**
 *None of the funds can be withdrawn yet because the bonding duration has not passed.
 */
"CannotWithdrawAny": undefined, 
/**
 *The amount does not meet the minimum bond to either join or create a pool.
 *
 *The depositor can never unbond to a value less than `Pallet::depositor_min_bond`. The
 *caller does not have nominating permissions for the pool. Members can never unbond to a
 *value below `MinJoinBond`.
 */
"MinimumBondNotMet": undefined, 
/**
 *The transaction could not be executed due to overflow risk for the pool.
 */
"OverflowRisk": undefined, 
/**
 *A pool must be in [`PoolState::Destroying`] in order for the depositor to unbond or for
 *other members to be permissionlessly unbonded.
 */
"NotDestroying": undefined, 
/**
 *The caller does not have nominating permissions for the pool.
 */
"NotNominator": undefined, 
/**
 *Either a) the caller cannot make a valid kick or b) the pool is not destroying.
 */
"NotKickerOrDestroying": undefined, 
/**
 *The pool is not open to join
 */
"NotOpen": undefined, 
/**
 *The system is maxed out on pools.
 */
"MaxPools": undefined, 
/**
 *Too many members in the pool or system.
 */
"MaxPoolMembers": undefined, 
/**
 *The pools state cannot be changed.
 */
"CanNotChangeState": undefined, 
/**
 *The caller does not have adequate permissions.
 */
"DoesNotHavePermission": undefined, 
/**
 *Metadata exceeds [`Config::MaxMetadataLen`]
 */
"MetadataExceedsMaxLen": undefined, 
/**
 *Some error occurred that should never happen. This should be reported to the
 *maintainers.
 */
"Defensive": Anonymize<Ie2db4l6126rkt>, 
/**
 *Partial unbonding now allowed permissionlessly.
 */
"PartialUnbondNotAllowedPermissionlessly": undefined, 
/**
 *The pool's max commission cannot be set higher than the existing value.
 */
"MaxCommissionRestricted": undefined, 
/**
 *The supplied commission exceeds the max allowed commission.
 */
"CommissionExceedsMaximum": undefined, 
/**
 *The supplied commission exceeds global maximum commission.
 */
"CommissionExceedsGlobalMaximum": undefined, 
/**
 *Not enough blocks have surpassed since the last commission update.
 */
"CommissionChangeThrottled": undefined, 
/**
 *The submitted changes to commission change rate are not allowed.
 */
"CommissionChangeRateNotAllowed": undefined, 
/**
 *There is no pending commission to claim.
 */
"NoPendingCommission": undefined, 
/**
 *No commission current has been set.
 */
"NoCommissionCurrentSet": undefined, 
/**
 *Pool id currently in use.
 */
"PoolIdInUse": undefined, 
/**
 *Pool id provided is not correct/usable.
 */
"InvalidPoolId": undefined, 
/**
 *Bonding extra is restricted to the exact pending reward amount.
 */
"BondExtraRestricted": undefined, 
/**
 *No imbalance in the ED deposit for the pool.
 */
"NothingToAdjust": undefined, 
/**
 *No slash pending that can be applied to the member.
 */
"NothingToSlash": undefined, 
/**
 *The slash amount is too low to be applied.
 */
"SlashTooLow": undefined, 
/**
 *The pool or member delegation has already migrated to delegate stake.
 */
"AlreadyMigrated": undefined, 
/**
 *The pool or member delegation has not migrated yet to delegate stake.
 */
"NotMigrated": undefined, 
/**
 *This call is not allowed in the current state of the pallet.
 */
"NotSupported": undefined, 
/**
 *Account is restricted from participation in pools. This may happen if the account is
 *staking in another way already.
 */
"Restricted": undefined}>;

export type Ie2db4l6126rkt = AnonymousEnum<{"NotEnoughSpaceInUnbondPool": undefined, "PoolNotFound": undefined, "RewardPoolNotFound": undefined, "SubPoolsNotFound": undefined, "BondedStashKilledPrematurely": undefined, "DelegationUnsupported": undefined, "SlashNotApplied": undefined}>;

export type Ib69hbq04ogo7t = AnonymousEnum<{
/**
 *Account is already a member.
 */
"AlreadyMember": undefined, 
/**
 *Account is not a member.
 */
"NotMember": undefined, 
/**
 *The given poll index is unknown or has closed.
 */
"NotPolling": undefined, 
/**
 *The given poll is still ongoing.
 */
"Ongoing": undefined, 
/**
 *There are no further records to be removed.
 */
"NoneRemaining": undefined, 
/**
 *Unexpected error in state.
 */
"Corruption": undefined, 
/**
 *The member's rank is too low to vote.
 */
"RankTooLow": undefined, 
/**
 *The information provided is incorrect.
 */
"InvalidWitness": undefined, 
/**
 *The origin is not sufficiently privileged to do the operation.
 */
"NoPermission": undefined, 
/**
 *The new member to exchange is the same as the old member
 */
"SameMember": undefined, 
/**
 *The max member count for the rank has been reached.
 */
"TooManyMembers": undefined}>;

export type Iau9bur8dc3bec = AnonymousEnum<{
/**
 *The provided Controller account was not found.
 *
 *This means that the given account is not bonded.
 */
"NotController": undefined, 
/**
 *The bonded account has already been queued.
 */
"AlreadyQueued": undefined, 
/**
 *The bonded account has active unlocking chunks.
 */
"NotFullyBonded": undefined, 
/**
 *The provided un-staker is not in the `Queue`.
 */
"NotQueued": undefined, 
/**
 *The provided un-staker is already in Head, and cannot deregister.
 */
"AlreadyHead": undefined, 
/**
 *The call is not allowed at this point because the pallet is not active.
 */
"CallNotAllowed": undefined}>;

export type Ifku1elmu8hk3i = AnonymousEnum<{
/**
 *The call is paused.
 */
"IsPaused": undefined, 
/**
 *The call is unpaused.
 */
"IsUnpaused": undefined, 
/**
 *The call is whitelisted and cannot be paused.
 */
"Unpausable": undefined, "NotFound": undefined}>;

export type I65gapcjsc3grr = AnonymousEnum<{
/**
 *The safe-mode is (already or still) entered.
 */
"Entered": undefined, 
/**
 *The safe-mode is (already or still) exited.
 */
"Exited": undefined, 
/**
 *This functionality of the pallet is disabled by the configuration.
 */
"NotConfigured": undefined, 
/**
 *There is no balance reserved.
 */
"NoDeposit": undefined, 
/**
 *The account already has a deposit reserved and can therefore not enter or extend again.
 */
"AlreadyDeposited": undefined, 
/**
 *This deposit cannot be released yet.
 */
"CannotReleaseYet": undefined, 
/**
 *An error from the underlying `Currency`.
 */
"CurrencyError": undefined}>;

export type I1ova47ispn87v = AnonymousEnum<{
/**
 *The given region identity is not known.
 */
"UnknownRegion": undefined, 
/**
 *The owner of the region is not the origin.
 */
"NotOwner": undefined, 
/**
 *The pivot point of the partition at or after the end of the region.
 */
"PivotTooLate": undefined, 
/**
 *The pivot point of the partition at the beginning of the region.
 */
"PivotTooEarly": undefined, 
/**
 *The pivot mask for the interlacing is not contained within the region's interlace mask.
 */
"ExteriorPivot": undefined, 
/**
 *The pivot mask for the interlacing is void (and therefore unschedulable).
 */
"VoidPivot": undefined, 
/**
 *The pivot mask for the interlacing is complete (and therefore not a strict subset).
 */
"CompletePivot": undefined, 
/**
 *The workplan of the pallet's state is invalid. This indicates a state corruption.
 */
"CorruptWorkplan": undefined, 
/**
 *There is no sale happening currently.
 */
"NoSales": undefined, 
/**
 *The price limit is exceeded.
 */
"Overpriced": undefined, 
/**
 *There are no cores available.
 */
"Unavailable": undefined, 
/**
 *The sale limit has been reached.
 */
"SoldOut": undefined, 
/**
 *The renewal operation is not valid at the current time (it may become valid in the next
 *sale).
 */
"WrongTime": undefined, 
/**
 *Invalid attempt to renew.
 */
"NotAllowed": undefined, 
/**
 *This pallet has not yet been initialized.
 */
"Uninitialized": undefined, 
/**
 *The purchase cannot happen yet as the sale period is yet to begin.
 */
"TooEarly": undefined, 
/**
 *There is no work to be done.
 */
"NothingToDo": undefined, 
/**
 *The maximum amount of reservations has already been reached.
 */
"TooManyReservations": undefined, 
/**
 *The maximum amount of leases has already been reached.
 */
"TooManyLeases": undefined, 
/**
 *The lease does not exist.
 */
"LeaseNotFound": undefined, 
/**
 *The revenue for the Instantaneous Core Sales of this period is not (yet) known and thus
 *this operation cannot proceed.
 */
"UnknownRevenue": undefined, 
/**
 *The identified contribution to the Instantaneous Core Pool is unknown.
 */
"UnknownContribution": undefined, 
/**
 *The workload assigned for renewal is incomplete. This is unexpected and indicates a
 *logic error.
 */
"IncompleteAssignment": undefined, 
/**
 *An item cannot be dropped because it is still valid.
 */
"StillValid": undefined, 
/**
 *The history item does not exist.
 */
"NoHistory": undefined, 
/**
 *No reservation of the given index exists.
 */
"UnknownReservation": undefined, 
/**
 *The renewal record cannot be found.
 */
"UnknownRenewal": undefined, 
/**
 *The lease expiry time has already passed.
 */
"AlreadyExpired": undefined, 
/**
 *The configuration could not be applied because it is invalid.
 */
"InvalidConfig": undefined, 
/**
 *The revenue must be claimed for 1 or more timeslices.
 */
"NoClaimTimeslices": undefined, 
/**
 *The caller doesn't have the permission to enable or disable auto-renewal.
 */
"NoPermission": undefined, 
/**
 *We reached the limit for auto-renewals.
 */
"TooManyAutoRenewals": undefined, 
/**
 *Only cores which are assigned to a task can be auto-renewed.
 */
"NonTaskAutoRenewal": undefined, 
/**
 *Failed to get the sovereign account of a task.
 */
"SovereignAccountNotFound": undefined, 
/**
 *Attempted to disable auto-renewal for a core that didn't have it enabled.
 */
"AutoRenewalNotEnabled": undefined, 
/**
 *Attempted to force remove an assignment that doesn't exist.
 */
"AssignmentNotFound": undefined, 
/**
 *Needed to prevent spam attacks.The amount of credits the user attempted to purchase is
 *below `T::MinimumCreditPurchase`.
 */
"CreditPurchaseTooSmall": undefined}>;

export type Icjvs8j8ipuo3p = AnonymousEnum<{
/**
 *The referenced task was not found.
 */
"NotFound": undefined}>;

export type Iaogv3iimefnis = AnonymousEnum<{
/**
 *The account cannot perform this operation.
 */
"NotAllowed": undefined, 
/**
 *An existing staker cannot perform this action.
 */
"AlreadyStaking": undefined, 
/**
 *Reward Destination cannot be same as `Agent` account.
 */
"InvalidRewardDestination": undefined, 
/**
 *Delegation conditions are not met.
 *
 *Possible issues are
 *1) Cannot delegate to self,
 *2) Cannot delegate to multiple delegates.
 */
"InvalidDelegation": undefined, 
/**
 *The account does not have enough funds to perform the operation.
 */
"NotEnoughFunds": undefined, 
/**
 *Not an existing `Agent` account.
 */
"NotAgent": undefined, 
/**
 *Not a Delegator account.
 */
"NotDelegator": undefined, 
/**
 *Some corruption in internal state.
 */
"BadState": undefined, 
/**
 *Unapplied pending slash restricts operation on `Agent`.
 */
"UnappliedSlash": undefined, 
/**
 *`Agent` has no pending slash to be applied.
 */
"NothingToSlash": undefined, 
/**
 *Failed to withdraw amount from Core Staking.
 */
"WithdrawFailed": undefined, 
/**
 *Operation not supported by this pallet.
 */
"NotSupported": undefined}>;

export type I8436figeoo3ti = AnonymousEnum<{
/**
 *Invalid proof (e.g. signature).
 */
"BadProof": undefined, 
/**
 *The meta transaction is not yet valid (e.g. nonce too high).
 */
"Future": undefined, 
/**
 *The meta transaction is outdated (e.g. nonce too low).
 */
"Stale": undefined, 
/**
 *The meta transactions's birth block is ancient.
 */
"AncientBirthBlock": undefined, 
/**
 *The transaction extension did not authorize any origin.
 */
"UnknownOrigin": undefined, 
/**
 *The meta transaction is invalid.
 */
"Invalid": undefined}>;

export type Ifn9hjdt8of6jo = {"code_hash": FixedSizeBinary<32>, "error": Anonymize<I2nd362qiea9l6>};

export type I2nrtiteqp4rd9 = AnonymousEnum<{
/**
 *Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 *well as the error.
 */
"BatchInterrupted": Anonymize<I72eh517ka608r>, 
/**
 *Batch of dispatches completed fully with no error.
 */
"BatchCompleted": undefined, 
/**
 *Batch of dispatches completed but has errors.
 */
"BatchCompletedWithErrors": undefined, 
/**
 *A single item within a Batch of dispatches has completed with no error.
 */
"ItemCompleted": undefined, 
/**
 *A single item within a Batch of dispatches has completed with error.
 */
"ItemFailed": Anonymize<I9d0sl6q4978e1>, 
/**
 *A call was dispatched.
 */
"DispatchedAs": Anonymize<Icu3ibt9ugvm6i>, 
/**
 *Main call was dispatched.
 */
"IfElseMainSuccess": undefined, 
/**
 *The fallback call was dispatched.
 */
"IfElseFallbackCalled": Anonymize<Ib7kvj1gfl2cp4>}>;

export type I72eh517ka608r = {"index": number, "error": Anonymize<I2nd362qiea9l6>};

export type I9d0sl6q4978e1 = {"error": Anonymize<I2nd362qiea9l6>};

export type Icu3ibt9ugvm6i = {"result": Anonymize<I4lj7jffoad80h>};

export type I4lj7jffoad80h = ResultPayload<undefined, Anonymize<I2nd362qiea9l6>>;

export type Ib7kvj1gfl2cp4 = {"main_error": Anonymize<I2nd362qiea9l6>};

export type I2pejk6do5vg4t = AnonymousEnum<{
/**
 *A account index was assigned.
 */
"IndexAssigned": Anonymize<Ia1u3jll6a06ae>, 
/**
 *A account index has been freed up (unassigned).
 */
"IndexFreed": Anonymize<I666bl2fqjkejo>, 
/**
 *A account index has been frozen to its current account ID.
 */
"IndexFrozen": Anonymize<Ia1u3jll6a06ae>, 
/**
 *A deposit to reserve an index has been poked/reconsidered.
 */
"DepositPoked": Anonymize<Ic9g5lvl9iddc5>}>;

export type Ia1u3jll6a06ae = {"who": SS58String, "index": number};

export type Ic9g5lvl9iddc5 = {"who": SS58String, "index": number, "old_deposit": bigint, "new_deposit": bigint};

export type Ieo4sgn12rge3o = AnonymousEnum<{
/**
 *A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
 *has been paid by `who` in an asset `asset_id`.
 */
"AssetTxFeePaid": Anonymize<Icjn9u0mv2cnn4>, 
/**
 *A swap of the refund in native currency back to asset failed.
 */
"AssetRefundFailed": Anonymize<Icjchvrijclvlv>}>;

export type Icjn9u0mv2cnn4 = {"who": SS58String, "actual_fee": bigint, "tip": bigint, "asset_id": Anonymize<Ikjpbtmstl9nm>};

export type Ikjpbtmstl9nm = AnonymousEnum<{"Native": undefined, "WithId": number}>;

export type ElectionProviderMultiPhaseEvent = Enum<{
/**
 *A solution was stored with the given compute.
 *
 *The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
 *the stored solution was submitted in the signed phase by a miner with the `AccountId`.
 *Otherwise, the solution was stored either during the unsigned phase or by
 *`T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
 *room for this one.
 */
"SolutionStored": Anonymize<I4mol6k10mv0io>, 
/**
 *The election has been finalized, with the given computation and score.
 */
"ElectionFinalized": Anonymize<Iec90vukseit9e>, 
/**
 *An election failed.
 *
 *Not much can be said about which computes failed in the process.
 */
"ElectionFailed": undefined, 
/**
 *An account has been rewarded for their signed submission being finalized.
 */
"Rewarded": Anonymize<I7j4m7a3pkvsf4>, 
/**
 *An account has been slashed for submitting an invalid signed submission.
 */
"Slashed": Anonymize<I7j4m7a3pkvsf4>, 
/**
 *There was a phase transition in a given round.
 */
"PhaseTransitioned": Anonymize<Ic2n50kpnu5mae>}>;
export const ElectionProviderMultiPhaseEvent = _Enum as unknown as GetEnum<ElectionProviderMultiPhaseEvent>;

export type I4mol6k10mv0io = {"compute": ElectionProviderMultiPhaseElectionCompute, "origin"?: Anonymize<Ihfphjolmsqq1>, "prev_ejected": boolean};

export type ElectionProviderMultiPhaseElectionCompute = Enum<{"OnChain": undefined, "Signed": undefined, "Unsigned": undefined, "Fallback": undefined, "Emergency": undefined}>;
export const ElectionProviderMultiPhaseElectionCompute = _Enum as unknown as GetEnum<ElectionProviderMultiPhaseElectionCompute>;

export type Iec90vukseit9e = {"compute": ElectionProviderMultiPhaseElectionCompute, "score": Anonymize<I8s6n43okuj2b1>};

export type I8s6n43okuj2b1 = {"minimal_stake": bigint, "sum_stake": bigint, "sum_stake_squared": bigint};

export type I7j4m7a3pkvsf4 = {"account": SS58String, "value": bigint};

export type Ic2n50kpnu5mae = {"from": ElectionProviderMultiPhasePhase, "to": ElectionProviderMultiPhasePhase, "round": number};

export type ElectionProviderMultiPhasePhase = Enum<{"Off": undefined, "Signed": undefined, "Unsigned": [boolean, number], "Emergency": undefined}>;
export const ElectionProviderMultiPhasePhase = _Enum as unknown as GetEnum<ElectionProviderMultiPhasePhase>;

export type I8n4qjnlkvth8n = AnonymousEnum<{
/**
 *The era payout has been set; the first balance is the validator-payout; the second is
 *the remainder from the maximum amount of reward.
 */
"EraPaid": Anonymize<I1au3fq4n84nv3>, 
/**
 *The nominator has been rewarded by this amount to this destination.
 */
"Rewarded": Anonymize<Iejaj7m7qka9tr>, 
/**
 *A staker (validator or nominator) has been slashed by the given amount.
 */
"Slashed": Anonymize<Idnak900lt5lm8>, 
/**
 *A slash for the given validator, for the given percentage of their stake, at the given
 *era as been reported.
 */
"SlashReported": Anonymize<I27n7lbd66730p>, 
/**
 *An old slashing report from a prior era was discarded because it could
 *not be processed.
 */
"OldSlashingReportDiscarded": Anonymize<I2hq50pu2kdjpo>, 
/**
 *A new set of stakers was elected.
 */
"StakersElected": undefined, 
/**
 *An account has bonded this amount. \[stash, amount\]
 *
 *NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 *it will not be emitted for staking rewards when they are added to stake.
 */
"Bonded": Anonymize<Ifk8eme5o7mukf>, 
/**
 *An account has unbonded this amount.
 */
"Unbonded": Anonymize<Ifk8eme5o7mukf>, 
/**
 *An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 *from the unlocking queue.
 */
"Withdrawn": Anonymize<Ifk8eme5o7mukf>, 
/**
 *A nominator has been kicked from a validator.
 */
"Kicked": Anonymize<Iau4cgm6ih61cf>, 
/**
 *The election failed. No new era is planned.
 */
"StakingElectionFailed": undefined, 
/**
 *An account has stopped participating as either a validator or nominator.
 */
"Chilled": Anonymize<Idl3umm12u5pa>, 
/**
 *A Page of stakers rewards are getting paid. `next` is `None` if all pages are claimed.
 */
"PayoutStarted": Anonymize<Ith132hqfb27q>, 
/**
 *A validator has set their preferences.
 */
"ValidatorPrefsSet": Anonymize<Ic19as7nbst738>, 
/**
 *Voters size limit reached.
 */
"SnapshotVotersSizeExceeded": Anonymize<I54umskavgc9du>, 
/**
 *Targets size limit reached.
 */
"SnapshotTargetsSizeExceeded": Anonymize<I54umskavgc9du>, 
/**
 *A new force era mode was set.
 */
"ForceEra": Anonymize<I2ip7o9e2tc5sf>, 
/**
 *Report of a controller batch deprecation.
 */
"ControllerBatchDeprecated": Anonymize<I5egvk6hadac5h>, 
/**
 *Staking balance migrated from locks to holds, with any balance that could not be held
 *is force withdrawn.
 */
"CurrencyMigrated": Anonymize<I1td4upnup9gqv>}>;

export type I1au3fq4n84nv3 = {"era_index": number, "validator_payout": bigint, "remainder": bigint};

export type Iejaj7m7qka9tr = {"stash": SS58String, "dest": StakingRewardDestination, "amount": bigint};

export type StakingRewardDestination = Enum<{"Staked": undefined, "Stash": undefined, "Controller": undefined, "Account": SS58String, "None": undefined}>;
export const StakingRewardDestination = _Enum as unknown as GetEnum<StakingRewardDestination>;

export type Idnak900lt5lm8 = {"staker": SS58String, "amount": bigint};

export type I27n7lbd66730p = {"validator": SS58String, "fraction": number, "slash_era": number};

export type Ifk8eme5o7mukf = {"stash": SS58String, "amount": bigint};

export type Iau4cgm6ih61cf = {"nominator": SS58String, "stash": SS58String};

export type Idl3umm12u5pa = {"stash": SS58String};

export type Ith132hqfb27q = {"era_index": number, "validator_stash": SS58String, "page": number, "next"?: Anonymize<I4arjljr6dpflb>};

export type Ic19as7nbst738 = {"stash": SS58String, "prefs": Anonymize<I9o7ssi9vmhmgr>};

export type I9o7ssi9vmhmgr = {"commission": number, "blocked": boolean};

export type I54umskavgc9du = {"size": number};

export type I2ip7o9e2tc5sf = {"mode": StakingForcing};

export type StakingForcing = Enum<{"NotForcing": undefined, "ForceNew": undefined, "ForceNone": undefined, "ForceAlways": undefined}>;
export const StakingForcing = _Enum as unknown as GetEnum<StakingForcing>;

export type I5egvk6hadac5h = {"failures": number};

export type I1td4upnup9gqv = {"stash": SS58String, "force_withdraw": bigint};

export type Icfq8ap3e5p73t = AnonymousEnum<{
/**
 *A motion has been proposed by a public account.
 */
"Proposed": Anonymize<I3peh714diura8>, 
/**
 *A public proposal has been tabled for referendum vote.
 */
"Tabled": Anonymize<I3peh714diura8>, 
/**
 *An external proposal has been tabled.
 */
"ExternalTabled": undefined, 
/**
 *A referendum has begun.
 */
"Started": Anonymize<I62ffgu6q2478o>, 
/**
 *A proposal has been approved by referendum.
 */
"Passed": Anonymize<Ied9mja4bq7va8>, 
/**
 *A proposal has been rejected by referendum.
 */
"NotPassed": Anonymize<Ied9mja4bq7va8>, 
/**
 *A referendum has been cancelled.
 */
"Cancelled": Anonymize<Ied9mja4bq7va8>, 
/**
 *An account has delegated their vote to another account.
 */
"Delegated": Anonymize<I10r7il4gvbcae>, 
/**
 *An account has cancelled a previous delegation operation.
 */
"Undelegated": Anonymize<Icbccs0ug47ilf>, 
/**
 *An external proposal has been vetoed.
 */
"Vetoed": Anonymize<I2c00i2bngegk9>, 
/**
 *A proposal_hash has been blacklisted permanently.
 */
"Blacklisted": Anonymize<I2ev73t79f46tb>, 
/**
 *An account has voted in a referendum
 */
"Voted": Anonymize<Iet7kfijhihjik>, 
/**
 *An account has seconded a proposal
 */
"Seconded": Anonymize<I2vrbos7ogo6ps>, 
/**
 *A proposal got canceled.
 */
"ProposalCanceled": Anonymize<I9mnj4k4u8ls2c>, 
/**
 *Metadata for a proposal or a referendum has been set.
 */
"MetadataSet": Anonymize<Iffeo46j957abe>, 
/**
 *Metadata for a proposal or a referendum has been cleared.
 */
"MetadataCleared": Anonymize<Iffeo46j957abe>, 
/**
 *Metadata has been transferred to new owner.
 */
"MetadataTransferred": Anonymize<I4ljshcevmm3p2>}>;

export type I3peh714diura8 = {"proposal_index": number, "deposit": bigint};

export type I62ffgu6q2478o = {"ref_index": number, "threshold": Anonymize<Ivbp9821csvot>};

export type Ivbp9821csvot = AnonymousEnum<{"SuperMajorityApprove": undefined, "SuperMajorityAgainst": undefined, "SimpleMajority": undefined}>;

export type Ied9mja4bq7va8 = {"ref_index": number};

export type I10r7il4gvbcae = {"who": SS58String, "target": SS58String};

export type I2c00i2bngegk9 = {"who": SS58String, "proposal_hash": FixedSizeBinary<32>, "until": number};

export type I2ev73t79f46tb = {"proposal_hash": FixedSizeBinary<32>};

export type Iet7kfijhihjik = {"voter": SS58String, "ref_index": number, "vote": Anonymize<Ia9hdots6g53fs>};

export type Ia9hdots6g53fs = AnonymousEnum<{"Standard": Anonymize<Ib024p97ls1cla>, "Split": Anonymize<I5pi71t9bosoiv>}>;

export type Ib024p97ls1cla = {"vote": number, "balance": bigint};

export type I5pi71t9bosoiv = {"aye": bigint, "nay": bigint};

export type I2vrbos7ogo6ps = {"seconder": SS58String, "prop_index": number};

export type I9mnj4k4u8ls2c = {"prop_index": number};

export type Iffeo46j957abe = {
/**
 *Metadata owner.
 */
"owner": Anonymize<I2itl2k1j2q8nf>, 
/**
 *Preimage hash.
 */
"hash": FixedSizeBinary<32>};

export type I2itl2k1j2q8nf = AnonymousEnum<{"External": undefined, "Proposal": number, "Referendum": number}>;

export type I4ljshcevmm3p2 = {
/**
 *Previous metadata owner.
 */
"prev_owner": Anonymize<I2itl2k1j2q8nf>, 
/**
 *New metadata owner.
 */
"owner": Anonymize<I2itl2k1j2q8nf>, 
/**
 *Preimage hash.
 */
"hash": FixedSizeBinary<32>};

export type Ic72jud9f25nt9 = AnonymousEnum<{
/**
 *A motion (given hash) has been proposed (by given account) with a threshold (given
 *`MemberCount`).
 */
"Proposed": Anonymize<Ift6f10887nk72>, 
/**
 *A motion (given hash) has been voted on by given account, leaving
 *a tally (yes votes and no votes given respectively as `MemberCount`).
 */
"Voted": Anonymize<I7qc53b1tvqjg2>, 
/**
 *A motion was approved by the required threshold.
 */
"Approved": Anonymize<I2ev73t79f46tb>, 
/**
 *A motion was not approved by the required threshold.
 */
"Disapproved": Anonymize<I2ev73t79f46tb>, 
/**
 *A motion was executed; result will be `Ok` if it returned without error.
 */
"Executed": Anonymize<Iei0umi184jg53>, 
/**
 *A single member did some action; result will be `Ok` if it returned without error.
 */
"MemberExecuted": Anonymize<Iei0umi184jg53>, 
/**
 *A proposal was closed because its threshold was reached or after its duration was up.
 */
"Closed": Anonymize<Iak7fhrgb9jnnq>, 
/**
 *A proposal was killed.
 */
"Killed": Anonymize<I2ev73t79f46tb>, 
/**
 *Some cost for storing a proposal was burned.
 */
"ProposalCostBurned": Anonymize<I9ad1o9mv4cm3>, 
/**
 *Some cost for storing a proposal was released.
 */
"ProposalCostReleased": Anonymize<I9ad1o9mv4cm3>}>;

export type Ift6f10887nk72 = {"account": SS58String, "proposal_index": number, "proposal_hash": FixedSizeBinary<32>, "threshold": number};

export type I7qc53b1tvqjg2 = {"account": SS58String, "proposal_hash": FixedSizeBinary<32>, "voted": boolean, "yes": number, "no": number};

export type Iei0umi184jg53 = {"proposal_hash": FixedSizeBinary<32>, "result": Anonymize<I4lj7jffoad80h>};

export type Iak7fhrgb9jnnq = {"proposal_hash": FixedSizeBinary<32>, "yes": number, "no": number};

export type I9ad1o9mv4cm3 = {"proposal_hash": FixedSizeBinary<32>, "who": SS58String};

export type I4iamd5rd51ec2 = AnonymousEnum<{
/**
 *A new term with new_members. This indicates that enough candidates existed to run
 *the election, not that enough have been elected. The inner value must be examined
 *for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
 *slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
 *begin with.
 */
"NewTerm": Anonymize<Iaofef34v2445a>, 
/**
 *No (or not enough) candidates existed for this round. This is different from
 *`NewTerm(\[\])`. See the description of `NewTerm`.
 */
"EmptyTerm": undefined, 
/**
 *Internal error happened while trying to perform election.
 */
"ElectionError": undefined, 
/**
 *A member has been removed. This should always be followed by either `NewTerm` or
 *`EmptyTerm`.
 */
"MemberKicked": Anonymize<Ie3gphha4ejh40>, 
/**
 *Someone has renounced their candidacy.
 */
"Renounced": Anonymize<I4b66js88p45m8>, 
/**
 *A candidate was slashed by amount due to failing to obtain a seat as member or
 *runner-up.
 *
 *Note that old members and runners-up are also candidates.
 */
"CandidateSlashed": Anonymize<I50d9r8lrdga93>, 
/**
 *A seat holder was slashed by amount by being forcefully removed from the set.
 */
"SeatHolderSlashed": Anonymize<I27avf13g71mla>}>;

export type Iaofef34v2445a = {"new_members": Anonymize<Iba9inugg1atvo>};

export type Iba9inugg1atvo = Array<Anonymize<I95l2k9b1re95f>>;

export type Ie3gphha4ejh40 = {"member": SS58String};

export type I4b66js88p45m8 = {"candidate": SS58String};

export type I50d9r8lrdga93 = {"candidate": SS58String, "amount": bigint};

export type I27avf13g71mla = {"seat_holder": SS58String, "amount": bigint};

export type Ibraem55mlft17 = AnonymousEnum<{
/**
 *The given member was added; see the transaction for who.
 */
"MemberAdded": undefined, 
/**
 *The given member was removed; see the transaction for who.
 */
"MemberRemoved": undefined, 
/**
 *Two members were swapped; see the transaction for who.
 */
"MembersSwapped": undefined, 
/**
 *The membership was reset; see the transaction for who the new set is.
 */
"MembersReset": undefined, 
/**
 *One of the members' keys changed.
 */
"KeyChanged": undefined, 
/**
 *Phantom member, never used.
 */
"Dummy": undefined}>;

export type GrandpaEvent = Enum<{
/**
 *New authority set has been applied.
 */
"NewAuthorities": Anonymize<I5768ac424h061>, 
/**
 *Current authority set has been paused.
 */
"Paused": undefined, 
/**
 *Current authority set has been resumed.
 */
"Resumed": undefined}>;
export const GrandpaEvent = _Enum as unknown as GetEnum<GrandpaEvent>;

export type I5768ac424h061 = {"authority_set": Anonymize<I3geksg000c171>};

export type I3geksg000c171 = Array<[FixedSizeBinary<32>, bigint]>;

export type I157i60je71dq5 = AnonymousEnum<{
/**
 *We have ended a spend period and will now allocate funds.
 */
"Spending": Anonymize<I8iksqi3eani0a>, 
/**
 *Some funds have been allocated.
 */
"Awarded": Anonymize<I16enopmju1p0q>, 
/**
 *Some of our funds have been burnt.
 */
"Burnt": Anonymize<I43kq8qudg7pq9>, 
/**
 *Spending has finished; this is the amount that rolls over until next spend.
 */
"Rollover": Anonymize<I76riseemre533>, 
/**
 *Some funds have been deposited.
 */
"Deposit": Anonymize<Ie5v6njpckr05b>, 
/**
 *A new spend proposal has been approved.
 */
"SpendApproved": Anonymize<I38bmcrmh852rk>, 
/**
 *The inactive funds of the pallet have been updated.
 */
"UpdatedInactive": Anonymize<I4hcillge8de5f>, 
/**
 *A new asset spend proposal has been approved.
 */
"AssetSpendApproved": Anonymize<I97u3kqqqkf4si>, 
/**
 *An approved spend was voided.
 */
"AssetSpendVoided": Anonymize<I666bl2fqjkejo>, 
/**
 *A payment happened.
 */
"Paid": Anonymize<I666bl2fqjkejo>, 
/**
 *A payment failed and can be retried.
 */
"PaymentFailed": Anonymize<I666bl2fqjkejo>, 
/**
 *A spend was processed and removed from the storage. It might have been successfully
 *paid or it may have expired.
 */
"SpendProcessed": Anonymize<I666bl2fqjkejo>}>;

export type I8iksqi3eani0a = {"budget_remaining": bigint};

export type I16enopmju1p0q = {"proposal_index": number, "award": bigint, "account": SS58String};

export type I43kq8qudg7pq9 = {"burnt_funds": bigint};

export type I76riseemre533 = {"rollover_balance": bigint};

export type Ie5v6njpckr05b = {"value": bigint};

export type I38bmcrmh852rk = {"proposal_index": number, "amount": bigint, "beneficiary": SS58String};

export type I4hcillge8de5f = {"reactivated": bigint, "deactivated": bigint};

export type I97u3kqqqkf4si = {"index": number, "asset_kind": Anonymize<Ikjpbtmstl9nm>, "amount": bigint, "beneficiary": SS58String, "valid_from": number, "expire_at": number};

export type Id1m1nmkttfi5 = AnonymousEnum<{"AssetRateCreated": Anonymize<Ies1efup9f14ih>, "AssetRateRemoved": Anonymize<Iunnigs2ph8da>, "AssetRateUpdated": Anonymize<Iasudo93amopi2>}>;

export type Ies1efup9f14ih = {"asset_kind": Anonymize<Ikjpbtmstl9nm>, "rate": bigint};

export type Iunnigs2ph8da = {"asset_kind": Anonymize<Ikjpbtmstl9nm>};

export type Iasudo93amopi2 = {"asset_kind": Anonymize<Ikjpbtmstl9nm>, "old": bigint, "new": bigint};

export type I211sbjvh5hjqu = AnonymousEnum<{
/**
 *Contract deployed by address at the specified address.
 */
"Instantiated": Anonymize<Ie5222qfrr24ek>, 
/**
 *Contract has been removed.
 *
 *# Note
 *
 *The only way for a contract to be removed and emitting this event is by calling
 *`seal_terminate`.
 */
"Terminated": Anonymize<I28g8sphdu312k>, 
/**
 *Code with the specified hash has been stored.
 */
"CodeStored": Anonymize<Idqbjt2c6r46t6>, 
/**
 *A custom event emitted by the contract.
 */
"ContractEmitted": Anonymize<I853aigjva3f0t>, 
/**
 *A code with the specified hash was removed.
 */
"CodeRemoved": Anonymize<I9uehhems5hkqm>, 
/**
 *A contract's code was updated.
 */
"ContractCodeUpdated": Anonymize<I7q5qk4uoanhof>, 
/**
 *A contract was called either by a plain account or another contract.
 *
 *# Note
 *
 *Please keep in mind that like all events this is only emitted for successful
 *calls. This is because on failure all storage changes including events are
 *rolled back.
 */
"Called": Anonymize<Iehpbs40l3jkit>, 
/**
 *A contract delegate called a code hash.
 *
 *# Note
 *
 *Please keep in mind that like all events this is only emitted for successful
 *calls. This is because on failure all storage changes including events are
 *rolled back.
 */
"DelegateCalled": Anonymize<Idht9upmipvd4j>, 
/**
 *Some funds have been transferred and held as storage deposit.
 */
"StorageDepositTransferredAndHeld": Anonymize<Iflcfm9b6nlmdd>, 
/**
 *Some storage deposit funds have been transferred and released.
 */
"StorageDepositTransferredAndReleased": Anonymize<Iflcfm9b6nlmdd>}>;

export type Ie5222qfrr24ek = {"deployer": SS58String, "contract": SS58String};

export type I28g8sphdu312k = {
/**
 *The contract that was terminated.
 */
"contract": SS58String, 
/**
 *The account that received the contracts remaining balance
 */
"beneficiary": SS58String};

export type Idqbjt2c6r46t6 = {"code_hash": FixedSizeBinary<32>, "deposit_held": bigint, "uploader": SS58String};

export type I853aigjva3f0t = {
/**
 *The contract that emitted the event.
 */
"contract": SS58String, 
/**
 *Data supplied by the contract. Metadata generated during contract compilation
 *is needed to decode it.
 */
"data": Binary};

export type I9uehhems5hkqm = {"code_hash": FixedSizeBinary<32>, "deposit_released": bigint, "remover": SS58String};

export type I7q5qk4uoanhof = {
/**
 *The contract that has been updated.
 */
"contract": SS58String, 
/**
 *New code hash that was set for the contract.
 */
"new_code_hash": FixedSizeBinary<32>, 
/**
 *Previous code hash of the contract.
 */
"old_code_hash": FixedSizeBinary<32>};

export type Iehpbs40l3jkit = {
/**
 *The caller of the `contract`.
 */
"caller": Enum<{"Root": undefined, "Signed": SS58String}>, 
/**
 *The contract that was called.
 */
"contract": SS58String};

export type Idht9upmipvd4j = {
/**
 *The contract that performed the delegate call and hence in whose context
 *the `code_hash` is executed.
 */
"contract": SS58String, 
/**
 *The code hash that was delegate called.
 */
"code_hash": FixedSizeBinary<32>};

export type Iegb4cbcv21pl = AnonymousEnum<{
/**
 *A sudo call just took place.
 */
"Sudid": Anonymize<If6d6sj067vvca>, 
/**
 *The sudo key has been updated.
 */
"KeyChanged": Anonymize<I5rtkmhm2dng4u>, 
/**
 *The key was permanently removed.
 */
"KeyRemoved": undefined, 
/**
 *A [sudo_as](Pallet::sudo_as) call just took place.
 */
"SudoAsDone": Anonymize<If6d6sj067vvca>}>;

export type If6d6sj067vvca = {
/**
 *The result of the call made by the sudo user.
 */
"sudo_result": Anonymize<I4lj7jffoad80h>};

export type I5rtkmhm2dng4u = {
/**
 *The old sudo key (if one was previously set).
 */
"old"?: Anonymize<Ihfphjolmsqq1>, 
/**
 *The new sudo key (if one was set).
 */
"new": SS58String};

export type I9ech588pscqur = AnonymousEnum<{
/**
 *A new heartbeat was received from `AuthorityId`.
 */
"HeartbeatReceived": Anonymize<I6niuoceqveh04>, 
/**
 *At the end of the session, no offence was committed.
 */
"AllGood": undefined, 
/**
 *At the end of the session, at least one validator was found to be offline.
 */
"SomeOffline": Anonymize<Iksn90easbs68>}>;

export type I6niuoceqveh04 = {"authority_id": FixedSizeBinary<32>};

export type Iksn90easbs68 = {"offline": Array<Anonymize<Ifvqn3ldat80ai>>};

export type Ifvqn3ldat80ai = [SS58String, undefined];

export type OffencesEvent = Enum<{
/**
 *There is an offence reported of the given `kind` happened at the `session_index` and
 *(kind-specific) time slot. This event is not deposited for duplicate slashes.
 *\[kind, timeslot\].
 */
"Offence": Anonymize<Iempvdlhc5ih6g>}>;
export const OffencesEvent = _Enum as unknown as GetEnum<OffencesEvent>;

export type Iempvdlhc5ih6g = {"kind": FixedSizeBinary<16>, "timeslot": Binary};

export type I2au2or9cskfoi = AnonymousEnum<{
/**
 *A name was set or reset (which will remove all judgements).
 */
"IdentitySet": Anonymize<I4cbvqmqadhrea>, 
/**
 *A name was cleared, and the given balance returned.
 */
"IdentityCleared": Anonymize<Iep1lmt6q3s6r3>, 
/**
 *A name was removed and the given balance slashed.
 */
"IdentityKilled": Anonymize<Iep1lmt6q3s6r3>, 
/**
 *A judgement was asked from a registrar.
 */
"JudgementRequested": Anonymize<I1fac16213rie2>, 
/**
 *A judgement request was retracted.
 */
"JudgementUnrequested": Anonymize<I1fac16213rie2>, 
/**
 *A judgement was given by a registrar.
 */
"JudgementGiven": Anonymize<Ifjt77oc391o43>, 
/**
 *A registrar was added.
 */
"RegistrarAdded": Anonymize<Itvt1jsipv0lc>, 
/**
 *A sub-identity was added to an identity and the deposit paid.
 */
"SubIdentityAdded": Anonymize<Ick3mveut33f44>, 
/**
 *An account's sub-identities were set (in bulk).
 */
"SubIdentitiesSet": Anonymize<I719lqkkbtikbl>, 
/**
 *A given sub-account's associated name was changed by its super-identity.
 */
"SubIdentityRenamed": Anonymize<Ie4intrc3n8jfu>, 
/**
 *A sub-identity was removed from an identity and the deposit freed.
 */
"SubIdentityRemoved": Anonymize<Ick3mveut33f44>, 
/**
 *A sub-identity was cleared, and the given deposit repatriated from the
 *main identity account to the sub-identity account.
 */
"SubIdentityRevoked": Anonymize<Ick3mveut33f44>, 
/**
 *A username authority was added.
 */
"AuthorityAdded": Anonymize<I2rg5btjrsqec0>, 
/**
 *A username authority was removed.
 */
"AuthorityRemoved": Anonymize<I2rg5btjrsqec0>, 
/**
 *A username was set for `who`.
 */
"UsernameSet": Anonymize<Ibdqerrooruuq9>, 
/**
 *A username was queued, but `who` must accept it prior to `expiration`.
 */
"UsernameQueued": Anonymize<I8u2ba9jeiu6q0>, 
/**
 *A queued username passed its expiration without being claimed and was removed.
 */
"PreapprovalExpired": Anonymize<I7ieadb293k6b4>, 
/**
 *A username was set as a primary and can be looked up from `who`.
 */
"PrimaryUsernameSet": Anonymize<Ibdqerrooruuq9>, 
/**
 *A dangling username (as in, a username corresponding to an account that has removed its
 *identity) has been removed.
 */
"DanglingUsernameRemoved": Anonymize<Ibdqerrooruuq9>, 
/**
 *A username has been unbound.
 */
"UsernameUnbound": Anonymize<Ie5l999tf7t2te>, 
/**
 *A username has been removed.
 */
"UsernameRemoved": Anonymize<Ie5l999tf7t2te>, 
/**
 *A username has been killed.
 */
"UsernameKilled": Anonymize<Ie5l999tf7t2te>}>;

export type I1fac16213rie2 = {"who": SS58String, "registrar_index": number};

export type Ifjt77oc391o43 = {"target": SS58String, "registrar_index": number};

export type Itvt1jsipv0lc = {"registrar_index": number};

export type Ick3mveut33f44 = {"sub": SS58String, "main": SS58String, "deposit": bigint};

export type I719lqkkbtikbl = {"main": SS58String, "number_of_subs": number, "new_deposit": bigint};

export type Ie4intrc3n8jfu = {"sub": SS58String, "main": SS58String};

export type I2rg5btjrsqec0 = {"authority": SS58String};

export type Ibdqerrooruuq9 = {"who": SS58String, "username": Binary};

export type I8u2ba9jeiu6q0 = {"who": SS58String, "username": Binary, "expiration": number};

export type I7ieadb293k6b4 = {"whose": SS58String};

export type Ie5l999tf7t2te = {"username": Binary};

export type Ifhcq78pr9md4e = AnonymousEnum<{
/**
 *The society is founded by the given identity.
 */
"Founded": Anonymize<I8ircspqpe79k7>, 
/**
 *A membership bid just happened. The given account is the candidate's ID and their offer
 *is the second.
 */
"Bid": Anonymize<I1vlt8l6nvnen6>, 
/**
 *A membership bid just happened by vouching. The given account is the candidate's ID and
 *their offer is the second. The vouching party is the third.
 */
"Vouch": Anonymize<I72vf0j9juc1df>, 
/**
 *A candidate was dropped (due to an excess of bids in the system).
 */
"AutoUnbid": Anonymize<I4b66js88p45m8>, 
/**
 *A candidate was dropped (by their request).
 */
"Unbid": Anonymize<I4b66js88p45m8>, 
/**
 *A candidate was dropped (by request of who vouched for them).
 */
"Unvouch": Anonymize<I4b66js88p45m8>, 
/**
 *A group of candidates have been inducted. The batch's primary is the first value, the
 *batch in full is the second.
 */
"Inducted": Anonymize<Ie0phfcvllr4od>, 
/**
 *A suspended member has been judged.
 */
"SuspendedMemberJudgement": Anonymize<I476ep66p6ddg1>, 
/**
 *A candidate has been suspended
 */
"CandidateSuspended": Anonymize<I4b66js88p45m8>, 
/**
 *A member has been suspended
 */
"MemberSuspended": Anonymize<Ie3gphha4ejh40>, 
/**
 *A member has been challenged
 */
"Challenged": Anonymize<Ie3gphha4ejh40>, 
/**
 *A vote has been placed
 */
"Vote": Anonymize<If0btdsid69rrm>, 
/**
 *A vote has been placed for a defending member
 */
"DefenderVote": Anonymize<Ictusacdcqj61u>, 
/**
 *A new set of \[params\] has been set for the group.
 */
"NewParams": Anonymize<Ibsolu3c3q1lb4>, 
/**
 *Society is unfounded.
 */
"Unfounded": Anonymize<I8ircspqpe79k7>, 
/**
 *Some funds were deposited into the society account.
 */
"Deposit": Anonymize<Ie5v6njpckr05b>, 
/**
 *A \[member\] got elevated to \[rank\].
 */
"Elevated": Anonymize<Ib116djgo9u4uo>}>;

export type I8ircspqpe79k7 = {"founder": SS58String};

export type I1vlt8l6nvnen6 = {"candidate_id": SS58String, "offer": bigint};

export type I72vf0j9juc1df = {"candidate_id": SS58String, "offer": bigint, "vouching": SS58String};

export type Ie0phfcvllr4od = {"primary": SS58String, "candidates": Anonymize<Ia2lhg7l2hilo3>};

export type I476ep66p6ddg1 = {"who": SS58String, "judged": boolean};

export type If0btdsid69rrm = {"candidate": SS58String, "voter": SS58String, "vote": boolean};

export type Ictusacdcqj61u = {"voter": SS58String, "vote": boolean};

export type Ibsolu3c3q1lb4 = {"params": Anonymize<I9hkvi4k3kh916>};

export type I9hkvi4k3kh916 = {"max_members": number, "max_intake": number, "max_strikes": number, "candidate_deposit": bigint};

export type Ib116djgo9u4uo = {"member": SS58String, "rank": number};

export type RecoveryEvent = Enum<{
/**
 *A recovery process has been set up for an account.
 */
"RecoveryCreated": Anonymize<Icbccs0ug47ilf>, 
/**
 *A recovery process has been initiated for lost account by rescuer account.
 */
"RecoveryInitiated": Anonymize<I9vkkue6cq74et>, 
/**
 *A recovery process for lost account by rescuer account has been vouched for by sender.
 */
"RecoveryVouched": Anonymize<Ibu56t5h1q49i4>, 
/**
 *A recovery process for lost account by rescuer account has been closed.
 */
"RecoveryClosed": Anonymize<I9vkkue6cq74et>, 
/**
 *Lost account has been successfully recovered by rescuer account.
 */
"AccountRecovered": Anonymize<I9vkkue6cq74et>, 
/**
 *A recovery process has been removed for an account.
 */
"RecoveryRemoved": Anonymize<I1dmtl5t34b9g>}>;
export const RecoveryEvent = _Enum as unknown as GetEnum<RecoveryEvent>;

export type I9vkkue6cq74et = {"lost_account": SS58String, "rescuer_account": SS58String};

export type Ibu56t5h1q49i4 = {"lost_account": SS58String, "rescuer_account": SS58String, "sender": SS58String};

export type I1dmtl5t34b9g = {"lost_account": SS58String};

export type VestingEvent = Enum<{
/**
 *The amount vested has been updated. This could indicate a change in funds available.
 *The balance given is the amount which is left unvested (and thus locked).
 */
"VestingUpdated": Anonymize<Ievr89968437gm>, 
/**
 *An \[account\] has become fully vested.
 */
"VestingCompleted": Anonymize<Icbccs0ug47ilf>}>;
export const VestingEvent = _Enum as unknown as GetEnum<VestingEvent>;

export type Ievr89968437gm = {"account": SS58String, "unvested": bigint};

export type I6357idnghhlp = AnonymousEnum<{
/**
 *Scheduled some task.
 */
"Scheduled": Anonymize<I5n4sebgkfr760>, 
/**
 *Canceled some task.
 */
"Canceled": Anonymize<I5n4sebgkfr760>, 
/**
 *Dispatched some task.
 */
"Dispatched": Anonymize<I9lttnm94h400k>, 
/**
 *Set a retry configuration for some task.
 */
"RetrySet": Anonymize<Ia3c82eadg79bj>, 
/**
 *Cancel a retry configuration for some task.
 */
"RetryCancelled": Anonymize<Ienusoeb625ftq>, 
/**
 *The call for the provided hash was not found so the task has been aborted.
 */
"CallUnavailable": Anonymize<Ienusoeb625ftq>, 
/**
 *The given task was unable to be renewed since the agenda is full at that block.
 */
"PeriodicFailed": Anonymize<Ienusoeb625ftq>, 
/**
 *The given task was unable to be retried since the agenda is full at that block or there
 *was not enough weight to reschedule it.
 */
"RetryFailed": Anonymize<Ienusoeb625ftq>, 
/**
 *The given task can never be executed since it is overweight.
 */
"PermanentlyOverweight": Anonymize<Ienusoeb625ftq>, 
/**
 *Agenda is incomplete from `when`.
 */
"AgendaIncomplete": Anonymize<Ibtsa3docbr9el>}>;

export type I5n4sebgkfr760 = {"when": number, "index": number};

export type I9lttnm94h400k = {"task": Anonymize<I9jd27rnpm8ttv>, "id"?: Anonymize<I4s6vifaf8k998>, "result": Anonymize<I4lj7jffoad80h>};

export type Ia3c82eadg79bj = {"task": Anonymize<I9jd27rnpm8ttv>, "id"?: Anonymize<I4s6vifaf8k998>, "period": number, "retries": number};

export type Ienusoeb625ftq = {"task": Anonymize<I9jd27rnpm8ttv>, "id"?: Anonymize<I4s6vifaf8k998>};

export type Ibtsa3docbr9el = {"when": number};

export type I425r46k4e6lh7 = AnonymousEnum<{
/**
 *The pallet has been (re)initialized.
 */
"PalletInitialized": Anonymize<Iaptu898o7fke5>, 
/**
 *The computation limit has been updated.
 */
"ComputationLimitSet": Anonymize<Iaj8k89bv67r1v>, 
/**
 *The storage limit has been updated.
 */
"StorageLimitSet": Anonymize<Idd027nofevf40>, 
/**
 *The block length limit has been updated.
 */
"BlockLengthLimitSet": Anonymize<I4lv0lf2s7ue5b>}>;

export type Iaptu898o7fke5 = {
/**
 *Whether the pallet has been re-initialized.
 */
"reinit": boolean};

export type Iaj8k89bv67r1v = {
/**
 *The computation limit.
 */
"compute": bigint};

export type Idd027nofevf40 = {
/**
 *The storage limit.
 */
"storage": bigint};

export type I4lv0lf2s7ue5b = {
/**
 *The block length limit.
 */
"block_length": bigint};

export type PreimageEvent = Enum<{
/**
 *A preimage has been noted.
 */
"Noted": Anonymize<I1jm8m1rh9e20v>, 
/**
 *A preimage has been requested.
 */
"Requested": Anonymize<I1jm8m1rh9e20v>, 
/**
 *A preimage has ben cleared.
 */
"Cleared": Anonymize<I1jm8m1rh9e20v>}>;
export const PreimageEvent = _Enum as unknown as GetEnum<PreimageEvent>;

export type I1jm8m1rh9e20v = {"hash": FixedSizeBinary<32>};

export type I8j7hgnilb7ndf = AnonymousEnum<{
/**
 *A proxy was executed correctly, with the given.
 */
"ProxyExecuted": Anonymize<Icu3ibt9ugvm6i>, 
/**
 *A pure account has been created by new proxy with given
 *disambiguation index and proxy type.
 */
"PureCreated": Anonymize<Ica53a2fsmlu8g>, 
/**
 *An announcement was placed to make a call in the future.
 */
"Announced": Anonymize<I2ur0oeqg495j8>, 
/**
 *A proxy was added.
 */
"ProxyAdded": Anonymize<I3g2abs6vce9f8>, 
/**
 *A proxy was removed.
 */
"ProxyRemoved": Anonymize<I3g2abs6vce9f8>, 
/**
 *A deposit stored for proxies or announcements was poked / updated.
 */
"DepositPoked": Anonymize<I1bhd210c3phjj>}>;

export type Ica53a2fsmlu8g = {"pure": SS58String, "who": SS58String, "proxy_type": Anonymize<I1bpip5bh5877p>, "disambiguation_index": number};

export type I1bpip5bh5877p = AnonymousEnum<{"Any": undefined, "NonTransfer": undefined, "Governance": undefined, "Staking": undefined}>;

export type I3g2abs6vce9f8 = {"delegator": SS58String, "delegatee": SS58String, "proxy_type": Anonymize<I1bpip5bh5877p>, "delay": number};

export type I1bhd210c3phjj = {"who": SS58String, "kind": Enum<{"Proxies": undefined, "Announcements": undefined}>, "old_deposit": bigint, "new_deposit": bigint};

export type I66gr3eqlgv5lv = AnonymousEnum<{
/**
 *A new multisig operation has begun.
 */
"NewMultisig": Anonymize<Iep27ialq4a7o7>, 
/**
 *A multisig operation has been approved by someone.
 */
"MultisigApproval": Anonymize<Iasu5jvoqr43mv>, 
/**
 *A multisig operation has been executed.
 */
"MultisigExecuted": Anonymize<I4g4arol29gb8b>, 
/**
 *A multisig operation has been cancelled.
 */
"MultisigCancelled": Anonymize<I5qolde99acmd1>, 
/**
 *The deposit for a multisig operation has been updated/poked.
 */
"DepositPoked": Anonymize<I8gtde5abn1g9a>}>;

export type I4g4arol29gb8b = {"approving": SS58String, "timepoint": Anonymize<Itvprrpb0nm3o>, "multisig": SS58String, "call_hash": FixedSizeBinary<32>, "result": Anonymize<I4lj7jffoad80h>};

export type I8gtde5abn1g9a = {"who": SS58String, "call_hash": FixedSizeBinary<32>, "old_deposit": bigint, "new_deposit": bigint};

export type BountiesEvent = Enum<{
/**
 *New bounty proposal.
 */
"BountyProposed": Anonymize<I666bl2fqjkejo>, 
/**
 *A bounty proposal was rejected; funds were slashed.
 */
"BountyRejected": Anonymize<Id9idaj83175f9>, 
/**
 *A bounty proposal is funded and became active.
 */
"BountyBecameActive": Anonymize<I666bl2fqjkejo>, 
/**
 *A bounty is awarded to a beneficiary.
 */
"BountyAwarded": Anonymize<Ie1semicfuv5uu>, 
/**
 *A bounty is claimed by beneficiary.
 */
"BountyClaimed": Anonymize<If25fjs9o37co1>, 
/**
 *A bounty is cancelled.
 */
"BountyCanceled": Anonymize<I666bl2fqjkejo>, 
/**
 *A bounty expiry is extended.
 */
"BountyExtended": Anonymize<I666bl2fqjkejo>, 
/**
 *A bounty is approved.
 */
"BountyApproved": Anonymize<I666bl2fqjkejo>, 
/**
 *A bounty curator is proposed.
 */
"CuratorProposed": Anonymize<I70sc1pdo8vtos>, 
/**
 *A bounty curator is unassigned.
 */
"CuratorUnassigned": Anonymize<Ia9p5bg6p18r0i>, 
/**
 *A bounty curator is accepted.
 */
"CuratorAccepted": Anonymize<I70sc1pdo8vtos>}>;
export const BountiesEvent = _Enum as unknown as GetEnum<BountiesEvent>;

export type Id9idaj83175f9 = {"index": number, "bond": bigint};

export type Ie1semicfuv5uu = {"index": number, "beneficiary": SS58String};

export type If25fjs9o37co1 = {"index": number, "payout": bigint, "beneficiary": SS58String};

export type I70sc1pdo8vtos = {"bounty_id": number, "curator": SS58String};

export type Ia9p5bg6p18r0i = {"bounty_id": number};

export type Imaosic05it19 = AnonymousEnum<{
/**
 *A new tip suggestion has been opened.
 */
"NewTip": Anonymize<Iep7an7g10jgpc>, 
/**
 *A tip suggestion has reached threshold and is closing.
 */
"TipClosing": Anonymize<Iep7an7g10jgpc>, 
/**
 *A tip suggestion has been closed.
 */
"TipClosed": Anonymize<Ierev02d74bpoa>, 
/**
 *A tip suggestion has been retracted.
 */
"TipRetracted": Anonymize<Iep7an7g10jgpc>, 
/**
 *A tip suggestion has been slashed.
 */
"TipSlashed": Anonymize<Ic836gl3ins837>}>;

export type Iep7an7g10jgpc = {"tip_hash": FixedSizeBinary<32>};

export type Ierev02d74bpoa = {"tip_hash": FixedSizeBinary<32>, "who": SS58String, "payout": bigint};

export type Ic836gl3ins837 = {"tip_hash": FixedSizeBinary<32>, "finder": SS58String, "deposit": bigint};

export type I8vg8ohhden12t = AnonymousEnum<{
/**
 *A lottery has been started!
 */
"LotteryStarted": undefined, 
/**
 *A new set of calls have been set!
 */
"CallsUpdated": undefined, 
/**
 *A winner has been chosen!
 */
"Winner": Anonymize<Idtfinpnsamten>, 
/**
 *A ticket has been bought!
 */
"TicketBought": Anonymize<I455dk0vr5anih>}>;

export type Idtfinpnsamten = {"winner": SS58String, "lottery_balance": bigint};

export type I455dk0vr5anih = {"who": SS58String, "call_index": FixedSizeBinary<2>};

export type I9dmlhfape78ke = AnonymousEnum<{
/**
 *A bid was successfully placed.
 */
"BidPlaced": Anonymize<Ie2vmgag6qiue4>, 
/**
 *A bid was successfully removed (before being accepted).
 */
"BidRetracted": Anonymize<Ie2vmgag6qiue4>, 
/**
 *A bid was dropped from a queue because of another, more substantial, bid was present.
 */
"BidDropped": Anonymize<Ie2vmgag6qiue4>, 
/**
 *A bid was accepted. The balance may not be released until expiry.
 */
"Issued": Anonymize<I1kpuet4lkcdpf>, 
/**
 *An receipt has been (at least partially) thawed.
 */
"Thawed": Anonymize<I5tr1gp2t9i6oh>, 
/**
 *An automatic funding of the deficit was made.
 */
"Funded": Anonymize<I7ls1r4u61csif>, 
/**
 *A receipt was transferred.
 */
"Transferred": Anonymize<I3gjgtso69eopr>}>;

export type Ie2vmgag6qiue4 = {"who": SS58String, "amount": bigint, "duration": number};

export type I1kpuet4lkcdpf = {
/**
 *The identity of the receipt.
 */
"index": number, 
/**
 *The block number at which the receipt may be thawed.
 */
"expiry": number, 
/**
 *The owner of the receipt.
 */
"who": SS58String, 
/**
 *The proportion of the effective total issuance which the receipt represents.
 */
"proportion": bigint, 
/**
 *The amount of funds which were debited from the owner.
 */
"amount": bigint};

export type I5tr1gp2t9i6oh = {
/**
 *The identity of the receipt.
 */
"index": number, 
/**
 *The owner.
 */
"who": SS58String, 
/**
 *The proportion of the effective total issuance by which the owner was debited.
 */
"proportion": bigint, 
/**
 *The amount by which the owner was credited.
 */
"amount": bigint, 
/**
 *If `true` then the receipt is done.
 */
"dropped": boolean};

export type I7ls1r4u61csif = {"deficit": bigint};

export type I3gjgtso69eopr = {"from": SS58String, "to": SS58String, "index": number};

export type I27m52gdafk6nc = AnonymousEnum<{
/**
 *A member is inducted into the payroll.
 */
"Inducted": Anonymize<I4cbvqmqadhrea>, 
/**
 *A member registered for a payout.
 */
"Registered": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *A payment happened.
 */
"Paid": Anonymize<I201plm6irk5mk>, 
/**
 *The next cycle begins.
 */
"CycleStarted": Anonymize<I666bl2fqjkejo>, 
/**
 *A member swapped their account.
 */
"Swapped": Anonymize<Ier6ck0tpfo7>}>;

export type I201plm6irk5mk = {"who": SS58String, "beneficiary": SS58String, "amount": bigint};

export type Ier6ck0tpfo7 = {"who": SS58String, "new_who": SS58String};

export type I2bqfnlnlvs6f0 = AnonymousEnum<{
/**
 *Parameters for the pallet have changed.
 */
"ParamsChanged": Anonymize<I5mruatkavn9hn>, 
/**
 *Member activity flag has been set.
 */
"ActiveChanged": Anonymize<I9j3uq1uk06oju>, 
/**
 *Member has begun being tracked in this pallet.
 */
"Inducted": Anonymize<I4cbvqmqadhrea>, 
/**
 *Member has been removed from being tracked in this pallet (i.e. because rank is now
 *zero).
 */
"Offboarded": Anonymize<I4cbvqmqadhrea>, 
/**
 *Member has been promoted to the given rank.
 */
"Promoted": Anonymize<I5kpe8b2kedtqn>, 
/**
 *Member has been demoted to the given (non-zero) rank.
 */
"Demoted": Anonymize<I5kpe8b2kedtqn>, 
/**
 *Member has been proven at their current rank, postponing auto-demotion.
 */
"Proven": Anonymize<Ic79d2eioda33s>, 
/**
 *Member has stated evidence of their efforts their request for rank.
 */
"Requested": Anonymize<I2t83mr73603p9>, 
/**
 *Some submitted evidence was judged and removed. There may or may not have been a change
 *to the rank, but in any case, `last_proof` is reset.
 */
"EvidenceJudged": Anonymize<Ibas6o69e1qaqo>, 
/**
 *Pre-ranked account has been inducted at their current rank.
 */
"Imported": Anonymize<Im1pm2vf6llcn>, 
/**
 *A member had its AccountId swapped.
 */
"Swapped": Anonymize<Ier6ck0tpfo7>}>;

export type I5mruatkavn9hn = {"params": Anonymize<I6qcggph46iog7>};

export type I6qcggph46iog7 = {"active_salary": Anonymize<Iafqnechp3omqg>, "passive_salary": Anonymize<Iafqnechp3omqg>, "demotion_period": Anonymize<Icgljjb6j82uhn>, "min_promotion_period": Anonymize<Icgljjb6j82uhn>, "offboard_timeout": number};

export type Iafqnechp3omqg = Array<bigint>;

export type I9j3uq1uk06oju = {"who": SS58String, "is_active": boolean};

export type I5kpe8b2kedtqn = {"who": SS58String, "to_rank": number};

export type Ic79d2eioda33s = {"who": SS58String, "at_rank": number};

export type I2t83mr73603p9 = {"who": SS58String, "wish": Anonymize<Iel6f1b4fu88cv>};

export type Iel6f1b4fu88cv = AnonymousEnum<{"Retention": undefined, "Promotion": undefined}>;

export type Ibas6o69e1qaqo = {
/**
 *The member/candidate.
 */
"who": SS58String, 
/**
 *The desired outcome for which the evidence was presented.
 */
"wish": Anonymize<Iel6f1b4fu88cv>, 
/**
 *The evidence of efforts.
 */
"evidence": Binary, 
/**
 *The old rank, prior to this change.
 */
"old_rank": number, 
/**
 *New rank. If `None` then candidate record was removed entirely.
 */
"new_rank"?: Anonymize<I4arjljr6dpflb>};

export type Im1pm2vf6llcn = {"who": SS58String, "rank": number};

export type Iavj2l461j66eo = AnonymousEnum<{
/**
 *Stored data under specified index.
 */
"Stored": Anonymize<I666bl2fqjkejo>, 
/**
 *Renewed data under specified index.
 */
"Renewed": Anonymize<I666bl2fqjkejo>, 
/**
 *Storage proof was successfully checked.
 */
"ProofChecked": undefined}>;

export type BagsListEvent = Enum<{
/**
 *Moved an account from one bag to another.
 */
"Rebagged": Anonymize<I37454vatvmm1l>, 
/**
 *Updated the score of some account to the given amount.
 */
"ScoreUpdated": Anonymize<Iblau1qa7u7fet>}>;
export const BagsListEvent = _Enum as unknown as GetEnum<BagsListEvent>;

export type I37454vatvmm1l = {"who": SS58String, "from": bigint, "to": bigint};

export type Iblau1qa7u7fet = {"who": SS58String, "new_score": bigint};

export type ChildBountiesEvent = Enum<{
/**
 *A child-bounty is added.
 */
"Added": Anonymize<I60p8l86a8cm59>, 
/**
 *A child-bounty is awarded to a beneficiary.
 */
"Awarded": Anonymize<I3m3sk2lgcabvp>, 
/**
 *A child-bounty is claimed by beneficiary.
 */
"Claimed": Anonymize<I5pf572duh4oeg>, 
/**
 *A child-bounty is cancelled.
 */
"Canceled": Anonymize<I60p8l86a8cm59>}>;
export const ChildBountiesEvent = _Enum as unknown as GetEnum<ChildBountiesEvent>;

export type I60p8l86a8cm59 = {"index": number, "child_index": number};

export type I3m3sk2lgcabvp = {"index": number, "child_index": number, "beneficiary": SS58String};

export type I5pf572duh4oeg = {"index": number, "child_index": number, "payout": bigint, "beneficiary": SS58String};

export type Idfraa3b4eu018 = AnonymousEnum<{
/**
 *A referendum has been submitted.
 */
"Submitted": Anonymize<I229ijht536qdu>, 
/**
 *The decision deposit has been placed.
 */
"DecisionDepositPlaced": Anonymize<I62nte77gksm0f>, 
/**
 *The decision deposit has been refunded.
 */
"DecisionDepositRefunded": Anonymize<I62nte77gksm0f>, 
/**
 *A deposit has been slashed.
 */
"DepositSlashed": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *A referendum has moved into the deciding phase.
 */
"DecisionStarted": Anonymize<I9cg2delv92pvq>, "ConfirmStarted": Anonymize<I666bl2fqjkejo>, "ConfirmAborted": Anonymize<I666bl2fqjkejo>, 
/**
 *A referendum has ended its confirmation phase and is ready for approval.
 */
"Confirmed": Anonymize<Ilhp45uime5tp>, 
/**
 *A referendum has been approved and its proposal has been scheduled.
 */
"Approved": Anonymize<I666bl2fqjkejo>, 
/**
 *A proposal has been rejected by referendum.
 */
"Rejected": Anonymize<Ilhp45uime5tp>, 
/**
 *A referendum has been timed out without being decided.
 */
"TimedOut": Anonymize<Ilhp45uime5tp>, 
/**
 *A referendum has been cancelled.
 */
"Cancelled": Anonymize<Ilhp45uime5tp>, 
/**
 *A referendum has been killed.
 */
"Killed": Anonymize<Ilhp45uime5tp>, 
/**
 *The submission deposit has been refunded.
 */
"SubmissionDepositRefunded": Anonymize<I62nte77gksm0f>, 
/**
 *Metadata for a referendum has been set.
 */
"MetadataSet": Anonymize<I4f1hv034jf1dt>, 
/**
 *Metadata for a referendum has been cleared.
 */
"MetadataCleared": Anonymize<I4f1hv034jf1dt>}>;

export type I229ijht536qdu = {
/**
 *Index of the referendum.
 */
"index": number, 
/**
 *The track (and by extension proposal dispatch origin) of this referendum.
 */
"track": number, 
/**
 *The proposal for the referendum.
 */
"proposal": PreimagesBounded};

export type PreimagesBounded = Enum<{"Legacy": Anonymize<I1jm8m1rh9e20v>, "Inline": Binary, "Lookup": {"hash": FixedSizeBinary<32>, "len": number}}>;
export const PreimagesBounded = _Enum as unknown as GetEnum<PreimagesBounded>;

export type I62nte77gksm0f = {
/**
 *Index of the referendum.
 */
"index": number, 
/**
 *The account who placed the deposit.
 */
"who": SS58String, 
/**
 *The amount placed by the account.
 */
"amount": bigint};

export type I9cg2delv92pvq = {
/**
 *Index of the referendum.
 */
"index": number, 
/**
 *The track (and by extension proposal dispatch origin) of this referendum.
 */
"track": number, 
/**
 *The proposal for the referendum.
 */
"proposal": PreimagesBounded, 
/**
 *The current tally of votes in this referendum.
 */
"tally": Anonymize<Ifsk7cbmtit1jd>};

export type Ifsk7cbmtit1jd = {"ayes": bigint, "nays": bigint, "support": bigint};

export type Ilhp45uime5tp = {
/**
 *Index of the referendum.
 */
"index": number, 
/**
 *The final tally of votes in this referendum.
 */
"tally": Anonymize<Ifsk7cbmtit1jd>};

export type I4f1hv034jf1dt = {
/**
 *Index of the referendum.
 */
"index": number, 
/**
 *Preimage hash.
 */
"hash": FixedSizeBinary<32>};

export type I1gmbkg2e44dlb = AnonymousEnum<{
/**
 *Stored data off chain.
 */
"Stored": Anonymize<Icr6lg11cpe563>}>;

export type Icr6lg11cpe563 = {"sender": SS58String, "content_hash": FixedSizeBinary<32>};

export type RootTestingEvent = Enum<{
/**
 *Event dispatched when the trigger_defensive extrinsic is called.
 */
"DefensiveTestCall": undefined}>;
export const RootTestingEvent = _Enum as unknown as GetEnum<RootTestingEvent>;

export type I7tvgbf73o5td4 = AnonymousEnum<{
/**
 *An account has delegated their vote to another account. \[who, target\]
 */
"Delegated": Anonymize<I2na29tt2afp0j>, 
/**
 *An \[account\] has cancelled a previous delegation operation.
 */
"Undelegated": SS58String, 
/**
 *An account has voted
 */
"Voted": Anonymize<I9qfchhljqsjjl>, 
/**
 *A vote has been removed
 */
"VoteRemoved": Anonymize<I9qfchhljqsjjl>, 
/**
 *The lockup period of a conviction vote expired, and the funds have been unlocked.
 */
"VoteUnlocked": Anonymize<I7kij8p9kchdjo>}>;

export type I2na29tt2afp0j = FixedSizeArray<2, SS58String>;

export type I9qfchhljqsjjl = {"who": SS58String, "vote": ConvictionVotingVoteAccountVote};

export type ConvictionVotingVoteAccountVote = Enum<{"Standard": Anonymize<Ib024p97ls1cla>, "Split": Anonymize<I5pi71t9bosoiv>, "SplitAbstain": {"aye": bigint, "nay": bigint, "abstain": bigint}}>;
export const ConvictionVotingVoteAccountVote = _Enum as unknown as GetEnum<ConvictionVotingVoteAccountVote>;

export type I7kij8p9kchdjo = {"who": SS58String, "class": number};

export type If20j6dqn1mdl2 = AnonymousEnum<{"CallWhitelisted": Anonymize<I1adbcfi5uc62r>, "WhitelistedCallRemoved": Anonymize<I1adbcfi5uc62r>, "WhitelistedCallDispatched": Anonymize<Iaa72l8f5ic4uq>}>;

export type I1adbcfi5uc62r = {"call_hash": FixedSizeBinary<32>};

export type Iaa72l8f5ic4uq = {"call_hash": FixedSizeBinary<32>, "result": Anonymize<Icmv0mds3tl8ol>};

export type Icmv0mds3tl8ol = ResultPayload<Anonymize<Ia1u1r3n74r13c>, {"post_info": Anonymize<Ia1u1r3n74r13c>, "error": Anonymize<I2nd362qiea9l6>}>;

export type Ieqqqv5fkfk9gi = AnonymousEnum<{
/**
 *A new rule has been set.
 */
"NewRuleSet": Anonymize<I465k81tqg3usk>, 
/**
 *A new announcement has been proposed.
 */
"Announced": Anonymize<I54d7mcgvp9b3a>, 
/**
 *An on-chain announcement has been removed.
 */
"AnnouncementRemoved": Anonymize<I54d7mcgvp9b3a>, 
/**
 *Some accounts have been initialized as members (fellows/allies).
 */
"MembersInitialized": Anonymize<Ia61kag3grdevk>, 
/**
 *An account has been added as an Ally and reserved its deposit.
 */
"NewAllyJoined": Anonymize<I79vua51vqq0mc>, 
/**
 *An ally has been elevated to Fellow.
 */
"AllyElevated": Anonymize<I3trq1j79d9t1e>, 
/**
 *A member gave retirement notice and their retirement period started.
 */
"MemberRetirementPeriodStarted": Anonymize<Ie3gphha4ejh40>, 
/**
 *A member has retired with its deposit unreserved.
 */
"MemberRetired": Anonymize<Iafhd8kv029rqj>, 
/**
 *A member has been kicked out with its deposit slashed.
 */
"MemberKicked": Anonymize<I2mcnoj31i9be1>, 
/**
 *Accounts or websites have been added into the list of unscrupulous items.
 */
"UnscrupulousItemAdded": Anonymize<Ickqr13ag0mv3c>, 
/**
 *Accounts or websites have been removed from the list of unscrupulous items.
 */
"UnscrupulousItemRemoved": Anonymize<Ickqr13ag0mv3c>, 
/**
 *Alliance disbanded. Includes number deleted members and unreserved deposits.
 */
"AllianceDisbanded": Anonymize<I9dapsurd7u7ga>, 
/**
 *A Fellow abdicated their voting rights. They are now an Ally.
 */
"FellowAbdicated": Anonymize<I8uij7nmvtb96e>}>;

export type I465k81tqg3usk = {"rule": Anonymize<I982189ri79b4u>};

export type I982189ri79b4u = {"version": Version, "codec": bigint, "hash": {"code": bigint, "digest": Binary}};

export type Version = Enum<{"V0": undefined, "V1": undefined}>;
export const Version = _Enum as unknown as GetEnum<Version>;

export type I54d7mcgvp9b3a = {"announcement": Anonymize<I982189ri79b4u>};

export type Ia61kag3grdevk = {"fellows": Anonymize<Ia2lhg7l2hilo3>, "allies": Anonymize<Ia2lhg7l2hilo3>};

export type I79vua51vqq0mc = {"ally": SS58String, "nominator"?: Anonymize<Ihfphjolmsqq1>, "reserved"?: Anonymize<I35p85j063s0il>};

export type I3trq1j79d9t1e = {"ally": SS58String};

export type Iafhd8kv029rqj = {"member": SS58String, "unreserved"?: Anonymize<I35p85j063s0il>};

export type I2mcnoj31i9be1 = {"member": SS58String, "slashed"?: Anonymize<I35p85j063s0il>};

export type Ickqr13ag0mv3c = {"items": Array<Enum<{"AccountId": SS58String, "Website": Binary}>>};

export type I9dapsurd7u7ga = {"fellow_members": number, "ally_members": number, "unreserved": number};

export type I8uij7nmvtb96e = {"fellow": SS58String};

export type Id0dkgikq71n9h = AnonymousEnum<{
/**
 *A pool has been created.
 */
"Created": Anonymize<I1ti389kf8t6oi>, 
/**
 *A member has became bonded in a pool.
 */
"Bonded": Anonymize<If4nnre373amul>, 
/**
 *A payout has been made to a member.
 */
"PaidOut": Anonymize<I55kbor0ocqk6h>, 
/**
 *A member has unbonded from their pool.
 *
 *- `balance` is the corresponding balance of the number of points that has been
 *  requested to be unbonded (the argument of the `unbond` transaction) from the bonded
 *  pool.
 *- `points` is the number of points that are issued as a result of `balance` being
 *dissolved into the corresponding unbonding pool.
 *- `era` is the era in which the balance will be unbonded.
 *In the absence of slashing, these values will match. In the presence of slashing, the
 *number of points that are issued in the unbonding pool will be less than the amount
 *requested to be unbonded.
 */
"Unbonded": Anonymize<Idsj9cg7j96kpc>, 
/**
 *A member has withdrawn from their pool.
 *
 *The given number of `points` have been dissolved in return of `balance`.
 *
 *Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
 *will be 1.
 */
"Withdrawn": Anonymize<Ido4u9drncfaml>, 
/**
 *A pool has been destroyed.
 */
"Destroyed": Anonymize<I931cottvong90>, 
/**
 *The state of a pool has changed
 */
"StateChanged": Anonymize<Ie8c7ctks8ur2p>, 
/**
 *A member has been removed from a pool.
 *
 *The removal can be voluntary (withdrawn all unbonded funds) or involuntary (kicked).
 *Any funds that are still delegated (i.e. dangling delegation) are released and are
 *represented by `released_balance`.
 */
"MemberRemoved": Anonymize<I6c6fpqmnqijqd>, 
/**
 *The roles of a pool have been updated to the given new roles. Note that the depositor
 *can never change.
 */
"RolesUpdated": Anonymize<I6mik29s5073td>, 
/**
 *The active balance of pool `pool_id` has been slashed to `balance`.
 */
"PoolSlashed": Anonymize<I2m0sqmb75cnpb>, 
/**
 *The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
 */
"UnbondingPoolSlashed": Anonymize<I49agc5b62mehu>, 
/**
 *A pool's commission setting has been changed.
 */
"PoolCommissionUpdated": Anonymize<Iatq9jda4hq6pg>, 
/**
 *A pool's maximum commission setting has been changed.
 */
"PoolMaxCommissionUpdated": Anonymize<I8cbluptqo8kbp>, 
/**
 *A pool's commission `change_rate` has been changed.
 */
"PoolCommissionChangeRateUpdated": Anonymize<I81cc4plffa1dm>, 
/**
 *Pool commission claim permission has been updated.
 */
"PoolCommissionClaimPermissionUpdated": Anonymize<I3ihan8icf0c5k>, 
/**
 *Pool commission has been claimed.
 */
"PoolCommissionClaimed": Anonymize<I2g87evcjlgmqi>, 
/**
 *Topped up deficit in frozen ED of the reward pool.
 */
"MinBalanceDeficitAdjusted": Anonymize<Ieg1oc56mamrl5>, 
/**
 *Claimed excess frozen ED of af the reward pool.
 */
"MinBalanceExcessAdjusted": Anonymize<Ieg1oc56mamrl5>, 
/**
 *A pool member's claim permission has been updated.
 */
"MemberClaimPermissionUpdated": Anonymize<I93ajn7brqs8df>, 
/**
 *A pool's metadata was updated.
 */
"MetadataUpdated": Anonymize<Ib2q8vnsr19t9b>, 
/**
 *A pool's nominating account (or the pool's root account) has nominated a validator set
 *on behalf of the pool.
 */
"PoolNominationMade": Anonymize<Ib2q8vnsr19t9b>, 
/**
 *The pool is chilled i.e. no longer nominating.
 */
"PoolNominatorChilled": Anonymize<Ib2q8vnsr19t9b>, 
/**
 *Global parameters regulating nomination pools have been updated.
 */
"GlobalParamsUpdated": Anonymize<If6q1q7op2gvqf>}>;

export type I1ti389kf8t6oi = {"depositor": SS58String, "pool_id": number};

export type If4nnre373amul = {"member": SS58String, "pool_id": number, "bonded": bigint, "joined": boolean};

export type I55kbor0ocqk6h = {"member": SS58String, "pool_id": number, "payout": bigint};

export type Idsj9cg7j96kpc = {"member": SS58String, "pool_id": number, "balance": bigint, "points": bigint, "era": number};

export type Ido4u9drncfaml = {"member": SS58String, "pool_id": number, "balance": bigint, "points": bigint};

export type Ie8c7ctks8ur2p = {"pool_id": number, "new_state": NominationPoolsPoolState};

export type NominationPoolsPoolState = Enum<{"Open": undefined, "Blocked": undefined, "Destroying": undefined}>;
export const NominationPoolsPoolState = _Enum as unknown as GetEnum<NominationPoolsPoolState>;

export type I6c6fpqmnqijqd = {"pool_id": number, "member": SS58String, "released_balance": bigint};

export type I6mik29s5073td = {"root"?: Anonymize<Ihfphjolmsqq1>, "bouncer"?: Anonymize<Ihfphjolmsqq1>, "nominator"?: Anonymize<Ihfphjolmsqq1>};

export type I2m0sqmb75cnpb = {"pool_id": number, "balance": bigint};

export type I49agc5b62mehu = {"pool_id": number, "era": number, "balance": bigint};

export type Iatq9jda4hq6pg = {"pool_id": number, "current"?: Anonymize<Ie8iutm7u02lmj>};

export type Ie8iutm7u02lmj = (Anonymize<I7svnfko10tq2e>) | undefined;

export type I8cbluptqo8kbp = {"pool_id": number, "max_commission": number};

export type I81cc4plffa1dm = {"pool_id": number, "change_rate": Anonymize<Ibqul338t9c1ll>};

export type Ibqul338t9c1ll = {"max_increase": number, "min_delay": number};

export type I3ihan8icf0c5k = {"pool_id": number, "permission"?: Anonymize<I16m1kn78dee7v>};

export type I16m1kn78dee7v = (NominationPoolsCommissionClaimPermission) | undefined;

export type NominationPoolsCommissionClaimPermission = Enum<{"Permissionless": undefined, "Account": SS58String}>;
export const NominationPoolsCommissionClaimPermission = _Enum as unknown as GetEnum<NominationPoolsCommissionClaimPermission>;

export type I2g87evcjlgmqi = {"pool_id": number, "commission": bigint};

export type I93ajn7brqs8df = {"member": SS58String, "permission": NominationPoolsClaimPermission};

export type NominationPoolsClaimPermission = Enum<{"Permissioned": undefined, "PermissionlessCompound": undefined, "PermissionlessWithdraw": undefined, "PermissionlessAll": undefined}>;
export const NominationPoolsClaimPermission = _Enum as unknown as GetEnum<NominationPoolsClaimPermission>;

export type Ib2q8vnsr19t9b = {"pool_id": number, "caller": SS58String};

export type If6q1q7op2gvqf = {"min_join_bond": bigint, "min_create_bond": bigint, "max_pools"?: Anonymize<I4arjljr6dpflb>, "max_members"?: Anonymize<I4arjljr6dpflb>, "max_members_per_pool"?: Anonymize<I4arjljr6dpflb>, "global_max_commission"?: Anonymize<I4arjljr6dpflb>};

export type I28aoa43r171jt = AnonymousEnum<{
/**
 *A referendum has been submitted.
 */
"Submitted": Anonymize<I229ijht536qdu>, 
/**
 *The decision deposit has been placed.
 */
"DecisionDepositPlaced": Anonymize<I62nte77gksm0f>, 
/**
 *The decision deposit has been refunded.
 */
"DecisionDepositRefunded": Anonymize<I62nte77gksm0f>, 
/**
 *A deposit has been slashed.
 */
"DepositSlashed": Anonymize<Id5fm4p8lj5qgi>, 
/**
 *A referendum has moved into the deciding phase.
 */
"DecisionStarted": Anonymize<Ic6ecdcp9ut7jd>, "ConfirmStarted": Anonymize<I666bl2fqjkejo>, "ConfirmAborted": Anonymize<I666bl2fqjkejo>, 
/**
 *A referendum has ended its confirmation phase and is ready for approval.
 */
"Confirmed": Anonymize<I27notaksll8qt>, 
/**
 *A referendum has been approved and its proposal has been scheduled.
 */
"Approved": Anonymize<I666bl2fqjkejo>, 
/**
 *A proposal has been rejected by referendum.
 */
"Rejected": Anonymize<I27notaksll8qt>, 
/**
 *A referendum has been timed out without being decided.
 */
"TimedOut": Anonymize<I27notaksll8qt>, 
/**
 *A referendum has been cancelled.
 */
"Cancelled": Anonymize<I27notaksll8qt>, 
/**
 *A referendum has been killed.
 */
"Killed": Anonymize<I27notaksll8qt>, 
/**
 *The submission deposit has been refunded.
 */
"SubmissionDepositRefunded": Anonymize<I62nte77gksm0f>, 
/**
 *Metadata for a referendum has been set.
 */
"MetadataSet": Anonymize<I4f1hv034jf1dt>, 
/**
 *Metadata for a referendum has been cleared.
 */
"MetadataCleared": Anonymize<I4f1hv034jf1dt>}>;

export type Ic6ecdcp9ut7jd = {
/**
 *Index of the referendum.
 */
"index": number, 
/**
 *The track (and by extension proposal dispatch origin) of this referendum.
 */
"track": number, 
/**
 *The proposal for the referendum.
 */
"proposal": PreimagesBounded, 
/**
 *The current tally of votes in this referendum.
 */
"tally": Anonymize<I6d634btv7misu>};

export type I6d634btv7misu = {"bare_ayes": number, "ayes": number, "nays": number};

export type I27notaksll8qt = {
/**
 *Index of the referendum.
 */
"index": number, 
/**
 *The final tally of votes in this referendum.
 */
"tally": Anonymize<I6d634btv7misu>};

export type Ifuucdgpuglunu = AnonymousEnum<{
/**
 *A member `who` has been added.
 */
"MemberAdded": Anonymize<I4cbvqmqadhrea>, 
/**
 *The member `who`se rank has been changed to the given `rank`.
 */
"RankChanged": Anonymize<Im1pm2vf6llcn>, 
/**
 *The member `who` of given `rank` has been removed from the collective.
 */
"MemberRemoved": Anonymize<Im1pm2vf6llcn>, 
/**
 *The member `who` has voted for the `poll` with the given `vote` leading to an updated
 *`tally`.
 */
"Voted": Anonymize<I21jsoeb0o6476>, 
/**
 *The member `who` had their `AccountId` changed to `new_who`.
 */
"MemberExchanged": Anonymize<Ier6ck0tpfo7>}>;

export type I21jsoeb0o6476 = {"who": SS58String, "poll": number, "vote": Anonymize<I3gg47bgkgq9tr>, "tally": Anonymize<I6d634btv7misu>};

export type I3gg47bgkgq9tr = AnonymousEnum<{"Aye": number, "Nay": number}>;

export type Icg9s7i4r0ihvp = AnonymousEnum<{
/**
 *A successful call of the `CreatePool` extrinsic will create this event.
 */
"PoolCreated": Anonymize<I5okq99a5mhve0>, 
/**
 *A successful call of the `AddLiquidity` extrinsic will create this event.
 */
"LiquidityAdded": Anonymize<Ibtl2buofcs39i>, 
/**
 *A successful call of the `RemoveLiquidity` extrinsic will create this event.
 */
"LiquidityRemoved": Anonymize<I359nvpbbb5v0e>, 
/**
 *Assets have been converted from one to another. Both `SwapExactTokenForToken`
 *and `SwapTokenForExactToken` will generate this event.
 */
"SwapExecuted": Anonymize<I8t31d95clla6j>, 
/**
 *Assets have been converted from one to another.
 */
"SwapCreditExecuted": Anonymize<Ifcsperb0j354i>, 
/**
 *Pool has been touched in order to fulfill operational requirements.
 */
"Touched": Anonymize<Ideuk4ni7h8umc>}>;

export type I5okq99a5mhve0 = {
/**
 *The account that created the pool.
 */
"creator": SS58String, 
/**
 *The pool id associated with the pool. Note that the order of the assets may not be
 *the same as the order specified in the create pool extrinsic.
 */
"pool_id": Anonymize<I4lgr5i5qhk4i8>, 
/**
 *The account ID of the pool.
 */
"pool_account": SS58String, 
/**
 *The id of the liquidity tokens that will be minted when assets are added to this
 *pool.
 */
"lp_token": number};

export type I4lgr5i5qhk4i8 = FixedSizeArray<2, Anonymize<Ikjpbtmstl9nm>>;

export type Ibtl2buofcs39i = {
/**
 *The account that the liquidity was taken from.
 */
"who": SS58String, 
/**
 *The account that the liquidity tokens were minted to.
 */
"mint_to": SS58String, 
/**
 *The pool id of the pool that the liquidity was added to.
 */
"pool_id": Anonymize<I4lgr5i5qhk4i8>, 
/**
 *The amount of the first asset that was added to the pool.
 */
"amount1_provided": bigint, 
/**
 *The amount of the second asset that was added to the pool.
 */
"amount2_provided": bigint, 
/**
 *The id of the lp token that was minted.
 */
"lp_token": number, 
/**
 *The amount of lp tokens that were minted of that id.
 */
"lp_token_minted": bigint};

export type I359nvpbbb5v0e = {
/**
 *The account that the liquidity tokens were burned from.
 */
"who": SS58String, 
/**
 *The account that the assets were transferred to.
 */
"withdraw_to": SS58String, 
/**
 *The pool id that the liquidity was removed from.
 */
"pool_id": Anonymize<I4lgr5i5qhk4i8>, 
/**
 *The amount of the first asset that was removed from the pool.
 */
"amount1": bigint, 
/**
 *The amount of the second asset that was removed from the pool.
 */
"amount2": bigint, 
/**
 *The id of the lp token that was burned.
 */
"lp_token": number, 
/**
 *The amount of lp tokens that were burned of that id.
 */
"lp_token_burned": bigint, 
/**
 *Liquidity withdrawal fee (%).
 */
"withdrawal_fee": number};

export type I8t31d95clla6j = {
/**
 *Which account was the instigator of the swap.
 */
"who": SS58String, 
/**
 *The account that the assets were transferred to.
 */
"send_to": SS58String, 
/**
 *The amount of the first asset that was swapped.
 */
"amount_in": bigint, 
/**
 *The amount of the second asset that was received.
 */
"amount_out": bigint, 
/**
 *The route of asset IDs with amounts that the swap went through.
 *E.g. (A, amount_in) -> (Dot, amount_out) -> (B, amount_out)
 */
"path": Anonymize<Iaa3la3apam0ft>};

export type Iaa3la3apam0ft = Array<[Anonymize<Ikjpbtmstl9nm>, bigint]>;

export type Ifcsperb0j354i = {
/**
 *The amount of the first asset that was swapped.
 */
"amount_in": bigint, 
/**
 *The amount of the second asset that was received.
 */
"amount_out": bigint, 
/**
 *The route of asset IDs with amounts that the swap went through.
 *E.g. (A, amount_in) -> (Dot, amount_out) -> (B, amount_out)
 */
"path": Anonymize<Iaa3la3apam0ft>};

export type Ideuk4ni7h8umc = {
/**
 *The ID of the pool.
 */
"pool_id": Anonymize<I4lgr5i5qhk4i8>, 
/**
 *The account initiating the touch.
 */
"who": SS58String};

export type Ief7s57i7nmf6b = AnonymousEnum<{
/**
 *A staker was unstaked.
 */
"Unstaked": Anonymize<Ilugqt91id35b>, 
/**
 *A staker was slashed for requesting fast-unstake whilst being exposed.
 */
"Slashed": Anonymize<Ifk8eme5o7mukf>, 
/**
 *A batch was partially checked for the given eras, but the process did not finish.
 */
"BatchChecked": Anonymize<Ic0he9tlf9ll0u>, 
/**
 *A batch of a given size was terminated.
 *
 *This is always follows by a number of `Unstaked` or `Slashed` events, marking the end
 *of the batch. A new batch will be created upon next block.
 */
"BatchFinished": Anonymize<I54umskavgc9du>, 
/**
 *An internal error happened. Operations will be paused now.
 */
"InternalError": undefined}>;

export type Ilugqt91id35b = {"stash": SS58String, "result": Anonymize<I4lj7jffoad80h>};

export type Ic0he9tlf9ll0u = {"eras": Anonymize<Icgljjb6j82uhn>};

export type Icic0qj7skuv5g = AnonymousEnum<{
/**
 *Message discarded due to an error in the `MessageProcessor` (usually a format error).
 */
"ProcessingFailed": Anonymize<Id77b899o0q565>, 
/**
 *Message is processed.
 */
"Processed": Anonymize<Iauaqn31cdv3v5>, 
/**
 *Message placed in overweight queue.
 */
"OverweightEnqueued": Anonymize<I132u4k70mlo2>, 
/**
 *This page was reaped.
 */
"PageReaped": Anonymize<I9a6c60esvi342>}>;

export type Id77b899o0q565 = {
/**
 *The `blake2_256` hash of the message.
 */
"id": FixedSizeBinary<32>, 
/**
 *The queue of the message.
 */
"origin": number, 
/**
 *The error that occurred.
 *
 *This error is pretty opaque. More fine-grained errors need to be emitted as events
 *by the `MessageProcessor`.
 */
"error": Anonymize<I5hhsj7l9obr84>};

export type Iauaqn31cdv3v5 = {
/**
 *The `blake2_256` hash of the message.
 */
"id": FixedSizeBinary<32>, 
/**
 *The queue of the message.
 */
"origin": number, 
/**
 *How much weight was used to process the message.
 */
"weight_used": Anonymize<I4q39t5hn830vp>, 
/**
 *Whether the message was processed.
 *
 *Note that this does not mean that the underlying `MessageProcessor` was internally
 *successful. It *solely* means that the MQ pallet will treat this as a success
 *condition and discard the message. Any internal error needs to be emitted as events
 *by the `MessageProcessor`.
 */
"success": boolean};

export type I132u4k70mlo2 = {
/**
 *The `blake2_256` hash of the message.
 */
"id": FixedSizeBinary<32>, 
/**
 *The queue of the message.
 */
"origin": number, 
/**
 *The page of the message.
 */
"page_index": number, 
/**
 *The index of the message within the page.
 */
"message_index": number};

export type I9a6c60esvi342 = {
/**
 *The queue of the page.
 */
"origin": number, 
/**
 *The index of the page.
 */
"index": number};

export type I70u6ecpmp0tni = AnonymousEnum<{"TestEvent": undefined}>;

export type I9ulgod11dfvq5 = AnonymousEnum<{
/**
 *This pallet, or a specific call is now paused.
 */
"CallPaused": Anonymize<Iba7pefg0d11kh>, 
/**
 *This pallet, or a specific call is now unpaused.
 */
"CallUnpaused": Anonymize<Iba7pefg0d11kh>}>;

export type Iba7pefg0d11kh = {"full_name": Anonymize<Idkbvh6dahk1v7>};

export type I3q8c83f5dvokp = AnonymousEnum<{
/**
 *The safe-mode was entered until inclusively this block.
 */
"Entered": Anonymize<I20e9ph536u7ti>, 
/**
 *The safe-mode was extended until inclusively this block.
 */
"Extended": Anonymize<I20e9ph536u7ti>, 
/**
 *Exited the safe-mode for a specific reason.
 */
"Exited": Anonymize<I8kcpmsh450rp>, 
/**
 *An account reserved funds for either entering or extending the safe-mode.
 */
"DepositPlaced": Anonymize<Ic262ibdoec56a>, 
/**
 *An account had a reserve released that was reserved.
 */
"DepositReleased": Anonymize<Ic262ibdoec56a>, 
/**
 *An account had reserve slashed that was reserved.
 */
"DepositSlashed": Anonymize<Ic262ibdoec56a>, 
/**
 *Could not hold funds for entering or extending the safe-mode.
 *
 *This error comes from the underlying `Currency`.
 */
"CannotDeposit": undefined, 
/**
 *Could not release funds for entering or extending the safe-mode.
 *
 *This error comes from the underlying `Currency`.
 */
"CannotRelease": undefined}>;

export type I20e9ph536u7ti = {"until": number};

export type I8kcpmsh450rp = {"reason": Enum<{"Timeout": undefined, "Force": undefined}>};

export type Ic1vdi0e9te2la = AnonymousEnum<{
/**
 *A new statement is submitted
 */
"NewStatement": Anonymize<I3uua81e9uvgnp>}>;

export type I3uua81e9uvgnp = {"account": SS58String, "statement": Anonymize<I815pbp5omtss>};

export type I815pbp5omtss = {"proof"?: (Enum<{"Sr25519": {"signature": FixedSizeBinary<64>, "signer": FixedSizeBinary<32>}, "Ed25519": {"signature": FixedSizeBinary<64>, "signer": FixedSizeBinary<32>}, "Secp256k1Ecdsa": {"signature": FixedSizeBinary<65>, "signer": FixedSizeBinary<33>}, "OnChain": {"who": FixedSizeBinary<32>, "block_hash": FixedSizeBinary<32>, "event_index": bigint}}>) | undefined, "decryption_key"?: Anonymize<I4s6vifaf8k998>, "channel"?: Anonymize<I4s6vifaf8k998>, "priority"?: Anonymize<I4arjljr6dpflb>, "num_topics": number, "topics": FixedSizeArray<4, FixedSizeBinary<32>>, "data"?: Anonymize<Iabpgqcjikia83>};

export type I8oh7vfem3j5g8 = AnonymousEnum<{
/**
 *A Region of Bulk Coretime has been purchased.
 */
"Purchased": Anonymize<Iaf2rbm5li8ck4>, 
/**
 *The workload of a core has become renewable.
 */
"Renewable": Anonymize<Ib118uuss8au5p>, 
/**
 *A workload has been renewed.
 */
"Renewed": Anonymize<Idfdoi7vpo971s>, 
/**
 *Ownership of a Region has been transferred.
 */
"Transferred": Anonymize<Icjdv7ehtt4mjk>, 
/**
 *A Region has been split into two non-overlapping Regions.
 */
"Partitioned": Anonymize<I7fa966sr93enr>, 
/**
 *A Region has been converted into two overlapping Regions each of lesser regularity.
 */
"Interlaced": Anonymize<I7fa966sr93enr>, 
/**
 *A Region has been assigned to a particular task.
 */
"Assigned": Anonymize<Icinrphfs7c1gh>, 
/**
 *An assignment has been removed from the workplan.
 */
"AssignmentRemoved": Anonymize<I4s60s3v5pfj6u>, 
/**
 *A Region has been added to the Instantaneous Coretime Pool.
 */
"Pooled": Anonymize<Ib27rtfpnn4vta>, 
/**
 *A new number of cores has been requested.
 */
"CoreCountRequested": Anonymize<I629ak383ovl28>, 
/**
 *The number of cores available for scheduling has changed.
 */
"CoreCountChanged": Anonymize<I629ak383ovl28>, 
/**
 *There is a new reservation for a workload.
 */
"ReservationMade": Anonymize<If5j64blk6vsus>, 
/**
 *A reservation for a workload has been cancelled.
 */
"ReservationCancelled": Anonymize<If5j64blk6vsus>, 
/**
 *A new sale has been initialized.
 */
"SaleInitialized": Anonymize<Ie7jbpif7cf5o3>, 
/**
 *A new lease has been created.
 */
"Leased": Anonymize<I10gda06ia6n74>, 
/**
 *A lease has been removed.
 */
"LeaseRemoved": Anonymize<Ihqcf8k5b8c95>, 
/**
 *A lease is about to end.
 */
"LeaseEnding": Anonymize<Idj7j1g3t3rr57>, 
/**
 *The sale rotation has been started and a new sale is imminent.
 */
"SalesStarted": Anonymize<Ickukqupg34u5t>, 
/**
 *The act of claiming revenue has begun.
 */
"RevenueClaimBegun": Anonymize<I9l243q1j0e2us>, 
/**
 *A particular timeslice has a non-zero claim.
 */
"RevenueClaimItem": Anonymize<I44ckreh9i933v>, 
/**
 *A revenue claim has (possibly only in part) been paid.
 */
"RevenueClaimPaid": Anonymize<I2o3evaj5726u9>, 
/**
 *Some Instantaneous Coretime Pool credit has been purchased.
 */
"CreditPurchased": Anonymize<I201plm6irk5mk>, 
/**
 *A Region has been dropped due to being out of date.
 */
"RegionDropped": Anonymize<Ib27rtfpnn4vta>, 
/**
 *Some historical Instantaneous Core Pool contribution record has been dropped.
 */
"ContributionDropped": Anonymize<I4s60s3v5pfj6u>, 
/**
 *Some historical Instantaneous Core Pool payment record has been initialized.
 */
"HistoryInitialized": Anonymize<I7dkrdcvab1juf>, 
/**
 *Some historical Instantaneous Core Pool payment record has been dropped.
 */
"HistoryDropped": Anonymize<If5tfto9lepmm8>, 
/**
 *Some historical Instantaneous Core Pool payment record has been ignored because the
 *timeslice was already known. Governance may need to intervene.
 */
"HistoryIgnored": Anonymize<If5tfto9lepmm8>, 
/**
 *Some historical Instantaneous Core Pool Revenue is ready for payout claims.
 */
"ClaimsReady": Anonymize<Ifla9c8bp7r3l9>, 
/**
 *A Core has been assigned to one or more tasks and/or the Pool on the Relay-chain.
 */
"CoreAssigned": Anonymize<Im8dpq6bqg07f>, 
/**
 *Some historical Instantaneous Core Pool payment record has been dropped.
 */
"PotentialRenewalDropped": Anonymize<I3blejcb10m5c9>, "AutoRenewalEnabled": Anonymize<I6td68h84ru5u7>, "AutoRenewalDisabled": Anonymize<I6td68h84ru5u7>, 
/**
 *Failed to auto-renew a core, likely due to the payer account not being sufficiently
 *funded.
 */
"AutoRenewalFailed": Anonymize<I5mulkk8c7che3>, 
/**
 *The auto-renewal limit has been reached upon renewing cores.
 *
 *This should never happen, given that enable_auto_renew checks for this before enabling
 *auto-renewal.
 */
"AutoRenewalLimitReached": undefined}>;

export type Iaf2rbm5li8ck4 = {
/**
 *The identity of the purchaser.
 */
"who": SS58String, 
/**
 *The identity of the Region.
 */
"region_id": Anonymize<I1vf976h89f2ls>, 
/**
 *The price paid for this Region.
 */
"price": bigint, 
/**
 *The duration of the Region.
 */
"duration": number};

export type I1vf976h89f2ls = {"begin": number, "core": number, "mask": FixedSizeBinary<10>};

export type Ib118uuss8au5p = {
/**
 *The core whose workload can be renewed.
 */
"core": number, 
/**
 *The price at which the workload can be renewed.
 */
"price": bigint, 
/**
 *The time at which the workload would recommence of this renewal. The call to renew
 *cannot happen before the beginning of the interlude prior to the sale for regions
 *which begin at this time.
 */
"begin": number, 
/**
 *The actual workload which can be renewed.
 */
"workload": Anonymize<Ia7varbguadod5>};

export type Ia7varbguadod5 = Array<{"mask": FixedSizeBinary<10>, "assignment": BrokerCoretimeInterfaceCoreAssignment}>;

export type BrokerCoretimeInterfaceCoreAssignment = Enum<{"Idle": undefined, "Pool": undefined, "Task": number}>;
export const BrokerCoretimeInterfaceCoreAssignment = _Enum as unknown as GetEnum<BrokerCoretimeInterfaceCoreAssignment>;

export type Idfdoi7vpo971s = {
/**
 *The identity of the renewer.
 */
"who": SS58String, 
/**
 *The price paid for this renewal.
 */
"price": bigint, 
/**
 *The index of the core on which the `workload` was previously scheduled.
 */
"old_core": number, 
/**
 *The index of the core on which the renewed `workload` has been scheduled.
 */
"core": number, 
/**
 *The time at which the `workload` will begin on the `core`.
 */
"begin": number, 
/**
 *The number of timeslices for which this `workload` is newly scheduled.
 */
"duration": number, 
/**
 *The workload which was renewed.
 */
"workload": Anonymize<Ia7varbguadod5>};

export type Icjdv7ehtt4mjk = {
/**
 *The Region which has been transferred.
 */
"region_id": Anonymize<I1vf976h89f2ls>, 
/**
 *The duration of the Region.
 */
"duration": number, 
/**
 *The old owner of the Region.
 */
"old_owner"?: Anonymize<Ihfphjolmsqq1>, 
/**
 *The new owner of the Region.
 */
"owner"?: Anonymize<Ihfphjolmsqq1>};

export type I7fa966sr93enr = {
/**
 *The Region which was split.
 */
"old_region_id": Anonymize<I1vf976h89f2ls>, 
/**
 *The new Regions into which it became.
 */
"new_region_ids": FixedSizeArray<2, Anonymize<I1vf976h89f2ls>>};

export type Icinrphfs7c1gh = {
/**
 *The Region which was assigned.
 */
"region_id": Anonymize<I1vf976h89f2ls>, 
/**
 *The duration of the assignment.
 */
"duration": number, 
/**
 *The task to which the Region was assigned.
 */
"task": number};

export type I4s60s3v5pfj6u = {
/**
 *The Region which was removed from the workplan.
 */
"region_id": Anonymize<I1vf976h89f2ls>};

export type Ib27rtfpnn4vta = {
/**
 *The Region which was added to the Instantaneous Coretime Pool.
 */
"region_id": Anonymize<I1vf976h89f2ls>, 
/**
 *The duration of the Region.
 */
"duration": number};

export type I629ak383ovl28 = {
/**
 *The number of cores requested.
 */
"core_count": number};

export type If5j64blk6vsus = {
/**
 *The index of the reservation.
 */
"index": number, 
/**
 *The workload of the reservation.
 */
"workload": Anonymize<Ia7varbguadod5>};

export type Ie7jbpif7cf5o3 = {
/**
 *The relay block number at which the sale will/did start.
 */
"sale_start": number, 
/**
 *The length in relay chain blocks of the Leadin Period (where the price is
 *decreasing).
 */
"leadin_length": number, 
/**
 *The price of Bulk Coretime at the beginning of the Leadin Period.
 */
"start_price": bigint, 
/**
 *The price of Bulk Coretime after the Leadin Period.
 */
"end_price": bigint, 
/**
 *The first timeslice of the Regions which are being sold in this sale.
 */
"region_begin": number, 
/**
 *The timeslice on which the Regions which are being sold in the sale terminate.
 *(i.e. One after the last timeslice which the Regions control.)
 */
"region_end": number, 
/**
 *The number of cores we want to sell, ideally.
 */
"ideal_cores_sold": number, 
/**
 *Number of cores which are/have been offered for sale.
 */
"cores_offered": number};

export type I10gda06ia6n74 = {
/**
 *The task to which a core will be assigned.
 */
"task": number, 
/**
 *The timeslice contained in the sale period after which this lease will
 *self-terminate (and therefore the earliest timeslice at which the lease may no
 *longer apply).
 */
"until": number};

export type Ihqcf8k5b8c95 = {
/**
 *The task to which a core was assigned.
 */
"task": number};

export type Idj7j1g3t3rr57 = {
/**
 *The task to which a core was assigned.
 */
"task": number, 
/**
 *The timeslice at which the task will no longer be scheduled.
 */
"when": number};

export type Ickukqupg34u5t = {
/**
 *The nominal price of an Region of Bulk Coretime.
 */
"price": bigint, 
/**
 *The maximum number of cores which this pallet will attempt to assign.
 */
"core_count": number};

export type I9l243q1j0e2us = {
/**
 *The region to be claimed for.
 */
"region": Anonymize<I1vf976h89f2ls>, 
/**
 *The maximum number of timeslices which should be searched for claimed.
 */
"max_timeslices": number};

export type I44ckreh9i933v = {
/**
 *The timeslice whose claim is being processed.
 */
"when": number, 
/**
 *The amount which was claimed at this timeslice.
 */
"amount": bigint};

export type I2o3evaj5726u9 = {
/**
 *The account to whom revenue has been paid.
 */
"who": SS58String, 
/**
 *The total amount of revenue claimed and paid.
 */
"amount": bigint, 
/**
 *The next region which should be claimed for the continuation of this contribution.
 */
"next"?: (Anonymize<I1vf976h89f2ls>) | undefined};

export type I7dkrdcvab1juf = {
/**
 *The timeslice whose history has been initialized.
 */
"when": number, 
/**
 *The amount of privately contributed Coretime to the Instantaneous Coretime Pool.
 */
"private_pool_size": number, 
/**
 *The amount of Coretime contributed to the Instantaneous Coretime Pool by the
 *Polkadot System.
 */
"system_pool_size": number};

export type If5tfto9lepmm8 = {
/**
 *The timeslice whose history is no longer available.
 */
"when": number, 
/**
 *The amount of revenue the system has taken.
 */
"revenue": bigint};

export type Ifla9c8bp7r3l9 = {
/**
 *The timeslice whose history is available.
 */
"when": number, 
/**
 *The amount of revenue the Polkadot System has already taken.
 */
"system_payout": bigint, 
/**
 *The total amount of revenue remaining to be claimed.
 */
"private_payout": bigint};

export type Im8dpq6bqg07f = {
/**
 *The index of the Core which has been assigned.
 */
"core": number, 
/**
 *The Relay-chain block at which this assignment should take effect.
 */
"when": number, 
/**
 *The workload to be done on the Core.
 */
"assignment": Array<[BrokerCoretimeInterfaceCoreAssignment, number]>};

export type I3blejcb10m5c9 = {
/**
 *The timeslice whose renewal is no longer available.
 */
"when": number, 
/**
 *The core whose workload is no longer available to be renewed for `when`.
 */
"core": number};

export type I6td68h84ru5u7 = {
/**
 *The core for which the renewal was enabled.
 */
"core": number, 
/**
 *The task for which the renewal was enabled.
 */
"task": number};

export type I5mulkk8c7che3 = {
/**
 *The core for which the renewal failed.
 */
"core": number, 
/**
 *The account which was supposed to pay for renewal.
 *
 *If `None` it indicates that we failed to get the sovereign account of a task.
 */
"payer"?: Anonymize<Ihfphjolmsqq1>};

export type I6g97r20i52jd6 = AnonymousEnum<{
/**
 *A Parameter was set.
 *
 *Is also emitted when the value was not changed.
 */
"Updated": Anonymize<Ieftafmqidv7m9>}>;

export type Ieftafmqidv7m9 = {
/**
 *The key that was updated.
 */
"key": Anonymize<I47qpjdc82anud>, 
/**
 *The old value before this call.
 */
"old_value"?: (Anonymize<Iu6o7umvj43rt>) | undefined, 
/**
 *The new value after this call.
 */
"new_value"?: (Anonymize<Iu6o7umvj43rt>) | undefined};

export type I47qpjdc82anud = AnonymousEnum<{"Storage": Enum<{"BaseDeposit": undefined, "ByteDeposit": undefined}>, "Referenda": Enum<{"Tracks": undefined, "Origins": undefined}>}>;

export type Iu6o7umvj43rt = AnonymousEnum<{"Storage": Enum<{"BaseDeposit": bigint, "ByteDeposit": bigint}>, "Referenda": Enum<{"Tracks": Anonymize<I6b8jvefm4nj77>, "Origins": Anonymize<Ifh8eaqh0mtosv>}>}>;

export type I6b8jvefm4nj77 = Array<{"id": number, "info": {"name": FixedSizeBinary<25>, "max_deciding": number, "decision_deposit": bigint, "prepare_period": number, "decision_period": number, "confirm_period": number, "min_enactment_period": number, "min_approval": ReferendaTypesCurve, "min_support": ReferendaTypesCurve}}>;

export type ReferendaTypesCurve = Enum<{"LinearDecreasing": {"length": number, "floor": number, "ceil": number}, "SteppedDecreasing": {"begin": number, "end": number, "step": number, "period": number}, "Reciprocal": {"factor": bigint, "x_offset": bigint, "y_offset": bigint}}>;
export const ReferendaTypesCurve = _Enum as unknown as GetEnum<ReferendaTypesCurve>;

export type Ifh8eaqh0mtosv = Array<[Anonymize<Ietipehah2qudc>, number]>;

export type Ietipehah2qudc = AnonymousEnum<{"system": DispatchRawOrigin, "Council": Enum<{"Members": Anonymize<I9jd27rnpm8ttv>, "Member": SS58String, "_Phantom": undefined}>, "TechnicalCommittee": Enum<{"Members": Anonymize<I9jd27rnpm8ttv>, "Member": SS58String, "_Phantom": undefined}>, "AllianceMotion": Enum<{"Members": Anonymize<I9jd27rnpm8ttv>, "Member": SS58String, "_Phantom": undefined}>}>;

export type I21cggb5bsclgu = AnonymousEnum<{
/**
 *A transaction fee was skipped.
 */
"FeeSkipped": Anonymize<I1nkvnntpp3mpa>}>;

export type I1nkvnntpp3mpa = {"origin": Anonymize<Ietipehah2qudc>};

export type Ib66g80vn94f4v = AnonymousEnum<{
/**
 *Indicates that a pool has been migrated to the new account ID.
 */
"MigratedToNewAccount": Anonymize<I5i213pqldjng>}>;

export type I5i213pqldjng = {
/**
 *Pool's ID.
 */
"pool_id": Anonymize<I4lgr5i5qhk4i8>, 
/**
 *Pool's prior account ID.
 */
"prior_account": SS58String, 
/**
 *Pool's new account ID.
 */
"new_account": SS58String};

export type I1nq1se98idofq = AnonymousEnum<{
/**
 *Funds delegated by a delegator.
 */
"Delegated": Anonymize<Id2aanom2jncf1>, 
/**
 *Funds released to a delegator.
 */
"Released": Anonymize<Id2aanom2jncf1>, 
/**
 *Funds slashed from a delegator.
 */
"Slashed": Anonymize<Id2aanom2jncf1>, 
/**
 *Unclaimed delegation funds migrated to delegator.
 */
"MigratedDelegation": Anonymize<Id2aanom2jncf1>}>;

export type Id2aanom2jncf1 = {"agent": SS58String, "delegator": SS58String, "amount": bigint};

export type I7q0siirsetnoe = AnonymousEnum<{
/**
 *An account staked some tokens in a pool.
 */
"Staked": Anonymize<I2k42nnm9nluhp>, 
/**
 *An account unstaked some tokens from a pool.
 */
"Unstaked": Anonymize<Ic37bju0plgup1>, 
/**
 *An account harvested some rewards.
 */
"RewardsHarvested": Anonymize<Ic37bju0plgup1>, 
/**
 *A new reward pool was created.
 */
"PoolCreated": Anonymize<I7g66ohp3qjl9f>, 
/**
 *A pool reward rate was modified by the admin.
 */
"PoolRewardRateModified": Anonymize<I3fl7kvh9tccu2>, 
/**
 *A pool admin was modified.
 */
"PoolAdminModified": Anonymize<I51711mrb372ih>, 
/**
 *A pool expiry block was modified by the admin.
 */
"PoolExpiryBlockModified": Anonymize<I5j2utcjc4hktd>, 
/**
 *A pool information was cleared after it's completion.
 */
"PoolCleanedUp": Anonymize<I931cottvong90>}>;

export type I7g66ohp3qjl9f = {
/**
 *The account that created the pool.
 */
"creator": SS58String, 
/**
 *The unique ID for the new pool.
 */
"pool_id": number, 
/**
 *The staking asset.
 */
"staked_asset_id": Anonymize<Ikjpbtmstl9nm>, 
/**
 *The reward asset.
 */
"reward_asset_id": Anonymize<Ikjpbtmstl9nm>, 
/**
 *The initial reward rate per block.
 */
"reward_rate_per_block": bigint, 
/**
 *The block the pool will cease to accumulate rewards.
 */
"expiry_block": number, 
/**
 *The account allowed to modify the pool.
 */
"admin": SS58String};

export type Imkk4d0dll6in = AnonymousEnum<{
/**
 *A meta transaction has been dispatched.
 *
 *Contains the dispatch result of the meta transaction along with post-dispatch
 *information.
 */
"Dispatched": Anonymize<I5rkto2ku9hqcs>}>;

export type I5rkto2ku9hqcs = {"result": Anonymize<Icmv0mds3tl8ol>};

export type BabeDigestsNextConfigDescriptor = Enum<{"V1": Anonymize<I8jnd4d8ip6djo>}>;
export const BabeDigestsNextConfigDescriptor = _Enum as unknown as GetEnum<BabeDigestsNextConfigDescriptor>;

export type I8jnd4d8ip6djo = {"c": Anonymize<I200n1ov5tbcvr>, "allowed_slots": BabeAllowedSlots};

export type BabeAllowedSlots = Enum<{"PrimarySlots": undefined, "PrimaryAndSecondaryPlainSlots": undefined, "PrimaryAndSecondaryVRFSlots": undefined}>;
export const BabeAllowedSlots = _Enum as unknown as GetEnum<BabeAllowedSlots>;

export type Idq7or56ds2f13 = (BabeDigestsPreDigest) | undefined;

export type BabeDigestsPreDigest = Enum<{"Primary": {"authority_index": number, "slot": bigint, "vrf_signature": {"pre_output": FixedSizeBinary<32>, "proof": FixedSizeBinary<64>}}, "SecondaryPlain": {"authority_index": number, "slot": bigint}, "SecondaryVRF": {"authority_index": number, "slot": bigint, "vrf_signature": {"pre_output": FixedSizeBinary<32>, "proof": FixedSizeBinary<64>}}}>;
export const BabeDigestsPreDigest = _Enum as unknown as GetEnum<BabeDigestsPreDigest>;

export type Ifip05kcrl65am = Array<Anonymize<I6cs1itejju2vv>>;

export type Iff9heri56m1mb = [SS58String, bigint, boolean];

export type Ifa30i9ata339a = Array<{"id": Enum<{"Staking": Enum<{"Staking": undefined}>, "Council": Enum<{"ProposalSubmission": undefined}>, "TechnicalCommittee": Enum<{"ProposalSubmission": undefined}>, "Contracts": Enum<{"CodeUploadDepositReserve": undefined, "StorageDepositReserve": undefined}>, "Preimage": PreimagePalletHoldReason, "Nis": Enum<{"NftReceipt": undefined}>, "NftFractionalization": Anonymize<I8bf8ma56td7eh>, "TransactionStorage": Enum<{"StorageFeeHold": undefined}>, "StateTrieMigration": Anonymize<I7lf1val3vmpq0>, "AllianceMotion": Enum<{"ProposalSubmission": undefined}>, "SafeMode": Enum<{"EnterOrExtend": undefined}>, "Revive": Anonymize<I364se861k3md3>, "DelegatedStaking": Enum<{"StakingDelegation": undefined}>, "AssetRewards": Anonymize<Icf8m1v8b5b6eh>}>, "amount": bigint}>;

export type PreimagePalletHoldReason = Enum<{"Preimage": undefined}>;
export const PreimagePalletHoldReason = _Enum as unknown as GetEnum<PreimagePalletHoldReason>;

export type I11otairup02lc = Array<{"id": Enum<{"NominationPools": NominationPoolsPalletFreezeReason, "AssetRewards": Anonymize<Idod1r495oa5gh>}>, "amount": bigint}>;

export type NominationPoolsPalletFreezeReason = Enum<{"PoolMinBalance": undefined}>;
export const NominationPoolsPalletFreezeReason = _Enum as unknown as GetEnum<NominationPoolsPalletFreezeReason>;

export type Ictkaqdbfabuek = {"supports": Anonymize<I4bboqsv44evel>, "score": Anonymize<I8s6n43okuj2b1>, "compute": ElectionProviderMultiPhaseElectionCompute};

export type I4bboqsv44evel = Array<[SS58String, {"total": bigint, "voters": Anonymize<Iba9inugg1atvo>}]>;

export type Ia7o65280hur3p = {"voters": Array<[SS58String, bigint, Anonymize<Ia2lhg7l2hilo3>]>, "targets": Anonymize<Ia2lhg7l2hilo3>};

export type Iasd2iat48n080 = {"voters": number, "targets": number};

export type Ic8d01sg6acf60 = Array<[Anonymize<I8s6n43okuj2b1>, number, number]>;

export type Irl37q7erstrb = {"who": SS58String, "deposit": bigint, "raw_solution": Anonymize<I7je4n92ump862>, "call_fee": bigint};

export type I7je4n92ump862 = {"solution": {"votes1": Array<Anonymize<I5g2vv0ckl2m8b>>, "votes2": Array<[number, Anonymize<I5g2vv0ckl2m8b>, number]>, "votes3": Array<[number, FixedSizeArray<2, Anonymize<I5g2vv0ckl2m8b>>, number]>, "votes4": Array<[number, FixedSizeArray<3, Anonymize<I5g2vv0ckl2m8b>>, number]>, "votes5": Array<[number, FixedSizeArray<4, Anonymize<I5g2vv0ckl2m8b>>, number]>, "votes6": Array<[number, FixedSizeArray<5, Anonymize<I5g2vv0ckl2m8b>>, number]>, "votes7": Array<[number, FixedSizeArray<6, Anonymize<I5g2vv0ckl2m8b>>, number]>, "votes8": Array<[number, FixedSizeArray<7, Anonymize<I5g2vv0ckl2m8b>>, number]>, "votes9": Array<[number, FixedSizeArray<8, Anonymize<I5g2vv0ckl2m8b>>, number]>, "votes10": Array<[number, FixedSizeArray<9, Anonymize<I5g2vv0ckl2m8b>>, number]>, "votes11": Array<[number, FixedSizeArray<10, Anonymize<I5g2vv0ckl2m8b>>, number]>, "votes12": Array<[number, FixedSizeArray<11, Anonymize<I5g2vv0ckl2m8b>>, number]>, "votes13": Array<[number, FixedSizeArray<12, Anonymize<I5g2vv0ckl2m8b>>, number]>, "votes14": Array<[number, FixedSizeArray<13, Anonymize<I5g2vv0ckl2m8b>>, number]>, "votes15": Array<[number, FixedSizeArray<14, Anonymize<I5g2vv0ckl2m8b>>, number]>, "votes16": Array<[number, FixedSizeArray<15, Anonymize<I5g2vv0ckl2m8b>>, number]>}, "score": Anonymize<I8s6n43okuj2b1>, "round": number};

export type Ic12aht5vh2sen = {"stash": SS58String, "total": bigint, "active": bigint, "unlocking": Anonymize<I9nc4v1upo2c8e>, "legacy_claimed_rewards": Anonymize<Icgljjb6j82uhn>};

export type I9nc4v1upo2c8e = Array<{"value": bigint, "era": number}>;

export type Ic3m9d6tdl6gi2 = {"targets": Anonymize<Ia2lhg7l2hilo3>, "submitted_in": number, "suppressed": boolean};

export type Ib3j7gb0jgs38u = {"index": number, "start"?: Anonymize<I35p85j063s0il>};

export type Ifekshcrgkl12g = {"total": bigint, "own": bigint, "others": Anonymize<I252o97fo263q7>};

export type I252o97fo263q7 = Array<{"who": SS58String, "value": bigint}>;

export type I6flrronqs3l6n = {"total": bigint, "own": bigint, "nominator_count": number, "page_count": number};

export type I97fulj5h3ik95 = {"page_total": bigint, "others": Anonymize<I252o97fo263q7>};

export type Ia8896dq44k9m4 = [number, SS58String, number];

export type Iff9p3c7k6pfoi = {"total": number, "individual": Array<Anonymize<I6ouflveob4eli>>};

export type Iafq6t4rgheait = Array<{"validator": SS58String, "own": bigint, "others": Anonymize<Iba9inugg1atvo>, "reporters": Anonymize<Ia2lhg7l2hilo3>, "payout": bigint}>;

export type I4ojmnsk1dchql = [number, bigint];

export type Iinkhfdlka9ch = {"span_index": number, "last_start": number, "last_nonzero_slash": number, "prior": Anonymize<Icgljjb6j82uhn>};

export type I2kj4j6mp68hf8 = {"slashed": bigint, "paid_out": bigint};

export type I97t7vuaf93oca = Array<[SS58String, Anonymize<I23blhbuf4rn4p>]>;

export type I23blhbuf4rn4p = {"grandpa": FixedSizeBinary<32>, "babe": FixedSizeBinary<32>, "im_online": FixedSizeBinary<32>, "authority_discovery": FixedSizeBinary<32>, "mixnet": FixedSizeBinary<32>, "beefy": FixedSizeBinary<33>};

export type I6mhebgj62g585 = Array<[number, PreimagesBounded, SS58String]>;

export type I3vhcedhm4hpvm = [Anonymize<Ia2lhg7l2hilo3>, bigint];

export type I526daka7j7b17 = AnonymousEnum<{"Ongoing": {"end": number, "proposal": PreimagesBounded, "threshold": Anonymize<Ivbp9821csvot>, "delay": number, "tally": {"ayes": bigint, "nays": bigint, "turnout": bigint}}, "Finished": {"approved": boolean, "end": number}}>;

export type Ifanv2kvm586s4 = AnonymousEnum<{"Direct": {"votes": Array<[number, Anonymize<Ia9hdots6g53fs>]>, "delegations": Anonymize<I538qha8r4j3ii>, "prior": Anonymize<I4ojmnsk1dchql>}, "Delegating": Anonymize<I251o9sbu5566f>}>;

export type I538qha8r4j3ii = {"votes": bigint, "capital": bigint};

export type I251o9sbu5566f = {"balance": bigint, "target": SS58String, "conviction": VotingConviction, "delegations": Anonymize<I538qha8r4j3ii>, "prior": Anonymize<I4ojmnsk1dchql>};

export type VotingConviction = Enum<{"None": undefined, "Locked1x": undefined, "Locked2x": undefined, "Locked3x": undefined, "Locked4x": undefined, "Locked5x": undefined, "Locked6x": undefined}>;
export const VotingConviction = _Enum as unknown as GetEnum<VotingConviction>;

export type I5rsgtofmn5lli = [PreimagesBounded, Anonymize<Ivbp9821csvot>];

export type Idned7t7knml6b = [number, Anonymize<Ia2lhg7l2hilo3>];

export type Ied053ljnv7s6c = AnonymousEnum<{"System": Anonymize<Iekve0i6djpd9f>, "Utility": Anonymize<Idil0idjvbfb9l>, "Babe": Anonymize<I1jeo0dpbkma5g>, "Timestamp": Anonymize<I7d75gqfg6jh9c>, "Indices": Anonymize<Ibjoagskivshoc>, "Balances": Anonymize<I9fktnrlinnre4>, "ElectionProviderMultiPhase": Anonymize<I15soeogelbbbh>, "Staking": Anonymize<Iah6ikfgqk1911>, "Session": Anonymize<Ifpamil718dolu>, "Democracy": Anonymize<I4hnic0gfvfj0p>, "Council": Anonymize<Iaerjet9i7j869>, "TechnicalCommittee": Anonymize<Iaerjet9i7j869>, "Elections": Anonymize<I6ab0pou3i8npt>, "TechnicalMembership": Anonymize<I3ndh4r2ep15q9>, "Grandpa": Anonymize<I5u9ggmn8umfqm>, "Treasury": Anonymize<Ia0qf1kr2u2mt4>, "AssetRate": Anonymize<I7mb73bi7tl8uv>, "Contracts": Anonymize<I3fe7osiu184ch>, "Sudo": Anonymize<Ia8v0r1ui50ee6>, "ImOnline": Anonymize<I7ubsrnb7nbvds>, "Identity": Anonymize<Ias6m7696errt5>, "Society": Anonymize<Ic2r1fidlpb5ct>, "Recovery": Anonymize<Ibnflpalcqmtbl>, "Vesting": Anonymize<Id192p427rq02q>, "Scheduler": Anonymize<Idhsrhsgok84l3>, "Glutton": Anonymize<Ibcg2hk3cepaj1>, "Preimage": Anonymize<If81ks88t5mpk5>, "Proxy": Anonymize<I861v78m751mau>, "Multisig": Anonymize<I2e59mjhf6d49q>, "Bounties": Anonymize<Ictooofg1nu4im>, "Tips": Anonymize<I7a907m1tvsric>, "Assets": Anonymize<Iad3ancsh9k25o>, "PoolAssets": Anonymize<Iad3ancsh9k25o>, "Beefy": Anonymize<Idmcmrk34p8gic>, "Lottery": Anonymize<Iegvnh2q4u86eb>, "Nis": Anonymize<Iaq5q67idam8ll>, "Uniques": Anonymize<Ic6havm8cbicj9>, "Nfts": Anonymize<I6u8q38fm9v1qs>, "NftFractionalization": Anonymize<Iaaont9hftbk80>, "Salary": Anonymize<I70s59h2a8cqh3>, "CoreFellowship": Anonymize<Id9o33t7prjgjj>, "TransactionStorage": Anonymize<Ipgeldipdne49>, "VoterList": Anonymize<Iddr6fva4nhp6t>, "StateTrieMigration": Anonymize<I39l72gdmkk30t>, "ChildBounties": Anonymize<Iq2t6ejghtjp4>, "Referenda": Anonymize<I27uadq9n6ivck>, "Remark": Anonymize<I3o06pm63chdtt>, "RootTesting": Anonymize<I9rkc7eqejp3rj>, "ConvictionVoting": Anonymize<I99hrhstt9euff>, "Whitelist": Anonymize<I6kp789d4cu9n7>, "AllianceMotion": Anonymize<Iaerjet9i7j869>, "Alliance": Anonymize<I4c1mqs672b4ht>, "NominationPools": Anonymize<I6rgtpa34cubst>, "RankedPolls": Anonymize<I27uadq9n6ivck>, "RankedCollective": Anonymize<Ieblk40f65bn0b>, "AssetConversion": Anonymize<I7o18ptbflbguv>, "FastUnstake": Anonymize<I44snhj1gahvrd>, "MessageQueue": Anonymize<I2olt0k6t44a3l>, "Pov": Anonymize<Ibv0scd734l9kl>, "TxPause": Anonymize<Ieci88jft3cpv9>, "SafeMode": Anonymize<I48eehof2eias5>, "MultiBlockMigrations": Anonymize<I4oqb168b2d4er>, "Broker": Anonymize<I6nevotii2dffg>, "Mixnet": Anonymize<I8rnr4bl48odge>, "Parameters": Anonymize<I4s4165l7no8fu>, "AssetConversionMigration": Anonymize<I3qrhf04krljif>, "Revive": Anonymize<I1h9ggbmsofrbr>, "AssetRewards": Anonymize<I4lp1aptof8ofk>, "MetaTx": Anonymize<I7a1h2q26hdc5b>}>;

export type Idil0idjvbfb9l = AnonymousEnum<{
/**
 *Send a batch of dispatch calls.
 *
 *May be called from any origin except `None`.
 *
 *- `calls`: The calls to be dispatched from the same origin. The number of call must not
 *  exceed the constant: `batched_calls_limit` (available in constant metadata).
 *
 *If origin is root then the calls are dispatched without checking origin filter. (This
 *includes bypassing `frame_system::Config::BaseCallFilter`).
 *
 *## Complexity
 *- O(C) where C is the number of calls to be batched.
 *
 *This will return `Ok` in all circumstances. To determine the success of the batch, an
 *event is deposited. If a call failed and the batch was interrupted, then the
 *`BatchInterrupted` event is deposited, along with the number of successful calls made
 *and the error of the failed call. If all were successful, then the `BatchCompleted`
 *event is deposited.
 */
"batch": Anonymize<Ifubug7vbov1s8>, 
/**
 *Send a call through an indexed pseudonym of the sender.
 *
 *Filter from origin are passed along. The call will be dispatched with an origin which
 *use the same filter as the origin of this call.
 *
 *NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 *because you expect `proxy` to have been used prior in the call stack and you do not want
 *the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 *in the Multisig pallet instead.
 *
 *NOTE: Prior to version *12, this was called `as_limited_sub`.
 *
 *The dispatch origin for this call must be _Signed_.
 */
"as_derivative": Anonymize<Id7nrth1d7m1qd>, 
/**
 *Send a batch of dispatch calls and atomically execute them.
 *The whole transaction will rollback and fail if any of the calls failed.
 *
 *May be called from any origin except `None`.
 *
 *- `calls`: The calls to be dispatched from the same origin. The number of call must not
 *  exceed the constant: `batched_calls_limit` (available in constant metadata).
 *
 *If origin is root then the calls are dispatched without checking origin filter. (This
 *includes bypassing `frame_system::Config::BaseCallFilter`).
 *
 *## Complexity
 *- O(C) where C is the number of calls to be batched.
 */
"batch_all": Anonymize<Ifubug7vbov1s8>, 
/**
 *Dispatches a function call with a provided origin.
 *
 *The dispatch origin for this call must be _Root_.
 *
 *## Complexity
 *- O(1).
 */
"dispatch_as": Anonymize<I4kge61jk08fbm>, 
/**
 *Send a batch of dispatch calls.
 *Unlike `batch`, it allows errors and won't interrupt.
 *
 *May be called from any origin except `None`.
 *
 *- `calls`: The calls to be dispatched from the same origin. The number of call must not
 *  exceed the constant: `batched_calls_limit` (available in constant metadata).
 *
 *If origin is root then the calls are dispatch without checking origin filter. (This
 *includes bypassing `frame_system::Config::BaseCallFilter`).
 *
 *## Complexity
 *- O(C) where C is the number of calls to be batched.
 */
"force_batch": Anonymize<Ifubug7vbov1s8>, 
/**
 *Dispatch a function call with a specified weight.
 *
 *This function does not check the weight of the call, and instead allows the
 *Root origin to specify the weight of the call.
 *
 *The dispatch origin for this call must be _Root_.
 */
"with_weight": Anonymize<Ie2g90i1hfmtda>, 
/**
 *Dispatch a fallback call in the event the main call fails to execute.
 *May be called from any origin except `None`.
 *
 *This function first attempts to dispatch the `main` call.
 *If the `main` call fails, the `fallback` is attemted.
 *if the fallback is successfully dispatched, the weights of both calls
 *are accumulated and an event containing the main call error is deposited.
 *
 *In the event of a fallback failure the whole call fails
 *with the weights returned.
 *
 *- `main`: The main call to be dispatched. This is the primary action to execute.
 *- `fallback`: The fallback call to be dispatched in case the `main` call fails.
 *
 *## Dispatch Logic
 *- If the origin is `root`, both the main and fallback calls are executed without
 *  applying any origin filters.
 *- If the origin is not `root`, the origin filter is applied to both the `main` and
 *  `fallback` calls.
 *
 *## Use Case
 *- Some use cases might involve submitting a `batch` type call in either main, fallback
 *  or both.
 */
"if_else": Anonymize<I8oimr5dg2nrra>, 
/**
 *Dispatches a function call with a provided origin.
 *
 *Almost the same as [`Pallet::dispatch_as`] but forwards any error of the inner call.
 *
 *The dispatch origin for this call must be _Root_.
 */
"dispatch_as_fallible": Anonymize<I4kge61jk08fbm>}>;

export type Ifubug7vbov1s8 = {"calls": Array<TxCallData>};

export type Id7nrth1d7m1qd = {"index": number, "call": TxCallData};

export type I4kge61jk08fbm = {"as_origin": Anonymize<Ietipehah2qudc>, "call": TxCallData};

export type Ie2g90i1hfmtda = {"call": TxCallData, "weight": Anonymize<I4q39t5hn830vp>};

export type I8oimr5dg2nrra = {"main": TxCallData, "fallback": TxCallData};

export type I1jeo0dpbkma5g = AnonymousEnum<{
/**
 *Report authority equivocation/misbehavior. This method will verify
 *the equivocation proof and validate the given key ownership proof
 *against the extracted offender. If both are valid, the offence will
 *be reported.
 */
"report_equivocation": Anonymize<I50ppnqasq4tjq>, 
/**
 *Report authority equivocation/misbehavior. This method will verify
 *the equivocation proof and validate the given key ownership proof
 *against the extracted offender. If both are valid, the offence will
 *be reported.
 *This extrinsic must be called unsigned and it is expected that only
 *block authors will call it (validated in `ValidateUnsigned`), as such
 *if the block author is defined it will be defined as the equivocation
 *reporter.
 */
"report_equivocation_unsigned": Anonymize<I50ppnqasq4tjq>, 
/**
 *Plan an epoch config change. The epoch config change is recorded and will be enacted on
 *the next call to `enact_epoch_change`. The config will be activated one epoch after.
 *Multiple calls to this method will replace any existing planned config change that had
 *not been enacted yet.
 */
"plan_config_change": Anonymize<I9fin09kkg0jaj>}>;

export type I50ppnqasq4tjq = {"equivocation_proof": Anonymize<I68ii5ik8avr9o>, "key_owner_proof": Anonymize<I3ia7aufsoj0l1>};

export type I68ii5ik8avr9o = {"offender": FixedSizeBinary<32>, "slot": bigint, "first_header": Anonymize<Ic952bubvq4k7d>, "second_header": Anonymize<Ic952bubvq4k7d>};

export type I3ia7aufsoj0l1 = {"session": number, "trie_nodes": Anonymize<Itom7fk49o0c9>, "validator_count": number};

export type I9fin09kkg0jaj = {"config": BabeDigestsNextConfigDescriptor};

export type Ibjoagskivshoc = AnonymousEnum<{
/**
 *Assign an previously unassigned index.
 *
 *Payment: `Deposit` is reserved from the sender account.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *- `index`: the index to be claimed. This must not be in use.
 *
 *Emits `IndexAssigned` if successful.
 *
 *## Complexity
 *- `O(1)`.
 */
"claim": Anonymize<I666bl2fqjkejo>, 
/**
 *Assign an index already owned by the sender to another account. The balance reservation
 *is effectively transferred to the new account.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *- `index`: the index to be re-assigned. This must be owned by the sender.
 *- `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 *
 *Emits `IndexAssigned` if successful.
 *
 *## Complexity
 *- `O(1)`.
 */
"transfer": Anonymize<I1u3ac7lafvv5b>, 
/**
 *Free up an index owned by the sender.
 *
 *Payment: Any previous deposit placed for the index is unreserved in the sender account.
 *
 *The dispatch origin for this call must be _Signed_ and the sender must own the index.
 *
 *- `index`: the index to be freed. This must be owned by the sender.
 *
 *Emits `IndexFreed` if successful.
 *
 *## Complexity
 *- `O(1)`.
 */
"free": Anonymize<I666bl2fqjkejo>, 
/**
 *Force an index to an account. This doesn't require a deposit. If the index is already
 *held, then any deposit is reimbursed to its current owner.
 *
 *The dispatch origin for this call must be _Root_.
 *
 *- `index`: the index to be (re-)assigned.
 *- `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 *- `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
 *
 *Emits `IndexAssigned` if successful.
 *
 *## Complexity
 *- `O(1)`.
 */
"force_transfer": Anonymize<I5teebeg0opib2>, 
/**
 *Freeze an index so it will always point to the sender account. This consumes the
 *deposit.
 *
 *The dispatch origin for this call must be _Signed_ and the signing account must have a
 *non-frozen account `index`.
 *
 *- `index`: the index to be frozen in place.
 *
 *Emits `IndexFrozen` if successful.
 *
 *## Complexity
 *- `O(1)`.
 */
"freeze": Anonymize<I666bl2fqjkejo>, 
/**
 *Poke the deposit reserved for an index.
 *
 *The dispatch origin for this call must be _Signed_ and the signing account must have a
 *non-frozen account `index`.
 *
 *The transaction fees is waived if the deposit is changed after poking/reconsideration.
 *
 *- `index`: the index whose deposit is to be poked/reconsidered.
 *
 *Emits `DepositPoked` if successful.
 */
"poke_deposit": Anonymize<I666bl2fqjkejo>}>;

export type I1u3ac7lafvv5b = {"new": Anonymize<I4su1fqci7afjt>, "index": number};

export type I4su1fqci7afjt = AnonymousEnum<{"Id": SS58String, "Index": number, "Raw": Binary, "Address32": FixedSizeBinary<32>, "Address20": FixedSizeBinary<20>}>;

export type I5teebeg0opib2 = {"new": Anonymize<I4su1fqci7afjt>, "index": number, "freeze": boolean};

export type I9fktnrlinnre4 = AnonymousEnum<{
/**
 *Transfer some liquid free balance to another account.
 *
 *`transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
 *If the sender's account is below the existential deposit as a result
 *of the transfer, the account will be reaped.
 *
 *The dispatch origin for this call must be `Signed` by the transactor.
 */
"transfer_allow_death": Anonymize<I65i612een2ak>, 
/**
 *Exactly as `transfer_allow_death`, except the origin must be root and the source account
 *may be specified.
 */
"force_transfer": Anonymize<I5vvf47ira6s09>, 
/**
 *Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
 *kill the origin account.
 *
 *99% of the time you want [`transfer_allow_death`] instead.
 *
 *[`transfer_allow_death`]: struct.Pallet.html#method.transfer
 */
"transfer_keep_alive": Anonymize<I65i612een2ak>, 
/**
 *Transfer the entire transferable balance from the caller account.
 *
 *NOTE: This function only attempts to transfer _transferable_ balances. This means that
 *any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 *transferred by this function. To ensure that this function results in a killed account,
 *you might need to prepare the account by removing any reference counters, storage
 *deposits, etc...
 *
 *The dispatch origin of this call must be Signed.
 *
 *- `dest`: The recipient of the transfer.
 *- `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *  of the funds the account has, causing the sender account to be killed (false), or
 *  transfer everything except at least the existential deposit, which will guarantee to
 *  keep the sender account alive (true).
 */
"transfer_all": Anonymize<I5ns79ftlq8cnl>, 
/**
 *Unreserve some balance from a user by force.
 *
 *Can only be called by ROOT.
 */
"force_unreserve": Anonymize<I59ofijoau4bjh>, 
/**
 *Upgrade a specified account.
 *
 *- `origin`: Must be `Signed`.
 *- `who`: The account to be upgraded.
 *
 *This will waive the transaction fee if at least all but 10% of the accounts needed to
 *be upgraded. (We let some not have to be upgraded just in order to allow for the
 *possibility of churn).
 */
"upgrade_accounts": Anonymize<Ibmr18suc9ikh9>, 
/**
 *Set the regular balance of a given account.
 *
 *The dispatch origin for this call is `root`.
 */
"force_set_balance": Anonymize<Ieka2e164ntfss>, 
/**
 *Adjust the total issuance in a saturating way.
 *
 *Can only be called by root and always needs a positive `delta`.
 *
 *# Example
 */
"force_adjust_total_issuance": Anonymize<I5u8olqbbvfnvf>, 
/**
 *Burn the specified liquid free balance from the origin account.
 *
 *If the origin's account ends up below the existential deposit as a result
 *of the burn and `keep_alive` is false, the account will be reaped.
 *
 *Unlike sending funds to a _burn_ address, which merely makes the funds inaccessible,
 *this `burn` operation will reduce total issuance by the amount _burned_.
 */
"burn": Anonymize<I5utcetro501ir>}>;

export type I65i612een2ak = {"dest": Anonymize<I4su1fqci7afjt>, "value": bigint};

export type I5vvf47ira6s09 = {"source": Anonymize<I4su1fqci7afjt>, "dest": Anonymize<I4su1fqci7afjt>, "value": bigint};

export type I5ns79ftlq8cnl = {"dest": Anonymize<I4su1fqci7afjt>, "keep_alive": boolean};

export type I59ofijoau4bjh = {"who": Anonymize<I4su1fqci7afjt>, "amount": bigint};

export type Ieka2e164ntfss = {"who": Anonymize<I4su1fqci7afjt>, "new_free": bigint};

export type I15soeogelbbbh = AnonymousEnum<{
/**
 *Submit a solution for the unsigned phase.
 *
 *The dispatch origin fo this call must be __none__.
 *
 *This submission is checked on the fly. Moreover, this unsigned solution is only
 *validated when submitted to the pool from the **local** node. Effectively, this means
 *that only active validators can submit this transaction when authoring a block (similar
 *to an inherent).
 *
 *To prevent any incorrect solution (and thus wasted time/weight), this transaction will
 *panic if the solution submitted by the validator is invalid in any way, effectively
 *putting their authoring reward at risk.
 *
 *No deposit or reward is associated with this submission.
 */
"submit_unsigned": Anonymize<I31k9f0jol8ko4>, 
/**
 *Set a new value for `MinimumUntrustedScore`.
 *
 *Dispatch origin must be aligned with `T::ForceOrigin`.
 *
 *This check can be turned off by setting the value to `None`.
 */
"set_minimum_untrusted_score": Anonymize<I80q14um2s2ckg>, 
/**
 *Set a solution in the queue, to be handed out to the client of this pallet in the next
 *call to `ElectionProvider::elect`.
 *
 *This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
 *
 *The solution is not checked for any feasibility and is assumed to be trustworthy, as any
 *feasibility check itself can in principle cause the election process to fail (due to
 *memory/weight constrains).
 */
"set_emergency_election_result": Anonymize<I5qs1t1erfi7u8>, 
/**
 *Submit a solution for the signed phase.
 *
 *The dispatch origin fo this call must be __signed__.
 *
 *The solution is potentially queued, based on the claimed score and processed at the end
 *of the signed phase.
 *
 *A deposit is reserved and recorded for the solution. Based on the outcome, the solution
 *might be rewarded, slashed, or get all or a part of the deposit back.
 */
"submit": Anonymize<I9et13knvdvgpb>, 
/**
 *Trigger the governance fallback.
 *
 *This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
 *calling [`Call::set_emergency_election_result`].
 */
"governance_fallback": Anonymize<Ifsme8miqq9006>}>;

export type I31k9f0jol8ko4 = {"raw_solution": Anonymize<I7je4n92ump862>, "witness": Anonymize<Iasd2iat48n080>};

export type I80q14um2s2ckg = {"maybe_next_score"?: (Anonymize<I8s6n43okuj2b1>) | undefined};

export type I5qs1t1erfi7u8 = {"supports": Anonymize<I4bboqsv44evel>};

export type I9et13knvdvgpb = {"raw_solution": Anonymize<I7je4n92ump862>};

export type Ifsme8miqq9006 = {"maybe_max_voters"?: Anonymize<I4arjljr6dpflb>, "maybe_max_targets"?: Anonymize<I4arjljr6dpflb>};

export type Iah6ikfgqk1911 = AnonymousEnum<{
/**
 *Take the origin account as a stash and lock up `value` of its balance. `controller` will
 *be the account that controls it.
 *
 *`value` must be more than the `minimum_balance` specified by `T::Currency`.
 *
 *The dispatch origin for this call must be _Signed_ by the stash account.
 *
 *Emits `Bonded`.
 *## Complexity
 *- Independent of the arguments. Moderate complexity.
 *- O(1).
 *- Three extra DB entries.
 *
 *NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
 *unless the `origin` falls below _existential deposit_ (or equal to 0) and gets removed
 *as dust.
 */
"bond": Anonymize<I2eip8tc75dpje>, 
/**
 *Add some extra amount that have appeared in the stash `free_balance` into the balance up
 *for staking.
 *
 *The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 *
 *Use this if there are additional funds in your stash account that you wish to bond.
 *Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
 *any limitation on the amount that can be added.
 *
 *Emits `Bonded`.
 *
 *## Complexity
 *- Independent of the arguments. Insignificant complexity.
 *- O(1).
 */
"bond_extra": Anonymize<I564va64vtidbq>, 
/**
 *Schedule a portion of the stash to be unlocked ready for transfer out after the bond
 *period ends. If this leaves an amount actively bonded less than
 *[`asset::existential_deposit`], then it is increased to the full amount.
 *
 *The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *
 *Once the unlock period is done, you can call `withdraw_unbonded` to actually move
 *the funds out of management ready for transfer.
 *
 *No more than a limited number of unlocking chunks (see `MaxUnlockingChunks`)
 *can co-exists at the same time. If there are no unlocking chunks slots available
 *[`Call::withdraw_unbonded`] is called to remove some of the chunks (if possible).
 *
 *If a user encounters the `InsufficientBond` error when calling this extrinsic,
 *they should call `chill` first in order to free up their bonded funds.
 *
 *Emits `Unbonded`.
 *
 *See also [`Call::withdraw_unbonded`].
 */
"unbond": Anonymize<Ie5v6njpckr05b>, 
/**
 *Remove any unlocked chunks from the `unlocking` queue from our management.
 *
 *This essentially frees up that balance to be used by the stash account to do whatever
 *it wants.
 *
 *The dispatch origin for this call must be _Signed_ by the controller.
 *
 *Emits `Withdrawn`.
 *
 *See also [`Call::unbond`].
 *
 *## Parameters
 *
 *- `num_slashing_spans` indicates the number of metadata slashing spans to clear when
 *this call results in a complete removal of all the data related to the stash account.
 *In this case, the `num_slashing_spans` must be larger or equal to the number of
 *slashing spans associated with the stash account in the [`SlashingSpans`] storage type,
 *otherwise the call will fail. The call weight is directly proportional to
 *`num_slashing_spans`.
 *
 *## Complexity
 *O(S) where S is the number of slashing spans to remove
 *NOTE: Weight annotation is the kill scenario, we refund otherwise.
 */
"withdraw_unbonded": Anonymize<I328av3j0bgmjb>, 
/**
 *Declare the desire to validate for the origin controller.
 *
 *Effects will be felt at the beginning of the next era.
 *
 *The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 */
"validate": Anonymize<I4tuqm9ato907i>, 
/**
 *Declare the desire to nominate `targets` for the origin controller.
 *
 *Effects will be felt at the beginning of the next era.
 *
 *The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *
 *## Complexity
 *- The transaction's complexity is proportional to the size of `targets` (N)
 *which is capped at CompactAssignments::LIMIT (T::MaxNominations).
 *- Both the reads and writes follow a similar pattern.
 */
"nominate": Anonymize<I19iomcbdrerea>, 
/**
 *Declare no desire to either validate or nominate.
 *
 *Effects will be felt at the beginning of the next era.
 *
 *The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *
 *## Complexity
 *- Independent of the arguments. Insignificant complexity.
 *- Contains one read.
 *- Writes are limited to the `origin` account key.
 */
"chill": undefined, 
/**
 *(Re-)set the payment target for a controller.
 *
 *Effects will be felt instantly (as soon as this function is completed successfully).
 *
 *The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *
 *## Complexity
 *- O(1)
 *- Independent of the arguments. Insignificant complexity.
 *- Contains a limited number of reads.
 *- Writes are limited to the `origin` account key.
 *---------
 */
"set_payee": Anonymize<I9dgmcnuamt5p8>, 
/**
 *(Re-)sets the controller of a stash to the stash itself. This function previously
 *accepted a `controller` argument to set the controller to an account other than the
 *stash itself. This functionality has now been removed, now only setting the controller
 *to the stash, if it is not already.
 *
 *Effects will be felt instantly (as soon as this function is completed successfully).
 *
 *The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 *
 *## Complexity
 *O(1)
 *- Independent of the arguments. Insignificant complexity.
 *- Contains a limited number of reads.
 *- Writes are limited to the `origin` account key.
 */
"set_controller": undefined, 
/**
 *Sets the ideal number of validators.
 *
 *The dispatch origin must be Root.
 *
 *## Complexity
 *O(1)
 */
"set_validator_count": Anonymize<I3vh014cqgmrfd>, 
/**
 *Increments the ideal number of validators up to maximum of
 *`ElectionProviderBase::MaxWinners`.
 *
 *The dispatch origin must be Root.
 *
 *## Complexity
 *Same as [`Self::set_validator_count`].
 */
"increase_validator_count": Anonymize<Ifhs60omlhvt3>, 
/**
 *Scale up the ideal number of validators by a factor up to maximum of
 *`ElectionProviderBase::MaxWinners`.
 *
 *The dispatch origin must be Root.
 *
 *## Complexity
 *Same as [`Self::set_validator_count`].
 */
"scale_validator_count": Anonymize<If34udpd5e57vi>, 
/**
 *Force there to be no new eras indefinitely.
 *
 *The dispatch origin must be Root.
 *
 *# Warning
 *
 *The election process starts multiple blocks before the end of the era.
 *Thus the election process may be ongoing when this is called. In this case the
 *election will continue until the next era is triggered.
 *
 *## Complexity
 *- No arguments.
 *- Weight: O(1)
 */
"force_no_eras": undefined, 
/**
 *Force there to be a new era at the end of the next session. After this, it will be
 *reset to normal (non-forced) behaviour.
 *
 *The dispatch origin must be Root.
 *
 *# Warning
 *
 *The election process starts multiple blocks before the end of the era.
 *If this is called just before a new era is triggered, the election process may not
 *have enough blocks to get a result.
 *
 *## Complexity
 *- No arguments.
 *- Weight: O(1)
 */
"force_new_era": undefined, 
/**
 *Set the validators who cannot be slashed (if any).
 *
 *The dispatch origin must be Root.
 */
"set_invulnerables": Anonymize<I39t01nnod9109>, 
/**
 *Force a current staker to become completely unstaked, immediately.
 *
 *The dispatch origin must be Root.
 *
 *## Parameters
 *
 *- `num_slashing_spans`: Refer to comments on [`Call::withdraw_unbonded`] for more
 *details.
 */
"force_unstake": Anonymize<Ie5vbnd9198quk>, 
/**
 *Force there to be a new era at the end of sessions indefinitely.
 *
 *The dispatch origin must be Root.
 *
 *# Warning
 *
 *The election process starts multiple blocks before the end of the era.
 *If this is called just before a new era is triggered, the election process may not
 *have enough blocks to get a result.
 */
"force_new_era_always": undefined, 
/**
 *Cancel enactment of a deferred slash.
 *
 *Can be called by the `T::AdminOrigin`.
 *
 *Parameters: era and indices of the slashes for that era to kill.
 */
"cancel_deferred_slash": Anonymize<I3h6murn8bd4v5>, 
/**
 *Pay out next page of the stakers behind a validator for the given era.
 *
 *- `validator_stash` is the stash account of the validator.
 *- `era` may be any era between `[current_era - history_depth; current_era]`.
 *
 *The origin of this call must be _Signed_. Any account can call this function, even if
 *it is not one of the stakers.
 *
 *The reward payout could be paged in case there are too many nominators backing the
 *`validator_stash`. This call will payout unpaid pages in an ascending order. To claim a
 *specific page, use `payout_stakers_by_page`.`
 *
 *If all pages are claimed, it returns an error `InvalidPage`.
 */
"payout_stakers": Anonymize<I6k6jf8ncesuu3>, 
/**
 *Rebond a portion of the stash scheduled to be unlocked.
 *
 *The dispatch origin must be signed by the controller.
 *
 *## Complexity
 *- Time complexity: O(L), where L is unlocking chunks
 *- Bounded by `MaxUnlockingChunks`.
 */
"rebond": Anonymize<Ie5v6njpckr05b>, 
/**
 *Remove all data structures concerning a staker/stash once it is at a state where it can
 *be considered `dust` in the staking system. The requirements are:
 *
 *1. the `total_balance` of the stash is below existential deposit.
 *2. or, the `ledger.total` of the stash is below existential deposit.
 *3. or, existential deposit is zero and either `total_balance` or `ledger.total` is zero.
 *
 *The former can happen in cases like a slash; the latter when a fully unbonded account
 *is still receiving staking rewards in `RewardDestination::Staked`.
 *
 *It can be called by anyone, as long as `stash` meets the above requirements.
 *
 *Refunds the transaction fees upon successful execution.
 *
 *## Parameters
 *
 *- `num_slashing_spans`: Refer to comments on [`Call::withdraw_unbonded`] for more
 *details.
 */
"reap_stash": Anonymize<Ie5vbnd9198quk>, 
/**
 *Remove the given nominations from the calling validator.
 *
 *Effects will be felt at the beginning of the next era.
 *
 *The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *
 *- `who`: A list of nominator stash accounts who are nominating this validator which
 *  should no longer be nominating this validator.
 *
 *Note: Making this call only makes sense if you first set the validator preferences to
 *block any further nominations.
 */
"kick": Anonymize<I6rqcpg80db1fb>, 
/**
 *Update the various staking configurations .
 *
 ** `min_nominator_bond`: The minimum active bond needed to be a nominator.
 ** `min_validator_bond`: The minimum active bond needed to be a validator.
 ** `max_nominator_count`: The max number of users who can be a nominator at once. When
 *  set to `None`, no limit is enforced.
 ** `max_validator_count`: The max number of users who can be a validator at once. When
 *  set to `None`, no limit is enforced.
 ** `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
 *  should be filled in order for the `chill_other` transaction to work.
 ** `min_commission`: The minimum amount of commission that each validators must maintain.
 *  This is checked only upon calling `validate`. Existing validators are not affected.
 *
 *RuntimeOrigin must be Root to call this function.
 *
 *NOTE: Existing nominators and validators will not be affected by this update.
 *to kick people under the new limits, `chill_other` should be called.
 */
"set_staking_configs": Anonymize<If1qr0kbbl298c>, 
/**
 *Declare a `controller` to stop participating as either a validator or nominator.
 *
 *Effects will be felt at the beginning of the next era.
 *
 *The dispatch origin for this call must be _Signed_, but can be called by anyone.
 *
 *If the caller is the same as the controller being targeted, then no further checks are
 *enforced, and this function behaves just like `chill`.
 *
 *If the caller is different than the controller being targeted, the following conditions
 *must be met:
 *
 ** `controller` must belong to a nominator who has become non-decodable,
 *
 *Or:
 *
 ** A `ChillThreshold` must be set and checked which defines how close to the max
 *  nominators or validators we must reach before users can start chilling one-another.
 ** A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
 *  how close we are to the threshold.
 ** A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
 *  if this is a person that should be chilled because they have not met the threshold
 *  bond required.
 *
 *This can be helpful if bond requirements are updated, and we need to remove old users
 *who do not satisfy these requirements.
 */
"chill_other": Anonymize<Idl3umm12u5pa>, 
/**
 *Force a validator to have at least the minimum commission. This will not affect a
 *validator who already has a commission greater than or equal to the minimum. Any account
 *can call this.
 */
"force_apply_min_commission": Anonymize<I5ont0141q9ss5>, 
/**
 *Sets the minimum amount of commission that each validators must maintain.
 *
 *This call has lower privilege requirements than `set_staking_config` and can be called
 *by the `T::AdminOrigin`. Root can always call this.
 */
"set_min_commission": Anonymize<I3vh014cqgmrfd>, 
/**
 *Pay out a page of the stakers behind a validator for the given era and page.
 *
 *- `validator_stash` is the stash account of the validator.
 *- `era` may be any era between `[current_era - history_depth; current_era]`.
 *- `page` is the page index of nominators to pay out with value between 0 and
 *  `num_nominators / T::MaxExposurePageSize`.
 *
 *The origin of this call must be _Signed_. Any account can call this function, even if
 *it is not one of the stakers.
 *
 *If a validator has more than [`Config::MaxExposurePageSize`] nominators backing
 *them, then the list of nominators is paged, with each page being capped at
 *[`Config::MaxExposurePageSize`.] If a validator has more than one page of nominators,
 *the call needs to be made for each page separately in order for all the nominators
 *backing a validator to receive the reward. The nominators are not sorted across pages
 *and so it should not be assumed the highest staker would be on the topmost page and vice
 *versa. If rewards are not claimed in [`Config::HistoryDepth`] eras, they are lost.
 */
"payout_stakers_by_page": Anonymize<Ie6j49utvii126>, 
/**
 *Migrates an account's `RewardDestination::Controller` to
 *`RewardDestination::Account(controller)`.
 *
 *Effects will be felt instantly (as soon as this function is completed successfully).
 *
 *This will waive the transaction fee if the `payee` is successfully migrated.
 */
"update_payee": Anonymize<I3v6ks33uluhnj>, 
/**
 *Updates a batch of controller accounts to their corresponding stash account if they are
 *not the same. Ignores any controller accounts that do not exist, and does not operate if
 *the stash and controller are already the same.
 *
 *Effects will be felt instantly (as soon as this function is completed successfully).
 *
 *The dispatch origin must be `T::AdminOrigin`.
 */
"deprecate_controller_batch": Anonymize<I3kiiim1cds68i>, 
/**
 *Restores the state of a ledger which is in an inconsistent state.
 *
 *The requirements to restore a ledger are the following:
 ** The stash is bonded; or
 ** The stash is not bonded but it has a staking lock left behind; or
 ** If the stash has an associated ledger and its state is inconsistent; or
 ** If the ledger is not corrupted *but* its staking lock is out of sync.
 *
 *The `maybe_*` input parameters will overwrite the corresponding data and metadata of the
 *ledger associated with the stash. If the input parameters are not set, the ledger will
 *be reset values from on-chain state.
 */
"restore_ledger": Anonymize<I4k60mkh2r6jjg>, 
/**
 *Removes the legacy Staking locks if they exist.
 *
 *This removes the legacy lock on the stake with [`Config::OldCurrency`] and creates a
 *hold on it if needed. If all stake cannot be held, the best effort is made to hold as
 *much as possible. The remaining stake is forced withdrawn from the ledger.
 *
 *The fee is waived if the migration is successful.
 */
"migrate_currency": Anonymize<Idl3umm12u5pa>, 
/**
 *This function allows governance to manually slash a validator and is a
 ***fallback mechanism**.
 *
 *The dispatch origin must be `T::AdminOrigin`.
 *
 *## Parameters
 *- `validator_stash` - The stash account of the validator to slash.
 *- `era` - The era in which the validator was in the active set.
 *- `slash_fraction` - The percentage of the stake to slash, expressed as a Perbill.
 *
 *## Behavior
 *
 *The slash will be applied using the standard slashing mechanics, respecting the
 *configured `SlashDeferDuration`.
 *
 *This means:
 *- If the validator was already slashed by a higher percentage for the same era, this
 *  slash will have no additional effect.
 *- If the validator was previously slashed by a lower percentage, only the difference
 *  will be applied.
 *- The slash will be deferred by `SlashDeferDuration` eras before being enacted.
 */
"manual_slash": Anonymize<Ic5njrpnvi3f8g>}>;

export type I2eip8tc75dpje = {"value": bigint, "payee": StakingRewardDestination};

export type I564va64vtidbq = {"max_additional": bigint};

export type I328av3j0bgmjb = {"num_slashing_spans": number};

export type I4tuqm9ato907i = {"prefs": Anonymize<I9o7ssi9vmhmgr>};

export type I19iomcbdrerea = {"targets": Anonymize<I2iqvvm6adorej>};

export type I2iqvvm6adorej = Array<Anonymize<I4su1fqci7afjt>>;

export type I9dgmcnuamt5p8 = {"payee": StakingRewardDestination};

export type Ifhs60omlhvt3 = {"additional": number};

export type If34udpd5e57vi = {"factor": number};

export type Ie5vbnd9198quk = {"stash": SS58String, "num_slashing_spans": number};

export type I3h6murn8bd4v5 = {"era": number, "slash_indices": Anonymize<Icgljjb6j82uhn>};

export type I6k6jf8ncesuu3 = {"validator_stash": SS58String, "era": number};

export type I6rqcpg80db1fb = {"who": Anonymize<I2iqvvm6adorej>};

export type If1qr0kbbl298c = {"min_nominator_bond": StakingPalletConfigOpBig, "min_validator_bond": StakingPalletConfigOpBig, "max_nominator_count": StakingPalletConfigOp, "max_validator_count": StakingPalletConfigOp, "chill_threshold": StakingPalletConfigOp, "min_commission": StakingPalletConfigOp, "max_staked_rewards": StakingPalletConfigOp};

export type StakingPalletConfigOpBig = Enum<{"Noop": undefined, "Set": bigint, "Remove": undefined}>;
export const StakingPalletConfigOpBig = _Enum as unknown as GetEnum<StakingPalletConfigOpBig>;

export type StakingPalletConfigOp = Enum<{"Noop": undefined, "Set": number, "Remove": undefined}>;
export const StakingPalletConfigOp = _Enum as unknown as GetEnum<StakingPalletConfigOp>;

export type I5ont0141q9ss5 = {"validator_stash": SS58String};

export type Ie6j49utvii126 = {"validator_stash": SS58String, "era": number, "page": number};

export type I3v6ks33uluhnj = {"controller": SS58String};

export type I3kiiim1cds68i = {"controllers": Anonymize<Ia2lhg7l2hilo3>};

export type I4k60mkh2r6jjg = {"stash": SS58String, "maybe_controller"?: Anonymize<Ihfphjolmsqq1>, "maybe_total"?: Anonymize<I35p85j063s0il>, "maybe_unlocking"?: (Anonymize<I9nc4v1upo2c8e>) | undefined};

export type Ic5njrpnvi3f8g = {"validator_stash": SS58String, "era": number, "slash_fraction": number};

export type Ifpamil718dolu = AnonymousEnum<{
/**
 *Sets the session key(s) of the function caller to `keys`.
 *Allows an account to set its session key prior to becoming a validator.
 *This doesn't take effect until the next session.
 *
 *The dispatch origin of this function must be signed.
 *
 *## Complexity
 *- `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
 *  fixed.
 */
"set_keys": Anonymize<I8gh566he1q1pj>, 
/**
 *Removes any session key(s) of the function caller.
 *
 *This doesn't take effect until the next session.
 *
 *The dispatch origin of this function must be Signed and the account must be either be
 *convertible to a validator ID using the chain's typical addressing system (this usually
 *means being a controller account) or directly convertible into a validator ID (which
 *usually means being a stash account).
 *
 *## Complexity
 *- `O(1)` in number of key types. Actual cost depends on the number of length of
 *  `T::Keys::key_ids()` which is fixed.
 */
"purge_keys": undefined}>;

export type I8gh566he1q1pj = {"keys": Anonymize<I23blhbuf4rn4p>, "proof": Binary};

export type I4hnic0gfvfj0p = AnonymousEnum<{
/**
 *Propose a sensitive action to be taken.
 *
 *The dispatch origin of this call must be _Signed_ and the sender must
 *have funds to cover the deposit.
 *
 *- `proposal_hash`: The hash of the proposal preimage.
 *- `value`: The amount of deposit (must be at least `MinimumDeposit`).
 *
 *Emits `Proposed`.
 */
"propose": Anonymize<I1moso5oagpiea>, 
/**
 *Signals agreement with a particular proposal.
 *
 *The dispatch origin of this call must be _Signed_ and the sender
 *must have funds to cover the deposit, equal to the original deposit.
 *
 *- `proposal`: The index of the proposal to second.
 */
"second": Anonymize<Ibeb4n9vpjefp3>, 
/**
 *Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 *otherwise it is a vote to keep the status quo.
 *
 *The dispatch origin of this call must be _Signed_.
 *
 *- `ref_index`: The index of the referendum to vote for.
 *- `vote`: The vote configuration.
 */
"vote": Anonymize<Id7murq9s9fg6h>, 
/**
 *Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 *referendum.
 *
 *The dispatch origin of this call must be `CancellationOrigin`.
 *
 *-`ref_index`: The index of the referendum to cancel.
 *
 *Weight: `O(1)`.
 */
"emergency_cancel": Anonymize<Ied9mja4bq7va8>, 
/**
 *Schedule a referendum to be tabled once it is legal to schedule an external
 *referendum.
 *
 *The dispatch origin of this call must be `ExternalOrigin`.
 *
 *- `proposal_hash`: The preimage hash of the proposal.
 */
"external_propose": Anonymize<I4f7jul8ljs54r>, 
/**
 *Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 *an external referendum.
 *
 *The dispatch of this call must be `ExternalMajorityOrigin`.
 *
 *- `proposal_hash`: The preimage hash of the proposal.
 *
 *Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *pre-scheduled `external_propose` call.
 *
 *Weight: `O(1)`
 */
"external_propose_majority": Anonymize<I4f7jul8ljs54r>, 
/**
 *Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 *schedule an external referendum.
 *
 *The dispatch of this call must be `ExternalDefaultOrigin`.
 *
 *- `proposal_hash`: The preimage hash of the proposal.
 *
 *Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *pre-scheduled `external_propose` call.
 *
 *Weight: `O(1)`
 */
"external_propose_default": Anonymize<I4f7jul8ljs54r>, 
/**
 *Schedule the currently externally-proposed majority-carries referendum to be tabled
 *immediately. If there is no externally-proposed referendum currently, or if there is one
 *but it is not a majority-carries referendum then it fails.
 *
 *The dispatch of this call must be `FastTrackOrigin`.
 *
 *- `proposal_hash`: The hash of the current external proposal.
 *- `voting_period`: The period that is allowed for voting on this proposal. Increased to
 *	Must be always greater than zero.
 *	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
 *- `delay`: The number of block after voting has ended in approval and this should be
 *  enacted. This doesn't have a minimum amount.
 *
 *Emits `Started`.
 *
 *Weight: `O(1)`
 */
"fast_track": Anonymize<I5agg650597e49>, 
/**
 *Veto and blacklist the external proposal hash.
 *
 *The dispatch origin of this call must be `VetoOrigin`.
 *
 *- `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 *
 *Emits `Vetoed`.
 *
 *Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
"veto_external": Anonymize<I2ev73t79f46tb>, 
/**
 *Remove a referendum.
 *
 *The dispatch origin of this call must be _Root_.
 *
 *- `ref_index`: The index of the referendum to cancel.
 *
 *# Weight: `O(1)`.
 */
"cancel_referendum": Anonymize<Ied9mja4bq7va8>, 
/**
 *Delegate the voting power (with some given conviction) of the sending account.
 *
 *The balance delegated is locked for as long as it's delegated, and thereafter for the
 *time appropriate for the conviction's lock period.
 *
 *The dispatch origin of this call must be _Signed_, and the signing account must either:
 *  - be delegating already; or
 *  - have no voting activity (if there is, then it will need to be removed/consolidated
 *    through `reap_vote` or `unvote`).
 *
 *- `to`: The account whose voting the `target` account's voting power will follow.
 *- `conviction`: The conviction that will be attached to the delegated votes. When the
 *  account is undelegated, the funds will be locked for the corresponding period.
 *- `balance`: The amount of the account's balance to be used in delegating. This must not
 *  be more than the account's current balance.
 *
 *Emits `Delegated`.
 *
 *Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *  voted on. Weight is charged as if maximum votes.
 */
"delegate": Anonymize<I1736r1jp6plpc>, 
/**
 *Undelegate the voting power of the sending account.
 *
 *Tokens may be unlocked following once an amount of time consistent with the lock period
 *of the conviction with which the delegation was issued.
 *
 *The dispatch origin of this call must be _Signed_ and the signing account must be
 *currently delegating.
 *
 *Emits `Undelegated`.
 *
 *Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *  voted on. Weight is charged as if maximum votes.
 */
"undelegate": undefined, 
/**
 *Clears all public proposals.
 *
 *The dispatch origin of this call must be _Root_.
 *
 *Weight: `O(1)`.
 */
"clear_public_proposals": undefined, 
/**
 *Unlock tokens that have an expired lock.
 *
 *The dispatch origin of this call must be _Signed_.
 *
 *- `target`: The account to remove the lock on.
 *
 *Weight: `O(R)` with R number of vote of target.
 */
"unlock": Anonymize<If31vrl50nund3>, 
/**
 *Remove a vote for a referendum.
 *
 *If:
 *- the referendum was cancelled, or
 *- the referendum is ongoing, or
 *- the referendum has ended such that
 *  - the vote of the account was in opposition to the result; or
 *  - there was no conviction to the account's vote; or
 *  - the account made a split vote
 *...then the vote is removed cleanly and a following call to `unlock` may result in more
 *funds being available.
 *
 *If, however, the referendum has ended and:
 *- it finished corresponding to the vote of the account, and
 *- the account made a standard vote with conviction, and
 *- the lock period of the conviction is not over
 *...then the lock will be aggregated into the overall account's lock, which may involve
 **overlocking* (where the two locks are combined into a single lock that is the maximum
 *of both the amount locked and the time is it locked for).
 *
 *The dispatch origin of this call must be _Signed_, and the signer must have a vote
 *registered for referendum `index`.
 *
 *- `index`: The index of referendum of the vote to be removed.
 *
 *Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *  Weight is calculated for the maximum number of vote.
 */
"remove_vote": Anonymize<I666bl2fqjkejo>, 
/**
 *Remove a vote for a referendum.
 *
 *If the `target` is equal to the signer, then this function is exactly equivalent to
 *`remove_vote`. If not equal to the signer, then the vote must have expired,
 *either because the referendum was cancelled, because the voter lost the referendum or
 *because the conviction period is over.
 *
 *The dispatch origin of this call must be _Signed_.
 *
 *- `target`: The account of the vote to be removed; this account must have voted for
 *  referendum `index`.
 *- `index`: The index of referendum of the vote to be removed.
 *
 *Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *  Weight is calculated for the maximum number of vote.
 */
"remove_other_vote": Anonymize<I6s1n1athh0bbq>, 
/**
 *Permanently place a proposal into the blacklist. This prevents it from ever being
 *proposed again.
 *
 *If called on a queued public or external proposal, then this will result in it being
 *removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 *then it will be cancelled.
 *
 *The dispatch origin of this call must be `BlacklistOrigin`.
 *
 *- `proposal_hash`: The proposal hash to blacklist permanently.
 *- `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 *cancelled.
 *
 *Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *  reasonable value).
 */
"blacklist": Anonymize<I3v9h9f3mpm1l8>, 
/**
 *Remove a proposal.
 *
 *The dispatch origin of this call must be `CancelProposalOrigin`.
 *
 *- `prop_index`: The index of the proposal to cancel.
 *
 *Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
"cancel_proposal": Anonymize<I9mnj4k4u8ls2c>, 
/**
 *Set or clear a metadata of a proposal or a referendum.
 *
 *Parameters:
 *- `origin`: Must correspond to the `MetadataOwner`.
 *    - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
 *      threshold.
 *    - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
 *      threshold.
 *    - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
 *      threshold.
 *    - `Signed` by a creator for a public proposal.
 *    - `Signed` to clear a metadata for a finished referendum.
 *    - `Root` to set a metadata for an ongoing referendum.
 *- `owner`: an identifier of a metadata owner.
 *- `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
 */
"set_metadata": Anonymize<I2kt2u1flctk2q>}>;

export type I1moso5oagpiea = {"proposal": PreimagesBounded, "value": bigint};

export type Ibeb4n9vpjefp3 = {"proposal": number};

export type Id7murq9s9fg6h = {"ref_index": number, "vote": Anonymize<Ia9hdots6g53fs>};

export type I4f7jul8ljs54r = {"proposal": PreimagesBounded};

export type I5agg650597e49 = {"proposal_hash": FixedSizeBinary<32>, "voting_period": number, "delay": number};

export type I1736r1jp6plpc = {"to": Anonymize<I4su1fqci7afjt>, "conviction": VotingConviction, "balance": bigint};

export type If31vrl50nund3 = {"target": Anonymize<I4su1fqci7afjt>};

export type I6s1n1athh0bbq = {"target": Anonymize<I4su1fqci7afjt>, "index": number};

export type I3v9h9f3mpm1l8 = {"proposal_hash": FixedSizeBinary<32>, "maybe_ref_index"?: Anonymize<I4arjljr6dpflb>};

export type I2kt2u1flctk2q = {"owner": Anonymize<I2itl2k1j2q8nf>, "maybe_hash"?: Anonymize<I4s6vifaf8k998>};

export type Iaerjet9i7j869 = AnonymousEnum<{
/**
 *Set the collective's membership.
 *
 *- `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *- `prime`: The prime member whose vote sets the default.
 *- `old_count`: The upper bound for the previous number of members in storage. Used for
 *  weight estimation.
 *
 *The dispatch of this call must be `SetMembersOrigin`.
 *
 *NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *      the weight estimations rely on it to estimate dispatchable weight.
 *
 *# WARNING:
 *
 *The `pallet-collective` can also be managed by logic outside of the pallet through the
 *implementation of the trait [`ChangeMembers`].
 *Any call to `set_members` must be careful that the member set doesn't get out of sync
 *with other logic managing the member set.
 *
 *## Complexity:
 *- `O(MP + N)` where:
 *  - `M` old-members-count (code- and governance-bounded)
 *  - `N` new-members-count (code- and governance-bounded)
 *  - `P` proposals-count (code-bounded)
 */
"set_members": Anonymize<I38jfk5li8iang>, 
/**
 *Dispatch a proposal from a member using the `Member` origin.
 *
 *Origin must be a member of the collective.
 *
 *## Complexity:
 *- `O(B + M + P)` where:
 *- `B` is `proposal` size in bytes (length-fee-bounded)
 *- `M` members-count (code-bounded)
 *- `P` complexity of dispatching `proposal`
 */
"execute": Anonymize<I5o15acmgso6r1>, 
/**
 *Add a new proposal to either be voted on or executed directly.
 *
 *Requires the sender to be member.
 *
 *`threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *or put up for voting.
 *
 *## Complexity
 *- `O(B + M + P1)` or `O(B + M + P2)` where:
 *  - `B` is `proposal` size in bytes (length-fee-bounded)
 *  - `M` is members-count (code- and governance-bounded)
 *  - branching is influenced by `threshold` where:
 *    - `P1` is proposal execution complexity (`threshold < 2`)
 *    - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 */
"propose": Anonymize<Ieqgnaa5msfrta>, 
/**
 *Add an aye or nay vote for the sender to the given proposal.
 *
 *Requires the sender to be a member.
 *
 *Transaction fees will be waived if the member is voting on any particular proposal
 *for the first time and the call is successful. Subsequent vote changes will charge a
 *fee.
 *## Complexity
 *- `O(M)` where `M` is members-count (code- and governance-bounded)
 */
"vote": Anonymize<I2dtrijkm5601t>, 
/**
 *Disapprove a proposal, close, and remove it from the system, regardless of its current
 *state.
 *
 *Must be called by the Root origin.
 *
 *Parameters:
 ** `proposal_hash`: The hash of the proposal that should be disapproved.
 *
 *## Complexity
 *O(P) where P is the number of max proposals
 */
"disapprove_proposal": Anonymize<I2ev73t79f46tb>, 
/**
 *Close a vote that is either approved, disapproved or whose voting period has ended.
 *
 *May be called by any signed account in order to finish voting and close the proposal.
 *
 *If called before the end of the voting period it will only close the vote if it is
 *has enough votes to be approved or disapproved.
 *
 *If called after the end of the voting period abstentions are counted as rejections
 *unless there is a prime member set and the prime member cast an approval.
 *
 *If the close operation completes successfully with disapproval, the transaction fee will
 *be waived. Otherwise execution of the approved operation will be charged to the caller.
 *
 *+ `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 *proposal.
 *+ `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *`storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 *
 *## Complexity
 *- `O(B + M + P1 + P2)` where:
 *  - `B` is `proposal` size in bytes (length-fee-bounded)
 *  - `M` is members-count (code- and governance-bounded)
 *  - `P1` is the complexity of `proposal` preimage.
 *  - `P2` is proposal-count (code-bounded)
 */
"close": Anonymize<Ib2obgji960euh>, 
/**
 *Disapprove the proposal and burn the cost held for storing this proposal.
 *
 *Parameters:
 *- `origin`: must be the `KillOrigin`.
 *- `proposal_hash`: The hash of the proposal that should be killed.
 *
 *Emits `Killed` and `ProposalCostBurned` if any cost was held for a given proposal.
 */
"kill": Anonymize<I2ev73t79f46tb>, 
/**
 *Release the cost held for storing a proposal once the given proposal is completed.
 *
 *If there is no associated cost for the given proposal, this call will have no effect.
 *
 *Parameters:
 *- `origin`: must be `Signed` or `Root`.
 *- `proposal_hash`: The hash of the proposal.
 *
 *Emits `ProposalCostReleased` if any cost held for a given proposal.
 */
"release_proposal_cost": Anonymize<I2ev73t79f46tb>}>;

export type I38jfk5li8iang = {"new_members": Anonymize<Ia2lhg7l2hilo3>, "prime"?: Anonymize<Ihfphjolmsqq1>, "old_count": number};

export type I5o15acmgso6r1 = {"proposal": TxCallData, "length_bound": number};

export type Ieqgnaa5msfrta = {"threshold": number, "proposal": TxCallData, "length_bound": number};

export type I2dtrijkm5601t = {"proposal": FixedSizeBinary<32>, "index": number, "approve": boolean};

export type Ib2obgji960euh = {"proposal_hash": FixedSizeBinary<32>, "index": number, "proposal_weight_bound": Anonymize<I4q39t5hn830vp>, "length_bound": number};

export type I6ab0pou3i8npt = AnonymousEnum<{
/**
 *Vote for a set of candidates for the upcoming round of election. This can be called to
 *set the initial votes, or update already existing votes.
 *
 *Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
 *reserved. The deposit is based on the number of votes and can be updated over time.
 *
 *The `votes` should:
 *  - not be empty.
 *  - be less than the number of possible candidates. Note that all current members and
 *    runners-up are also automatically candidates for the next round.
 *
 *If `value` is more than `who`'s free balance, then the maximum of the two is used.
 *
 *The dispatch origin of this call must be signed.
 *
 *### Warning
 *
 *It is the responsibility of the caller to **NOT** place all of their balance into the
 *lock and keep some for further operations.
 */
"vote": Anonymize<Iaa13icjlsj13d>, 
/**
 *Remove `origin` as a voter.
 *
 *This removes the lock and returns the deposit.
 *
 *The dispatch origin of this call must be signed and be a voter.
 */
"remove_voter": undefined, 
/**
 *Submit oneself for candidacy. A fixed amount of deposit is recorded.
 *
 *All candidates are wiped at the end of the term. They either become a member/runner-up,
 *or leave the system while their deposit is slashed.
 *
 *The dispatch origin of this call must be signed.
 *
 *### Warning
 *
 *Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
 *to get their deposit back. Losing the spot in an election will always lead to a slash.
 *
 *The number of current candidates must be provided as witness data.
 *## Complexity
 *O(C + log(C)) where C is candidate_count.
 */
"submit_candidacy": Anonymize<I98vh5ccjtf1ev>, 
/**
 *Renounce one's intention to be a candidate for the next election round. 3 potential
 *outcomes exist:
 *
 *- `origin` is a candidate and not elected in any set. In this case, the deposit is
 *  unreserved, returned and origin is removed as a candidate.
 *- `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
 *  origin is removed as a runner-up.
 *- `origin` is a current member. In this case, the deposit is unreserved and origin is
 *  removed as a member, consequently not being a candidate for the next round anymore.
 *  Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
 *  are immediately used. If the prime is renouncing, then no prime will exist until the
 *  next round.
 *
 *The dispatch origin of this call must be signed, and have one of the above roles.
 *The type of renouncing must be provided as witness data.
 *
 *## Complexity
 *  - Renouncing::Candidate(count): O(count + log(count))
 *  - Renouncing::Member: O(1)
 *  - Renouncing::RunnerUp: O(1)
 */
"renounce_candidacy": Anonymize<I3al0eab2u0gt2>, 
/**
 *Remove a particular member from the set. This is effective immediately and the bond of
 *the outgoing member is slashed.
 *
 *If a runner-up is available, then the best runner-up will be removed and replaces the
 *outgoing member. Otherwise, if `rerun_election` is `true`, a new phragmen election is
 *started, else, nothing happens.
 *
 *If `slash_bond` is set to true, the bond of the member being removed is slashed. Else,
 *it is returned.
 *
 *The dispatch origin of this call must be root.
 *
 *Note that this does not affect the designated block number of the next election.
 *
 *## Complexity
 *- Check details of remove_and_replace_member() and do_phragmen().
 */
"remove_member": Anonymize<Ib3prtfc334m1t>, 
/**
 *Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
 *deposit of the removed voters are returned.
 *
 *This is an root function to be used only for cleaning the state.
 *
 *The dispatch origin of this call must be root.
 *
 *## Complexity
 *- Check is_defunct_voter() details.
 */
"clean_defunct_voters": Anonymize<I6fuug4i4r04hi>}>;

export type Iaa13icjlsj13d = {"votes": Anonymize<Ia2lhg7l2hilo3>, "value": bigint};

export type I98vh5ccjtf1ev = {"candidate_count": number};

export type I3al0eab2u0gt2 = {"renouncing": Enum<{"Member": undefined, "RunnerUp": undefined, "Candidate": number}>};

export type Ib3prtfc334m1t = {"who": Anonymize<I4su1fqci7afjt>, "slash_bond": boolean, "rerun_election": boolean};

export type I6fuug4i4r04hi = {"num_voters": number, "num_defunct": number};

export type I3ndh4r2ep15q9 = AnonymousEnum<{
/**
 *Add a member `who` to the set.
 *
 *May only be called from `T::AddOrigin`.
 */
"add_member": Anonymize<Icu8seopr711dn>, 
/**
 *Remove a member `who` from the set.
 *
 *May only be called from `T::RemoveOrigin`.
 */
"remove_member": Anonymize<Icu8seopr711dn>, 
/**
 *Swap out one member `remove` for another `add`.
 *
 *May only be called from `T::SwapOrigin`.
 *
 *Prime membership is *not* passed from `remove` to `add`, if extant.
 */
"swap_member": Anonymize<Id09aqt1ca773l>, 
/**
 *Change the membership to a new set, disregarding the existing membership. Be nice and
 *pass `members` pre-sorted.
 *
 *May only be called from `T::ResetOrigin`.
 */
"reset_members": Anonymize<I3c63j6sh3evqn>, 
/**
 *Swap out the sending member for some other key `new`.
 *
 *May only be called from `Signed` origin of a current member.
 *
 *Prime membership is passed from the origin account to `new`, if extant.
 */
"change_key": Anonymize<I79cmnv5q6b3p>, 
/**
 *Set the prime member. Must be a current member.
 *
 *May only be called from `T::PrimeOrigin`.
 */
"set_prime": Anonymize<Icu8seopr711dn>, 
/**
 *Remove the prime member if it exists.
 *
 *May only be called from `T::PrimeOrigin`.
 */
"clear_prime": undefined}>;

export type Icu8seopr711dn = {"who": Anonymize<I4su1fqci7afjt>};

export type Id09aqt1ca773l = {"remove": Anonymize<I4su1fqci7afjt>, "add": Anonymize<I4su1fqci7afjt>};

export type I3c63j6sh3evqn = {"members": Anonymize<Ia2lhg7l2hilo3>};

export type I79cmnv5q6b3p = {"new": Anonymize<I4su1fqci7afjt>};

export type I5u9ggmn8umfqm = AnonymousEnum<{
/**
 *Report voter equivocation/misbehavior. This method will verify the
 *equivocation proof and validate the given key ownership proof
 *against the extracted offender. If both are valid, the offence
 *will be reported.
 */
"report_equivocation": Anonymize<I7ne83r38c2sqq>, 
/**
 *Report voter equivocation/misbehavior. This method will verify the
 *equivocation proof and validate the given key ownership proof
 *against the extracted offender. If both are valid, the offence
 *will be reported.
 *
 *This extrinsic must be called unsigned and it is expected that only
 *block authors will call it (validated in `ValidateUnsigned`), as such
 *if the block author is defined it will be defined as the equivocation
 *reporter.
 */
"report_equivocation_unsigned": Anonymize<I7ne83r38c2sqq>, 
/**
 *Note that the current authority set of the GRANDPA finality gadget has stalled.
 *
 *This will trigger a forced authority set change at the beginning of the next session, to
 *be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
 *that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
 *The block production rate (which may be slowed down because of finality lagging) should
 *be taken into account when choosing the `delay`. The GRANDPA voters based on the new
 *authority will start voting on top of `best_finalized_block_number` for new finalized
 *blocks. `best_finalized_block_number` should be the highest of the latest finalized
 *block of all validators of the new authority set.
 *
 *Only callable by root.
 */
"note_stalled": Anonymize<I2hviml3snvhhn>}>;

export type I7ne83r38c2sqq = {"equivocation_proof": Anonymize<I9puqgoda8ofk4>, "key_owner_proof": Anonymize<I3ia7aufsoj0l1>};

export type I9puqgoda8ofk4 = {"set_id": bigint, "equivocation": GrandpaEquivocation};

export type GrandpaEquivocation = Enum<{"Prevote": {"round_number": bigint, "identity": FixedSizeBinary<32>, "first": [{"target_hash": FixedSizeBinary<32>, "target_number": number}, FixedSizeBinary<64>], "second": [{"target_hash": FixedSizeBinary<32>, "target_number": number}, FixedSizeBinary<64>]}, "Precommit": {"round_number": bigint, "identity": FixedSizeBinary<32>, "first": [{"target_hash": FixedSizeBinary<32>, "target_number": number}, FixedSizeBinary<64>], "second": [{"target_hash": FixedSizeBinary<32>, "target_number": number}, FixedSizeBinary<64>]}}>;
export const GrandpaEquivocation = _Enum as unknown as GetEnum<GrandpaEquivocation>;

export type I2hviml3snvhhn = {"delay": number, "best_finalized_block_number": number};

export type Ia0qf1kr2u2mt4 = AnonymousEnum<{
/**
 *Propose and approve a spend of treasury funds.
 *
 *## Dispatch Origin
 *
 *Must be [`Config::SpendOrigin`] with the `Success` value being at least `amount`.
 *
 *### Details
 *NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
 *beneficiary.
 *
 *### Parameters
 *- `amount`: The amount to be transferred from the treasury to the `beneficiary`.
 *- `beneficiary`: The destination account for the transfer.
 *
 *## Events
 *
 *Emits [`Event::SpendApproved`] if successful.
 */
"spend_local": Anonymize<I7fcl4aua07ato>, 
/**
 *Force a previously approved proposal to be removed from the approval queue.
 *
 *## Dispatch Origin
 *
 *Must be [`Config::RejectOrigin`].
 *
 *## Details
 *
 *The original deposit will no longer be returned.
 *
 *### Parameters
 *- `proposal_id`: The index of a proposal
 *
 *### Complexity
 *- O(A) where `A` is the number of approvals
 *
 *### Errors
 *- [`Error::ProposalNotApproved`]: The `proposal_id` supplied was not found in the
 *  approval queue, i.e., the proposal has not been approved. This could also mean the
 *  proposal does not exist altogether, thus there is no way it would have been approved
 *  in the first place.
 */
"remove_approval": Anonymize<Icm9m0qeemu66d>, 
/**
 *Propose and approve a spend of treasury funds.
 *
 *## Dispatch Origin
 *
 *Must be [`Config::SpendOrigin`] with the `Success` value being at least
 *`amount` of `asset_kind` in the native asset. The amount of `asset_kind` is converted
 *for assertion using the [`Config::BalanceConverter`].
 *
 *## Details
 *
 *Create an approved spend for transferring a specific `amount` of `asset_kind` to a
 *designated beneficiary. The spend must be claimed using the `payout` dispatchable within
 *the [`Config::PayoutPeriod`].
 *
 *### Parameters
 *- `asset_kind`: An indicator of the specific asset class to be spent.
 *- `amount`: The amount to be transferred from the treasury to the `beneficiary`.
 *- `beneficiary`: The beneficiary of the spend.
 *- `valid_from`: The block number from which the spend can be claimed. It can refer to
 *  the past if the resulting spend has not yet expired according to the
 *  [`Config::PayoutPeriod`]. If `None`, the spend can be claimed immediately after
 *  approval.
 *
 *## Events
 *
 *Emits [`Event::AssetSpendApproved`] if successful.
 */
"spend": Anonymize<I7t3arsaa2siad>, 
/**
 *Claim a spend.
 *
 *## Dispatch Origin
 *
 *Must be signed
 *
 *## Details
 *
 *Spends must be claimed within some temporal bounds. A spend may be claimed within one
 *[`Config::PayoutPeriod`] from the `valid_from` block.
 *In case of a payout failure, the spend status must be updated with the `check_status`
 *dispatchable before retrying with the current function.
 *
 *### Parameters
 *- `index`: The spend index.
 *
 *## Events
 *
 *Emits [`Event::Paid`] if successful.
 */
"payout": Anonymize<I666bl2fqjkejo>, 
/**
 *Check the status of the spend and remove it from the storage if processed.
 *
 *## Dispatch Origin
 *
 *Must be signed.
 *
 *## Details
 *
 *The status check is a prerequisite for retrying a failed payout.
 *If a spend has either succeeded or expired, it is removed from the storage by this
 *function. In such instances, transaction fees are refunded.
 *
 *### Parameters
 *- `index`: The spend index.
 *
 *## Events
 *
 *Emits [`Event::PaymentFailed`] if the spend payout has failed.
 *Emits [`Event::SpendProcessed`] if the spend payout has succeed.
 */
"check_status": Anonymize<I666bl2fqjkejo>, 
/**
 *Void previously approved spend.
 *
 *## Dispatch Origin
 *
 *Must be [`Config::RejectOrigin`].
 *
 *## Details
 *
 *A spend void is only possible if the payout has not been attempted yet.
 *
 *### Parameters
 *- `index`: The spend index.
 *
 *## Events
 *
 *Emits [`Event::AssetSpendVoided`] if successful.
 */
"void_spend": Anonymize<I666bl2fqjkejo>}>;

export type I7fcl4aua07ato = {"amount": bigint, "beneficiary": Anonymize<I4su1fqci7afjt>};

export type Icm9m0qeemu66d = {"proposal_id": number};

export type I7t3arsaa2siad = {"asset_kind": Anonymize<Ikjpbtmstl9nm>, "amount": bigint, "beneficiary": Anonymize<I4su1fqci7afjt>, "valid_from"?: Anonymize<I4arjljr6dpflb>};

export type I7mb73bi7tl8uv = AnonymousEnum<{
/**
 *Initialize a conversion rate to native balance for the given asset.
 *
 *## Complexity
 *- O(1)
 */
"create": Anonymize<Ies1efup9f14ih>, 
/**
 *Update the conversion rate to native balance for the given asset.
 *
 *## Complexity
 *- O(1)
 */
"update": Anonymize<Ies1efup9f14ih>, 
/**
 *Remove an existing conversion rate to native balance for the given asset.
 *
 *## Complexity
 *- O(1)
 */
"remove": Anonymize<Iunnigs2ph8da>}>;

export type I3fe7osiu184ch = AnonymousEnum<{
/**
 *Deprecated version if [`Self::call`] for use in an in-storage `Call`.
 */
"call_old_weight": Anonymize<I1vll9s18sd1u7>, 
/**
 *Deprecated version if [`Self::instantiate_with_code`] for use in an in-storage `Call`.
 */
"instantiate_with_code_old_weight": Anonymize<I3otc7e9a35k1k>, 
/**
 *Deprecated version if [`Self::instantiate`] for use in an in-storage `Call`.
 */
"instantiate_old_weight": Anonymize<I89ier5tb9ne0s>, 
/**
 *Upload new `code` without instantiating a contract from it.
 *
 *If the code does not already exist a deposit is reserved from the caller
 *and unreserved only when [`Self::remove_code`] is called. The size of the reserve
 *depends on the size of the supplied `code`.
 *
 *If the code already exists in storage it will still return `Ok` and upgrades
 *the in storage version to the current
 *[`InstructionWeights::version`](InstructionWeights).
 *
 *- `determinism`: If this is set to any other value but [`Determinism::Enforced`] then
 *  the only way to use this code is to delegate call into it from an offchain execution.
 *  Set to [`Determinism::Enforced`] if in doubt.
 *
 *# Note
 *
 *Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
 *To avoid this situation a constructor could employ access control so that it can
 *only be instantiated by permissioned entities. The same is true when uploading
 *through [`Self::instantiate_with_code`].
 *
 *Use [`Determinism::Relaxed`] exclusively for non-deterministic code. If the uploaded
 *code is deterministic, specifying [`Determinism::Relaxed`] will be disregarded and
 *result in higher gas costs.
 */
"upload_code": Anonymize<Im2f0numhevg3>, 
/**
 *Remove the code stored under `code_hash` and refund the deposit to its owner.
 *
 *A code can only be removed by its original uploader (its owner) and only if it is
 *not used by any contract.
 */
"remove_code": Anonymize<Ib51vk42m1po4n>, 
/**
 *Privileged function that changes the code of an existing contract.
 *
 *This takes care of updating refcounts and all other necessary operations. Returns
 *an error if either the `code_hash` or `dest` do not exist.
 *
 *# Note
 *
 *This does **not** change the address of the contract in question. This means
 *that the contract address is no longer derived from its code hash after calling
 *this dispatchable.
 */
"set_code": Anonymize<I9ck7gf792i8am>, 
/**
 *Makes a call to an account, optionally transferring some balance.
 *
 *# Parameters
 *
 ** `dest`: Address of the contract to call.
 ** `value`: The balance to transfer from the `origin` to `dest`.
 ** `gas_limit`: The gas limit enforced when executing the constructor.
 ** `storage_deposit_limit`: The maximum amount of balance that can be charged from the
 *  caller to pay for the storage consumed.
 ** `data`: The input data to pass to the contract.
 *
 ** If the account is a smart-contract account, the associated code will be
 *executed and any value will be transferred.
 ** If the account is a regular account, any value will be transferred.
 ** If no account exists and the call value is not less than `existential_deposit`,
 *a regular account will be created and any value will be transferred.
 */
"call": Anonymize<I8vgdndamv46s3>, 
/**
 *Instantiates a new contract from the supplied `code` optionally transferring
 *some balance.
 *
 *This dispatchable has the same effect as calling [`Self::upload_code`] +
 *[`Self::instantiate`]. Bundling them together provides efficiency gains. Please
 *also check the documentation of [`Self::upload_code`].
 *
 *# Parameters
 *
 ** `value`: The balance to transfer from the `origin` to the newly created contract.
 ** `gas_limit`: The gas limit enforced when executing the constructor.
 ** `storage_deposit_limit`: The maximum amount of balance that can be charged/reserved
 *  from the caller to pay for the storage consumed.
 ** `code`: The contract code to deploy in raw bytes.
 ** `data`: The input data to pass to the contract constructor.
 ** `salt`: Used for the address derivation. See [`Pallet::contract_address`].
 *
 *Instantiation is executed as follows:
 *
 *- The supplied `code` is deployed, and a `code_hash` is created for that code.
 *- If the `code_hash` already exists on the chain the underlying `code` will be shared.
 *- The destination address is computed based on the sender, code_hash and the salt.
 *- The smart-contract account is created at the computed address.
 *- The `value` is transferred to the new account.
 *- The `deploy` function is executed in the context of the newly-created account.
 */
"instantiate_with_code": Anonymize<I83fv0vi59md7i>, 
/**
 *Instantiates a contract from a previously deployed wasm binary.
 *
 *This function is identical to [`Self::instantiate_with_code`] but without the
 *code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
 *must be supplied.
 */
"instantiate": Anonymize<I5tjjqcdd4tae0>, 
/**
 *When a migration is in progress, this dispatchable can be used to run migration steps.
 *Calls that contribute to advancing the migration have their fees waived, as it's helpful
 *for the chain. Note that while the migration is in progress, the pallet will also
 *leverage the `on_idle` hooks to run migration steps.
 */
"migrate": Anonymize<I1894dm1lf1ae7>}>;

export type I1vll9s18sd1u7 = {"dest": Anonymize<I4su1fqci7afjt>, "value": bigint, "gas_limit": bigint, "storage_deposit_limit"?: Anonymize<I35p85j063s0il>, "data": Binary};

export type I3otc7e9a35k1k = {"value": bigint, "gas_limit": bigint, "storage_deposit_limit"?: Anonymize<I35p85j063s0il>, "code": Binary, "data": Binary, "salt": Binary};

export type I89ier5tb9ne0s = {"value": bigint, "gas_limit": bigint, "storage_deposit_limit"?: Anonymize<I35p85j063s0il>, "code_hash": FixedSizeBinary<32>, "data": Binary, "salt": Binary};

export type Im2f0numhevg3 = {"code": Binary, "storage_deposit_limit"?: Anonymize<I35p85j063s0il>, "determinism": Anonymize<I2dfliekq1ed7e>};

export type I2dfliekq1ed7e = AnonymousEnum<{"Enforced": undefined, "Relaxed": undefined}>;

export type I9ck7gf792i8am = {"dest": Anonymize<I4su1fqci7afjt>, "code_hash": FixedSizeBinary<32>};

export type I8vgdndamv46s3 = {"dest": Anonymize<I4su1fqci7afjt>, "value": bigint, "gas_limit": Anonymize<I4q39t5hn830vp>, "storage_deposit_limit"?: Anonymize<I35p85j063s0il>, "data": Binary};

export type I83fv0vi59md7i = {"value": bigint, "gas_limit": Anonymize<I4q39t5hn830vp>, "storage_deposit_limit"?: Anonymize<I35p85j063s0il>, "code": Binary, "data": Binary, "salt": Binary};

export type I5tjjqcdd4tae0 = {"value": bigint, "gas_limit": Anonymize<I4q39t5hn830vp>, "storage_deposit_limit"?: Anonymize<I35p85j063s0il>, "code_hash": FixedSizeBinary<32>, "data": Binary, "salt": Binary};

export type I1894dm1lf1ae7 = {"weight_limit": Anonymize<I4q39t5hn830vp>};

export type Ia8v0r1ui50ee6 = AnonymousEnum<{
/**
 *Authenticates the sudo key and dispatches a function call with `Root` origin.
 */
"sudo": Anonymize<I69f1ld7io445a>, 
/**
 *Authenticates the sudo key and dispatches a function call with `Root` origin.
 *This function does not check the weight of the call, and instead allows the
 *Sudo user to specify the weight of the call.
 *
 *The dispatch origin for this call must be _Signed_.
 */
"sudo_unchecked_weight": Anonymize<Ie2g90i1hfmtda>, 
/**
 *Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
 *key.
 */
"set_key": Anonymize<I79cmnv5q6b3p>, 
/**
 *Authenticates the sudo key and dispatches a function call with `Signed` origin from
 *a given account.
 *
 *The dispatch origin for this call must be _Signed_.
 */
"sudo_as": Anonymize<I11jkdo5isvi72>, 
/**
 *Permanently removes the sudo key.
 *
 ***This cannot be un-done.**
 */
"remove_key": undefined}>;

export type I69f1ld7io445a = {"call": TxCallData};

export type I11jkdo5isvi72 = {"who": Anonymize<I4su1fqci7afjt>, "call": TxCallData};

export type I7ubsrnb7nbvds = AnonymousEnum<{
/**
 *## Complexity:
 *- `O(K)` where K is length of `Keys` (heartbeat.validators_len)
 *  - `O(K)`: decoding of length `K`
 */
"heartbeat": Anonymize<Idf1fcqa0qi2nt>}>;

export type Idf1fcqa0qi2nt = {"heartbeat": {"block_number": number, "session_index": number, "authority_index": number, "validators_len": number}, "signature": FixedSizeBinary<64>};

export type Ias6m7696errt5 = AnonymousEnum<{
/**
 *Add a registrar to the system.
 *
 *The dispatch origin for this call must be `T::RegistrarOrigin`.
 *
 *- `account`: the account of the registrar.
 *
 *Emits `RegistrarAdded` if successful.
 */
"add_registrar": Anonymize<I73kffnn32g4c7>, 
/**
 *Set an account's identity information and reserve the appropriate deposit.
 *
 *If the account already has identity information, the deposit is taken as part payment
 *for the new deposit.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *- `info`: The identity information.
 *
 *Emits `IdentitySet` if successful.
 */
"set_identity": Anonymize<I2kds5jji7slh8>, 
/**
 *Set the sub-accounts of the sender.
 *
 *Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 *and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 *
 *The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *identity.
 *
 *- `subs`: The identity's (new) sub-accounts.
 */
"set_subs": Anonymize<Ia9mkdf6l44shb>, 
/**
 *Clear an account's identity info and all sub-accounts and return all deposits.
 *
 *Payment: All reserved balances on the account are returned.
 *
 *The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *identity.
 *
 *Emits `IdentityCleared` if successful.
 */
"clear_identity": undefined, 
/**
 *Request a judgement from a registrar.
 *
 *Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 *given.
 *
 *The dispatch origin for this call must be _Signed_ and the sender must have a
 *registered identity.
 *
 *- `reg_index`: The index of the registrar whose judgement is requested.
 *- `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 *
 *```nocompile
 *Registrars::<T>::get().get(reg_index).unwrap().fee
 *```
 *
 *Emits `JudgementRequested` if successful.
 */
"request_judgement": Anonymize<I9l2s4klu0831o>, 
/**
 *Cancel a previous request.
 *
 *Payment: A previously reserved deposit is returned on success.
 *
 *The dispatch origin for this call must be _Signed_ and the sender must have a
 *registered identity.
 *
 *- `reg_index`: The index of the registrar whose judgement is no longer requested.
 *
 *Emits `JudgementUnrequested` if successful.
 */
"cancel_request": Anonymize<I2ctrt5nqb8o7c>, 
/**
 *Set the fee required for a judgement to be requested from a registrar.
 *
 *The dispatch origin for this call must be _Signed_ and the sender must be the account
 *of the registrar whose index is `index`.
 *
 *- `index`: the index of the registrar whose fee is to be set.
 *- `fee`: the new fee.
 */
"set_fee": Anonymize<I711qahikocb1c>, 
/**
 *Change the account associated with a registrar.
 *
 *The dispatch origin for this call must be _Signed_ and the sender must be the account
 *of the registrar whose index is `index`.
 *
 *- `index`: the index of the registrar whose fee is to be set.
 *- `new`: the new account ID.
 */
"set_account_id": Anonymize<I1u3ac7lafvv5b>, 
/**
 *Set the field information for a registrar.
 *
 *The dispatch origin for this call must be _Signed_ and the sender must be the account
 *of the registrar whose index is `index`.
 *
 *- `index`: the index of the registrar whose fee is to be set.
 *- `fields`: the fields that the registrar concerns themselves with.
 */
"set_fields": Anonymize<Id6gojh30v9ib2>, 
/**
 *Provide a judgement for an account's identity.
 *
 *The dispatch origin for this call must be _Signed_ and the sender must be the account
 *of the registrar whose index is `reg_index`.
 *
 *- `reg_index`: the index of the registrar whose judgement is being made.
 *- `target`: the account whose identity the judgement is upon. This must be an account
 *  with a registered identity.
 *- `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 *- `identity`: The hash of the [`IdentityInformationProvider`] for that the judgement is
 *  provided.
 *
 *Note: Judgements do not apply to a username.
 *
 *Emits `JudgementGiven` if successful.
 */
"provide_judgement": Anonymize<I9h4cqmadpj7l0>, 
/**
 *Remove an account's identity and sub-account information and slash the deposits.
 *
 *Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 *`Slash`. Verification request deposits are not returned; they should be cancelled
 *manually using `cancel_request`.
 *
 *The dispatch origin for this call must match `T::ForceOrigin`.
 *
 *- `target`: the account whose identity the judgement is upon. This must be an account
 *  with a registered identity.
 *
 *Emits `IdentityKilled` if successful.
 */
"kill_identity": Anonymize<If31vrl50nund3>, 
/**
 *Add the given account to the sender's subs.
 *
 *Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *to the sender.
 *
 *The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *sub identity of `sub`.
 */
"add_sub": Anonymize<I29bkdd7n16li1>, 
/**
 *Alter the associated name of the given sub-account.
 *
 *The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *sub identity of `sub`.
 */
"rename_sub": Anonymize<I29bkdd7n16li1>, 
/**
 *Remove the given account from the sender's subs.
 *
 *Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *to the sender.
 *
 *The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *sub identity of `sub`.
 */
"remove_sub": Anonymize<I9jb9hqm18runn>, 
/**
 *Remove the sender as a sub-account.
 *
 *Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *to the sender (*not* the original depositor).
 *
 *The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *super-identity.
 *
 *NOTE: This should not normally be used, but is provided in the case that the non-
 *controller of an account is maliciously registered as a sub-account.
 */
"quit_sub": undefined, 
/**
 *Add an `AccountId` with permission to grant usernames with a given `suffix` appended.
 *
 *The authority can grant up to `allocation` usernames. To top up the allocation or
 *change the account used to grant usernames, this call can be used with the updated
 *parameters to overwrite the existing configuration.
 */
"add_username_authority": Anonymize<I85htvo8b885h>, 
/**
 *Remove `authority` from the username authorities.
 */
"remove_username_authority": Anonymize<I13n219aci2a5j>, 
/**
 *Set the username for `who`. Must be called by a username authority.
 *
 *If `use_allocation` is set, the authority must have a username allocation available to
 *spend. Otherwise, the authority will need to put up a deposit for registering the
 *username.
 *
 *Users can either pre-sign their usernames or
 *accept them later.
 *
 *Usernames must:
 *  - Only contain lowercase ASCII characters or digits.
 *  - When combined with the suffix of the issuing authority be _less than_ the
 *    `MaxUsernameLength`.
 */
"set_username_for": Anonymize<Ialt2aiqe4ps5k>, 
/**
 *Accept a given username that an `authority` granted. The call must include the full
 *username, as in `username.suffix`.
 */
"accept_username": Anonymize<Ie5l999tf7t2te>, 
/**
 *Remove an expired username approval. The username was approved by an authority but never
 *accepted by the user and must now be beyond its expiration. The call must include the
 *full username, as in `username.suffix`.
 */
"remove_expired_approval": Anonymize<Ie5l999tf7t2te>, 
/**
 *Set a given username as the primary. The username should include the suffix.
 */
"set_primary_username": Anonymize<Ie5l999tf7t2te>, 
/**
 *Start the process of removing a username by placing it in the unbinding usernames map.
 *Once the grace period has passed, the username can be deleted by calling
 *[remove_username](crate::Call::remove_username).
 */
"unbind_username": Anonymize<Ie5l999tf7t2te>, 
/**
 *Permanently delete a username which has been unbinding for longer than the grace period.
 *Caller is refunded the fee if the username expired and the removal was successful.
 */
"remove_username": Anonymize<Ie5l999tf7t2te>, 
/**
 *Call with [ForceOrigin](crate::Config::ForceOrigin) privileges which deletes a username
 *and slashes any deposit associated with it.
 */
"kill_username": Anonymize<Ie5l999tf7t2te>}>;

export type I73kffnn32g4c7 = {"account": Anonymize<I4su1fqci7afjt>};

export type I2kds5jji7slh8 = {"info": Anonymize<I1o57snqt6f4v5>};

export type I1o57snqt6f4v5 = {"additional": Array<FixedSizeArray<2, IdentityData>>, "display": IdentityData, "legal": IdentityData, "web": IdentityData, "riot": IdentityData, "email": IdentityData, "pgp_fingerprint"?: Anonymize<If7b8240vgt2q5>, "image": IdentityData, "twitter": IdentityData};

export type IdentityData = Enum<{"None": undefined, "Raw0": undefined, "Raw1": number, "Raw2": FixedSizeBinary<2>, "Raw3": FixedSizeBinary<3>, "Raw4": FixedSizeBinary<4>, "Raw5": FixedSizeBinary<5>, "Raw6": FixedSizeBinary<6>, "Raw7": FixedSizeBinary<7>, "Raw8": FixedSizeBinary<8>, "Raw9": FixedSizeBinary<9>, "Raw10": FixedSizeBinary<10>, "Raw11": FixedSizeBinary<11>, "Raw12": FixedSizeBinary<12>, "Raw13": FixedSizeBinary<13>, "Raw14": FixedSizeBinary<14>, "Raw15": FixedSizeBinary<15>, "Raw16": FixedSizeBinary<16>, "Raw17": FixedSizeBinary<17>, "Raw18": FixedSizeBinary<18>, "Raw19": FixedSizeBinary<19>, "Raw20": FixedSizeBinary<20>, "Raw21": FixedSizeBinary<21>, "Raw22": FixedSizeBinary<22>, "Raw23": FixedSizeBinary<23>, "Raw24": FixedSizeBinary<24>, "Raw25": FixedSizeBinary<25>, "Raw26": FixedSizeBinary<26>, "Raw27": FixedSizeBinary<27>, "Raw28": FixedSizeBinary<28>, "Raw29": FixedSizeBinary<29>, "Raw30": FixedSizeBinary<30>, "Raw31": FixedSizeBinary<31>, "Raw32": FixedSizeBinary<32>, "BlakeTwo256": FixedSizeBinary<32>, "Sha256": FixedSizeBinary<32>, "Keccak256": FixedSizeBinary<32>, "ShaThree256": FixedSizeBinary<32>}>;
export const IdentityData = _Enum as unknown as GetEnum<IdentityData>;

export type Ia9mkdf6l44shb = {"subs": Array<Anonymize<I910puuahutflf>>};

export type I910puuahutflf = [SS58String, IdentityData];

export type I9l2s4klu0831o = {"reg_index": number, "max_fee": bigint};

export type I2ctrt5nqb8o7c = {"reg_index": number};

export type I711qahikocb1c = {"index": number, "fee": bigint};

export type Id6gojh30v9ib2 = {"index": number, "fields": bigint};

export type I9h4cqmadpj7l0 = {"reg_index": number, "target": Anonymize<I4su1fqci7afjt>, "judgement": IdentityJudgement, "identity": FixedSizeBinary<32>};

export type IdentityJudgement = Enum<{"Unknown": undefined, "FeePaid": bigint, "Reasonable": undefined, "KnownGood": undefined, "OutOfDate": undefined, "LowQuality": undefined, "Erroneous": undefined}>;
export const IdentityJudgement = _Enum as unknown as GetEnum<IdentityJudgement>;

export type I29bkdd7n16li1 = {"sub": Anonymize<I4su1fqci7afjt>, "data": IdentityData};

export type I9jb9hqm18runn = {"sub": Anonymize<I4su1fqci7afjt>};

export type I85htvo8b885h = {"authority": Anonymize<I4su1fqci7afjt>, "suffix": Binary, "allocation": number};

export type I13n219aci2a5j = {"suffix": Binary, "authority": Anonymize<I4su1fqci7afjt>};

export type Ialt2aiqe4ps5k = {"who": Anonymize<I4su1fqci7afjt>, "username": Binary, "signature"?: (MultiSignature) | undefined, "use_allocation": boolean};

export type Ic2r1fidlpb5ct = AnonymousEnum<{
/**
 *A user outside of the society can make a bid for entry.
 *
 *Payment: The group's Candidate Deposit will be reserved for making a bid. It is returned
 *when the bid becomes a member, or if the bid calls `unbid`.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Parameters:
 *- `value`: A one time payment the bid would like to receive when joining the society.
 */
"bid": Anonymize<Ie5v6njpckr05b>, 
/**
 *A bidder can remove their bid for entry into society.
 *By doing so, they will have their candidate deposit returned or
 *they will unvouch their voucher.
 *
 *Payment: The bid deposit is unreserved if the user made a bid.
 *
 *The dispatch origin for this call must be _Signed_ and a bidder.
 */
"unbid": undefined, 
/**
 *As a member, vouch for someone to join society by placing a bid on their behalf.
 *
 *There is no deposit required to vouch for a new bid, but a member can only vouch for
 *one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by
 *the suspension judgement origin, the member will be banned from vouching again.
 *
 *As a vouching member, you can claim a tip if the candidate is accepted. This tip will
 *be paid as a portion of the reward the member will receive for joining the society.
 *
 *The dispatch origin for this call must be _Signed_ and a member.
 *
 *Parameters:
 *- `who`: The user who you would like to vouch for.
 *- `value`: The total reward to be paid between you and the candidate if they become
 *a member in the society.
 *- `tip`: Your cut of the total `value` payout when the candidate is inducted into
 *the society. Tips larger than `value` will be saturated upon payout.
 */
"vouch": Anonymize<I5p7gpsoqfldm0>, 
/**
 *As a vouching member, unvouch a bid. This only works while vouched user is
 *only a bidder (and not a candidate).
 *
 *The dispatch origin for this call must be _Signed_ and a vouching member.
 *
 *Parameters:
 *- `pos`: Position in the `Bids` vector of the bid who should be unvouched.
 */
"unvouch": undefined, 
/**
 *As a member, vote on a candidate.
 *
 *The dispatch origin for this call must be _Signed_ and a member.
 *
 *Parameters:
 *- `candidate`: The candidate that the member would like to bid on.
 *- `approve`: A boolean which says if the candidate should be approved (`true`) or
 *  rejected (`false`).
 */
"vote": Anonymize<Ibqgeehfc5i3vk>, 
/**
 *As a member, vote on the defender.
 *
 *The dispatch origin for this call must be _Signed_ and a member.
 *
 *Parameters:
 *- `approve`: A boolean which says if the candidate should be
 *approved (`true`) or rejected (`false`).
 */
"defender_vote": Anonymize<I26anifrfnljoi>, 
/**
 *Transfer the first matured payout for the sender and remove it from the records.
 *
 *NOTE: This extrinsic needs to be called multiple times to claim multiple matured
 *payouts.
 *
 *Payment: The member will receive a payment equal to their first matured
 *payout to their free balance.
 *
 *The dispatch origin for this call must be _Signed_ and a member with
 *payouts remaining.
 */
"payout": undefined, 
/**
 *Repay the payment previously given to the member with the signed origin, remove any
 *pending payments, and elevate them from rank 0 to rank 1.
 */
"waive_repay": Anonymize<I3qt1hgg4djhgb>, 
/**
 *Found the society.
 *
 *This is done as a discrete action in order to allow for the
 *pallet to be included into a running chain and can only be done once.
 *
 *The dispatch origin for this call must be from the _FounderSetOrigin_.
 *
 *Parameters:
 *- `founder` - The first member and head of the newly founded society.
 *- `max_members` - The initial max number of members for the society.
 *- `max_intake` - The maximum number of candidates per intake period.
 *- `max_strikes`: The maximum number of strikes a member may get before they become
 *  suspended and may only be reinstated by the founder.
 *- `candidate_deposit`: The deposit required to make a bid for membership of the group.
 *- `rules` - The rules of this society concerning membership.
 *
 *Complexity: O(1)
 */
"found_society": Anonymize<Iesomjc1tn3lgl>, 
/**
 *Dissolve the society and remove all members.
 *
 *The dispatch origin for this call must be Signed, and the signing account must be both
 *the `Founder` and the `Head`. This implies that it may only be done when there is one
 *member.
 */
"dissolve": undefined, 
/**
 *Allow suspension judgement origin to make judgement on a suspended member.
 *
 *If a suspended member is forgiven, we simply add them back as a member, not affecting
 *any of the existing storage items for that member.
 *
 *If a suspended member is rejected, remove all associated storage items, including
 *their payouts, and remove any vouched bids they currently have.
 *
 *The dispatch origin for this call must be Signed from the Founder.
 *
 *Parameters:
 *- `who` - The suspended member to be judged.
 *- `forgive` - A boolean representing whether the suspension judgement origin forgives
 *  (`true`) or rejects (`false`) a suspended member.
 */
"judge_suspended_member": Anonymize<I2if7vn5sco654>, 
/**
 *Change the maximum number of members in society and the maximum number of new candidates
 *in a single intake period.
 *
 *The dispatch origin for this call must be Signed by the Founder.
 *
 *Parameters:
 *- `max_members` - The maximum number of members for the society. This must be no less
 *  than the current number of members.
 *- `max_intake` - The maximum number of candidates per intake period.
 *- `max_strikes`: The maximum number of strikes a member may get before they become
 *  suspended and may only be reinstated by the founder.
 *- `candidate_deposit`: The deposit required to make a bid for membership of the group.
 */
"set_parameters": Anonymize<I9hkvi4k3kh916>, 
/**
 *Punish the skeptic with a strike if they did not vote on a candidate. Callable by the
 *candidate.
 */
"punish_skeptic": undefined, 
/**
 *Transform an approved candidate into a member. Callable only by the
 *the candidate, and only after the period for voting has ended.
 */
"claim_membership": undefined, 
/**
 *Transform an approved candidate into a member. Callable only by the Signed origin of the
 *Founder, only after the period for voting has ended and only when the candidate is not
 *clearly rejected.
 */
"bestow_membership": Anonymize<I4b66js88p45m8>, 
/**
 *Remove the candidate's application from the society. Callable only by the Signed origin
 *of the Founder, only after the period for voting has ended, and only when they do not
 *have a clear approval.
 *
 *Any bid deposit is lost and voucher is banned.
 */
"kick_candidate": Anonymize<I4b66js88p45m8>, 
/**
 *Remove the candidate's application from the society. Callable only by the candidate.
 *
 *Any bid deposit is lost and voucher is banned.
 */
"resign_candidacy": undefined, 
/**
 *Remove a `candidate`'s failed application from the society. Callable by any
 *signed origin but only at the end of the subsequent round and only for
 *a candidate with more rejections than approvals.
 *
 *The bid deposit is lost and the voucher is banned.
 */
"drop_candidate": Anonymize<I4b66js88p45m8>, 
/**
 *Remove up to `max` stale votes for the given `candidate`.
 *
 *May be called by any Signed origin, but only after the candidate's candidacy is ended.
 */
"cleanup_candidacy": Anonymize<Ieh40op1lafir9>, 
/**
 *Remove up to `max` stale votes for the defender in the given `challenge_round`.
 *
 *May be called by any Signed origin, but only after the challenge round is ended.
 */
"cleanup_challenge": Anonymize<Icjp7f9u9fno72>}>;

export type I5p7gpsoqfldm0 = {"who": Anonymize<I4su1fqci7afjt>, "value": bigint, "tip": bigint};

export type Ibqgeehfc5i3vk = {"candidate": Anonymize<I4su1fqci7afjt>, "approve": boolean};

export type I26anifrfnljoi = {"approve": boolean};

export type Iesomjc1tn3lgl = {"founder": Anonymize<I4su1fqci7afjt>, "max_members": number, "max_intake": number, "max_strikes": number, "candidate_deposit": bigint, "rules": Binary};

export type I2if7vn5sco654 = {"who": Anonymize<I4su1fqci7afjt>, "forgive": boolean};

export type Ieh40op1lafir9 = {"candidate": SS58String, "max": number};

export type Icjp7f9u9fno72 = {"challenge_round": number, "max": number};

export type Ibnflpalcqmtbl = AnonymousEnum<{
/**
 *Send a call through a recovered account.
 *
 *The dispatch origin for this call must be _Signed_ and registered to
 *be able to make calls on behalf of the recovered account.
 *
 *Parameters:
 *- `account`: The recovered account you want to make a call on-behalf-of.
 *- `call`: The call you want to make with the recovered account.
 */
"as_recovered": Anonymize<Ijqp7h39hd5k1>, 
/**
 *Allow ROOT to bypass the recovery process and set a rescuer account
 *for a lost account directly.
 *
 *The dispatch origin for this call must be _ROOT_.
 *
 *Parameters:
 *- `lost`: The "lost account" to be recovered.
 *- `rescuer`: The "rescuer account" which can call as the lost account.
 */
"set_recovered": Anonymize<I3ugaetkht0gva>, 
/**
 *Create a recovery configuration for your account. This makes your account recoverable.
 *
 *Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
 *will be reserved for storing the recovery configuration. This deposit is returned
 *in full when the user calls `remove_recovery`.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Parameters:
 *- `friends`: A list of friends you trust to vouch for recovery attempts. Should be
 *  ordered and contain no duplicate values.
 *- `threshold`: The number of friends that must vouch for a recovery attempt before the
 *  account can be recovered. Should be less than or equal to the length of the list of
 *  friends.
 *- `delay_period`: The number of blocks after a recovery attempt is initialized that
 *  needs to pass before the account can be recovered.
 */
"create_recovery": Anonymize<I6s6ihmfj6j5qq>, 
/**
 *Initiate the process for recovering a recoverable account.
 *
 *Payment: `RecoveryDeposit` balance will be reserved for initiating the
 *recovery process. This deposit will always be repatriated to the account
 *trying to be recovered. See `close_recovery`.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Parameters:
 *- `account`: The lost account that you want to recover. This account needs to be
 *  recoverable (i.e. have a recovery configuration).
 */
"initiate_recovery": Anonymize<I73kffnn32g4c7>, 
/**
 *Allow a "friend" of a recoverable account to vouch for an active recovery
 *process for that account.
 *
 *The dispatch origin for this call must be _Signed_ and must be a "friend"
 *for the recoverable account.
 *
 *Parameters:
 *- `lost`: The lost account that you want to recover.
 *- `rescuer`: The account trying to rescue the lost account that you want to vouch for.
 *
 *The combination of these two parameters must point to an active recovery
 *process.
 */
"vouch_recovery": Anonymize<I3ugaetkht0gva>, 
/**
 *Allow a successful rescuer to claim their recovered account.
 *
 *The dispatch origin for this call must be _Signed_ and must be a "rescuer"
 *who has successfully completed the account recovery process: collected
 *`threshold` or more vouches, waited `delay_period` blocks since initiation.
 *
 *Parameters:
 *- `account`: The lost account that you want to claim has been successfully recovered by
 *  you.
 */
"claim_recovery": Anonymize<I73kffnn32g4c7>, 
/**
 *As the controller of a recoverable account, close an active recovery
 *process for your account.
 *
 *Payment: By calling this function, the recoverable account will receive
 *the recovery deposit `RecoveryDeposit` placed by the rescuer.
 *
 *The dispatch origin for this call must be _Signed_ and must be a
 *recoverable account with an active recovery process for it.
 *
 *Parameters:
 *- `rescuer`: The account trying to rescue this recoverable account.
 */
"close_recovery": Anonymize<I651d14o8ris56>, 
/**
 *Remove the recovery process for your account. Recovered accounts are still accessible.
 *
 *NOTE: The user must make sure to call `close_recovery` on all active
 *recovery attempts before calling this function else it will fail.
 *
 *Payment: By calling this function the recoverable account will unreserve
 *their recovery configuration deposit.
 *(`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
 *
 *The dispatch origin for this call must be _Signed_ and must be a
 *recoverable account (i.e. has a recovery configuration).
 */
"remove_recovery": undefined, 
/**
 *Cancel the ability to use `as_recovered` for `account`.
 *
 *The dispatch origin for this call must be _Signed_ and registered to
 *be able to make calls on behalf of the recovered account.
 *
 *Parameters:
 *- `account`: The recovered account you are able to call on-behalf-of.
 */
"cancel_recovered": Anonymize<I73kffnn32g4c7>}>;

export type Ijqp7h39hd5k1 = {"account": Anonymize<I4su1fqci7afjt>, "call": TxCallData};

export type I3ugaetkht0gva = {"lost": Anonymize<I4su1fqci7afjt>, "rescuer": Anonymize<I4su1fqci7afjt>};

export type I6s6ihmfj6j5qq = {"friends": Anonymize<Ia2lhg7l2hilo3>, "threshold": number, "delay_period": number};

export type I651d14o8ris56 = {"rescuer": Anonymize<I4su1fqci7afjt>};

export type Id192p427rq02q = AnonymousEnum<{
/**
 *Unlock any vested funds of the sender account.
 *
 *The dispatch origin for this call must be _Signed_ and the sender must have funds still
 *locked under this pallet.
 *
 *Emits either `VestingCompleted` or `VestingUpdated`.
 *
 *## Complexity
 *- `O(1)`.
 */
"vest": undefined, 
/**
 *Unlock any vested funds of a `target` account.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *- `target`: The account whose vested funds should be unlocked. Must have funds still
 *locked under this pallet.
 *
 *Emits either `VestingCompleted` or `VestingUpdated`.
 *
 *## Complexity
 *- `O(1)`.
 */
"vest_other": Anonymize<If31vrl50nund3>, 
/**
 *Create a vested transfer.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *- `target`: The account receiving the vested funds.
 *- `schedule`: The vesting schedule attached to the transfer.
 *
 *Emits `VestingCreated`.
 *
 *NOTE: This will unlock all schedules through the current block.
 *
 *## Complexity
 *- `O(1)`.
 */
"vested_transfer": Anonymize<I3usr0jpt8ovnk>, 
/**
 *Force a vested transfer.
 *
 *The dispatch origin for this call must be _Root_.
 *
 *- `source`: The account whose funds should be transferred.
 *- `target`: The account that should be transferred the vested funds.
 *- `schedule`: The vesting schedule attached to the transfer.
 *
 *Emits `VestingCreated`.
 *
 *NOTE: This will unlock all schedules through the current block.
 *
 *## Complexity
 *- `O(1)`.
 */
"force_vested_transfer": Anonymize<I5a5fh6anhjgu7>, 
/**
 *Merge two vesting schedules together, creating a new vesting schedule that unlocks over
 *the highest possible start and end blocks. If both schedules have already started the
 *current block will be used as the schedule start; with the caveat that if one schedule
 *is finished by the current block, the other will be treated as the new merged schedule,
 *unmodified.
 *
 *NOTE: If `schedule1_index == schedule2_index` this is a no-op.
 *NOTE: This will unlock all schedules through the current block prior to merging.
 *NOTE: If both schedules have ended by the current block, no new schedule will be created
 *and both will be removed.
 *
 *Merged schedule attributes:
 *- `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
 *  current_block)`.
 *- `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
 *- `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *- `schedule1_index`: index of the first schedule to merge.
 *- `schedule2_index`: index of the second schedule to merge.
 */
"merge_schedules": Anonymize<Ict9ivhr2c5hv0>, 
/**
 *Force remove a vesting schedule
 *
 *The dispatch origin for this call must be _Root_.
 *
 *- `target`: An account that has a vesting schedule
 *- `schedule_index`: The vesting schedule index that should be removed
 */
"force_remove_vesting_schedule": Anonymize<Ia5huiefjr1uhk>}>;

export type I3usr0jpt8ovnk = {"target": Anonymize<I4su1fqci7afjt>, "schedule": Anonymize<I4aro1m78pdrtt>};

export type I4aro1m78pdrtt = {"locked": bigint, "per_block": bigint, "starting_block": number};

export type I5a5fh6anhjgu7 = {"source": Anonymize<I4su1fqci7afjt>, "target": Anonymize<I4su1fqci7afjt>, "schedule": Anonymize<I4aro1m78pdrtt>};

export type Ict9ivhr2c5hv0 = {"schedule1_index": number, "schedule2_index": number};

export type Ia5huiefjr1uhk = {"target": Anonymize<I4su1fqci7afjt>, "schedule_index": number};

export type Idhsrhsgok84l3 = AnonymousEnum<{
/**
 *Anonymously schedule a task.
 */
"schedule": Anonymize<I6v8hvs0mvecjg>, 
/**
 *Cancel an anonymously scheduled task.
 */
"cancel": Anonymize<I5n4sebgkfr760>, 
/**
 *Schedule a named task.
 */
"schedule_named": Anonymize<I42j62ltlu8nh4>, 
/**
 *Cancel a named scheduled task.
 */
"cancel_named": Anonymize<Ifs1i5fk9cqvr6>, 
/**
 *Anonymously schedule a task after a delay.
 */
"schedule_after": Anonymize<I2532kgh9oemo7>, 
/**
 *Schedule a named task after a delay.
 */
"schedule_named_after": Anonymize<Ib4rba5te8j2cj>, 
/**
 *Set a retry configuration for a task so that, in case its scheduled run fails, it will
 *be retried after `period` blocks, for a total amount of `retries` retries or until it
 *succeeds.
 *
 *Tasks which need to be scheduled for a retry are still subject to weight metering and
 *agenda space, same as a regular task. If a periodic task fails, it will be scheduled
 *normally while the task is retrying.
 *
 *Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
 *clones of the original task. Their retry configuration will be derived from the
 *original task's configuration, but will have a lower value for `remaining` than the
 *original `total_retries`.
 */
"set_retry": Anonymize<Ieg3fd8p4pkt10>, 
/**
 *Set a retry configuration for a named task so that, in case its scheduled run fails, it
 *will be retried after `period` blocks, for a total amount of `retries` retries or until
 *it succeeds.
 *
 *Tasks which need to be scheduled for a retry are still subject to weight metering and
 *agenda space, same as a regular task. If a periodic task fails, it will be scheduled
 *normally while the task is retrying.
 *
 *Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
 *clones of the original task. Their retry configuration will be derived from the
 *original task's configuration, but will have a lower value for `remaining` than the
 *original `total_retries`.
 */
"set_retry_named": Anonymize<I8kg5ll427kfqq>, 
/**
 *Removes the retry configuration of a task.
 */
"cancel_retry": Anonymize<I467333262q1l9>, 
/**
 *Cancel the retry configuration of a named task.
 */
"cancel_retry_named": Anonymize<Ifs1i5fk9cqvr6>}>;

export type I6v8hvs0mvecjg = {"when": number, "maybe_periodic"?: Anonymize<Iep7au1720bm0e>, "priority": number, "call": TxCallData};

export type Iep7au1720bm0e = (Anonymize<I9jd27rnpm8ttv>) | undefined;

export type I42j62ltlu8nh4 = {"id": FixedSizeBinary<32>, "when": number, "maybe_periodic"?: Anonymize<Iep7au1720bm0e>, "priority": number, "call": TxCallData};

export type Ifs1i5fk9cqvr6 = {"id": FixedSizeBinary<32>};

export type I2532kgh9oemo7 = {"after": number, "maybe_periodic"?: Anonymize<Iep7au1720bm0e>, "priority": number, "call": TxCallData};

export type Ib4rba5te8j2cj = {"id": FixedSizeBinary<32>, "after": number, "maybe_periodic"?: Anonymize<Iep7au1720bm0e>, "priority": number, "call": TxCallData};

export type Ieg3fd8p4pkt10 = {"task": Anonymize<I9jd27rnpm8ttv>, "retries": number, "period": number};

export type I8kg5ll427kfqq = {"id": FixedSizeBinary<32>, "retries": number, "period": number};

export type I467333262q1l9 = {"task": Anonymize<I9jd27rnpm8ttv>};

export type Ibcg2hk3cepaj1 = AnonymousEnum<{
/**
 *Initialize the pallet. Should be called once, if no genesis state was provided.
 *
 *`current_count` is the current number of elements in `TrashData`. This can be set to
 *`None` when the pallet is first initialized.
 *
 *Only callable by Root or `AdminOrigin`. A good default for `new_count` is `5_000`.
 */
"initialize_pallet": Anonymize<Ievaobhaacual0>, 
/**
 *Set how much of the remaining `ref_time` weight should be consumed by `on_idle`.
 *
 *Only callable by Root or `AdminOrigin`.
 */
"set_compute": Anonymize<Iaj8k89bv67r1v>, 
/**
 *Set how much of the remaining `proof_size` weight should be consumed by `on_idle`.
 *
 *`1.0` means that all remaining `proof_size` will be consumed. The PoV benchmarking
 *results that are used here are likely an over-estimation. 100% intended consumption will
 *therefore translate to less than 100% actual consumption.
 *
 *Only callable by Root or `AdminOrigin`.
 */
"set_storage": Anonymize<Idd027nofevf40>, 
/**
 *Increase the block size by including the specified garbage bytes.
 */
"bloat": Anonymize<Ie4ave3umf1jrq>, 
/**
 *Set how much of the block length should be filled with trash data on each block.
 *
 *`1.0` means that all block should be filled. If set to `1.0`, storage proof size will
 * be close to zero.
 *
 *Only callable by Root or `AdminOrigin`.
 */
"set_block_length": Anonymize<I4lv0lf2s7ue5b>}>;

export type Ievaobhaacual0 = {"new_count": number, "witness_count"?: Anonymize<I4arjljr6dpflb>};

export type Ie4ave3umf1jrq = {"garbage": Array<FixedSizeBinary<1024>>};

export type If81ks88t5mpk5 = AnonymousEnum<{
/**
 *Register a preimage on-chain.
 *
 *If the preimage was previously requested, no fees or deposits are taken for providing
 *the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
 */
"note_preimage": Anonymize<I82nfqfkd48n10>, 
/**
 *Clear an unrequested preimage from the runtime storage.
 *
 *If `len` is provided, then it will be a much cheaper operation.
 *
 *- `hash`: The hash of the preimage to be removed from the store.
 *- `len`: The length of the preimage of `hash`.
 */
"unnote_preimage": Anonymize<I1jm8m1rh9e20v>, 
/**
 *Request a preimage be uploaded to the chain without paying any fees or deposits.
 *
 *If the preimage requests has already been provided on-chain, we unreserve any deposit
 *a user may have paid, and take the control of the preimage out of their hands.
 */
"request_preimage": Anonymize<I1jm8m1rh9e20v>, 
/**
 *Clear a previously made request for a preimage.
 *
 *NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
 */
"unrequest_preimage": Anonymize<I1jm8m1rh9e20v>, 
/**
 *Ensure that the bulk of pre-images is upgraded.
 *
 *The caller pays no fee if at least 90% of pre-images were successfully updated.
 */
"ensure_updated": Anonymize<I3o5j3bli1pd8e>}>;

export type I82nfqfkd48n10 = {"bytes": Binary};

export type I3o5j3bli1pd8e = {"hashes": Anonymize<Ic5m5lp1oioo8r>};

export type I861v78m751mau = AnonymousEnum<{
/**
 *Dispatch the given `call` from an account that the sender is authorised for through
 *`add_proxy`.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Parameters:
 *- `real`: The account that the proxy will make a call on behalf of.
 *- `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 *- `call`: The call to be made by the `real` account.
 */
"proxy": Anonymize<I1s63ebmnr90oa>, 
/**
 *Register a proxy account for the sender that is able to make calls on its behalf.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Parameters:
 *- `proxy`: The account that the `caller` would like to make a proxy.
 *- `proxy_type`: The permissions allowed for this proxy account.
 *- `delay`: The announcement period required of the initial proxy. Will generally be
 *zero.
 */
"add_proxy": Anonymize<I115185tv1dn0m>, 
/**
 *Unregister a proxy account for the sender.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Parameters:
 *- `proxy`: The account that the `caller` would like to remove as a proxy.
 *- `proxy_type`: The permissions currently enabled for the removed proxy account.
 */
"remove_proxy": Anonymize<I115185tv1dn0m>, 
/**
 *Unregister all proxy accounts for the sender.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *WARNING: This may be called on accounts created by `pure`, however if done, then
 *the unreserved fees will be inaccessible. **All access to this account will be lost.**
 */
"remove_proxies": undefined, 
/**
 *Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 *initialize it with a proxy of `proxy_type` for `origin` sender.
 *
 *Requires a `Signed` origin.
 *
 *- `proxy_type`: The type of the proxy that the sender will be registered as over the
 *new account. This will almost always be the most permissive `ProxyType` possible to
 *allow for maximum flexibility.
 *- `index`: A disambiguation index, in case this is called multiple times in the same
 *transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
 *want to use `0`.
 *- `delay`: The announcement period required of the initial proxy. Will generally be
 *zero.
 *
 *Fails with `Duplicate` if this has already been called in this transaction, from the
 *same sender, with the same parameters.
 *
 *Fails if there are insufficient funds to pay for deposit.
 */
"create_pure": Anonymize<I3uo1p0na0591a>, 
/**
 *Removes a previously spawned pure proxy.
 *
 *WARNING: **All access to this account will be lost.** Any funds held in it will be
 *inaccessible.
 *
 *Requires a `Signed` origin, and the sender account must have been created by a call to
 *`pure` with corresponding parameters.
 *
 *- `spawner`: The account that originally called `pure` to create this account.
 *- `index`: The disambiguation index originally passed to `pure`. Probably `0`.
 *- `proxy_type`: The proxy type originally passed to `pure`.
 *- `height`: The height of the chain when the call to `pure` was processed.
 *- `ext_index`: The extrinsic index in which the call to `pure` was processed.
 *
 *Fails with `NoPermission` in case the caller is not a previously created pure
 *account whose `pure` call has corresponding parameters.
 */
"kill_pure": Anonymize<Ifm2adqhk6cqgf>, 
/**
 *Publish the hash of a proxy-call that will be made in the future.
 *
 *This must be called some number of blocks before the corresponding `proxy` is attempted
 *if the delay associated with the proxy relationship is greater than zero.
 *
 *No more than `MaxPending` announcements may be made at any one time.
 *
 *This will take a deposit of `AnnouncementDepositFactor` as well as
 *`AnnouncementDepositBase` if there are no other pending announcements.
 *
 *The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 *
 *Parameters:
 *- `real`: The account that the proxy will make a call on behalf of.
 *- `call_hash`: The hash of the call to be made by the `real` account.
 */
"announce": Anonymize<Idj9faf6hgsdur>, 
/**
 *Remove a given announcement.
 *
 *May be called by a proxy account to remove a call they previously announced and return
 *the deposit.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Parameters:
 *- `real`: The account that the proxy will make a call on behalf of.
 *- `call_hash`: The hash of the call to be made by the `real` account.
 */
"remove_announcement": Anonymize<Idj9faf6hgsdur>, 
/**
 *Remove the given announcement of a delegate.
 *
 *May be called by a target (proxied) account to remove a call that one of their delegates
 *(`delegate`) has announced they want to execute. The deposit is returned.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Parameters:
 *- `delegate`: The account that previously announced the call.
 *- `call_hash`: The hash of the call to be made.
 */
"reject_announcement": Anonymize<I8mj1nm903hpts>, 
/**
 *Dispatch the given `call` from an account that the sender is authorized for through
 *`add_proxy`.
 *
 *Removes any corresponding announcement(s).
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Parameters:
 *- `real`: The account that the proxy will make a call on behalf of.
 *- `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 *- `call`: The call to be made by the `real` account.
 */
"proxy_announced": Anonymize<Iecmh0m0ue1emg>, 
/**
 *Poke / Adjust deposits made for proxies and announcements based on current values.
 *This can be used by accounts to possibly lower their locked amount.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *The transaction fee is waived if the deposit amount has changed.
 *
 *Emits `DepositPoked` if successful.
 */
"poke_deposit": undefined}>;

export type I1s63ebmnr90oa = {"real": Anonymize<I4su1fqci7afjt>, "force_proxy_type"?: Anonymize<I9l9m7ojsal0uo>, "call": TxCallData};

export type I9l9m7ojsal0uo = (Anonymize<I1bpip5bh5877p>) | undefined;

export type I115185tv1dn0m = {"delegate": Anonymize<I4su1fqci7afjt>, "proxy_type": Anonymize<I1bpip5bh5877p>, "delay": number};

export type I3uo1p0na0591a = {"proxy_type": Anonymize<I1bpip5bh5877p>, "delay": number, "index": number};

export type Ifm2adqhk6cqgf = {"spawner": Anonymize<I4su1fqci7afjt>, "proxy_type": Anonymize<I1bpip5bh5877p>, "index": number, "height": number, "ext_index": number};

export type Idj9faf6hgsdur = {"real": Anonymize<I4su1fqci7afjt>, "call_hash": FixedSizeBinary<32>};

export type I8mj1nm903hpts = {"delegate": Anonymize<I4su1fqci7afjt>, "call_hash": FixedSizeBinary<32>};

export type Iecmh0m0ue1emg = {"delegate": Anonymize<I4su1fqci7afjt>, "real": Anonymize<I4su1fqci7afjt>, "force_proxy_type"?: Anonymize<I9l9m7ojsal0uo>, "call": TxCallData};

export type I2e59mjhf6d49q = AnonymousEnum<{
/**
 *Immediately dispatch a multi-signature call using a single approval from the caller.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *- `other_signatories`: The accounts (other than the sender) who are part of the
 *multi-signature, but do not participate in the approval process.
 *- `call`: The call to be executed.
 *
 *Result is equivalent to the dispatched result.
 *
 *## Complexity
 *O(Z + C) where Z is the length of the call and C its execution weight.
 */
"as_multi_threshold_1": Anonymize<I83jtfah7iifln>, 
/**
 *Register approval for a dispatch to be made from a deterministic composite account if
 *approved by a total of `threshold - 1` of `other_signatories`.
 *
 *If there are enough, then dispatch the call.
 *
 *Payment: `DepositBase` will be reserved if this is the first approval, plus
 *`threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *is cancelled.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *- `threshold`: The total number of approvals for this dispatch before it is executed.
 *- `other_signatories`: The accounts (other than the sender) who can approve this
 *dispatch. May not be empty.
 *- `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *not the first approval, then it must be `Some`, with the timepoint (block number and
 *transaction index) of the first approval transaction.
 *- `call`: The call to be executed.
 *
 *NOTE: Unless this is the final approval, you will generally want to use
 *`approve_as_multi` instead, since it only requires a hash of the call.
 *
 *Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 *on success, result is `Ok` and the result from the interior call, if it was executed,
 *may be found in the deposited `MultisigExecuted` event.
 *
 *## Complexity
 *- `O(S + Z + Call)`.
 *- Up to one balance-reserve or unreserve operation.
 *- One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *  signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *- One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 *- One encode & hash, both of complexity `O(S)`.
 *- Up to one binary search and insert (`O(logS + S)`).
 *- I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *- One event.
 *- The weight of the `call`.
 *- Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *  taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 */
"as_multi": Anonymize<Ibenk878oqe4u0>, 
/**
 *Register approval for a dispatch to be made from a deterministic composite account if
 *approved by a total of `threshold - 1` of `other_signatories`.
 *
 *Payment: `DepositBase` will be reserved if this is the first approval, plus
 *`threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *is cancelled.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *- `threshold`: The total number of approvals for this dispatch before it is executed.
 *- `other_signatories`: The accounts (other than the sender) who can approve this
 *dispatch. May not be empty.
 *- `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *not the first approval, then it must be `Some`, with the timepoint (block number and
 *transaction index) of the first approval transaction.
 *- `call_hash`: The hash of the call to be executed.
 *
 *NOTE: If this is the final approval, you will want to use `as_multi` instead.
 *
 *## Complexity
 *- `O(S)`.
 *- Up to one balance-reserve or unreserve operation.
 *- One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *  signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *- One encode & hash, both of complexity `O(S)`.
 *- Up to one binary search and insert (`O(logS + S)`).
 *- I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *- One event.
 *- Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *  taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 */
"approve_as_multi": Anonymize<Ideaemvoneh309>, 
/**
 *Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 *for this operation will be unreserved on success.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *- `threshold`: The total number of approvals for this dispatch before it is executed.
 *- `other_signatories`: The accounts (other than the sender) who can approve this
 *dispatch. May not be empty.
 *- `timepoint`: The timepoint (block number and transaction index) of the first approval
 *transaction for this dispatch.
 *- `call_hash`: The hash of the call to be executed.
 *
 *## Complexity
 *- `O(S)`.
 *- Up to one balance-reserve or unreserve operation.
 *- One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *  signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *- One encode & hash, both of complexity `O(S)`.
 *- One event.
 *- I/O: 1 read `O(S)`, one remove.
 *- Storage: removes one item.
 */
"cancel_as_multi": Anonymize<I3d9o9d7epp66v>, 
/**
 *Poke the deposit reserved for an existing multisig operation.
 *
 *The dispatch origin for this call must be _Signed_ and must be the original depositor of
 *the multisig operation.
 *
 *The transaction fee is waived if the deposit amount has changed.
 *
 *- `threshold`: The total number of approvals needed for this multisig.
 *- `other_signatories`: The accounts (other than the sender) who are part of the
 *  multisig.
 *- `call_hash`: The hash of the call this deposit is reserved for.
 *
 *Emits `DepositPoked` if successful.
 */
"poke_deposit": Anonymize<I6lqh1vgb4mcja>}>;

export type I83jtfah7iifln = {"other_signatories": Anonymize<Ia2lhg7l2hilo3>, "call": TxCallData};

export type Ibenk878oqe4u0 = {"threshold": number, "other_signatories": Anonymize<Ia2lhg7l2hilo3>, "maybe_timepoint"?: Anonymize<I95jfd8j5cr5eh>, "call": TxCallData, "max_weight": Anonymize<I4q39t5hn830vp>};

export type I6lqh1vgb4mcja = {"threshold": number, "other_signatories": Anonymize<Ia2lhg7l2hilo3>, "call_hash": FixedSizeBinary<32>};

export type Ictooofg1nu4im = AnonymousEnum<{
/**
 *Propose a new bounty.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 *`DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
 *or slashed when rejected.
 *
 *- `curator`: The curator account whom will manage this bounty.
 *- `fee`: The curator fee.
 *- `value`: The total payment amount of this bounty, curator fee included.
 *- `description`: The description of this bounty.
 */
"propose_bounty": Anonymize<I2a839vbf5817q>, 
/**
 *Approve a bounty proposal. At a later time, the bounty will be funded and become active
 *and the original deposit will be returned.
 *
 *May only be called from `T::SpendOrigin`.
 *
 *## Complexity
 *- O(1).
 */
"approve_bounty": Anonymize<Ia9p5bg6p18r0i>, 
/**
 *Propose a curator to a funded bounty.
 *
 *May only be called from `T::SpendOrigin`.
 *
 *## Complexity
 *- O(1).
 */
"propose_curator": Anonymize<I5rlb1eesbovji>, 
/**
 *Unassign curator from a bounty.
 *
 *This function can only be called by the `RejectOrigin` a signed origin.
 *
 *If this function is called by the `RejectOrigin`, we assume that the curator is
 *malicious or inactive. As a result, we will slash the curator when possible.
 *
 *If the origin is the curator, we take this as a sign they are unable to do their job and
 *they willingly give up. We could slash them, but for now we allow them to recover their
 *deposit and exit without issue. (We may want to change this if it is abused.)
 *
 *Finally, the origin can be anyone if and only if the curator is "inactive". This allows
 *anyone in the community to call out that a curator is not doing their due diligence, and
 *we should pick a new curator. In this case the curator should also be slashed.
 *
 *## Complexity
 *- O(1).
 */
"unassign_curator": Anonymize<Ia9p5bg6p18r0i>, 
/**
 *Accept the curator role for a bounty.
 *A deposit will be reserved from curator and refund upon successful payout.
 *
 *May only be called from the curator.
 *
 *## Complexity
 *- O(1).
 */
"accept_curator": Anonymize<Ia9p5bg6p18r0i>, 
/**
 *Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
 *after a delay.
 *
 *The dispatch origin for this call must be the curator of this bounty.
 *
 *- `bounty_id`: Bounty ID to award.
 *- `beneficiary`: The beneficiary account whom will receive the payout.
 *
 *## Complexity
 *- O(1).
 */
"award_bounty": Anonymize<Ia96ru6pujbas0>, 
/**
 *Claim the payout from an awarded bounty after payout delay.
 *
 *The dispatch origin for this call must be the beneficiary of this bounty.
 *
 *- `bounty_id`: Bounty ID to claim.
 *
 *## Complexity
 *- O(1).
 */
"claim_bounty": Anonymize<Ia9p5bg6p18r0i>, 
/**
 *Cancel a proposed or active bounty. All the funds will be sent to treasury and
 *the curator deposit will be unreserved if possible.
 *
 *Only `T::RejectOrigin` is able to cancel a bounty.
 *
 *- `bounty_id`: Bounty ID to cancel.
 *
 *## Complexity
 *- O(1).
 */
"close_bounty": Anonymize<Ia9p5bg6p18r0i>, 
/**
 *Extend the expiry time of an active bounty.
 *
 *The dispatch origin for this call must be the curator of this bounty.
 *
 *- `bounty_id`: Bounty ID to extend.
 *- `remark`: additional information.
 *
 *## Complexity
 *- O(1).
 */
"extend_bounty_expiry": Anonymize<I90n6nnkpdahrh>, 
/**
 *Approve bountry and propose a curator simultaneously.
 *This call is a shortcut to calling `approve_bounty` and `propose_curator` separately.
 *
 *May only be called from `T::SpendOrigin`.
 *
 *- `bounty_id`: Bounty ID to approve.
 *- `curator`: The curator account whom will manage this bounty.
 *- `fee`: The curator fee.
 *
 *## Complexity
 *- O(1).
 */
"approve_bounty_with_curator": Anonymize<I5rlb1eesbovji>}>;

export type I2a839vbf5817q = {"value": bigint, "description": Binary};

export type I5rlb1eesbovji = {"bounty_id": number, "curator": Anonymize<I4su1fqci7afjt>, "fee": bigint};

export type Ia96ru6pujbas0 = {"bounty_id": number, "beneficiary": Anonymize<I4su1fqci7afjt>};

export type I90n6nnkpdahrh = {"bounty_id": number, "remark": Binary};

export type I7a907m1tvsric = AnonymousEnum<{
/**
 *Report something `reason` that deserves a tip and claim any eventual the finder's fee.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 *`DataDepositPerByte` for each byte in `reason`.
 *
 *- `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *  a UTF-8-encoded URL.
 *- `who`: The account which should be credited for the tip.
 *
 *Emits `NewTip` if successful.
 *
 *## Complexity
 *- `O(R)` where `R` length of `reason`.
 *  - encoding and hashing of 'reason'
 */
"report_awesome": Anonymize<I4q8pj89cjg46e>, 
/**
 *Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
 *
 *If successful, the original deposit will be unreserved.
 *
 *The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
 *must have been reported by the signing account through `report_awesome` (and not
 *through `tip_new`).
 *
 *- `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *  as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 *
 *Emits `TipRetracted` if successful.
 *
 *## Complexity
 *- `O(1)`
 *  - Depends on the length of `T::Hash` which is fixed.
 */
"retract_tip": Anonymize<I1jm8m1rh9e20v>, 
/**
 *Give a tip for something new; no finder's fee will be taken.
 *
 *The dispatch origin for this call must be _Signed_ and the signing account must be a
 *member of the `Tippers` set.
 *
 *- `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *  a UTF-8-encoded URL.
 *- `who`: The account which should be credited for the tip.
 *- `tip_value`: The amount of tip that the sender would like to give. The median tip
 *  value of active tippers will be given to the `who`.
 *
 *Emits `NewTip` if successful.
 *
 *## Complexity
 *- `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
 *  - `O(T)`: decoding `Tipper` vec of length `T`. `T` is charged as upper bound given by
 *    `ContainsLengthBound`. The actual cost depends on the implementation of
 *    `T::Tippers`.
 *  - `O(R)`: hashing and encoding of reason of length `R`
 */
"tip_new": Anonymize<I2tctnk2vr8moa>, 
/**
 *Declare a tip value for an already-open tip.
 *
 *The dispatch origin for this call must be _Signed_ and the signing account must be a
 *member of the `Tippers` set.
 *
 *- `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *  as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
 *  account ID.
 *- `tip_value`: The amount of tip that the sender would like to give. The median tip
 *  value of active tippers will be given to the `who`.
 *
 *Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
 *has started.
 *
 *## Complexity
 *- `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length `T`, insert
 *  tip and check closing, `T` is charged as upper bound given by `ContainsLengthBound`.
 *  The actual cost depends on the implementation of `T::Tippers`.
 *
 *  Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
 *  is weighted as if almost full i.e of length `T-1`.
 */
"tip": Anonymize<I1pm30k3i4438u>, 
/**
 *Close and payout a tip.
 *
 *The dispatch origin for this call must be _Signed_.
 *
 *The tip identified by `hash` must have finished its countdown period.
 *
 *- `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *  as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 *
 *## Complexity
 *- : `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length `T`. `T`
 *  is charged as upper bound given by `ContainsLengthBound`. The actual cost depends on
 *  the implementation of `T::Tippers`.
 */
"close_tip": Anonymize<I1jm8m1rh9e20v>, 
/**
 *Remove and slash an already-open tip.
 *
 *May only be called from `T::RejectOrigin`.
 *
 *As a result, the finder is slashed and the deposits are lost.
 *
 *Emits `TipSlashed` if successful.
 *
 *## Complexity
 *- O(1).
 */
"slash_tip": Anonymize<I1jm8m1rh9e20v>}>;

export type I4q8pj89cjg46e = {"reason": Binary, "who": Anonymize<I4su1fqci7afjt>};

export type I2tctnk2vr8moa = {"reason": Binary, "who": Anonymize<I4su1fqci7afjt>, "tip_value": bigint};

export type I1pm30k3i4438u = {"hash": FixedSizeBinary<32>, "tip_value": bigint};

export type Iad3ancsh9k25o = AnonymousEnum<{
/**
 *Issue a new class of fungible assets from a public origin.
 *
 *This new asset class has no assets initially and its owner is the origin.
 *
 *The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
 *
 *Funds of sender are reserved by `AssetDeposit`.
 *
 *Parameters:
 *- `id`: The identifier of the new asset. This must not be currently in use to identify
 *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
 *- `admin`: The admin of this class of assets. The admin is the initial address of each
 *member of the asset class's admin team.
 *- `min_balance`: The minimum balance of this new asset that any single account must
 *have. If an account's balance is reduced below this, then it collapses to zero.
 *
 *Emits `Created` event when successful.
 *
 *Weight: `O(1)`
 */
"create": Anonymize<I666l8bn65t664>, 
/**
 *Issue a new class of fungible assets from a privileged origin.
 *
 *This new asset class has no assets initially.
 *
 *The origin must conform to `ForceOrigin`.
 *
 *Unlike `create`, no funds are reserved.
 *
 *- `id`: The identifier of the new asset. This must not be currently in use to identify
 *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
 *- `owner`: The owner of this class of assets. The owner has full superuser permissions
 *over this asset, but may later change and configure the permissions using
 *`transfer_ownership` and `set_team`.
 *- `min_balance`: The minimum balance of this new asset that any single account must
 *have. If an account's balance is reduced below this, then it collapses to zero.
 *
 *Emits `ForceCreated` event when successful.
 *
 *Weight: `O(1)`
 */
"force_create": Anonymize<Iacnh1j2d6i0uf>, 
/**
 *Start the process of destroying a fungible asset class.
 *
 *`start_destroy` is the first in a series of extrinsics that should be called, to allow
 *destruction of an asset class.
 *
 *The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
 *
 *- `id`: The identifier of the asset to be destroyed. This must identify an existing
 *  asset.
 *
 *It will fail with either [`Error::ContainsHolds`] or [`Error::ContainsFreezes`] if
 *an account contains holds or freezes in place.
 */
"start_destroy": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Destroy all accounts associated with a given asset.
 *
 *`destroy_accounts` should only be called after `start_destroy` has been called, and the
 *asset is in a `Destroying` state.
 *
 *Due to weight restrictions, this function may need to be called multiple times to fully
 *destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
 *
 *- `id`: The identifier of the asset to be destroyed. This must identify an existing
 *  asset.
 *
 *Each call emits the `Event::DestroyedAccounts` event.
 */
"destroy_accounts": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
 *
 *`destroy_approvals` should only be called after `start_destroy` has been called, and the
 *asset is in a `Destroying` state.
 *
 *Due to weight restrictions, this function may need to be called multiple times to fully
 *destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
 *
 *- `id`: The identifier of the asset to be destroyed. This must identify an existing
 *  asset.
 *
 *Each call emits the `Event::DestroyedApprovals` event.
 */
"destroy_approvals": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Complete destroying asset and unreserve currency.
 *
 *`finish_destroy` should only be called after `start_destroy` has been called, and the
 *asset is in a `Destroying` state. All accounts or approvals should be destroyed before
 *hand.
 *
 *- `id`: The identifier of the asset to be destroyed. This must identify an existing
 *  asset.
 *
 *Each successful call emits the `Event::Destroyed` event.
 */
"finish_destroy": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Mint assets of a particular class.
 *
 *The origin must be Signed and the sender must be the Issuer of the asset `id`.
 *
 *- `id`: The identifier of the asset to have some amount minted.
 *- `beneficiary`: The account to be credited with the minted assets.
 *- `amount`: The amount of the asset to be minted.
 *
 *Emits `Issued` event when successful.
 *
 *Weight: `O(1)`
 *Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
 */
"mint": Anonymize<Iblqeltiorjs7a>, 
/**
 *Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
 *
 *Origin must be Signed and the sender should be the Manager of the asset `id`.
 *
 *Bails with `NoAccount` if the `who` is already dead.
 *
 *- `id`: The identifier of the asset to have some amount burned.
 *- `who`: The account to be debited from.
 *- `amount`: The maximum amount by which `who`'s balance should be reduced.
 *
 *Emits `Burned` with the actual amount burned. If this takes the balance to below the
 *minimum for the asset, then the amount burned is increased to take it to zero.
 *
 *Weight: `O(1)`
 *Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
 */
"burn": Anonymize<I387qicsot8ouv>, 
/**
 *Move some assets from the sender account to another.
 *
 *Origin must be Signed.
 *
 *- `id`: The identifier of the asset to have some amount transferred.
 *- `target`: The account to be credited.
 *- `amount`: The amount by which the sender's balance of assets should be reduced and
 *`target`'s balance increased. The amount actually transferred may be slightly greater in
 *the case that the transfer would otherwise take the sender balance above zero but below
 *the minimum balance. Must be greater than zero.
 *
 *Emits `Transferred` with the actual amount transferred. If this takes the source balance
 *to below the minimum for the asset, then the amount transferred is increased to take it
 *to zero.
 *
 *Weight: `O(1)`
 *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 *`target`.
 */
"transfer": Anonymize<I46pqbe97377ff>, 
/**
 *Move some assets from the sender account to another, keeping the sender account alive.
 *
 *Origin must be Signed.
 *
 *- `id`: The identifier of the asset to have some amount transferred.
 *- `target`: The account to be credited.
 *- `amount`: The amount by which the sender's balance of assets should be reduced and
 *`target`'s balance increased. The amount actually transferred may be slightly greater in
 *the case that the transfer would otherwise take the sender balance above zero but below
 *the minimum balance. Must be greater than zero.
 *
 *Emits `Transferred` with the actual amount transferred. If this takes the source balance
 *to below the minimum for the asset, then the amount transferred is increased to take it
 *to zero.
 *
 *Weight: `O(1)`
 *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
 *`target`.
 */
"transfer_keep_alive": Anonymize<I46pqbe97377ff>, 
/**
 *Move some assets from one account to another.
 *
 *Origin must be Signed and the sender should be the Admin of the asset `id`.
 *
 *- `id`: The identifier of the asset to have some amount transferred.
 *- `source`: The account to be debited.
 *- `dest`: The account to be credited.
 *- `amount`: The amount by which the `source`'s balance of assets should be reduced and
 *`dest`'s balance increased. The amount actually transferred may be slightly greater in
 *the case that the transfer would otherwise take the `source` balance above zero but
 *below the minimum balance. Must be greater than zero.
 *
 *Emits `Transferred` with the actual amount transferred. If this takes the source balance
 *to below the minimum for the asset, then the amount transferred is increased to take it
 *to zero.
 *
 *Weight: `O(1)`
 *Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
 *`dest`.
 */
"force_transfer": Anonymize<Iepglv06nn5df>, 
/**
 *Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
 *must already exist as an entry in `Account`s of the asset. If you want to freeze an
 *account that does not have an entry, use `touch_other` first.
 *
 *Origin must be Signed and the sender should be the Freezer of the asset `id`.
 *
 *- `id`: The identifier of the asset to be frozen.
 *- `who`: The account to be frozen.
 *
 *Emits `Frozen`.
 *
 *Weight: `O(1)`
 */
"freeze": Anonymize<I1ihtj6h55990a>, 
/**
 *Allow unprivileged transfers to and from an account again.
 *
 *Origin must be Signed and the sender should be the Admin of the asset `id`.
 *
 *- `id`: The identifier of the asset to be frozen.
 *- `who`: The account to be unfrozen.
 *
 *Emits `Thawed`.
 *
 *Weight: `O(1)`
 */
"thaw": Anonymize<I1ihtj6h55990a>, 
/**
 *Disallow further unprivileged transfers for the asset class.
 *
 *Origin must be Signed and the sender should be the Freezer of the asset `id`.
 *
 *- `id`: The identifier of the asset to be frozen.
 *
 *Emits `Frozen`.
 *
 *Weight: `O(1)`
 */
"freeze_asset": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Allow unprivileged transfers for the asset again.
 *
 *Origin must be Signed and the sender should be the Admin of the asset `id`.
 *
 *- `id`: The identifier of the asset to be thawed.
 *
 *Emits `Thawed`.
 *
 *Weight: `O(1)`
 */
"thaw_asset": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Change the Owner of an asset.
 *
 *Origin must be Signed and the sender should be the Owner of the asset `id`.
 *
 *- `id`: The identifier of the asset.
 *- `owner`: The new Owner of this asset.
 *
 *Emits `OwnerChanged`.
 *
 *Weight: `O(1)`
 */
"transfer_ownership": Anonymize<Idc2iadgettsjf>, 
/**
 *Change the Issuer, Admin and Freezer of an asset.
 *
 *Origin must be Signed and the sender should be the Owner of the asset `id`.
 *
 *- `id`: The identifier of the asset to be frozen.
 *- `issuer`: The new Issuer of this asset.
 *- `admin`: The new Admin of this asset.
 *- `freezer`: The new Freezer of this asset.
 *
 *Emits `TeamChanged`.
 *
 *Weight: `O(1)`
 */
"set_team": Anonymize<I2vkvak51mm9ip>, 
/**
 *Set the metadata for an asset.
 *
 *Origin must be Signed and the sender should be the Owner of the asset `id`.
 *
 *Funds of sender are reserved according to the formula:
 *`MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
 *account any already reserved funds.
 *
 *- `id`: The identifier of the asset to update.
 *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 *- `decimals`: The number of decimals this asset uses to represent one unit.
 *
 *Emits `MetadataSet`.
 *
 *Weight: `O(1)`
 */
"set_metadata": Anonymize<I8hff7chabggkd>, 
/**
 *Clear the metadata for an asset.
 *
 *Origin must be Signed and the sender should be the Owner of the asset `id`.
 *
 *Any deposit is freed for the asset owner.
 *
 *- `id`: The identifier of the asset to clear.
 *
 *Emits `MetadataCleared`.
 *
 *Weight: `O(1)`
 */
"clear_metadata": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Force the metadata for an asset to some value.
 *
 *Origin must be ForceOrigin.
 *
 *Any deposit is left alone.
 *
 *- `id`: The identifier of the asset to update.
 *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
 *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 *- `decimals`: The number of decimals this asset uses to represent one unit.
 *
 *Emits `MetadataSet`.
 *
 *Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
 */
"force_set_metadata": Anonymize<I49i39mtj1ivbs>, 
/**
 *Clear the metadata for an asset.
 *
 *Origin must be ForceOrigin.
 *
 *Any deposit is returned.
 *
 *- `id`: The identifier of the asset to clear.
 *
 *Emits `MetadataCleared`.
 *
 *Weight: `O(1)`
 */
"force_clear_metadata": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Alter the attributes of a given asset.
 *
 *Origin must be `ForceOrigin`.
 *
 *- `id`: The identifier of the asset.
 *- `owner`: The new Owner of this asset.
 *- `issuer`: The new Issuer of this asset.
 *- `admin`: The new Admin of this asset.
 *- `freezer`: The new Freezer of this asset.
 *- `min_balance`: The minimum balance of this new asset that any single account must
 *have. If an account's balance is reduced below this, then it collapses to zero.
 *- `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
 *value to account for the state bloat associated with its balance storage. If set to
 *`true`, then non-zero balances may be stored without a `consumer` reference (and thus
 *an ED in the Balances pallet or whatever else is used to control user-account state
 *growth).
 *- `is_frozen`: Whether this asset class is frozen except for permissioned/admin
 *instructions.
 *
 *Emits `AssetStatusChanged` with the identity of the asset.
 *
 *Weight: `O(1)`
 */
"force_asset_status": Anonymize<Ia38uhc66c5pu8>, 
/**
 *Approve an amount of asset for transfer by a delegated third-party account.
 *
 *Origin must be Signed.
 *
 *Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
 *for the purpose of holding the approval. If some non-zero amount of assets is already
 *approved from signing account to `delegate`, then it is topped up or unreserved to
 *meet the right value.
 *
 *NOTE: The signing account does not need to own `amount` of assets at the point of
 *making this call.
 *
 *- `id`: The identifier of the asset.
 *- `delegate`: The account to delegate permission to transfer asset.
 *- `amount`: The amount of asset that may be transferred by `delegate`. If there is
 *already an approval in place, then this acts additively.
 *
 *Emits `ApprovedTransfer` on success.
 *
 *Weight: `O(1)`
 */
"approve_transfer": Anonymize<I2rqp0be9dgvpp>, 
/**
 *Cancel all of some asset approved for delegated transfer by a third-party account.
 *
 *Origin must be Signed and there must be an approval in place between signer and
 *`delegate`.
 *
 *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 *
 *- `id`: The identifier of the asset.
 *- `delegate`: The account delegated permission to transfer asset.
 *
 *Emits `ApprovalCancelled` on success.
 *
 *Weight: `O(1)`
 */
"cancel_approval": Anonymize<I8ehtmbkpthnh1>, 
/**
 *Cancel all of some asset approved for delegated transfer by a third-party account.
 *
 *Origin must be either ForceOrigin or Signed origin with the signer being the Admin
 *account of the asset `id`.
 *
 *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
 *
 *- `id`: The identifier of the asset.
 *- `delegate`: The account delegated permission to transfer asset.
 *
 *Emits `ApprovalCancelled` on success.
 *
 *Weight: `O(1)`
 */
"force_cancel_approval": Anonymize<I58fkujvj9jskn>, 
/**
 *Transfer some asset balance from a previously delegated account to some third-party
 *account.
 *
 *Origin must be Signed and there must be an approval in place by the `owner` to the
 *signer.
 *
 *If the entire amount approved for transfer is transferred, then any deposit previously
 *reserved by `approve_transfer` is unreserved.
 *
 *- `id`: The identifier of the asset.
 *- `owner`: The account which previously approved for a transfer of at least `amount` and
 *from which the asset balance will be withdrawn.
 *- `destination`: The account to which the asset balance of `amount` will be transferred.
 *- `amount`: The amount of assets to transfer.
 *
 *Emits `TransferredApproved` on success.
 *
 *Weight: `O(1)`
 */
"transfer_approved": Anonymize<I7l28cs1blokb5>, 
/**
 *Create an asset account for non-provider assets.
 *
 *A deposit will be taken from the signer account.
 *
 *- `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
 *  to be taken.
 *- `id`: The identifier of the asset for the account to be created.
 *
 *Emits `Touched` event when successful.
 */
"touch": Anonymize<Ic5b47dj4coa3r>, 
/**
 *Return the deposit (if any) of an asset account or a consumer reference (if any) of an
 *account.
 *
 *The origin must be Signed.
 *
 *- `id`: The identifier of the asset for which the caller would like the deposit
 *  refunded.
 *- `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
 *
 *It will fail with either [`Error::ContainsHolds`] or [`Error::ContainsFreezes`] if
 *the asset account contains holds or freezes in place.
 *
 *Emits `Refunded` event when successful.
 */
"refund": Anonymize<I9vl5kpk0fpakt>, 
/**
 *Sets the minimum balance of an asset.
 *
 *Only works if there aren't any accounts that are holding the asset or if
 *the new value of `min_balance` is less than the old one.
 *
 *Origin must be Signed and the sender has to be the Owner of the
 *asset `id`.
 *
 *- `id`: The identifier of the asset.
 *- `min_balance`: The new value of `min_balance`.
 *
 *Emits `AssetMinBalanceChanged` event when successful.
 */
"set_min_balance": Anonymize<I717jt61hu19b4>, 
/**
 *Create an asset account for `who`.
 *
 *A deposit will be taken from the signer account.
 *
 *- `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
 *  must have sufficient funds for a deposit to be taken.
 *- `id`: The identifier of the asset for the account to be created.
 *- `who`: The account to be created.
 *
 *Emits `Touched` event when successful.
 */
"touch_other": Anonymize<I1ihtj6h55990a>, 
/**
 *Return the deposit (if any) of a target asset account. Useful if you are the depositor.
 *
 *The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
 *order to burn a non-zero balance of the asset, the caller must be the account and should
 *use `refund`.
 *
 *- `id`: The identifier of the asset for the account holding a deposit.
 *- `who`: The account to refund.
 *
 *It will fail with either [`Error::ContainsHolds`] or [`Error::ContainsFreezes`] if
 *the asset account contains holds or freezes in place.
 *
 *Emits `Refunded` event when successful.
 */
"refund_other": Anonymize<I1ihtj6h55990a>, 
/**
 *Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
 *
 *Origin must be Signed and the sender should be the Freezer of the asset `id`.
 *
 *- `id`: The identifier of the account's asset.
 *- `who`: The account to be unblocked.
 *
 *Emits `Blocked`.
 *
 *Weight: `O(1)`
 */
"block": Anonymize<I1ihtj6h55990a>, 
/**
 *Transfer the entire transferable balance from the caller asset account.
 *
 *NOTE: This function only attempts to transfer _transferable_ balances. This means that
 *any held, frozen, or minimum balance (when `keep_alive` is `true`), will not be
 *transferred by this function. To ensure that this function results in a killed account,
 *you might need to prepare the account by removing any reference counters, storage
 *deposits, etc...
 *
 *The dispatch origin of this call must be Signed.
 *
 *- `id`: The identifier of the asset for the account holding a deposit.
 *- `dest`: The recipient of the transfer.
 *- `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *  of the funds the asset account has, causing the sender asset account to be killed
 *  (false), or transfer everything except at least the minimum balance, which will
 *  guarantee to keep the sender asset account alive (true).
 */
"transfer_all": Anonymize<I6luketh4mshm4>}>;

export type I666l8bn65t664 = {"id": number, "admin": Anonymize<I4su1fqci7afjt>, "min_balance": bigint};

export type Iacnh1j2d6i0uf = {"id": number, "owner": Anonymize<I4su1fqci7afjt>, "is_sufficient": boolean, "min_balance": bigint};

export type Iblqeltiorjs7a = {"id": number, "beneficiary": Anonymize<I4su1fqci7afjt>, "amount": bigint};

export type I387qicsot8ouv = {"id": number, "who": Anonymize<I4su1fqci7afjt>, "amount": bigint};

export type I46pqbe97377ff = {"id": number, "target": Anonymize<I4su1fqci7afjt>, "amount": bigint};

export type Iepglv06nn5df = {"id": number, "source": Anonymize<I4su1fqci7afjt>, "dest": Anonymize<I4su1fqci7afjt>, "amount": bigint};

export type I1ihtj6h55990a = {"id": number, "who": Anonymize<I4su1fqci7afjt>};

export type Idc2iadgettsjf = {"id": number, "owner": Anonymize<I4su1fqci7afjt>};

export type I2vkvak51mm9ip = {"id": number, "issuer": Anonymize<I4su1fqci7afjt>, "admin": Anonymize<I4su1fqci7afjt>, "freezer": Anonymize<I4su1fqci7afjt>};

export type Ia38uhc66c5pu8 = {"id": number, "owner": Anonymize<I4su1fqci7afjt>, "issuer": Anonymize<I4su1fqci7afjt>, "admin": Anonymize<I4su1fqci7afjt>, "freezer": Anonymize<I4su1fqci7afjt>, "min_balance": bigint, "is_sufficient": boolean, "is_frozen": boolean};

export type I2rqp0be9dgvpp = {"id": number, "delegate": Anonymize<I4su1fqci7afjt>, "amount": bigint};

export type I8ehtmbkpthnh1 = {"id": number, "delegate": Anonymize<I4su1fqci7afjt>};

export type I58fkujvj9jskn = {"id": number, "owner": Anonymize<I4su1fqci7afjt>, "delegate": Anonymize<I4su1fqci7afjt>};

export type I7l28cs1blokb5 = {"id": number, "owner": Anonymize<I4su1fqci7afjt>, "destination": Anonymize<I4su1fqci7afjt>, "amount": bigint};

export type I6luketh4mshm4 = {"id": number, "dest": Anonymize<I4su1fqci7afjt>, "keep_alive": boolean};

export type Idmcmrk34p8gic = AnonymousEnum<{
/**
 *Report voter equivocation/misbehavior. This method will verify the
 *equivocation proof and validate the given key ownership proof
 *against the extracted offender. If both are valid, the offence
 *will be reported.
 */
"report_double_voting": Anonymize<I3pirohb0sp3ic>, 
/**
 *Report voter equivocation/misbehavior. This method will verify the
 *equivocation proof and validate the given key ownership proof
 *against the extracted offender. If both are valid, the offence
 *will be reported.
 *
 *This extrinsic must be called unsigned and it is expected that only
 *block authors will call it (validated in `ValidateUnsigned`), as such
 *if the block author is defined it will be defined as the equivocation
 *reporter.
 */
"report_double_voting_unsigned": Anonymize<I3pirohb0sp3ic>, 
/**
 *Reset BEEFY consensus by setting a new BEEFY genesis at `delay_in_blocks` blocks in the
 *future.
 *
 *Note: `delay_in_blocks` has to be at least 1.
 */
"set_new_genesis": Anonymize<Iemqna2uucuei9>, 
/**
 *Report fork voting equivocation. This method will verify the equivocation proof
 *and validate the given key ownership proof against the extracted offender.
 *If both are valid, the offence will be reported.
 */
"report_fork_voting": Anonymize<Idrvp50hbkv2k2>, 
/**
 *Report fork voting equivocation. This method will verify the equivocation proof
 *and validate the given key ownership proof against the extracted offender.
 *If both are valid, the offence will be reported.
 *
 *This extrinsic must be called unsigned and it is expected that only
 *block authors will call it (validated in `ValidateUnsigned`), as such
 *if the block author is defined it will be defined as the equivocation
 *reporter.
 */
"report_fork_voting_unsigned": Anonymize<Idrvp50hbkv2k2>, 
/**
 *Report future block voting equivocation. This method will verify the equivocation proof
 *and validate the given key ownership proof against the extracted offender.
 *If both are valid, the offence will be reported.
 */
"report_future_block_voting": Anonymize<Ie11u326g2gsj3>, 
/**
 *Report future block voting equivocation. This method will verify the equivocation proof
 *and validate the given key ownership proof against the extracted offender.
 *If both are valid, the offence will be reported.
 *
 *This extrinsic must be called unsigned and it is expected that only
 *block authors will call it (validated in `ValidateUnsigned`), as such
 *if the block author is defined it will be defined as the equivocation
 *reporter.
 */
"report_future_block_voting_unsigned": Anonymize<Ie11u326g2gsj3>}>;

export type I3pirohb0sp3ic = {"equivocation_proof": Anonymize<Ifiofttj73fsk1>, "key_owner_proof": Anonymize<I3ia7aufsoj0l1>};

export type Ifiofttj73fsk1 = {"first": Anonymize<I3eao7ea0kppv8>, "second": Anonymize<I3eao7ea0kppv8>};

export type I3eao7ea0kppv8 = {"commitment": {"payload": Array<[FixedSizeBinary<2>, Binary]>, "block_number": number, "validator_set_id": bigint}, "id": FixedSizeBinary<33>, "signature": FixedSizeBinary<65>};

export type Iemqna2uucuei9 = {"delay_in_blocks": number};

export type Idrvp50hbkv2k2 = {"equivocation_proof": {"vote": Anonymize<I3eao7ea0kppv8>, "ancestry_proof": {"prev_peaks": Anonymize<Ic5m5lp1oioo8r>, "prev_leaf_count": bigint, "leaf_count": bigint, "items": Array<[bigint, FixedSizeBinary<32>]>}, "header": Anonymize<Ic952bubvq4k7d>}, "key_owner_proof": Anonymize<I3ia7aufsoj0l1>};

export type Ie11u326g2gsj3 = {"equivocation_proof": Anonymize<I3eao7ea0kppv8>, "key_owner_proof": Anonymize<I3ia7aufsoj0l1>};

export type Iegvnh2q4u86eb = AnonymousEnum<{
/**
 *Buy a ticket to enter the lottery.
 *
 *This extrinsic acts as a passthrough function for `call`. In all
 *situations where `call` alone would succeed, this extrinsic should
 *succeed.
 *
 *If `call` is successful, then we will attempt to purchase a ticket,
 *which may fail silently. To detect success of a ticket purchase, you
 *should listen for the `TicketBought` event.
 *
 *This extrinsic must be called by a signed origin.
 */
"buy_ticket": Anonymize<I69f1ld7io445a>, 
/**
 *Set calls in storage which can be used to purchase a lottery ticket.
 *
 *This function only matters if you use the `ValidateCall` implementation
 *provided by this pallet, which uses storage to determine the valid calls.
 *
 *This extrinsic must be called by the Manager origin.
 */
"set_calls": Anonymize<Ifubug7vbov1s8>, 
/**
 *Start a lottery using the provided configuration.
 *
 *This extrinsic must be called by the `ManagerOrigin`.
 *
 *Parameters:
 *
 ** `price`: The cost of a single ticket.
 ** `length`: How long the lottery should run for starting at the current block.
 ** `delay`: How long after the lottery end we should wait before picking a winner.
 ** `repeat`: If the lottery should repeat when completed.
 */
"start_lottery": Anonymize<Iacbtv7bdkku2a>, 
/**
 *If a lottery is repeating, you can use this to stop the repeat.
 *The lottery will continue to run to completion.
 *
 *This extrinsic must be called by the `ManagerOrigin`.
 */
"stop_repeat": undefined}>;

export type Iacbtv7bdkku2a = {"price": bigint, "length": number, "delay": number, "repeat": boolean};

export type Iaq5q67idam8ll = AnonymousEnum<{
/**
 *Place a bid.
 *
 *Origin must be Signed, and account must have at least `amount` in free balance.
 *
 *- `amount`: The amount of the bid; these funds will be reserved, and if/when
 *  consolidated, removed. Must be at least `MinBid`.
 *- `duration`: The number of periods before which the newly consolidated bid may be
 *  thawed. Must be greater than 1 and no more than `QueueCount`.
 *
 *Complexities:
 *- `Queues[duration].len()` (just take max).
 */
"place_bid": Anonymize<Icckjru8f8flpj>, 
/**
 *Retract a previously placed bid.
 *
 *Origin must be Signed, and the account should have previously issued a still-active bid
 *of `amount` for `duration`.
 *
 *- `amount`: The amount of the previous bid.
 *- `duration`: The duration of the previous bid.
 */
"retract_bid": Anonymize<Icckjru8f8flpj>, 
/**
 *Ensure we have sufficient funding for all potential payouts.
 *
 *- `origin`: Must be accepted by `FundOrigin`.
 */
"fund_deficit": undefined, 
/**
 *Reduce or remove an outstanding receipt, placing the according proportion of funds into
 *the account of the owner.
 *
 *- `origin`: Must be Signed and the account must be the owner of the receipt `index` as
 *  well as any fungible counterpart.
 *- `index`: The index of the receipt.
 *- `portion`: If `Some`, then only the given portion of the receipt should be thawed. If
 *  `None`, then all of it should be.
 */
"thaw_private": Anonymize<Iba38lgbjrs7je>, 
/**
 *Reduce or remove an outstanding receipt, placing the according proportion of funds into
 *the account of the owner.
 *
 *- `origin`: Must be Signed and the account must be the owner of the fungible counterpart
 *  for receipt `index`.
 *- `index`: The index of the receipt.
 */
"thaw_communal": Anonymize<I666bl2fqjkejo>, 
/**
 *Make a private receipt communal and create fungible counterparts for its owner.
 */
"communify": Anonymize<I666bl2fqjkejo>, 
/**
 *Make a communal receipt private and burn fungible counterparts from its owner.
 */
"privatize": Anonymize<I666bl2fqjkejo>}>;

export type Icckjru8f8flpj = {"amount": bigint, "duration": number};

export type Iba38lgbjrs7je = {"index": number, "maybe_proportion"?: Anonymize<I35p85j063s0il>};

export type Ic6havm8cbicj9 = AnonymousEnum<{
/**
 *Issue a new collection of non-fungible items from a public origin.
 *
 *This new collection has no items initially and its owner is the origin.
 *
 *The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
 *
 *`ItemDeposit` funds of sender are reserved.
 *
 *Parameters:
 *- `collection`: The identifier of the new collection. This must not be currently in use.
 *- `admin`: The admin of this collection. The admin is the initial address of each
 *member of the collection's admin team.
 *
 *Emits `Created` event when successful.
 *
 *Weight: `O(1)`
 */
"create": Anonymize<Ibmailvl2rk94u>, 
/**
 *Issue a new collection of non-fungible items from a privileged origin.
 *
 *This new collection has no items initially.
 *
 *The origin must conform to `ForceOrigin`.
 *
 *Unlike `create`, no funds are reserved.
 *
 *- `collection`: The identifier of the new item. This must not be currently in use.
 *- `owner`: The owner of this collection of items. The owner has full superuser
 *  permissions
 *over this item, but may later change and configure the permissions using
 *`transfer_ownership` and `set_team`.
 *
 *Emits `ForceCreated` event when successful.
 *
 *Weight: `O(1)`
 */
"force_create": Anonymize<I4b3viebhsqj08>, 
/**
 *Destroy a collection of fungible items.
 *
 *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
 *owner of the `collection`.
 *
 *- `collection`: The identifier of the collection to be destroyed.
 *- `witness`: Information on the items minted in the collection. This must be
 *correct.
 *
 *Emits `Destroyed` event when successful.
 *
 *Weight: `O(n + m)` where:
 *- `n = witness.items`
 *- `m = witness.item_metadatas`
 *- `a = witness.attributes`
 */
"destroy": Anonymize<I223jg78mng8hq>, 
/**
 *Mint an item of a particular collection.
 *
 *The origin must be Signed and the sender must be the Issuer of the `collection`.
 *
 *- `collection`: The collection of the item to be minted.
 *- `item`: The item value of the item to be minted.
 *- `beneficiary`: The initial owner of the minted item.
 *
 *Emits `Issued` event when successful.
 *
 *Weight: `O(1)`
 */
"mint": Anonymize<I8o0ghd9j8csrc>, 
/**
 *Destroy a single item.
 *
 *Origin must be Signed and the signing account must be either:
 *- the Admin of the `collection`;
 *- the Owner of the `item`;
 *
 *- `collection`: The collection of the item to be burned.
 *- `item`: The item of the item to be burned.
 *- `check_owner`: If `Some` then the operation will fail with `WrongOwner` unless the
 *  item is owned by this value.
 *
 *Emits `Burned` with the actual amount burned.
 *
 *Weight: `O(1)`
 *Modes: `check_owner.is_some()`.
 */
"burn": Anonymize<Idlch5fvavr8mh>, 
/**
 *Move an item from the sender account to another.
 *
 *This resets the approved account of the item.
 *
 *Origin must be Signed and the signing account must be either:
 *- the Admin of the `collection`;
 *- the Owner of the `item`;
 *- the approved delegate for the `item` (in this case, the approval is reset).
 *
 *Arguments:
 *- `collection`: The collection of the item to be transferred.
 *- `item`: The item of the item to be transferred.
 *- `dest`: The account to receive ownership of the item.
 *
 *Emits `Transferred`.
 *
 *Weight: `O(1)`
 */
"transfer": Anonymize<I94er5fkmhi69n>, 
/**
 *Reevaluate the deposits on some items.
 *
 *Origin must be Signed and the sender should be the Owner of the `collection`.
 *
 *- `collection`: The collection to be frozen.
 *- `items`: The items of the collection whose deposits will be reevaluated.
 *
 *NOTE: This exists as a best-effort function. Any items which are unknown or
 *in the case that the owner account does not have reservable funds to pay for a
 *deposit increase are ignored. Generally the owner isn't going to call this on items
 *whose existing deposit is less than the refreshed deposit as it would only cost them,
 *so it's of little consequence.
 *
 *It will still return an error in the case that the collection is unknown of the signer
 *is not permitted to call it.
 *
 *Weight: `O(items.len())`
 */
"redeposit": Anonymize<If9vko7pv0231m>, 
/**
 *Disallow further unprivileged transfer of an item.
 *
 *Origin must be Signed and the sender should be the Freezer of the `collection`.
 *
 *- `collection`: The collection of the item to be frozen.
 *- `item`: The item of the item to be frozen.
 *
 *Emits `Frozen`.
 *
 *Weight: `O(1)`
 */
"freeze": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Re-allow unprivileged transfer of an item.
 *
 *Origin must be Signed and the sender should be the Freezer of the `collection`.
 *
 *- `collection`: The collection of the item to be thawed.
 *- `item`: The item of the item to be thawed.
 *
 *Emits `Thawed`.
 *
 *Weight: `O(1)`
 */
"thaw": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Disallow further unprivileged transfers for a whole collection.
 *
 *Origin must be Signed and the sender should be the Freezer of the `collection`.
 *
 *- `collection`: The collection to be frozen.
 *
 *Emits `CollectionFrozen`.
 *
 *Weight: `O(1)`
 */
"freeze_collection": Anonymize<I6cu7obfo0rr0o>, 
/**
 *Re-allow unprivileged transfers for a whole collection.
 *
 *Origin must be Signed and the sender should be the Admin of the `collection`.
 *
 *- `collection`: The collection to be thawed.
 *
 *Emits `CollectionThawed`.
 *
 *Weight: `O(1)`
 */
"thaw_collection": Anonymize<I6cu7obfo0rr0o>, 
/**
 *Change the Owner of a collection.
 *
 *Origin must be Signed and the sender should be the Owner of the `collection`.
 *
 *- `collection`: The collection whose owner should be changed.
 *- `owner`: The new Owner of this collection. They must have called
 *  `set_accept_ownership` with `collection` in order for this operation to succeed.
 *
 *Emits `OwnerChanged`.
 *
 *Weight: `O(1)`
 */
"transfer_ownership": Anonymize<Idoicaqddtcrv0>, 
/**
 *Change the Issuer, Admin and Freezer of a collection.
 *
 *Origin must be Signed and the sender should be the Owner of the `collection`.
 *
 *- `collection`: The collection whose team should be changed.
 *- `issuer`: The new Issuer of this collection.
 *- `admin`: The new Admin of this collection.
 *- `freezer`: The new Freezer of this collection.
 *
 *Emits `TeamChanged`.
 *
 *Weight: `O(1)`
 */
"set_team": Anonymize<I7pl01hchcjac6>, 
/**
 *Approve an item to be transferred by a delegated third-party account.
 *
 *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be
 *either the owner of the `item` or the admin of the collection.
 *
 *- `collection`: The collection of the item to be approved for delegated transfer.
 *- `item`: The item of the item to be approved for delegated transfer.
 *- `delegate`: The account to delegate permission to transfer the item.
 *
 *Important NOTE: The `approved` account gets reset after each transfer.
 *
 *Emits `ApprovedTransfer` on success.
 *
 *Weight: `O(1)`
 */
"approve_transfer": Anonymize<I9q6srh8o2jnej>, 
/**
 *Cancel the prior approval for the transfer of an item by a delegate.
 *
 *Origin must be either:
 *- the `Force` origin;
 *- `Signed` with the signer being the Admin of the `collection`;
 *- `Signed` with the signer being the Owner of the `item`;
 *
 *Arguments:
 *- `collection`: The collection of the item of whose approval will be cancelled.
 *- `item`: The item of the item of whose approval will be cancelled.
 *- `maybe_check_delegate`: If `Some` will ensure that the given account is the one to
 *  which permission of transfer is delegated.
 *
 *Emits `ApprovalCancelled` on success.
 *
 *Weight: `O(1)`
 */
"cancel_approval": Anonymize<I2787020350fc3>, 
/**
 *Alter the attributes of a given item.
 *
 *Origin must be `ForceOrigin`.
 *
 *- `collection`: The identifier of the item.
 *- `owner`: The new Owner of this item.
 *- `issuer`: The new Issuer of this item.
 *- `admin`: The new Admin of this item.
 *- `freezer`: The new Freezer of this item.
 *- `free_holding`: Whether a deposit is taken for holding an item of this collection.
 *- `is_frozen`: Whether this collection is frozen except for permissioned/admin
 *instructions.
 *
 *Emits `ItemStatusChanged` with the identity of the item.
 *
 *Weight: `O(1)`
 */
"force_item_status": Anonymize<I20n7o3khlu75i>, 
/**
 *Set an attribute for a collection or item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *`collection`.
 *
 *If the origin is Signed, then funds of signer are reserved according to the formula:
 *`MetadataDepositBase + DepositPerByte * (key.len + value.len)` taking into
 *account any already reserved funds.
 *
 *- `collection`: The identifier of the collection whose item's metadata to set.
 *- `maybe_item`: The identifier of the item whose metadata to set.
 *- `key`: The key of the attribute.
 *- `value`: The value to which to set the attribute.
 *
 *Emits `AttributeSet`.
 *
 *Weight: `O(1)`
 */
"set_attribute": Anonymize<I5tvvgui05tn6e>, 
/**
 *Clear an attribute for a collection or item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *`collection`.
 *
 *Any deposit is freed for the collection's owner.
 *
 *- `collection`: The identifier of the collection whose item's metadata to clear.
 *- `maybe_item`: The identifier of the item whose metadata to clear.
 *- `key`: The key of the attribute.
 *
 *Emits `AttributeCleared`.
 *
 *Weight: `O(1)`
 */
"clear_attribute": Anonymize<Ibal0joadvdc2h>, 
/**
 *Set the metadata for an item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *`collection`.
 *
 *If the origin is Signed, then funds of signer are reserved according to the formula:
 *`MetadataDepositBase + DepositPerByte * data.len` taking into
 *account any already reserved funds.
 *
 *- `collection`: The identifier of the collection whose item's metadata to set.
 *- `item`: The identifier of the item whose metadata to set.
 *- `data`: The general information of this item. Limited in length by `StringLimit`.
 *- `is_frozen`: Whether the metadata should be frozen against further changes.
 *
 *Emits `MetadataSet`.
 *
 *Weight: `O(1)`
 */
"set_metadata": Anonymize<Iceq9fmmp9aeqv>, 
/**
 *Clear the metadata for an item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *`item`.
 *
 *Any deposit is freed for the collection's owner.
 *
 *- `collection`: The identifier of the collection whose item's metadata to clear.
 *- `item`: The identifier of the item whose metadata to clear.
 *
 *Emits `MetadataCleared`.
 *
 *Weight: `O(1)`
 */
"clear_metadata": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Set the metadata for a collection.
 *
 *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 *the `collection`.
 *
 *If the origin is `Signed`, then funds of signer are reserved according to the formula:
 *`MetadataDepositBase + DepositPerByte * data.len` taking into
 *account any already reserved funds.
 *
 *- `collection`: The identifier of the item whose metadata to update.
 *- `data`: The general information of this item. Limited in length by `StringLimit`.
 *- `is_frozen`: Whether the metadata should be frozen against further changes.
 *
 *Emits `CollectionMetadataSet`.
 *
 *Weight: `O(1)`
 */
"set_collection_metadata": Anonymize<I9viqhmdtuof5e>, 
/**
 *Clear the metadata for a collection.
 *
 *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 *the `collection`.
 *
 *Any deposit is freed for the collection's owner.
 *
 *- `collection`: The identifier of the collection whose metadata to clear.
 *
 *Emits `CollectionMetadataCleared`.
 *
 *Weight: `O(1)`
 */
"clear_collection_metadata": Anonymize<I6cu7obfo0rr0o>, 
/**
 *Set (or reset) the acceptance of ownership for a particular account.
 *
 *Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
 *provider reference.
 *
 *- `maybe_collection`: The identifier of the collection whose ownership the signer is
 *  willing to accept, or if `None`, an indication that the signer is willing to accept no
 *  ownership transferal.
 *
 *Emits `OwnershipAcceptanceChanged`.
 */
"set_accept_ownership": Anonymize<Ibqooroq6rr5kr>, 
/**
 *Set the maximum amount of items a collection could have.
 *
 *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 *the `collection`.
 *
 *Note: This function can only succeed once per collection.
 *
 *- `collection`: The identifier of the collection to change.
 *- `max_supply`: The maximum amount of items a collection could have.
 *
 *Emits `CollectionMaxSupplySet` event when successful.
 */
"set_collection_max_supply": Anonymize<I6h88h8vba22v8>, 
/**
 *Set (or reset) the price for an item.
 *
 *Origin must be Signed and must be the owner of the asset `item`.
 *
 *- `collection`: The collection of the item.
 *- `item`: The item to set the price for.
 *- `price`: The price for the item. Pass `None`, to reset the price.
 *- `buyer`: Restricts the buy operation to a specific account.
 *
 *Emits `ItemPriceSet` on success if the price is not `None`.
 *Emits `ItemPriceRemoved` on success if the price is `None`.
 */
"set_price": Anonymize<I5g8c5alradibo>, 
/**
 *Allows to buy an item if it's up for sale.
 *
 *Origin must be Signed and must not be the owner of the `item`.
 *
 *- `collection`: The collection of the item.
 *- `item`: The item the sender wants to buy.
 *- `bid_price`: The price the sender is willing to pay.
 *
 *Emits `ItemBought` on success.
 */
"buy_item": Anonymize<I19jiel1ftbcce>}>;

export type Ibmailvl2rk94u = {"collection": number, "admin": Anonymize<I4su1fqci7afjt>};

export type I4b3viebhsqj08 = {"collection": number, "owner": Anonymize<I4su1fqci7afjt>, "free_holding": boolean};

export type I8o0ghd9j8csrc = {"collection": number, "item": number, "owner": Anonymize<I4su1fqci7afjt>};

export type Idlch5fvavr8mh = {"collection": number, "item": number, "check_owner"?: Anonymize<I7p12hnekjgg2o>};

export type I7p12hnekjgg2o = (Anonymize<I4su1fqci7afjt>) | undefined;

export type I94er5fkmhi69n = {"collection": number, "item": number, "dest": Anonymize<I4su1fqci7afjt>};

export type Idoicaqddtcrv0 = {"collection": number, "new_owner": Anonymize<I4su1fqci7afjt>};

export type I7pl01hchcjac6 = {"collection": number, "issuer": Anonymize<I4su1fqci7afjt>, "admin": Anonymize<I4su1fqci7afjt>, "freezer": Anonymize<I4su1fqci7afjt>};

export type I9q6srh8o2jnej = {"collection": number, "item": number, "delegate": Anonymize<I4su1fqci7afjt>};

export type I2787020350fc3 = {"collection": number, "item": number, "maybe_check_delegate"?: Anonymize<I7p12hnekjgg2o>};

export type I20n7o3khlu75i = {"collection": number, "owner": Anonymize<I4su1fqci7afjt>, "issuer": Anonymize<I4su1fqci7afjt>, "admin": Anonymize<I4su1fqci7afjt>, "freezer": Anonymize<I4su1fqci7afjt>, "free_holding": boolean, "is_frozen": boolean};

export type I5g8c5alradibo = {"collection": number, "item": number, "price"?: Anonymize<I35p85j063s0il>, "whitelisted_buyer"?: Anonymize<I7p12hnekjgg2o>};

export type I6u8q38fm9v1qs = AnonymousEnum<{
/**
 *Issue a new collection of non-fungible items from a public origin.
 *
 *This new collection has no items initially and its owner is the origin.
 *
 *The origin must be Signed and the sender must have sufficient funds free.
 *
 *`CollectionDeposit` funds of sender are reserved.
 *
 *Parameters:
 *- `admin`: The admin of this collection. The admin is the initial address of each
 *member of the collection's admin team.
 *
 *Emits `Created` event when successful.
 *
 *Weight: `O(1)`
 */
"create": Anonymize<I29lgqtck418gp>, 
/**
 *Issue a new collection of non-fungible items from a privileged origin.
 *
 *This new collection has no items initially.
 *
 *The origin must conform to `ForceOrigin`.
 *
 *Unlike `create`, no funds are reserved.
 *
 *- `owner`: The owner of this collection of items. The owner has full superuser
 *  permissions over this item, but may later change and configure the permissions using
 *  `transfer_ownership` and `set_team`.
 *
 *Emits `ForceCreated` event when successful.
 *
 *Weight: `O(1)`
 */
"force_create": Anonymize<Iecq2mm321jdg3>, 
/**
 *Destroy a collection of fungible items.
 *
 *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
 *owner of the `collection`.
 *
 *NOTE: The collection must have 0 items to be destroyed.
 *
 *- `collection`: The identifier of the collection to be destroyed.
 *- `witness`: Information on the items minted in the collection. This must be
 *correct.
 *
 *Emits `Destroyed` event when successful.
 *
 *Weight: `O(m + c + a)` where:
 *- `m = witness.item_metadatas`
 *- `c = witness.item_configs`
 *- `a = witness.attributes`
 */
"destroy": Anonymize<I77ie723ncd4co>, 
/**
 *Mint an item of a particular collection.
 *
 *The origin must be Signed and the sender must comply with the `mint_settings` rules.
 *
 *- `collection`: The collection of the item to be minted.
 *- `item`: An identifier of the new item.
 *- `mint_to`: Account into which the item will be minted.
 *- `witness_data`: When the mint type is `HolderOf(collection_id)`, then the owned
 *  item_id from that collection needs to be provided within the witness data object. If
 *  the mint price is set, then it should be additionally confirmed in the `witness_data`.
 *
 *Note: the deposit will be taken from the `origin` and not the `owner` of the `item`.
 *
 *Emits `Issued` event when successful.
 *
 *Weight: `O(1)`
 */
"mint": Anonymize<I76l9e2pop152r>, 
/**
 *Mint an item of a particular collection from a privileged origin.
 *
 *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
 *Issuer of the `collection`.
 *
 *- `collection`: The collection of the item to be minted.
 *- `item`: An identifier of the new item.
 *- `mint_to`: Account into which the item will be minted.
 *- `item_config`: A config of the new item.
 *
 *Emits `Issued` event when successful.
 *
 *Weight: `O(1)`
 */
"force_mint": Anonymize<Ib7ed2pe1b1sg>, 
/**
 *Destroy a single item.
 *
 *The origin must conform to `ForceOrigin` or must be Signed and the signing account must
 *be the owner of the `item`.
 *
 *- `collection`: The collection of the item to be burned.
 *- `item`: The item to be burned.
 *
 *Emits `Burned`.
 *
 *Weight: `O(1)`
 */
"burn": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Move an item from the sender account to another.
 *
 *Origin must be Signed and the signing account must be either:
 *- the Owner of the `item`;
 *- the approved delegate for the `item` (in this case, the approval is reset).
 *
 *Arguments:
 *- `collection`: The collection of the item to be transferred.
 *- `item`: The item to be transferred.
 *- `dest`: The account to receive ownership of the item.
 *
 *Emits `Transferred`.
 *
 *Weight: `O(1)`
 */
"transfer": Anonymize<I94er5fkmhi69n>, 
/**
 *Re-evaluate the deposits on some items.
 *
 *Origin must be Signed and the sender should be the Owner of the `collection`.
 *
 *- `collection`: The collection of the items to be reevaluated.
 *- `items`: The items of the collection whose deposits will be reevaluated.
 *
 *NOTE: This exists as a best-effort function. Any items which are unknown or
 *in the case that the owner account does not have reservable funds to pay for a
 *deposit increase are ignored. Generally the owner isn't going to call this on items
 *whose existing deposit is less than the refreshed deposit as it would only cost them,
 *so it's of little consequence.
 *
 *It will still return an error in the case that the collection is unknown or the signer
 *is not permitted to call it.
 *
 *Weight: `O(items.len())`
 */
"redeposit": Anonymize<If9vko7pv0231m>, 
/**
 *Disallow further unprivileged transfer of an item.
 *
 *Origin must be Signed and the sender should be the Freezer of the `collection`.
 *
 *- `collection`: The collection of the item to be changed.
 *- `item`: The item to become non-transferable.
 *
 *Emits `ItemTransferLocked`.
 *
 *Weight: `O(1)`
 */
"lock_item_transfer": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Re-allow unprivileged transfer of an item.
 *
 *Origin must be Signed and the sender should be the Freezer of the `collection`.
 *
 *- `collection`: The collection of the item to be changed.
 *- `item`: The item to become transferable.
 *
 *Emits `ItemTransferUnlocked`.
 *
 *Weight: `O(1)`
 */
"unlock_item_transfer": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Disallows specified settings for the whole collection.
 *
 *Origin must be Signed and the sender should be the Owner of the `collection`.
 *
 *- `collection`: The collection to be locked.
 *- `lock_settings`: The settings to be locked.
 *
 *Note: it's possible to only lock(set) the setting, but not to unset it.
 *
 *Emits `CollectionLocked`.
 *
 *Weight: `O(1)`
 */
"lock_collection": Anonymize<I1ahf3pvgsgbu>, 
/**
 *Change the Owner of a collection.
 *
 *Origin must be Signed and the sender should be the Owner of the `collection`.
 *
 *- `collection`: The collection whose owner should be changed.
 *- `owner`: The new Owner of this collection. They must have called
 *  `set_accept_ownership` with `collection` in order for this operation to succeed.
 *
 *Emits `OwnerChanged`.
 *
 *Weight: `O(1)`
 */
"transfer_ownership": Anonymize<Idoicaqddtcrv0>, 
/**
 *Change the Issuer, Admin and Freezer of a collection.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *`collection`.
 *
 *Note: by setting the role to `None` only the `ForceOrigin` will be able to change it
 *after to `Some(account)`.
 *
 *- `collection`: The collection whose team should be changed.
 *- `issuer`: The new Issuer of this collection.
 *- `admin`: The new Admin of this collection.
 *- `freezer`: The new Freezer of this collection.
 *
 *Emits `TeamChanged`.
 *
 *Weight: `O(1)`
 */
"set_team": Anonymize<I9kjcceihn9imm>, 
/**
 *Change the Owner of a collection.
 *
 *Origin must be `ForceOrigin`.
 *
 *- `collection`: The identifier of the collection.
 *- `owner`: The new Owner of this collection.
 *
 *Emits `OwnerChanged`.
 *
 *Weight: `O(1)`
 */
"force_collection_owner": Anonymize<I1esmt123kmgt3>, 
/**
 *Change the config of a collection.
 *
 *Origin must be `ForceOrigin`.
 *
 *- `collection`: The identifier of the collection.
 *- `config`: The new config of this collection.
 *
 *Emits `CollectionConfigChanged`.
 *
 *Weight: `O(1)`
 */
"force_collection_config": Anonymize<I97qcg6i3l8gee>, 
/**
 *Approve an item to be transferred by a delegated third-party account.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *`item`.
 *
 *- `collection`: The collection of the item to be approved for delegated transfer.
 *- `item`: The item to be approved for delegated transfer.
 *- `delegate`: The account to delegate permission to transfer the item.
 *- `maybe_deadline`: Optional deadline for the approval. Specified by providing the
 *	number of blocks after which the approval will expire
 *
 *Emits `TransferApproved` on success.
 *
 *Weight: `O(1)`
 */
"approve_transfer": Anonymize<Idpvdjolib1gd>, 
/**
 *Cancel one of the transfer approvals for a specific item.
 *
 *Origin must be either:
 *- the `Force` origin;
 *- `Signed` with the signer being the Owner of the `item`;
 *
 *Arguments:
 *- `collection`: The collection of the item of whose approval will be cancelled.
 *- `item`: The item of the collection of whose approval will be cancelled.
 *- `delegate`: The account that is going to loose their approval.
 *
 *Emits `ApprovalCancelled` on success.
 *
 *Weight: `O(1)`
 */
"cancel_approval": Anonymize<I9q6srh8o2jnej>, 
/**
 *Cancel all the approvals of a specific item.
 *
 *Origin must be either:
 *- the `Force` origin;
 *- `Signed` with the signer being the Owner of the `item`;
 *
 *Arguments:
 *- `collection`: The collection of the item of whose approvals will be cleared.
 *- `item`: The item of the collection of whose approvals will be cleared.
 *
 *Emits `AllApprovalsCancelled` on success.
 *
 *Weight: `O(1)`
 */
"clear_all_transfer_approvals": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Disallows changing the metadata or attributes of the item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Admin
 *of the `collection`.
 *
 *- `collection`: The collection if the `item`.
 *- `item`: An item to be locked.
 *- `lock_metadata`: Specifies whether the metadata should be locked.
 *- `lock_attributes`: Specifies whether the attributes in the `CollectionOwner` namespace
 *  should be locked.
 *
 *Note: `lock_attributes` affects the attributes in the `CollectionOwner` namespace only.
 *When the metadata or attributes are locked, it won't be possible the unlock them.
 *
 *Emits `ItemPropertiesLocked`.
 *
 *Weight: `O(1)`
 */
"lock_item_properties": Anonymize<I1jj31tn29ie3c>, 
/**
 *Set an attribute for a collection or item.
 *
 *Origin must be Signed and must conform to the namespace ruleset:
 *- `CollectionOwner` namespace could be modified by the `collection` Admin only;
 *- `ItemOwner` namespace could be modified by the `maybe_item` owner only. `maybe_item`
 *  should be set in that case;
 *- `Account(AccountId)` namespace could be modified only when the `origin` was given a
 *  permission to do so;
 *
 *The funds of `origin` are reserved according to the formula:
 *`AttributeDepositBase + DepositPerByte * (key.len + value.len)` taking into
 *account any already reserved funds.
 *
 *- `collection`: The identifier of the collection whose item's metadata to set.
 *- `maybe_item`: The identifier of the item whose metadata to set.
 *- `namespace`: Attribute's namespace.
 *- `key`: The key of the attribute.
 *- `value`: The value to which to set the attribute.
 *
 *Emits `AttributeSet`.
 *
 *Weight: `O(1)`
 */
"set_attribute": Anonymize<I5llu6o6a0go5i>, 
/**
 *Force-set an attribute for a collection or item.
 *
 *Origin must be `ForceOrigin`.
 *
 *If the attribute already exists and it was set by another account, the deposit
 *will be returned to the previous owner.
 *
 *- `set_as`: An optional owner of the attribute.
 *- `collection`: The identifier of the collection whose item's metadata to set.
 *- `maybe_item`: The identifier of the item whose metadata to set.
 *- `namespace`: Attribute's namespace.
 *- `key`: The key of the attribute.
 *- `value`: The value to which to set the attribute.
 *
 *Emits `AttributeSet`.
 *
 *Weight: `O(1)`
 */
"force_set_attribute": Anonymize<Ic8b8561e6t9ie>, 
/**
 *Clear an attribute for a collection or item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 *attribute.
 *
 *Any deposit is freed for the collection's owner.
 *
 *- `collection`: The identifier of the collection whose item's metadata to clear.
 *- `maybe_item`: The identifier of the item whose metadata to clear.
 *- `namespace`: Attribute's namespace.
 *- `key`: The key of the attribute.
 *
 *Emits `AttributeCleared`.
 *
 *Weight: `O(1)`
 */
"clear_attribute": Anonymize<I93r2effh7od84>, 
/**
 *Approve item's attributes to be changed by a delegated third-party account.
 *
 *Origin must be Signed and must be an owner of the `item`.
 *
 *- `collection`: A collection of the item.
 *- `item`: The item that holds attributes.
 *- `delegate`: The account to delegate permission to change attributes of the item.
 *
 *Emits `ItemAttributesApprovalAdded` on success.
 */
"approve_item_attributes": Anonymize<I9q6srh8o2jnej>, 
/**
 *Cancel the previously provided approval to change item's attributes.
 *All the previously set attributes by the `delegate` will be removed.
 *
 *Origin must be Signed and must be an owner of the `item`.
 *
 *- `collection`: Collection that the item is contained within.
 *- `item`: The item that holds attributes.
 *- `delegate`: The previously approved account to remove.
 *
 *Emits `ItemAttributesApprovalRemoved` on success.
 */
"cancel_item_attributes_approval": Anonymize<I3qq76irbr2fol>, 
/**
 *Set the metadata for an item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the
 *`collection`.
 *
 *If the origin is Signed, then funds of signer are reserved according to the formula:
 *`MetadataDepositBase + DepositPerByte * data.len` taking into
 *account any already reserved funds.
 *
 *- `collection`: The identifier of the collection whose item's metadata to set.
 *- `item`: The identifier of the item whose metadata to set.
 *- `data`: The general information of this item. Limited in length by `StringLimit`.
 *
 *Emits `ItemMetadataSet`.
 *
 *Weight: `O(1)`
 */
"set_metadata": Anonymize<Icrkms46uh8tpb>, 
/**
 *Clear the metadata for an item.
 *
 *Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the
 *`collection`.
 *
 *Any deposit is freed for the collection's owner.
 *
 *- `collection`: The identifier of the collection whose item's metadata to clear.
 *- `item`: The identifier of the item whose metadata to clear.
 *
 *Emits `ItemMetadataCleared`.
 *
 *Weight: `O(1)`
 */
"clear_metadata": Anonymize<Iafkqus0ohh6l6>, 
/**
 *Set the metadata for a collection.
 *
 *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of
 *the `collection`.
 *
 *If the origin is `Signed`, then funds of signer are reserved according to the formula:
 *`MetadataDepositBase + DepositPerByte * data.len` taking into
 *account any already reserved funds.
 *
 *- `collection`: The identifier of the item whose metadata to update.
 *- `data`: The general information of this item. Limited in length by `StringLimit`.
 *
 *Emits `CollectionMetadataSet`.
 *
 *Weight: `O(1)`
 */
"set_collection_metadata": Anonymize<I78u60nqh0etah>, 
/**
 *Clear the metadata for a collection.
 *
 *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of
 *the `collection`.
 *
 *Any deposit is freed for the collection's owner.
 *
 *- `collection`: The identifier of the collection whose metadata to clear.
 *
 *Emits `CollectionMetadataCleared`.
 *
 *Weight: `O(1)`
 */
"clear_collection_metadata": Anonymize<I6cu7obfo0rr0o>, 
/**
 *Set (or reset) the acceptance of ownership for a particular account.
 *
 *Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
 *provider reference.
 *
 *- `maybe_collection`: The identifier of the collection whose ownership the signer is
 *  willing to accept, or if `None`, an indication that the signer is willing to accept no
 *  ownership transferal.
 *
 *Emits `OwnershipAcceptanceChanged`.
 */
"set_accept_ownership": Anonymize<Ibqooroq6rr5kr>, 
/**
 *Set the maximum number of items a collection could have.
 *
 *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 *the `collection`.
 *
 *- `collection`: The identifier of the collection to change.
 *- `max_supply`: The maximum number of items a collection could have.
 *
 *Emits `CollectionMaxSupplySet` event when successful.
 */
"set_collection_max_supply": Anonymize<I6h88h8vba22v8>, 
/**
 *Update mint settings.
 *
 *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Issuer
 *of the `collection`.
 *
 *- `collection`: The identifier of the collection to change.
 *- `mint_settings`: The new mint settings.
 *
 *Emits `CollectionMintSettingsUpdated` event when successful.
 */
"update_mint_settings": Anonymize<I1lso3vlgherue>, 
/**
 *Set (or reset) the price for an item.
 *
 *Origin must be Signed and must be the owner of the `item`.
 *
 *- `collection`: The collection of the item.
 *- `item`: The item to set the price for.
 *- `price`: The price for the item. Pass `None`, to reset the price.
 *- `buyer`: Restricts the buy operation to a specific account.
 *
 *Emits `ItemPriceSet` on success if the price is not `None`.
 *Emits `ItemPriceRemoved` on success if the price is `None`.
 */
"set_price": Anonymize<I5g8c5alradibo>, 
/**
 *Allows to buy an item if it's up for sale.
 *
 *Origin must be Signed and must not be the owner of the `item`.
 *
 *- `collection`: The collection of the item.
 *- `item`: The item the sender wants to buy.
 *- `bid_price`: The price the sender is willing to pay.
 *
 *Emits `ItemBought` on success.
 */
"buy_item": Anonymize<I19jiel1ftbcce>, 
/**
 *Allows to pay the tips.
 *
 *Origin must be Signed.
 *
 *- `tips`: Tips array.
 *
 *Emits `TipSent` on every tip transfer.
 */
"pay_tips": Anonymize<I26c8p47106toa>, 
/**
 *Register a new atomic swap, declaring an intention to send an `item` in exchange for
 *`desired_item` from origin to target on the current blockchain.
 *The target can execute the swap during the specified `duration` of blocks (if set).
 *Additionally, the price could be set for the desired `item`.
 *
 *Origin must be Signed and must be an owner of the `item`.
 *
 *- `collection`: The collection of the item.
 *- `item`: The item an owner wants to give.
 *- `desired_collection`: The collection of the desired item.
 *- `desired_item`: The desired item an owner wants to receive.
 *- `maybe_price`: The price an owner is willing to pay or receive for the desired `item`.
 *- `duration`: A deadline for the swap. Specified by providing the number of blocks
 *	after which the swap will expire.
 *
 *Emits `SwapCreated` on success.
 */
"create_swap": Anonymize<Iq82b3qvf20ne>, 
/**
 *Cancel an atomic swap.
 *
 *Origin must be Signed.
 *Origin must be an owner of the `item` if the deadline hasn't expired.
 *
 *- `collection`: The collection of the item.
 *- `item`: The item an owner wants to give.
 *
 *Emits `SwapCancelled` on success.
 */
"cancel_swap": Anonymize<Ic3j8ku6mbsms4>, 
/**
 *Claim an atomic swap.
 *This method executes a pending swap, that was created by a counterpart before.
 *
 *Origin must be Signed and must be an owner of the `item`.
 *
 *- `send_collection`: The collection of the item to be sent.
 *- `send_item`: The item to be sent.
 *- `receive_collection`: The collection of the item to be received.
 *- `receive_item`: The item to be received.
 *- `witness_price`: A price that was previously agreed on.
 *
 *Emits `SwapClaimed` on success.
 */
"claim_swap": Anonymize<I3nvoqsi8f05ph>, 
/**
 *Mint an item by providing the pre-signed approval.
 *
 *Origin must be Signed.
 *
 *- `mint_data`: The pre-signed approval that consists of the information about the item,
 *  its metadata, attributes, who can mint it (`None` for anyone) and until what block
 *  number.
 *- `signature`: The signature of the `data` object.
 *- `signer`: The `data` object's signer. Should be an Issuer of the collection.
 *
 *Emits `Issued` on success.
 *Emits `AttributeSet` if the attributes were provided.
 *Emits `ItemMetadataSet` if the metadata was not empty.
 */
"mint_pre_signed": Anonymize<I3eoft5md071do>, 
/**
 *Set attributes for an item by providing the pre-signed approval.
 *
 *Origin must be Signed and must be an owner of the `data.item`.
 *
 *- `data`: The pre-signed approval that consists of the information about the item,
 *  attributes to update and until what block number.
 *- `signature`: The signature of the `data` object.
 *- `signer`: The `data` object's signer. Should be an Admin of the collection for the
 *  `CollectionOwner` namespace.
 *
 *Emits `AttributeSet` for each provided attribute.
 *Emits `ItemAttributesApprovalAdded` if the approval wasn't set before.
 *Emits `PreSignedAttributesSet` on success.
 */
"set_attributes_pre_signed": Anonymize<I923eug653ra0o>}>;

export type I29lgqtck418gp = {"admin": Anonymize<I4su1fqci7afjt>, "config": Anonymize<I72ndo6phms8ik>};

export type Iecq2mm321jdg3 = {"owner": Anonymize<I4su1fqci7afjt>, "config": Anonymize<I72ndo6phms8ik>};

export type I76l9e2pop152r = {"collection": number, "item": number, "mint_to": Anonymize<I4su1fqci7afjt>, "witness_data"?: Anonymize<Ib0113vv89gbic>};

export type Ib7ed2pe1b1sg = {"collection": number, "item": number, "mint_to": Anonymize<I4su1fqci7afjt>, "item_config": bigint};

export type I9kjcceihn9imm = {"collection": number, "issuer"?: Anonymize<I7p12hnekjgg2o>, "admin"?: Anonymize<I7p12hnekjgg2o>, "freezer"?: Anonymize<I7p12hnekjgg2o>};

export type I1esmt123kmgt3 = {"collection": number, "owner": Anonymize<I4su1fqci7afjt>};

export type Idpvdjolib1gd = {"collection": number, "item": number, "delegate": Anonymize<I4su1fqci7afjt>, "maybe_deadline"?: Anonymize<I4arjljr6dpflb>};

export type I3qq76irbr2fol = {"collection": number, "item": number, "delegate": Anonymize<I4su1fqci7afjt>, "witness": number};

export type Iaaont9hftbk80 = AnonymousEnum<{
/**
 *Lock the NFT and mint a new fungible asset.
 *
 *The dispatch origin for this call must be Signed.
 *The origin must be the owner of the NFT they are trying to lock.
 *
 *`Deposit` funds of sender are reserved.
 *
 *- `nft_collection_id`: The ID used to identify the collection of the NFT.
 *Is used within the context of `pallet_nfts`.
 *- `nft_id`: The ID used to identify the NFT within the given collection.
 *Is used within the context of `pallet_nfts`.
 *- `asset_id`: The ID of the new asset. It must not exist.
 *Is used within the context of `pallet_assets`.
 *- `beneficiary`: The account that will receive the newly created asset.
 *- `fractions`: The total issuance of the newly created asset class.
 *
 *Emits `NftFractionalized` event when successful.
 */
"fractionalize": Anonymize<I8otu439cqo7jl>, 
/**
 *Burn the total issuance of the fungible asset and return (unlock) the locked NFT.
 *
 *The dispatch origin for this call must be Signed.
 *
 *`Deposit` funds will be returned to `asset_creator`.
 *
 *- `nft_collection_id`: The ID used to identify the collection of the NFT.
 *Is used within the context of `pallet_nfts`.
 *- `nft_id`: The ID used to identify the NFT within the given collection.
 *Is used within the context of `pallet_nfts`.
 *- `asset_id`: The ID of the asset being returned and destroyed. Must match
 *the original ID of the created asset, corresponding to the NFT.
 *Is used within the context of `pallet_assets`.
 *- `beneficiary`: The account that will receive the unified NFT.
 *
 *Emits `NftUnified` event when successful.
 */
"unify": Anonymize<I7562ikckoa9b7>}>;

export type I8otu439cqo7jl = {"nft_collection_id": number, "nft_id": number, "asset_id": number, "beneficiary": Anonymize<I4su1fqci7afjt>, "fractions": bigint};

export type I7562ikckoa9b7 = {"nft_collection_id": number, "nft_id": number, "asset_id": number, "beneficiary": Anonymize<I4su1fqci7afjt>};

export type I70s59h2a8cqh3 = AnonymousEnum<{
/**
 *Start the first payout cycle.
 *
 *- `origin`: A `Signed` origin of an account.
 */
"init": undefined, 
/**
 *Move to next payout cycle, assuming that the present block is now within that cycle.
 *
 *- `origin`: A `Signed` origin of an account.
 */
"bump": undefined, 
/**
 *Induct oneself into the payout system.
 */
"induct": undefined, 
/**
 *Register for a payout.
 *
 *Will only work if we are in the first `RegistrationPeriod` blocks since the cycle
 *started.
 *
 *- `origin`: A `Signed` origin of an account which is a member of `Members`.
 */
"register": undefined, 
/**
 *Request a payout.
 *
 *Will only work if we are after the first `RegistrationPeriod` blocks since the cycle
 *started but by no more than `PayoutPeriod` blocks.
 *
 *- `origin`: A `Signed` origin of an account which is a member of `Members`.
 */
"payout": undefined, 
/**
 *Request a payout to a secondary account.
 *
 *Will only work if we are after the first `RegistrationPeriod` blocks since the cycle
 *started but by no more than `PayoutPeriod` blocks.
 *
 *- `origin`: A `Signed` origin of an account which is a member of `Members`.
 *- `beneficiary`: The account to receive payment.
 */
"payout_other": Anonymize<I8ligieds2efci>, 
/**
 *Update a payment's status; if it failed, alter the state so the payment can be retried.
 *
 *This must be called within the same cycle as the failed payment. It will fail with
 *`Event::NotCurrent` otherwise.
 *
 *- `origin`: A `Signed` origin of an account which is a member of `Members` who has
 *  received a payment this cycle.
 */
"check_payment": undefined}>;

export type I8ligieds2efci = {"beneficiary": SS58String};

export type Id9o33t7prjgjj = AnonymousEnum<{
/**
 *Bump the state of a member.
 *
 *This will demote a member whose `last_proof` is now beyond their rank's
 *`demotion_period`.
 *
 *- `origin`: A `Signed` origin of an account.
 *- `who`: A member account whose state is to be updated.
 */
"bump": Anonymize<I4cbvqmqadhrea>, 
/**
 *Set the parameters.
 *
 *- `origin`: An origin complying with `ParamsOrigin` or root.
 *- `params`: The new parameters for the pallet.
 */
"set_params": Anonymize<I5mruatkavn9hn>, 
/**
 *Set whether a member is active or not.
 *
 *- `origin`: A `Signed` origin of a member's account.
 *- `is_active`: `true` iff the member is active.
 */
"set_active": Anonymize<I27vrusv8rgd90>, 
/**
 *Approve a member to continue at their rank.
 *
 *This resets `last_proof` to the current block, thereby delaying any automatic demotion.
 *
 *`who` must already be tracked by this pallet for this to have an effect.
 *
 *- `origin`: An origin which satisfies `ApproveOrigin` or root.
 *- `who`: A member (i.e. of non-zero rank).
 *- `at_rank`: The rank of member.
 */
"approve": Anonymize<Ic79d2eioda33s>, 
/**
 *Introduce a new and unranked candidate (rank zero).
 *
 *- `origin`: An origin which satisfies `InductOrigin` or root.
 *- `who`: The account ID of the candidate to be inducted and become a member.
 */
"induct": Anonymize<I4cbvqmqadhrea>, 
/**
 *Increment the rank of a ranked and tracked account.
 *
 *- `origin`: An origin which satisfies `PromoteOrigin` with a `Success` result of
 *  `to_rank` or more or root.
 *- `who`: The account ID of the member to be promoted to `to_rank`.
 *- `to_rank`: One more than the current rank of `who`.
 */
"promote": Anonymize<I5kpe8b2kedtqn>, 
/**
 *Fast promotions can skip ranks and ignore the `min_promotion_period`.
 *
 *This is useful for out-of-band promotions, hence it has its own `FastPromoteOrigin` to
 *be (possibly) more restrictive than `PromoteOrigin`. Note that the member must already
 *be inducted.
 */
"promote_fast": Anonymize<I5kpe8b2kedtqn>, 
/**
 *Stop tracking a prior member who is now not a ranked member of the collective.
 *
 *- `origin`: A `Signed` origin of an account.
 *- `who`: The ID of an account which was tracked in this pallet but which is now not a
 *  ranked member of the collective.
 */
"offboard": Anonymize<I4cbvqmqadhrea>, 
/**
 *Provide evidence that a rank is deserved.
 *
 *This is free as long as no evidence for the forthcoming judgement is already submitted.
 *Evidence is cleared after an outcome (either demotion, promotion of approval).
 *
 *- `origin`: A `Signed` origin of an inducted and ranked account.
 *- `wish`: The stated desire of the member.
 *- `evidence`: A dump of evidence to be considered. This should generally be either a
 *  Markdown-encoded document or a series of 32-byte hashes which can be found on a
 *  decentralised content-based-indexing system such as IPFS.
 */
"submit_evidence": Anonymize<I5il2eoab4j61e>, 
/**
 *Introduce an already-ranked individual of the collective into this pallet.
 *
 *The rank may still be zero. This resets `last_proof` to the current block and
 *`last_promotion` will be set to zero, thereby delaying any automatic demotion but
 *allowing immediate promotion.
 *
 *- `origin`: A signed origin of a ranked, but not tracked, account.
 */
"import": undefined, 
/**
 *Introduce an already-ranked individual of the collective into this pallet.
 *
 *The rank may still be zero. Can be called by anyone on any collective member - including
 *the sender.
 *
 *This resets `last_proof` to the current block and `last_promotion` will be set to zero,
 *thereby delaying any automatic demotion but allowing immediate promotion.
 *
 *- `origin`: A signed origin of a ranked, but not tracked, account.
 *- `who`: The account ID of the collective member to be inducted.
 */
"import_member": Anonymize<I4cbvqmqadhrea>, 
/**
 *Set the parameters partially.
 *
 *- `origin`: An origin complying with `ParamsOrigin` or root.
 *- `partial_params`: The new parameters for the pallet.
 *
 *This update config with multiple arguments without duplicating
 *the fields that does not need to update (set to None).
 */
"set_partial_params": Anonymize<Idt0cq08n4po4d>}>;

export type I27vrusv8rgd90 = {"is_active": boolean};

export type I5il2eoab4j61e = {"wish": Anonymize<Iel6f1b4fu88cv>, "evidence": Binary};

export type Idt0cq08n4po4d = {"partial_params": {"active_salary": Array<Anonymize<I35p85j063s0il>>, "passive_salary": Array<Anonymize<I35p85j063s0il>>, "demotion_period": Array<Anonymize<I4arjljr6dpflb>>, "min_promotion_period": Array<Anonymize<I4arjljr6dpflb>>, "offboard_timeout"?: Anonymize<I4arjljr6dpflb>}};

export type Ipgeldipdne49 = AnonymousEnum<{
/**
 *Index and store data off chain. Minimum data size is 1 bytes, maximum is
 *`MaxTransactionSize`. Data will be removed after `STORAGE_PERIOD` blocks, unless `renew`
 *is called.
 *## Complexity
 *- O(n*log(n)) of data size, as all data is pushed to an in-memory trie.
 */
"store": Anonymize<Itrlf5b2o2l8q>, 
/**
 *Renew previously stored data. Parameters are the block number that contains
 *previous `store` or `renew` call and transaction index within that block.
 *Transaction index is emitted in the `Stored` or `Renewed` event.
 *Applies same fees as `store`.
 *## Complexity
 *- O(1).
 */
"renew": Anonymize<I4vj3ndsquheo1>, 
/**
 *Check storage proof for block number `block_number() - StoragePeriod`.
 *If such block does not exist the proof is expected to be `None`.
 *## Complexity
 *- Linear w.r.t the number of indexed transactions in the proved block for random
 *  probing.
 *There's a DB read for each transaction.
 */
"check_proof": Anonymize<I7h5kud22qmfsg>}>;

export type Itrlf5b2o2l8q = {"data": Binary};

export type I4vj3ndsquheo1 = {"block": number, "index": number};

export type I7h5kud22qmfsg = {"proof": {"chunk": Binary, "proof": Anonymize<Itom7fk49o0c9>}};

export type Iddr6fva4nhp6t = AnonymousEnum<{
/**
 *Declare that some `dislocated` account has, through rewards or penalties, sufficiently
 *changed its score that it should properly fall into a different bag than its current
 *one.
 *
 *Anyone can call this function about any potentially dislocated account.
 *
 *Will always update the stored score of `dislocated` to the correct score, based on
 *`ScoreProvider`.
 *
 *If `dislocated` does not exists, it returns an error.
 */
"rebag": Anonymize<Iepvl96j3rpblo>, 
/**
 *Move the caller's Id directly in front of `lighter`.
 *
 *The dispatch origin for this call must be _Signed_ and can only be called by the Id of
 *the account going in front of `lighter`. Fee is payed by the origin under all
 *circumstances.
 *
 *Only works if:
 *
 *- both nodes are within the same bag,
 *- and `origin` has a greater `Score` than `lighter`.
 */
"put_in_front_of": Anonymize<Iems2cb8v3lka8>, 
/**
 *Same as [`Pallet::put_in_front_of`], but it can be called by anyone.
 *
 *Fee is paid by the origin under all circumstances.
 */
"put_in_front_of_other": Anonymize<I4oh0ds0hgt386>}>;

export type Iepvl96j3rpblo = {"dislocated": Anonymize<I4su1fqci7afjt>};

export type Iems2cb8v3lka8 = {"lighter": Anonymize<I4su1fqci7afjt>};

export type I4oh0ds0hgt386 = {"heavier": Anonymize<I4su1fqci7afjt>, "lighter": Anonymize<I4su1fqci7afjt>};

export type Iq2t6ejghtjp4 = AnonymousEnum<{
/**
 *Add a new child-bounty.
 *
 *The dispatch origin for this call must be the curator of parent
 *bounty and the parent bounty must be in "active" state.
 *
 *Child-bounty gets added successfully & fund gets transferred from
 *parent bounty to child-bounty account, if parent bounty has enough
 *funds, else the call fails.
 *
 *Upper bound to maximum number of active  child bounties that can be
 *added are managed via runtime trait config
 *[`Config::MaxActiveChildBountyCount`].
 *
 *If the call is success, the status of child-bounty is updated to
 *"Added".
 *
 *- `parent_bounty_id`: Index of parent bounty for which child-bounty is being added.
 *- `value`: Value for executing the proposal.
 *- `description`: Text description for the child-bounty.
 */
"add_child_bounty": Anonymize<I8mk5kjgn02hi8>, 
/**
 *Propose curator for funded child-bounty.
 *
 *The dispatch origin for this call must be curator of parent bounty.
 *
 *Parent bounty must be in active state, for this child-bounty call to
 *work.
 *
 *Child-bounty must be in "Added" state, for processing the call. And
 *state of child-bounty is moved to "CuratorProposed" on successful
 *call completion.
 *
 *- `parent_bounty_id`: Index of parent bounty.
 *- `child_bounty_id`: Index of child bounty.
 *- `curator`: Address of child-bounty curator.
 *- `fee`: payment fee to child-bounty curator for execution.
 */
"propose_curator": Anonymize<I5onpf3u0obsqb>, 
/**
 *Accept the curator role for the child-bounty.
 *
 *The dispatch origin for this call must be the curator of this
 *child-bounty.
 *
 *A deposit will be reserved from the curator and refund upon
 *successful payout or cancellation.
 *
 *Fee for curator is deducted from curator fee of parent bounty.
 *
 *Parent bounty must be in active state, for this child-bounty call to
 *work.
 *
 *Child-bounty must be in "CuratorProposed" state, for processing the
 *call. And state of child-bounty is moved to "Active" on successful
 *call completion.
 *
 *- `parent_bounty_id`: Index of parent bounty.
 *- `child_bounty_id`: Index of child bounty.
 */
"accept_curator": Anonymize<I2gr10p66od9ch>, 
/**
 *Unassign curator from a child-bounty.
 *
 *The dispatch origin for this call can be either `RejectOrigin`, or
 *the curator of the parent bounty, or any signed origin.
 *
 *For the origin other than T::RejectOrigin and the child-bounty
 *curator, parent bounty must be in active state, for this call to
 *work. We allow child-bounty curator and T::RejectOrigin to execute
 *this call irrespective of the parent bounty state.
 *
 *If this function is called by the `RejectOrigin` or the
 *parent bounty curator, we assume that the child-bounty curator is
 *malicious or inactive. As a result, child-bounty curator deposit is
 *slashed.
 *
 *If the origin is the child-bounty curator, we take this as a sign
 *that they are unable to do their job, and are willingly giving up.
 *We could slash the deposit, but for now we allow them to unreserve
 *their deposit and exit without issue. (We may want to change this if
 *it is abused.)
 *
 *Finally, the origin can be anyone iff the child-bounty curator is
 *"inactive". Expiry update due of parent bounty is used to estimate
 *inactive state of child-bounty curator.
 *
 *This allows anyone in the community to call out that a child-bounty
 *curator is not doing their due diligence, and we should pick a new
 *one. In this case the child-bounty curator deposit is slashed.
 *
 *State of child-bounty is moved to Added state on successful call
 *completion.
 *
 *- `parent_bounty_id`: Index of parent bounty.
 *- `child_bounty_id`: Index of child bounty.
 */
"unassign_curator": Anonymize<I2gr10p66od9ch>, 
/**
 *Award child-bounty to a beneficiary.
 *
 *The beneficiary will be able to claim the funds after a delay.
 *
 *The dispatch origin for this call must be the parent curator or
 *curator of this child-bounty.
 *
 *Parent bounty must be in active state, for this child-bounty call to
 *work.
 *
 *Child-bounty must be in active state, for processing the call. And
 *state of child-bounty is moved to "PendingPayout" on successful call
 *completion.
 *
 *- `parent_bounty_id`: Index of parent bounty.
 *- `child_bounty_id`: Index of child bounty.
 *- `beneficiary`: Beneficiary account.
 */
"award_child_bounty": Anonymize<I5d9an59q96b9e>, 
/**
 *Claim the payout from an awarded child-bounty after payout delay.
 *
 *The dispatch origin for this call may be any signed origin.
 *
 *Call works independent of parent bounty state, No need for parent
 *bounty to be in active state.
 *
 *The Beneficiary is paid out with agreed bounty value. Curator fee is
 *paid & curator deposit is unreserved.
 *
 *Child-bounty must be in "PendingPayout" state, for processing the
 *call. And instance of child-bounty is removed from the state on
 *successful call completion.
 *
 *- `parent_bounty_id`: Index of parent bounty.
 *- `child_bounty_id`: Index of child bounty.
 */
"claim_child_bounty": Anonymize<I2gr10p66od9ch>, 
/**
 *Cancel a proposed or active child-bounty. Child-bounty account funds
 *are transferred to parent bounty account. The child-bounty curator
 *deposit may be unreserved if possible.
 *
 *The dispatch origin for this call must be either parent curator or
 *`T::RejectOrigin`.
 *
 *If the state of child-bounty is `Active`, curator deposit is
 *unreserved.
 *
 *If the state of child-bounty is `PendingPayout`, call fails &
 *returns `PendingPayout` error.
 *
 *For the origin other than T::RejectOrigin, parent bounty must be in
 *active state, for this child-bounty call to work. For origin
 *T::RejectOrigin execution is forced.
 *
 *Instance of child-bounty is removed from the state on successful
 *call completion.
 *
 *- `parent_bounty_id`: Index of parent bounty.
 *- `child_bounty_id`: Index of child bounty.
 */
"close_child_bounty": Anonymize<I2gr10p66od9ch>}>;

export type I8mk5kjgn02hi8 = {"parent_bounty_id": number, "value": bigint, "description": Binary};

export type I5onpf3u0obsqb = {"parent_bounty_id": number, "child_bounty_id": number, "curator": Anonymize<I4su1fqci7afjt>, "fee": bigint};

export type I2gr10p66od9ch = {"parent_bounty_id": number, "child_bounty_id": number};

export type I5d9an59q96b9e = {"parent_bounty_id": number, "child_bounty_id": number, "beneficiary": Anonymize<I4su1fqci7afjt>};

export type I27uadq9n6ivck = AnonymousEnum<{
/**
 *Propose a referendum on a privileged action.
 *
 *- `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
 *  available.
 *- `proposal_origin`: The origin from which the proposal should be executed.
 *- `proposal`: The proposal.
 *- `enactment_moment`: The moment that the proposal should be enacted.
 *
 *Emits `Submitted`.
 */
"submit": Anonymize<Icktu1gtondmhj>, 
/**
 *Post the Decision Deposit for a referendum.
 *
 *- `origin`: must be `Signed` and the account must have funds available for the
 *  referendum's track's Decision Deposit.
 *- `index`: The index of the submitted referendum whose Decision Deposit is yet to be
 *  posted.
 *
 *Emits `DecisionDepositPlaced`.
 */
"place_decision_deposit": Anonymize<I666bl2fqjkejo>, 
/**
 *Refund the Decision Deposit for a closed referendum back to the depositor.
 *
 *- `origin`: must be `Signed` or `Root`.
 *- `index`: The index of a closed referendum whose Decision Deposit has not yet been
 *  refunded.
 *
 *Emits `DecisionDepositRefunded`.
 */
"refund_decision_deposit": Anonymize<I666bl2fqjkejo>, 
/**
 *Cancel an ongoing referendum.
 *
 *- `origin`: must be the `CancelOrigin`.
 *- `index`: The index of the referendum to be cancelled.
 *
 *Emits `Cancelled`.
 */
"cancel": Anonymize<I666bl2fqjkejo>, 
/**
 *Cancel an ongoing referendum and slash the deposits.
 *
 *- `origin`: must be the `KillOrigin`.
 *- `index`: The index of the referendum to be cancelled.
 *
 *Emits `Killed` and `DepositSlashed`.
 */
"kill": Anonymize<I666bl2fqjkejo>, 
/**
 *Advance a referendum onto its next logical state. Only used internally.
 *
 *- `origin`: must be `Root`.
 *- `index`: the referendum to be advanced.
 */
"nudge_referendum": Anonymize<I666bl2fqjkejo>, 
/**
 *Advance a track onto its next logical state. Only used internally.
 *
 *- `origin`: must be `Root`.
 *- `track`: the track to be advanced.
 *
 *Action item for when there is now one fewer referendum in the deciding phase and the
 *`DecidingCount` is not yet updated. This means that we should either:
 *- begin deciding another referendum (and leave `DecidingCount` alone); or
 *- decrement `DecidingCount`.
 */
"one_fewer_deciding": Anonymize<Icbio0e1f0034b>, 
/**
 *Refund the Submission Deposit for a closed referendum back to the depositor.
 *
 *- `origin`: must be `Signed` or `Root`.
 *- `index`: The index of a closed referendum whose Submission Deposit has not yet been
 *  refunded.
 *
 *Emits `SubmissionDepositRefunded`.
 */
"refund_submission_deposit": Anonymize<I666bl2fqjkejo>, 
/**
 *Set or clear metadata of a referendum.
 *
 *Parameters:
 *- `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
 *  metadata of a finished referendum.
 *- `index`:  The index of a referendum to set or clear metadata for.
 *- `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
 */
"set_metadata": Anonymize<I8c0vkqjjipnuj>}>;

export type Icktu1gtondmhj = {"proposal_origin": Anonymize<Ietipehah2qudc>, "proposal": PreimagesBounded, "enactment_moment": TraitsScheduleDispatchTime};

export type Icbio0e1f0034b = {"track": number};

export type I8c0vkqjjipnuj = {"index": number, "maybe_hash"?: Anonymize<I4s6vifaf8k998>};

export type I3o06pm63chdtt = AnonymousEnum<{
/**
 *Index and store data off chain.
 */
"store": Anonymize<I8ofcg5rbj0g2c>}>;

export type I9rkc7eqejp3rj = AnonymousEnum<{
/**
 *A dispatch that will fill the block weight up to the given ratio.
 */
"fill_block": Anonymize<Ienjibnb78vnl0>, "trigger_defensive": undefined}>;

export type Ienjibnb78vnl0 = {"ratio": number};

export type I99hrhstt9euff = AnonymousEnum<{
/**
 *Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
 *otherwise it is a vote to keep the status quo.
 *
 *The dispatch origin of this call must be _Signed_.
 *
 *- `poll_index`: The index of the poll to vote for.
 *- `vote`: The vote configuration.
 *
 *Weight: `O(R)` where R is the number of polls the voter has voted on.
 */
"vote": Anonymize<Idnsr2pndm36h0>, 
/**
 *Delegate the voting power (with some given conviction) of the sending account for a
 *particular class of polls.
 *
 *The balance delegated is locked for as long as it's delegated, and thereafter for the
 *time appropriate for the conviction's lock period.
 *
 *The dispatch origin of this call must be _Signed_, and the signing account must either:
 *  - be delegating already; or
 *  - have no voting activity (if there is, then it will need to be removed through
 *    `remove_vote`).
 *
 *- `to`: The account whose voting the `target` account's voting power will follow.
 *- `class`: The class of polls to delegate. To delegate multiple classes, multiple calls
 *  to this function are required.
 *- `conviction`: The conviction that will be attached to the delegated votes. When the
 *  account is undelegated, the funds will be locked for the corresponding period.
 *- `balance`: The amount of the account's balance to be used in delegating. This must not
 *  be more than the account's current balance.
 *
 *Emits `Delegated`.
 *
 *Weight: `O(R)` where R is the number of polls the voter delegating to has
 *  voted on. Weight is initially charged as if maximum votes, but is refunded later.
 */
"delegate": Anonymize<Iam6m7eerh6h6v>, 
/**
 *Undelegate the voting power of the sending account for a particular class of polls.
 *
 *Tokens may be unlocked following once an amount of time consistent with the lock period
 *of the conviction with which the delegation was issued has passed.
 *
 *The dispatch origin of this call must be _Signed_ and the signing account must be
 *currently delegating.
 *
 *- `class`: The class of polls to remove the delegation from.
 *
 *Emits `Undelegated`.
 *
 *Weight: `O(R)` where R is the number of polls the voter delegating to has
 *  voted on. Weight is initially charged as if maximum votes, but is refunded later.
 */
"undelegate": Anonymize<I8steo882k7qns>, 
/**
 *Remove the lock caused by prior voting/delegating which has expired within a particular
 *class.
 *
 *The dispatch origin of this call must be _Signed_.
 *
 *- `class`: The class of polls to unlock.
 *- `target`: The account to remove the lock on.
 *
 *Weight: `O(R)` with R number of vote of target.
 */
"unlock": Anonymize<Ic8m623qbgr5mp>, 
/**
 *Remove a vote for a poll.
 *
 *If:
 *- the poll was cancelled, or
 *- the poll is ongoing, or
 *- the poll has ended such that
 *  - the vote of the account was in opposition to the result; or
 *  - there was no conviction to the account's vote; or
 *  - the account made a split vote
 *...then the vote is removed cleanly and a following call to `unlock` may result in more
 *funds being available.
 *
 *If, however, the poll has ended and:
 *- it finished corresponding to the vote of the account, and
 *- the account made a standard vote with conviction, and
 *- the lock period of the conviction is not over
 *...then the lock will be aggregated into the overall account's lock, which may involve
 **overlocking* (where the two locks are combined into a single lock that is the maximum
 *of both the amount locked and the time is it locked for).
 *
 *The dispatch origin of this call must be _Signed_, and the signer must have a vote
 *registered for poll `index`.
 *
 *- `index`: The index of poll of the vote to be removed.
 *- `class`: Optional parameter, if given it indicates the class of the poll. For polls
 *  which have finished or are cancelled, this must be `Some`.
 *
 *Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
 *  Weight is calculated for the maximum number of vote.
 */
"remove_vote": Anonymize<I5f178ab6b89t3>, 
/**
 *Remove a vote for a poll.
 *
 *If the `target` is equal to the signer, then this function is exactly equivalent to
 *`remove_vote`. If not equal to the signer, then the vote must have expired,
 *either because the poll was cancelled, because the voter lost the poll or
 *because the conviction period is over.
 *
 *The dispatch origin of this call must be _Signed_.
 *
 *- `target`: The account of the vote to be removed; this account must have voted for poll
 *  `index`.
 *- `index`: The index of poll of the vote to be removed.
 *- `class`: The class of the poll.
 *
 *Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
 *  Weight is calculated for the maximum number of vote.
 */
"remove_other_vote": Anonymize<Ieg7p9mojce0qk>}>;

export type Idnsr2pndm36h0 = {"poll_index": number, "vote": ConvictionVotingVoteAccountVote};

export type Iam6m7eerh6h6v = {"class": number, "to": Anonymize<I4su1fqci7afjt>, "conviction": VotingConviction, "balance": bigint};

export type I8steo882k7qns = {"class": number};

export type Ic8m623qbgr5mp = {"class": number, "target": Anonymize<I4su1fqci7afjt>};

export type I5f178ab6b89t3 = {"class"?: Anonymize<I4arjljr6dpflb>, "index": number};

export type Ieg7p9mojce0qk = {"target": Anonymize<I4su1fqci7afjt>, "class": number, "index": number};

export type I6kp789d4cu9n7 = AnonymousEnum<{"whitelist_call": Anonymize<I1adbcfi5uc62r>, "remove_whitelisted_call": Anonymize<I1adbcfi5uc62r>, "dispatch_whitelisted_call": Anonymize<Ibf6ucefn8fh49>, "dispatch_whitelisted_call_with_preimage": Anonymize<I69f1ld7io445a>}>;

export type Ibf6ucefn8fh49 = {"call_hash": FixedSizeBinary<32>, "call_encoded_len": number, "call_weight_witness": Anonymize<I4q39t5hn830vp>};

export type I4c1mqs672b4ht = AnonymousEnum<{
/**
 *Add a new proposal to be voted on.
 *
 *Must be called by a Fellow.
 */
"propose": Anonymize<Ieqgnaa5msfrta>, 
/**
 *Add an aye or nay vote for the sender to the given proposal.
 *
 *Must be called by a Fellow.
 */
"vote": Anonymize<I2dtrijkm5601t>, 
/**
 *Initialize the Alliance, onboard fellows and allies.
 *
 *The Alliance must be empty, and the call must provide some founding members.
 *
 *Must be called by the Root origin.
 */
"init_members": Anonymize<Ia61kag3grdevk>, 
/**
 *Disband the Alliance, remove all active members and unreserve deposits.
 *
 *Witness data must be set.
 */
"disband": Anonymize<Icq0crsj7vrl4j>, 
/**
 *Set a new IPFS CID to the alliance rule.
 */
"set_rule": Anonymize<I465k81tqg3usk>, 
/**
 *Make an announcement of a new IPFS CID about alliance issues.
 */
"announce": Anonymize<I54d7mcgvp9b3a>, 
/**
 *Remove an announcement.
 */
"remove_announcement": Anonymize<I54d7mcgvp9b3a>, 
/**
 *Submit oneself for candidacy. A fixed deposit is reserved.
 */
"join_alliance": undefined, 
/**
 *A Fellow can nominate someone to join the alliance as an Ally. There is no deposit
 *required from the nominator or nominee.
 */
"nominate_ally": Anonymize<Icu8seopr711dn>, 
/**
 *Elevate an Ally to Fellow.
 */
"elevate_ally": Anonymize<I5b0ekmddji72n>, 
/**
 *As a member, give a retirement notice and start a retirement period required to pass in
 *order to retire.
 */
"give_retirement_notice": undefined, 
/**
 *As a member, retire from the Alliance and unreserve the deposit.
 *
 *This can only be done once you have called `give_retirement_notice` and the
 *`RetirementPeriod` has passed.
 */
"retire": undefined, 
/**
 *Kick a member from the Alliance and slash its deposit.
 */
"kick_member": Anonymize<Icu8seopr711dn>, 
/**
 *Add accounts or websites to the list of unscrupulous items.
 */
"add_unscrupulous_items": Anonymize<Ickqr13ag0mv3c>, 
/**
 *Deem some items no longer unscrupulous.
 */
"remove_unscrupulous_items": Anonymize<Ickqr13ag0mv3c>, 
/**
 *Close a vote that is either approved, disapproved, or whose voting period has ended.
 *
 *Must be called by a Fellow.
 */
"close": Anonymize<Ib2obgji960euh>, 
/**
 *Abdicate one's position as a voting member and just be an Ally. May be used by Fellows
 *who do not want to leave the Alliance but do not have the capacity to participate
 *operationally for some time.
 */
"abdicate_fellow_status": undefined}>;

export type Icq0crsj7vrl4j = {"witness": {"fellow_members": number, "ally_members": number}};

export type I5b0ekmddji72n = {"ally": Anonymize<I4su1fqci7afjt>};

export type I6rgtpa34cubst = AnonymousEnum<{
/**
 *Stake funds with a pool. The amount to bond is delegated (or transferred based on
 *[`adapter::StakeStrategyType`]) from the member to the pool account and immediately
 *increases the pool's bond.
 *
 *The method of transferring the amount to the pool account is determined by
 *[`adapter::StakeStrategyType`]. If the pool is configured to use
 *[`adapter::StakeStrategyType::Delegate`], the funds remain in the account of
 *the `origin`, while the pool gains the right to use these funds for staking.
 *
 *# Note
 *
 ** An account can only be a member of a single pool.
 ** An account cannot join the same pool multiple times.
 ** This call will *not* dust the member account, so the member must have at least
 *  `existential deposit + amount` in their account.
 ** Only a pool with [`PoolState::Open`] can be joined
 */
"join": Anonymize<Ieg1oc56mamrl5>, 
/**
 *Bond `extra` more funds from `origin` into the pool to which they already belong.
 *
 *Additional funds can come from either the free balance of the account, of from the
 *accumulated rewards, see [`BondExtra`].
 *
 *Bonding extra funds implies an automatic payout of all pending rewards as well.
 *See `bond_extra_other` to bond pending rewards of `other` members.
 */
"bond_extra": Anonymize<I2vu5vj7173ik9>, 
/**
 *A bonded member can use this to claim their payout based on the rewards that the pool
 *has accumulated since their last claimed payout (OR since joining if this is their first
 *time claiming rewards). The payout will be transferred to the member's account.
 *
 *The member will earn rewards pro rata based on the members stake vs the sum of the
 *members in the pools stake. Rewards do not "expire".
 *
 *See `claim_payout_other` to claim rewards on behalf of some `other` pool member.
 */
"claim_payout": undefined, 
/**
 *Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It
 *implicitly collects the rewards one last time, since not doing so would mean some
 *rewards would be forfeited.
 *
 *Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
 *account).
 *
 *# Conditions for a permissionless dispatch.
 *
 ** The pool is blocked and the caller is either the root or bouncer. This is refereed to
 *  as a kick.
 ** The pool is destroying and the member is not the depositor.
 ** The pool is destroying, the member is the depositor and no other members are in the
 *  pool.
 *
 *## Conditions for permissioned dispatch (i.e. the caller is also the
 *`member_account`):
 *
 ** The caller is not the depositor.
 ** The caller is the depositor, the pool is destroying and no other members are in the
 *  pool.
 *
 *# Note
 *
 *If there are too many unlocking chunks to unbond with the pool account,
 *[`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks.
 *The [`StakingInterface::unbond`] will implicitly call [`Call::pool_withdraw_unbonded`]
 *to try to free chunks if necessary (ie. if unbound was called and no unlocking chunks
 *are available). However, it may not be possible to release the current unlocking chunks,
 *in which case, the result of this call will likely be the `NoMoreChunks` error from the
 *staking system.
 */
"unbond": Anonymize<Id70c5vciftf2i>, 
/**
 *Call `withdraw_unbonded` for the pools account. This call can be made by any account.
 *
 *This is useful if there are too many unlocking chunks to call `unbond`, and some
 *can be cleared by withdrawing. In the case there are too many unlocking chunks, the user
 *would probably see an error like `NoMoreChunks` emitted from the staking system when
 *they attempt to unbond.
 */
"pool_withdraw_unbonded": Anonymize<I36uoc8t9liv80>, 
/**
 *Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
 *error is returned.
 *
 *Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
 *account).
 *
 *# Conditions for a permissionless dispatch
 *
 ** The pool is in destroy mode and the target is not the depositor.
 ** The target is the depositor and they are the only member in the sub pools.
 ** The pool is blocked and the caller is either the root or bouncer.
 *
 *# Conditions for permissioned dispatch
 *
 ** The caller is the target and they are not the depositor.
 *
 *# Note
 *
 *- If the target is the depositor, the pool will be destroyed.
 *- If the pool has any pending slash, we also try to slash the member before letting them
 *withdraw. This calculation adds some weight overhead and is only defensive. In reality,
 *pool slashes must have been already applied via permissionless [`Call::apply_slash`].
 */
"withdraw_unbonded": Anonymize<I9iq45aekjq7kb>, 
/**
 *Create a new delegation pool.
 *
 *# Arguments
 *
 ** `amount` - The amount of funds to delegate to the pool. This also acts of a sort of
 *  deposit since the pools creator cannot fully unbond funds until the pool is being
 *  destroyed.
 ** `index` - A disambiguation index for creating the account. Likely only useful when
 *  creating multiple pools in the same extrinsic.
 ** `root` - The account to set as [`PoolRoles::root`].
 ** `nominator` - The account to set as the [`PoolRoles::nominator`].
 ** `bouncer` - The account to set as the [`PoolRoles::bouncer`].
 *
 *# Note
 *
 *In addition to `amount`, the caller will transfer the existential deposit; so the caller
 *needs at have at least `amount + existential_deposit` transferable.
 */
"create": Anonymize<I26ne2mpnrbqa5>, 
/**
 *Create a new delegation pool with a previously used pool id
 *
 *# Arguments
 *
 *same as `create` with the inclusion of
 ** `pool_id` - `A valid PoolId.
 */
"create_with_pool_id": Anonymize<I9tlpr80ot76ta>, 
/**
 *Nominate on behalf of the pool.
 *
 *The dispatch origin of this call must be signed by the pool nominator or the pool
 *root role.
 *
 *This directly forwards the call to an implementation of `StakingInterface` (e.g.,
 *`pallet-staking`) through [`Config::StakeAdapter`], on behalf of the bonded pool.
 *
 *# Note
 *
 *In addition to a `root` or `nominator` role of `origin`, the pool's depositor needs to
 *have at least `depositor_min_bond` in the pool to start nominating.
 */
"nominate": Anonymize<I47a2tsd2o2b1c>, 
/**
 *Set a new state for the pool.
 *
 *If a pool is already in the `Destroying` state, then under no condition can its state
 *change again.
 *
 *The dispatch origin of this call must be either:
 *
 *1. signed by the bouncer, or the root role of the pool,
 *2. if the pool conditions to be open are NOT met (as described by `ok_to_be_open`), and
 *   then the state of the pool can be permissionlessly changed to `Destroying`.
 */
"set_state": Anonymize<Ifc9k1s0e9nv8e>, 
/**
 *Set a new metadata for the pool.
 *
 *The dispatch origin of this call must be signed by the bouncer, or the root role of the
 *pool.
 */
"set_metadata": Anonymize<I4ihj26hl75e5p>, 
/**
 *Update configurations for the nomination pools. The origin for this call must be
 *[`Config::AdminOrigin`].
 *
 *# Arguments
 *
 ** `min_join_bond` - Set [`MinJoinBond`].
 ** `min_create_bond` - Set [`MinCreateBond`].
 ** `max_pools` - Set [`MaxPools`].
 ** `max_members` - Set [`MaxPoolMembers`].
 ** `max_members_per_pool` - Set [`MaxPoolMembersPerPool`].
 ** `global_max_commission` - Set [`GlobalMaxCommission`].
 */
"set_configs": Anonymize<I2dl8ekhm2t22h>, 
/**
 *Update the roles of the pool.
 *
 *The root is the only entity that can change any of the roles, including itself,
 *excluding the depositor, who can never change.
 *
 *It emits an event, notifying UIs of the role change. This event is quite relevant to
 *most pool members and they should be informed of changes to pool roles.
 */
"update_roles": Anonymize<I13us5e5h5645o>, 
/**
 *Chill on behalf of the pool.
 *
 *The dispatch origin of this call can be signed by the pool nominator or the pool
 *root role, same as [`Pallet::nominate`].
 *
 *This directly forwards the call to an implementation of `StakingInterface` (e.g.,
 *`pallet-staking`) through [`Config::StakeAdapter`], on behalf of the bonded pool.
 *
 *Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
 *account).
 *
 *# Conditions for a permissionless dispatch:
 ** When pool depositor has less than `MinNominatorBond` staked, otherwise pool members
 *  are unable to unbond.
 *
 *# Conditions for permissioned dispatch:
 ** The caller is the pool's nominator or root.
 */
"chill": Anonymize<I931cottvong90>, 
/**
 *`origin` bonds funds from `extra` for some pool member `member` into their respective
 *pools.
 *
 *`origin` can bond extra funds from free balance or pending rewards when `origin ==
 *other`.
 *
 *In the case of `origin != other`, `origin` can only bond extra pending rewards of
 *`other` members assuming set_claim_permission for the given member is
 *`PermissionlessCompound` or `PermissionlessAll`.
 */
"bond_extra_other": Anonymize<Ic4h0nvtu79ch6>, 
/**
 *Allows a pool member to set a claim permission to allow or disallow permissionless
 *bonding and withdrawing.
 *
 *# Arguments
 *
 ** `origin` - Member of a pool.
 ** `permission` - The permission to be applied.
 */
"set_claim_permission": Anonymize<I1ors0vru14it3>, 
/**
 *`origin` can claim payouts on some pool member `other`'s behalf.
 *
 *Pool member `other` must have a `PermissionlessWithdraw` or `PermissionlessAll` claim
 *permission for this call to be successful.
 */
"claim_payout_other": Anonymize<I40s11r8nagn2g>, 
/**
 *Set the commission of a pool.
 *Both a commission percentage and a commission payee must be provided in the `current`
 *tuple. Where a `current` of `None` is provided, any current commission will be removed.
 *
 *- If a `None` is supplied to `new_commission`, existing commission will be removed.
 */
"set_commission": Anonymize<I6bjj87fr5g9nl>, 
/**
 *Set the maximum commission of a pool.
 *
 *- Initial max can be set to any `Perbill`, and only smaller values thereafter.
 *- Current commission will be lowered in the event it is higher than a new max
 *  commission.
 */
"set_commission_max": Anonymize<I8cbluptqo8kbp>, 
/**
 *Set the commission change rate for a pool.
 *
 *Initial change rate is not bounded, whereas subsequent updates can only be more
 *restrictive than the current.
 */
"set_commission_change_rate": Anonymize<I81cc4plffa1dm>, 
/**
 *Claim pending commission.
 *
 *The `root` role of the pool is _always_ allowed to claim the pool's commission.
 *
 *If the pool has set `CommissionClaimPermission::Permissionless`, then any account can
 *trigger the process of claiming the pool's commission.
 *
 *If the pool has set its `CommissionClaimPermission` to `Account(acc)`, then only
 *accounts
 ** `acc`, and
 ** the pool's root account
 *
 *may call this extrinsic on behalf of the pool.
 *
 *Pending commissions are paid out and added to the total claimed commission.
 *The total pending commission is reset to zero.
 */
"claim_commission": Anonymize<I931cottvong90>, 
/**
 *Top up the deficit or withdraw the excess ED from the pool.
 *
 *When a pool is created, the pool depositor transfers ED to the reward account of the
 *pool. ED is subject to change and over time, the deposit in the reward account may be
 *insufficient to cover the ED deficit of the pool or vice-versa where there is excess
 *deposit to the pool. This call allows anyone to adjust the ED deposit of the
 *pool by either topping up the deficit or claiming the excess.
 */
"adjust_pool_deposit": Anonymize<I931cottvong90>, 
/**
 *Set or remove a pool's commission claim permission.
 *
 *Determines who can claim the pool's pending commission. Only the `Root` role of the pool
 *is able to configure commission claim permissions.
 */
"set_commission_claim_permission": Anonymize<I3ihan8icf0c5k>, 
/**
 *Apply a pending slash on a member.
 *
 *Fails unless [`crate::pallet::Config::StakeAdapter`] is of strategy type:
 *[`adapter::StakeStrategyType::Delegate`].
 *
 *The pending slash amount of the member must be equal or more than `ExistentialDeposit`.
 *This call can be dispatched permissionlessly (i.e. by any account). If the execution
 *is successful, fee is refunded and caller may be rewarded with a part of the slash
 *based on the [`crate::pallet::Config::StakeAdapter`] configuration.
 */
"apply_slash": Anonymize<I7aouqn0g9m7gc>, 
/**
 *Migrates delegated funds from the pool account to the `member_account`.
 *
 *Fails unless [`crate::pallet::Config::StakeAdapter`] is of strategy type:
 *[`adapter::StakeStrategyType::Delegate`].
 *
 *This is a permission-less call and refunds any fee if claim is successful.
 *
 *If the pool has migrated to delegation based staking, the staked tokens of pool members
 *can be moved and held in their own account. See [`adapter::DelegateStake`]
 */
"migrate_delegation": Anonymize<I7aouqn0g9m7gc>, 
/**
 *Migrate pool from [`adapter::StakeStrategyType::Transfer`] to
 *[`adapter::StakeStrategyType::Delegate`].
 *
 *Fails unless [`crate::pallet::Config::StakeAdapter`] is of strategy type:
 *[`adapter::StakeStrategyType::Delegate`].
 *
 *This call can be dispatched permissionlessly, and refunds any fee if successful.
 *
 *If the pool has already migrated to delegation based staking, this call will fail.
 */
"migrate_pool_to_delegate_stake": Anonymize<I931cottvong90>}>;

export type I2vu5vj7173ik9 = {"extra": NominationPoolsBondExtra};

export type NominationPoolsBondExtra = Enum<{"FreeBalance": bigint, "Rewards": undefined}>;
export const NominationPoolsBondExtra = _Enum as unknown as GetEnum<NominationPoolsBondExtra>;

export type Id70c5vciftf2i = {"member_account": Anonymize<I4su1fqci7afjt>, "unbonding_points": bigint};

export type I36uoc8t9liv80 = {"pool_id": number, "num_slashing_spans": number};

export type I9iq45aekjq7kb = {"member_account": Anonymize<I4su1fqci7afjt>, "num_slashing_spans": number};

export type I26ne2mpnrbqa5 = {"amount": bigint, "root": Anonymize<I4su1fqci7afjt>, "nominator": Anonymize<I4su1fqci7afjt>, "bouncer": Anonymize<I4su1fqci7afjt>};

export type I9tlpr80ot76ta = {"amount": bigint, "root": Anonymize<I4su1fqci7afjt>, "nominator": Anonymize<I4su1fqci7afjt>, "bouncer": Anonymize<I4su1fqci7afjt>, "pool_id": number};

export type I47a2tsd2o2b1c = {"pool_id": number, "validators": Anonymize<Ia2lhg7l2hilo3>};

export type Ifc9k1s0e9nv8e = {"pool_id": number, "state": NominationPoolsPoolState};

export type I4ihj26hl75e5p = {"pool_id": number, "metadata": Binary};

export type I2dl8ekhm2t22h = {"min_join_bond": StakingPalletConfigOpBig, "min_create_bond": StakingPalletConfigOpBig, "max_pools": StakingPalletConfigOp, "max_members": StakingPalletConfigOp, "max_members_per_pool": StakingPalletConfigOp, "global_max_commission": StakingPalletConfigOp};

export type I13us5e5h5645o = {"pool_id": number, "new_root": NominationPoolsConfigOp, "new_nominator": NominationPoolsConfigOp, "new_bouncer": NominationPoolsConfigOp};

export type NominationPoolsConfigOp = Enum<{"Noop": undefined, "Set": SS58String, "Remove": undefined}>;
export const NominationPoolsConfigOp = _Enum as unknown as GetEnum<NominationPoolsConfigOp>;

export type Ic4h0nvtu79ch6 = {"member": Anonymize<I4su1fqci7afjt>, "extra": NominationPoolsBondExtra};

export type I1ors0vru14it3 = {"permission": NominationPoolsClaimPermission};

export type I40s11r8nagn2g = {"other": SS58String};

export type I6bjj87fr5g9nl = {"pool_id": number, "new_commission"?: Anonymize<Ie8iutm7u02lmj>};

export type I7aouqn0g9m7gc = {"member_account": Anonymize<I4su1fqci7afjt>};

export type Ieblk40f65bn0b = AnonymousEnum<{
/**
 *Introduce a new member.
 *
 *- `origin`: Must be the `AddOrigin`.
 *- `who`: Account of non-member which will become a member.
 *
 *Weight: `O(1)`
 */
"add_member": Anonymize<Icu8seopr711dn>, 
/**
 *Increment the rank of an existing member by one.
 *
 *- `origin`: Must be the `PromoteOrigin`.
 *- `who`: Account of existing member.
 *
 *Weight: `O(1)`
 */
"promote_member": Anonymize<Icu8seopr711dn>, 
/**
 *Decrement the rank of an existing member by one. If the member is already at rank zero,
 *then they are removed entirely.
 *
 *- `origin`: Must be the `DemoteOrigin`.
 *- `who`: Account of existing member of rank greater than zero.
 *
 *Weight: `O(1)`, less if the member's index is highest in its rank.
 */
"demote_member": Anonymize<Icu8seopr711dn>, 
/**
 *Remove the member entirely.
 *
 *- `origin`: Must be the `RemoveOrigin`.
 *- `who`: Account of existing member of rank greater than zero.
 *- `min_rank`: The rank of the member or greater.
 *
 *Weight: `O(min_rank)`.
 */
"remove_member": Anonymize<Iddd2a11b8876r>, 
/**
 *Add an aye or nay vote for the sender to the given proposal.
 *
 *- `origin`: Must be `Signed` by a member account.
 *- `poll`: Index of a poll which is ongoing.
 *- `aye`: `true` if the vote is to approve the proposal, `false` otherwise.
 *
 *Transaction fees are be waived if the member is voting on any particular proposal
 *for the first time and the call is successful. Subsequent vote changes will charge a
 *fee.
 *
 *Weight: `O(1)`, less if there was no previous vote on the poll by the member.
 */
"vote": Anonymize<I8bvk21lpmah75>, 
/**
 *Remove votes from the given poll. It must have ended.
 *
 *- `origin`: Must be `Signed` by any account.
 *- `poll_index`: Index of a poll which is completed and for which votes continue to
 *  exist.
 *- `max`: Maximum number of vote items from remove in this call.
 *
 *Transaction fees are waived if the operation is successful.
 *
 *Weight `O(max)` (less if there are fewer items to remove than `max`).
 */
"cleanup_poll": Anonymize<I449n3riv6jbum>, 
/**
 *Exchanges a member with a new account and the same existing rank.
 *
 *- `origin`: Must be the `ExchangeOrigin`.
 *- `who`: Account of existing member of rank greater than zero to be exchanged.
 *- `new_who`: New Account of existing member of rank greater than zero to exchanged to.
 */
"exchange_member": Anonymize<I72edo3nnc5ukn>}>;

export type Iddd2a11b8876r = {"who": Anonymize<I4su1fqci7afjt>, "min_rank": number};

export type I8bvk21lpmah75 = {"poll": number, "aye": boolean};

export type I449n3riv6jbum = {"poll_index": number, "max": number};

export type I72edo3nnc5ukn = {"who": Anonymize<I4su1fqci7afjt>, "new_who": Anonymize<I4su1fqci7afjt>};

export type I7o18ptbflbguv = AnonymousEnum<{
/**
 *Creates an empty liquidity pool and an associated new `lp_token` asset
 *(the id of which is returned in the `Event::PoolCreated` event).
 *
 *Once a pool is created, someone may [`Pallet::add_liquidity`] to it.
 */
"create_pool": Anonymize<Ibot63dbdh2glr>, 
/**
 *Provide liquidity into the pool of `asset1` and `asset2`.
 *NOTE: an optimal amount of asset1 and asset2 will be calculated and
 *might be different than the provided `amount1_desired`/`amount2_desired`
 *thus you should provide the min amount you're happy to provide.
 *Params `amount1_min`/`amount2_min` represent that.
 *`mint_to` will be sent the liquidity tokens that represent this share of the pool.
 *
 *NOTE: when encountering an incorrect exchange rate and non-withdrawable pool liquidity,
 *batch an atomic call with [`Pallet::add_liquidity`] and
 *[`Pallet::swap_exact_tokens_for_tokens`] or [`Pallet::swap_tokens_for_exact_tokens`]
 *calls to render the liquidity withdrawable and rectify the exchange rate.
 *
 *Once liquidity is added, someone may successfully call
 *[`Pallet::swap_exact_tokens_for_tokens`].
 */
"add_liquidity": Anonymize<I159idlqohsibn>, 
/**
 *Allows you to remove liquidity by providing the `lp_token_burn` tokens that will be
 *burned in the process. With the usage of `amount1_min_receive`/`amount2_min_receive`
 *it's possible to control the min amount of returned tokens you're happy with.
 */
"remove_liquidity": Anonymize<Iakc63ljp5po9a>, 
/**
 *Swap the exact amount of `asset1` into `asset2`.
 *`amount_out_min` param allows you to specify the min amount of the `asset2`
 *you're happy to receive.
 *
 *[`AssetConversionApi::quote_price_exact_tokens_for_tokens`] runtime call can be called
 *for a quote.
 */
"swap_exact_tokens_for_tokens": Anonymize<Id3g8b5i00okmf>, 
/**
 *Swap any amount of `asset1` to get the exact amount of `asset2`.
 *`amount_in_max` param allows to specify the max amount of the `asset1`
 *you're happy to provide.
 *
 *[`AssetConversionApi::quote_price_tokens_for_exact_tokens`] runtime call can be called
 *for a quote.
 */
"swap_tokens_for_exact_tokens": Anonymize<I4te2k2l2kne4q>, 
/**
 *Touch an existing pool to fulfill prerequisites before providing liquidity, such as
 *ensuring that the pool's accounts are in place. It is typically useful when a pool
 *creator removes the pool's accounts and does not provide a liquidity. This action may
 *involve holding assets from the caller as a deposit for creating the pool's accounts.
 *
 *The origin must be Signed.
 *
 *- `asset1`: The asset ID of an existing pool with a pair (asset1, asset2).
 *- `asset2`: The asset ID of an existing pool with a pair (asset1, asset2).
 *
 *Emits `Touched` event when successful.
 */
"touch": Anonymize<Ibot63dbdh2glr>}>;

export type Ibot63dbdh2glr = {"asset1": Anonymize<Ikjpbtmstl9nm>, "asset2": Anonymize<Ikjpbtmstl9nm>};

export type I159idlqohsibn = {"asset1": Anonymize<Ikjpbtmstl9nm>, "asset2": Anonymize<Ikjpbtmstl9nm>, "amount1_desired": bigint, "amount2_desired": bigint, "amount1_min": bigint, "amount2_min": bigint, "mint_to": SS58String};

export type Iakc63ljp5po9a = {"asset1": Anonymize<Ikjpbtmstl9nm>, "asset2": Anonymize<Ikjpbtmstl9nm>, "lp_token_burn": bigint, "amount1_min_receive": bigint, "amount2_min_receive": bigint, "withdraw_to": SS58String};

export type Id3g8b5i00okmf = {"path": Anonymize<I12no2fg2bdffe>, "amount_in": bigint, "amount_out_min": bigint, "send_to": SS58String, "keep_alive": boolean};

export type I12no2fg2bdffe = Array<Anonymize<Ikjpbtmstl9nm>>;

export type I4te2k2l2kne4q = {"path": Anonymize<I12no2fg2bdffe>, "amount_out": bigint, "amount_in_max": bigint, "send_to": SS58String, "keep_alive": boolean};

export type I44snhj1gahvrd = AnonymousEnum<{
/**
 *Register oneself for fast-unstake.
 *
 *## Dispatch Origin
 *
 *The dispatch origin of this call must be *signed* by whoever is permitted to call
 *unbond funds by the staking system. See [`Config::Staking`].
 *
 *## Details
 *
 *The stash associated with the origin must have no ongoing unlocking chunks. If
 *successful, this will fully unbond and chill the stash. Then, it will enqueue the stash
 *to be checked in further blocks.
 *
 *If by the time this is called, the stash is actually eligible for fast-unstake, then
 *they are guaranteed to remain eligible, because the call will chill them as well.
 *
 *If the check works, the entire staking data is removed, i.e. the stash is fully
 *unstaked.
 *
 *If the check fails, the stash remains chilled and waiting for being unbonded as in with
 *the normal staking system, but they lose part of their unbonding chunks due to consuming
 *the chain's resources.
 *
 *## Events
 *
 *Some events from the staking and currency system might be emitted.
 */
"register_fast_unstake": undefined, 
/**
 *Deregister oneself from the fast-unstake.
 *
 *## Dispatch Origin
 *
 *The dispatch origin of this call must be *signed* by whoever is permitted to call
 *unbond funds by the staking system. See [`Config::Staking`].
 *
 *## Details
 *
 *This is useful if one is registered, they are still waiting, and they change their mind.
 *
 *Note that the associated stash is still fully unbonded and chilled as a consequence of
 *calling [`Pallet::register_fast_unstake`]. Therefore, this should probably be followed
 *by a call to `rebond` in the staking system.
 *
 *## Events
 *
 *Some events from the staking and currency system might be emitted.
 */
"deregister": undefined, 
/**
 *Control the operation of this pallet.
 *
 *## Dispatch Origin
 *
 *The dispatch origin of this call must be [`Config::ControlOrigin`].
 *
 *## Details
 *
 *Can set the number of eras to check per block, and potentially other admin work.
 *
 *## Events
 *
 *No events are emitted from this dispatch.
 */
"control": Anonymize<I9j0ul7nh7b8jv>}>;

export type I9j0ul7nh7b8jv = {"eras_to_check": number};

export type I2olt0k6t44a3l = AnonymousEnum<{
/**
 *Remove a page which has no more messages remaining to be processed or is stale.
 */
"reap_page": Anonymize<Ierp7e8nj861eo>, 
/**
 *Execute an overweight message.
 *
 *Temporary processing errors will be propagated whereas permanent errors are treated
 *as success condition.
 *
 *- `origin`: Must be `Signed`.
 *- `message_origin`: The origin from which the message to be executed arrived.
 *- `page`: The page in the queue in which the message to be executed is sitting.
 *- `index`: The index into the queue of the message to be executed.
 *- `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
 *  of the message.
 *
 *Benchmark complexity considerations: O(index + weight_limit).
 */
"execute_overweight": Anonymize<Ibgvds6gf6dbmm>}>;

export type Ierp7e8nj861eo = {"message_origin": number, "page_index": number};

export type Ibgvds6gf6dbmm = {"message_origin": number, "page": number, "index": number, "weight_limit": Anonymize<I4q39t5hn830vp>};

export type Ibv0scd734l9kl = AnonymousEnum<{"emit_event": undefined, "noop": undefined}>;

export type Ieci88jft3cpv9 = AnonymousEnum<{
/**
 *Pause a call.
 *
 *Can only be called by [`Config::PauseOrigin`].
 *Emits an [`Event::CallPaused`] event on success.
 */
"pause": Anonymize<Iba7pefg0d11kh>, 
/**
 *Un-pause a call.
 *
 *Can only be called by [`Config::UnpauseOrigin`].
 *Emits an [`Event::CallUnpaused`] event on success.
 */
"unpause": Anonymize<I2pjehun5ehh5i>}>;

export type I2pjehun5ehh5i = {"ident": Anonymize<Idkbvh6dahk1v7>};

export type I48eehof2eias5 = AnonymousEnum<{
/**
 *Enter safe-mode permissionlessly for [`Config::EnterDuration`] blocks.
 *
 *Reserves [`Config::EnterDepositAmount`] from the caller's account.
 *Emits an [`Event::Entered`] event on success.
 *Errors with [`Error::Entered`] if the safe-mode is already entered.
 *Errors with [`Error::NotConfigured`] if the deposit amount is `None`.
 */
"enter": undefined, 
/**
 *Enter safe-mode by force for a per-origin configured number of blocks.
 *
 *Emits an [`Event::Entered`] event on success.
 *Errors with [`Error::Entered`] if the safe-mode is already entered.
 *
 *Can only be called by the [`Config::ForceEnterOrigin`] origin.
 */
"force_enter": undefined, 
/**
 *Extend the safe-mode permissionlessly for [`Config::ExtendDuration`] blocks.
 *
 *This accumulates on top of the current remaining duration.
 *Reserves [`Config::ExtendDepositAmount`] from the caller's account.
 *Emits an [`Event::Extended`] event on success.
 *Errors with [`Error::Exited`] if the safe-mode is entered.
 *Errors with [`Error::NotConfigured`] if the deposit amount is `None`.
 *
 *This may be called by any signed origin with [`Config::ExtendDepositAmount`] free
 *currency to reserve. This call can be disabled for all origins by configuring
 *[`Config::ExtendDepositAmount`] to `None`.
 */
"extend": undefined, 
/**
 *Extend the safe-mode by force for a per-origin configured number of blocks.
 *
 *Emits an [`Event::Extended`] event on success.
 *Errors with [`Error::Exited`] if the safe-mode is inactive.
 *
 *Can only be called by the [`Config::ForceExtendOrigin`] origin.
 */
"force_extend": undefined, 
/**
 *Exit safe-mode by force.
 *
 *Emits an [`Event::Exited`] with [`ExitReason::Force`] event on success.
 *Errors with [`Error::Exited`] if the safe-mode is inactive.
 *
 *Note: `safe-mode` will be automatically deactivated by [`Pallet::on_initialize`] hook
 *after the block height is greater than the [`EnteredUntil`] storage item.
 *Emits an [`Event::Exited`] with [`ExitReason::Timeout`] event when deactivated in the
 *hook.
 */
"force_exit": undefined, 
/**
 *Slash a deposit for an account that entered or extended safe-mode at a given
 *historical block.
 *
 *This can only be called while safe-mode is entered.
 *
 *Emits a [`Event::DepositSlashed`] event on success.
 *Errors with [`Error::Entered`] if safe-mode is entered.
 *
 *Can only be called by the [`Config::ForceDepositOrigin`] origin.
 */
"force_slash_deposit": Anonymize<I1ssp78ejl639m>, 
/**
 *Permissionlessly release a deposit for an account that entered safe-mode at a
 *given historical block.
 *
 *The call can be completely disabled by setting [`Config::ReleaseDelay`] to `None`.
 *This cannot be called while safe-mode is entered and not until
 *[`Config::ReleaseDelay`] blocks have passed since safe-mode was entered.
 *
 *Emits a [`Event::DepositReleased`] event on success.
 *Errors with [`Error::Entered`] if the safe-mode is entered.
 *Errors with [`Error::CannotReleaseYet`] if [`Config::ReleaseDelay`] block have not
 *passed since safe-mode was entered. Errors with [`Error::NoDeposit`] if the payee has no
 *reserved currency at the block specified.
 */
"release_deposit": Anonymize<I1ssp78ejl639m>, 
/**
 *Force to release a deposit for an account that entered safe-mode at a given
 *historical block.
 *
 *This can be called while safe-mode is still entered.
 *
 *Emits a [`Event::DepositReleased`] event on success.
 *Errors with [`Error::Entered`] if safe-mode is entered.
 *Errors with [`Error::NoDeposit`] if the payee has no reserved currency at the
 *specified block.
 *
 *Can only be called by the [`Config::ForceDepositOrigin`] origin.
 */
"force_release_deposit": Anonymize<I1ssp78ejl639m>}>;

export type I1ssp78ejl639m = {"account": SS58String, "block": number};

export type I6nevotii2dffg = AnonymousEnum<{
/**
 *Configure the pallet.
 *
 *- `origin`: Must be Root or pass `AdminOrigin`.
 *- `config`: The configuration for this pallet.
 */
"configure": Anonymize<I4v4jc8ak5c8j7>, 
/**
 *Reserve a core for a workload.
 *
 *The workload will be given a reservation, but two sale period boundaries must pass
 *before the core is actually assigned.
 *
 *- `origin`: Must be Root or pass `AdminOrigin`.
 *- `workload`: The workload which should be permanently placed on a core.
 */
"reserve": Anonymize<Ieifvmse8ekofd>, 
/**
 *Cancel a reservation for a workload.
 *
 *- `origin`: Must be Root or pass `AdminOrigin`.
 *- `item_index`: The index of the reservation. Usually this will also be the index of the
 *  core on which the reservation has been scheduled. However, it is possible that if
 *  other cores are reserved or unreserved in the same sale rotation that they won't
 *  correspond, so it's better to look up the core properly in the `Reservations` storage.
 */
"unreserve": Anonymize<Iepja8rcbuaao2>, 
/**
 *Reserve a core for a single task workload for a limited period.
 *
 *In the interlude and sale period where Bulk Coretime is sold for the period immediately
 *after `until`, then the same workload may be renewed.
 *
 *- `origin`: Must be Root or pass `AdminOrigin`.
 *- `task`: The workload which should be placed on a core.
 *- `until`: The timeslice now earlier than which `task` should be placed as a workload on
 *  a core.
 */
"set_lease": Anonymize<I10gda06ia6n74>, 
/**
 *Begin the Bulk Coretime sales rotation.
 *
 *- `origin`: Must be Root or pass `AdminOrigin`.
 *- `end_price`: The price after the leadin period of Bulk Coretime in the first sale.
 *- `extra_cores`: Number of extra cores that should be requested on top of the cores
 *  required for `Reservations` and `Leases`.
 *
 *This will call [`Self::request_core_count`] internally to set the correct core count on
 *the relay chain.
 */
"start_sales": Anonymize<I6bqnueuk5semj>, 
/**
 *Purchase Bulk Coretime in the ongoing Sale.
 *
 *- `origin`: Must be a Signed origin with at least enough funds to pay the current price
 *  of Bulk Coretime.
 *- `price_limit`: An amount no more than which should be paid.
 */
"purchase": Anonymize<I268qbbcqfpqi0>, 
/**
 *Renew Bulk Coretime in the ongoing Sale or its prior Interlude Period.
 *
 *- `origin`: Must be a Signed origin with at least enough funds to pay the renewal price
 *  of the core.
 *- `core`: The core which should be renewed.
 */
"renew": Anonymize<Iaiqv5prlisjkg>, 
/**
 *Transfer a Bulk Coretime Region to a new owner.
 *
 *- `origin`: Must be a Signed origin of the account which owns the Region `region_id`.
 *- `region_id`: The Region whose ownership should change.
 *- `new_owner`: The new owner for the Region.
 */
"transfer": Anonymize<Ia3ebg5qshpkmr>, 
/**
 *Split a Bulk Coretime Region into two non-overlapping Regions at a particular time into
 *the region.
 *
 *- `origin`: Must be a Signed origin of the account which owns the Region `region_id`.
 *- `region_id`: The Region which should be partitioned into two non-overlapping Regions.
 *- `pivot`: The offset in time into the Region at which to make the split.
 */
"partition": Anonymize<Iagnp6gsiemekd>, 
/**
 *Split a Bulk Coretime Region into two wholly-overlapping Regions with complementary
 *interlace masks which together make up the original Region's interlace mask.
 *
 *- `origin`: Must be a Signed origin of the account which owns the Region `region_id`.
 *- `region_id`: The Region which should become two interlaced Regions of incomplete
 *  regularity.
 *- `pivot`: The interlace mask of one of the two new regions (the other is its partial
 *  complement).
 */
"interlace": Anonymize<I2uc90glvkisre>, 
/**
 *Assign a Bulk Coretime Region to a task.
 *
 *- `origin`: Must be a Signed origin of the account which owns the Region `region_id`.
 *- `region_id`: The Region which should be assigned to the task.
 *- `task`: The task to assign.
 *- `finality`: Indication of whether this assignment is final (in which case it may be
 *  eligible for renewal) or provisional (in which case it may be manipulated and/or
 *reassigned at a later stage).
 */
"assign": Anonymize<I7tcaqpipfe64i>, 
/**
 *Place a Bulk Coretime Region into the Instantaneous Coretime Pool.
 *
 *- `origin`: Must be a Signed origin of the account which owns the Region `region_id`.
 *- `region_id`: The Region which should be assigned to the Pool.
 *- `payee`: The account which is able to collect any revenue due for the usage of this
 *  Coretime.
 */
"pool": Anonymize<I6eqlfpqd4sp3a>, 
/**
 *Claim the revenue owed from inclusion in the Instantaneous Coretime Pool.
 *
 *- `origin`: Must be a Signed origin.
 *- `region_id`: The Region which was assigned to the Pool.
 *- `max_timeslices`: The maximum number of timeslices which should be processed. This
 *  must be greater than 0. This may affect the weight of the call but should be ideally
 *  made equivalent to the length of the Region `region_id`. If less, further dispatches
 *  will be required with the same `region_id` to claim revenue for the remainder.
 */
"claim_revenue": Anonymize<Ib2n01qni7h5uk>, 
/**
 *Purchase credit for use in the Instantaneous Coretime Pool.
 *
 *- `origin`: Must be a Signed origin able to pay at least `amount`.
 *- `amount`: The amount of credit to purchase.
 *- `beneficiary`: The account on the Relay-chain which controls the credit (generally
 *  this will be the collator's hot wallet).
 */
"purchase_credit": Anonymize<Idscf6boak49q1>, 
/**
 *Drop an expired Region from the chain.
 *
 *- `origin`: Can be any kind of origin.
 *- `region_id`: The Region which has expired.
 */
"drop_region": Anonymize<I4s60s3v5pfj6u>, 
/**
 *Drop an expired Instantaneous Pool Contribution record from the chain.
 *
 *- `origin`: Can be any kind of origin.
 *- `region_id`: The Region identifying the Pool Contribution which has expired.
 */
"drop_contribution": Anonymize<I4s60s3v5pfj6u>, 
/**
 *Drop an expired Instantaneous Pool History record from the chain.
 *
 *- `origin`: Can be any kind of origin.
 *- `region_id`: The time of the Pool History record which has expired.
 */
"drop_history": Anonymize<Ibtsa3docbr9el>, 
/**
 *Drop an expired Allowed Renewal record from the chain.
 *
 *- `origin`: Can be any kind of origin.
 *- `core`: The core to which the expired renewal refers.
 *- `when`: The timeslice to which the expired renewal refers. This must have passed.
 */
"drop_renewal": Anonymize<I3blejcb10m5c9>, 
/**
 *Request a change to the number of cores available for scheduling work.
 *
 *- `origin`: Must be Root or pass `AdminOrigin`.
 *- `core_count`: The desired number of cores to be made available.
 */
"request_core_count": Anonymize<I629ak383ovl28>, "notify_core_count": Anonymize<I629ak383ovl28>, "notify_revenue": Anonymize<I5cuv5a5cclsfd>, 
/**
 *Extrinsic for enabling auto renewal.
 *
 *Callable by the sovereign account of the task on the specified core. This account
 *will be charged at the start of every bulk period for renewing core time.
 *
 *- `origin`: Must be the sovereign account of the task
 *- `core`: The core to which the task to be renewed is currently assigned.
 *- `task`: The task for which we want to enable auto renewal.
 *- `workload_end_hint`: should be used when enabling auto-renewal for a core that is not
 *  expiring in the upcoming bulk period (e.g., due to holding a lease) since it would be
 *  inefficient to look up when the core expires to schedule the next renewal.
 */
"enable_auto_renew": Anonymize<Ie3qk84fi8j51k>, 
/**
 *Extrinsic for disabling auto renewal.
 *
 *Callable by the sovereign account of the task on the specified core.
 *
 *- `origin`: Must be the sovereign account of the task.
 *- `core`: The core for which we want to disable auto renewal.
 *- `task`: The task for which we want to disable auto renewal.
 */
"disable_auto_renew": Anonymize<I6td68h84ru5u7>, 
/**
 *Reserve a core for a workload immediately.
 *
 *- `origin`: Must be Root or pass `AdminOrigin`.
 *- `workload`: The workload which should be permanently placed on a core starting
 *  immediately.
 *- `core`: The core to which the assignment should be made until the reservation takes
 *  effect. It is left to the caller to either add this new core or reassign any other
 *  tasks to this existing core.
 *
 *This reserves the workload and then injects the workload into the Workplan for the next
 *two sale periods. This overwrites any existing assignments for this core at the start of
 *the next sale period.
 */
"force_reserve": Anonymize<Ickqtr6vqgluk1>, 
/**
 *Remove a lease.
 *
 *- `origin`: Must be Root or pass `AdminOrigin`.
 *- `task`: The task id of the lease which should be removed.
 */
"remove_lease": Anonymize<Ihqcf8k5b8c95>, 
/**
 *Remove an assignment from the Workplan.
 *
 *- `origin`: Must be Root or pass `AdminOrigin`.
 *- `region_id`: The Region to be removed from the workplan.
 */
"remove_assignment": Anonymize<I4s60s3v5pfj6u>, "swap_leases": Anonymize<Idehabrqi23sc0>}>;

export type I4v4jc8ak5c8j7 = {"config": Anonymize<Idrqj2ciheom9h>};

export type Idrqj2ciheom9h = {"advance_notice": number, "interlude_length": number, "leadin_length": number, "region_length": number, "ideal_bulk_proportion": number, "limit_cores_offered"?: Anonymize<I4arjljr6dpflb>, "renewal_bump": number, "contribution_timeout": number};

export type Ieifvmse8ekofd = {"workload": Anonymize<Ia7varbguadod5>};

export type Iepja8rcbuaao2 = {"item_index": number};

export type I6bqnueuk5semj = {"end_price": bigint, "extra_cores": number};

export type I268qbbcqfpqi0 = {"price_limit": bigint};

export type Iaiqv5prlisjkg = {"core": number};

export type Ia3ebg5qshpkmr = {"region_id": Anonymize<I1vf976h89f2ls>, "new_owner": SS58String};

export type Iagnp6gsiemekd = {"region_id": Anonymize<I1vf976h89f2ls>, "pivot": number};

export type I2uc90glvkisre = {"region_id": Anonymize<I1vf976h89f2ls>, "pivot": FixedSizeBinary<10>};

export type I7tcaqpipfe64i = {"region_id": Anonymize<I1vf976h89f2ls>, "task": number, "finality": Anonymize<Ic05brooqud431>};

export type Ic05brooqud431 = AnonymousEnum<{"Provisional": undefined, "Final": undefined}>;

export type I6eqlfpqd4sp3a = {"region_id": Anonymize<I1vf976h89f2ls>, "payee": SS58String, "finality": Anonymize<Ic05brooqud431>};

export type Ib2n01qni7h5uk = {"region_id": Anonymize<I1vf976h89f2ls>, "max_timeslices": number};

export type Idscf6boak49q1 = {"amount": bigint, "beneficiary": SS58String};

export type I5cuv5a5cclsfd = {"revenue": Anonymize<I6e7fsqs7vbr1g>};

export type I6e7fsqs7vbr1g = {"until": number, "amount": bigint};

export type Ie3qk84fi8j51k = {"core": number, "task": number, "workload_end_hint"?: Anonymize<I4arjljr6dpflb>};

export type Ickqtr6vqgluk1 = {"workload": Anonymize<Ia7varbguadod5>, "core": number};

export type Idehabrqi23sc0 = {"id": number, "other": number};

export type I8rnr4bl48odge = AnonymousEnum<{
/**
 *Register a mixnode for the following session.
 */
"register": Anonymize<I2knvr4mp5k6t3>}>;

export type I2knvr4mp5k6t3 = {"registration": {"block_number": number, "session_index": number, "authority_index": number, "mixnode": Anonymize<I8t75ej2kqe171>}, "signature": FixedSizeBinary<64>};

export type I8t75ej2kqe171 = {"kx_public": FixedSizeBinary<32>, "peer_id": FixedSizeBinary<32>, "external_addresses": Anonymize<Itom7fk49o0c9>};

export type I4s4165l7no8fu = AnonymousEnum<{
/**
 *Set the value of a parameter.
 *
 *The dispatch origin of this call must be `AdminOrigin` for the given `key`. Values be
 *deleted by setting them to `None`.
 */
"set_parameter": Anonymize<I7hcu151u49c2e>}>;

export type I7hcu151u49c2e = {"key_value": Enum<{"Storage": Enum<{"BaseDeposit": FixedSizeArray<1, Anonymize<I35p85j063s0il>>, "ByteDeposit": FixedSizeArray<1, Anonymize<I35p85j063s0il>>}>, "Referenda": Enum<{"Tracks": FixedSizeArray<1, (Anonymize<I6b8jvefm4nj77>) | undefined>, "Origins": FixedSizeArray<1, (Anonymize<Ifh8eaqh0mtosv>) | undefined>}>}>};

export type I3qrhf04krljif = AnonymousEnum<{
/**
 *Migrates an existing pool to a new account ID derivation method for a given asset pair.
 *If the migration is successful, transaction fees are refunded to the caller.
 *
 *Must be signed.
 */
"migrate_to_new_account": Anonymize<Ibot63dbdh2glr>}>;

export type I1h9ggbmsofrbr = AnonymousEnum<{
/**
 *A raw EVM transaction, typically dispatched by an Ethereum JSON-RPC server.
 *
 *# Parameters
 *
 ** `payload`: The encoded [`crate::evm::TransactionSigned`].
 ** `gas_limit`: The gas limit enforced during contract execution.
 ** `storage_deposit_limit`: The maximum balance that can be charged to the caller for
 *  storage usage.
 *
 *# Note
 *
 *This call cannot be dispatched directly; attempting to do so will result in a failed
 *transaction. It serves as a wrapper for an Ethereum transaction. When submitted, the
 *runtime converts it into a [`sp_runtime::generic::CheckedExtrinsic`] by recovering the
 *signer and validating the transaction.
 */
"eth_transact": Anonymize<Ida37oe44osb06>, 
/**
 *Makes a call to an account, optionally transferring some balance.
 *
 *# Parameters
 *
 ** `dest`: Address of the contract to call.
 ** `value`: The balance to transfer from the `origin` to `dest`.
 ** `gas_limit`: The gas limit enforced when executing the constructor.
 ** `storage_deposit_limit`: The maximum amount of balance that can be charged from the
 *  caller to pay for the storage consumed.
 ** `data`: The input data to pass to the contract.
 *
 ** If the account is a smart-contract account, the associated code will be
 *executed and any value will be transferred.
 ** If the account is a regular account, any value will be transferred.
 ** If no account exists and the call value is not less than `existential_deposit`,
 *a regular account will be created and any value will be transferred.
 */
"call": Anonymize<Idsg8aod8e8fqn>, 
/**
 *Instantiates a contract from a previously deployed wasm binary.
 *
 *This function is identical to [`Self::instantiate_with_code`] but without the
 *code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
 *must be supplied.
 */
"instantiate": Anonymize<I46nktn22m6hbi>, 
/**
 *Instantiates a new contract from the supplied `code` optionally transferring
 *some balance.
 *
 *This dispatchable has the same effect as calling [`Self::upload_code`] +
 *[`Self::instantiate`]. Bundling them together provides efficiency gains. Please
 *also check the documentation of [`Self::upload_code`].
 *
 *# Parameters
 *
 ** `value`: The balance to transfer from the `origin` to the newly created contract.
 ** `gas_limit`: The gas limit enforced when executing the constructor.
 ** `storage_deposit_limit`: The maximum amount of balance that can be charged/reserved
 *  from the caller to pay for the storage consumed.
 ** `code`: The contract code to deploy in raw bytes.
 ** `data`: The input data to pass to the contract constructor.
 ** `salt`: Used for the address derivation. If `Some` is supplied then `CREATE2`
 *	semantics are used. If `None` then `CRATE1` is used.
 *
 *
 *Instantiation is executed as follows:
 *
 *- The supplied `code` is deployed, and a `code_hash` is created for that code.
 *- If the `code_hash` already exists on the chain the underlying `code` will be shared.
 *- The destination address is computed based on the sender, code_hash and the salt.
 *- The smart-contract account is created at the computed address.
 *- The `value` is transferred to the new account.
 *- The `deploy` function is executed in the context of the newly-created account.
 */
"instantiate_with_code": Anonymize<Ibgj1cthra7lte>, 
/**
 *Upload new `code` without instantiating a contract from it.
 *
 *If the code does not already exist a deposit is reserved from the caller
 *and unreserved only when [`Self::remove_code`] is called. The size of the reserve
 *depends on the size of the supplied `code`.
 *
 *# Note
 *
 *Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
 *To avoid this situation a constructor could employ access control so that it can
 *only be instantiated by permissioned entities. The same is true when uploading
 *through [`Self::instantiate_with_code`].
 */
"upload_code": Anonymize<I10ra4g1rl6k2f>, 
/**
 *Remove the code stored under `code_hash` and refund the deposit to its owner.
 *
 *A code can only be removed by its original uploader (its owner) and only if it is
 *not used by any contract.
 */
"remove_code": Anonymize<Ib51vk42m1po4n>, 
/**
 *Privileged function that changes the code of an existing contract.
 *
 *This takes care of updating refcounts and all other necessary operations. Returns
 *an error if either the `code_hash` or `dest` do not exist.
 *
 *# Note
 *
 *This does **not** change the address of the contract in question. This means
 *that the contract address is no longer derived from its code hash after calling
 *this dispatchable.
 */
"set_code": Anonymize<I1uihehkdsggvp>, 
/**
 *Register the callers account id so that it can be used in contract interactions.
 *
 *This will error if the origin is already mapped or is a eth native `Address20`. It will
 *take a deposit that can be released by calling [`Self::unmap_account`].
 */
"map_account": undefined, 
/**
 *Unregister the callers account id in order to free the deposit.
 *
 *There is no reason to ever call this function other than freeing up the deposit.
 *This is only useful when the account should no longer be used.
 */
"unmap_account": undefined, 
/**
 *Dispatch an `call` with the origin set to the callers fallback address.
 *
 *Every `AccountId32` can control its corresponding fallback account. The fallback account
 *is the `AccountId20` with the last 12 bytes set to `0xEE`. This is essentially a
 *recovery function in case an `AccountId20` was used without creating a mapping first.
 */
"dispatch_as_fallback_account": Anonymize<I69f1ld7io445a>}>;

export type I4lp1aptof8ofk = AnonymousEnum<{
/**
 *Create a new reward pool.
 *
 *Parameters:
 *- `origin`: must be `Config::CreatePoolOrigin`;
 *- `staked_asset_id`: the asset to be staked in the pool;
 *- `reward_asset_id`: the asset to be distributed as rewards;
 *- `reward_rate_per_block`: the amount of reward tokens distributed per block;
 *- `expiry`: the block number at which the pool will cease to accumulate rewards. The
 *  [`DispatchTime::After`] variant evaluated at the execution time.
 *- `admin`: the account allowed to extend the pool expiration, increase the rewards rate
 *  and receive the unutilized reward tokens back after the pool completion. If `None`,
 *  the caller is set as an admin.
 */
"create_pool": Anonymize<I8auvvbbohsda3>, 
/**
 *Stake additional tokens in a pool.
 *
 *A freeze is placed on the staked tokens.
 */
"stake": Anonymize<Ieg1oc56mamrl5>, 
/**
 *Unstake tokens from a pool.
 *
 *Removes the freeze on the staked tokens.
 *
 *Parameters:
 *- origin: must be the `staker` if the pool is still active. Otherwise, any account.
 *- pool_id: the pool to unstake from.
 *- amount: the amount of tokens to unstake.
 *- staker: the account to unstake from. If `None`, the caller is used.
 */
"unstake": Anonymize<If4c254req52io>, 
/**
 *Harvest unclaimed pool rewards.
 *
 *Parameters:
 *- origin: must be the `staker` if the pool is still active. Otherwise, any account.
 *- pool_id: the pool to harvest from.
 *- staker: the account for which to harvest rewards. If `None`, the caller is used.
 */
"harvest_rewards": Anonymize<Ifvms3ocl3df16>, 
/**
 *Modify a pool reward rate.
 *
 *Currently the reward rate can only be increased.
 *
 *Only the pool admin may perform this operation.
 */
"set_pool_reward_rate_per_block": Anonymize<I3fl7kvh9tccu2>, 
/**
 *Modify a pool admin.
 *
 *Only the pool admin may perform this operation.
 */
"set_pool_admin": Anonymize<I51711mrb372ih>, 
/**
 *Set when the pool should expire.
 *
 *Currently the expiry block can only be extended.
 *
 *Only the pool admin may perform this operation.
 */
"set_pool_expiry_block": Anonymize<Iautv23q3c0gko>, 
/**
 *Convenience method to deposit reward tokens into a pool.
 *
 *This method is not strictly necessary (tokens could be transferred directly to the
 *pool pot address), but is provided for convenience so manual derivation of the
 *account id is not required.
 */
"deposit_reward_tokens": Anonymize<Ieg1oc56mamrl5>, 
/**
 *Cleanup a pool.
 *
 *Origin must be the pool admin.
 *
 *Cleanup storage, release any associated storage cost and return the remaining reward
 *tokens to the admin.
 */
"cleanup_pool": Anonymize<I931cottvong90>}>;

export type I8auvvbbohsda3 = {"staked_asset_id": Anonymize<Ikjpbtmstl9nm>, "reward_asset_id": Anonymize<Ikjpbtmstl9nm>, "reward_rate_per_block": bigint, "expiry": TraitsScheduleDispatchTime, "admin"?: Anonymize<Ihfphjolmsqq1>};

export type I7a1h2q26hdc5b = AnonymousEnum<{
/**
 *Dispatch a given meta transaction.
 *
 *- `_origin`: Can be any kind of origin.
 *- `meta_tx`: Meta Transaction with a target call to be dispatched.
 */
"dispatch": Anonymize<I6glqa9bl9962l>}>;

export type I6glqa9bl9962l = {"meta_tx": {"call": TxCallData, "extension_version": number, "extension": [Enum<{"Signed": {"signature": MultiSignature, "account": SS58String}, "Disabled": undefined}>, undefined, undefined, undefined, undefined, undefined, ExtensionsCheckMortality, number, Enum<{"Disabled": undefined, "Enabled": undefined}>]}};

export type ExtensionsCheckMortality = Enum<{"Immortal": undefined, "Mortal1": number, "Mortal2": number, "Mortal3": number, "Mortal4": number, "Mortal5": number, "Mortal6": number, "Mortal7": number, "Mortal8": number, "Mortal9": number, "Mortal10": number, "Mortal11": number, "Mortal12": number, "Mortal13": number, "Mortal14": number, "Mortal15": number, "Mortal16": number, "Mortal17": number, "Mortal18": number, "Mortal19": number, "Mortal20": number, "Mortal21": number, "Mortal22": number, "Mortal23": number, "Mortal24": number, "Mortal25": number, "Mortal26": number, "Mortal27": number, "Mortal28": number, "Mortal29": number, "Mortal30": number, "Mortal31": number, "Mortal32": number, "Mortal33": number, "Mortal34": number, "Mortal35": number, "Mortal36": number, "Mortal37": number, "Mortal38": number, "Mortal39": number, "Mortal40": number, "Mortal41": number, "Mortal42": number, "Mortal43": number, "Mortal44": number, "Mortal45": number, "Mortal46": number, "Mortal47": number, "Mortal48": number, "Mortal49": number, "Mortal50": number, "Mortal51": number, "Mortal52": number, "Mortal53": number, "Mortal54": number, "Mortal55": number, "Mortal56": number, "Mortal57": number, "Mortal58": number, "Mortal59": number, "Mortal60": number, "Mortal61": number, "Mortal62": number, "Mortal63": number, "Mortal64": number, "Mortal65": number, "Mortal66": number, "Mortal67": number, "Mortal68": number, "Mortal69": number, "Mortal70": number, "Mortal71": number, "Mortal72": number, "Mortal73": number, "Mortal74": number, "Mortal75": number, "Mortal76": number, "Mortal77": number, "Mortal78": number, "Mortal79": number, "Mortal80": number, "Mortal81": number, "Mortal82": number, "Mortal83": number, "Mortal84": number, "Mortal85": number, "Mortal86": number, "Mortal87": number, "Mortal88": number, "Mortal89": number, "Mortal90": number, "Mortal91": number, "Mortal92": number, "Mortal93": number, "Mortal94": number, "Mortal95": number, "Mortal96": number, "Mortal97": number, "Mortal98": number, "Mortal99": number, "Mortal100": number, "Mortal101": number, "Mortal102": number, "Mortal103": number, "Mortal104": number, "Mortal105": number, "Mortal106": number, "Mortal107": number, "Mortal108": number, "Mortal109": number, "Mortal110": number, "Mortal111": number, "Mortal112": number, "Mortal113": number, "Mortal114": number, "Mortal115": number, "Mortal116": number, "Mortal117": number, "Mortal118": number, "Mortal119": number, "Mortal120": number, "Mortal121": number, "Mortal122": number, "Mortal123": number, "Mortal124": number, "Mortal125": number, "Mortal126": number, "Mortal127": number, "Mortal128": number, "Mortal129": number, "Mortal130": number, "Mortal131": number, "Mortal132": number, "Mortal133": number, "Mortal134": number, "Mortal135": number, "Mortal136": number, "Mortal137": number, "Mortal138": number, "Mortal139": number, "Mortal140": number, "Mortal141": number, "Mortal142": number, "Mortal143": number, "Mortal144": number, "Mortal145": number, "Mortal146": number, "Mortal147": number, "Mortal148": number, "Mortal149": number, "Mortal150": number, "Mortal151": number, "Mortal152": number, "Mortal153": number, "Mortal154": number, "Mortal155": number, "Mortal156": number, "Mortal157": number, "Mortal158": number, "Mortal159": number, "Mortal160": number, "Mortal161": number, "Mortal162": number, "Mortal163": number, "Mortal164": number, "Mortal165": number, "Mortal166": number, "Mortal167": number, "Mortal168": number, "Mortal169": number, "Mortal170": number, "Mortal171": number, "Mortal172": number, "Mortal173": number, "Mortal174": number, "Mortal175": number, "Mortal176": number, "Mortal177": number, "Mortal178": number, "Mortal179": number, "Mortal180": number, "Mortal181": number, "Mortal182": number, "Mortal183": number, "Mortal184": number, "Mortal185": number, "Mortal186": number, "Mortal187": number, "Mortal188": number, "Mortal189": number, "Mortal190": number, "Mortal191": number, "Mortal192": number, "Mortal193": number, "Mortal194": number, "Mortal195": number, "Mortal196": number, "Mortal197": number, "Mortal198": number, "Mortal199": number, "Mortal200": number, "Mortal201": number, "Mortal202": number, "Mortal203": number, "Mortal204": number, "Mortal205": number, "Mortal206": number, "Mortal207": number, "Mortal208": number, "Mortal209": number, "Mortal210": number, "Mortal211": number, "Mortal212": number, "Mortal213": number, "Mortal214": number, "Mortal215": number, "Mortal216": number, "Mortal217": number, "Mortal218": number, "Mortal219": number, "Mortal220": number, "Mortal221": number, "Mortal222": number, "Mortal223": number, "Mortal224": number, "Mortal225": number, "Mortal226": number, "Mortal227": number, "Mortal228": number, "Mortal229": number, "Mortal230": number, "Mortal231": number, "Mortal232": number, "Mortal233": number, "Mortal234": number, "Mortal235": number, "Mortal236": number, "Mortal237": number, "Mortal238": number, "Mortal239": number, "Mortal240": number, "Mortal241": number, "Mortal242": number, "Mortal243": number, "Mortal244": number, "Mortal245": number, "Mortal246": number, "Mortal247": number, "Mortal248": number, "Mortal249": number, "Mortal250": number, "Mortal251": number, "Mortal252": number, "Mortal253": number, "Mortal254": number, "Mortal255": number}>;
export const ExtensionsCheckMortality = _Enum as unknown as GetEnum<ExtensionsCheckMortality>;

export type I99bb69usss9gs = {"index": number, "threshold": number, "ayes": Anonymize<Ia2lhg7l2hilo3>, "nays": Anonymize<Ia2lhg7l2hilo3>, "end": number};

export type I8nj9dlo7lnbb3 = Array<{"who": SS58String, "stake": bigint, "deposit": bigint}>;

export type Ib23vkkc52tqbu = {"votes": Anonymize<Ia2lhg7l2hilo3>, "stake": bigint, "deposit": bigint};

export type GrandpaStoredState = Enum<{"Live": undefined, "PendingPause": {"scheduled_at": number, "delay": number}, "Paused": undefined, "PendingResume": {"scheduled_at": number, "delay": number}}>;
export const GrandpaStoredState = _Enum as unknown as GetEnum<GrandpaStoredState>;

export type I7pe2me3i3vtn9 = {"scheduled_at": number, "delay": number, "next_authorities": Anonymize<I3geksg000c171>, "forced"?: Anonymize<I4arjljr6dpflb>};

export type Iegmj7n48sc3am = {"proposer": SS58String, "value": bigint, "beneficiary": SS58String, "bond": bigint};

export type I5eqns92ifde41 = {"asset_kind": Anonymize<Ikjpbtmstl9nm>, "amount": bigint, "beneficiary": SS58String, "valid_from": number, "expire_at": number, "status": Enum<{"Pending": undefined, "Attempted": Anonymize<I3m5sq54sjdlso>, "Failed": undefined}>};

export type I3m5sq54sjdlso = {};

export type I5kulbesqc1h1t = {"owner": SS58String, "deposit": bigint, "refcount": bigint, "determinism": Anonymize<I2dfliekq1ed7e>, "code_len": number};

export type I36dvimehsh2tm = {"trie_id": Binary, "code_hash": FixedSizeBinary<32>, "storage_bytes": number, "storage_items": number, "storage_byte_deposit": bigint, "storage_item_deposit": bigint, "storage_base_deposit": bigint, "delegate_dependencies": Anonymize<I3geksg000c171>};

export type I852a7otva6hbr = {"offender": Anonymize<Ifvqn3ldat80ai>, "reporters": Anonymize<Ia2lhg7l2hilo3>};

export type I23nq3fsgtejt = [FixedSizeBinary<16>, Binary];

export type I4pact7n2e9a0i = [FixedSizeBinary<32>, number];

export type I4ftk0glls7946 = {"judgements": Array<[number, IdentityJudgement]>, "deposit": bigint, "info": Anonymize<I1o57snqt6f4v5>};

export type I4nfjdef0ibh44 = [bigint, Anonymize<Ia2lhg7l2hilo3>];

export type I74af64m08r6as = Array<({"account": SS58String, "fee": bigint, "fields": bigint}) | undefined>;

export type Ic8ann3kre6vdm = {"account_id": SS58String, "allocation": number};

export type I1j72qfgdejqsv = {"owner": SS58String, "provider": Anonymize<Idib8jf3ve40bj>};

export type Idib8jf3ve40bj = AnonymousEnum<{"Allocation": undefined, "AuthorityDeposit": bigint, "System": undefined}>;

export type I60biiepd74113 = [SS58String, number, Anonymize<Idib8jf3ve40bj>];

export type Iam8qhv8b3jn4n = {"rank": number, "strikes": number, "vouching"?: (Enum<{"Vouching": undefined, "Banned": undefined}>) | undefined, "index": number};

export type I1659sf24o6ga8 = {"paid": bigint, "payouts": Anonymize<If9jidduiuq7vv>};

export type If9jidduiuq7vv = Array<Anonymize<I4ojmnsk1dchql>>;

export type Iehiasr6uoqbq = Array<{"who": SS58String, "kind": Anonymize<Iand3m1ru4ke2b>, "value": bigint}>;

export type Iand3m1ru4ke2b = AnonymousEnum<{"Deposit": bigint, "Vouch": Anonymize<I95l2k9b1re95f>}>;

export type I8adv0j4q3uu5d = {"round": number, "kind": Anonymize<Iand3m1ru4ke2b>, "bid": bigint, "tally": Anonymize<Ic4n54m09tc5na>, "skeptic_struck": boolean};

export type Ic4n54m09tc5na = {"approvals": number, "rejections": number};

export type I7d29ossbog0d3 = {"approve": boolean, "weight": number};

export type I7mgf69gvksvu2 = {"who": SS58String, "bid": bigint, "round": number};

export type I3sfg6klg56vmk = [SS58String, SS58String, Anonymize<Ic4n54m09tc5na>];

export type Ibprd8oi8phm62 = {"delay_period": number, "deposit": bigint, "friends": Anonymize<Ia2lhg7l2hilo3>, "threshold": number};

export type Idlqqo993i780l = {"created": number, "deposit": bigint, "friends": Anonymize<Ia2lhg7l2hilo3>};

export type Ifble4juuml5ig = Array<Anonymize<I4aro1m78pdrtt>>;

export type Id1m063t7aa0s0 = Array<({"maybe_id"?: Anonymize<I4s6vifaf8k998>, "priority": number, "call": PreimagesBounded, "maybe_periodic"?: Anonymize<Iep7au1720bm0e>, "origin": Anonymize<Ietipehah2qudc>}) | undefined>;

export type I56u24ncejr5kt = {"total_retries": number, "remaining": number, "period": number};

export type PreimageOldRequestStatus = Enum<{"Unrequested": {"deposit": Anonymize<I95l2k9b1re95f>, "len": number}, "Requested": {"deposit"?: Anonymize<I92hdo1clkbp4g>, "count": number, "len"?: Anonymize<I4arjljr6dpflb>}}>;
export const PreimageOldRequestStatus = _Enum as unknown as GetEnum<PreimageOldRequestStatus>;

export type I92hdo1clkbp4g = (Anonymize<I95l2k9b1re95f>) | undefined;

export type PreimageRequestStatus = Enum<{"Unrequested": {"ticket": Anonymize<I95l2k9b1re95f>, "len": number}, "Requested": {"maybe_ticket"?: Anonymize<I92hdo1clkbp4g>, "count": number, "maybe_len"?: Anonymize<I4arjljr6dpflb>}}>;
export const PreimageRequestStatus = _Enum as unknown as GetEnum<PreimageRequestStatus>;

export type Iagromhid5fjbs = [Array<{"delegate": SS58String, "proxy_type": Anonymize<I1bpip5bh5877p>, "delay": number}>, bigint];

export type Ict0fmb8krq1lk = {"proposer": SS58String, "value": bigint, "fee": bigint, "curator_deposit": bigint, "bond": bigint, "status": Enum<{"Proposed": undefined, "Approved": undefined, "Funded": undefined, "CuratorProposed": Anonymize<I846573mdj1pfn>, "Active": {"curator": SS58String, "update_due": number}, "PendingPayout": Anonymize<I4aulgjqrdphrm>, "ApprovedWithCurator": Anonymize<I846573mdj1pfn>}>};

export type I846573mdj1pfn = {"curator": SS58String};

export type I4aulgjqrdphrm = {"curator": SS58String, "beneficiary": SS58String, "unlock_at": number};

export type I8fkfedbgu1sn3 = {"reason": FixedSizeBinary<32>, "who": SS58String, "finder": SS58String, "deposit": bigint, "closes"?: Anonymize<I4arjljr6dpflb>, "tips": Anonymize<Iba9inugg1atvo>, "finders_fee": boolean};

export type I2fb54desdqd9n = Array<FixedSizeBinary<33>>;

export type Idjett00s2gd = {"id": bigint, "len": number, "keyset_commitment": FixedSizeBinary<32>};

export type Ibjfaoj07vq7bm = {"price": bigint, "start": number, "length": number, "delay": number, "repeat": boolean};

export type I2jh6l2jh6e48q = [number, Anonymize<I3d3qku31qb8k1>];

export type I3d3qku31qb8k1 = Array<FixedSizeBinary<2>>;

export type I2cqtnj49ogo81 = Array<Anonymize<Id5fm4p8lj5qgi>>;

export type I7btpfdeli5ea8 = {"proportion_owed": bigint, "index": number, "thawed": bigint, "last_period": number, "receipts_on_hold": bigint};

export type Ic79q40j9qptgh = {"proportion": bigint, "owner"?: Anonymize<I92hdo1clkbp4g>, "expiry": number};

export type Idg0lipm04tfnv = {"cycle_index": number, "cycle_start": number, "budget": bigint, "total_registrations": bigint, "total_unregistered_paid": bigint};

export type I1jg9tlsp39crs = {"last_active": number, "status": Enum<{"Nothing": undefined, "Registered": bigint, "Attempted": {"registered"?: Anonymize<I35p85j063s0il>, "amount": bigint}}>};

export type Iq1c24rdj7v7p = {"is_active": boolean, "last_promotion": number, "last_proof": number};

export type I9uq9b728jtlkj = [Anonymize<Iel6f1b4fu88cv>, Binary];

export type I2rese38jhn96u = Array<{"chunk_root": FixedSizeBinary<32>, "content_hash": FixedSizeBinary<32>, "size": number, "block_chunks": number}>;

export type Ic5t26f9cp3tvk = {"id": SS58String, "prev"?: Anonymize<Ihfphjolmsqq1>, "next"?: Anonymize<Ihfphjolmsqq1>, "bag_upper": bigint, "score": bigint};

export type I39k39h6vu4hbq = {"head"?: Anonymize<Ihfphjolmsqq1>, "tail"?: Anonymize<Ihfphjolmsqq1>};

export type Ibofbvvaehln4e = {"parent_bounty": number, "value": bigint, "fee": bigint, "curator_deposit": bigint, "status": ChildBountyStatus};

export type ChildBountyStatus = Enum<{"Added": undefined, "CuratorProposed": Anonymize<I846573mdj1pfn>, "Active": Anonymize<I846573mdj1pfn>, "PendingPayout": Anonymize<I4aulgjqrdphrm>}>;
export const ChildBountyStatus = _Enum as unknown as GetEnum<ChildBountyStatus>;

export type I9gejm5hh4mkft = AnonymousEnum<{"Ongoing": {"track": number, "origin": Anonymize<Ietipehah2qudc>, "proposal": PreimagesBounded, "enactment": TraitsScheduleDispatchTime, "submitted": number, "submission_deposit": Anonymize<Id5fm4p8lj5qgi>, "decision_deposit"?: Anonymize<Ibd24caul84kv2>, "deciding"?: Anonymize<Ibcbcndfmk0jd9>, "tally": Anonymize<Ifsk7cbmtit1jd>, "in_queue": boolean, "alarm"?: Anonymize<I3aj03qk2o5mdm>}, "Approved": Anonymize<Ini94eljn5lj8>, "Rejected": Anonymize<Ini94eljn5lj8>, "Cancelled": Anonymize<Ini94eljn5lj8>, "TimedOut": Anonymize<Ini94eljn5lj8>, "Killed": number}>;

export type Ibd24caul84kv2 = (Anonymize<Id5fm4p8lj5qgi>) | undefined;

export type Ibcbcndfmk0jd9 = ({"since": number, "confirming"?: Anonymize<I4arjljr6dpflb>}) | undefined;

export type I3aj03qk2o5mdm = ([number, Anonymize<I9jd27rnpm8ttv>]) | undefined;

export type Ini94eljn5lj8 = [number, Anonymize<Ibd24caul84kv2>, Anonymize<Ibd24caul84kv2>];

export type ConvictionVotingVoteVoting = Enum<{"Casting": {"votes": Array<[number, ConvictionVotingVoteAccountVote]>, "delegations": Anonymize<I538qha8r4j3ii>, "prior": Anonymize<I4ojmnsk1dchql>}, "Delegating": Anonymize<I251o9sbu5566f>}>;
export const ConvictionVotingVoteVoting = _Enum as unknown as GetEnum<ConvictionVotingVoteVoting>;

export type I26e9b3ail50ji = Array<Anonymize<I982189ri79b4u>>;

export type Iee1c44rpikfmk = AnonymousEnum<{"Fellow": undefined, "Ally": undefined, "Retiring": undefined}>;

export type Idphjddn2h69vc = {"pool_id": number, "points": bigint, "last_recorded_reward_counter": bigint, "unbonding_eras": Anonymize<If9jidduiuq7vv>};

export type Idhh9vuu2bderg = {"commission": {"current"?: Anonymize<Ie8iutm7u02lmj>, "max"?: Anonymize<I4arjljr6dpflb>, "change_rate"?: (Anonymize<Ibqul338t9c1ll>) | undefined, "throttle_from"?: Anonymize<I4arjljr6dpflb>, "claim_permission"?: Anonymize<I16m1kn78dee7v>}, "member_counter": number, "points": bigint, "roles": {"depositor": SS58String, "root"?: Anonymize<Ihfphjolmsqq1>, "nominator"?: Anonymize<Ihfphjolmsqq1>, "bouncer"?: Anonymize<Ihfphjolmsqq1>}, "state": NominationPoolsPoolState};

export type If6qa32dj75gu1 = {"last_recorded_reward_counter": bigint, "last_recorded_total_payouts": bigint, "total_rewards_claimed": bigint, "total_commission_pending": bigint, "total_commission_claimed": bigint};

export type I7oo2mprv1qd1s = {"no_era": Anonymize<I4h0cfnkiqrna6>, "with_era": Array<[number, Anonymize<I4h0cfnkiqrna6>]>};

export type I4h0cfnkiqrna6 = {"points": bigint, "balance": bigint};

export type I3sgecjud2cq27 = AnonymousEnum<{"Ongoing": {"track": number, "origin": Anonymize<Ietipehah2qudc>, "proposal": PreimagesBounded, "enactment": TraitsScheduleDispatchTime, "submitted": number, "submission_deposit": Anonymize<Id5fm4p8lj5qgi>, "decision_deposit"?: Anonymize<Ibd24caul84kv2>, "deciding"?: Anonymize<Ibcbcndfmk0jd9>, "tally": Anonymize<I6d634btv7misu>, "in_queue": boolean, "alarm"?: Anonymize<I3aj03qk2o5mdm>}, "Approved": Anonymize<Ini94eljn5lj8>, "Rejected": Anonymize<Ini94eljn5lj8>, "Cancelled": Anonymize<Ini94eljn5lj8>, "TimedOut": Anonymize<Ini94eljn5lj8>, "Killed": number}>;

export type I2eh80qovrl7h2 = {"stashes": Anonymize<Iba9inugg1atvo>, "checked": Anonymize<Icgljjb6j82uhn>};

export type Ic1h0rm1lg7jdb = {"begin": number, "end": number, "count": number, "ready_neighbours"?: ({"prev": number, "next": number}) | undefined, "message_count": bigint, "size": bigint};

export type I704rpeu2gigqg = Array<Anonymize<Ia7varbguadod5>>;

export type I27kh9vlj2hj16 = Array<Anonymize<I10gda06ia6n74>>;

export type I2uqrsj0afntbd = {"core_count": number, "private_pool_size": number, "system_pool_size": number, "last_committed_timeslice": number, "last_timeslice": number};

export type I79vd47rrrh0jl = {"sale_start": number, "leadin_length": number, "end_price": bigint, "region_begin": number, "region_end": number, "ideal_cores_sold": number, "cores_offered": number, "first_core": number, "sellout_price"?: Anonymize<I35p85j063s0il>, "cores_sold": number};

export type I85i5336l26o5a = {"price": bigint, "completion": Enum<{"Partial": FixedSizeBinary<10>, "Complete": Anonymize<Ia7varbguadod5>}>};

export type I4amfhnpegtv8t = {"end": number, "owner"?: Anonymize<Ihfphjolmsqq1>, "paid"?: Anonymize<I35p85j063s0il>};

export type I81fgiotlbkabs = {"length": number, "payee": SS58String};

export type Ifsa7722foeg4l = {"private": number, "system": number};

export type I6a7jeqava2tob = {"private_contributions": number, "system_contributions": number, "maybe_payout"?: Anonymize<I35p85j063s0il>};

export type Iarmmkrn32a2vr = Array<{"core": number, "task": number, "next_renewal": number}>;

export type I542q009qbgt8k = {"agent": SS58String, "amount": bigint};

export type I4e5ujckjq61g8 = {"payee": SS58String, "total_delegated": bigint, "unclaimed_withdrawals": bigint, "pending_slash": bigint};

export type I2k7bcpideh98v = {"staked_asset_id": Anonymize<Ikjpbtmstl9nm>, "reward_asset_id": Anonymize<Ikjpbtmstl9nm>, "reward_rate_per_block": bigint, "expiry_block": number, "admin": SS58String, "total_tokens_staked": bigint, "reward_per_token_stored": bigint, "last_update_block": number, "account": SS58String};

export type Ijc5n210o8bbf = {"limits": {"event_topics": number, "memory_pages": number, "subject_len": number, "payload_len": number, "runtime_memory": number, "validator_runtime_memory": number, "event_ref_time": bigint}, "instruction_weights": number};

export type Ibafpkl9hhno69 = Array<[number, {"name": string, "max_deciding": number, "decision_deposit": bigint, "prepare_period": number, "decision_period": number, "confirm_period": number, "min_enactment_period": number, "min_approval": ReferendaTypesCurve, "min_support": ReferendaTypesCurve}]>;

export type I4gil44d08grh = {"prefix": FixedSizeBinary<16>, "suffix": FixedSizeBinary<16>};

export type I7u915mvkdsb08 = ResultPayload<Binary, Enum<{"NotImplemented": undefined, "NotFound": Anonymize<I4gil44d08grh>, "Codec": undefined}>>;

export type I55h881g36tov5 = ResultPayload<Anonymize<I4lj7jffoad80h>, Anonymize<I5nrjkj9qumobs>>;

export type Ico18ks790i2bl = AnonymousEnum<{"Chain": undefined, "Network": undefined, "Local": undefined}>;

export type I3ju6ot8lfmk90 = ResultPayload<{"max_count": number, "max_size": number}, Enum<{"BadProof": undefined, "NoProof": undefined, "InternalError": undefined}>>;

export type Iems84l8lk2v0c = {"slot_duration": bigint, "epoch_length": bigint, "c": Anonymize<I200n1ov5tbcvr>, "authorities": Anonymize<I3geksg000c171>, "randomness": FixedSizeBinary<32>, "allowed_slots": BabeAllowedSlots};

export type I1r5ke30ueqo0r = {"epoch_index": bigint, "start_slot": bigint, "duration": bigint, "authorities": Anonymize<I3geksg000c171>, "randomness": FixedSizeBinary<32>, "config": Anonymize<I8jnd4d8ip6djo>};

export type I6a6gvonq8it1i = {"gas_consumed": Anonymize<I4q39t5hn830vp>, "gas_required": Anonymize<I4q39t5hn830vp>, "storage_deposit": Anonymize<If7bmpttbdmqu4>, "debug_message": Binary, "result": Anonymize<Ie5lond6vjbmdo>, "events"?: Anonymize<I6vmornpakrq4m>};

export type Ie5lond6vjbmdo = ResultPayload<Anonymize<I620n7irgfspm4>, Anonymize<I2nd362qiea9l6>>;

export type I6vmornpakrq4m = (Anonymize<I5tgt1oqpjc7ju>) | undefined;

export type Ienisfsqbarr05 = {"gas_consumed": Anonymize<I4q39t5hn830vp>, "gas_required": Anonymize<I4q39t5hn830vp>, "storage_deposit": Anonymize<If7bmpttbdmqu4>, "debug_message": Binary, "result": ResultPayload<{"result": Anonymize<I620n7irgfspm4>, "account_id": SS58String}, Anonymize<I2nd362qiea9l6>>, "events"?: Anonymize<I6vmornpakrq4m>};

export type I3dngd2aonvofh = ResultPayload<Anonymize<Icjs1v5avc8kdj>, Anonymize<I2nd362qiea9l6>>;

export type I9u22scd4ksrjm = ResultPayload<Anonymize<Iabpgqcjikia83>, Enum<{"DoesntExist": undefined, "KeyDecodingFailed": undefined, "MigrationInProgress": undefined}>>;

export type I1u4l93pempgj5 = {"gas_consumed": Anonymize<I4q39t5hn830vp>, "gas_required": Anonymize<I4q39t5hn830vp>, "storage_deposit": Anonymize<If7bmpttbdmqu4>, "result": Anonymize<Ie5lond6vjbmdo>};

export type I1g2d1ppc4v2e2 = {"gas_consumed": Anonymize<I4q39t5hn830vp>, "gas_required": Anonymize<I4q39t5hn830vp>, "storage_deposit": Anonymize<If7bmpttbdmqu4>, "result": ResultPayload<Anonymize<I6cm3omaniofs7>, Anonymize<I2nd362qiea9l6>>};

export type Ifogo2hpqpe6b4 = ({"validators": Anonymize<I2fb54desdqd9n>, "id": bigint}) | undefined;

export type I25plekc1moieu = {"vote": Anonymize<I3eao7ea0kppv8>, "ancestry_proof": Binary, "header": Anonymize<Ic952bubvq4k7d>};

export type I7rj2bnb76oko1 = ResultPayload<FixedSizeBinary<32>, MmrPrimitivesError>;

export type MmrPrimitivesError = Enum<{"InvalidNumericOp": undefined, "Push": undefined, "GetRoot": undefined, "Commit": undefined, "GenerateProof": undefined, "Verify": undefined, "LeafNotFound": undefined, "PalletNotIncluded": undefined, "InvalidLeafIndex": undefined, "InvalidBestKnownBlock": undefined}>;
export const MmrPrimitivesError = _Enum as unknown as GetEnum<MmrPrimitivesError>;

export type I4o356o7eq06ms = ResultPayload<bigint, MmrPrimitivesError>;

export type I46e127tr8ma2h = ResultPayload<[Anonymize<Itom7fk49o0c9>, Anonymize<I38ee9is0n4jn9>], MmrPrimitivesError>;

export type I38ee9is0n4jn9 = {"leaf_indices": Anonymize<Iafqnechp3omqg>, "leaf_count": bigint, "items": Anonymize<Ic5m5lp1oioo8r>};

export type Ie88mmnuvmuvp5 = ResultPayload<undefined, MmrPrimitivesError>;

export type Idp7c8fe2gno1b = {"current_index": number, "phase": Enum<{"CoverToCurrent": undefined, "RequestsToCurrent": undefined, "CoverToPrev": undefined, "DisconnectFromPrev": undefined}>};

export type I2q4hkchnhgjdq = ResultPayload<Array<Anonymize<I8t75ej2kqe171>>, Enum<{"InsufficientRegistrations": {"num": number, "min": number}}>>;
  