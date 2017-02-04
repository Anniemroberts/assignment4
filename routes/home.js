const Express = require('express');
const router = Express.Router()
const app = Express();


router.get('/', function (req, res) {
  res.render('index');
})

router.post('/', function(req, res) {
  const params = req.body;
  const groups = {
    groups: makeGroups(params.nameInput, params.numSelect, params.userChoice)
  };
  console.log(groups);
    res.render('groupresult', groups);
});


function makeGroups(nameInput, numSelect, userChoice) {
  let choice = numSelect;
  let groupObj = {};
  let nameArr = nameInput.split(",");
  let extra = [];
  let userNum = parseInt(userChoice);

  if(nameArr.length % userNum != 0) {
    let remainder = nameArr.length % userNum;
    extra.push(nameArr.splice((Math.floor(Math.random() * nameArr.length)), remainder));
  };

  let perGroup = (nameArr.length / userNum == 1) ? 1 : Math.floor(nameArr.length / userNum);

//STRETCHES 2 & 3
//let numTeams = Math.round(nameArr.length / userNum);
  // if(nameArr.length < userNum) {
  //   groupObj.Error = ("You have specified too many groups or people per team.");
  //   return groupObj;
  //
  // if (numSelect === "numperteam") {
  //   for(let i = 0; i < numTeams; i++) {
  //     let indivGroup = [];
  //     for(let i = 0; i < userNum; i++) {
  //       indivGroup.push(String(nameArr.splice((Math.floor(Math.random() * nameArr.length)), 1)))
  //     }
  //     groupObj[i + 1] = indivGroup.join().replace(',', ' ');
  //   }
  //   return groupObj;
  //
  // } else {

    for(let i = 0; i < userNum; i++) {
      let indivGroup = [];
      for(let i = 0; i < perGroup; i++) {
        indivGroup.push(nameArr.splice((Math.floor(Math.random() * nameArr.length)), 1));
        if(i === perGroup - 1 && extra.length != 0) { indivGroup.push(extra[0].splice(0, 1))};
      }
      groupObj[i + 1] = indivGroup.join().replace(',', ' ');
    }
    return groupObj;
 // }
}


module.exports = router;
