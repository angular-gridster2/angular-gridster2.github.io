declare var sysProcess: Process;

interface Process {
    env: Env;
}

interface Env {
    VMS_API_URL: string;
    VMS_SITE_USER: string;
}

interface GlobalEnvironment {
    sysProcess: Process;
}