import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<RegisterApiResponse, RegisterApiArg>({
      query: (queryArg) => ({
        url: `/api/auth/register`,
        method: "POST",
        body: queryArg.registerRequest,
      }),
    }),
    refreshToken: build.mutation<RefreshTokenApiResponse, RefreshTokenApiArg>({
      query: (queryArg) => ({
        url: `/api/auth/refresh-token`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    login: build.mutation<LoginApiResponse, LoginApiArg>({
      query: (queryArg) => ({
        url: `/api/auth/login`,
        method: "POST",
        body: queryArg.loginRequest,
      }),
    }),
    getAreaById: build.query<GetAreaByIdApiResponse, GetAreaByIdApiArg>({
      query: (queryArg) => ({ url: `/api/areas/${queryArg.areaId}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as gtdApi };
export type RegisterApiResponse =
  /** status 201 User successfully registered */ AuthenticationResponse;
export type RegisterApiArg = {
  registerRequest: RegisterRequest;
};
export type RefreshTokenApiResponse =
  /** status 200 OK */ AuthenticationResponse;
export type RefreshTokenApiArg = {
  body: string;
};
export type LoginApiResponse = /** status 200 OK */ AuthenticationResponse;
export type LoginApiArg = {
  loginRequest: LoginRequest;
};
export type GetAreaByIdApiResponse = /** status 200 OK */ string;
export type GetAreaByIdApiArg = {
  /** Unique identifier of the area */
  areaId: string;
};
export type AuthenticationResponse = {
  /** Access token */
  accessToken: string;
  /** refresh token */
  refreshToken?: string;
};
export type ErrorResponse = {
  message?: string;
  errorCode?: string;
  error?: {
    cause?: {
      stackTrace?: {
        classLoaderName?: string;
        moduleName?: string;
        moduleVersion?: string;
        methodName?: string;
        fileName?: string;
        lineNumber?: number;
        className?: string;
        nativeMethod?: boolean;
      }[];
      message?: string;
      localizedMessage?: string;
    };
    stackTrace?: {
      classLoaderName?: string;
      moduleName?: string;
      moduleVersion?: string;
      methodName?: string;
      fileName?: string;
      lineNumber?: number;
      className?: string;
      nativeMethod?: boolean;
    }[];
    message?: string;
    suppressed?: {
      stackTrace?: {
        classLoaderName?: string;
        moduleName?: string;
        moduleVersion?: string;
        methodName?: string;
        fileName?: string;
        lineNumber?: number;
        className?: string;
        nativeMethod?: boolean;
      }[];
      message?: string;
      localizedMessage?: string;
    }[];
    localizedMessage?: string;
  };
};
export type RegisterRequest = {
  /** Email address of the new user */
  email: string;
  /** Password of the new user */
  password: string;
};
export type LoginRequest = {
  /** Email address of the new user */
  email: string;
  /** Password of the new user */
  password: string;
};
export const {
  useRegisterMutation,
  useRefreshTokenMutation,
  useLoginMutation,
  useGetAreaByIdQuery,
} = injectedRtkApi;
