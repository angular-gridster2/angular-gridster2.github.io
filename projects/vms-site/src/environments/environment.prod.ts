export const environment = {
  production: true,
  apiEndpoint: sysProcess.env.VMS_API_URL || "http://52.163.56.227:30052/vmsapi/",
  vmsSiteUserName: sysProcess.env.VMS_SITE_USER || "",
};
