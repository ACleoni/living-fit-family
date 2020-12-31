const { doc } = require('prettier');

var docRef = db.collection('profileData').doc('Cox');

docRef
  .get()
  .then(function (doc) {
    if (doc.exists) {
      console.log('User Profile:', doc.data());
      var userInfo = doc.data();
      var userIncome = userInfo.income;
      console.log(userIncome);
    } else {
      // doc.data() will be undefined in this case
      console.log('Profile does not exist!');
    }
  })
  .catch(function (error) {
    console.log('ERROR:', error);
  });

async function getProfileData() {
  try {
    const doc = await docRef.get();

    if (doc) {
      const userInfo = await doc.data();
      const userIncome = userInfo.income;
      console.log(userIncome);
    }
  } catch (error) {
    console.log('ERROR:', error);
  }
}
