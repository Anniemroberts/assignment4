const Express = require('express');
const router = Express.Router()


router.get('/', function (req, res) {
  res.render('index');
})

router.post('/', function(req, res) {
  const params = req.body;
  const groups = {
    groups: makeGroups(params.nameInput, params.numSelect, params.userNum)
  };

  function makeGroups(nameInput, numSelect, userNum) {

    let choice = numSelect;
    let groupObj = {};
    let nameArr = nameInput.split(",");
    let perGroup = (nameArr.length / userNum);
    let numTeams = Math.round(nameArr.length / userNum);

    if(nameArr.length < userNum) {
      groupObj.Error = ("You have specified too many groups or people per team.");
      return groupObj;
    } else if (numSelect === "team") {
      for(let i = 0; i < numTeams; i++) {
        let indivGroup = [];
        for(let i = 0; i < userNum; i++) {
          indivGroup.push(String(nameArr.splice((Math.floor(Math.random() * nameArr.length)), 1)))
        }
        groupObj[i + 1] = indivGroup.join().replace(',', ' ');
      }
      return groupObj;
    } else {
      for(let i = 0; i < userNum; i++) {
        let indivGroup = [];
        for(let i = 0; i < perGroup; i++) {
          indivGroup.push(String(nameArr.splice((Math.floor(Math.random() * nameArr.length)), 1)))
        }
        groupObj[i + 1] = indivGroup.join().replace(',', ' ');
      }
      console.log(choice);
      return groupObj;
    }
  }
    res.render('groupresult', groups);
});


module.exports = router;
