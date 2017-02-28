// @flow

export type User = {
  uid: string,
  email: string
}

export type Post = {
  uid: string, 
  email: string, 
  text: string, 
  created: Date
}

export type NoteBody = {
  posts: Array<Post>
}

export type Note = {
  id: number,
  title: string,
  notify: boolean,
  closed: boolean,
  desc: string,
  uid: string,
  email: string,
  body: NoteBody,
}
