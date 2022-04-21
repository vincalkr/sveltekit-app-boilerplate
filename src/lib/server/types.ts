export interface UserInfo {
  id: string;
  email: string;
}

export interface CreateContextOutput {
  user: UserInfo | null;
}