declare var sysProcess: Process;

interface Process {
    env: Env;
}

interface Env {
    VMS_API_URL: string;
}

interface GlobalEnvironment {
    sysProcess: Process;
}