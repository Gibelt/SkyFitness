import styled from "styled-components";

export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  background: #d9d9d9;
  border-radius: 50px;
`;

export const ProfileName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

export const ProfileDropdown = styled.div`
  transform: rotate(45deg);
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  width: 8px;
  height: 8px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 140px;
  margin-top: 24px;
`;

export const ProfilePageWrapper = styled.div`
  width: 100%;
  margin-left: 140px;
`;

export const AppLogo = styled.img`
  width: 220px;
  height: 35px;
`;

export const ProfileTextHeader = styled.h1`
  margin-top: 75px;
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
`;

export const ProfileTextHeader2 = styled.h2`
  margin-top: 75px;
  margin-bottom: 60px;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
`;

export const ProfileTextRegular = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;
`;

export const ProfileInfoActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ProfileCourses = styled.div`
  margin-right: 140px;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  gap: 40px;
  justify-content: space-between;
`;

export const CourseCardActionButton = styled.div`
  margin-top: auto;
  margin-bottom: 27px;
`;

export const CourseCardStub = styled.div`
  width: 360px;
  height: 480px;
  border: 1px solid black;
`;

export const ProfileActionButtonStub = styled.div``;

export const CourseCardActionButtonStub = styled.div``;
