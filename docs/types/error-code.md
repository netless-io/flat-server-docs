# Type ErrorCode

## Description

Request Error Code

## Definition

```ts
enum ErrorCode {
    ParamsCheckFailed = 100000,
    ServerFail,
    CurrentProcessFailed,
    NotPermission,
    NeedLoginAgain,
    UnsupportedPlatform,
    JWTSignFailed,
    ExhaustiveAttack,
    RequestSignatureIncorrect,
    NonCompliant,
    UnsupportedOperation,

    RoomNotFound = 200000,
    RoomIsEnded,
    RoomIsRunning,
    RoomNotIsRunning,
    RoomNotIsEnded,
    RoomNotIsIdle,

    PeriodicNotFound = 300000,
    PeriodicIsEnded,
    PeriodicSubRoomHasRunning,

    UserNotFound = 400000,
    UserRoomListNotEmpty,
    UserAlreadyBinding,

    RecordNotFound = 500000,

    UploadConcurrentLimit = 700000,
    NotEnoughTotalUsage,
    FileSizeTooBig,
    FileNotFound,
    FileExists,
    DirectoryNotExists,
    DirectoryAlreadyExists,

    FileIsConverted = 800000,
    FileConvertFailed,
    FileIsConverting,
    FileIsConvertWaiting,
    FileNotIsConvertNone,
    FileNotIsConverting,

    LoginGithubSuspended = 900000,
    LoginGithubURLMismatch,
    LoginGithubAccessDenied,

    SMSVerificationCodeInvalid = 110000,
    SMSAlreadyExist,
    SMSAlreadyBinding,

    CensorshipFailed = 120000,

    OAuthUUIDNotFound = 130000,
    OAuthClientIDNotFound,
    OAuthSecretUUIDNotFound,
}
```

### ParamsCheckFailed = 100000

Request parameter validation failure

### ServerFail = 100001

The server itself has encountered an unknown error

### CurrentProcessFailed = 100002

An error occurred while processing the request and may exist: MySQL write failure, etc.

### NotPermission = 100003

Insufficient operational privileges

### NeedLoginAgain = 100004

Need to log in again

### UnsupportedPlatform = 100005

Current platform is not supported, e.g. unknown login platform

### JWTSignFailed = 100006

The JWT token checksum failed, possibly due to an expired token, etc.

### ExhaustiveAttack = 100007

The requests were too frequent, causing the server to think it was a hack.

### RequestSignatureIncorrect = 100008

Request signature verification failure

### NonCompliant = 100009

Non-compliance, e.g. pornographic images, offending text, etc.

### UnsupportedOperation = 100010

The current operation is not supported, e.g. repeated binding of the same account, etc.

### RoomNotFound = 200000

Room not found

### RoomIsEnded = 200001

Room status is end

### RoomIsRunning = 200002

Room is running

### RoomNotIsRunning = 200003

Room not running

### RoomNotIsEnded = 200004

Room not is end

### RoomNotIsIdle = 200005

Room not is idle

### PeriodicNotFound = 300000

Periodic not found

### PeriodicIsEnded = 300001

Periodic is ended

### PeriodicSubRoomHasRunning = 300002

Periodic sub room has running

### UserNotFound = 400000

User not found

### UserRoomListNotEmpty = 400001

The current user's room list is empty

### UserAlreadyBinding = 400002

The platform account to which you are tied has been tied by flat other users

### RecordNotFound = 500000

Record info not found

### UploadConcurrentLimit = 700000

Upload concurrency exceeds threshold

### NotEnoughTotalUsage = 700001

Current user has insufficient space left

### FileSizeTooBig = 700002

Exceed the size limit for the file to be uploaded

### FileNotFound = 700003

File not found

### FileExists = 700004

file already exists

### DirectoryNotExists = 700005

Directory not exists

### DirectoryAlreadyExists = 700006

Directory already exists

### FileIsConverted = 800000

File is already converted

### FileConvertFailed = 800001

File convert failed

### FileIsConverting = 800002

File is converting

### FileIsConvertWaiting = 800003

File is convert wating

### FileNotIsConvertNone = 800004

File [convertStep](/types/file-convert-step) not is [ConvertStep.None](/types/file-convert-step)

### FileNotIsConverting = 800005

File [convertStep](/types/file-convert-step) not is [ConvertStep.Converting](/types/file-convert-step)

### LoginGithubSuspended = 900000

For more information: [Application suspended](https://docs.github.com/en/developers/apps/managing-oauth-apps/troubleshooting-authorization-request-errors#application-suspended)

### LoginGithubURLMismatch = 900001

For more information: [Redirect URI mismatch](https://docs.github.com/en/developers/apps/managing-oauth-apps/troubleshooting-authorization-request-errors#redirect-uri-mismatch)

### LoginGithubAccessDenied = 900002

For more information: [Access denied](https://docs.github.com/en/developers/apps/managing-oauth-apps/troubleshooting-authorization-request-errors#access-denied)

### SMSVerificationCodeInvalid = 110000

SMS verification code failure

### SMSAlreadyExist = 110001

Mobile number already registered

### SMSAlreadyBinding = 110002

Mobile number is already binding

### CensorshipFailed = 120000

There is a content irregularity

### OAuthUUIDNotFound = 130000

oauth uuid not found

### OAuthClientIDNotFound = 130001

oauth client id not found

### OAuthSecretUUIDNotFound = 130002

oauth secret uuid not found
