export interface UserInterface {
  exp?: number;
  iss?: string;
  username?: string;
  email?: string;
  role_id?: string;
  office_id?: number;
  user_id?: string;
  is_all_office?: boolean;
  list_office?: string[] | [];
  secret_key?: string;
}
