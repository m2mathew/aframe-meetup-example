import fetchJsonp from 'fetch-jsonp'
import {List, Map} from 'immutable'

const API_ROOT = 'https://api.meetup.com'
//const GET_MEMBERS_URL = API_ROOT + '/2/rsvps?offset=0&format=json&event_id=233915902&photo-host=public&page=100&fields=&order=event&desc=false&sig_id=45273132&sig=a75637600bca84224283fb5dc2afcb73bb5f8bee'
const GET_MEMBERS_URL = API_ROOT + '/2/rsvps?offset=0&format=json&event_id=233915902&photo-host=public&page=100&fields=&order=event&desc=false&sig_id=5660110&sig=a8aaefdb29e1fbb4fcc078ad45f7131d6c707432'
export function getMembers() {
  return fetchJsonp(GET_MEMBERS_URL)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      let members = []

      for(let result of json.results) {
        if(result.member_photo) {
          members.push(Map({
            id: result.member.member_id,
            name: result.member.name,
            photo_url: result.member_photo.photo_link
          }))
        }
      }

      return List(members)
    })
}