import {
  ForApiAuthRepo,
  LoginUserDto,
  RegisterUserDto,
  UserAuthRepo,
} from '@c18-04-m-node-react/api-modules';
import { Response, Request } from 'express';
import { JwtTokenUtility } from '../utilities';
import { handleError } from '../../../../utilities';

export class ApiAuthControllerRepoImp implements ForApiAuthRepo {
  private handleError: (error: unknown, res: Response) => void;
  constructor(private readonly userAuthRepo: UserAuthRepo) {
    this.handleError = handleError;
  }

  login = (req: Request, res: Response) => {
    const [error, userData] = LoginUserDto.login(req.body);
    if (error) {
      return res.status(400).json(error);
    }
    this.userAuthRepo
      .loginUser(userData)
      .then((user) => {
        const token = JwtTokenUtility.createToken(user.id, '1h');
        return res.status(200).json({ token: token });
      })
      .catch((error) => {
        this.handleError(error, res);
      });
  };

  register = (req: Request, res: Response) => {
    const [error, createUser] = RegisterUserDto.register(req.body);

    if (error) {
      return res.status(400).json(error);
    }
    this.userAuthRepo
      .registerUser(createUser)
      .then((user) => {
        return res.status(201).json(user);
      })
      .catch((error) => {
        this.handleError(error, res);
      });
  };
}
