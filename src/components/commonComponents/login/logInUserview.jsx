/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as s from './loginViewStyle';

export default function LogInUserView() {
  
  return (
    <s.User>
      <s.UserImg />
      <s.UserText>
        <s.UserName>Сергей</s.UserName>
        <s.UserArrow>
          <s.UserArrowImg src="../../icons/arrow.svg" />
        </s.UserArrow>
      </s.UserText>
    </s.User>
  );
}
