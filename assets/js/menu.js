const schoolList = document.querySelector("#schoolList");
const elemSchool = schoolList.querySelector("#elemSchool");
const middleSchool = schoolList.querySelector("#middleSchool");
const highSchool = schoolList.querySelector("#highSchool");
const inner = document.querySelector('#main > div');
const styles = document.querySelectorAll('#main > div > section > article'); // 각 링크 블록들

// const elemSchoolList = [
//   "횡성초등학교",
//   "성북초등학교",
//   "성남초등학교",
//   "창림초등학교",
//   "우천초등학교",
//   "정금초등학교",
//   "안흥초등학교",
//   "둔내초등학교",
//   "갑천초등학교",
//   "공근초등학교",
//   "수백초등학교",
//   "유현초등학교"
  
// ]; // 12
const elemSchoolList = {
  school: [
    { name: "횡성초등학교", link: "https://hoengseong.gwe.es.kr/boardCnts/list.do?s=hoengseong&m=0302&boardID=21508" },
    { name: "성북초등학교", link: "https://hsseongbuk.gwe.es.kr/boardCnts/list.do?boardID=65234&m=0607&s=songbukes" },
    { name: "성남초등학교", link: "https://hoengseong.gwe.es.kr/boardCnts/list.do?s=hoengseong&m=0302&boardID=21508" },
    { name: "창림초등학교", link: "https://hoengseong.gwe.es.kr/boardCnts/list.do?s=hoengseong&m=0302&boardID=21508" },
    { name: "우천초등학교", link: "https://hoengseong.gwe.es.kr/boardCnts/list.do?s=hoengseong&m=0302&boardID=21508" },
    { name: "정금초등학교", link: "https://hoengseong.gwe.es.kr/boardCnts/list.do?s=hoengseong&m=0302&boardID=21508" },
    { name: "안흥초등학교", link: "https://hoengseong.gwe.es.kr/boardCnts/list.do?s=hoengseong&m=0302&boardID=21508" },
    { name: "둔내초등학교", link: "https://hoengseong.gwe.es.kr/boardCnts/list.do?s=hoengseong&m=0302&boardID=21508" },
    { name: "갑천초등학교", link: "https://hoengseong.gwe.es.kr/boardCnts/list.do?s=hoengseong&m=0302&boardID=21508" },
    { name: "공근초등학교", link: "https://hoengseong.gwe.es.kr/boardCnts/list.do?s=hoengseong&m=0302&boardID=21508" },
    { name: "수백초등학교", link: "https://hoengseong.gwe.es.kr/boardCnts/list.do?s=hoengseong&m=0302&boardID=21508" },
    { name: "유현초등학교", link: "https://hoengseong.gwe.es.kr/boardCnts/list.do?s=hoengseong&m=0302&boardID=21508" },
  ]
};

const middleSchoolList = {
  school: [
    { name: "횡성중학교", link: ""},
    { name: "우천중학교", link: ""},
    { name: "안흥중학교", link: ""},
    { name: "둔내중학교", link: ""},
    { name: "갑천중학교", link: ""},
    { name: "공근중학교", link: ""},
    { name: "대동여자중학교", link: ""}
  ]
};
// const middleSchoolList = [
//   "횡성중학교",
//   "우천중학교",
//   "안흥중학교",
//   "둔내중학교",
//   "갑천중학교",
//   "공근중학교",
//   "대동여자중학교"
// ]; // 7

const highSchoolList = {
  school: [
    { name: "횡성고등학교", link: ""},
    { name: "횡성여자고등학교", link: ""},
    { name: "안흥고등학교", link: ""},
    { name: "둔내고등학교", link: ""},
    { name: "갑천고등학교", link: ""},
  ]
};

// const highSchoolList = [
//   "횡성고등학교",
//   "횡성여자고등학교",
//   "안흥고등학교",
//   "둔내고등학교",
//   "갑천고등학교"
// ]; // 5

const lengthOfElemSchoolList = elemSchoolList.length;
const lengthOfMiddleSchoolList = middleSchoolList.length;
const lengthOfHighSchoolList = highSchoolList.length;

const getLengthOf = function() {
  const schoolList = document.querySelectorAll('#main > div > section > article > a > h2');
  return schoolList.length;
};

// elementarySchool.addEventListener("click", () => {
  
// });

// middleSchool.addEventListener("click", () => {
  // const schoolName = inner.querySelectorAll(".tiles > article > a > h2");

  // changeTheSchoolList(middleSchoolList, schoolName);

  // deleteTheRemainingList(middleSchoolList, schoolName);  
// });

// highSchool.addEventListener("click", () => {
  // const schoolName = inner.querySelectorAll(".tiles > article > a > h2");
  // changeTheSchoolList(highSchoolList, schoolName);

  // deleteTheRemainingList(highSchoolList, schoolName)
// });

// function changeTheSchoolList(changeSchoolList, existingSchoolList) {
//   for (let idx = 0; idx < changeSchoolList.length; idx++) {
//     existingSchoolList[idx].innerHTML = changeSchoolList[idx];
//   }
// }

// function deleteTheRemainingList(changeSchoolList, existingSchoolList) {
//   const remainingList = changeSchoolList.length;
//   for (let idx = remainingList; idx < existingSchoolList.length; idx++) {
//     styles[idx].innerHTML = "";
//   }
// }

/**
 * 초등학교 -> 중학교 전환 시에 article 요소들 아래에 있는 요소들을 없애야함.
 * document.querySelector('.style1 > .image > img').src = ''
 * document.querySelector('.style1 > a > h2').innerHTML
 * 중학교 -> 초등학교 전환 시에 article 아래 요소들을 복구 해야함.
 * 고등학교 -> 초등학교 전환 시에 article 아래 요소들을 복구 해야함.
 * 고등학교 -> 중학교 전환 시에 article 아래 요소들을 복구 해야함.
 */