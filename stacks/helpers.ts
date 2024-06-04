export const envNames = ["prod", "staging", "dev"] as const;
type EnvNames = (typeof envNames)[number];

export const hostedZone = "6notes.ca";

export function getDomainNameForEnv(environment: EnvNames) {
  if (environment === "prod") {
    return { apiDomainName: `api.${hostedZone}`, domainName: hostedZone };
  }
  const domainName = `${environment}.${hostedZone}`;
  const apiDomainName = `api-${domainName}`;
  return { domainName, apiDomainName };
}
