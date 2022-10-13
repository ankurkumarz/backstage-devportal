# Developar Portal

[Backstage](https://backstage.io/) based Developer Portal with following features:
- Create new application from existing templates (React, Java)
- CI/CD integration (currently Jenkins)
- Technical documentation
- Example applications

To start the app:
- Copy env.local to .env and update KEYS
- Run below commands:

```sh
yarn install --check-files
yarn tsc
yarn dev
```
## Plugins Integrated

### Frontend
- [GitHub Security Insights](https://roadie.io/backstage/plugins/security-insights/)- [Google Lighthouse](https://github.com/backstage/backstage/tree/master/plugins/lighthouse)
### Backend
- [SonarQube](https://github.com/backstage/backstage/blob/master/plugins/sonarqube/README.md)
- [Jenkins](https://github.com/backstage/backstage/tree/master/plugins/jenkins)
- [ADR](https://github.com/backstage/backstage/tree/master/plugins/adr)
- [ADR Backend](https://github.com/backstage/backstage/blob/master/plugins/adr-backend/README.md)
- [Cost Insights](https://github.com/backstage/backstage/blob/master/plugins/cost-insights/src/example/templates/CostInsightsClient.ts)
- New Relic
