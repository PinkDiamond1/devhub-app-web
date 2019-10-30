/*
Copyright 2019 Province of British Columbia

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at 

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Created by Patrick Simonian
*/
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
  flex: 1 0 200px;
  background-color: #e0e0e0;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 260px;
    position: fixed;
    left: 0;
    bottom: 47px;
    top: 52px;
  }
  @media print {
    display: none;
  }
`;
const SidePanel = ({ children }) => <Container>{children}</Container>;

SidePanel.propTypes = {
  children: PropTypes.node,
};

export default SidePanel;
