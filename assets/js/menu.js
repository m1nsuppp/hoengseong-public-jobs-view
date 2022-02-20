const schoolList = document.querySelector("#schoolList");
const elementarySchool = schoolList.querySelector("#elementarySchool");
const middleSchool = schoolList.querySelector("#middleSchool");
const highSchool = schoolList.querySelector("#highSchool");
const inner = document.querySelector("#main .inner");
const styles = document.querySelectorAll("#main > div > section > article");

const middleSchoolList = [
  "횡성중학교",
  "우천중학교",
  "안흥중학교",
  "둔내중학교",
  "갑천중학교",
  "공근중학교",
  "대동여자중학교",
];

const highSchoolList = [
  "횡성고등학교",
  "횡성여자고등학교",
  "안흥고등학교",
  "둔내고등학교",
  "갑천고등학교"
];


middleSchool.addEventListener("click", () => {
  const schoolName = inner.querySelectorAll(".tiles > article > a > h2");

  changeTheSchoolList(middleSchoolList, schoolName);

  deleteTheRemainingList(middleSchoolList, schoolName);  
});

highSchool.addEventListener("click", () => {
  const schoolName = inner.querySelectorAll(".tiles > article > a > h2");

  changeTheSchoolList(highSchoolList, schoolName);

  deleteTheRemainingList(highSchoolList, schoolName)
});

function changeTheSchoolList(changeSchoolList, existingSchoolList) {
  for (let idx = 0; idx < changeSchoolList.length; idx++) {
    existingSchoolList[idx].innerHTML = changeSchoolList[idx];
  }
}

function deleteTheRemainingList(changeSchoolList, existingSchoolList) {
  const remainingList = changeSchoolList.length;
  for (let idx = remainingList; idx < existingSchoolList.length; idx++) {
    styles[idx].innerHTML = "";
  }
} 