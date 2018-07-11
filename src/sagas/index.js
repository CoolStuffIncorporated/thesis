import SignupSaga from "./signup";
import LoginSaga from "./login";
import BlogSaga from "./blog";

export default function* IndexSaga() {
  yield [SignupSaga(), LoginSaga(), BlogSaga()];
}
