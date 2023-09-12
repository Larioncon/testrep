enum Membership {
  Simple,
  Standart,
  Premium
}
const membership = Membership.Standart 
const membershipReverse = Membership[2]
console.log(membershipReverse)


enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}
let social = SocialMedia.INSTAGRAM
console.log(social)