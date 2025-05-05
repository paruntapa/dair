
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Validator
 * 
 */
export type Validator = $Result.DefaultSelection<Prisma.$ValidatorPayload>
/**
 * Model Place
 * 
 */
export type Place = $Result.DefaultSelection<Prisma.$PlacePayload>
/**
 * Model AirQuality
 * 
 */
export type AirQuality = $Result.DefaultSelection<Prisma.$AirQualityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AirStatus: {
  GOOD: 'GOOD',
  MODERATE: 'MODERATE',
  UNHEALTHY: 'UNHEALTHY',
  VERY_UNHEALTHY: 'VERY_UNHEALTHY',
  SEVERE: 'SEVERE',
  CRITICAL: 'CRITICAL'
};

export type AirStatus = (typeof AirStatus)[keyof typeof AirStatus]

}

export type AirStatus = $Enums.AirStatus

export const AirStatus: typeof $Enums.AirStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.validator`: Exposes CRUD operations for the **Validator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Validators
    * const validators = await prisma.validator.findMany()
    * ```
    */
  get validator(): Prisma.ValidatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.place`: Exposes CRUD operations for the **Place** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Places
    * const places = await prisma.place.findMany()
    * ```
    */
  get place(): Prisma.PlaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.airQuality`: Exposes CRUD operations for the **AirQuality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AirQualities
    * const airQualities = await prisma.airQuality.findMany()
    * ```
    */
  get airQuality(): Prisma.AirQualityDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Validator: 'Validator',
    Place: 'Place',
    AirQuality: 'AirQuality'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "validator" | "place" | "airQuality"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Validator: {
        payload: Prisma.$ValidatorPayload<ExtArgs>
        fields: Prisma.ValidatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValidatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValidatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorPayload>
          }
          findFirst: {
            args: Prisma.ValidatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValidatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorPayload>
          }
          findMany: {
            args: Prisma.ValidatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorPayload>[]
          }
          create: {
            args: Prisma.ValidatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorPayload>
          }
          createMany: {
            args: Prisma.ValidatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ValidatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorPayload>[]
          }
          delete: {
            args: Prisma.ValidatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorPayload>
          }
          update: {
            args: Prisma.ValidatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorPayload>
          }
          deleteMany: {
            args: Prisma.ValidatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValidatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ValidatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorPayload>[]
          }
          upsert: {
            args: Prisma.ValidatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValidatorPayload>
          }
          aggregate: {
            args: Prisma.ValidatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValidator>
          }
          groupBy: {
            args: Prisma.ValidatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValidatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ValidatorCountArgs<ExtArgs>
            result: $Utils.Optional<ValidatorCountAggregateOutputType> | number
          }
        }
      }
      Place: {
        payload: Prisma.$PlacePayload<ExtArgs>
        fields: Prisma.PlaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findFirst: {
            args: Prisma.PlaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findMany: {
            args: Prisma.PlaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          create: {
            args: Prisma.PlaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          createMany: {
            args: Prisma.PlaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          delete: {
            args: Prisma.PlaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          update: {
            args: Prisma.PlaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          deleteMany: {
            args: Prisma.PlaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          upsert: {
            args: Prisma.PlaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          aggregate: {
            args: Prisma.PlaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlace>
          }
          groupBy: {
            args: Prisma.PlaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaceCountArgs<ExtArgs>
            result: $Utils.Optional<PlaceCountAggregateOutputType> | number
          }
        }
      }
      AirQuality: {
        payload: Prisma.$AirQualityPayload<ExtArgs>
        fields: Prisma.AirQualityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AirQualityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirQualityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AirQualityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirQualityPayload>
          }
          findFirst: {
            args: Prisma.AirQualityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirQualityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AirQualityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirQualityPayload>
          }
          findMany: {
            args: Prisma.AirQualityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirQualityPayload>[]
          }
          create: {
            args: Prisma.AirQualityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirQualityPayload>
          }
          createMany: {
            args: Prisma.AirQualityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AirQualityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirQualityPayload>[]
          }
          delete: {
            args: Prisma.AirQualityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirQualityPayload>
          }
          update: {
            args: Prisma.AirQualityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirQualityPayload>
          }
          deleteMany: {
            args: Prisma.AirQualityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AirQualityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AirQualityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirQualityPayload>[]
          }
          upsert: {
            args: Prisma.AirQualityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirQualityPayload>
          }
          aggregate: {
            args: Prisma.AirQualityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAirQuality>
          }
          groupBy: {
            args: Prisma.AirQualityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AirQualityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AirQualityCountArgs<ExtArgs>
            result: $Utils.Optional<AirQualityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    validator?: ValidatorOmit
    place?: PlaceOmit
    airQuality?: AirQualityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    place: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place?: boolean | UserCountOutputTypeCountPlaceArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceWhereInput
  }


  /**
   * Count Type PlaceCountOutputType
   */

  export type PlaceCountOutputType = {
    airQuality: number
  }

  export type PlaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airQuality?: boolean | PlaceCountOutputTypeCountAirQualityArgs
  }

  // Custom InputTypes
  /**
   * PlaceCountOutputType without action
   */
  export type PlaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceCountOutputType
     */
    select?: PlaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaceCountOutputType without action
   */
  export type PlaceCountOutputTypeCountAirQualityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirQualityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
    placeId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
    placeId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    walletAddress: number
    createdAt: number
    updatedAt: number
    placeId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    walletAddress?: true
    createdAt?: true
    updatedAt?: true
    placeId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    walletAddress?: true
    createdAt?: true
    updatedAt?: true
    placeId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    walletAddress?: true
    createdAt?: true
    updatedAt?: true
    placeId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    walletAddress: string
    createdAt: Date
    updatedAt: Date
    placeId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    placeId?: boolean
    place?: boolean | User$placeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    placeId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    placeId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    placeId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletAddress" | "createdAt" | "updatedAt" | "placeId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place?: boolean | User$placeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      place: Prisma.$PlacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletAddress: string
      createdAt: Date
      updatedAt: Date
      placeId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    place<T extends User$placeArgs<ExtArgs> = {}>(args?: Subset<T, User$placeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly walletAddress: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly placeId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.place
   */
  export type User$placeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    where?: PlaceWhereInput
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    cursor?: PlaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Validator
   */

  export type AggregateValidator = {
    _count: ValidatorCountAggregateOutputType | null
    _min: ValidatorMinAggregateOutputType | null
    _max: ValidatorMaxAggregateOutputType | null
  }

  export type ValidatorMinAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ValidatorMaxAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ValidatorCountAggregateOutputType = {
    id: number
    walletAddress: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ValidatorMinAggregateInputType = {
    id?: true
    walletAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ValidatorMaxAggregateInputType = {
    id?: true
    walletAddress?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ValidatorCountAggregateInputType = {
    id?: true
    walletAddress?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ValidatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Validator to aggregate.
     */
    where?: ValidatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validators to fetch.
     */
    orderBy?: ValidatorOrderByWithRelationInput | ValidatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValidatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Validators
    **/
    _count?: true | ValidatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValidatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValidatorMaxAggregateInputType
  }

  export type GetValidatorAggregateType<T extends ValidatorAggregateArgs> = {
        [P in keyof T & keyof AggregateValidator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValidator[P]>
      : GetScalarType<T[P], AggregateValidator[P]>
  }




  export type ValidatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValidatorWhereInput
    orderBy?: ValidatorOrderByWithAggregationInput | ValidatorOrderByWithAggregationInput[]
    by: ValidatorScalarFieldEnum[] | ValidatorScalarFieldEnum
    having?: ValidatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValidatorCountAggregateInputType | true
    _min?: ValidatorMinAggregateInputType
    _max?: ValidatorMaxAggregateInputType
  }

  export type ValidatorGroupByOutputType = {
    id: string
    walletAddress: string
    createdAt: Date
    updatedAt: Date
    _count: ValidatorCountAggregateOutputType | null
    _min: ValidatorMinAggregateOutputType | null
    _max: ValidatorMaxAggregateOutputType | null
  }

  type GetValidatorGroupByPayload<T extends ValidatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValidatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValidatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValidatorGroupByOutputType[P]>
            : GetScalarType<T[P], ValidatorGroupByOutputType[P]>
        }
      >
    >


  export type ValidatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["validator"]>

  export type ValidatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["validator"]>

  export type ValidatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["validator"]>

  export type ValidatorSelectScalar = {
    id?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ValidatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletAddress" | "createdAt" | "updatedAt", ExtArgs["result"]["validator"]>

  export type $ValidatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Validator"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletAddress: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["validator"]>
    composites: {}
  }

  type ValidatorGetPayload<S extends boolean | null | undefined | ValidatorDefaultArgs> = $Result.GetResult<Prisma.$ValidatorPayload, S>

  type ValidatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValidatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValidatorCountAggregateInputType | true
    }

  export interface ValidatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Validator'], meta: { name: 'Validator' } }
    /**
     * Find zero or one Validator that matches the filter.
     * @param {ValidatorFindUniqueArgs} args - Arguments to find a Validator
     * @example
     * // Get one Validator
     * const validator = await prisma.validator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValidatorFindUniqueArgs>(args: SelectSubset<T, ValidatorFindUniqueArgs<ExtArgs>>): Prisma__ValidatorClient<$Result.GetResult<Prisma.$ValidatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Validator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValidatorFindUniqueOrThrowArgs} args - Arguments to find a Validator
     * @example
     * // Get one Validator
     * const validator = await prisma.validator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValidatorFindUniqueOrThrowArgs>(args: SelectSubset<T, ValidatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValidatorClient<$Result.GetResult<Prisma.$ValidatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Validator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorFindFirstArgs} args - Arguments to find a Validator
     * @example
     * // Get one Validator
     * const validator = await prisma.validator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValidatorFindFirstArgs>(args?: SelectSubset<T, ValidatorFindFirstArgs<ExtArgs>>): Prisma__ValidatorClient<$Result.GetResult<Prisma.$ValidatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Validator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorFindFirstOrThrowArgs} args - Arguments to find a Validator
     * @example
     * // Get one Validator
     * const validator = await prisma.validator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValidatorFindFirstOrThrowArgs>(args?: SelectSubset<T, ValidatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValidatorClient<$Result.GetResult<Prisma.$ValidatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Validators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Validators
     * const validators = await prisma.validator.findMany()
     * 
     * // Get first 10 Validators
     * const validators = await prisma.validator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const validatorWithIdOnly = await prisma.validator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ValidatorFindManyArgs>(args?: SelectSubset<T, ValidatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Validator.
     * @param {ValidatorCreateArgs} args - Arguments to create a Validator.
     * @example
     * // Create one Validator
     * const Validator = await prisma.validator.create({
     *   data: {
     *     // ... data to create a Validator
     *   }
     * })
     * 
     */
    create<T extends ValidatorCreateArgs>(args: SelectSubset<T, ValidatorCreateArgs<ExtArgs>>): Prisma__ValidatorClient<$Result.GetResult<Prisma.$ValidatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Validators.
     * @param {ValidatorCreateManyArgs} args - Arguments to create many Validators.
     * @example
     * // Create many Validators
     * const validator = await prisma.validator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValidatorCreateManyArgs>(args?: SelectSubset<T, ValidatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Validators and returns the data saved in the database.
     * @param {ValidatorCreateManyAndReturnArgs} args - Arguments to create many Validators.
     * @example
     * // Create many Validators
     * const validator = await prisma.validator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Validators and only return the `id`
     * const validatorWithIdOnly = await prisma.validator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ValidatorCreateManyAndReturnArgs>(args?: SelectSubset<T, ValidatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Validator.
     * @param {ValidatorDeleteArgs} args - Arguments to delete one Validator.
     * @example
     * // Delete one Validator
     * const Validator = await prisma.validator.delete({
     *   where: {
     *     // ... filter to delete one Validator
     *   }
     * })
     * 
     */
    delete<T extends ValidatorDeleteArgs>(args: SelectSubset<T, ValidatorDeleteArgs<ExtArgs>>): Prisma__ValidatorClient<$Result.GetResult<Prisma.$ValidatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Validator.
     * @param {ValidatorUpdateArgs} args - Arguments to update one Validator.
     * @example
     * // Update one Validator
     * const validator = await prisma.validator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValidatorUpdateArgs>(args: SelectSubset<T, ValidatorUpdateArgs<ExtArgs>>): Prisma__ValidatorClient<$Result.GetResult<Prisma.$ValidatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Validators.
     * @param {ValidatorDeleteManyArgs} args - Arguments to filter Validators to delete.
     * @example
     * // Delete a few Validators
     * const { count } = await prisma.validator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValidatorDeleteManyArgs>(args?: SelectSubset<T, ValidatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Validators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Validators
     * const validator = await prisma.validator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValidatorUpdateManyArgs>(args: SelectSubset<T, ValidatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Validators and returns the data updated in the database.
     * @param {ValidatorUpdateManyAndReturnArgs} args - Arguments to update many Validators.
     * @example
     * // Update many Validators
     * const validator = await prisma.validator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Validators and only return the `id`
     * const validatorWithIdOnly = await prisma.validator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ValidatorUpdateManyAndReturnArgs>(args: SelectSubset<T, ValidatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValidatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Validator.
     * @param {ValidatorUpsertArgs} args - Arguments to update or create a Validator.
     * @example
     * // Update or create a Validator
     * const validator = await prisma.validator.upsert({
     *   create: {
     *     // ... data to create a Validator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Validator we want to update
     *   }
     * })
     */
    upsert<T extends ValidatorUpsertArgs>(args: SelectSubset<T, ValidatorUpsertArgs<ExtArgs>>): Prisma__ValidatorClient<$Result.GetResult<Prisma.$ValidatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Validators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorCountArgs} args - Arguments to filter Validators to count.
     * @example
     * // Count the number of Validators
     * const count = await prisma.validator.count({
     *   where: {
     *     // ... the filter for the Validators we want to count
     *   }
     * })
    **/
    count<T extends ValidatorCountArgs>(
      args?: Subset<T, ValidatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValidatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Validator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ValidatorAggregateArgs>(args: Subset<T, ValidatorAggregateArgs>): Prisma.PrismaPromise<GetValidatorAggregateType<T>>

    /**
     * Group by Validator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValidatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ValidatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValidatorGroupByArgs['orderBy'] }
        : { orderBy?: ValidatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ValidatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValidatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Validator model
   */
  readonly fields: ValidatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Validator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValidatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Validator model
   */
  interface ValidatorFieldRefs {
    readonly id: FieldRef<"Validator", 'String'>
    readonly walletAddress: FieldRef<"Validator", 'String'>
    readonly createdAt: FieldRef<"Validator", 'DateTime'>
    readonly updatedAt: FieldRef<"Validator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Validator findUnique
   */
  export type ValidatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validator
     */
    omit?: ValidatorOmit<ExtArgs> | null
    /**
     * Filter, which Validator to fetch.
     */
    where: ValidatorWhereUniqueInput
  }

  /**
   * Validator findUniqueOrThrow
   */
  export type ValidatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validator
     */
    omit?: ValidatorOmit<ExtArgs> | null
    /**
     * Filter, which Validator to fetch.
     */
    where: ValidatorWhereUniqueInput
  }

  /**
   * Validator findFirst
   */
  export type ValidatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validator
     */
    omit?: ValidatorOmit<ExtArgs> | null
    /**
     * Filter, which Validator to fetch.
     */
    where?: ValidatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validators to fetch.
     */
    orderBy?: ValidatorOrderByWithRelationInput | ValidatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Validators.
     */
    cursor?: ValidatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Validators.
     */
    distinct?: ValidatorScalarFieldEnum | ValidatorScalarFieldEnum[]
  }

  /**
   * Validator findFirstOrThrow
   */
  export type ValidatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validator
     */
    omit?: ValidatorOmit<ExtArgs> | null
    /**
     * Filter, which Validator to fetch.
     */
    where?: ValidatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validators to fetch.
     */
    orderBy?: ValidatorOrderByWithRelationInput | ValidatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Validators.
     */
    cursor?: ValidatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Validators.
     */
    distinct?: ValidatorScalarFieldEnum | ValidatorScalarFieldEnum[]
  }

  /**
   * Validator findMany
   */
  export type ValidatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validator
     */
    omit?: ValidatorOmit<ExtArgs> | null
    /**
     * Filter, which Validators to fetch.
     */
    where?: ValidatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Validators to fetch.
     */
    orderBy?: ValidatorOrderByWithRelationInput | ValidatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Validators.
     */
    cursor?: ValidatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Validators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Validators.
     */
    skip?: number
    distinct?: ValidatorScalarFieldEnum | ValidatorScalarFieldEnum[]
  }

  /**
   * Validator create
   */
  export type ValidatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validator
     */
    omit?: ValidatorOmit<ExtArgs> | null
    /**
     * The data needed to create a Validator.
     */
    data: XOR<ValidatorCreateInput, ValidatorUncheckedCreateInput>
  }

  /**
   * Validator createMany
   */
  export type ValidatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Validators.
     */
    data: ValidatorCreateManyInput | ValidatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Validator createManyAndReturn
   */
  export type ValidatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Validator
     */
    omit?: ValidatorOmit<ExtArgs> | null
    /**
     * The data used to create many Validators.
     */
    data: ValidatorCreateManyInput | ValidatorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Validator update
   */
  export type ValidatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validator
     */
    omit?: ValidatorOmit<ExtArgs> | null
    /**
     * The data needed to update a Validator.
     */
    data: XOR<ValidatorUpdateInput, ValidatorUncheckedUpdateInput>
    /**
     * Choose, which Validator to update.
     */
    where: ValidatorWhereUniqueInput
  }

  /**
   * Validator updateMany
   */
  export type ValidatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Validators.
     */
    data: XOR<ValidatorUpdateManyMutationInput, ValidatorUncheckedUpdateManyInput>
    /**
     * Filter which Validators to update
     */
    where?: ValidatorWhereInput
    /**
     * Limit how many Validators to update.
     */
    limit?: number
  }

  /**
   * Validator updateManyAndReturn
   */
  export type ValidatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Validator
     */
    omit?: ValidatorOmit<ExtArgs> | null
    /**
     * The data used to update Validators.
     */
    data: XOR<ValidatorUpdateManyMutationInput, ValidatorUncheckedUpdateManyInput>
    /**
     * Filter which Validators to update
     */
    where?: ValidatorWhereInput
    /**
     * Limit how many Validators to update.
     */
    limit?: number
  }

  /**
   * Validator upsert
   */
  export type ValidatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validator
     */
    omit?: ValidatorOmit<ExtArgs> | null
    /**
     * The filter to search for the Validator to update in case it exists.
     */
    where: ValidatorWhereUniqueInput
    /**
     * In case the Validator found by the `where` argument doesn't exist, create a new Validator with this data.
     */
    create: XOR<ValidatorCreateInput, ValidatorUncheckedCreateInput>
    /**
     * In case the Validator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValidatorUpdateInput, ValidatorUncheckedUpdateInput>
  }

  /**
   * Validator delete
   */
  export type ValidatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validator
     */
    omit?: ValidatorOmit<ExtArgs> | null
    /**
     * Filter which Validator to delete.
     */
    where: ValidatorWhereUniqueInput
  }

  /**
   * Validator deleteMany
   */
  export type ValidatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Validators to delete
     */
    where?: ValidatorWhereInput
    /**
     * Limit how many Validators to delete.
     */
    limit?: number
  }

  /**
   * Validator without action
   */
  export type ValidatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Validator
     */
    select?: ValidatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Validator
     */
    omit?: ValidatorOmit<ExtArgs> | null
  }


  /**
   * Model Place
   */

  export type AggregatePlace = {
    _count: PlaceCountAggregateOutputType | null
    _avg: PlaceAvgAggregateOutputType | null
    _sum: PlaceSumAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  export type PlaceAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PlaceSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PlaceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    placeName: string | null
    latitude: number | null
    longitude: number | null
    disabled: boolean | null
    validatedByWallet: string | null
    validatorFetching: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    placeName: string | null
    latitude: number | null
    longitude: number | null
    disabled: boolean | null
    validatedByWallet: string | null
    validatorFetching: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaceCountAggregateOutputType = {
    id: number
    userId: number
    placeName: number
    latitude: number
    longitude: number
    disabled: number
    validatedByWallet: number
    validatorFetching: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlaceAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PlaceSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PlaceMinAggregateInputType = {
    id?: true
    userId?: true
    placeName?: true
    latitude?: true
    longitude?: true
    disabled?: true
    validatedByWallet?: true
    validatorFetching?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaceMaxAggregateInputType = {
    id?: true
    userId?: true
    placeName?: true
    latitude?: true
    longitude?: true
    disabled?: true
    validatedByWallet?: true
    validatorFetching?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaceCountAggregateInputType = {
    id?: true
    userId?: true
    placeName?: true
    latitude?: true
    longitude?: true
    disabled?: true
    validatedByWallet?: true
    validatorFetching?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Place to aggregate.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Places
    **/
    _count?: true | PlaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaceMaxAggregateInputType
  }

  export type GetPlaceAggregateType<T extends PlaceAggregateArgs> = {
        [P in keyof T & keyof AggregatePlace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlace[P]>
      : GetScalarType<T[P], AggregatePlace[P]>
  }




  export type PlaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceWhereInput
    orderBy?: PlaceOrderByWithAggregationInput | PlaceOrderByWithAggregationInput[]
    by: PlaceScalarFieldEnum[] | PlaceScalarFieldEnum
    having?: PlaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaceCountAggregateInputType | true
    _avg?: PlaceAvgAggregateInputType
    _sum?: PlaceSumAggregateInputType
    _min?: PlaceMinAggregateInputType
    _max?: PlaceMaxAggregateInputType
  }

  export type PlaceGroupByOutputType = {
    id: string
    userId: string
    placeName: string
    latitude: number
    longitude: number
    disabled: boolean
    validatedByWallet: string | null
    validatorFetching: boolean
    createdAt: Date
    updatedAt: Date
    _count: PlaceCountAggregateOutputType | null
    _avg: PlaceAvgAggregateOutputType | null
    _sum: PlaceSumAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  type GetPlaceGroupByPayload<T extends PlaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaceGroupByOutputType[P]>
            : GetScalarType<T[P], PlaceGroupByOutputType[P]>
        }
      >
    >


  export type PlaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    placeName?: boolean
    latitude?: boolean
    longitude?: boolean
    disabled?: boolean
    validatedByWallet?: boolean
    validatorFetching?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    airQuality?: boolean | Place$airQualityArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    placeName?: boolean
    latitude?: boolean
    longitude?: boolean
    disabled?: boolean
    validatedByWallet?: boolean
    validatorFetching?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    placeName?: boolean
    latitude?: boolean
    longitude?: boolean
    disabled?: boolean
    validatedByWallet?: boolean
    validatorFetching?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectScalar = {
    id?: boolean
    userId?: boolean
    placeName?: boolean
    latitude?: boolean
    longitude?: boolean
    disabled?: boolean
    validatedByWallet?: boolean
    validatorFetching?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "placeName" | "latitude" | "longitude" | "disabled" | "validatedByWallet" | "validatorFetching" | "createdAt" | "updatedAt", ExtArgs["result"]["place"]>
  export type PlaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airQuality?: boolean | Place$airQualityArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PlaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Place"
    objects: {
      airQuality: Prisma.$AirQualityPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      placeName: string
      latitude: number
      longitude: number
      disabled: boolean
      validatedByWallet: string | null
      validatorFetching: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["place"]>
    composites: {}
  }

  type PlaceGetPayload<S extends boolean | null | undefined | PlaceDefaultArgs> = $Result.GetResult<Prisma.$PlacePayload, S>

  type PlaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaceCountAggregateInputType | true
    }

  export interface PlaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Place'], meta: { name: 'Place' } }
    /**
     * Find zero or one Place that matches the filter.
     * @param {PlaceFindUniqueArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaceFindUniqueArgs>(args: SelectSubset<T, PlaceFindUniqueArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Place that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaceFindUniqueOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaceFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Place that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaceFindFirstArgs>(args?: SelectSubset<T, PlaceFindFirstArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Place that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaceFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Places
     * const places = await prisma.place.findMany()
     * 
     * // Get first 10 Places
     * const places = await prisma.place.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placeWithIdOnly = await prisma.place.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaceFindManyArgs>(args?: SelectSubset<T, PlaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Place.
     * @param {PlaceCreateArgs} args - Arguments to create a Place.
     * @example
     * // Create one Place
     * const Place = await prisma.place.create({
     *   data: {
     *     // ... data to create a Place
     *   }
     * })
     * 
     */
    create<T extends PlaceCreateArgs>(args: SelectSubset<T, PlaceCreateArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Places.
     * @param {PlaceCreateManyArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const place = await prisma.place.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaceCreateManyArgs>(args?: SelectSubset<T, PlaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Places and returns the data saved in the database.
     * @param {PlaceCreateManyAndReturnArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const place = await prisma.place.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Places and only return the `id`
     * const placeWithIdOnly = await prisma.place.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaceCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Place.
     * @param {PlaceDeleteArgs} args - Arguments to delete one Place.
     * @example
     * // Delete one Place
     * const Place = await prisma.place.delete({
     *   where: {
     *     // ... filter to delete one Place
     *   }
     * })
     * 
     */
    delete<T extends PlaceDeleteArgs>(args: SelectSubset<T, PlaceDeleteArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Place.
     * @param {PlaceUpdateArgs} args - Arguments to update one Place.
     * @example
     * // Update one Place
     * const place = await prisma.place.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaceUpdateArgs>(args: SelectSubset<T, PlaceUpdateArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Places.
     * @param {PlaceDeleteManyArgs} args - Arguments to filter Places to delete.
     * @example
     * // Delete a few Places
     * const { count } = await prisma.place.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaceDeleteManyArgs>(args?: SelectSubset<T, PlaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Places
     * const place = await prisma.place.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaceUpdateManyArgs>(args: SelectSubset<T, PlaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places and returns the data updated in the database.
     * @param {PlaceUpdateManyAndReturnArgs} args - Arguments to update many Places.
     * @example
     * // Update many Places
     * const place = await prisma.place.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Places and only return the `id`
     * const placeWithIdOnly = await prisma.place.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaceUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Place.
     * @param {PlaceUpsertArgs} args - Arguments to update or create a Place.
     * @example
     * // Update or create a Place
     * const place = await prisma.place.upsert({
     *   create: {
     *     // ... data to create a Place
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Place we want to update
     *   }
     * })
     */
    upsert<T extends PlaceUpsertArgs>(args: SelectSubset<T, PlaceUpsertArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceCountArgs} args - Arguments to filter Places to count.
     * @example
     * // Count the number of Places
     * const count = await prisma.place.count({
     *   where: {
     *     // ... the filter for the Places we want to count
     *   }
     * })
    **/
    count<T extends PlaceCountArgs>(
      args?: Subset<T, PlaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaceAggregateArgs>(args: Subset<T, PlaceAggregateArgs>): Prisma.PrismaPromise<GetPlaceAggregateType<T>>

    /**
     * Group by Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaceGroupByArgs['orderBy'] }
        : { orderBy?: PlaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Place model
   */
  readonly fields: PlaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Place.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    airQuality<T extends Place$airQualityArgs<ExtArgs> = {}>(args?: Subset<T, Place$airQualityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirQualityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Place model
   */
  interface PlaceFieldRefs {
    readonly id: FieldRef<"Place", 'String'>
    readonly userId: FieldRef<"Place", 'String'>
    readonly placeName: FieldRef<"Place", 'String'>
    readonly latitude: FieldRef<"Place", 'Float'>
    readonly longitude: FieldRef<"Place", 'Float'>
    readonly disabled: FieldRef<"Place", 'Boolean'>
    readonly validatedByWallet: FieldRef<"Place", 'String'>
    readonly validatorFetching: FieldRef<"Place", 'Boolean'>
    readonly createdAt: FieldRef<"Place", 'DateTime'>
    readonly updatedAt: FieldRef<"Place", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Place findUnique
   */
  export type PlaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place findUniqueOrThrow
   */
  export type PlaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place findFirst
   */
  export type PlaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place findFirstOrThrow
   */
  export type PlaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place findMany
   */
  export type PlaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place create
   */
  export type PlaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Place.
     */
    data: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
  }

  /**
   * Place createMany
   */
  export type PlaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Places.
     */
    data: PlaceCreateManyInput | PlaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Place createManyAndReturn
   */
  export type PlaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * The data used to create many Places.
     */
    data: PlaceCreateManyInput | PlaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Place update
   */
  export type PlaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Place.
     */
    data: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
    /**
     * Choose, which Place to update.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place updateMany
   */
  export type PlaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Places.
     */
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlaceWhereInput
    /**
     * Limit how many Places to update.
     */
    limit?: number
  }

  /**
   * Place updateManyAndReturn
   */
  export type PlaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * The data used to update Places.
     */
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlaceWhereInput
    /**
     * Limit how many Places to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Place upsert
   */
  export type PlaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Place to update in case it exists.
     */
    where: PlaceWhereUniqueInput
    /**
     * In case the Place found by the `where` argument doesn't exist, create a new Place with this data.
     */
    create: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
    /**
     * In case the Place was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
  }

  /**
   * Place delete
   */
  export type PlaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter which Place to delete.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place deleteMany
   */
  export type PlaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Places to delete
     */
    where?: PlaceWhereInput
    /**
     * Limit how many Places to delete.
     */
    limit?: number
  }

  /**
   * Place.airQuality
   */
  export type Place$airQualityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirQuality
     */
    select?: AirQualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirQuality
     */
    omit?: AirQualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirQualityInclude<ExtArgs> | null
    where?: AirQualityWhereInput
    orderBy?: AirQualityOrderByWithRelationInput | AirQualityOrderByWithRelationInput[]
    cursor?: AirQualityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AirQualityScalarFieldEnum | AirQualityScalarFieldEnum[]
  }

  /**
   * Place without action
   */
  export type PlaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
  }


  /**
   * Model AirQuality
   */

  export type AggregateAirQuality = {
    _count: AirQualityCountAggregateOutputType | null
    _avg: AirQualityAvgAggregateOutputType | null
    _sum: AirQualitySumAggregateOutputType | null
    _min: AirQualityMinAggregateOutputType | null
    _max: AirQualityMaxAggregateOutputType | null
  }

  export type AirQualityAvgAggregateOutputType = {
    aqi: number | null
    pm25: number | null
    no: number | null
    o3: number | null
    nh3: number | null
    pm10: number | null
    co: number | null
    so2: number | null
    no2: number | null
  }

  export type AirQualitySumAggregateOutputType = {
    aqi: number | null
    pm25: number | null
    no: number | null
    o3: number | null
    nh3: number | null
    pm10: number | null
    co: number | null
    so2: number | null
    no2: number | null
  }

  export type AirQualityMinAggregateOutputType = {
    id: string | null
    placeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.AirStatus | null
    aqi: number | null
    pm25: number | null
    no: number | null
    o3: number | null
    nh3: number | null
    pm10: number | null
    co: number | null
    so2: number | null
    no2: number | null
  }

  export type AirQualityMaxAggregateOutputType = {
    id: string | null
    placeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.AirStatus | null
    aqi: number | null
    pm25: number | null
    no: number | null
    o3: number | null
    nh3: number | null
    pm10: number | null
    co: number | null
    so2: number | null
    no2: number | null
  }

  export type AirQualityCountAggregateOutputType = {
    id: number
    placeId: number
    createdAt: number
    updatedAt: number
    status: number
    aqi: number
    pm25: number
    no: number
    o3: number
    nh3: number
    pm10: number
    co: number
    so2: number
    no2: number
    _all: number
  }


  export type AirQualityAvgAggregateInputType = {
    aqi?: true
    pm25?: true
    no?: true
    o3?: true
    nh3?: true
    pm10?: true
    co?: true
    so2?: true
    no2?: true
  }

  export type AirQualitySumAggregateInputType = {
    aqi?: true
    pm25?: true
    no?: true
    o3?: true
    nh3?: true
    pm10?: true
    co?: true
    so2?: true
    no2?: true
  }

  export type AirQualityMinAggregateInputType = {
    id?: true
    placeId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    aqi?: true
    pm25?: true
    no?: true
    o3?: true
    nh3?: true
    pm10?: true
    co?: true
    so2?: true
    no2?: true
  }

  export type AirQualityMaxAggregateInputType = {
    id?: true
    placeId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    aqi?: true
    pm25?: true
    no?: true
    o3?: true
    nh3?: true
    pm10?: true
    co?: true
    so2?: true
    no2?: true
  }

  export type AirQualityCountAggregateInputType = {
    id?: true
    placeId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    aqi?: true
    pm25?: true
    no?: true
    o3?: true
    nh3?: true
    pm10?: true
    co?: true
    so2?: true
    no2?: true
    _all?: true
  }

  export type AirQualityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AirQuality to aggregate.
     */
    where?: AirQualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirQualities to fetch.
     */
    orderBy?: AirQualityOrderByWithRelationInput | AirQualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AirQualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirQualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirQualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AirQualities
    **/
    _count?: true | AirQualityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AirQualityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AirQualitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AirQualityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AirQualityMaxAggregateInputType
  }

  export type GetAirQualityAggregateType<T extends AirQualityAggregateArgs> = {
        [P in keyof T & keyof AggregateAirQuality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirQuality[P]>
      : GetScalarType<T[P], AggregateAirQuality[P]>
  }




  export type AirQualityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirQualityWhereInput
    orderBy?: AirQualityOrderByWithAggregationInput | AirQualityOrderByWithAggregationInput[]
    by: AirQualityScalarFieldEnum[] | AirQualityScalarFieldEnum
    having?: AirQualityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AirQualityCountAggregateInputType | true
    _avg?: AirQualityAvgAggregateInputType
    _sum?: AirQualitySumAggregateInputType
    _min?: AirQualityMinAggregateInputType
    _max?: AirQualityMaxAggregateInputType
  }

  export type AirQualityGroupByOutputType = {
    id: string
    placeId: string
    createdAt: Date
    updatedAt: Date
    status: $Enums.AirStatus
    aqi: number
    pm25: number
    no: number
    o3: number
    nh3: number
    pm10: number
    co: number
    so2: number
    no2: number
    _count: AirQualityCountAggregateOutputType | null
    _avg: AirQualityAvgAggregateOutputType | null
    _sum: AirQualitySumAggregateOutputType | null
    _min: AirQualityMinAggregateOutputType | null
    _max: AirQualityMaxAggregateOutputType | null
  }

  type GetAirQualityGroupByPayload<T extends AirQualityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirQualityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AirQualityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AirQualityGroupByOutputType[P]>
            : GetScalarType<T[P], AirQualityGroupByOutputType[P]>
        }
      >
    >


  export type AirQualitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    aqi?: boolean
    pm25?: boolean
    no?: boolean
    o3?: boolean
    nh3?: boolean
    pm10?: boolean
    co?: boolean
    so2?: boolean
    no2?: boolean
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airQuality"]>

  export type AirQualitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    aqi?: boolean
    pm25?: boolean
    no?: boolean
    o3?: boolean
    nh3?: boolean
    pm10?: boolean
    co?: boolean
    so2?: boolean
    no2?: boolean
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airQuality"]>

  export type AirQualitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    aqi?: boolean
    pm25?: boolean
    no?: boolean
    o3?: boolean
    nh3?: boolean
    pm10?: boolean
    co?: boolean
    so2?: boolean
    no2?: boolean
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airQuality"]>

  export type AirQualitySelectScalar = {
    id?: boolean
    placeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    aqi?: boolean
    pm25?: boolean
    no?: boolean
    o3?: boolean
    nh3?: boolean
    pm10?: boolean
    co?: boolean
    so2?: boolean
    no2?: boolean
  }

  export type AirQualityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "placeId" | "createdAt" | "updatedAt" | "status" | "aqi" | "pm25" | "no" | "o3" | "nh3" | "pm10" | "co" | "so2" | "no2", ExtArgs["result"]["airQuality"]>
  export type AirQualityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }
  export type AirQualityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }
  export type AirQualityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }

  export type $AirQualityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AirQuality"
    objects: {
      place: Prisma.$PlacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      placeId: string
      createdAt: Date
      updatedAt: Date
      status: $Enums.AirStatus
      aqi: number
      pm25: number
      no: number
      o3: number
      nh3: number
      pm10: number
      co: number
      so2: number
      no2: number
    }, ExtArgs["result"]["airQuality"]>
    composites: {}
  }

  type AirQualityGetPayload<S extends boolean | null | undefined | AirQualityDefaultArgs> = $Result.GetResult<Prisma.$AirQualityPayload, S>

  type AirQualityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AirQualityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AirQualityCountAggregateInputType | true
    }

  export interface AirQualityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AirQuality'], meta: { name: 'AirQuality' } }
    /**
     * Find zero or one AirQuality that matches the filter.
     * @param {AirQualityFindUniqueArgs} args - Arguments to find a AirQuality
     * @example
     * // Get one AirQuality
     * const airQuality = await prisma.airQuality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AirQualityFindUniqueArgs>(args: SelectSubset<T, AirQualityFindUniqueArgs<ExtArgs>>): Prisma__AirQualityClient<$Result.GetResult<Prisma.$AirQualityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AirQuality that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AirQualityFindUniqueOrThrowArgs} args - Arguments to find a AirQuality
     * @example
     * // Get one AirQuality
     * const airQuality = await prisma.airQuality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AirQualityFindUniqueOrThrowArgs>(args: SelectSubset<T, AirQualityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AirQualityClient<$Result.GetResult<Prisma.$AirQualityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AirQuality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirQualityFindFirstArgs} args - Arguments to find a AirQuality
     * @example
     * // Get one AirQuality
     * const airQuality = await prisma.airQuality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AirQualityFindFirstArgs>(args?: SelectSubset<T, AirQualityFindFirstArgs<ExtArgs>>): Prisma__AirQualityClient<$Result.GetResult<Prisma.$AirQualityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AirQuality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirQualityFindFirstOrThrowArgs} args - Arguments to find a AirQuality
     * @example
     * // Get one AirQuality
     * const airQuality = await prisma.airQuality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AirQualityFindFirstOrThrowArgs>(args?: SelectSubset<T, AirQualityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AirQualityClient<$Result.GetResult<Prisma.$AirQualityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AirQualities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirQualityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AirQualities
     * const airQualities = await prisma.airQuality.findMany()
     * 
     * // Get first 10 AirQualities
     * const airQualities = await prisma.airQuality.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const airQualityWithIdOnly = await prisma.airQuality.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AirQualityFindManyArgs>(args?: SelectSubset<T, AirQualityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirQualityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AirQuality.
     * @param {AirQualityCreateArgs} args - Arguments to create a AirQuality.
     * @example
     * // Create one AirQuality
     * const AirQuality = await prisma.airQuality.create({
     *   data: {
     *     // ... data to create a AirQuality
     *   }
     * })
     * 
     */
    create<T extends AirQualityCreateArgs>(args: SelectSubset<T, AirQualityCreateArgs<ExtArgs>>): Prisma__AirQualityClient<$Result.GetResult<Prisma.$AirQualityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AirQualities.
     * @param {AirQualityCreateManyArgs} args - Arguments to create many AirQualities.
     * @example
     * // Create many AirQualities
     * const airQuality = await prisma.airQuality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AirQualityCreateManyArgs>(args?: SelectSubset<T, AirQualityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AirQualities and returns the data saved in the database.
     * @param {AirQualityCreateManyAndReturnArgs} args - Arguments to create many AirQualities.
     * @example
     * // Create many AirQualities
     * const airQuality = await prisma.airQuality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AirQualities and only return the `id`
     * const airQualityWithIdOnly = await prisma.airQuality.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AirQualityCreateManyAndReturnArgs>(args?: SelectSubset<T, AirQualityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirQualityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AirQuality.
     * @param {AirQualityDeleteArgs} args - Arguments to delete one AirQuality.
     * @example
     * // Delete one AirQuality
     * const AirQuality = await prisma.airQuality.delete({
     *   where: {
     *     // ... filter to delete one AirQuality
     *   }
     * })
     * 
     */
    delete<T extends AirQualityDeleteArgs>(args: SelectSubset<T, AirQualityDeleteArgs<ExtArgs>>): Prisma__AirQualityClient<$Result.GetResult<Prisma.$AirQualityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AirQuality.
     * @param {AirQualityUpdateArgs} args - Arguments to update one AirQuality.
     * @example
     * // Update one AirQuality
     * const airQuality = await prisma.airQuality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AirQualityUpdateArgs>(args: SelectSubset<T, AirQualityUpdateArgs<ExtArgs>>): Prisma__AirQualityClient<$Result.GetResult<Prisma.$AirQualityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AirQualities.
     * @param {AirQualityDeleteManyArgs} args - Arguments to filter AirQualities to delete.
     * @example
     * // Delete a few AirQualities
     * const { count } = await prisma.airQuality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AirQualityDeleteManyArgs>(args?: SelectSubset<T, AirQualityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AirQualities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirQualityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AirQualities
     * const airQuality = await prisma.airQuality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AirQualityUpdateManyArgs>(args: SelectSubset<T, AirQualityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AirQualities and returns the data updated in the database.
     * @param {AirQualityUpdateManyAndReturnArgs} args - Arguments to update many AirQualities.
     * @example
     * // Update many AirQualities
     * const airQuality = await prisma.airQuality.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AirQualities and only return the `id`
     * const airQualityWithIdOnly = await prisma.airQuality.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AirQualityUpdateManyAndReturnArgs>(args: SelectSubset<T, AirQualityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirQualityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AirQuality.
     * @param {AirQualityUpsertArgs} args - Arguments to update or create a AirQuality.
     * @example
     * // Update or create a AirQuality
     * const airQuality = await prisma.airQuality.upsert({
     *   create: {
     *     // ... data to create a AirQuality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AirQuality we want to update
     *   }
     * })
     */
    upsert<T extends AirQualityUpsertArgs>(args: SelectSubset<T, AirQualityUpsertArgs<ExtArgs>>): Prisma__AirQualityClient<$Result.GetResult<Prisma.$AirQualityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AirQualities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirQualityCountArgs} args - Arguments to filter AirQualities to count.
     * @example
     * // Count the number of AirQualities
     * const count = await prisma.airQuality.count({
     *   where: {
     *     // ... the filter for the AirQualities we want to count
     *   }
     * })
    **/
    count<T extends AirQualityCountArgs>(
      args?: Subset<T, AirQualityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirQualityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AirQuality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirQualityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AirQualityAggregateArgs>(args: Subset<T, AirQualityAggregateArgs>): Prisma.PrismaPromise<GetAirQualityAggregateType<T>>

    /**
     * Group by AirQuality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirQualityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AirQualityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AirQualityGroupByArgs['orderBy'] }
        : { orderBy?: AirQualityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AirQualityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAirQualityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AirQuality model
   */
  readonly fields: AirQualityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AirQuality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AirQualityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    place<T extends PlaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaceDefaultArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AirQuality model
   */
  interface AirQualityFieldRefs {
    readonly id: FieldRef<"AirQuality", 'String'>
    readonly placeId: FieldRef<"AirQuality", 'String'>
    readonly createdAt: FieldRef<"AirQuality", 'DateTime'>
    readonly updatedAt: FieldRef<"AirQuality", 'DateTime'>
    readonly status: FieldRef<"AirQuality", 'AirStatus'>
    readonly aqi: FieldRef<"AirQuality", 'Int'>
    readonly pm25: FieldRef<"AirQuality", 'Float'>
    readonly no: FieldRef<"AirQuality", 'Float'>
    readonly o3: FieldRef<"AirQuality", 'Float'>
    readonly nh3: FieldRef<"AirQuality", 'Float'>
    readonly pm10: FieldRef<"AirQuality", 'Float'>
    readonly co: FieldRef<"AirQuality", 'Float'>
    readonly so2: FieldRef<"AirQuality", 'Float'>
    readonly no2: FieldRef<"AirQuality", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * AirQuality findUnique
   */
  export type AirQualityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirQuality
     */
    select?: AirQualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirQuality
     */
    omit?: AirQualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirQualityInclude<ExtArgs> | null
    /**
     * Filter, which AirQuality to fetch.
     */
    where: AirQualityWhereUniqueInput
  }

  /**
   * AirQuality findUniqueOrThrow
   */
  export type AirQualityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirQuality
     */
    select?: AirQualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirQuality
     */
    omit?: AirQualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirQualityInclude<ExtArgs> | null
    /**
     * Filter, which AirQuality to fetch.
     */
    where: AirQualityWhereUniqueInput
  }

  /**
   * AirQuality findFirst
   */
  export type AirQualityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirQuality
     */
    select?: AirQualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirQuality
     */
    omit?: AirQualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirQualityInclude<ExtArgs> | null
    /**
     * Filter, which AirQuality to fetch.
     */
    where?: AirQualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirQualities to fetch.
     */
    orderBy?: AirQualityOrderByWithRelationInput | AirQualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AirQualities.
     */
    cursor?: AirQualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirQualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirQualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AirQualities.
     */
    distinct?: AirQualityScalarFieldEnum | AirQualityScalarFieldEnum[]
  }

  /**
   * AirQuality findFirstOrThrow
   */
  export type AirQualityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirQuality
     */
    select?: AirQualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirQuality
     */
    omit?: AirQualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirQualityInclude<ExtArgs> | null
    /**
     * Filter, which AirQuality to fetch.
     */
    where?: AirQualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirQualities to fetch.
     */
    orderBy?: AirQualityOrderByWithRelationInput | AirQualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AirQualities.
     */
    cursor?: AirQualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirQualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirQualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AirQualities.
     */
    distinct?: AirQualityScalarFieldEnum | AirQualityScalarFieldEnum[]
  }

  /**
   * AirQuality findMany
   */
  export type AirQualityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirQuality
     */
    select?: AirQualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirQuality
     */
    omit?: AirQualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirQualityInclude<ExtArgs> | null
    /**
     * Filter, which AirQualities to fetch.
     */
    where?: AirQualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirQualities to fetch.
     */
    orderBy?: AirQualityOrderByWithRelationInput | AirQualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AirQualities.
     */
    cursor?: AirQualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirQualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirQualities.
     */
    skip?: number
    distinct?: AirQualityScalarFieldEnum | AirQualityScalarFieldEnum[]
  }

  /**
   * AirQuality create
   */
  export type AirQualityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirQuality
     */
    select?: AirQualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirQuality
     */
    omit?: AirQualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirQualityInclude<ExtArgs> | null
    /**
     * The data needed to create a AirQuality.
     */
    data: XOR<AirQualityCreateInput, AirQualityUncheckedCreateInput>
  }

  /**
   * AirQuality createMany
   */
  export type AirQualityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AirQualities.
     */
    data: AirQualityCreateManyInput | AirQualityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AirQuality createManyAndReturn
   */
  export type AirQualityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirQuality
     */
    select?: AirQualitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AirQuality
     */
    omit?: AirQualityOmit<ExtArgs> | null
    /**
     * The data used to create many AirQualities.
     */
    data: AirQualityCreateManyInput | AirQualityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirQualityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AirQuality update
   */
  export type AirQualityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirQuality
     */
    select?: AirQualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirQuality
     */
    omit?: AirQualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirQualityInclude<ExtArgs> | null
    /**
     * The data needed to update a AirQuality.
     */
    data: XOR<AirQualityUpdateInput, AirQualityUncheckedUpdateInput>
    /**
     * Choose, which AirQuality to update.
     */
    where: AirQualityWhereUniqueInput
  }

  /**
   * AirQuality updateMany
   */
  export type AirQualityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AirQualities.
     */
    data: XOR<AirQualityUpdateManyMutationInput, AirQualityUncheckedUpdateManyInput>
    /**
     * Filter which AirQualities to update
     */
    where?: AirQualityWhereInput
    /**
     * Limit how many AirQualities to update.
     */
    limit?: number
  }

  /**
   * AirQuality updateManyAndReturn
   */
  export type AirQualityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirQuality
     */
    select?: AirQualitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AirQuality
     */
    omit?: AirQualityOmit<ExtArgs> | null
    /**
     * The data used to update AirQualities.
     */
    data: XOR<AirQualityUpdateManyMutationInput, AirQualityUncheckedUpdateManyInput>
    /**
     * Filter which AirQualities to update
     */
    where?: AirQualityWhereInput
    /**
     * Limit how many AirQualities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirQualityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AirQuality upsert
   */
  export type AirQualityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirQuality
     */
    select?: AirQualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirQuality
     */
    omit?: AirQualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirQualityInclude<ExtArgs> | null
    /**
     * The filter to search for the AirQuality to update in case it exists.
     */
    where: AirQualityWhereUniqueInput
    /**
     * In case the AirQuality found by the `where` argument doesn't exist, create a new AirQuality with this data.
     */
    create: XOR<AirQualityCreateInput, AirQualityUncheckedCreateInput>
    /**
     * In case the AirQuality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AirQualityUpdateInput, AirQualityUncheckedUpdateInput>
  }

  /**
   * AirQuality delete
   */
  export type AirQualityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirQuality
     */
    select?: AirQualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirQuality
     */
    omit?: AirQualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirQualityInclude<ExtArgs> | null
    /**
     * Filter which AirQuality to delete.
     */
    where: AirQualityWhereUniqueInput
  }

  /**
   * AirQuality deleteMany
   */
  export type AirQualityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AirQualities to delete
     */
    where?: AirQualityWhereInput
    /**
     * Limit how many AirQualities to delete.
     */
    limit?: number
  }

  /**
   * AirQuality without action
   */
  export type AirQualityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirQuality
     */
    select?: AirQualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AirQuality
     */
    omit?: AirQualityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirQualityInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    walletAddress: 'walletAddress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    placeId: 'placeId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ValidatorScalarFieldEnum: {
    id: 'id',
    walletAddress: 'walletAddress',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ValidatorScalarFieldEnum = (typeof ValidatorScalarFieldEnum)[keyof typeof ValidatorScalarFieldEnum]


  export const PlaceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    placeName: 'placeName',
    latitude: 'latitude',
    longitude: 'longitude',
    disabled: 'disabled',
    validatedByWallet: 'validatedByWallet',
    validatorFetching: 'validatorFetching',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlaceScalarFieldEnum = (typeof PlaceScalarFieldEnum)[keyof typeof PlaceScalarFieldEnum]


  export const AirQualityScalarFieldEnum: {
    id: 'id',
    placeId: 'placeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    aqi: 'aqi',
    pm25: 'pm25',
    no: 'no',
    o3: 'o3',
    nh3: 'nh3',
    pm10: 'pm10',
    co: 'co',
    so2: 'so2',
    no2: 'no2'
  };

  export type AirQualityScalarFieldEnum = (typeof AirQualityScalarFieldEnum)[keyof typeof AirQualityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AirStatus'
   */
  export type EnumAirStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AirStatus'>
    


  /**
   * Reference to a field of type 'AirStatus[]'
   */
  export type ListEnumAirStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AirStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    walletAddress?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    placeId?: StringNullableFilter<"User"> | string | null
    place?: PlaceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    placeId?: SortOrderInput | SortOrder
    place?: PlaceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    walletAddress?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    placeId?: StringNullableFilter<"User"> | string | null
    place?: PlaceListRelationFilter
  }, "id" | "walletAddress">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    placeId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    walletAddress?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    placeId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ValidatorWhereInput = {
    AND?: ValidatorWhereInput | ValidatorWhereInput[]
    OR?: ValidatorWhereInput[]
    NOT?: ValidatorWhereInput | ValidatorWhereInput[]
    id?: StringFilter<"Validator"> | string
    walletAddress?: StringFilter<"Validator"> | string
    createdAt?: DateTimeFilter<"Validator"> | Date | string
    updatedAt?: DateTimeFilter<"Validator"> | Date | string
  }

  export type ValidatorOrderByWithRelationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ValidatorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    walletAddress?: string
    AND?: ValidatorWhereInput | ValidatorWhereInput[]
    OR?: ValidatorWhereInput[]
    NOT?: ValidatorWhereInput | ValidatorWhereInput[]
    createdAt?: DateTimeFilter<"Validator"> | Date | string
    updatedAt?: DateTimeFilter<"Validator"> | Date | string
  }, "id" | "walletAddress">

  export type ValidatorOrderByWithAggregationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ValidatorCountOrderByAggregateInput
    _max?: ValidatorMaxOrderByAggregateInput
    _min?: ValidatorMinOrderByAggregateInput
  }

  export type ValidatorScalarWhereWithAggregatesInput = {
    AND?: ValidatorScalarWhereWithAggregatesInput | ValidatorScalarWhereWithAggregatesInput[]
    OR?: ValidatorScalarWhereWithAggregatesInput[]
    NOT?: ValidatorScalarWhereWithAggregatesInput | ValidatorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Validator"> | string
    walletAddress?: StringWithAggregatesFilter<"Validator"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Validator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Validator"> | Date | string
  }

  export type PlaceWhereInput = {
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    id?: StringFilter<"Place"> | string
    userId?: StringFilter<"Place"> | string
    placeName?: StringFilter<"Place"> | string
    latitude?: FloatFilter<"Place"> | number
    longitude?: FloatFilter<"Place"> | number
    disabled?: BoolFilter<"Place"> | boolean
    validatedByWallet?: StringNullableFilter<"Place"> | string | null
    validatorFetching?: BoolFilter<"Place"> | boolean
    createdAt?: DateTimeFilter<"Place"> | Date | string
    updatedAt?: DateTimeFilter<"Place"> | Date | string
    airQuality?: AirQualityListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlaceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    placeName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    disabled?: SortOrder
    validatedByWallet?: SortOrderInput | SortOrder
    validatorFetching?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    airQuality?: AirQualityOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type PlaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    userId?: StringFilter<"Place"> | string
    placeName?: StringFilter<"Place"> | string
    latitude?: FloatFilter<"Place"> | number
    longitude?: FloatFilter<"Place"> | number
    disabled?: BoolFilter<"Place"> | boolean
    validatedByWallet?: StringNullableFilter<"Place"> | string | null
    validatorFetching?: BoolFilter<"Place"> | boolean
    createdAt?: DateTimeFilter<"Place"> | Date | string
    updatedAt?: DateTimeFilter<"Place"> | Date | string
    airQuality?: AirQualityListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PlaceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    placeName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    disabled?: SortOrder
    validatedByWallet?: SortOrderInput | SortOrder
    validatorFetching?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlaceCountOrderByAggregateInput
    _avg?: PlaceAvgOrderByAggregateInput
    _max?: PlaceMaxOrderByAggregateInput
    _min?: PlaceMinOrderByAggregateInput
    _sum?: PlaceSumOrderByAggregateInput
  }

  export type PlaceScalarWhereWithAggregatesInput = {
    AND?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    OR?: PlaceScalarWhereWithAggregatesInput[]
    NOT?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Place"> | string
    userId?: StringWithAggregatesFilter<"Place"> | string
    placeName?: StringWithAggregatesFilter<"Place"> | string
    latitude?: FloatWithAggregatesFilter<"Place"> | number
    longitude?: FloatWithAggregatesFilter<"Place"> | number
    disabled?: BoolWithAggregatesFilter<"Place"> | boolean
    validatedByWallet?: StringNullableWithAggregatesFilter<"Place"> | string | null
    validatorFetching?: BoolWithAggregatesFilter<"Place"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Place"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Place"> | Date | string
  }

  export type AirQualityWhereInput = {
    AND?: AirQualityWhereInput | AirQualityWhereInput[]
    OR?: AirQualityWhereInput[]
    NOT?: AirQualityWhereInput | AirQualityWhereInput[]
    id?: StringFilter<"AirQuality"> | string
    placeId?: StringFilter<"AirQuality"> | string
    createdAt?: DateTimeFilter<"AirQuality"> | Date | string
    updatedAt?: DateTimeFilter<"AirQuality"> | Date | string
    status?: EnumAirStatusFilter<"AirQuality"> | $Enums.AirStatus
    aqi?: IntFilter<"AirQuality"> | number
    pm25?: FloatFilter<"AirQuality"> | number
    no?: FloatFilter<"AirQuality"> | number
    o3?: FloatFilter<"AirQuality"> | number
    nh3?: FloatFilter<"AirQuality"> | number
    pm10?: FloatFilter<"AirQuality"> | number
    co?: FloatFilter<"AirQuality"> | number
    so2?: FloatFilter<"AirQuality"> | number
    no2?: FloatFilter<"AirQuality"> | number
    place?: XOR<PlaceScalarRelationFilter, PlaceWhereInput>
  }

  export type AirQualityOrderByWithRelationInput = {
    id?: SortOrder
    placeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    aqi?: SortOrder
    pm25?: SortOrder
    no?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm10?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
    place?: PlaceOrderByWithRelationInput
  }

  export type AirQualityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AirQualityWhereInput | AirQualityWhereInput[]
    OR?: AirQualityWhereInput[]
    NOT?: AirQualityWhereInput | AirQualityWhereInput[]
    placeId?: StringFilter<"AirQuality"> | string
    createdAt?: DateTimeFilter<"AirQuality"> | Date | string
    updatedAt?: DateTimeFilter<"AirQuality"> | Date | string
    status?: EnumAirStatusFilter<"AirQuality"> | $Enums.AirStatus
    aqi?: IntFilter<"AirQuality"> | number
    pm25?: FloatFilter<"AirQuality"> | number
    no?: FloatFilter<"AirQuality"> | number
    o3?: FloatFilter<"AirQuality"> | number
    nh3?: FloatFilter<"AirQuality"> | number
    pm10?: FloatFilter<"AirQuality"> | number
    co?: FloatFilter<"AirQuality"> | number
    so2?: FloatFilter<"AirQuality"> | number
    no2?: FloatFilter<"AirQuality"> | number
    place?: XOR<PlaceScalarRelationFilter, PlaceWhereInput>
  }, "id">

  export type AirQualityOrderByWithAggregationInput = {
    id?: SortOrder
    placeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    aqi?: SortOrder
    pm25?: SortOrder
    no?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm10?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
    _count?: AirQualityCountOrderByAggregateInput
    _avg?: AirQualityAvgOrderByAggregateInput
    _max?: AirQualityMaxOrderByAggregateInput
    _min?: AirQualityMinOrderByAggregateInput
    _sum?: AirQualitySumOrderByAggregateInput
  }

  export type AirQualityScalarWhereWithAggregatesInput = {
    AND?: AirQualityScalarWhereWithAggregatesInput | AirQualityScalarWhereWithAggregatesInput[]
    OR?: AirQualityScalarWhereWithAggregatesInput[]
    NOT?: AirQualityScalarWhereWithAggregatesInput | AirQualityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AirQuality"> | string
    placeId?: StringWithAggregatesFilter<"AirQuality"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AirQuality"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AirQuality"> | Date | string
    status?: EnumAirStatusWithAggregatesFilter<"AirQuality"> | $Enums.AirStatus
    aqi?: IntWithAggregatesFilter<"AirQuality"> | number
    pm25?: FloatWithAggregatesFilter<"AirQuality"> | number
    no?: FloatWithAggregatesFilter<"AirQuality"> | number
    o3?: FloatWithAggregatesFilter<"AirQuality"> | number
    nh3?: FloatWithAggregatesFilter<"AirQuality"> | number
    pm10?: FloatWithAggregatesFilter<"AirQuality"> | number
    co?: FloatWithAggregatesFilter<"AirQuality"> | number
    so2?: FloatWithAggregatesFilter<"AirQuality"> | number
    no2?: FloatWithAggregatesFilter<"AirQuality"> | number
  }

  export type UserCreateInput = {
    id?: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    placeId?: string | null
    place?: PlaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    placeId?: string | null
    place?: PlaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    place?: PlaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    place?: PlaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    placeId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ValidatorCreateInput = {
    id?: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ValidatorUncheckedCreateInput = {
    id?: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ValidatorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValidatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValidatorCreateManyInput = {
    id?: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ValidatorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValidatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaceCreateInput = {
    id?: string
    placeName: string
    latitude: number
    longitude: number
    disabled?: boolean
    validatedByWallet?: string | null
    validatorFetching?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    airQuality?: AirQualityCreateNestedManyWithoutPlaceInput
    user: UserCreateNestedOneWithoutPlaceInput
  }

  export type PlaceUncheckedCreateInput = {
    id?: string
    userId: string
    placeName: string
    latitude: number
    longitude: number
    disabled?: boolean
    validatedByWallet?: string | null
    validatorFetching?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    airQuality?: AirQualityUncheckedCreateNestedManyWithoutPlaceInput
  }

  export type PlaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    validatedByWallet?: NullableStringFieldUpdateOperationsInput | string | null
    validatorFetching?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airQuality?: AirQualityUpdateManyWithoutPlaceNestedInput
    user?: UserUpdateOneRequiredWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    validatedByWallet?: NullableStringFieldUpdateOperationsInput | string | null
    validatorFetching?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airQuality?: AirQualityUncheckedUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceCreateManyInput = {
    id?: string
    userId: string
    placeName: string
    latitude: number
    longitude: number
    disabled?: boolean
    validatedByWallet?: string | null
    validatorFetching?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    validatedByWallet?: NullableStringFieldUpdateOperationsInput | string | null
    validatorFetching?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    validatedByWallet?: NullableStringFieldUpdateOperationsInput | string | null
    validatorFetching?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AirQualityCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.AirStatus
    aqi: number
    pm25: number
    no: number
    o3: number
    nh3: number
    pm10: number
    co: number
    so2: number
    no2: number
    place: PlaceCreateNestedOneWithoutAirQualityInput
  }

  export type AirQualityUncheckedCreateInput = {
    id?: string
    placeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.AirStatus
    aqi: number
    pm25: number
    no: number
    o3: number
    nh3: number
    pm10: number
    co: number
    so2: number
    no2: number
  }

  export type AirQualityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAirStatusFieldUpdateOperationsInput | $Enums.AirStatus
    aqi?: IntFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    no?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    co?: FloatFieldUpdateOperationsInput | number
    so2?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
    place?: PlaceUpdateOneRequiredWithoutAirQualityNestedInput
  }

  export type AirQualityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAirStatusFieldUpdateOperationsInput | $Enums.AirStatus
    aqi?: IntFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    no?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    co?: FloatFieldUpdateOperationsInput | number
    so2?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
  }

  export type AirQualityCreateManyInput = {
    id?: string
    placeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.AirStatus
    aqi: number
    pm25: number
    no: number
    o3: number
    nh3: number
    pm10: number
    co: number
    so2: number
    no2: number
  }

  export type AirQualityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAirStatusFieldUpdateOperationsInput | $Enums.AirStatus
    aqi?: IntFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    no?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    co?: FloatFieldUpdateOperationsInput | number
    so2?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
  }

  export type AirQualityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAirStatusFieldUpdateOperationsInput | $Enums.AirStatus
    aqi?: IntFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    no?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    co?: FloatFieldUpdateOperationsInput | number
    so2?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PlaceListRelationFilter = {
    every?: PlaceWhereInput
    some?: PlaceWhereInput
    none?: PlaceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    placeId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    placeId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    placeId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ValidatorCountOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ValidatorMaxOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ValidatorMinOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AirQualityListRelationFilter = {
    every?: AirQualityWhereInput
    some?: AirQualityWhereInput
    none?: AirQualityWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AirQualityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    placeName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    disabled?: SortOrder
    validatedByWallet?: SortOrder
    validatorFetching?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaceAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PlaceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    placeName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    disabled?: SortOrder
    validatedByWallet?: SortOrder
    validatorFetching?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    placeName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    disabled?: SortOrder
    validatedByWallet?: SortOrder
    validatorFetching?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaceSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAirStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AirStatus | EnumAirStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AirStatus[] | ListEnumAirStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AirStatus[] | ListEnumAirStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAirStatusFilter<$PrismaModel> | $Enums.AirStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PlaceScalarRelationFilter = {
    is?: PlaceWhereInput
    isNot?: PlaceWhereInput
  }

  export type AirQualityCountOrderByAggregateInput = {
    id?: SortOrder
    placeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    aqi?: SortOrder
    pm25?: SortOrder
    no?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm10?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
  }

  export type AirQualityAvgOrderByAggregateInput = {
    aqi?: SortOrder
    pm25?: SortOrder
    no?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm10?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
  }

  export type AirQualityMaxOrderByAggregateInput = {
    id?: SortOrder
    placeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    aqi?: SortOrder
    pm25?: SortOrder
    no?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm10?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
  }

  export type AirQualityMinOrderByAggregateInput = {
    id?: SortOrder
    placeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    aqi?: SortOrder
    pm25?: SortOrder
    no?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm10?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
  }

  export type AirQualitySumOrderByAggregateInput = {
    aqi?: SortOrder
    pm25?: SortOrder
    no?: SortOrder
    o3?: SortOrder
    nh3?: SortOrder
    pm10?: SortOrder
    co?: SortOrder
    so2?: SortOrder
    no2?: SortOrder
  }

  export type EnumAirStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AirStatus | EnumAirStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AirStatus[] | ListEnumAirStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AirStatus[] | ListEnumAirStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAirStatusWithAggregatesFilter<$PrismaModel> | $Enums.AirStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAirStatusFilter<$PrismaModel>
    _max?: NestedEnumAirStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PlaceCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaceCreateWithoutUserInput, PlaceUncheckedCreateWithoutUserInput> | PlaceCreateWithoutUserInput[] | PlaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutUserInput | PlaceCreateOrConnectWithoutUserInput[]
    createMany?: PlaceCreateManyUserInputEnvelope
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
  }

  export type PlaceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaceCreateWithoutUserInput, PlaceUncheckedCreateWithoutUserInput> | PlaceCreateWithoutUserInput[] | PlaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutUserInput | PlaceCreateOrConnectWithoutUserInput[]
    createMany?: PlaceCreateManyUserInputEnvelope
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PlaceUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaceCreateWithoutUserInput, PlaceUncheckedCreateWithoutUserInput> | PlaceCreateWithoutUserInput[] | PlaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutUserInput | PlaceCreateOrConnectWithoutUserInput[]
    upsert?: PlaceUpsertWithWhereUniqueWithoutUserInput | PlaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaceCreateManyUserInputEnvelope
    set?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    disconnect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    delete?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    update?: PlaceUpdateWithWhereUniqueWithoutUserInput | PlaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaceUpdateManyWithWhereWithoutUserInput | PlaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
  }

  export type PlaceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaceCreateWithoutUserInput, PlaceUncheckedCreateWithoutUserInput> | PlaceCreateWithoutUserInput[] | PlaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutUserInput | PlaceCreateOrConnectWithoutUserInput[]
    upsert?: PlaceUpsertWithWhereUniqueWithoutUserInput | PlaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaceCreateManyUserInputEnvelope
    set?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    disconnect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    delete?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    update?: PlaceUpdateWithWhereUniqueWithoutUserInput | PlaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaceUpdateManyWithWhereWithoutUserInput | PlaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
  }

  export type AirQualityCreateNestedManyWithoutPlaceInput = {
    create?: XOR<AirQualityCreateWithoutPlaceInput, AirQualityUncheckedCreateWithoutPlaceInput> | AirQualityCreateWithoutPlaceInput[] | AirQualityUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: AirQualityCreateOrConnectWithoutPlaceInput | AirQualityCreateOrConnectWithoutPlaceInput[]
    createMany?: AirQualityCreateManyPlaceInputEnvelope
    connect?: AirQualityWhereUniqueInput | AirQualityWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlaceInput = {
    create?: XOR<UserCreateWithoutPlaceInput, UserUncheckedCreateWithoutPlaceInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaceInput
    connect?: UserWhereUniqueInput
  }

  export type AirQualityUncheckedCreateNestedManyWithoutPlaceInput = {
    create?: XOR<AirQualityCreateWithoutPlaceInput, AirQualityUncheckedCreateWithoutPlaceInput> | AirQualityCreateWithoutPlaceInput[] | AirQualityUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: AirQualityCreateOrConnectWithoutPlaceInput | AirQualityCreateOrConnectWithoutPlaceInput[]
    createMany?: AirQualityCreateManyPlaceInputEnvelope
    connect?: AirQualityWhereUniqueInput | AirQualityWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AirQualityUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<AirQualityCreateWithoutPlaceInput, AirQualityUncheckedCreateWithoutPlaceInput> | AirQualityCreateWithoutPlaceInput[] | AirQualityUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: AirQualityCreateOrConnectWithoutPlaceInput | AirQualityCreateOrConnectWithoutPlaceInput[]
    upsert?: AirQualityUpsertWithWhereUniqueWithoutPlaceInput | AirQualityUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: AirQualityCreateManyPlaceInputEnvelope
    set?: AirQualityWhereUniqueInput | AirQualityWhereUniqueInput[]
    disconnect?: AirQualityWhereUniqueInput | AirQualityWhereUniqueInput[]
    delete?: AirQualityWhereUniqueInput | AirQualityWhereUniqueInput[]
    connect?: AirQualityWhereUniqueInput | AirQualityWhereUniqueInput[]
    update?: AirQualityUpdateWithWhereUniqueWithoutPlaceInput | AirQualityUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: AirQualityUpdateManyWithWhereWithoutPlaceInput | AirQualityUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: AirQualityScalarWhereInput | AirQualityScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPlaceNestedInput = {
    create?: XOR<UserCreateWithoutPlaceInput, UserUncheckedCreateWithoutPlaceInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaceInput
    upsert?: UserUpsertWithoutPlaceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaceInput, UserUpdateWithoutPlaceInput>, UserUncheckedUpdateWithoutPlaceInput>
  }

  export type AirQualityUncheckedUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<AirQualityCreateWithoutPlaceInput, AirQualityUncheckedCreateWithoutPlaceInput> | AirQualityCreateWithoutPlaceInput[] | AirQualityUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: AirQualityCreateOrConnectWithoutPlaceInput | AirQualityCreateOrConnectWithoutPlaceInput[]
    upsert?: AirQualityUpsertWithWhereUniqueWithoutPlaceInput | AirQualityUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: AirQualityCreateManyPlaceInputEnvelope
    set?: AirQualityWhereUniqueInput | AirQualityWhereUniqueInput[]
    disconnect?: AirQualityWhereUniqueInput | AirQualityWhereUniqueInput[]
    delete?: AirQualityWhereUniqueInput | AirQualityWhereUniqueInput[]
    connect?: AirQualityWhereUniqueInput | AirQualityWhereUniqueInput[]
    update?: AirQualityUpdateWithWhereUniqueWithoutPlaceInput | AirQualityUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: AirQualityUpdateManyWithWhereWithoutPlaceInput | AirQualityUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: AirQualityScalarWhereInput | AirQualityScalarWhereInput[]
  }

  export type PlaceCreateNestedOneWithoutAirQualityInput = {
    create?: XOR<PlaceCreateWithoutAirQualityInput, PlaceUncheckedCreateWithoutAirQualityInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutAirQualityInput
    connect?: PlaceWhereUniqueInput
  }

  export type EnumAirStatusFieldUpdateOperationsInput = {
    set?: $Enums.AirStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlaceUpdateOneRequiredWithoutAirQualityNestedInput = {
    create?: XOR<PlaceCreateWithoutAirQualityInput, PlaceUncheckedCreateWithoutAirQualityInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutAirQualityInput
    upsert?: PlaceUpsertWithoutAirQualityInput
    connect?: PlaceWhereUniqueInput
    update?: XOR<XOR<PlaceUpdateToOneWithWhereWithoutAirQualityInput, PlaceUpdateWithoutAirQualityInput>, PlaceUncheckedUpdateWithoutAirQualityInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAirStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AirStatus | EnumAirStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AirStatus[] | ListEnumAirStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AirStatus[] | ListEnumAirStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAirStatusFilter<$PrismaModel> | $Enums.AirStatus
  }

  export type NestedEnumAirStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AirStatus | EnumAirStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AirStatus[] | ListEnumAirStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AirStatus[] | ListEnumAirStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAirStatusWithAggregatesFilter<$PrismaModel> | $Enums.AirStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAirStatusFilter<$PrismaModel>
    _max?: NestedEnumAirStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type PlaceCreateWithoutUserInput = {
    id?: string
    placeName: string
    latitude: number
    longitude: number
    disabled?: boolean
    validatedByWallet?: string | null
    validatorFetching?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    airQuality?: AirQualityCreateNestedManyWithoutPlaceInput
  }

  export type PlaceUncheckedCreateWithoutUserInput = {
    id?: string
    placeName: string
    latitude: number
    longitude: number
    disabled?: boolean
    validatedByWallet?: string | null
    validatorFetching?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    airQuality?: AirQualityUncheckedCreateNestedManyWithoutPlaceInput
  }

  export type PlaceCreateOrConnectWithoutUserInput = {
    where: PlaceWhereUniqueInput
    create: XOR<PlaceCreateWithoutUserInput, PlaceUncheckedCreateWithoutUserInput>
  }

  export type PlaceCreateManyUserInputEnvelope = {
    data: PlaceCreateManyUserInput | PlaceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlaceUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaceWhereUniqueInput
    update: XOR<PlaceUpdateWithoutUserInput, PlaceUncheckedUpdateWithoutUserInput>
    create: XOR<PlaceCreateWithoutUserInput, PlaceUncheckedCreateWithoutUserInput>
  }

  export type PlaceUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaceWhereUniqueInput
    data: XOR<PlaceUpdateWithoutUserInput, PlaceUncheckedUpdateWithoutUserInput>
  }

  export type PlaceUpdateManyWithWhereWithoutUserInput = {
    where: PlaceScalarWhereInput
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyWithoutUserInput>
  }

  export type PlaceScalarWhereInput = {
    AND?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
    OR?: PlaceScalarWhereInput[]
    NOT?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
    id?: StringFilter<"Place"> | string
    userId?: StringFilter<"Place"> | string
    placeName?: StringFilter<"Place"> | string
    latitude?: FloatFilter<"Place"> | number
    longitude?: FloatFilter<"Place"> | number
    disabled?: BoolFilter<"Place"> | boolean
    validatedByWallet?: StringNullableFilter<"Place"> | string | null
    validatorFetching?: BoolFilter<"Place"> | boolean
    createdAt?: DateTimeFilter<"Place"> | Date | string
    updatedAt?: DateTimeFilter<"Place"> | Date | string
  }

  export type AirQualityCreateWithoutPlaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.AirStatus
    aqi: number
    pm25: number
    no: number
    o3: number
    nh3: number
    pm10: number
    co: number
    so2: number
    no2: number
  }

  export type AirQualityUncheckedCreateWithoutPlaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.AirStatus
    aqi: number
    pm25: number
    no: number
    o3: number
    nh3: number
    pm10: number
    co: number
    so2: number
    no2: number
  }

  export type AirQualityCreateOrConnectWithoutPlaceInput = {
    where: AirQualityWhereUniqueInput
    create: XOR<AirQualityCreateWithoutPlaceInput, AirQualityUncheckedCreateWithoutPlaceInput>
  }

  export type AirQualityCreateManyPlaceInputEnvelope = {
    data: AirQualityCreateManyPlaceInput | AirQualityCreateManyPlaceInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPlaceInput = {
    id?: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    placeId?: string | null
  }

  export type UserUncheckedCreateWithoutPlaceInput = {
    id?: string
    walletAddress: string
    createdAt?: Date | string
    updatedAt?: Date | string
    placeId?: string | null
  }

  export type UserCreateOrConnectWithoutPlaceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaceInput, UserUncheckedCreateWithoutPlaceInput>
  }

  export type AirQualityUpsertWithWhereUniqueWithoutPlaceInput = {
    where: AirQualityWhereUniqueInput
    update: XOR<AirQualityUpdateWithoutPlaceInput, AirQualityUncheckedUpdateWithoutPlaceInput>
    create: XOR<AirQualityCreateWithoutPlaceInput, AirQualityUncheckedCreateWithoutPlaceInput>
  }

  export type AirQualityUpdateWithWhereUniqueWithoutPlaceInput = {
    where: AirQualityWhereUniqueInput
    data: XOR<AirQualityUpdateWithoutPlaceInput, AirQualityUncheckedUpdateWithoutPlaceInput>
  }

  export type AirQualityUpdateManyWithWhereWithoutPlaceInput = {
    where: AirQualityScalarWhereInput
    data: XOR<AirQualityUpdateManyMutationInput, AirQualityUncheckedUpdateManyWithoutPlaceInput>
  }

  export type AirQualityScalarWhereInput = {
    AND?: AirQualityScalarWhereInput | AirQualityScalarWhereInput[]
    OR?: AirQualityScalarWhereInput[]
    NOT?: AirQualityScalarWhereInput | AirQualityScalarWhereInput[]
    id?: StringFilter<"AirQuality"> | string
    placeId?: StringFilter<"AirQuality"> | string
    createdAt?: DateTimeFilter<"AirQuality"> | Date | string
    updatedAt?: DateTimeFilter<"AirQuality"> | Date | string
    status?: EnumAirStatusFilter<"AirQuality"> | $Enums.AirStatus
    aqi?: IntFilter<"AirQuality"> | number
    pm25?: FloatFilter<"AirQuality"> | number
    no?: FloatFilter<"AirQuality"> | number
    o3?: FloatFilter<"AirQuality"> | number
    nh3?: FloatFilter<"AirQuality"> | number
    pm10?: FloatFilter<"AirQuality"> | number
    co?: FloatFilter<"AirQuality"> | number
    so2?: FloatFilter<"AirQuality"> | number
    no2?: FloatFilter<"AirQuality"> | number
  }

  export type UserUpsertWithoutPlaceInput = {
    update: XOR<UserUpdateWithoutPlaceInput, UserUncheckedUpdateWithoutPlaceInput>
    create: XOR<UserCreateWithoutPlaceInput, UserUncheckedCreateWithoutPlaceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaceInput, UserUncheckedUpdateWithoutPlaceInput>
  }

  export type UserUpdateWithoutPlaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutPlaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaceCreateWithoutAirQualityInput = {
    id?: string
    placeName: string
    latitude: number
    longitude: number
    disabled?: boolean
    validatedByWallet?: string | null
    validatorFetching?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlaceInput
  }

  export type PlaceUncheckedCreateWithoutAirQualityInput = {
    id?: string
    userId: string
    placeName: string
    latitude: number
    longitude: number
    disabled?: boolean
    validatedByWallet?: string | null
    validatorFetching?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaceCreateOrConnectWithoutAirQualityInput = {
    where: PlaceWhereUniqueInput
    create: XOR<PlaceCreateWithoutAirQualityInput, PlaceUncheckedCreateWithoutAirQualityInput>
  }

  export type PlaceUpsertWithoutAirQualityInput = {
    update: XOR<PlaceUpdateWithoutAirQualityInput, PlaceUncheckedUpdateWithoutAirQualityInput>
    create: XOR<PlaceCreateWithoutAirQualityInput, PlaceUncheckedCreateWithoutAirQualityInput>
    where?: PlaceWhereInput
  }

  export type PlaceUpdateToOneWithWhereWithoutAirQualityInput = {
    where?: PlaceWhereInput
    data: XOR<PlaceUpdateWithoutAirQualityInput, PlaceUncheckedUpdateWithoutAirQualityInput>
  }

  export type PlaceUpdateWithoutAirQualityInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    validatedByWallet?: NullableStringFieldUpdateOperationsInput | string | null
    validatorFetching?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateWithoutAirQualityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    validatedByWallet?: NullableStringFieldUpdateOperationsInput | string | null
    validatorFetching?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaceCreateManyUserInput = {
    id?: string
    placeName: string
    latitude: number
    longitude: number
    disabled?: boolean
    validatedByWallet?: string | null
    validatorFetching?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    validatedByWallet?: NullableStringFieldUpdateOperationsInput | string | null
    validatorFetching?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airQuality?: AirQualityUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    validatedByWallet?: NullableStringFieldUpdateOperationsInput | string | null
    validatorFetching?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    airQuality?: AirQualityUncheckedUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    disabled?: BoolFieldUpdateOperationsInput | boolean
    validatedByWallet?: NullableStringFieldUpdateOperationsInput | string | null
    validatorFetching?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AirQualityCreateManyPlaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.AirStatus
    aqi: number
    pm25: number
    no: number
    o3: number
    nh3: number
    pm10: number
    co: number
    so2: number
    no2: number
  }

  export type AirQualityUpdateWithoutPlaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAirStatusFieldUpdateOperationsInput | $Enums.AirStatus
    aqi?: IntFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    no?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    co?: FloatFieldUpdateOperationsInput | number
    so2?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
  }

  export type AirQualityUncheckedUpdateWithoutPlaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAirStatusFieldUpdateOperationsInput | $Enums.AirStatus
    aqi?: IntFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    no?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    co?: FloatFieldUpdateOperationsInput | number
    so2?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
  }

  export type AirQualityUncheckedUpdateManyWithoutPlaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAirStatusFieldUpdateOperationsInput | $Enums.AirStatus
    aqi?: IntFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    no?: FloatFieldUpdateOperationsInput | number
    o3?: FloatFieldUpdateOperationsInput | number
    nh3?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    co?: FloatFieldUpdateOperationsInput | number
    so2?: FloatFieldUpdateOperationsInput | number
    no2?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}