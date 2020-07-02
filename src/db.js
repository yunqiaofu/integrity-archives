import Dexie from 'dexie'

const db = new Dexie('db')
db.version(1).stores({
  pd: 'flagStr'
})
db.version(2).stores({
  doc: '&examUID'
})

export default db
