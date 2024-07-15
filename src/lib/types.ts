export type TJwtToken = {
  token_type: "access";
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
};

export type TTransaction = {
  sender: number;
  recipient: string;
  amount: number;
  transaction_hash: string;
  status: string;
  timestamp: string;
  block_number: string;
  fee: string;
};
