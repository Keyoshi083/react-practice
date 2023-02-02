import "./App.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

const user = {
  name: "Kei",
  image: "https://source.unsplash.com/%E5%86%99%E7%9C%9F/T-0EW-SEbsE",
  email: "kei@unsplash.com",
  phone: "090-567-+222544",
  company: {
    name: "test株式会社",
  },
  website: "https://www.unsplash.com",
};

function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <PrimaryButton>検索</PrimaryButton>
      <SecondaryButton>セカンダリー</SecondaryButton>
      <SearchInput></SearchInput>
      <UserCard user={user} />
    </div>
  );
}

export default App;
