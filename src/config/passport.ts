import * as passport from 'passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { ExtractJwt, StrategyOptions } from 'passport-jwt';
import { AppEnvs } from './envs';
import { ErrorHandler } from './exceptions';

export class PassportLoader {
  static _OPTS: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: AppEnvs.TOKEN_CONFIG.JWT.SECRET,
  };

  static load() {
    passport.use(
      new HeaderAPIKeyStrategy(
        { header: 'Authorization', prefix: 'x-api-key ' },
        false,
        function (apikey, done) {
          if (process.env.API_KEY == apikey) {
            return done(null, {});
          } else {
            return done(new ErrorHandler('unauthorized', 401));
          }
        },
      ),
    );
  }
}
