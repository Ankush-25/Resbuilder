import jwt, { type JwtPayload, type SignOptions } from "jsonwebtoken";

export const genrateToken = (
  payload: object,
  refresh: boolean = false
): string => {
  const key: string = refresh
    ? (process.env.REFRESH_TOKEN_SECRET as string)
    : (process.env.ACCESS_TOKEN_SECRET as string);
  const time: number | string = refresh
    ? process.env.REFRESH_TOKEN_EXPIRE || "2d"
    : process.env.ACCESS_TOKEN_EXPIRE || "15m";
  const options: SignOptions = {
    expiresIn: time as any,
  };
  return jwt.sign(payload, key, options);
};

export const verifyAuthToken = (Token: string): string | JwtPayload => {
  const decoded: string | JwtPayload = jwt.verify(
    Token,
    process.env.REFRESH_TOKEN_SECRET as string
  );
  return decoded;
};
