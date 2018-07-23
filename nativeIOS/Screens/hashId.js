
export default function hash(){
  let hashed =((+new Date) + Math.random()* 100).toString(32)
  return hashed
}
