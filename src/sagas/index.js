import SignupSaga from "./signup";
import LoginSaga from "./login";

export default function* IndexSaga() {
  yield [SignupSaga(), LoginSaga()];
}
