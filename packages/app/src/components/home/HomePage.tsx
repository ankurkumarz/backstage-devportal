/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
    HomePageToolkit,
    HomePageStarredEntities,
    HeaderWorldClock,
    ClockConfig,
    TemplateBackstageLogoIcon
  } from '@backstage/plugin-home';
  import { wrapInTestApp } from '@backstage/test-utils';
  import { Content, Page, InfoCard } from '@backstage/core-components';
  import {
    HomePageSearchBar,
  } from '@backstage/plugin-search';
  import { SearchContextProvider } from '@backstage/plugin-search-react';
  import { Grid, makeStyles } from '@material-ui/core';
  import React, { ComponentType } from 'react';
  import { Header } from '@backstage/core-components';
  import {
    identityApiRef,
    useApi,
  } from '@backstage/core-plugin-api';
  import { getTimeBasedGreeting } from './timeUtil.js'
  
  export default {
    title: 'Plugins/Home/Components/HeaderWorldClock',
    decorators: [(Story: ComponentType<{}>) => wrapInTestApp(<Story />)],
  };
  
  const useStyles = makeStyles(theme => ({
    searchBar: {
      display: 'flex',
      maxWidth: '60vw',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[1],
      padding: '8px 0',
      borderRadius: '50px',
      margin: 'auto',
    },
    headerBar: {
        display: 'flex',
        color: 'red',
      },
  }));
  const timeFormat: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
  };
  const clockConfigs: ClockConfig[] = [
       {
         label: 'NYC',
          timeZone: 'America/New_York',
        },
        {
          label: 'UTC',
          timeZone: 'UTC',
        },
        {
          label: 'STO',
          timeZone: 'Europe/Stockholm',
        },
        {
          label: 'IST',
          timeZone: 'Asia/Kolkata',
        },
  ];
  const greeting = getTimeBasedGreeting();

  export const HomePage = () => {
    const classes = useStyles();
    const identityApi = useApi(identityApiRef);
    const userName = identityApi.getUserId();
    return (
      <SearchContextProvider>
        <Page themeId="home">
          <Content>
          <Header
                 title={`${greeting.greeting}, ${userName}`}
                 tooltip={greeting.language}
                 pageTitleOverride="Home">
               <HeaderWorldClock
                  clockConfigs={clockConfigs}
                  customTimeFormat={timeFormat}
                />  
            </Header>
            <Grid container justifyContent="center" spacing={6}>
              <Grid container item xs={12} direction="row">
                
              </Grid>
              <Grid container item xs={12} alignItems="center" direction="row">
                <HomePageSearchBar
                  classes={{ root: classes.searchBar }}
                  placeholder="Search"
                />
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={12} md={6}>
                  <HomePageStarredEntities />
                </Grid>
                <Grid item xs={12} md={6}>
                <InfoCard title="Technology Updates/News">
                    <div>
                        <ul>
                            <li>Technology conference is coming up in Q4 2022</li>
                            <li>New version of Application A will be released in Q1 2023</li>
                            <li>Enterprise Architecture team published new standards for Cloud</li>
                        </ul>
                    </div>
                  </InfoCard>
                </Grid>
                <Grid item xs={12} md={6}>
                  <HomePageToolkit
                    tools={Array(8).fill({
                      url: '#',
                      label: 'link',
                      icon: <TemplateBackstageLogoIcon />,
                    })}
                  />
                </Grid>

              </Grid>
            </Grid>
          </Content>
        </Page>
      </SearchContextProvider>
    );
  };